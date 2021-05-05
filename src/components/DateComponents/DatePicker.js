import React, { Component } from "react";
import { DatePickerComponent } from "@syncfusion/ej2-react-calendars";

import "./css/buttons/material_custom.css";
import "./css/calendar/calendar/material_custom.css";
import "./css/schedule/material_custom.css";
import "./css/datepicker/material_custom.css";
import "./css/input_group/material_custom.css";

class DatePicker extends Component {
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

        return <DatePickerComponent
            {...this.props}
            value={this.state.value}
            format={format || "dd/MM/yyyy"}>
        </DatePickerComponent>
    }
}
export default DatePicker;