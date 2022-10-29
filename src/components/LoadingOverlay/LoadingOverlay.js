import React from 'react';
import LoadingOverlay from 'react-loading-overlay';
import styled from "styled-components";

function CustomLoadingOverlay(props) {
    const StyledLoadingOverlay = styled(LoadingOverlay)`
        .MyLoader_overlay {
            background: rgba(24, 144, 255, 0.5);
        }
    `;

    return <StyledLoadingOverlay classNamePrefix='MyLoader_' {...props}>{props.children}</StyledLoadingOverlay>
}
export default CustomLoadingOverlay;