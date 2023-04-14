
import React from "react";
import ReactPhoneInput from "react-phone-input-2";
import _ from "lodash";

import OrbitalErrorDiv from "./OrbitalErrorDiv";
// import { OrbitalErrorDiv } from "orbital_common_components";

import "react-phone-input-2/lib/style.css";


export default function OrbitalReactPhoneInput(props) {
    const { isInvalid, errorMsg, errorMessage, disabled } = props;

    function getPhoneStyleButton(isInvalid) {
        var error = _.isEmpty(isInvalid) === false ? true : false;
        var phoneStyleButton = error === true ? { borderColor: "#dc3545" } : null;
        return phoneStyleButton;
    }

    function getPhoneStyleInput(disabled, isInvalid) {
        var error = _.isEmpty(isInvalid) === false ? true : false;
        var phoneStyleInput = null;
        if (disabled === true && error === true) {
            phoneStyleInput = { width: "100%", backgroundColor: "#e9ecef", opacity: "1", borderColor: "#dc3545" };
        } else if (disabled === true) {
            phoneStyleInput = { width: "100%", backgroundColor: "#e9ecef", opacity: "1" };
        } else if (error === true) {
            phoneStyleInput = { width: "100%", borderColor: "#dc3545" };
        } else {
            phoneStyleInput = { width: "100%" };
        }
        return phoneStyleInput;
    }

    const phoneStyleInput = getPhoneStyleInput(disabled, isInvalid);
    const phoneStyleButton = getPhoneStyleButton(isInvalid);
    return (
        <React.Fragment>
            <ReactPhoneInput
                buttonStyle={phoneStyleButton}
                inputStyle={phoneStyleInput}
                disableDropdown={disabled}
                {...props}>
            </ReactPhoneInput>
            {isInvalid &&
                <OrbitalErrorDiv>{errorMessage || errorMsg}</OrbitalErrorDiv>
            }
        </React.Fragment>
    )
}