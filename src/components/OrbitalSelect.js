import React from "react";
import Select from "react-select";

import OrbitalErrorDiv from "./OrbitalErrorDiv";

function OrbitalSelect(props) {
    var { isInvalid, errorMsg } = props;

    function getTypeSelectStyles(isInvalid) {
        var typeBorder = isInvalid ? { borderColor: "#dc3545", boxShadow: "#dc3545", "&:hover": { borderColor: "#dc3545" } } : {};
        var typeStyles = { control: styles => ({ ...styles, ...typeBorder }) };
        return typeStyles;
    }

    return (
        <React.Fragment>
            <Select
                styles={getTypeSelectStyles(isInvalid)}
                {...props}>
            </Select>
            {isInvalid &&
                <OrbitalErrorDiv>{errorMsg}</OrbitalErrorDiv>
            }
        </React.Fragment>
    )
}
export default OrbitalSelect;