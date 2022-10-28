
import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSave } from '@fortawesome/free-regular-svg-icons';

import { Tooltip } from "../Tooltip/Tooltip";

const StyledFontAwesomeIcon = styled(FontAwesomeIcon)`
    color: ${(props) => (props.disabled === true ? "grey" : "#007bff")};
    cursor: ${(props) => (props.disabled === true ? "not-allowed" : "pointer")};
    margin-right: ${(props) => (props.marginright)};
    font-size: 1.5rem;
`;

const OrbitalSaveIcon = (props) => {
    var { tooltip, disabled, marginright, onClick } = props;
    return <Tooltip tooltip={tooltip}>
        <StyledFontAwesomeIcon marginright={marginright} icon={faSave} disabled={disabled} onClick={() => { if (disabled !== true) { onClick() } }} />
    </Tooltip>
}

export default OrbitalSaveIcon;