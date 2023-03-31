import React from "react";
import { Form } from "react-bootstrap";
import { AsyncTypeahead } from "react-bootstrap-typeahead";

import OrbitalErrorDiv from "./OrbitalErrorDiv";
// import { OrbitalErrorDiv } from "orbital_common_components";

export default function OrbitalAsyncTypeahead(props) {
    const { isInvalid, disabled, errorMessage, errorMsg } = props;

    return (
        <React.Fragment>
            <AsyncTypeahead
                renderInput={({ inputRef, referenceElementRef, ...inputProps }) => (
                    <Form.Control
                        isInvalid={isInvalid}
                        disabled={disabled}
                        {...inputProps}
                        ref={(input) => {
                            // Be sure to correctly handle these refs. In many cases, both can simply receive
                            // the underlying input node, but `referenceElementRef can receive a wrapper node if
                            // your custom input is more complex (See TypeaheadInputMulti for an example).
                            inputRef(input);
                            referenceElementRef(input);
                        }}
                    />
                )}
                {...props}>
            </AsyncTypeahead>
            {isInvalid &&
                <OrbitalErrorDiv>{errorMessage || errorMsg}</OrbitalErrorDiv>
            }
        </React.Fragment>
    )
}