import React, { useEffect, useState } from "react";
import { Row, Col, InputGroup, FormControl, Card, ButtonGroup, Button } from 'react-bootstrap';
// import { NormalFieldLabel, MandatoryFieldLabel, Tooltip, OrbitalAddIcon, OrbitalCancelIcon, OrbitalSaveIcon, OrbitalSelect } from "orbital_common_components";
// import { SessionStorageStore, AuthStore } from "orbital_common_components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencilAlt, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { toast } from "react-toastify";
import { Formik } from "formik";
import _ from "lodash";
import * as yup from "yup";

import NormalFieldLabel from "../NormalFieldLabel";
import MandatoryFieldLabel from "../MandatoryFieldLabel/MandatoryFieldLabel";
import Tooltip from "../Tooltip";
import OrbitalSaveIcon from "../Icons/OrbitalSaveIcon";
import OrbitalAddIcon from "../Icons/OrbitalAddIcon";
import OrbitalCancelIcon from "../Icons/OrbitalCancelIcon";
import OrbitalSelect from "../OrbitalSelect/OrbitalSelect";

import SessionStorageStore from "../../stores/SessionStorageStore";
import AuthStore from "../../stores/AuthStore";

const types = ["string", "number", "boolean", "object", "image", "video", "link", "select", "document"];

const newProperty = {
    fieldName: null,
    label: {},
    type: null,
    step: null,
    options: []
}

const newOption = {
    value: null,
    label: {}
}

function getLocalizedField(editingLanguage) {
    return "label." + editingLanguage;
}

function parseLocalLocalizedField(field, editingLanguage) {
    field = field && field[editingLanguage] ? field[editingLanguage] : null;
    return field;
}

function DeleteOption(props) {
    const { localization, option, onCancel, onDelete } = props;

    var [cardTitle, setCardTitle] = useState("");

    useEffect(() => {
        var lang = SessionStorageStore.getCurrentLang() || AuthStore.getDefautlLang() || "En";

        var cardTitle = _.isEmpty(option) === true ? localization.newOption || "New option" : (option.label[lang] || option.value);
        setCardTitle(cardTitle);
    }, [])

    return (
        <Card style={{ marginTop: "1rem" }}>
            <Card.Header>
                <b>{cardTitle}</b>
            </Card.Header>
            <Card.Body>
                <div>
                    {localization.confirmDeleteOption || "Do you really want to delete this option?"}
                </div>
                <div>
                    {localization.affectAlreadyAssignedValue || "This might affect some elements that are already using this option."}
                </div>
                <div style={{ marginTop: "1rem", float: "right" }}>
                    <Button style={{ marginRight: "0.25rem" }} variant="outline-secondary" onClick={onCancel} > {localization.cancel || "Cancel"}</Button>
                    <Button variant="outline-danger" onClick={() => { onDelete(option) }}>
                        {localization.delete || "Delete"}
                    </Button>
                </div>
            </Card.Body>
        </Card>
    )
}

