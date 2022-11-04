import React from "react";
import styled from "styled-components";

function MandatoryFieldLabel(props) {
    const StyledDiv = styled.div`
        font-weight: normal;
    `;

    const StyledSpan = styled.span`
        color: #dc3545;
    `;

    return <StyledDiv {...props}>
        <StyledSpan>* </StyledSpan><span>{props.value}</span>
    </StyledDiv>
}
export default MandatoryFieldLabel;