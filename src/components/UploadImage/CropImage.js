import React, { Component } from "react";
import { Row, Col, Card, Image } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSave, faTimesCircle } from '@fortawesome/free-regular-svg-icons';
import { faDownload } from '@fortawesome/free-solid-svg-icons';
import { toast } from "react-toastify";
import uuidV4 from "uuid/v4";
import Cropper from 'cropperjs';

import  Tooltip from "../Tooltip/Tooltip";
import ImageService from "./ImageService";

import "./cropper.css"

// https://fengyuanchen.github.io/cropperjs/
// https://www.npmjs.com/package/react-image-file-resizer

class CropImage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            src: null,
            croppedImageUrl: null,
            isError: true
        }

        this.downloadCroppedImg = this.downloadCroppedImg.bind(this);
        this.parseCroppedImage = this.parseCroppedImage.bind(this);
        this.start = this.start.bind(this);
    }

    /*************************************************************************/
    /************************** STANDARD *************************************/
    /*************************************************************************/
    componentDidMount() {
        this.setState({
            src: this.props.src
        }, () => {
            this.start();
        })
    }

    checkCroppedDimensionsErrors(props, croppedWidth, croppedHeight, showMessage) {
        var { minCroppedWidth, maxCroppedWidth, minCroppedHeight, maxCroppedHeight, localization } = props;
        var isError = false;

        if (minCroppedWidth != null && croppedWidth < minCroppedWidth) {
            isError = true;
            if (showMessage == true) {
                toast.warn(localization.minCroppedWidth || "minCroppedWidth");
            }
        }
        if (maxCroppedWidth != null && croppedWidth > maxCroppedWidth) {
            isError = true;
            if (showMessage == true) {
                toast.warn(localization.maxCroppedWidth || "maxCroppedWidth");
            }
        }

        if (minCroppedHeight != null && croppedHeight < minCroppedHeight) {
            isError = true;
            if (showMessage == true) {
                toast.warn(localization.minCroppedHeight || "minCroppedHeight");
            }
        }
        if (maxCroppedHeight != null && croppedHeight > maxCroppedHeight) {
            isError = true;
            if (showMessage == true) {
                toast.warn(localization.maxCroppedHeight || "maxCroppedHeight");
            }
        }

        return isError;
    }

    start() {
        var self = this;
        var aspectRatio = null;
        if (self.props.aspectRatio) {
            aspectRatio = self.props.aspectRatio.split(":");
            aspectRatio = parseInt(aspectRatio[0]) / parseInt(aspectRatio[1]);
        }

        const image = document.getElementById('image');
        self.cropper = new Cropper(image, {
            zoomable: false,
            aspectRatio: aspectRatio,
            minCropBoxWidth: self.props.minCroppedWidth,
            minCropBoxHeight: self.props.minCroppedHeight,
            data: {
                x: 0,
                y: 0,
                width: self.props.startWidthCrop || 10,
                height: self.props.startHeightCrop || 10
            },
            crop(event) {
                var width = event.detail.width;
                var height = event.detail.height;

                var { minCroppedWidth, maxCroppedWidth, minCroppedHeight, maxCroppedHeight } = self.props;
                var isError = self.checkCroppedDimensionsErrors(self.props, width, height);

                if (isError == false) {
                    self.cropper.setData({
                        width: Math.max(minCroppedWidth, Math.min(maxCroppedWidth, width)),
                        height: Math.max(minCroppedHeight, Math.min(maxCroppedHeight, height)),
                    });
                }
            },
            cropend(event) {
                var croppedCanvas = self.cropper.getCroppedCanvas();

                var croppedImageUrl = croppedCanvas.toDataURL();

                var cropped_width = croppedCanvas.width;
                var cropped_height = croppedCanvas.height;
                var isError = self.checkCroppedDimensionsErrors(self.props, cropped_width, cropped_height, true);

                self.setState({
                    croppedImageUrl: croppedImageUrl,
                    isError: isError
                })
            }
        });
    }

    /*************************************************************************/
    /************************** UPLOAD MANAGEMENT ****************************/
    /*************************************************************************/
    downloadCroppedImg() {
        var { croppedImageUrl, isError } = this.state;
        if (croppedImageUrl != null && isError == false) {
            fetch(this.state.croppedImageUrl, {
                method: "GET",
                headers: {}
            })
                .then(response => {
                    response.arrayBuffer().then(function (buffer) {
                        const url = window.URL.createObjectURL(new Blob([buffer]));
                        const link = document.createElement("a");
                        link.href = url;
                        link.setAttribute("download", "image.png"); //or any other extension
                        document.body.appendChild(link);
                        link.click();
                    });
                })
                .catch(err => {
                    console.log(err);
                });
        }
    }

    parseCroppedImage() {
        var self = this;
        var { croppedImageUrl, isError } = this.state;

        if (isError == false && croppedImageUrl != null) {
            fetch(croppedImageUrl)
                .then((result) => {
                    return result.blob();
                })
                .then((blobFile) => {
                    return new File([blobFile], "cropped.png", { type: "image/png" });
                })
                .then((newFile) => {
                    newFile.uid = uuidV4();
                    newFile.url = croppedImageUrl;

                    return ImageService.batchCompress(newFile);
                })
                .then((response) => {
                    var files = response.map(f => {
                        f.uid = uuidV4();
                        return f;
                    });

                    self.props.onSave(croppedImageUrl, files)
                })
        }
    }

    /*************************************************************************/
    /************************** RENDER ***************************************/
    /*************************************************************************/
    render() {
        var { localization } = this.props;
        var { src, croppedImageUrl, isError } = this.state;

        var downloadClassname = isError == true ? "cropper_download_icon_disabled" : "cropper_download_icon";
        var saveClassname = isError == true ? "cropper_save_icon_disabled" : "cropper_save_icon";

        return (
            <Card>
                <Card.Header>
                    <span style={{ float: "right" }}>
                        <Tooltip tooltip={localization.download || "Download"}>
                            <FontAwesomeIcon className={downloadClassname} icon={faDownload} onClick={this.downloadCroppedImg} />
                        </Tooltip>
                        <Tooltip tooltip={localization.save || "Save"}>
                            <FontAwesomeIcon className={saveClassname} icon={faSave} onClick={() => { this.parseCroppedImage() }} />
                        </Tooltip>
                        <Tooltip tooltip={localization.cancel || "Cancel"}>
                            <FontAwesomeIcon className="cropper_close_icon" icon={faTimesCircle} onClick={this.props.onClose} />
                        </Tooltip>
                    </span>
                </Card.Header>
                <Card.Body>
                    <Row>
                        <Col sm={5}>
                            {localization.loaded_image_to_crop || "Loaded image to crop"}
                        </Col>
                        <Col sm={2} />
                        <Col sm={5}>
                            {localization.cropped_image || "Cropped image"}
                        </Col>
                    </Row>
                    <Row className="margin_top_row">
                        <Col sm={5}>
                            <Image src={src} id="image" fluid />
                        </Col>
                        <Col sm={2} />
                        <Col sm={5}>
                            {croppedImageUrl == null &&
                                <div>
                                    {localization.crop_message || "Crop the image by creating or moving the 'cropping window'!"}
                                </div>
                            }
                            {croppedImageUrl &&
                                <Image src={croppedImageUrl} fluid />
                            }
                        </Col>
                    </Row>
                </Card.Body>
            </Card>
        )
    }
}
export default CropImage;