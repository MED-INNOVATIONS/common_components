import React, { Component } from "react";
import { Row, Col, Modal, Card, Image as ReactBootstrapImage } from 'react-bootstrap';
import { toast } from "react-toastify";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUpload } from '@fortawesome/free-solid-svg-icons';
import Resizer from 'react-image-file-resizer';
import _ from "lodash";

import Tooltip from "../Tooltip";
import CropImage from "./CropImage";
import { ImageBox, IconsBox, UpdateImageIcon, DeleteImageIcon, StyledImage, UploadImageButton, ErrorMessage, CloseIcon } from "./styledComponents";

class UploadImage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showPreviewImage: false,
            showCropModal: false,
            image: this.props.image,
            imageToCropSrc: null,
            imageToCrop: null,
            fileName: null,
            fileExtension: null,
            fileType: null
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

                    if (constraints === true) {
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

                        if (isError === true) {
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
        var fileName = fileSrc.name;
        var fileType = fileSrc.type;
        var fileExtension = uploadedImage.split(';')[0].split('/')[1];

        self.checkImageRatioAndDimensions(uploadedImage)
            .then(() => {
                if (resizeImage === true) {
                    self.fileChangedHandler(fileSrc, resizeWidth, resizeHeight)
                        .then((data) => {
                            if (cropImage === true) {
                                self.setState({
                                    imageToCrop: data,
                                    imageToCropSrc: fileSrc,
                                    showCropModal: true,
                                    fileName: fileName,
                                    fileType: fileType,
                                    fileExtension: fileExtension
                                })
                            } else {
                                self.props.onChange(data, fileName, fileExtension, fileType);
                            }
                        })
                        .catch((error) => {
                            console.error(error);
                            toast.error(localization.errorResizingImage || "Error resizing image")
                        })
                } else if (cropImage === true) {
                    self.setState({
                        imageToCrop: uploadedImage,
                        imageToCropSrc: fileSrc,
                        showCropModal: true,
                        fileName: fileName,
                        fileType: fileType,
                        fileExtension: fileExtension
                    })
                } else {
                    self.props.onChange(uploadedImage, fileName, fileExtension, fileType);
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
        var { fileName, fileType, fileExtension } = self.state;
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
                    self.props.onChange(data, fileName, fileExtension, fileType);
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
        var { disabled, localization, cropProperties, error, isInvalid, errorMessage, ratio, viewImgHeight, viewImgWidth, viewImgMaxHeight } = this.props;
        var { image, showPreviewImage, showCropModal } = this.state;
        var { imageToCropSrc, imageToCrop } = this.state;
        cropProperties = cropProperties || {};

        viewImgHeight = viewImgHeight || "auto";
        viewImgWidth = viewImgHeight ? "auto" : viewImgWidth || "auto";
        var imageStyle = { "height": viewImgHeight, "width": viewImgWidth, "maxHeight": viewImgMaxHeight }

        return (
            <React.Fragment>
                <Row>
                    <Col sm={12}>
                        {_.isEmpty(image) === false &&
                            <ImageBox>
                                <IconsBox>
                                    <div>
                                        <label htmlFor="file-input">
                                            <UpdateImageIcon></UpdateImageIcon>
                                        </label>
                                        <input
                                            id="file-input"
                                            type="file"
                                            accept="image/*"
                                            style={{ display: "none" }}
                                            multiple={false}
                                            onChange={this.handleFileUpload} />
                                    </div>
                                    <DeleteImageIcon onClick={this.onRemove}></DeleteImageIcon>
                                </IconsBox>
                                <StyledImage style={imageStyle} src={image} alt="img" onClick={() => { this.setState({ showPreviewImage: true }) }}></StyledImage>
                            </ImageBox>
                        }
                        {_.isEmpty(image) === true &&
                            <React.Fragment>
                                <input
                                    ref="fileInput"
                                    onChange={this.handleFileUpload}
                                    type="file"
                                    accept="image/*"
                                    style={{ display: "none" }}
                                    multiple={false}>
                                </input>
                                <UploadImageButton disabled={disabled} variant="outline-secondary" isInvalid={error || isInvalid} onClick={() => this.refs.fileInput.click()}>
                                    <FontAwesomeIcon icon={faUpload} onClick={this.props.onCancel} />
                                </UploadImageButton>
                            </React.Fragment>
                        }
                    </Col>
                </Row>
                {(error === true || isInvalid === true) &&
                    <Row>
                        <Col>
                            <ErrorMessage>{errorMessage || "Error"}</ErrorMessage>
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
                                        <CloseIcon onClick={() => { this.setState({ showPreviewImage: false }) }}></CloseIcon>
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
            </React.Fragment>
        )
    }
}
export default UploadImage;