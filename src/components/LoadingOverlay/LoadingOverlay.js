import React, { Component } from "react";
import LoadingOverlay from 'react-loading-overlay';

import './loadingOverlay.css';

class CustomLoadingOverlay extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        var children = this.props.children || <div>Error children</div>

        return (
            <LoadingOverlay
                {...this.props}>
                {children}
            </LoadingOverlay>
        )
    }
}

export default CustomLoadingOverlay