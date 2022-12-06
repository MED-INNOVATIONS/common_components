import React, { useState, useEffect } from "react";
import { ScheduleComponent, Inject, ViewDirective, ViewsDirective, Day, Week, WorkWeek, Month, Agenda } from "@syncfusion/ej2-react-schedule";
import moment from "moment";
import _ from "lodash";
import { getLocaleByLanguage } from "./GlobalizationUtils";

const dateFormat = "DD/MM/YYYY";
var scheduleObj = {};

function SchedulerV2(props) {
    const { language = "En", height, dayView, weekView, workWeekView, monthView, agendaView, currentView: startingCurrentView, firstDayOfWeek = 1, closedDates = [], events, onChangeDate, onChangeView, onChangeAgendaRange } = props;
    const [selectedDate, setSelectedDate] = useState(moment().format(dateFormat));
    const [currentView, setCurrentView] = useState(startingCurrentView || "Month");

    /*************************************************************************/
    /*************************** STANDARD ************************************/
    /*************************************************************************/
    useEffect(() => {
        if (_.isEmpty(scheduleObj) === false) {
            scheduleObj.refresh();
        }
    }, [language, closedDates])

    useEffect(() => {
        if (_.isEmpty(scheduleObj) === false) {
            scheduleObj.changeCurrentView(currentView);
            changeAgendaRange();
        }
    }, [currentView])

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