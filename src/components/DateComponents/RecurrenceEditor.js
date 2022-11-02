import React, { Component } from "react";
import { RecurrenceEditorComponent } from "@syncfusion/ej2-react-schedule";
import { L10n, loadCldr } from '@syncfusion/ej2-base';

import "./css/buttons/material_custom.css";
import "./css/calendar/material_custom.css";
import "./css/schedule/material_custom.css";
import "./css/datepicker/material_custom.css";
import "./css/timepicker/material_custom.css";
import "./css/datetimepicker/material_custom.css";
import "./css/input_group/material_custom.css";
import "./css/dropdown/material_custom.css";

loadCldr(
    require('cldr-data/supplemental/numberingSystems.json'),
    require('cldr-data/main/it-CH/ca-gregorian.json'),
    require('cldr-data/main/it-CH/numbers.json'),
    require('cldr-data/main/it-CH/timeZoneNames.json'),
    require('cldr-data/main/it-CH/dateFields.json')
);

L10n.load({
    "en-US": {
        "recurrenceeditor": {
            "none": "None",
            "daily": "Daily",
            "weekly": "Weekly",
            "monthly": "Monthly",
            "month": "Month",
            "yearly": "Yearly",
            "never": "Never",
            "until": "Until",
            "count": "Count",
            "first": "First",
            "second": "Second",
            "third": "Third",
            "fourth": "Fourth",
            "last": "Last",
            "repeat": "Repeat",
            "repeatEvery": "Repeat Every",
            "on": "Repeat On",
            "end": "End",
            "onDay": "Day",
            "days": "Day(s)",
            "weeks": "Week(s)",
            "months": "Month(s)",
            "years": "Year(s)",
            "every": "every",
            "summaryTimes": "time(s)",
            "summaryOn": "on",
            "summaryUntil": "until",
            "summaryRepeat": "Repeats",
            "summaryDay": "day(s)",
            "summaryWeek": "week(s)",
            "summaryMonth": "month(s)",
            "summaryYear": "year(s)"
        }
    },
    'it-CH': {
        "recurrenceeditor": {
            "none": "Nessuna",
            "daily": "Giornaliera",
            "weekly": "Settimanale",
            "monthly": "Mensile",
            "month": "Mese",
            "yearly": "Annuale",
            "never": "Mai",
            "until": "Fino",
            "count": "Volte",
            "first": "Primo",
            "second": "Secondo",
            "third": "Terzo",
            "fourth": "Quarto",
            "last": "Ultimo",
            "repeat": "Ripeti",
            "repeatEvery": "Ripeti sempre",
            "on": "Ripeti",
            "end": "Fine",
            "onDay": "Giorni",
            "days": "Giorno(i)",
            "weeks": "Settimana(e)",
            "months": "Mese(i)",
            "years": "Anno(i)",
            "every": "sempre",
            "summaryTimes": "tempo(i)",
            "summaryOn": "on",
            "summaryUntil": "fino",
            "summaryRepeat": "Ripeti",
            "summaryDay": "giorno(i)",
            "summaryWeek": "settimana(e)",
            "summaryMonth": "mese(i)",
            "summaryYear": "anno(i)"
        }
    }
})

class RecurrenceEditor extends Component {
    constructor(props) {
        super(props);
        this.state = {
            locale: this.props.locale
        }
    }

    componentWillReceiveProps(nextProps) {
        setTimeout(() => {
            this.setState({
                locale: nextProps.locale
            })
        }, 100)
    }


    render() {
        var { dateFormat } = this.props;
        var locale = this.state.locale || "en-US"

        return <RecurrenceEditorComponent
            dateFormat={dateFormat || "dd/MM/yyyy"}
            locale={locale}
            {...this.props}>
        </RecurrenceEditorComponent>
    }
}
export default RecurrenceEditor;