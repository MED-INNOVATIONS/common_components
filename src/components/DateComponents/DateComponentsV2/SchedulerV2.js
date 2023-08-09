import React, { useState, useEffect } from "react";
import * as ReactDOMServer from 'react-dom/server';
import { ScheduleComponent, Inject, ViewDirective, ViewsDirective, Day, Week, WorkWeek, Month, Agenda } from "@syncfusion/ej2-react-schedule";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUsers } from '@fortawesome/free-solid-svg-icons'

import moment from "moment";
import _ from "lodash";
import { BsCalendar } from "react-icons/bs";
import { createElement } from '@syncfusion/ej2-base';

import * as SyncfusionUtils from "./../../../services/SyncfusionUtils";

const dateFormat = "DD/MM/YYYY";
var scheduleObj = {};

function SchedulerV2(props) {
    const { language = "En", height, dayView, weekView, workWeekView, monthView, agendaView, currentView: startingCurrentView, firstDayOfWeek = 1, closedDates = [], events, onChangeDate, onChangeDateRange, onChangeView, onChangeAgendaRange, slotsCount, bookingCount } = props;
    const [selectedDate, setSelectedDate] = useState(moment().format(dateFormat));
    const [currentView, setCurrentView] = useState(startingCurrentView || "Month");

    const [initialization, setInitialization] = useState(false);
    /*************************************************************************/
    /*************************** STANDARD ************************************/
    /*************************************************************************/
    useEffect(() => {
        SyncfusionUtils.setSyncfusionLocalizationV2();
        setInitialization(true);
    }, [])

    useEffect(() => {
        if (_.isEmpty(scheduleObj) === false) {
            scheduleObj.refresh();
        }
    }, [language, closedDates, slotsCount, bookingCount])

    useEffect(() => {
        if (_.isEmpty(scheduleObj) === false) {
            scheduleObj.changeCurrentView(currentView);
            changeDateRange();
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
                    // setTimeout(() => {
                    //     cellClick({ startTime: currentDate })
                    // }, 10)
                };
            }
        }
    }

    function changeDateRange() {
        var first = moment(_.first(scheduleObj.activeView.renderDates));
        var last = moment(_.last(scheduleObj.activeView.renderDates));
        if (onChangeAgendaRange) {
            onChangeAgendaRange(first, last);
        }
        if (onChangeDateRange) {
            onChangeDateRange(first, last);
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
            previousDate !== today
            // && currentView === "Month"
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

        changeDateRange();
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

    function parsedCount(count) {
        var parsedCountDates = Object.keys(count).reduce((prev, curr, index) => { return { ...prev, [moment(curr).format(dateFormat)]: count[curr] } }, {});

        return parsedCountDates;
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

    function checkDatesCount(args) {
        var { date, element, elementType, groupIndex, name } = args;

        if (_.isEmpty(slotsCount) == false) {
            var newSlotCount = parsedCount(slotsCount);
            var slotDates = Object.keys(newSlotCount);
            var parsedClosedDates = parseClosedDates(closedDates) || [];
            var parseSlotDates = slotDates.filter((date) => { return parsedClosedDates.indexOf(date) === -1 });
            var parsedCellDate = moment(date).format(dateFormat);

            if (_.isEmpty(bookingCount) == false) {
                var newBookingCount = parsedCount(bookingCount);
                var bookingDates = Object.keys(newBookingCount);
                var parseBookingDates = bookingDates.filter((date) => { return parsedClosedDates.indexOf(date) === -1 });
            }
            if (elementType === "monthCells" && _.indexOf(parseSlotDates, parsedCellDate) > -1) {
                let ele = createElement('div');
                ele.innerHTML = ReactDOMServer.renderToString(
                    <div>
                        <BsCalendar style={{ color: "#28a745", marginRight: "5px" }} />{newSlotCount[parsedCellDate]}
                        {_.isEmpty(bookingCount) == false && _.indexOf(parseBookingDates, parsedCellDate) > -1 && (
                            <div><FontAwesomeIcon icon={faUsers} style={{ color: "#28a745", marginRight: "5px" }} />{newBookingCount[parsedCellDate]}</div>
                        )}
                    </div>);
                (args.element).appendChild(ele);
            }
        }
    }

    function renderCell(args) {
        checkSelectedDate(args);
        checkClosedDate(args);
        checkDatesCount(args);
    }

    /*************************************************************************/
    /***************************** RENDER ************************************/
    /*************************************************************************/
    return (
        <React.Fragment>
            {initialization === true &&
                <ScheduleComponent
                    locale={SyncfusionUtils.getLocaleByLanguage(language)}
                    ref={(schedule) => { scheduleObj = schedule }}
                    height={height}
                    firstDayOfWeek={firstDayOfWeek}
                    // editorTemplate={() => { return <div></div> }}
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
            }
        </React.Fragment>
    )
}
export default SchedulerV2;