function AddEditOption(props) {
    const { languageOptions, localization, option, onSave, onUpdate, onCancel } = props;
    const defaultLang = AuthStore.getDefautlLang()

    const validationSchema = yup.object().shape({
        value: yup.string()
            .typeError(localization.completeField || "Please complete the field")
            .required(localization.completeField || "Please complete the field")
            .matches("^[a-zA-Z0-9]*$", (localization.onlyLettersAndNumberAllowed || "Only letters and numbers allowed")),
        label: yup.object().shape({
            [defaultLang]: yup.string()
                .typeError(`${localization.completeFieldForDefaultLang || "Complete the field for the default lang"}: ${defaultLang}`)
                .required(`${localization.completeFieldForDefaultLang || "Complete the field for the default lang"}: ${defaultLang}`)
        })
    })

    var [editingLanguage, setEditingLanguage] = useState(AuthStore.getUserLang() || "En");
    var [cardTitle, setCardTitle] = useState("");

    /*************************************************************************/
    /************************ STANDARD ***************************************/
    /*************************************************************************/
    useEffect(() => {
        var lang = SessionStorageStore.getCurrentLang() || AuthStore.getDefautlLang() || "En";

        var cardTitle = _.isEmpty(option) === true ? localization.newOption || "New option" : (option.label[lang] || option.value);
        setCardTitle(cardTitle);
    }, [])

    /*************************************************************************/
    /************************** RENDER ***************************************/
    /*************************************************************************/
    function setInitialValues() {
        var initialValues = _.isEmpty(option) === true ? newOption : option;
        return initialValues;
    }

    var parsedLang = _.find(languageOptions, { "value": editingLanguage });
    return (
        <Formik
            validationSchema={validationSchema}
            onSubmit={(values, actions) => {
                if (_.isEmpty(option) === true) {
                    onSave(values);
                } else {
                    onUpdate(values);
                }
            }}
            initialValues={setInitialValues()}>
            {({ handleSubmit, handleChange, values, errors }) => (
                <Card style={{ marginTop: "1rem" }}>
                    <Card.Header>
                        <b>{cardTitle}</b>
                        <span style={{ float: "right" }}>
                            <OrbitalSaveIcon tooltip={localization.save || "Save"} marginright={"15px"} onClick={handleSubmit}></OrbitalSaveIcon>
                            <OrbitalCancelIcon tooltip={localization.cancel || "Cancel"} onClick={onCancel}></OrbitalCancelIcon>
                        </span>
                    </Card.Header>
                    <Card.Body>
                        <Row style={{ marginTop: "1rem" }}>
                            <Col sm={4}>
                                <NormalFieldLabel value={localization.language || "Language"}></NormalFieldLabel>
                                <OrbitalSelect
                                    value={parsedLang}
                                    onChange={(data) => { setEditingLanguage(data.value) }}
                                    options={languageOptions}>
                                </OrbitalSelect>
                            </Col>
                        </Row>
                        <Row style={{ marginTop: "1rem" }}>
                            <Col>
                                <MandatoryFieldLabel value={(localization.optionValue || "Option value")}></MandatoryFieldLabel>
                                <FormControl
                                    name="value"
                                    disabled={_.isEmpty(option) === false}
                                    placeholder={localization.optionValue || "Option value"}
                                    value={values.value || ""}
                                    onChange={handleChange}
                                    isInvalid={errors.value}>
                                </FormControl>
                                <FormControl.Feedback type="invalid">{errors.value}</FormControl.Feedback>
                            </Col>
                        </Row>
                        <Row style={{ marginTop: "1rem" }}>
                            <Col>
                                <MandatoryFieldLabel value={localization.optionLabel || "Option label"}></MandatoryFieldLabel>
                                <InputGroup>
                                    <InputGroup.Prepend>
                                        <InputGroup.Text>{editingLanguage}</InputGroup.Text>
                                    </InputGroup.Prepend>
                                    <FormControl
                                        name={getLocalizedField(editingLanguage)}
                                        placeholder={localization.propertyLabel || "Property label"}
                                        value={parseLocalLocalizedField(values.label, editingLanguage) || ""}
                                        onChange={handleChange}
                                        isInvalid={errors.label && errors.label[defaultLang]}>
                                    </FormControl>
                                    <FormControl.Feedback type="invalid">{errors.label && errors.label[defaultLang] ? errors.label[defaultLang] : ""}</FormControl.Feedback>
                                </InputGroup>
                            </Col>
                        </Row>
                    </Card.Body>
                </Card>
            )}
        </Formik>
    )
}

