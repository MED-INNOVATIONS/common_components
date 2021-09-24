import axios from 'axios';
import React__default, { Component, createElement } from 'react';
import { DatePickerComponent, DateTimePickerComponent, TimePickerComponent } from '@syncfusion/ej2-react-calendars';
import { RecurrenceEditorComponent, ScheduleComponent, ViewsDirective, ViewDirective, Inject, Day, Week, WorkWeek, Month, Agenda } from '@syncfusion/ej2-react-schedule';
import moment from 'moment';
import { OverlayTrigger, Tooltip, Row, Col, Button, Form } from 'react-bootstrap';
import { useTable, useSortBy, usePagination, useResizeColumns, useFlexLayout, useRowSelect } from 'react-table';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSort, faSortDown, faSortUp, faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';
import _$1 from 'lodash';
import 'bootstrap/dist/css/bootstrap.min.css';
import LoadingOverlay from 'react-loading-overlay';

var API_SB_BASE_URL = "https://sbapi.orbital.cloud";

var APISb = /*#__PURE__*/function () {
  function APISb() {}

  APISb.get = function get(token, endpoint, params, contentType) {
    var url = API_SB_BASE_URL + endpoint;
    contentType = contentType || "application/json";
    var configHeaders = {
      "content-type": contentType,
      "Accept": "application/json",
      "Authorization": "Bearer " + token
    };
    var config = {
      method: "get",
      url: url,
      params: params || {},
      headers: configHeaders
    };
    return new Promise(function (resolve, reject) {
      axios(config).then(function (result) {
        resolve(result);
      })["catch"](function (error) {
        reject(error);
      });
    });
  };

  APISb.post = function post(token, endpoint, params, data, contentType) {
    var url = API_SB_BASE_URL + endpoint;
    contentType = contentType || "application/json";
    var configHeaders = {
      "content-type": contentType,
      "Accept": "application/json",
      "Authorization": "Bearer " + token
    };
    var config = {
      method: "post",
      url: url,
      params: params || {},
      data: data,
      headers: configHeaders
    };
    return new Promise(function (resolve, reject) {
      axios(config).then(function (result) {
        resolve(result);
      })["catch"](function (error) {
        reject(error);
      });
    });
  };

  APISb.put = function put(token, endpoint, params, data, contentType) {
    var url = API_SB_BASE_URL + endpoint;
    contentType = contentType || "application/json";
    var configHeaders = {
      "content-type": contentType,
      "Accept": "application/json",
      "Authorization": "Bearer " + token
    };
    var config = {
      method: "put",
      url: url,
      params: params || {},
      data: data,
      headers: configHeaders
    };
    return new Promise(function (resolve, reject) {
      axios(config).then(function (result) {
        resolve(result);
      })["catch"](function (error) {
        reject(error);
      });
    });
  };

  APISb.get_plain = function get_plain(endpoint, params, contentType) {
    var url = API_SB_BASE_URL + endpoint;
    contentType = contentType || "application/json";
    var configHeaders = {
      "content-type": contentType,
      "Accept": "application/json"
    };
    var config = {
      method: "get",
      url: url,
      params: params || {},
      headers: configHeaders
    };
    return new Promise(function (resolve, reject) {
      axios(config).then(function (result) {
        resolve(result);
      })["catch"](function (error) {
        reject(error);
      });
    });
  };

  APISb.post_plain = function post_plain(endpoint, params, data, contentType) {
    var url = API_SB_BASE_URL + endpoint;
    contentType = contentType || "application/json";
    var configHeaders = {
      "content-type": contentType,
      "Accept": "application/json"
    };
    var config = {
      method: "post",
      url: url,
      params: params || {},
      data: data,
      headers: configHeaders
    };
    return new Promise(function (resolve, reject) {
      axios(config).then(function (result) {
        resolve(result);
      })["catch"](function (error) {
        reject(error);
      });
    });
  };

  APISb.put_plain = function put_plain(endpoint, params, data, contentType) {
    var url = API_SB_BASE_URL + endpoint;
    contentType = contentType || "application/json";
    var configHeaders = {
      "content-type": contentType,
      "Accept": "application/json"
    };
    var config = {
      method: "put",
      url: url,
      params: params || {},
      data: data,
      headers: configHeaders
    };
    return new Promise(function (resolve, reject) {
      axios(config).then(function (result) {
        resolve(result);
      })["catch"](function (error) {
        reject(error);
      });
    });
  };

  return APISb;
}();

