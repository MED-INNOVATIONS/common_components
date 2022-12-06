import React, { useState, useEffect } from "react";
import { ScheduleComponent, Inject, ViewDirective, ViewsDirective, Day, Week, WorkWeek, Month, Agenda } from "@syncfusion/ej2-react-schedule";
import moment from "moment";
import _ from "lodash";
import { L10n, loadCldr } from '@syncfusion/ej2-base';

const dateFormat = "DD/MM/YYYY";
var scheduleObj = {};


function getLocaleByLanguage(lang) {
    if (lang && lang === "It") {
        return "it-CH";
    } else if (lang && lang === "En") {
        return "en-US";
    }
}

loadCldr(
    require('cldr-data/supplemental/numberingSystems.json'),
    require('cldr-data/main/it-CH/ca-gregorian.json'),
    require('cldr-data/main/it-CH/numbers.json'),
    require('cldr-data/main/it-CH/timeZoneNames.json'),
    require('cldr-data/main/it-CH/dateFields.json')
);

L10n.load(
    {
        "it-CH": {
            'datepicker': {
                "today": 'Oggi'
            },
            'datetimepicker': {
                "today": 'Oggi'
            },
            "schedule": {
                "day": "Giorno",
                "week": "Settimana",
                "workWeek": "Settimana lavorativa",
                "month": "Mese",
                "agenda": "Agenda",
                "weekAgenda": "Agenda settimanale",
                "workWeekAgenda": "Agenda settimana lavorativa",
                "monthAgenda": "Agenda mensile",
                "today": "Oggi",
                "noEvents": "Nessun evento",
                "emptyContainer": "Non ci sono eventi programmati in questo giorno.",
                "allDay": "Tutto il giorno",
                "start": "Inizio",
                "end": "Fine",
                "more": "altro",
                "close": "Chiudi",
                "cancel": "Cancella",
                "noTitle": "(Nessun titolo)",
                "delete": "Elimina",
                "deleteEvent": "Elimina Evento",
                "deleteMultipleEvent": "Elimina Più Eventi",
                "selectedItems": "Articoli selezionati",
                "deleteSeries": "Elimina Serie",
                "edit": "Modifica",
                "editSeries": "Modifica Serie",
                "editEvent": "Modifica Evento",
                "createEvent": "Crea",
                "subject": "Soggetto",
                "addTitle": "Aggiungi titolo",
                "moreDetails": "Più Dettagli",
                "save": "Salva",
                "editContent": "Vuoi modificare questo evento o l'intera serie?",
                "deleteRecurrenceContent": "Vuoi eliminare solo questo evento o l'intera serie?",
                "deleteContent": "Si vuole davvero eliminare questo evento?",
                "deleteMultipleContent": "Si vuole davvero eliminare questi eventi?",
                "newEvent": "Nuovo Evento",
                "title": "Titolo",
                "location": "Luogo",
                "description": "Descrizione",
                "timezone": "Timezone",
                "startTimezone": "Timezone Iniziale",
                "endTimezone": "Timezone Finale",
                "repeat": "Ripeti",
                "saveButton": "Salva",
                "cancelButton": "Cancella",
                "deleteButton": "Elimina",
                "recurrence": "Ricorrenza",
                "wrongPattern": "Il modello della ricorrenza non è valido.",
                "seriesChangeAlert": "Le modifiche apportate a istanze specifiche di questa serie saranno annullate e tali eventi corrisponderanno nuovamente alla serie.",
                "createError": "La durata dell'evento deve essere inferiore alla frequenza con cui si verifica. Ridurre la durata o modificare il modello di ricorrenza nell'editor degli eventi di ricorrenza.",
                "recurrenceDateValidation": "Alcuni mesi hanno un numero di date inferiore a quello selezionato. Per questi mesi, la ricorrenza cadrà nell'ultima data del mese. ",
                "sameDayAlert": "Due occorrenze dello stesso evento non possono avvenire nello stesso giorno.",
                "editRecurrence": "Modifica Ricorrenza",
                "repeats": "Ripetizioni",
                "alert": "Attenzione",
                "startEndError": "La data di fine è più grande di quella di inzio.",
                "invalidDateError": "La data inserita non è valida.",
                "ok": "Ok",
                "occurrence": "Occorrenza",
                "series": "Serie",
                "previous": "Precendente",
                "next": "Successivo",
                "timelineDay": "Timeline Giornaliera",
                "timelineWeek": "Timeline Settimanale",
                "timelineWorkWeek": "Timeline Settimana Lavorativa",
                "timelineMonth": "Timeline Mensile",
                "expandAllDaySection": "Espandi",
                "collapseAllDaySection": "Collassa"
            },
            "recurrenceeditor": {
                "none": "Nessuna",
                "daily": "Giornaliera",
                "weekly": "Settimanale",
                "monthly": "Mensile",
                "month": "Mese",
                "yearly": "Annuale",
                "never": "Mai",
                "until": "Fino",
                "count": "Occorrenze",
                "first": "Primo",
                "second": "Secondo",
                "third": "Terzo",
                "fourth": "Quarto",
                "last": "Ultimo",
                "repeat": "Ripeti",
                "repeatEvery": "Ripeti Ogni",
                "on": "Ripeti il",
                "end": "Fine",
                "onDay": "Giorno",
                "days": "Giorno(i)",
                "weeks": "Settimana(e)",
                "months": "Mese(e)",
                "years": "Anno(i)",
                "every": "ogni",
                "summaryTimes": "orario(i)",
                "summaryOn": "il",
                "summaryUntil": "fino",
                "summaryRepeat": "Ripetizioni",
                "summaryDay": "giorno(i)",
                "summaryWeek": "settimana(e)",
                "summaryMonth": "mese(i)",
                "summaryYear": "anno(i)"
            }
        },
        "en-US": {
            'datepicker': {
                "today": 'Today'
            },
            'datetimepicker': {
                "today": 'Today'
            },
            "schedule": {
                "day": "Day",
                "week": "Week",
                "workWeek": "Work Week",
                "month": "Month",
                "agenda": "Agenda",
                "weekAgenda": "Week Agenda",
                "workWeekAgenda": "Work Week Agenda",
                "monthAgenda": "Month Agenda",
                "today": "Today",
                "noEvents": "No events",
                "emptyContainer": "There are no events scheduled on this day.",
                "allDay": "All day",
                "start": "Start",
                "end": "End",
                "more": "more",
                "close": "Close",
                "cancel": "Cancel",
                "noTitle": "(No Title)",
                "delete": "Delete",
                "deleteEvent": "Delete Event",
                "deleteMultipleEvent": "Delete Multiple Events",
                "selectedItems": "Items selected",
                "deleteSeries": "Delete Series",
                "edit": "Edit",
                "editSeries": "Edit Series",
                "editEvent": "Edit Event",
                "createEvent": "Create",
                "subject": "Subject",
                "addTitle": "Add title",
                "moreDetails": "More Details",
                "save": "Save",
                "editContent": "Do you want to edit only this event or entire series?",
                "deleteRecurrenceContent": "Do you want to delete only this event or entire series?",
                "deleteContent": "Are you sure you want to delete this event?",
                "deleteMultipleContent": "Are you sure you want to delete the selected events?",
                "newEvent": "New Event",
                "title": "Title",
                "location": "Location",
                "description": "Description",
                "timezone": "Timezone",
                "startTimezone": "Start Timezone",
                "endTimezone": "End Timezone",
                "repeat": "Repeat",
                "saveButton": "Save",
                "cancelButton": "Cancel",
                "deleteButton": "Delete",
                "recurrence": "Recurrence",
                "wrongPattern": "The recurrence pattern is not valid.",
                "seriesChangeAlert": "The changes made to specific instances of this series will be cancelled and those events will match the series again.",
                "createError": "The duration of the event must be shorter than how frequently it occurs. Shorten the duration, or change the recurrence pattern in the recurrence event editor.",
                "recurrenceDateValidation": "Some months have fewer than the selected date. For these months, the occurrence will fall on the last date of the month.",
                "sameDayAlert": "Two occurrences of the same event cannot occur on the same day.",
                "editRecurrence": "Edit Recurrence",
                "repeats": "Repeats",
                "alert": "Alert",
                "startEndError": "The selected end date occurs before the start date.",
                "invalidDateError": "The entered date value is invalid.",
                "ok": "Ok",
                "occurrence": "Occurrence",
                "series": "Series",
                "previous": "Previous",
                "next": "Next",
                "timelineDay": "Timeline Day",
                "timelineWeek": "Timeline Week",
                "timelineWorkWeek": "Timeline Work Week",
                "timelineMonth": "Timeline Month",
                "expandAllDaySection": "Expand",
                "collapseAllDaySection": "Collapse"
            },
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
        }
    }
);

