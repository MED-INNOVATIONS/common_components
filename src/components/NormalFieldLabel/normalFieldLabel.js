import React, { Component } from "react";
import "./normalFieldLabel.css"

class NormalFieldLabel extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        var className = "label_style" + " " + this.props.className;

        return (
            <div style={this.props.style} className={className}>
                {this.props.value}
            </div>
        )
    }
}

export default NormalFieldLabel