import React, { useState, useEffect } from "react";
import { RecurrenceEditorComponent } from "@syncfusion/ej2-react-schedule";
import styled from "styled-components";
import _ from "lodash";

import * as SyncfusionUtils from "./../../../services/SyncfusionUtils";

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

function RecurrenceEditorV2(props) {
    const { language, dateFormat, isInvalid, firstDayOfWeek = 1 } = props;
    var invalid = isInvalid === true || _.isEmpty(isInvalid) === false;

    const [initialization, setInitialization] = useState(false);

    /*************************************************************************/
    /*************************** STANDARD ************************************/
    /*************************************************************************/
    useEffect(() => {
        SyncfusionUtils.setSyncfusionLocalizationV2();
        setInitialization(true);
    }, [])

    /*************************************************************************/
    /***************************** RENDER ************************************/
    /*************************************************************************/
    return (
        <React.Fragment>
            {initialization === true &&
                <React.Fragment>
                    <StyledDiv isInvalid={invalid}>
                        <RecurrenceEditorComponent
                            {...props}
                            firstDayOfWeek={firstDayOfWeek}
                            locale={SyncfusionUtils.getLocaleByLanguage(language)}
                            dateFormat={dateFormat || "dd/MM/yyyy"}>
                        </RecurrenceEditorComponent>
                    </StyledDiv>
                </React.Fragment>
            }
        </React.Fragment>
    )
}
export default RecurrenceEditorV2;