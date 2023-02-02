import React from "react";
import styled from "styled-components";

const StyledDiv = styled.div`
    font-weight:  ${props => (props.halfbold) === true ? "500" : "normal"};;
    color:  ${props => (props.isTransparent || props.istransparent) === true ? "transparent" : null};
`;

function NormalFieldLabel(props) {
    return <StyledDiv {...props}>{props.value}</StyledDiv>
}
export default NormalFieldLabel