APISb.API_SB_BASE_URL = API_SB_BASE_URL;

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  subClass.__proto__ = superClass;
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _taggedTemplateLiteralLoose(strings, raw) {
  if (!raw) {
    raw = strings.slice(0);
  }

  strings.raw = raw;
  return strings;
}

var DatePicker = /*#__PURE__*/function (_Component) {
  _inheritsLoose(DatePicker, _Component);

  function DatePicker(props) {
    var _this;

    _this = _Component.call(this, props) || this;
    _this.state = {
      value: _this.props.value
    };
    return _this;
  }

  var _proto = DatePicker.prototype;

  _proto.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
    var _this2 = this;

    setTimeout(function () {
      _this2.setState({
        value: nextProps.value
      });
    }, 100);
  };

  _proto.render = function render() {
    var format = this.props.format;
    return /*#__PURE__*/React__default.createElement(DatePickerComponent, _extends({}, this.props, {
      value: this.state.value,
      format: format || "dd/MM/yyyy"
    }));
  };

  return DatePicker;
}(Component);

var DatePicker$1 = /*#__PURE__*/function (_Component) {
  _inheritsLoose(DatePicker, _Component);

  function DatePicker(props) {
    var _this;

    _this = _Component.call(this, props) || this;
    _this.state = {};
    return _this;
  }

  var _proto = DatePicker.prototype;

  _proto.render = function render() {
    var format = this.props.format;
    return /*#__PURE__*/React__default.createElement(DateTimePickerComponent, _extends({}, this.props, {
      format: format || "dd/MM/yyyy HH:mm"
    }));
  };

  return DatePicker;
}(Component);

var RecurrenceEditor = /*#__PURE__*/function (_Component) {
  _inheritsLoose(RecurrenceEditor, _Component);

  function RecurrenceEditor(props) {
    var _this;

    _this = _Component.call(this, props) || this;
    _this.state = {};
    return _this;
  }

  var _proto = RecurrenceEditor.prototype;

  _proto.render = function render() {
    var dateFormat = this.props.dateFormat;
    return /*#__PURE__*/React__default.createElement(RecurrenceEditorComponent, _extends({
      dateFormat: dateFormat || "dd/MM/yyyy"
    }, this.props));
  };

  return RecurrenceEditor;
}(Component);

var _ = require("lodash");

