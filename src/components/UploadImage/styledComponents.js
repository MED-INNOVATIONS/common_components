import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload, faTrashAlt, faPencilAlt, faCircle } from '@fortawesome/free-solid-svg-icons';
import { faTimesCircle, faSave } from '@fortawesome/free-regular-svg-icons';
import { Button } from 'react-bootstrap';
import styled from "styled-components";

const ImageBoxDiv = styled.div`
    position: relative;
`;
function ImageBox(props) {
    return <ImageBoxDiv>{props.children}</ImageBoxDiv>
}

const IconsBoxDiv = styled.div`
    position: absolute;
    z-index: 10;
    top: -3px;
    left: -17px;
`;

function IconsBox(props) {
    return <IconsBoxDiv>{props.children}</IconsBoxDiv>
}

const StyledFaCircleUpdate = styled(FontAwesomeIcon)`
    opacity: 0.7;
    color: #007bff;
    cursor: pointer;
`;

const StyledPencilAlt = styled(FontAwesomeIcon)`
    color: white;
    cursor: pointer;
`;

function UpdateImageIcon() {
    return <span className="fa-stack small">
        <StyledFaCircleUpdate className="fa-stack-2x" icon={faCircle} />
        <StyledPencilAlt className="fa-stack-1x" icon={faPencilAlt} />
    </span>
}

const StyledDivDeleteImage = styled.div`
    top: -10px
`;

const StyledFaCircleDelete = styled(FontAwesomeIcon)`
    opacity: 0.7;
    color: #dc3545;
    cursor: pointer;
`;

const StyledTrashAlt = styled(FontAwesomeIcon)`
    color: white;
    cursor: pointer;
`;

function DeleteImageIcon(props) {
    return <StyledDivDeleteImage className="fa-stack small" {...props}>
        <StyledFaCircleDelete className="fa-stack-2x" icon={faCircle} />
        <StyledTrashAlt className="fa-stack-1x" icon={faTrashAlt} />
    </StyledDivDeleteImage>
}


const StyledImg = styled.img`
    max-width: 100% !important;
    max-height: 100%;
    cursor: pointer;
`;
function StyledImage(props) {
    return <StyledImg {...props}></StyledImg>
}

const StyledButton = styled(Button)`
    width: 104px;
    height: 104px;
    background-color: #fafafa;
    text-align: center;
    border-radius: 4px;
    vertical-align: top;
    border: 1px dashed;
    border-color: ${(props) => ((props.error === true || props.isInvalid === true) ? "#dc3545" : "#d9d9d9")};
`;
function UploadImageButton(props) {
    return <StyledButton {...props}>{props.children}</StyledButton>
}


const StyledDivErrorMessage = styled.div`
    margin-top: 0.25rem;
    font-size: 80%;
    color: #dc3545;
`;
function ErrorMessage(props) {
    return <StyledDivErrorMessage>{props.children}</StyledDivErrorMessage>
}

const StyledFontAwesomeIconClose = styled(FontAwesomeIcon)`
    cursor: pointer;
    font-size: 1.5rem;
    color: grey
`;
function CloseIcon(props) {
    return <span><StyledFontAwesomeIconClose icon={faTimesCircle} {...props}></StyledFontAwesomeIconClose></span>
}


const StyledFontAwesomeIconCropper = styled(FontAwesomeIcon)`
    font-size: 1.5rem;
    margin-right: 15px;
    cursor: ${(props) => (props.isError === true ? "not-allowed" : "pointer")};
    color: ${(props) => (props.isError === true ? "#dee2e6" : "#007bff")};
`;

function CropperDownloadIcon(props) {
    return <span><StyledFontAwesomeIconCropper {...props} icon={faDownload}></StyledFontAwesomeIconCropper></span>
}

const StyledFontAwesomeIconSave = styled(FontAwesomeIcon)`
    font-size: 1.5rem;
    margin-right: 15px;
    cursor: ${(props) => (props.isError === true ? "not-allowed" : "pointer")};
    color: ${(props) => (props.isError === true ? "#dee2e6" : "#007bff")};
`;
function CropperSaveIcon(props) {
    return <span><StyledFontAwesomeIconSave {...props} icon={faSave}></StyledFontAwesomeIconSave></span>
}

export {
    ImageBox, IconsBox, UpdateImageIcon, DeleteImageIcon, StyledImage, UploadImageButton, ErrorMessage, CloseIcon,
    CropperDownloadIcon, CropperSaveIcon
};