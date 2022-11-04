import React, { useState } from "react";
import { Row, Col, InputGroup, FormControl, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faPause } from '@fortawesome/free-solid-svg-icons';
import ReactPlayer from 'react-player/lazy';
import Select from "react-select";
import _ from "lodash";

import NormalFieldLabel from "../NormalFieldLabel";
import MandatoryFieldLabel from "../MandatoryFieldLabel";
import OrbitalCheckbox from "../OrbitalCheckbox";
import UploadImage from "../UploadImage/UploadImage";
import UploadDocument from "../UploadDocument/UploadDocument";
import SessionStorageStore from "../../stores/SessionStorageStore";
import AuthStore from "../../stores/AuthStore";

function CompleteSchema(props) {
    var { localization, jsonSchema, customFields, lang, onLoadImage, onLoadDocument, onRemove, onChange } = props;

    var [playing, setPlaying] = useState(false);
    var [enablePlay, setEnablePlay] = useState(false);

    /*************************************************************************/
    /************************** FUNCTIONS ************************************/
    /*************************************************************************/
    function onChangeBoolean(fieldName) {
        var tmp = _.cloneDeep(customFields);
        tmp[fieldName] = !tmp[fieldName];
        onChange(tmp);
    }

    function onChangeNumber(fieldName, e) {
        var value = e.target.value;
        value = Number(value);

        var tmp = _.cloneDeep(customFields);
        tmp[fieldName] = value;
        onChange(tmp);
    }

    function onChangeObject(fieldName, e) {
        var value = e.target.value;
        value = _.isEmpty(value) === true ? null : JSON.stringify(JSON.parse(value));

        var tmp = _.cloneDeep(customFields);
        tmp[fieldName] = value;
        onChange(tmp);
    }

    function onChangeString(fieldName, e) {
        var value = e.target.value;
        value = _.isEmpty(value) === true ? null : value;

        var tmp = _.cloneDeep(customFields);
        tmp[fieldName] = value;
        onChange(tmp);
    }

    function onChangeSelect(fieldName, value) {
        var tmp = _.cloneDeep(customFields);
        tmp[fieldName] = value;
        onChange(tmp);
    }

    /*************************************************************************/
    /************************** RENDER ***************************************/
    /*************************************************************************/
    function parseObject(value) {
        value = JSON.parse(value);
        value = JSON.stringify(value, undefined, 4);
        return value;
    }

    function getSelectOptions(options) {
        var lang = SessionStorageStore.getCurrentLang() || AuthStore.getDefautlLang() || "En";

        var selectOptions = _.map(options, (option) => {
            var { value, label } = option;
            var localizedLabel = label[lang] || value;
            return { "value": value, "label": localizedLabel }
        })
        selectOptions = _.sortBy(selectOptions, "label");
        return selectOptions;
    }

    function getSelectValue(options, value) {
        var selectOptions = getSelectOptions(options);
        var option = _.find(selectOptions, { "value": value });
        return option;
    }

    return (
        <React.Fragment>
            {_.map(jsonSchema, (entry) => {
                var { fieldName, label, type, required, step, options } = entry;
                label = entry.label[lang];
                var value = customFields[fieldName];

                return <Row className="margin_top_row" key={fieldName}>
                    <Col>
                        {required === true ?
                            <MandatoryFieldLabel value={label}></MandatoryFieldLabel> :
                            <NormalFieldLabel value={label}></NormalFieldLabel>
                        }

                        {type === "boolean" &&
                            <OrbitalCheckbox
                                checked={value || false}
                                onChange={() => { onChangeBoolean(fieldName) }}>
                            </OrbitalCheckbox>
                        }

                        {type === "document" &&
                            <UploadDocument
                                localization={localization}
                                document={value || {}}
                                isInvalid={false}
                                errorMessage={""}
                                onChange={(base64, fileName, fileExtension, fileType) => {
                                    onLoadDocument(fieldName, base64, fileName, fileExtension, fileType)
                                }}
                                onRemove={() => { onLoadImage(fieldName) }}>
                            </UploadDocument>
                        }

                        {type === "image" &&
                            <UploadImage
                                localization={localization}
                                image={value || null}
                                onChange={(base64, fileName, fileExtension, fileType) => {
                                    onLoadImage(fieldName, base64, fileName, fileExtension)
                                }}
                                onRemove={() => { onLoadImage(fieldName) }}>
                            </UploadImage>
                        }

                        {type === "number" &&
                            <FormControl
                                type="number"
                                placeholder={label}
                                step={step.toString()}
                                value={value != null ? value.toString() : ""}
                                onChange={(e) => { onChangeNumber(fieldName, e) }}>
                            </FormControl>
                        }

                        {type === "link" &&
                            <FormControl
                                type="url"
                                placeholder={label}
                                value={value || ""}
                                onChange={(e) => { onChangeString(fieldName, e) }}>
                            </FormControl>
                        }

                        {type === "object" &&
                            <FormControl
                                as="textarea"
                                rows={6}
                                value={value != null ? parseObject(value) : ""}
                                onChange={(e) => { onChangeObject(fieldName, e) }}>
                            </FormControl>
                        }

                        {type === "string" &&
                            <FormControl
                                placeholder={label}
                                value={value}
                                onChange={(e) => { onChangeString(fieldName, e) }}>
                            </FormControl>
                        }

                        {
                            type === "select" &&
                            <Select
                                placeholder={label}
                                value={getSelectValue(options, value)}
                                isClearable={true}
                                onChange={(data) => {
                                    var value = data && data.value ? data.value : null;
                                    onChangeSelect(fieldName, value);
                                }}
                                options={getSelectOptions(options)}>
                            </Select>
                        }

                        {type === "video" &&
                            <React.Fragment>
                                <InputGroup>
                                    <InputGroup.Prepend>
                                        <InputGroup.Text>Url</InputGroup.Text>
                                    </InputGroup.Prepend>
                                    <FormControl
                                        placeholder={localization.videoUrl || "Video url"}
                                        value={value || ""}
                                        onChange={(e) => {
                                            setEnablePlay(false);
                                            onChangeString(fieldName, e)
                                        }}>
                                    </FormControl>
                                </InputGroup>
                                {_.isEmpty(value) === false &&
                                    <div style={{ marginTop: "0.5rem" }}>
                                        <ReactPlayer
                                            playing={playing}
                                            onReady={() => { setEnablePlay(true) }}
                                            onPlay={() => { setPlaying(true) }}
                                            onPause={() => { setPlaying(false) }}
                                            url={value || null}>
                                        </ReactPlayer>
                                        <Button size={"sm"} disabled={enablePlay === false} style={{ marginTop: "0.2rem" }} onClick={() => { setPlaying(!playing) }}>
                                            <FontAwesomeIcon icon={playing === true ? faPause : faPlay}></FontAwesomeIcon>
                                        </Button>
                                    </div>
                                }
                            </React.Fragment>
                        }
                    </Col>
                </Row>
            })}
        </React.Fragment>
    )
}
export default CompleteSchema;