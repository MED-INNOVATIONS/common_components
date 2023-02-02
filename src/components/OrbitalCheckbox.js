
import React from "react";
import styled from "styled-components";
import { FormCheck } from 'react-bootstrap';

const StyledFormCheck = styled(FormCheck)`
    padding-top:   ${(props) => (props.paddingtop)};
    input{
        transform: ${(props) => (props.scale ? "scale(" + props.scale + ")" : "scale(1.5)")};
    }
`;

const OrbitalCheckbox = (props) => {
    var { disabled, checked, onChange, paddingTop, paddingtop, scale } = props;

    const pT = paddingtop || paddingTop;
    return <StyledFormCheck type="checkbox" paddingtop={pT}
        {...props}>
    </StyledFormCheck>
}

export default OrbitalCheckbox;