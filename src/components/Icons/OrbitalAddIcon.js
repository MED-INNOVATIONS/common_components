import React from "react";
import styled from "styled-components";
import { BsPlusCircle } from "react-icons/bs";

import Tooltip from "../Tooltip";

const Container = styled.div`
    float: ${(props) => (props.float)}
`;

const StyledBsPlusCircle = styled(BsPlusCircle)`
    color: ${(props) => (props.disabled === true ? "grey" : "#007bff")};
    cursor: ${(props) => (props.disabled === true ? "not-allowed" : "pointer")};
    font-size:  ${(props) => (props.fontsize)};
`;

const OrbitalAddIcon = (props) => {
    var { float, tooltip, disabled, fontsize, onClick } = props;
    return <Container float={float}>
        <Tooltip tooltip={tooltip}>
            <StyledBsPlusCircle fontsize={fontsize || "1.5rem"} disabled={disabled} onClick={() => { if (disabled !== true) { onClick() } }}></StyledBsPlusCircle>
        </Tooltip>
    </Container>
}

export default OrbitalAddIcon;