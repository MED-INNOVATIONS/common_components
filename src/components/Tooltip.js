import React, { Component } from "react";
import { OverlayTrigger, Tooltip } from 'react-bootstrap';
import _ from "lodash";

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

        if (_.isEmpty(tooltip) === true) {
            return <React.Fragment>
                {children}
            </React.Fragment>
        } else {
            return (
                <OverlayTrigger
                    style={this.props.style}
                    className={this.props.className}
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
}
export default CustomTooltip;