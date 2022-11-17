import React from "react";
import styled from "styled-components";

const StyledDiv = styled.div`
font-weight: normal;
`;

function NormalFieldLabel(props) {
    return <StyledDiv {...props}>{props.value}</StyledDiv>
}
export default NormalFieldLabel