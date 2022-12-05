import React from "react";
import { Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileAlt } from '@fortawesome/free-regular-svg-icons';
import { faTrashAlt, faPencilAlt, faCircle } from '@fortawesome/free-solid-svg-icons';
import styled from "styled-components";
import _ from "lodash";

const StyledButtonUpload = styled(Button)`
    width: 50px;
    height: 60px;
    background-color: #fafafa;
    text-align: center;
    border-radius: 4px;
    vertical-align: top;
    border: 1px dashed;
    border-color: ${(props) => ((props.error === true || props.isInvalid === true) ? "#dc3545" : "#d9d9d9")};
`;

function UploadImageButton(props) {
    return <StyledButtonUpload {...props}>{props.children}</StyledButtonUpload>
}

const StyledDivDocumentBox = styled.div`
    position: relative;
`;
function DocumentBox(props) {
    return <StyledDivDocumentBox>{props.children}</StyledDivDocumentBox>
}

const StyledDivIconxBox = styled.div`
    position: absolute;
    z-index: 10;
    top: -3px;
    left: -17px;
`;
function IconsBox(props) {
    return <StyledDivIconxBox>{props.children}</StyledDivIconxBox>
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


const StyledDiv = styled.div`
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
    return <StyledDiv className="fa-stack small" {...props}>
        <StyledFaCircleDelete className="fa-stack-2x" icon={faCircle} />
        <StyledTrashAlt className="fa-stack-1x" icon={faTrashAlt} />
    </StyledDiv>
}

const StyledFontAwesomeIcon = styled(FontAwesomeIcon)`
    color: #007bff;
    font-size: 4rem;
`;
function FileIcon(props) {
    return <StyledFontAwesomeIcon icon={faFileAlt} />
}

const StyledDivErrorMessage = styled.div`
    margin-top: 0.25rem;
    font-size: 80%;
    color: #dc3545;
`;
function ErrorMessage(props) {
    return <StyledDivErrorMessage>{props.children}</StyledDivErrorMessage>
}

export { UploadImageButton, DocumentBox, IconsBox, UpdateImageIcon, DeleteImageIcon, FileIcon, ErrorMessage };