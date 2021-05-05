import React, { Component } from "react";
import { TimePickerComponent } from "@syncfusion/ej2-react-calendars";

import "./css/buttons/material_custom.css";
import "./css/calendar/calendar/material_custom.css";
import "./css/schedule/material_custom.css";
import "./css/datepicker/material_custom.css";
import "./css/timepicker/material_custom.css";
import "./css/input_group/material_custom.css";

class TimePicker extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: this.props.value
        }
    }

    componentWillReceiveProps(nextProps) {
        setTimeout(() => {
            this.setState({
                value: nextProps.value
            })
        }, 100)
    }

    render() {
        var { format } = this.props;

        return <TimePickerComponent
            {...this.props}
            value={this.state.value}
            format={format || "HH:mm"}>
        </TimePickerComponent>
    }
}
export default TimePicker;