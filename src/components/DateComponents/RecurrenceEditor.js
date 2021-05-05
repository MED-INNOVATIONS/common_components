import React, { Component } from "react";
import { RecurrenceEditorComponent } from "@syncfusion/ej2-react-schedule";

import "./css/buttons/material_custom.css";
import "./css/calendar/calendar/material_custom.css";
import "./css/schedule/material_custom.css";
import "./css/datepicker/material_custom.css";
import "./css/timepicker/material_custom.css";
import "./css/datetimepicker/material_custom.css";
import "./css/input_group/material_custom.css";
import "./css/dropdown/material_custom.css";

class RecurrenceEditor extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        var { dateFormat } = this.props;

        return <RecurrenceEditorComponent
            dateFormat={dateFormat || "dd/MM/yyyy"}
            {...this.props}>
        </RecurrenceEditorComponent>
    }
}
export default RecurrenceEditor;