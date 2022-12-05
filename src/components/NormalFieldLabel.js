import React from "react";
import styled from "styled-components";

const StyledDiv = styled.div`
    font-weight: normal;
    color:  ${props => props.isTransparent === true ? "transparent" : null};
`;

function NormalFieldLabel(props) {
    return <StyledDiv {...props}>{props.value}</StyledDiv>
}
export default NormalFieldLabel