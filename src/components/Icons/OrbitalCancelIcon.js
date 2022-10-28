import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimesCircle } from '@fortawesome/free-regular-svg-icons';

import Tooltip from "../Tooltip/Tooltip";

const StyledFontAwesomeIcon = styled(FontAwesomeIcon)`
    cursor: ${(props) => (props.disabled === true ? "not-allowed" : "pointer")};
    color: grey;
    font-size: 1.5rem;
`;

const OrbitalCancelIcon = (props) => {
    var { tooltip, disabled, onClick } = props;
    return <Tooltip tooltip={tooltip}>
        <StyledFontAwesomeIcon icon={faTimesCircle} disabled={disabled} onClick={() => { if (disabled !== true) { onClick() } }} />
    </Tooltip>
}

export default OrbitalCancelIcon;