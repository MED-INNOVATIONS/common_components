import React, { Component } from "react";
import { DateTimePickerComponent } from "@syncfusion/ej2-react-calendars";

import "./css/buttons/material_custom.css";
import "./css/calendar/material_custom.css";
import "./css/schedule/material_custom.css";
import "./css/datepicker/material_custom.css";
import "./css/timepicker/material_custom.css";
import "./css/datetimepicker/material_custom.css";
import "./css/input_group/material_custom.css";

class DatePicker extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        var { format } = this.props;

        return <DateTimePickerComponent
            {...this.props}
            format={format || "dd/MM/yyyy HH:mm"}>
        </DateTimePickerComponent>
    }
}
export default DatePicker;