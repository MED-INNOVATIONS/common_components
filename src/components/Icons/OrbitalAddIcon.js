import React from "react";
import styled from "styled-components";
import { BsPlusCircle } from "react-icons/bs";

import Tooltip from "../Tooltip/Tooltip";

const Container = styled.div`
    float: ${(props) => (props.float)}
`;

const StyledBsPlusCircle = styled(BsPlusCircle)`
    color: ${(props) => (props.disabled === true ? "grey" : "#007bff")};
    cursor: ${(props) => (props.disabled === true ? "not-allowed" : "pointer")};
    font-size: 1.5rem;
`;

const OrbitalAddIcon = (props) => {
    var { float, tooltip, disabled, onClick } = props;
    return <Container float={float}>
        <Tooltip tooltip={tooltip}>
            <StyledBsPlusCircle disabled={disabled} onClick={() => { if (disabled !== true) { onClick() } }}></StyledBsPlusCircle>
        </Tooltip>
    </Container>
}

export default OrbitalAddIcon;