function SchedulerV2(props) {
    const { language = "En", height, dayView, weekView, workWeekView, monthView, agendaView, currentView: startingCurrentView, firstDayOfWeek = 1, closedDates = [], events, onChangeDate, onChangeView, onChangeAgendaRange } = props;
    const [selectedDate, setSelectedDate] = useState(moment().format(dateFormat));
    const [currentView, setCurrentView] = useState(startingCurrentView || "Month");

    /*************************************************************************/
    /*************************** STANDARD ************************************/
    /*************************************************************************/
    useEffect(() => {
        scheduleObj.refresh();
    }, [language])

    useEffect(() => {
        scheduleObj.changeCurrentView(currentView);
        changeAgendaRange();
    }, [currentView])

    useEffect(() => {
        scheduleObj.refresh();
    }, [closedDates])

    /*************************************************************************/
    /*************************** FUNCTIONS ***********************************/
    /*************************************************************************/
    function cellClick(args) {
        var { cancel, element, endTime, event, isAllDay, name, startTime } = args;
        var parsedDate = moment(startTime).format(dateFormat);
        setSelectedDate(parsedDate);
        scheduleObj.refresh();
        if (onChangeDate) {
            var parsedStartTime = moment(startTime);
            onChangeDate(parsedStartTime);
        }
    }

    function popupOpen(args) {
        var { cancel, data, element, name, target, type } = args;
        if (type === "QuickInfo" || type === "Editor") {
            args.cancel = true;
        }
    }

    function actionComplete(args) {
        var { items, name, requestType } = args;
        if (requestType === "toolBarItemRendered") {
            var todayButton = _.find(items || [], { cssClass: "e-today" });
            if (_.isEmpty(todayButton) === false) {
                todayButton.click = () => {
                    var previousDate = new Date(2001, 1, 1);
                    var currentDate = new Date();
                    scheduleObj.navigating({
                        action: "date",
                        previousDate: previousDate,
                        currentDate: currentDate,
                    });
                    setTimeout(() => {
                        cellClick({ startTime: currentDate })
                    }, 10)
                };
            }
        }
    }

    function changeAgendaRange() {
        if (currentView === "Agenda" && onChangeAgendaRange) {
            setTimeout(() => {
                var first = moment(_.first(scheduleObj.activeView.renderDates));
                var last = moment(_.last(scheduleObj.activeView.renderDates));
                onChangeAgendaRange(first, last);
            }, 100)
        }
    }

    function manageViewAction(args) {
        var { currentView } = args;
        setCurrentView(currentView);
        if (onChangeView) {
            currentView = currentView;
            onChangeView(currentView);
        }
    }

    function manageDateAction(args) {
        var { currentDate, previousDate, currentView } = args;
        var today = moment().format(dateFormat);
        previousDate = previousDate ? moment(previousDate).format(dateFormat) : null;
        currentDate = currentDate ? moment(currentDate).format(dateFormat) : null;

        if (
            currentDate &&
            currentDate === today &&
            previousDate !== today &&
            currentView === "Month"
        ) {
            scheduleObj.selectedDate = new Date();
            cellClick({ startTime: new Date() })
        }
    }

    function navigating(args) {
        var { action, cancel, currentDate, name, previousDate, currentView } = args;

        switch (action) {
            case "date":
                manageDateAction(args);
                break;
            case "view":
                manageViewAction(args);
                break;
            default:
                break;
        }

        changeAgendaRange();
    }

    /*************************************************************************/
    /*************************** RENDER **************************************/
    /*************************************************************************/
    function checkSelectedDate(args) {
        var { date, element, elementType, groupIndex, name } = args;
        var parsedSelectedDate = moment(selectedDate, dateFormat).format(dateFormat);

        var parsedCellDate = moment(date).format(dateFormat);
        if (elementType === "monthCells" && parsedCellDate === parsedSelectedDate) {
            element.setAttribute("style", "background-color:rgb(0, 123, 255, 0.2)");
            element.classList.remove("e-current-date");
        } else {
            element.removeAttribute("style", "background-color:rgb(0, 123, 255, 0.2)");
            element.classList.remove("e-current-date");
        }

        var selectedDateWeekday = moment(parsedSelectedDate, dateFormat).format("dddd");
        if (elementType === "monthDay") {
            if (element.textContent === selectedDateWeekday) {
                element.classList.add("e-current-day");
            } else {
                element.classList.remove("e-current-day");
            }
        }
    }


    function parseClosedDates(closedDates) {
        var parsedClosedDates = _.map(closedDates || [], (date) => {
            var parsedDate = moment(date).format(dateFormat);
            return parsedDate;
        })
        return parsedClosedDates;
    }

    function checkClosedDate(args) {
        var { date, element, elementType, groupIndex, name } = args;

        var parsedClosedDates = parseClosedDates(closedDates) || [];
        var parsedCellDate = moment(date).format(dateFormat);
        if (elementType === "monthCells" && _.indexOf(parsedClosedDates, parsedCellDate) > -1) {
            args.element.classList.add("e-current-date");
            var innerElement = element.getElementsByClassName("e-date-header e-navigate")[0];
            innerElement.setAttribute("style", "background-color:#dc3545");
        }
    }

    function renderCell(args) {
        checkSelectedDate(args);
        checkClosedDate(args);
    }

    return (
        <React.Fragment>
            <ScheduleComponent
                locale={getLocaleByLanguage(language)}
                ref={(schedule) => { scheduleObj = schedule }}
                height={height}
                firstDayOfWeek={firstDayOfWeek}
                editorTemplate={() => { return <div></div> }}
                eventSettings={events || []}
                renderCell={renderCell}
                cellClick={cellClick}
                popupOpen={popupOpen}
                actionComplete={actionComplete}
                navigating={navigating}>
                <ViewsDirective>
                    {dayView === true && <ViewDirective option='Day' />}
                    {weekView === true && <ViewDirective option='Week' />}
                    {workWeekView === true && <ViewDirective option='WorkWeek' />}
                    {monthView === true && <ViewDirective option="Month" />}
                    {agendaView === true && <ViewDirective option="Agenda" />}
                </ViewsDirective>
                <Inject services={[Day, Week, WorkWeek, Month, Agenda]} />
            </ScheduleComponent>
        </React.Fragment>
    )
}
export default SchedulerV2;