var date_format = "DD/MM/YYYY";
var ReservationScheduler = /*#__PURE__*/function (_Component) {
  _inheritsLoose(ReservationScheduler, _Component);

  function ReservationScheduler() {
    var _this;

    _this = _Component.apply(this, arguments) || this;
    _this.state = {
      closedDates: _this.props.closedDates ? _this.props.closedDates : [],
      dataSource: {
        dataSource: _this.props.events || []
      }
    };
    _this.scheduleObj = null;
    _this.currentView = _this.props.currentView || "Month";
    _this.selectedDate = moment().format(date_format);
    _this.checkSelectedDate = _this.checkSelectedDate.bind(_assertThisInitialized(_this));
    _this.checkClosedDate = _this.checkClosedDate.bind(_assertThisInitialized(_this));
    _this.changeAgendaRange = _this.changeAgendaRange.bind(_assertThisInitialized(_this));
    return _this;
  }

  var _proto = ReservationScheduler.prototype;

  _proto.componentDidMount = function componentDidMount() {
    this.currentView = this.props.currentView || "Month";
  };

  _proto.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
    var _this2 = this;

    var closedDates = nextProps.closedDates,
        currentView = nextProps.currentView,
        events = nextProps.events;

    if (this.scheduleObj != null) {
      if (closedDates && closedDates.toString() !== this.state.closedDates.toString()) {
        this.setState({
          closedDates: closedDates
        }, function () {
          _this2.scheduleObj.refresh();
        });
      }

      if (currentView != null) {
        this.scheduleObj.changeCurrentView(currentView);
        this.currentView = currentView;
      }

      var new_events = events || [];
      var dataSource = {
        dataSource: new_events
      };
      this.setState({
        dataSource: dataSource
      });
    }
  };

  _proto.checkSelectedDate = function checkSelectedDate(args) {
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
  };

  _proto.parseClosedDates = function parseClosedDates(closedDates) {
    var closed_day = closedDates.length ? _.map(this.state.closedDates, function (el) {
      var se = new Date(el);
      var s = new Date(se.getFullYear(), se.getMonth(), se.getDate()).getTime();
      return s;
    }) : [];
    return closed_day;
  };

  _proto.checkClosedDate = function checkClosedDate(args) {
    var closed_day = this.parseClosedDates(this.state.closedDates);

    if (args.date) {
      var date = new Date(args.date.getFullYear(), args.date.getMonth(), args.date.getDate()).getTime();

      if (args.elementType == "monthCells" && closed_day.indexOf(date) > -1) {
        args.element.classList.add("e-current-date");
      }
    }
  };

  _proto.changeAgendaRange = function changeAgendaRange() {
    var _this3 = this;

    if (this.currentView == "Agenda") {
      setTimeout(function () {
        if (_this3.props.onChangeAgendaRange) {
          var first = _.first(_this3.scheduleObj.activeView.renderDates);

          var last = _.last(_this3.scheduleObj.activeView.renderDates);

          _this3.props.onChangeAgendaRange(first, last);
        }
      }, 100);
    }
  };

  _proto.render = function render() {
    var _this4 = this;

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
        var todayButton = _.find(props.items || [], {
          cssClass: "e-today"
        });

        if (todayButton) {
          todayButton.click = function (a, b, c) {
            var previousDate = new Date(2001, 1, 1);
            var currentDate = new Date();
            self.scheduleObj.navigating({
              action: "date",
              previousDate: previousDate,
              currentDate: currentDate
            });
          };
        }
      }
    }

    function navigating(props) {
      var previousDate = props.previousDate,
          currentDate = props.currentDate,
          action = props.action,
          currentView = props.currentView;
      var today = moment().format(date_format);
      previousDate = previousDate ? moment(previousDate).format(date_format) : null;
      currentDate = currentDate ? moment(currentDate).format(date_format) : null;

      if (action == "date" && currentDate && currentDate == today && previousDate != today && currentView == "Month") {
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

    return /*#__PURE__*/React__default.createElement(ScheduleComponent, {
      ref: function ref(schedule) {
        return _this4.scheduleObj = schedule;
      },
      height: this.props.height,
      editorTemplate: function editorTemplate() {
        return /*#__PURE__*/React__default.createElement("div", null);
      },
      eventSettings: this.state.dataSource,
      renderCell: renderCell,
      cellClick: cellClick,
      popupOpen: popupOpen,
      actionComplete: actionComplete,
      navigating: navigating
    }, /*#__PURE__*/React__default.createElement(ViewsDirective, null, this.props.dayView == true && /*#__PURE__*/React__default.createElement(ViewDirective, {
      option: "Day"
    }), this.props.weekView == true && /*#__PURE__*/React__default.createElement(ViewDirective, {
      option: "Week"
    }), this.props.workWeekView == true && /*#__PURE__*/React__default.createElement(ViewDirective, {
      option: "WorkWeek"
    }), this.props.monthView == true && /*#__PURE__*/React__default.createElement(ViewDirective, {
      option: "Month"
    }), this.props.agendaView == true && /*#__PURE__*/React__default.createElement(ViewDirective, {
      option: "Agenda"
    })), /*#__PURE__*/React__default.createElement(Inject, {
      services: [Day, Week, WorkWeek, Month, Agenda]
    }));
  };

  return ReservationScheduler;
}(Component);

