import React from "react";
// import { OrbitalErrorDiv } from "orbital_common_components";
import { TimePickerComponent } from "@syncfusion/ej2-react-calendars";
import styled from "styled-components";
import _ from "lodash";

import OrbitalErrorDiv from "./../../OrbitalErrorDiv";

const StyledDiv = styled.div`
    .e-input-group, .e-input-group.e-control-wrapper{
        height: calc(1.5em + 0.75rem + 2px);
        line-height: 1.5;
        font-size: 1rem;
        font-weight: 400;
        color: #495057;
        background-color: #fff;
        background-clip: padding-box;
        border: 1px solid;
        border-color: ${props => props.isInvalid === true ? "#dc3545 !important" : "#ced4da"};
        border-radius: 0.25rem;
    } 
    
    .e-input-group.e-error, .e-input-group.e-control-wrapper.e-error, .e-input-group.e-error:not(.e-float-icon-left), .e-input-group.e-control-wrapper.e-error:not(.e-float-icon-left) {
        border-color: #ced4da;
    }

    .e-input-group.e-error .e-input-group-icon, .e-input-group.e-control-wrapper.e-error .e-input-group-icon{
        border-color: #ced4da;
    }
    
    .e-input-group input.e-input, .e-input-group.e-control-wrapper input.e-input, .e-float-input input, .e-float-input.e-control-wrapper input, .e-input-group textarea.e-input, .e-input-group.e-control-wrapper textarea.e-input, .e-float-input textarea, .e-float-input.e-control-wrapper textarea, .e-input-group .e-input[disabled], .e-input-group.e-control-wrapper .e-input[disabled], .e-input-group.e-disabled input.e-input, .e-input-group.e-control-wrapper.e-disabled input.e-input, .e-input-group.e-disabled textarea.e-input, .e-input-group.e-control-wrapper.e-disabled textarea.e-input {
        margin-top: 0.225rem;
    }
`;

function TimePickerv2(props) {
    const { enabled, disabled, isInvalid, errorMessage } = props;
    const isEnabled = enabled === false || disabled === true ? false : true;
    const invalid = isInvalid === true || _.isEmpty(isInvalid) === false;

    return <React.Fragment>
        <StyledDiv isInvalid={invalid}>
            <TimePickerComponent {...props} enabled={isEnabled} ></TimePickerComponent>
        </StyledDiv>
        {isInvalid &&
            <OrbitalErrorDiv>{errorMessage}</OrbitalErrorDiv>
        }
    </React.Fragment>

}
export default TimePickerv2;