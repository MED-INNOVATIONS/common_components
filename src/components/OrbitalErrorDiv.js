import React from "react";
import styled from "styled-components";

const StyledDiv = styled.div`
    margin-top: 0,25rem;
    font-size: 80%;
    color: #dc3545;
`;

function OrbitalErrorDiv(props) {
    return <StyledDiv>{props.children}</StyledDiv>
}
export default OrbitalErrorDiv;