var TimePicker = /*#__PURE__*/function (_Component) {
  _inheritsLoose(TimePicker, _Component);

  function TimePicker(props) {
    var _this;

    _this = _Component.call(this, props) || this;
    _this.state = {
      value: _this.props.value
    };
    return _this;
  }

  var _proto = TimePicker.prototype;

  _proto.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
    var _this2 = this;

    setTimeout(function () {
      _this2.setState({
        value: nextProps.value
      });
    }, 100);
  };

  _proto.render = function render() {
    var format = this.props.format;
    return /*#__PURE__*/React__default.createElement(TimePickerComponent, _extends({}, this.props, {
      value: this.state.value,
      format: format || "HH:mm"
    }));
  };

  return TimePicker;
}(Component);

var CustomTooltip = /*#__PURE__*/function (_Component) {
  _inheritsLoose(CustomTooltip, _Component);

  function CustomTooltip(props) {
    var _this;

    _this = _Component.call(this, props) || this;
    _this.state = {};
    return _this;
  }

  var _proto = CustomTooltip.prototype;

  _proto.render = function render() {
    var placement = this.props.placement || "top";
    var delay = this.props.delay || {
      show: 250,
      hide: 400
    };
    var tooltip = this.props.tooltip || "";
    var children = this.props.children || /*#__PURE__*/React__default.createElement("div", null, "Error children");
    return /*#__PURE__*/React__default.createElement(OverlayTrigger, {
      style: this.props.style,
      className: this.props.className,
      placement: placement,
      delay: {
        delay: delay
      },
      overlay: /*#__PURE__*/React__default.createElement(Tooltip, null, tooltip)
    }, children);
  };

  return CustomTooltip;
}(Component);

