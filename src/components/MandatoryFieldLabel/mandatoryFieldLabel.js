import React, { Component } from "react";
import "./mandatoryFieldLabel.css"

class MandatoryFieldLabel extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        var className = "label_style" + " " + this.props.className;

        return (
            <div style={this.props.style}>
                <span className="mandatory_style">* </span><span className={className}>{this.props.value}</span>
            </div>
        )
    }
}

export default MandatoryFieldLabel