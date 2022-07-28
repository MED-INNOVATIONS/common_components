import React, { Component } from "react";
import { Row, Col, Button, Modal, Card, Image as ReactBootstrapImage } from 'react-bootstrap';
import { toast } from "react-toastify";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimesCircle } from '@fortawesome/free-regular-svg-icons';
import { faUpload, faTrashAlt, faEye } from '@fortawesome/free-solid-svg-icons';
import Resizer from 'react-image-file-resizer';

import Tooltip from "../Tooltip/Tooltip";
import CropImage from "./CropImage";

import "./uploadImage.css";


class UploadImage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showPreviewImage: false,
            showCropModal: false,
            image: this.props.image,
            imageToCropSrc: null,
            imageToCrop: null
        }

        this.checkImageRatioAndDimensions = this.checkImageRatioAndDimensions.bind(this);
        this.handleFileUpload = this.handleFileUpload.bind(this);
        this.manageUploadedFile = this.manageUploadedFile.bind(this);
        this.onRemove = this.onRemove.bind(this);
        this.saveCrop = this.saveCrop.bind(this);
    }

    /*************************************************************************/
    /************************** STANDARD *************************************/
    /*************************************************************************/
    componentWillReceiveProps(nextProps) {
        if (nextProps.image != this.state.image) {
            this.setState({
                image: nextProps.image
            })
        }
    }

    /*************************************************************************/
    /************************** UPLOAD IMAGE FROM INPUT  *********************/
    /*************************************************************************/
    handleFileUpload(e) {
        var self = this;

        var files = e.target.files;
        if (files.length > 0) {
            var fileSrc = files[0];
            var reader = new FileReader();
            reader.onload = function () {
                var data = reader.result;
                self.manageUploadedFile(data, fileSrc);
            };
            reader.readAsDataURL(fileSrc);
        } else {

        }
    }

    checkImageRatioAndDimensions(uploadedImage) {
        var self = this;
        return new Promise(function (resolve, reject) {
            var { localization, sizeConstraints, ratio, imageSize, cropProperties } = self.props;
            var { constraints, minHeight, maxHeight, minWidth, maxWidth } = sizeConstraints || {};
            var { cropImage } = cropProperties || {};
            var isError = false;

            try {
                var currentImageSize = (uploadedImage.length * (3 / 4)) - 1;
                currentImageSize = currentImageSize / 1048576;
                if (cropImage != true && imageSize != null && currentImageSize > imageSize) {
                    var message = (localization.imageSizeMustBeAtMost || "Image size must be at most") + " " + imageSize.toString() + "MB";
                    toast.warn(message);
                    resolve(true);
                    return;
                }

                var image = new Image();
                image.onload = function () {
                    var imageWidth = this.width;
                    var imageHeight = this.height;

                    if (ratio && cropImage != true) {
                        var imageRatio = imageWidth / imageHeight;

                        var tmpRatio = ratio.split(":");
                        var tmpRatio = tmpRatio[0] / tmpRatio[1];

                        if (imageRatio != tmpRatio) {
                            isError = true;
                            var message = (localization.errorAspectRatio || "Aspect ratio must be") + " " + ratio;
                            toast.warn(message);
                            reject();
                            return;
                        }
                    }

                    if (constraints == true) {
                        if (imageWidth < minWidth) {
                            isError = true;
                            var message = localization.imageDimensionsConstraintsAtLeast || "Image dimensions must be at least";
                            message = message + " " + minWidth + "x" + minHeight + " pixel";
                            toast.warn(message);
                        } else if (imageWidth > maxWidth) {
                            isError = true;
                            var message = localization.imageDimensionsConstraintsAtMost || "Image dimensions must be at most";
                            message = message + " " + maxWidth + "x" + maxHeight + " pixel";;
                            toast.warn(message);
                        } else if (imageHeight < minHeight) {
                            isError = true;
                            var message = localization.imageDimensionsConstraintsAtLeast || "Image dimensions must be at least";
                            message = message + " " + minWidth + "x" + minHeight + " pixel";;
                            toast.warn(message);
                        } else if (imageHeight > maxHeight) {
                            isError = true;
                            var message = localization.imageDimensionsConstraintsAtMost || "Image dimensions must be at most";
                            message = message + " " + maxWidth + "x" + maxHeight + " pixel";;
                            toast.warn(message);
                        }

                        if (isError == true) {
                            reject();
                        } else {
                            resolve();
                            return;
                        }
                    }

                    resolve();
                    return;
                }
                image.src = uploadedImage;
            } catch (e) {
                reject(e);
                console.error(e);
                toast.error(localization.errorUploadingImage || "Error uploading image");
            }
        })
    }

    manageUploadedFile(uploadedImage, fileSrc) {
        var self = this;
        var { localization, resizeProperties, cropProperties } = this.props;
        var { resizeImage, resizeHeight, resizeWidth, } = resizeProperties || {};
        var { cropImage } = cropProperties || {};

        self.checkImageRatioAndDimensions(uploadedImage)
            .then(() => {
                if (resizeImage == true) {
                    self.fileChangedHandler(fileSrc, resizeWidth, resizeHeight)
                        .then((data) => {
                            if (cropImage == true) {
                                self.setState({
                                    imageToCrop: data,
                                    imageToCropSrc: fileSrc,
                                    showCropModal: true
                                })
                            } else {
                                self.props.onChange(data);
                            }
                        })
                        .catch((error) => {
                            console.error(error);
                            toast.error(localization.errorResizingImage || "Error resizing image")
                        })
                } else if (cropImage == true) {
                    self.setState({
                        imageToCrop: uploadedImage,
                        imageToCropSrc: fileSrc,
                        showCropModal: true
                    })
                } else {
                    self.props.onChange(uploadedImage);
                }
            })
            .catch((e) => {

            })
    }

    /*************************************************************************/
    /************************** RESIZE IMAGE MANAGEMENT **********************/
    /*************************************************************************/
    fileChangedHandler(input, newWidth, newHeight) {
        return new Promise(function (resolve, reject) {
            try {
                if (input && (newWidth != null || newHeight != null)) {
                    Resizer.imageFileResizer(
                        input,
                        newWidth || 5000,
                        newHeight || 5000,
                        'PNG',
                        100,
                        0,
                        uri => {
                            resolve(uri);
                        },
                        'base64',
                        newWidth || 1,
                        newHeight || 1
                    );
                }
            } catch (e) {
                console.error("Error resizing image; " + e);
                reject(e);
            }
        })
    }

    /*************************************************************************/
    /************************** RENDER ***************************************/
    /*************************************************************************/
    saveCrop(data) {
        var self = this;
        if (this.props.onChange) {
            this.setState({
                showCropModal: false
            }, () => {
                var { localization, imageSize } = self.props;

                var currentImageSize = (data.length * (3 / 4)) - 1;
                currentImageSize = currentImageSize / 1048576;
                if (imageSize != null && currentImageSize > imageSize) {
                    var message = (localization.imageSizeMustBeAtMost || "Image size must be at most") + " " + imageSize.toString() + "MB";
                    toast.warn(message);
                } else {
                    self.props.onChange(data);
                }
            })
        }
    }

    onRemove() {
        if (this.props.onRemove) {
            this.setState({
                showCropModal: false
            }, () => {
                this.props.onRemove();
            })
        } else {
            this.setState({
                image: null
            })
        }
    }

    render() {
        var { disabled, localization, cropProperties, error, errorMessage, ratio } = this.props;
        var { image, showPreviewImage, showCropModal } = this.state;
        var { imageToCropSrc, imageToCrop } = this.state;

        cropProperties = cropProperties || {};

        return (
            <div>
                <Row>
                    <Col sm={12}>
                        {image != null &&
                            <div>
                                <div className="upload_image_crud_buttons">
                                    <FontAwesomeIcon className="delete_image_icon" icon={faTrashAlt} onClick={this.onRemove} />
                                    <FontAwesomeIcon className="view_image_icon" icon={faEye} onClick={() => { this.setState({ showPreviewImage: true }) }} />
                                </div>
                                <div className="upload_image_box">
                                    <ReactBootstrapImage src={image} fluid />
                                </div>
                            </div>
                        }
                        {image == null &&
                            <div className="upload_image_box">
                                <React.Fragment>
                                    <input
                                        ref="fileInput"
                                        onChange={this.handleFileUpload}
                                        type="file"
                                        accept="image/*"
                                        style={{ display: "none" }}
                                        multiple={false}>
                                    </input>
                                    <Button disabled={disabled} variant="outline-secondary" className={error == true ? "upload_image_button_error" : "upload_image_button"} onClick={() => this.refs.fileInput.click()}>
                                        <FontAwesomeIcon icon={faUpload} onClick={this.props.onCancel} />
                                    </Button>
                                </React.Fragment>
                            </div>
                        }
                    </Col>
                </Row>
                {error == true && <Row>
                    <Col>
                        <div className="upload_image_error_message">
                            {errorMessage || "Error"}
                        </div>
                    </Col>
                </Row>
                }
                <Modal
                    onHide={() => { }}
                    size="xl"
                    show={showPreviewImage}>
                    <Modal.Body>
                        <Card>
                            <Card.Header>
                                <span style={{ float: "right" }}>
                                    <Tooltip tooltip={localization.cancel || "Cancel"}>
                                        <FontAwesomeIcon className="edit_header_icon_close" icon={faTimesCircle} onClick={() => { this.setState({ showPreviewImage: false }) }} />
                                    </Tooltip>
                                </span>
                            </Card.Header>
                            <Card.Body>
                                <ReactBootstrapImage src={image} fluid />
                            </Card.Body>
                        </Card>
                    </Modal.Body>
                </Modal>
                <Modal
                    onHide={() => { }}
                    size="xl"
                    show={showCropModal}>
                    <CropImage
                        aspectRatio={ratio}
                        localization={localization}
                        avoidResize={true}

                        startHeightCrop={cropProperties.startHeightCrop}
                        startWidthCrop={cropProperties.startWidthCrop}


                        minCroppedHeight={cropProperties.minCroppedHeight}
                        minCroppedWidth={cropProperties.minCroppedWidth}
                        maxCroppedHeight={cropProperties.maxCroppedHeight}
                        maxCroppedWidth={cropProperties.maxCroppedWidth}

                        fileSrc={imageToCropSrc}
                        src={imageToCrop}
                        onSave={this.saveCrop}
                        onClose={this.onRemove}>
                    </CropImage>
                </Modal>
            </div>
        )
    }
}
export default UploadImage;