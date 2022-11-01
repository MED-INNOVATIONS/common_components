import React from "react";
import { Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileAlt } from '@fortawesome/free-regular-svg-icons';
import { faTrashAlt, faPencilAlt, faCircle } from '@fortawesome/free-solid-svg-icons';
import styled from "styled-components";
import _ from "lodash";

function UploadImageButton(props) {
    const StyledButton = styled(Button)`
        width: 50px;
        height: 60px;
        background-color: #fafafa;
        text-align: center;
        border-radius: 4px;
        vertical-align: top;
        border: 1px dashed;
        border-color: ${(props) => ((props.error === true || props.isInvalid === true) ? "#dc3545" : "#d9d9d9")};
    `;

    return <StyledButton {...props}>{props.children}</StyledButton>
}

function DocumentBox(props) {
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

function FileIcon(props) {
    const StyledFontAwesomeIcon = styled(FontAwesomeIcon)`
        color: #007bff;
        font-size: 4rem;
    `;

    return <StyledFontAwesomeIcon icon={faFileAlt} />
}

function ErrorMessage(props) {
    const StyledDiv = styled.div`
        margin-top: 0.25rem;
        font-size: 80%;
        color: #dc3545;
    `;

    return <StyledDiv>{props.children}</StyledDiv>
}

export { UploadImageButton, DocumentBox, IconsBox, UpdateImageIcon, DeleteImageIcon, FileIcon, ErrorMessage };