function _templateObject() {
  var data = _taggedTemplateLiteralLoose(["\n  .table {\n    display: inline-block;\n    border-spacing: 0;\n    border: 1px solid #dee2e6;\n\n    .tr {\n      :last-child {\n        .td {\n          border-bottom: 0;\n        }\n      }\n      .td{\n        overflow-x: hidden;\n      }\n    }\n\n    .th,\n    .td {\n      margin: 0;\n      padding: 0.5rem;\n      border-bottom: 1px solid #dee2e6;\n      border-right: 1px solid #dee2e6;\n\n      ", "\n      position: relative;\n\n      :last-child {\n        border-right: 0;\n      }\n\n      .resizer {\n        right: 0;\n        background: #dee2e6;\n        width: 1px;\n        height: 100%;\n        position: absolute;\n        top: 0;\n        z-index: 1;\n        ", "\n        touch-action :none;\n\n        &.isResizing {\n          background: black;\n        }\n      }\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}
var Styles = styled.div(_templateObject(), '', '');

function ReactTable(_ref) {
  var localization = _ref.localization,
      columns = _ref.columns,
      data = _ref.data,
      _defaultPageSize = _ref._defaultPageSize,
      _fixedPageSize = _ref._fixedPageSize,
      _noDataMessage = _ref._noDataMessage;

  var _useTable = useTable({
    columns: columns,
    data: data,
    initialState: {
      pageIndex: 0,
      pageSize: _fixedPageSize || _defaultPageSize || 10
    }
  }, useSortBy, usePagination, useResizeColumns, useFlexLayout, useRowSelect),
      getTableProps = _useTable.getTableProps,
      getTableBodyProps = _useTable.getTableBodyProps,
      headerGroups = _useTable.headerGroups,
      prepareRow = _useTable.prepareRow,
      page = _useTable.page,
      canPreviousPage = _useTable.canPreviousPage,
      canNextPage = _useTable.canNextPage,
      pageOptions = _useTable.pageOptions,
      pageCount = _useTable.pageCount,
      gotoPage = _useTable.gotoPage,
      nextPage = _useTable.nextPage,
      previousPage = _useTable.previousPage,
      setPageSize = _useTable.setPageSize,
      _useTable$state = _useTable.state,
      pageIndex = _useTable$state.pageIndex,
      pageSize = _useTable$state.pageSize;

  var setPageSizeOptions = function setPageSizeOptions() {
    var base_values = [5, 10, 20, 30, 40, 50];

    if (_$1.includes(base_values, _defaultPageSize) == false) {
      base_values.push(_defaultPageSize);
      base_values = _$1.sortBy(base_values);
    }

    if (_$1.includes(base_values, _fixedPageSize) == false) {
      base_values.push(_fixedPageSize);
      base_values = _$1.sortBy(base_values);
    }

    var options = _$1.map(base_values, function (value, index) {
      return /*#__PURE__*/createElement("option", {
        key: index,
        value: value
      }, value);
    });

    return options;
  };

  var setSortIcon = function setSortIcon(column) {
    return /*#__PURE__*/createElement(Fragment, null, column.disableSortBy != true && column.isSorted == false && /*#__PURE__*/createElement("span", null, ' ', /*#__PURE__*/createElement(FontAwesomeIcon, {
      icon: faSort,
      style: {
        cursor: "pointer"
      },
      onClick: function onClick() {
        column.toggleSortBy();
      }
    })), /*#__PURE__*/createElement("span", null, column.isSorted ? column.isSortedDesc ? /*#__PURE__*/createElement("span", null, ' ', /*#__PURE__*/createElement(FontAwesomeIcon, {
      icon: faSortDown,
      style: {
        cursor: "pointer"
      },
      onClick: function onClick() {
        column.toggleSortBy();
      }
    })) : /*#__PURE__*/createElement("span", null, ' ', /*#__PURE__*/createElement(FontAwesomeIcon, {
      icon: faSortUp,
      style: {
        cursor: "pointer"
      },
      onClick: function onClick() {
        column.toggleSortBy();
      }
    })) : ''));
  };

  var setResize = function setResize(column) {
    return /*#__PURE__*/createElement(Fragment, null, column.canResize && /*#__PURE__*/createElement("div", _extends({}, column.getResizerProps(), {
      className: "resizer " + (column.isResizing ? "isResizing" : "")
    })));
  };

  var setEmptyRows = function setEmptyRows() {
    var rows = null;

    if (canNextPage == false && page.length < pageSize && page[0]) {
      var new_filling_rows = pageSize - page.length;
      new_filling_rows = new Array(new_filling_rows);

      var page_tmp = _$1.map(new_filling_rows, function (f) {
        return page[0];
      });

      rows = page_tmp.map(function (row, i) {
        var new_id = data.length + i;
        row.id = new_id;
        prepareRow(row);
        return /*#__PURE__*/createElement("div", _extends({}, row.getRowProps(), {
          className: "tr"
        }), row.cells.map(function (cell) {
          return /*#__PURE__*/createElement("div", _extends({}, cell.getCellProps(), {
            className: "td"
          }), /*#__PURE__*/createElement("div", {
            style: {
              color: "#66000000"
            }
          }, "."));
        }));
      });
    }

    return rows;
  };

  var setEmptyHeaders = function setEmptyHeaders() {
    var new_filling_rows = new Array(pageSize);

    var rows = _$1.map(new_filling_rows, function () {
      return headerGroups.map(function (headerGroup) {
        return /*#__PURE__*/createElement("div", _extends({}, headerGroup.getHeaderGroupProps(), {
          className: "tr"
        }), headerGroup.headers.map(function (column) {
          return /*#__PURE__*/createElement("div", _extends({}, column.getHeaderProps(), {
            className: "th"
          }), /*#__PURE__*/createElement("div", {
            style: {
              color: "#66000000"
            }
          }, "."));
        }));
      });
    });

    return rows;
  };

  return /*#__PURE__*/createElement(Styles, null, /*#__PURE__*/createElement("div", null, /*#__PURE__*/createElement("div", _extends({}, getTableProps(), {
    className: "table"
  }), /*#__PURE__*/createElement("div", null, headerGroups.map(function (headerGroup) {
    return /*#__PURE__*/createElement("div", _extends({}, headerGroup.getHeaderGroupProps(), {
      className: "tr"
    }), headerGroup.headers.map(function (column) {
      return /*#__PURE__*/createElement("div", _extends({}, column.getHeaderProps(), {
        className: "th"
      }), column.render('Header'), setSortIcon(column), setResize(column));
    }));
  }), data.length == 0 && /*#__PURE__*/createElement(Fragment, null, setEmptyHeaders())), /*#__PURE__*/createElement("div", getTableBodyProps(), page.map(function (row, i) {
    prepareRow(row);
    return /*#__PURE__*/createElement("div", _extends({}, row.getRowProps(), {
      className: "tr"
    }), row.cells.map(function (cell) {
      return /*#__PURE__*/createElement("div", _extends({}, cell.getCellProps(), {
        className: "td"
      }), cell.render('Cell'));
    }));
  }), data.length > 0 && /*#__PURE__*/createElement(Fragment, null, setEmptyRows())), data.length == 0 && /*#__PURE__*/createElement("div", {
    className: "noData"
  }, /*#__PURE__*/createElement(FontAwesomeIcon, {
    icon: faInfoCircle
  }), " ", _noDataMessage || "No data"))), /*#__PURE__*/createElement(Row, {
    className: "pagination"
  }, /*#__PURE__*/createElement(Col, {
    sm: 8
  }, /*#__PURE__*/createElement(Fragment, null, /*#__PURE__*/createElement(Button, {
    variant: "outline-secondary",
    size: "sm",
    onClick: function onClick() {
      return gotoPage(0);
    },
    disabled: !canPreviousPage
  }, " ", '<<'), ' ', /*#__PURE__*/createElement(Button, {
    variant: "outline-secondary",
    size: "sm",
    onClick: function onClick() {
      return previousPage();
    },
    disabled: !canPreviousPage
  }, " ", '<'), ' ', /*#__PURE__*/createElement(Button, {
    variant: "outline-secondary",
    size: "sm",
    onClick: function onClick() {
      return nextPage();
    },
    disabled: !canNextPage
  }, " ", '>'), ' ', /*#__PURE__*/createElement(Button, {
    variant: "outline-secondary",
    size: "sm",
    onClick: function onClick() {
      return gotoPage(pageCount - 1);
    },
    disabled: !canNextPage
  }, " ", '>>'), ' ', /*#__PURE__*/createElement("span", {
    style: {
      "float": "right"
    }
  }, /*#__PURE__*/createElement("span", null, localization.page || "Page", ' ', /*#__PURE__*/createElement("strong", null, pageIndex + 1, "  ", localization.of || "of", " ", pageOptions.length), ' '), /*#__PURE__*/createElement("span", null, "| ", localization.go_to_page, ":", ' ')))), /*#__PURE__*/createElement(Col, {
    sm: 2
  }, /*#__PURE__*/createElement(Form.Control, {
    disabled: data.length == 0,
    size: "sm",
    type: "number",
    min: 1,
    max: pageOptions.length,
    defaultValue: pageIndex + 1,
    onChange: function onChange(e) {
      var page = e.target.value ? Number(e.target.value) - 1 : 0;
      gotoPage(page);
    },
    style: {
      width: '100%'
    }
  })), /*#__PURE__*/createElement(Col, {
    sm: 2
  }, /*#__PURE__*/createElement(Form.Control, {
    as: "select",
    size: "sm",
    value: pageSize,
    disabled: _fixedPageSize != null || data.length == 0,
    onChange: function onChange(e) {
      setPageSize(Number(e.target.value));
    }
  }, setPageSizeOptions()))));
}

var CustomLoadingOverlay = /*#__PURE__*/function (_Component) {
  _inheritsLoose(CustomLoadingOverlay, _Component);

  function CustomLoadingOverlay(props) {
    return _Component.call(this, props) || this;
  }

  var _proto = CustomLoadingOverlay.prototype;

  _proto.render = function render() {
    var children = this.props.children || /*#__PURE__*/React__default.createElement("div", null, "Error children");
    return /*#__PURE__*/React__default.createElement(LoadingOverlay, this.props, children);
  };

  return CustomLoadingOverlay;
}(Component);

export { APISb, DatePicker, DatePicker$1 as DateTimePicker, CustomLoadingOverlay as LoadingOverlay, ReactTable, RecurrenceEditor, ReservationScheduler as Scheduler, TimePicker, CustomTooltip as Tooltip };
//# sourceMappingURL=index.modern.js.map
