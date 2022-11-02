import React, { useEffect, useState } from "react";
import { Row, Col, Modal, Button, ButtonGroup, ButtonToolbar } from 'react-bootstrap';
// import { Tooltip, OrbitalAddIcon, ReactTable, SessionStorageStore, AuthStore } from "orbital_common_components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencilAlt, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { toast } from "react-toastify";
import _ from "lodash";

import Tooltip from "../Tooltip/Tooltip"
import OrbitalAddIcon from "../Icons/OrbitalAddIcon";
import ReactTable from "../ReactTable_styled/ReactTable";
import SessionStorageStore from "../../stores/SessionStorageStore";
import AuthStore from "../../stores/AuthStore";

import AddEditProperty from "./AddEditProperty";
import DeleteProperty from "./DeleteProperty";

function OrbitalJsonSchema(props) {
    const { localization, title, onChange, orbitalJsonSchema } = props;

    var [body, setBody] = useState([]);
    var [showEditModal, setShowEditModal] = useState(false);
    var [showDeleteModal, setShowDeleteModal] = useState(false);
    var [selectedProperty, setSelectedProperty] = useState(null);

    /*************************************************************************/
    /************************ STANDARD ***************************************/
    /*************************************************************************/
    useEffect(() => {
        var schema = _.isEmpty(orbitalJsonSchema) === true ? [] : orbitalJsonSchema;
        var body = parseBody(schema);
        setBody(body);
    }, [orbitalJsonSchema]);

    function parseLabel(label) {
        var lang = SessionStorageStore.getCurrentLang() || AuthStore.getDefautlLang() || "En";
        label = label && label[lang] ? label[lang] : null;
        return label;
    }

    function parseActions(property) {
        return <ButtonToolbar>
            <ButtonGroup>
                <Tooltip key="edit_property" tooltip={localization.editProperty || "Edit property"}>
                    <Button variant="outline-primary" onClick={() => {
                        setSelectedProperty(property);
                        setShowEditModal(true);
                    }}>
                        <FontAwesomeIcon icon={faPencilAlt} />
                    </Button>
                </Tooltip>
                <Tooltip key="delete_property" tooltip={localization.delete || "Delete"}>
                    <Button variant="outline-danger" onClick={() => {
                        setSelectedProperty(property);
                        setShowDeleteModal(true);
                    }}>
                        <FontAwesomeIcon icon={faTrashAlt} />
                    </Button>
                </Tooltip>
            </ButtonGroup>
        </ButtonToolbar>
    }

    function parseBody(schema) {
        var body = [];
        _.each(schema, (property) => {
            var label = parseLabel(property.label);
            var type = property.type;
            var actions = parseActions(property);

            body.push({
                fieldName: property.fieldName,
                label: label,
                type: localization[type] || type,
                actions: actions
            })
        })

        return body;
    }

    /*************************************************************************/
    /************************ FUNCTIONS **************************************/
    /*************************************************************************/
    function changeProperty(property) {
        var tmpSchema = _.cloneDeep(orbitalJsonSchema) || [];

        var idx = _.findIndex(tmpSchema, { "fieldName": property.fieldName });
        if (_.isEmpty(selectedProperty) === true && idx !== -1) {
            // sto creando una proprietà con un "name" già esistente
            toast.warn(localization.propertyWithSameNameExisting || "A property with the same 'name' is already present")
        } else if (_.isEmpty(selectedProperty) === true && idx === -1) {
            // sto creando una proprietà con un "name" che non esiste
            tmpSchema.push(property);
        } else if (_.isEmpty(selectedProperty) === false && idx !== -1) {
            // sto modificando una proprietà esistente
            tmpSchema.splice(idx, 1, property);
        }

        setShowEditModal(false);
        onChange(tmpSchema);
    }

    function deleteProperty(property) {
        var tmpSchema = _.cloneDeep(orbitalJsonSchema);
        var idx = _.findIndex(tmpSchema, { "name": property.name });
        tmpSchema.splice(idx, 1);

        setShowDeleteModal(false);
        onChange(tmpSchema);
    }

    /*************************************************************************/
    /*************************** RENDER **************************************/
    /*************************************************************************/
    function getColumns() {
        return [
            {
                Header: localization.propertyName || "Property name",
                accessor: 'fieldName',
                disableSortBy: true
            },
            {
                Header: localization.propertyLabel || "Property label",
                accessor: 'label',
                disableSortBy: true
            },
            {
                Header: localization.propertyType || "Property type",
                accessor: 'type',
                disableSortBy: true
            },
            {
                Header: localization.actions || "Actions",
                accessor: 'actions',
                disableSortBy: true
            }
        ]
    }

    return (
        <React.Fragment>
            <Row>
                {title &&
                    <Col sm={8}>
                        {title}
                    </Col>
                }
                <Col sm={title ? 4 : 12}>
                    <div style={{ float: "right" }}>
                        <OrbitalAddIcon float="right" tooltip={localization.addProperty || "Add property"} onClick={() => {
                            setShowEditModal(true);
                            setSelectedProperty({});
                        }}>
                        </OrbitalAddIcon>
                    </div>
                </Col>
            </Row>
            <Row className="margin_top_row">
                <Col>
                    <ReactTable
                        localization={localization}
                        columns={getColumns()}
                        data={body}
                        _defaultPageSize={5}
                        _noDataMessage={localization.noData || "No data"}
                        skipPageReset={true}>
                    </ReactTable>
                </Col>
            </Row>

            <Modal onHide={() => { }} show={showEditModal}>
                <AddEditProperty
                    localization={localization}
                    property={selectedProperty}
                    onSave={changeProperty}
                    onCancel={() => { setShowEditModal(false) }}>
                </AddEditProperty>
            </Modal>

            <Modal onHide={() => { }} size="lg" show={showDeleteModal}>
                <DeleteProperty
                    localization={localization}
                    property={_.cloneDeep(selectedProperty)}
                    onDelete={deleteProperty}
                    onCancel={() => {
                        setShowDeleteModal(false);
                        setSelectedProperty(null);
                    }}>
                </DeleteProperty>
            </Modal>
        </React.Fragment>
    )
}
export default OrbitalJsonSchema;