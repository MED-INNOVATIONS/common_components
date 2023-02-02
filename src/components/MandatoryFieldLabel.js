import React from "react";
import styled from "styled-components";

const StyledDiv = styled.div`
    font-weight:  ${props => (props.halfbold) === true ? "500" : "normal"};;
`;

const StyledSpan = styled.span`
    color: #dc3545;
`;

function MandatoryFieldLabel(props) {
    return <StyledDiv {...props}>
        <StyledSpan>* </StyledSpan><span>{props.value}</span>
    </StyledDiv>
}
export default MandatoryFieldLabel;