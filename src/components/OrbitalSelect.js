import React from "react";
import Select from "react-select";
import CreatableSelect from 'react-select/creatable';

import OrbitalErrorDiv from "./OrbitalErrorDiv";

function OrbitalSelect(props) {
    var { isInvalid, errorMsg, showCreatable = false } = props;

    function getTypeSelectStyles(isInvalid) {
        var typeBorder = isInvalid ? { borderColor: "#dc3545", boxShadow: "#dc3545", "&:hover": { borderColor: "#dc3545" } } : {};
        var typeStyles = { control: styles => ({ ...styles, ...typeBorder }) };
        return typeStyles;
    }

    return (
        <React.Fragment>
            {showCreatable == false ?
                <Select
                    styles={getTypeSelectStyles(isInvalid)}
                    {...props}>
                </Select> :
                <CreatableSelect
                    styles={getTypeSelectStyles(isInvalid)}
                    {...props}
                >
                </CreatableSelect>
            }

            {isInvalid &&
                <OrbitalErrorDiv>{errorMsg}</OrbitalErrorDiv>
            }
        </React.Fragment>
    )
}
export default OrbitalSelect;