import React from "react";
import styled from "styled-components";


function OrbitalErrorDiv(props) {

    const StyledDiv = styled.div`
        margin-top: 0,25rem;
        font-size: 80%;
        color: #dc3545;
    `;

    return <StyledDiv>{props.children}</StyledDiv>
}
export default OrbitalErrorDiv;