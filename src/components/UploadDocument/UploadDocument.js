import React, { useRef } from "react";
import { Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUpload } from '@fortawesome/free-solid-svg-icons';
import _ from "lodash";

import { UploadImageButton, DocumentBox, IconsBox, UpdateImageIcon, DeleteImageIcon, FileIcon, ErrorMessage } from "./styledComponents";

function UploadDocument(props) {
    var { localization, document, onChange, onRemove, disabled, isInvalid, errorMessage } = props;
    const inputRef = useRef(null);

    function handleFileUpload(e) {
        var files = e.target.files;
        if (files.length > 0) {
            var fileSrc = files[0];
            var reader = new FileReader();
            reader.onload = function () {
                var data = reader.result;
                var fileName = fileSrc.name;
                var fileType = fileSrc.type;
                var fileExtension = data.split(';')[0].split('/')[1];
                onChange(data, fileName, fileExtension, fileType);
            };
            reader.readAsDataURL(fileSrc);
        }
    }

    return (
        <Row>
            <Col>
                {_.isEmpty(document) === true &&
                    <React.Fragment>
                        <input
                            ref={inputRef}
                            onChange={handleFileUpload}
                            type="file"
                            accept="application/*, text/*"
                            style={{ display: "none" }}
                            multiple={false}>
                        </input>
                        <UploadImageButton disabled={disabled} variant="outline-secondary" isInvalid={isInvalid} onClick={() => {
                            inputRef.current.click();
                        }}>
                            <FontAwesomeIcon icon={faUpload} />
                        </UploadImageButton>
                        {isInvalid === true &&
                            <ErrorMessage>{errorMessage || "Error"}</ErrorMessage>
                        }
                    </React.Fragment>
                }
                {_.isEmpty(document) === false &&
                    <DocumentBox>
                        <IconsBox>
                            <div>
                                <label htmlFor="file-input">
                                    <UpdateImageIcon></UpdateImageIcon>
                                </label>
                                <input
                                    id="file-input"
                                    type="file"
                                    accept="application/*, text/*"
                                    style={{ display: "none" }}
                                    multiple={false}
                                    onChange={handleFileUpload} />
                            </div>
                            <DeleteImageIcon onClick={onRemove}></DeleteImageIcon>
                        </IconsBox>
                        <FileIcon></FileIcon>
                        <div>{document && document.fileName ? document.fileName : "N/A"}</div>
                    </DocumentBox>
                }
            </Col>
        </Row>
    )
}
export default UploadDocument;