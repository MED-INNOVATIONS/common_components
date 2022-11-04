import React from "react";
import styled from "styled-components";
import { Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimesCircle, faSave } from '@fortawesome/free-regular-svg-icons';
import { faDownload, faTrashAlt, faPencilAlt, faCircle } from '@fortawesome/free-solid-svg-icons';

function ImageBox(props) {
    const StyledDiv = styled.div`
        position: relative;
    `;
    return <StyledDiv>{props.children}</StyledDiv>
}

function IconsBox(props) {
    const StyledDiv = styled.div`
        position: absolute;
        z-index: 10;
        top: -3px;
        left: -17px;
    `;
    return <StyledDiv>{props.children}</StyledDiv>
}

function UpdateImageIcon() {
    const StyledFaCircle = styled(FontAwesomeIcon)`
        opacity: 0.7;
        color: #007bff;
        cursor: pointer;
    `;

    const StyledPencilAlt = styled(FontAwesomeIcon)`
        color: white;
        cursor: pointer;
    `;

    return <span className="fa-stack small">
        <StyledFaCircle className="fa-stack-2x" icon={faCircle} />
        <StyledPencilAlt className="fa-stack-1x" icon={faPencilAlt} />
    </span>
}

function DeleteImageIcon(props) {
    const StyledDiv = styled.div`
        top: -10px
    `;

    const StyledFaCircle = styled(FontAwesomeIcon)`
        opacity: 0.7;
        color: #dc3545;
        cursor: pointer;
    `;

    const StyledTrashAlt = styled(FontAwesomeIcon)`
        color: white;
        cursor: pointer;
    `;

    return <StyledDiv className="fa-stack small" {...props}>
        <StyledFaCircle className="fa-stack-2x" icon={faCircle} />
        <StyledTrashAlt className="fa-stack-1x" icon={faTrashAlt} />
    </StyledDiv>
}

function StyledImage(props) {
    const StyledImg = styled.img`
        max-width: 100% !important;
        max-height: 100%;
        cursor: pointer;
    `;

    return <StyledImg {...props}></StyledImg>
}

function UploadImageButton(props) {
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

    return <StyledButton {...props}>{props.children}</StyledButton>
}

function ErrorMessage(props) {
    const StyledDiv = styled.div`
        margin-top: 0.25rem;
        font-size: 80%;
        color: #dc3545;
    `;

    return <StyledDiv>{props.children}</StyledDiv>
}

function CloseIcon(props) {
    const StyledFontAwesomeIcon = styled(FontAwesomeIcon)`
        cursor: pointer;
        font-size: 1.5rem;
        color: grey
    `;

    return <StyledFontAwesomeIcon icon={faTimesCircle} {...props}></StyledFontAwesomeIcon>
}

function CropperDownloadIcon(props) {
    const StyledFontAwesomeIcon = styled(FontAwesomeIcon)`
        font-size: 1.5rem;
        margin-right: 15px;
        cursor: ${(props) => (props.isError === true ? "not-allowed" : "pointer")};
        color: ${(props) => (props.isError === true ? "#dee2e6" : "#007bff")};
    `;

    return <StyledFontAwesomeIcon {...props} icon={faDownload}></StyledFontAwesomeIcon>
}

function CropperSaveIcon(props) {
    const StyledFontAwesomeIcon = styled(FontAwesomeIcon)`
        font-size: 1.5rem;
        margin-right: 15px;
        cursor: ${(props) => (props.isError === true ? "not-allowed" : "pointer")};
        color: ${(props) => (props.isError === true ? "#dee2e6" : "#007bff")};
    `;

    return <StyledFontAwesomeIcon {...props} icon={faSave}></StyledFontAwesomeIcon>
}

export { ImageBox, IconsBox, UpdateImageIcon, DeleteImageIcon, StyledImage, UploadImageButton, ErrorMessage, CloseIcon, 
    CropperDownloadIcon, CropperSaveIcon };