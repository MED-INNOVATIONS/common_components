import React, { Component } from "react";
import { OverlayTrigger, Tooltip } from 'react-bootstrap';


class CustomTooltip extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        var placement = this.props.placement || "top";
        var delay = this.props.delay || { show: 250, hide: 400 };
        var tooltip = this.props.tooltip || "";
        var children = this.props.children || <div>Error children</div>

        return (
            <OverlayTrigger
                placement={placement}
                delay={{ delay }}
                overlay={<Tooltip>
                    {tooltip}
                </Tooltip>}>
                {children}
            </OverlayTrigger>
        )
    }
}
export default CustomTooltip;