function AddEditProperty(props) {
    const { localization, onSave, onCancel, property } = props;
    const defaultLang = AuthStore.getDefautlLang()

    const validationSchema = yup.object().shape({
        fieldName: yup.string()
            .typeError(localization.completeField || "Please complete the field")
            .required(localization.completeField || "Please complete the field")
            .min(2, (localization.atLeastTwoCharacters || "At least two caracthers"))
            .matches("^([a-z])([A-Za-z])+$", (localization.onlyLettersAllowedTheFirstLowerCase || "The first letter must be lowercase and only letters are allowed")),
        label: yup.object().shape({
            [defaultLang]: yup.string()
                .typeError(`${localization.completeFieldForDefaultLang || "Complete the field for the default lang"}: ${defaultLang}`)
                .required(`${localization.completeFieldForDefaultLang || "Complete the field for the default lang"}: ${defaultLang}`)
        }),
        type: yup.string()
            .typeError(localization.completeField || "Please complete the field")
            .required(localization.completeField || "Please complete the field"),
        step: yup.string()
            .nullable(true)
            .when("type", {
                is: "number",
                then: yup.string()
                    .typeError(localization.completeField || "Please complete the field")
                    .required(localization.completeField || "Please complete the field")
                    .matches("^[0-9.]+$", (localization.onlyDecimelNumbersAllowed || "Only decimal numbers allowed"))
            })
    });

    var [cardTitle, setCardTitle] = useState(null);
    var [languageOptions, setLanguageOptions] = useState([]);
    var [editingLanguage, setEditingLanguage] = useState(AuthStore.getUserLang() || "En");
    var [typeOptions, setTypeOptions] = useState([]);
    var [showAddEditOption, setShowAddEditOption] = useState(false);
    var [showDeleteOption, setShowDeleteOption] = useState(false);
    var [selectedOption, setSelectedOption] = useState({});

    /*************************************************************************/
    /************************ STANDARD ***************************************/
    /*************************************************************************/
    useEffect(() => {
        var lang = SessionStorageStore.getCurrentLang() || AuthStore.getDefautlLang() || "En";
        var cardTitle = _.isEmpty(property) === true ? localization.newProperty || "New property" : (property.label[lang] || property.fieldName);


        var languages = AuthStore.getPreferedLanguages() || ["En"];
        var languageOptions = _.map(languages, (lang) => {
            return { "value": lang, "label": lang }
        });

        var typeOptions = _.map(types, (type) => {
            var label = localization[type] || type;
            return { "value": type, "label": label }
        })
        typeOptions = _.sortBy(typeOptions, "label");

        setCardTitle(cardTitle);
        setLanguageOptions(languageOptions);
        setTypeOptions(typeOptions);
    }, [])

    function addOption(values, setFieldValue, newOption) {
        var options = _.cloneDeep(values).options || [];

        var tmp = _.find(options, { "value": newOption.value });
        if (tmp) {
            toast.warn(localization.optionWithSameValueAlreadyPresent || "An option with the same value is already present");
        } else {
            options.push(newOption);
            setFieldValue("options", options);
            setShowAddEditOption(false);
        }
    }

    function updateOption(values, setFieldValue, option) {
        var options = _.cloneDeep(values).options || [];

        var idx = _.findIndex(options, ['value', option.value]);
        options.splice(idx, 1, option);
        setFieldValue("options", options);
        setShowAddEditOption(false);
    }

    function deleteOption(values, setFieldValue, option) {
        var options = _.cloneDeep(values).options || [];

        var idx = _.findIndex(options, ['value', option.value]);
        options.splice(idx, 1);
        setFieldValue("options", options);
        setShowDeleteOption(false);
    }

    /*************************************************************************/
    /*************************** RENDER **************************************/
    /*************************************************************************/
    function setInitialValues() {
        var initialValues = _.isEmpty(property) === true ? newProperty : property;
        return initialValues;
    }

    var parsedLang = _.find(languageOptions, { "value": editingLanguage });
    return (
        <Formik
            validationSchema={validationSchema}
            onSubmit={(values, actions) => {
                onSave(values);
            }}
            initialValues={setInitialValues()}>
            {({ handleSubmit, handleChange, values, isValid, errors, setFieldValue, setValues }) => (
                <Card>
                    <Card.Header>
                        <b>{cardTitle}</b>
                        <span style={{ float: "right" }}>
                            <OrbitalSaveIcon disabled={showAddEditOption === true || showDeleteOption === true} tooltip={localization.save || "Save"} marginright={"15px"} onClick={handleSubmit}></OrbitalSaveIcon>
                            <OrbitalCancelIcon tooltip={localization.cancel || "Cancel"} onClick={onCancel}></OrbitalCancelIcon>
                        </span>
                    </Card.Header>
                    <Card.Body>
                        <Row>
                            <Col sm={4}>
                                <NormalFieldLabel value={localization.language || "Language"}></NormalFieldLabel>
                                <OrbitalSelect
                                    value={parsedLang}
                                    onChange={(data) => { setEditingLanguage(data.value) }}
                                    options={languageOptions}>
                                </OrbitalSelect>
                            </Col>
                        </Row>
                        <Row style={{ marginTop: "1rem" }}>
                            <Col>
                                <MandatoryFieldLabel value={(localization.propertyFieldName || "Property field name") + " - " + (localization.onlyLetters || "Only letter") + " (a-zA-Z)"}></MandatoryFieldLabel>
                                <FormControl
                                    name="fieldName"
                                    disabled={_.isEmpty(property) === false}
                                    placeholder={localization.propertyFieldName || "Property field name"}
                                    value={values.fieldName || ""}
                                    onChange={handleChange}
                                    isInvalid={errors.fieldName}>
                                </FormControl>
                                <FormControl.Feedback type="invalid">{errors.fieldName}</FormControl.Feedback>
                            </Col>
                        </Row>
                        <Row style={{ marginTop: "1rem" }}>
                            <Col>
                                <MandatoryFieldLabel value={localization.propertyLabel || "Property label"}></MandatoryFieldLabel>
                                <InputGroup>
                                    <InputGroup.Prepend>
                                        <InputGroup.Text>{editingLanguage}</InputGroup.Text>
                                    </InputGroup.Prepend>
                                    <FormControl
                                        name={getLocalizedField(editingLanguage)}
                                        placeholder={localization.propertyLabel || "Property label"}
                                        value={parseLocalLocalizedField(values.label, editingLanguage) || ""}
                                        onChange={handleChange}
                                        isInvalid={errors.label && errors.label[defaultLang]}>
                                    </FormControl>
                                    <FormControl.Feedback type="invalid">{errors.label && errors.label[defaultLang] ? errors.label[defaultLang] : ""}</FormControl.Feedback>
                                </InputGroup>
                            </Col>
                        </Row>
                        <Row style={{ marginTop: "1rem" }}>
                            <Col>
                                <MandatoryFieldLabel value={localization.propertyType || "Property type"}></MandatoryFieldLabel>
                                <OrbitalSelect
                                    isInvalid={errors.type}
                                    isDisabled={_.isEmpty(property) === false}
                                    errorMsg={errors.type}
                                    value={_.find(typeOptions, { "value": values.type })}
                                    placeholder={localization.propertyType || "Property type"}
                                    options={typeOptions}
                                    onChange={(data) => {
                                        var value = data ? data.value : null;
                                        setValues({
                                            ...values,
                                            type: value,
                                            step: value === "number" ? "0.5" : null,
                                            options: value === "select" ? [] : null
                                        })
                                    }}>
                                </OrbitalSelect>
                            </Col>
                        </Row>
                        {values.type && values.type === "number" &&
                            <Row style={{ marginTop: "1rem" }}>
                                <Col>
                                    <NormalFieldLabel value={(localization.stepNumber || "Step number")}></NormalFieldLabel>
                                    <FormControl
                                        name="step"
                                        placeholder={localization.step || "Step number"}
                                        value={values.step || ""}
                                        onChange={handleChange}
                                        isInvalid={errors.step}>
                                    </FormControl>
                                    <FormControl.Feedback type="invalid">{errors.step}</FormControl.Feedback>
                                </Col>
                            </Row>
                        }
                        {values.type && values.type === "select" &&
                            <React.Fragment>
                                <Row style={{ marginTop: "1rem" }}>
                                    <Col sm={8}>
                                        <NormalFieldLabel value={(localization.options || "Options")}></NormalFieldLabel>
                                    </Col>
                                    <Col sm={4}>
                                        <div style={{ float: "right" }}>
                                            {showAddEditOption !== true &&
                                                <OrbitalAddIcon float="right" tooltip={localization.addOption || "Add option"} onClick={() => {
                                                    setShowAddEditOption(true);
                                                    setSelectedOption({});
                                                }}>
                                                </OrbitalAddIcon>
                                            }
                                        </div>
                                    </Col>
                                </Row>
                                {showAddEditOption === true &&
                                    <AddEditOption
                                        localization={localization}
                                        languageOptions={languageOptions}
                                        option={selectedOption}
                                        onSave={(option) => { addOption(values, setFieldValue, option) }}
                                        onUpdate={(option) => { updateOption(values, setFieldValue, option) }}
                                        onCancel={() => { setShowAddEditOption(false) }}>
                                    </AddEditOption>
                                }
                                {showDeleteOption === true &&
                                    <DeleteOption
                                        localization={localization}
                                        option={selectedOption}
                                        onDelete={(option) => { deleteOption(values, setFieldValue, option) }}
                                        onCancel={() => { setShowDeleteOption(false) }}>
                                    </DeleteOption>
                                }
                                {values.options.length === 0 && showAddEditOption === false && showDeleteOption === false &&
                                    <Row style={{ marginTop: "1rem" }}>
                                        <Col>
                                            {localization.noOptionsArePresentsYet || "No options are presents yet"}
                                        </Col>
                                    </Row>
                                }
                                {values.options.length > 0 && showAddEditOption === false && showDeleteOption === false &&
                                    <Row style={{ marginTop: "1rem" }}>
                                        {_.map(values.options || [], (option) => {
                                            var label = option.label[editingLanguage];

                                            return <React.Fragment>
                                                <Col sm={8}>
                                                    {label}
                                                </Col>
                                                <Col sm={4}>
                                                    <ButtonGroup style={{ float: "right" }}>
                                                        <Tooltip key="edit_option" tooltip={localization.editCategory || "Edit category"}>
                                                            <Button variant="outline-primary" onClick={() => {
                                                                setShowAddEditOption(true);
                                                                setSelectedOption(option);
                                                            }}>
                                                                <FontAwesomeIcon icon={faPencilAlt} />
                                                            </Button>
                                                        </Tooltip>
                                                        <Tooltip key="delete_option" tooltip={localization.delete || "Delete"}>
                                                            <Button variant="outline-danger" onClick={() => {
                                                                setShowDeleteOption(true);
                                                                setSelectedOption(option);
                                                            }}>
                                                                <FontAwesomeIcon icon={faTrashAlt} />
                                                            </Button>
                                                        </Tooltip>
                                                    </ButtonGroup>
                                                </Col>
                                            </React.Fragment>
                                        })}
                                    </Row>
                                }
                            </React.Fragment>
                        }
                    </Card.Body>
                </Card>
            )}
        </Formik>
    )
}
export default AddEditProperty;