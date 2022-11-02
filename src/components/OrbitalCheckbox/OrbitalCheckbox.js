
import React from "react";
import styled from "styled-components";
import { FormCheck } from 'react-bootstrap';

const StyledFormCheck = styled(FormCheck)`
    padding-top:  ${(props) => (props.paddingTop ? props.paddingTop : "0.5rem")};
    input{
        transform: ${(props) => (props.scale ? "scale(" + props.scale + ")" : "scale(1.5)")};
    }
`;

const OrbitalCheckbox = (props) => {
    var { disabled, checked, onChange, paddingTop, scale } = props;

    return <StyledFormCheck type="checkbox"
        {...props}>
    </StyledFormCheck>
}

export default OrbitalCheckbox;