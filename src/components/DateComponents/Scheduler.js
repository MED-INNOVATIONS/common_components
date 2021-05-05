/** @format */

import React, { Component } from "react";
import {
  ScheduleComponent, Inject, ViewDirective, ViewsDirective,
  Day, Week, WorkWeek, Month, Agenda,
} from "@syncfusion/ej2-react-schedule";
import moment from "moment";

import "./css/buttons/material_custom.css";
import "./css/calendar/calendar/material_custom.css";
import "./css/schedule/material_custom.css";

const _ = require("lodash");
const date_format = "DD/MM/YYYY";

export class ReservationScheduler extends Component {
  constructor() {
    super(...arguments);
    this.state = {
      closedDates: this.props.closedDates ? this.props.closedDates : [],
      dataSource: { dataSource: this.props.events || [] },
    }
    this.scheduleObj = null;
    this.currentView = this.props.currentView || "Month";
    this.selectedDate = moment().format(date_format);

    this.checkSelectedDate = this.checkSelectedDate.bind(this);
    this.checkClosedDate = this.checkClosedDate.bind(this);
    this.changeAgendaRange = this.changeAgendaRange.bind(this);
  }

  componentDidMount() {
    this.currentView = this.props.currentView || "Month";
  }

  componentWillReceiveProps(nextProps) {
    var { closedDates, currentView, events } = nextProps;

    if (this.scheduleObj != null) {
      if (closedDates && closedDates.toString() !== this.state.closedDates.toString()) {
        this.setState({
          closedDates: closedDates,
        }, () => {
          this.scheduleObj.refresh();
        });
      }

      if (currentView != null) {
        this.scheduleObj.changeCurrentView(currentView);
        this.currentView = currentView;
      }

      var new_events = events || [];
      var dataSource = { dataSource: new_events };
      this.setState({
        dataSource: dataSource
      })
    }
  }


  /*************************************************************************/
  /************************** RENDER CELL **********************************/
  /*************************************************************************/
  checkSelectedDate(args) {
    var selected_date = moment(this.selectedDate, date_format).format(date_format);

    var date = moment(args.date).format(date_format);
    if (args.elementType == "monthCells" && date == selected_date) {
      args.element.setAttribute("style", "background-color:rgb(0, 123, 255, 0.2)");
      args.element.classList.remove("e-current-date");
    } else {
      args.element.removeAttribute("style", "background-color:rgb(0, 123, 255, 0.2)");
      args.element.classList.remove("e-current-date");
    }

    var weekday = moment(selected_date, date_format).format("dddd");
    if (args.elementType == "monthDay") {
      if (args.element.textContent == weekday) {
        args.element.classList.add("e-current-day");
      } else {
        args.element.classList.remove("e-current-day");
      }
    }
  }

  parseClosedDates(closedDates) {
    let closed_day = closedDates.length
      ? _.map(this.state.closedDates, function (el) {
        let se = new Date(el);
        let s = new Date(
          se.getFullYear(),
          se.getMonth(),
          se.getDate()
        ).getTime();
        return s;
      })
      : [];
    return closed_day;
  }

  checkClosedDate(args) {
    var closed_day = this.parseClosedDates(this.state.closedDates);
    if (args.date) {
      var date = new Date(args.date.getFullYear(), args.date.getMonth(), args.date.getDate()).getTime();

      if (args.elementType == "monthCells" && closed_day.indexOf(date) > -1) {
        args.element.classList.add("e-current-date");
      }
    }
  }

  /*************************************************************************/
  /************************** RENDER ***************************************/
  /*************************************************************************/
  changeAgendaRange() {
    if (this.currentView == "Agenda") {
      setTimeout(() => {
        if (this.props.onChangeAgendaRange) {
          var first = _.first(this.scheduleObj.activeView.renderDates);
          var last = _.last(this.scheduleObj.activeView.renderDates);

          this.props.onChangeAgendaRange(first, last);
        }
      }, 100)
    }
  }

  /*************************************************************************/
  /************************** RENDER ***************************************/
  /*************************************************************************/
  render() {
    var self = this;

    function renderCell(args) {
      self.checkSelectedDate(args);
      self.checkClosedDate(args);
    }

    function cellClick(args) {
      var tmp = moment(args.startTime).format(date_format);
      self.selectedDate = tmp;
      self.scheduleObj.refresh();
      if (self.props.onChangeDate) {
        self.props.onChangeDate(moment(args.startTime));
      }
    }

    function popupOpen(args) {
      if (args.type == "QuickInfo") {
        args.cancel = true;
      }
      if (args.type == "Editor") {
        args.cancel = true;
      }
    }

    function actionComplete(props) {
      if (props.requestType == "toolBarItemRendered") {
        var todayButton = _.find(props.items || [], { cssClass: "e-today" });
        if (todayButton) {
          todayButton.click = (a, b, c) => {
            var previousDate = new Date(2001, 1, 1);
            var currentDate = new Date();
            self.scheduleObj.navigating({
              action: "date",
              previousDate: previousDate,
              currentDate: currentDate,
            });
          };
        }
      }
    }

    function navigating(props) {
      var { previousDate, currentDate, action, currentView } = props;

      var today = moment().format(date_format);
      previousDate = previousDate ? moment(previousDate).format(date_format) : null;
      currentDate = currentDate ? moment(currentDate).format(date_format) : null;

      if (
        action == "date" &&
        currentDate &&
        currentDate == today &&
        previousDate != today &&
        currentView == "Month"
      ) {
        self.scheduleObj.selectedDate = new Date();
        self.selectedDate = moment().format(date_format);
        self.scheduleObj.refresh();
        if (self.props.onChangeDate) {
          self.props.onChangeDate(moment());
        }
      }

      if (action == "view" && self.props.onChangeView) {
        self.currentView = currentView;
        self.props.onChangeView(currentView);
      }

      self.changeAgendaRange();
    }

    return (
      <ScheduleComponent
        ref={schedule => this.scheduleObj = schedule}
        height={this.props.height}
        editorTemplate={() => { return <div></div> }}
        eventSettings={this.state.dataSource}
        renderCell={renderCell}
        cellClick={cellClick}
        popupOpen={popupOpen}
        actionComplete={actionComplete}
        navigating={navigating}>
        <ViewsDirective>
          {this.props.dayView == true && <ViewDirective option='Day' />}
          {this.props.weekView == true && <ViewDirective option='Week' />}
          {this.props.workWeekView == true && <ViewDirective option='WorkWeek' />}
          {this.props.monthView == true && <ViewDirective option="Month" />}
          {this.props.agendaView == true && <ViewDirective option="Agenda" />}
        </ViewsDirective>
        <Inject services={[Day, Week, WorkWeek, Month, Agenda]} />
      </ScheduleComponent>
    );
  }
}
export default ReservationScheduler;