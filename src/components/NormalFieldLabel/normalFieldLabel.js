import React from "react";
import styled from "styled-components";

function NormalFieldLabel(props) {
    const StyledDiv = styled.div`
        font-weight: normal;
    `;

    return <StyledDiv {...props}>{props.value}</StyledDiv>
}
export default NormalFieldLabel