
import React from "react";
import { Modal, Button } from 'react-bootstrap';

function DeleteProperty(props) {
    const { localization, onDelete, onCancel, property } = props;

    /*************************************************************************/
    /*************************** RENDER **************************************/
    /*************************************************************************/
    var fieldName = property && property.fieldName ? property.fieldName : null;
    var elements = property && property._elements ? property._elements : [];

    return (
        <React.Fragment>
            <Modal.Header>
                <Modal.Title>
                    {localization.delete || "Delete"}{" "}"{fieldName}"
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {elements.length === 0 &&
                    <div>
                        {localization.confirmDeleteProperty || "Do you really want to delete the property"}{" "}<b>{fieldName}</b>?
                    </div>
                }
                {elements.length > 0 &&
                    <div>
                        {localization.cannotDeletePropertyInUse || "Impossible to delete the property because it's currently in use"}
                    </div>
                }
            </Modal.Body>
            <Modal.Footer>
                <Button variant="outline-secondary" onClick={onCancel} > {localization.cancel || "Cancel"}</Button>
                {elements.length === 0 &&
                    <Button variant="outline-danger" onClick={() => {
                        onDelete(property);
                    }}>
                        {localization.delete || "Delete"}
                    </Button>
                }
            </Modal.Footer>
        </React.Fragment>
    )
}
export default DeleteProperty;