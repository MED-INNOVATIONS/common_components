import React from 'react';
import LoadingOverlay from 'react-loading-overlay';

function CustomLoadingOverlay(props) {
    return <LoadingOverlay {...props}
        styles={{
            overlay: (base) => ({
                ...base,
                background: 'rgba(24, 144, 255, 0.5)'
            })
        }}>
        {props.children}
    </LoadingOverlay>
}
export default CustomLoadingOverlay;