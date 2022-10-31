
import React from "react";
import { Modal, Button } from 'react-bootstrap';

function DeleteProperty(props) {
    const { localization, onDelete, onCancel, property } = props;

    /*************************************************************************/
    /*************************** RENDER **************************************/
    /*************************************************************************/
    var name = property ? property.name : null;

    return (
        <React.Fragment>
            <Modal.Header>
                <Modal.Title>
                    {localization.delete || "Delete"}{" "}{name}
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div>
                    {localization.confirmDeleteProperty || "Do you really want to delete the property"}{" "}<b>{name}</b>?
                </div>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="outline-secondary" onClick={onCancel} > {localization.cancel || "Cancel"}</Button>
                <Button variant="outline-danger" onClick={() => {
                    onDelete(property);
                }}>
                    {localization.delete || "Delete"}
                </Button>
            </Modal.Footer>
        </React.Fragment>
    )
}
export default DeleteProperty;