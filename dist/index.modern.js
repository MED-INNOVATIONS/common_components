import axios from 'axios';
import { get, put, remove } from 'browser-store';
import sessionStorage$1 from 'browser-session-store';
import _$1 from 'lodash';
import React, { Component } from 'react';
import { DatePickerComponent, DateTimePickerComponent, TimePickerComponent } from '@syncfusion/ej2-react-calendars';
import { RecurrenceEditorComponent, ScheduleComponent, ViewsDirective, ViewDirective, Inject, Day, Week, WorkWeek, Month, Agenda } from '@syncfusion/ej2-react-schedule';
import moment from 'moment';
import { Editor } from 'react-draft-wysiwyg';
import { ContentState, EditorState, convertToRaw } from 'draft-js';
import draftToHtml from 'draftjs-to-html';
import htmlToDraft from 'html-to-draftjs';
import LoadingOverlay from 'react-loading-overlay';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import { OverlayTrigger, Tooltip, Card, Row, Col, Image as Image$1, Button, Modal, FormGroup, FormControl, Form } from 'react-bootstrap';
import { toast } from 'react-toastify';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSave, faTimesCircle } from '@fortawesome/free-regular-svg-icons';
import { faDownload, faTrashAlt, faEye, faUpload, faSort, faSortDown, faSortUp, faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import Resizer from 'react-image-file-resizer';
import uuidV4 from 'uuid/v4';
import Cropper from 'cropperjs';
import LocationPicker from 'react-location-picker';
import PlacesAutocomplete, { geocodeByAddress, getLatLng } from 'react-places-autocomplete';
import { useTable, useSortBy, useExpanded, usePagination, useResizeColumns, useFlexLayout, useRowSelect } from 'react-table';
import styled from 'styled-components';
import 'bootstrap/dist/css/bootstrap.min.css';

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

var API_SB_BASE_URL = "https://sbapi.orbital.cloud";

var APISb = /*#__PURE__*/function () {
  function APISb() {}

  APISb.cleanToken = function cleanToken(token) {
    token = "Bearer " + token;
    token = token.replaceAll('"', "");
    return token;
  };

  APISb.get = function get(token, endpoint, params, customHeaders) {
    var url = API_SB_BASE_URL + endpoint;
    token = this.cleanToken(token);
    var defaultHeaders = {
      "content-type": "application/json",
      "Accept": "application/json",
      "Authorization": token
    };
    defaultHeaders = _extends({}, defaultHeaders, customHeaders);
    var config = {
      method: "get",
      url: url,
      params: params || {},
      headers: defaultHeaders
    };
    return new Promise(function (resolve, reject) {
      axios(config).then(function (result) {
        resolve(result);
      })["catch"](function (error) {
        reject(error);
      });
    });
  };

  APISb.post = function post(token, endpoint, params, data, customHeaders) {
    var url = API_SB_BASE_URL + endpoint;
    token = this.cleanToken(token);
    var defaultHeaders = {
      "content-type": "application/json",
      "Accept": "application/json",
      "Authorization": token
    };
    defaultHeaders = _extends({}, defaultHeaders, customHeaders);
    var config = {
      method: "post",
      url: url,
      params: params || {},
      data: data,
      headers: defaultHeaders
    };
    return new Promise(function (resolve, reject) {
      axios(config).then(function (result) {
        resolve(result);
      })["catch"](function (error) {
        reject(error);
      });
    });
  };

  APISb.put = function put(token, endpoint, params, data, customHeaders) {
    var url = API_SB_BASE_URL + endpoint;
    token = this.cleanToken(token);
    var defaultHeaders = {
      "content-type": "application/json",
      "Accept": "application/json",
      "Authorization": token
    };
    defaultHeaders = _extends({}, defaultHeaders, customHeaders);
    var config = {
      method: "put",
      url: url,
      params: params || {},
      data: data,
      headers: defaultHeaders
    };
    return new Promise(function (resolve, reject) {
      axios(config).then(function (result) {
        resolve(result);
      })["catch"](function (error) {
        reject(error);
      });
    });
  };

  APISb["delete"] = function _delete(token, endpoint, params, customHeaders) {
    var url = API_SB_BASE_URL + endpoint;
    token = this.cleanToken(token);
    var defaultHeaders = {
      "content-type": "application/json",
      "Accept": "application/json",
      "Authorization": token
    };
    defaultHeaders = _extends({}, defaultHeaders, customHeaders);
    var config = {
      method: "delete",
      url: url,
      params: params || {},
      headers: defaultHeaders
    };
    return new Promise(function (resolve, reject) {
      axios(config).then(function (result) {
        resolve(result);
      })["catch"](function (error) {
        reject(error);
      });
    });
  };

  APISb.get_plain = function get_plain(endpoint, params, customHeaders) {
    var url = API_SB_BASE_URL + endpoint;
    var defaultHeaders = {
      "content-type": "application/json",
      "Accept": "application/json"
    };
    defaultHeaders = _extends({}, defaultHeaders, customHeaders);
    var config = {
      method: "get",
      url: url,
      params: params || {},
      headers: defaultHeaders
    };
    return new Promise(function (resolve, reject) {
      axios(config).then(function (result) {
        resolve(result);
      })["catch"](function (error) {
        reject(error);
      });
    });
  };

  APISb.post_plain = function post_plain(endpoint, params, data, customHeaders) {
    var url = API_SB_BASE_URL + endpoint;
    var defaultHeaders = {
      "content-type": "application/json",
      "Accept": "application/json"
    };
    defaultHeaders = _extends({}, defaultHeaders, customHeaders);
    var config = {
      method: "post",
      url: url,
      params: params || {},
      data: data,
      headers: defaultHeaders
    };
    return new Promise(function (resolve, reject) {
      axios(config).then(function (result) {
        resolve(result);
      })["catch"](function (error) {
        reject(error);
      });
    });
  };

  APISb.put_plain = function put_plain(endpoint, params, data, customHeaders) {
    var url = API_SB_BASE_URL + endpoint;
    var defaultHeaders = {
      "content-type": "application/json",
      "Accept": "application/json"
    };
    defaultHeaders = _extends({}, defaultHeaders, customHeaders);
    var config = {
      method: "put",
      url: url,
      params: params || {},
      data: data,
      headers: defaultHeaders
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

var SBDashboardAuthkey = "SBDashboardAuth";
var SBUserAuthkey = "SBUserAuth";
var orbitalAuthkey = "orbitalAuth";
var authkey = "auth";

sessionStorage$1.setItem = function (key) {
  var setLocalizationEvent = new Event("setLocalizationEvent");
  setLocalizationEvent.key = key;
  window.dispatchEvent(setLocalizationEvent);
};

var ClientSession = /*#__PURE__*/function () {
  function ClientSession() {}

  ClientSession.getAuth = function getAuth() {
    var self = this;
    return new Promise(function (resolve, reject) {
      sessionStorage$1.get(self.authkey, function (error, value) {
        if (error) {
          reject(error);
        } else {
          resolve(value);
        }
      });
    });
  };

  ClientSession.setAuth = function setAuth(value) {
    var self = this;
    return new Promise(function (resolve, reject) {
      sessionStorage$1.put(self.authkey, value, function (error) {
        if (error) {
          reject(error);
        } else {
          sessionStorage$1.setItem(self.authkey);
          resolve(value);
        }
      });
    });
  };

  ClientSession.removeAuth = function removeAuth() {
    var self = this;
    return new Promise(function (resolve, reject) {
      sessionStorage$1.remove(self.authkey, function (error) {
        if (error) {
          reject(error);
        } else {
          sessionStorage$1.setItem(self.authkey);
          resolve();
        }
      });
    });
  };

  ClientSession.getOrbitalAuthkey = function getOrbitalAuthkey() {
    var self = this;
    return new Promise(function (resolve, reject) {
      get(self.orbitalAuthkey, function (error, value) {
        if (error) {
          reject(error);
        } else {
          resolve(value);
        }
      });
    });
  };

  ClientSession.setOrbitalAuthkey = function setOrbitalAuthkey(authData) {
    var self = this;
    return new Promise(function (resolve, reject) {
      put(self.orbitalAuthkey, authData, function (error) {
        if (error) {
          reject(error);
        } else {
          resolve(authData.user);
        }
      });
    });
  };

  ClientSession.removeOrbitalAuthKey = function removeOrbitalAuthKey() {
    var self = this;
    return new Promise(function (resolve, reject) {
      remove(self.orbitalAuthkey, function (error) {
        if (error) {
          reject(error);
        } else {
          resolve();
        }
      });
    });
  };

  ClientSession.setSBDashboardAuthkey = function setSBDashboardAuthkey(value) {
    var self = this;
    return new Promise(function (resolve, reject) {
      sessionStorage$1.put(self.SBDashboardAuthkey, value, function (error) {
        if (error) {
          reject(error);
        } else {
          resolve(value);
        }
      });
    });
  };

  ClientSession.removeSBDashboardAuthkey = function removeSBDashboardAuthkey() {
    var self = this;
    return new Promise(function (resolve, reject) {
      sessionStorage$1.remove(self.SBDashboardAuthkey, function (error) {
        if (error) {
          reject(error);
        } else {
          resolve();
        }
      });
    });
  };

  ClientSession.setSBUserAuthkey = function setSBUserAuthkey(value) {
    var self = this;
    return new Promise(function (resolve, reject) {
      sessionStorage$1.put(self.SBUserAuthkey, value, function (error) {
        if (error) {
          reject(error);
        } else {
          resolve(value);
        }
      });
    });
  };

  ClientSession.removeSBUserAuthkey = function removeSBUserAuthkey() {
    var self = this;
    return new Promise(function (resolve, reject) {
      sessionStorage$1.remove(self.SBUserAuthkey, function (error) {
        if (error) {
          reject(error);
        } else {
          resolve();
        }
      });
    });
  };

  ClientSession.isLoggedInToOrbital = function isLoggedInToOrbital() {
    var self = this;
    return new Promise(function (resolve, reject) {
      self.getOrbitalAuthkey().then(function (data) {
        if (_$1.isEmpty(data) == true) {
          resolve(false);
        } else {
          resolve(true);
        }
      })["catch"](function (error) {
        reject(error);
      });
    });
  };

  ClientSession.isLoggedIn = function isLoggedIn() {
    var self = this;
    return new Promise(function (resolve, reject) {
      self.getAuth().then(function (data) {
        if (_$1.isEmpty(data) == true) {
          resolve(false);
        } else {
          resolve(true);
        }
      })["catch"](function (error) {
        reject(error);
      });
    });
  };

  ClientSession.getAccessToken = function getAccessToken(callback) {
    this.getAuth().then(function (value) {
      callback(true, value);
    })["catch"](function (error) {
      console.error(error);
      callback(false, error);
    });
  };

  ClientSession.getPermission = function getPermission(callback) {};

  ClientSession.checkPermission = function checkPermission(plugin_key) {
    var self = this;
    return new Promise(function (resolve, reject) {
      self.getAuth().then(function (auth) {
        var permission = auth.permission || {};
        permission = permission.permission || {};
        var permission_value = permission[plugin_key];
        resolve(permission_value);
      })["catch"](function (error) {
        reject(error);
      });
    });
  };

  ClientSession.checkLogin = function checkLogin() {
    var self = this;
    return new Promise(function (resolve, reject) {
      self.isLoggedIn().then(function (logged) {
        if (logged == true) {
          resolve();
        } else {
          reject("The user isn't logged in");
        }
      })["catch"](function (error) {
        reject(error);
      });
    });
  };

  return ClientSession;
}();

ClientSession.SBDashboardAuthkey = SBDashboardAuthkey;
ClientSession.SBUserAuthkey = SBUserAuthkey;
ClientSession.orbitalAuthkey = orbitalAuthkey;
ClientSession.authkey = authkey;

var AuthStore = /*#__PURE__*/function () {
  function AuthStore() {}

  AuthStore.setAuthStore = function setAuthStore() {
    var self = this;
    return new Promise(function (resolve, reject) {
      ClientSession.getAuth().then(function (data) {
        self.setAuth(data);
        resolve();
      })["catch"](function (error) {
        reject(error);
      });
    });
  };

  AuthStore.setAuth = function setAuth(auth) {
    this.auth = auth;
  };

  AuthStore.getAuth = function getAuth() {
    return this.auth;
  };

  AuthStore.checkPermissionKey = function checkPermissionKey(permission_key) {
    var permitted = null;
    var permission = this.auth.permission || [];
    permission = permission[0];
    permission = permission != null ? permission.permission : {};
    permitted = permission[permission_key] || permitted;
    return permitted;
  };

  AuthStore.getBrandId = function getBrandId() {
    var brandId = this.auth && this.auth.user && this.auth.user.brandId ? this.auth.user.brandId : null;
    return brandId;
  };

  AuthStore.getReferrerId = function getReferrerId() {
    var referrerId = this.auth && this.auth.user && this.auth.user.referrerId ? this.auth.user.referrerId : null;
    return referrerId;
  };

  AuthStore.getOwnerId = function getOwnerId() {
    var user = this.auth && this.auth.user ? this.auth.user : null;

    if (user.role == "Owner" && user.subRole == "Sub Owner") {
      return user.referrerId;
    } else if (user.role == "Owner") {
      return user.id;
    }
  };

  AuthStore.getUser = function getUser() {
    var user = this.auth && this.auth.user ? this.auth.user : null;
    return user;
  };

  AuthStore.getUserId = function getUserId() {
    var userId = this.auth && this.auth.user && this.auth.user.id ? this.auth.user.id : null;
    return userId;
  };

  AuthStore.isChildOwner = function isChildOwner() {
    var isChild = this.auth && this.auth.user && this.auth.user.referrerId != null ? true : false;
    return isChild;
  };

  AuthStore.getOwnerAllowedActivities = function getOwnerAllowedActivities() {
    return this.getUserAllowedActivities();
  };

  AuthStore.getUserAllowedActivities = function getUserAllowedActivities() {
    var allowedActivities = this.auth && this.auth.user && this.auth.user.allowedActivities ? this.auth.user.allowedActivities : [];
    return allowedActivities;
  };

  AuthStore.getUserRole = function getUserRole() {
    var role = this.auth && this.auth.user && this.auth.user.role ? this.auth.user.role : null;
    return role;
  };

  AuthStore.getDefautlLang = function getDefautlLang() {
    var config = this.auth.config;
    var defaultLang = config != null ? config.defaultLang : this.defaultLang;
    return defaultLang;
  };

  AuthStore.getCurrentLang = function getCurrentLang() {
    var lang = null;
    var auth = sessionStorage.getItem("auth");

    if (auth) {
      auth = JSON.parse(auth);
      lang = auth.config.userLang;
    }

    return lang;
  };

  AuthStore.getPreferedLanguages = function getPreferedLanguages() {
    var config = this.auth.config;
    var preferedlang = config != null ? config.preferedlang : null;
    return preferedlang;
  };

  AuthStore.getUserLang = function getUserLang() {
    var lang = this.auth && this.auth.user && this.auth.user.lang ? this.auth.user.lang : null;
    return lang;
  };

  return AuthStore;
}();

AuthStore.defaultLang = "En";
AuthStore.auth = {};

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
    return /*#__PURE__*/React.createElement(DatePickerComponent, _extends({}, this.props, {
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
    return /*#__PURE__*/React.createElement(DateTimePickerComponent, _extends({}, this.props, {
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
    return /*#__PURE__*/React.createElement(RecurrenceEditorComponent, _extends({
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

    return /*#__PURE__*/React.createElement(ScheduleComponent, {
      ref: function ref(schedule) {
        return _this4.scheduleObj = schedule;
      },
      height: this.props.height,
      editorTemplate: function editorTemplate() {
        return /*#__PURE__*/React.createElement("div", null);
      },
      eventSettings: this.state.dataSource,
      renderCell: renderCell,
      cellClick: cellClick,
      popupOpen: popupOpen,
      actionComplete: actionComplete,
      navigating: navigating
    }, /*#__PURE__*/React.createElement(ViewsDirective, null, this.props.dayView == true && /*#__PURE__*/React.createElement(ViewDirective, {
      option: "Day"
    }), this.props.weekView == true && /*#__PURE__*/React.createElement(ViewDirective, {
      option: "Week"
    }), this.props.workWeekView == true && /*#__PURE__*/React.createElement(ViewDirective, {
      option: "WorkWeek"
    }), this.props.monthView == true && /*#__PURE__*/React.createElement(ViewDirective, {
      option: "Month"
    }), this.props.agendaView == true && /*#__PURE__*/React.createElement(ViewDirective, {
      option: "Agenda"
    })), /*#__PURE__*/React.createElement(Inject, {
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
    return /*#__PURE__*/React.createElement(TimePickerComponent, _extends({}, this.props, {
      value: this.state.value,
      format: format || "HH:mm"
    }));
  };

  return TimePicker;
}(Component);

var MandatoryFieldLabel = /*#__PURE__*/function (_Component) {
  _inheritsLoose(MandatoryFieldLabel, _Component);

  function MandatoryFieldLabel(props) {
    return _Component.call(this, props) || this;
  }

  var _proto = MandatoryFieldLabel.prototype;

  _proto.render = function render() {
    var className = "label_style" + " " + this.props.className;
    return /*#__PURE__*/React.createElement("div", {
      style: this.props.style
    }, /*#__PURE__*/React.createElement("span", {
      className: "mandatory_style"
    }, "* "), /*#__PURE__*/React.createElement("span", {
      className: className
    }, this.props.value));
  };

  return MandatoryFieldLabel;
}(Component);

var NormalFieldLabel = /*#__PURE__*/function (_Component) {
  _inheritsLoose(NormalFieldLabel, _Component);

  function NormalFieldLabel(props) {
    return _Component.call(this, props) || this;
  }

  var _proto = NormalFieldLabel.prototype;

  _proto.render = function render() {
    var className = "label_style" + " " + this.props.className;
    return /*#__PURE__*/React.createElement("div", {
      style: this.props.style,
      className: className
    }, this.props.value);
  };

  return NormalFieldLabel;
}(Component);

var CustomLoadingOverlay = /*#__PURE__*/function (_Component) {
  _inheritsLoose(CustomLoadingOverlay, _Component);

  function CustomLoadingOverlay(props) {
    return _Component.call(this, props) || this;
  }

  var _proto = CustomLoadingOverlay.prototype;

  _proto.render = function render() {
    var children = this.props.children || /*#__PURE__*/React.createElement("div", null, "Error children");
    return /*#__PURE__*/React.createElement(LoadingOverlay, this.props, children);
  };

  return CustomLoadingOverlay;
}(Component);

var HTMLTextEditor = /*#__PURE__*/function (_Component) {
  _inheritsLoose(HTMLTextEditor, _Component);

  function HTMLTextEditor(props) {
    var _this;

    _this = _Component.call(this, props) || this;
    _this.state = {
      loading: false,
      editorState: EditorState.createEmpty()
    };
    _this.onEditorStateChange = _this.onEditorStateChange.bind(_assertThisInitialized(_this));
    _this.uploadImageCallBack = _this.uploadImageCallBack.bind(_assertThisInitialized(_this));
    return _this;
  }

  var _proto = HTMLTextEditor.prototype;

  _proto.componentDidMount = function componentDidMount() {
    this.parseData(this.props.data);
  };

  _proto.parseData = function parseData(data) {
    if (data != null) {
      var tmp = htmlToDraft(data);
      tmp = ContentState.createFromBlockArray(tmp);
      tmp = EditorState.createWithContent(tmp);
      this.setState({
        editorState: EditorState.moveFocusToEnd(tmp)
      });
    }
  };

  _proto.uploadImageCallBack = function uploadImageCallBack(file) {
    var self = this;
    return new Promise(function (resolve, reject) {
      self.setState({
        loading: true
      }, function () {
        self.props.onUploadImage(file).then(function (imageUrl) {
          var uploadResponse = {
            "data": {
              "link": imageUrl
            }
          };
          resolve(uploadResponse);
        })["catch"](function (error) {
          reject(error);
        })["finally"](function () {
          self.setState({
            loading: false
          });
        });
      });
    });
  };

  _proto.clearText = function clearText(text) {
    return text;
  };

  _proto.onEditorStateChange = function onEditorStateChange(editorState) {
    var _this2 = this;

    this.setState({
      editorState: editorState
    }, function () {
      if (_this2.props.onChange) {
        var rawContent = convertToRaw(editorState.getCurrentContent());
        var editorValue = draftToHtml(rawContent);

        var newText = _this2.clearText(editorValue);

        _this2.props.onChange(newText);
      }
    });
  };

  _proto.render = function render() {
    var _this$props = this.props,
        localization = _this$props.localization,
        disabled = _this$props.disabled,
        error = _this$props.error;
    var _this$state = this.state,
        editorState = _this$state.editorState,
        loading = _this$state.loading;
    var wrapperClassName = error == true ? "wrapper_style_error" : "wrapper_style_normal";
    return /*#__PURE__*/React.createElement(CustomLoadingOverlay, {
      active: loading,
      spinner: true,
      text: (localization.loading || "Loading") + "..."
    }, /*#__PURE__*/React.createElement(Editor, {
      readOnly: disabled,
      toolbarHidden: disabled,
      wrapperClassName: wrapperClassName,
      toolbarClassName: "toolbar_style",
      editorClassName: "editor_style",
      toolbar: {
        options: ["inline", "blockType", "fontSize", "list", "textAlign", "link", "image", "remove", "history"],
        inline: {
          inDropdown: true
        },
        list: {
          inDropdown: true
        },
        textAlign: {
          inDropdown: true
        },
        link: {
          inDropdown: true
        },
        history: {
          inDropdown: true
        },
        image: {
          uploadCallback: this.uploadImageCallBack,
          previewImage: true,
          inputAccept: "image/gif,image/jpeg,image/jpg,image/png,image/svg",
          alt: {
            present: true,
            mandatory: false
          },
          defaultSize: {
            width: "100%",
            height: "100%"
          }
        }
      },
      editorState: editorState,
      onEditorStateChange: this.onEditorStateChange
    }));
  };

  return HTMLTextEditor;
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
    var children = this.props.children || /*#__PURE__*/React.createElement("div", null, "Error children");
    return /*#__PURE__*/React.createElement(OverlayTrigger, {
      style: this.props.style,
      className: this.props.className,
      placement: placement,
      delay: {
        delay: delay
      },
      overlay: /*#__PURE__*/React.createElement(Tooltip, null, tooltip)
    }, children);
  };

  return CustomTooltip;
}(Component);

var ImageService = /*#__PURE__*/function () {
  function ImageService() {}

  ImageService.compress = function compress(_ref) {
    var file = _ref.file,
        divider = _ref.divider;
    return new Promise(function (resolve, reject) {
      var fileName = file.name;
      var reader = new FileReader();
      reader.readAsDataURL(file);

      reader.onload = function (event) {
        var img = new Image();
        img.src = event.target.result;

        img.onload = function () {
          var elem = document.createElement("canvas");
          elem.width = img.width / divider;
          elem.height = img.height / divider;
          var ctx = elem.getContext("2d");
          ctx.drawImage(img, 0, 0, img.width / divider, img.height / divider);
          ctx.canvas.toBlob(function (blob) {
            var newFile = new File([blob], [fileName.slice(0, fileName.indexOf(".")), "(" + divider + ")", fileName.slice(fileName.indexOf("."))].join(""), {
              type: file.type,
              lastModified: Date.now()
            });
            resolve(newFile);
          }, file.type, 1);
        };

        reader.onerror = function (error) {
          return reject(error);
        };
      };
    });
  };

  ImageService.batchCompress = function batchCompress(file) {
    var dividers = [{
      file: file,
      divider: 1
    }, {
      file: file,
      divider: 2
    }, {
      file: file,
      divider: 3
    }, {
      file: file,
      divider: 4
    }];
    var actions = dividers.map(ImageService.compress);
    var results = Promise.all(actions);
    return results;
  };

  ImageService.getResizedCanvas = function getResizedCanvas(canvas, newWidth, newHeight) {
    var tmpCanvas = document.createElement("canvas");
    tmpCanvas.width = newWidth;
    tmpCanvas.height = newHeight;
    var ctx = tmpCanvas.getContext("2d");
    ctx.drawImage(canvas, 0, 0, canvas.width, canvas.height, 0, 0, newWidth, newHeight);
    return tmpCanvas;
  };

  return ImageService;
}();

var CropImage = /*#__PURE__*/function (_Component) {
  _inheritsLoose(CropImage, _Component);

  function CropImage(props) {
    var _this;

    _this = _Component.call(this, props) || this;
    _this.state = {
      src: null,
      croppedImageUrl: null,
      isError: true
    };
    _this.downloadCroppedImg = _this.downloadCroppedImg.bind(_assertThisInitialized(_this));
    _this.parseCroppedImage = _this.parseCroppedImage.bind(_assertThisInitialized(_this));
    _this.start = _this.start.bind(_assertThisInitialized(_this));
    return _this;
  }

  var _proto = CropImage.prototype;

  _proto.componentDidMount = function componentDidMount() {
    var _this2 = this;

    this.setState({
      src: this.props.src
    }, function () {
      _this2.start();
    });
  };

  _proto.checkCroppedDimensionsErrors = function checkCroppedDimensionsErrors(props, croppedWidth, croppedHeight, showMessage) {
    var minCroppedWidth = props.minCroppedWidth,
        maxCroppedWidth = props.maxCroppedWidth,
        minCroppedHeight = props.minCroppedHeight,
        maxCroppedHeight = props.maxCroppedHeight,
        localization = props.localization;
    var isError = false;

    if (minCroppedWidth != null && croppedWidth < minCroppedWidth) {
      isError = true;

      if (showMessage == true) {
        toast.warn(localization.minCroppedWidth || "minCroppedWidth");
      }
    }

    if (maxCroppedWidth != null && croppedWidth > maxCroppedWidth) {
      isError = true;

      if (showMessage == true) {
        toast.warn(localization.maxCroppedWidth || "maxCroppedWidth");
      }
    }

    if (minCroppedHeight != null && croppedHeight < minCroppedHeight) {
      isError = true;

      if (showMessage == true) {
        toast.warn(localization.minCroppedHeight || "minCroppedHeight");
      }
    }

    if (maxCroppedHeight != null && croppedHeight > maxCroppedHeight) {
      isError = true;

      if (showMessage == true) {
        toast.warn(localization.maxCroppedHeight || "maxCroppedHeight");
      }
    }

    return isError;
  };

  _proto.start = function start() {
    var self = this;
    var aspectRatio = null;

    if (self.props.aspectRatio) {
      aspectRatio = self.props.aspectRatio.split(":");
      aspectRatio = parseInt(aspectRatio[0]) / parseInt(aspectRatio[1]);
    }

    var image = document.getElementById('image');
    self.cropper = new Cropper(image, {
      zoomable: false,
      aspectRatio: aspectRatio,
      minCropBoxWidth: self.props.minCroppedWidth,
      minCropBoxHeight: self.props.minCroppedHeight,
      data: {
        x: 0,
        y: 0,
        width: self.props.startWidthCrop || 10,
        height: self.props.startHeightCrop || 10
      },
      crop: function crop(event) {
        var width = event.detail.width;
        var height = event.detail.height;
        var _self$props = self.props,
            minCroppedWidth = _self$props.minCroppedWidth,
            maxCroppedWidth = _self$props.maxCroppedWidth,
            minCroppedHeight = _self$props.minCroppedHeight,
            maxCroppedHeight = _self$props.maxCroppedHeight;
        var isError = self.checkCroppedDimensionsErrors(self.props, width, height);

        if (isError == false) {
          self.cropper.setData({
            width: Math.max(minCroppedWidth, Math.min(maxCroppedWidth, width)),
            height: Math.max(minCroppedHeight, Math.min(maxCroppedHeight, height))
          });
        }
      },
      cropend: function cropend(event) {
        var croppedCanvas = self.cropper.getCroppedCanvas();
        var croppedImageUrl = croppedCanvas.toDataURL();
        var cropped_width = croppedCanvas.width;
        var cropped_height = croppedCanvas.height;
        var isError = self.checkCroppedDimensionsErrors(self.props, cropped_width, cropped_height, true);
        self.setState({
          croppedImageUrl: croppedImageUrl,
          isError: isError
        });
      }
    });
  };

  _proto.downloadCroppedImg = function downloadCroppedImg() {
    var _this$state = this.state,
        croppedImageUrl = _this$state.croppedImageUrl,
        isError = _this$state.isError;

    if (croppedImageUrl != null && isError == false) {
      fetch(this.state.croppedImageUrl, {
        method: "GET",
        headers: {}
      }).then(function (response) {
        response.arrayBuffer().then(function (buffer) {
          var url = window.URL.createObjectURL(new Blob([buffer]));
          var link = document.createElement("a");
          link.href = url;
          link.setAttribute("download", "image.png");
          document.body.appendChild(link);
          link.click();
        });
      })["catch"](function (err) {
        console.log(err);
      });
    }
  };

  _proto.parseCroppedImage = function parseCroppedImage() {
    var self = this;
    var _this$state2 = this.state,
        croppedImageUrl = _this$state2.croppedImageUrl,
        isError = _this$state2.isError;

    if (isError == false && croppedImageUrl != null) {
      fetch(croppedImageUrl).then(function (result) {
        return result.blob();
      }).then(function (blobFile) {
        return new File([blobFile], "cropped.png", {
          type: "image/png"
        });
      }).then(function (newFile) {
        newFile.uid = uuidV4();
        newFile.url = croppedImageUrl;
        return ImageService.batchCompress(newFile);
      }).then(function (response) {
        var files = response.map(function (f) {
          f.uid = uuidV4();
          return f;
        });
        self.props.onSave(croppedImageUrl, files);
      });
    }
  };

  _proto.render = function render() {
    var _this3 = this;

    var localization = this.props.localization;
    var _this$state3 = this.state,
        src = _this$state3.src,
        croppedImageUrl = _this$state3.croppedImageUrl,
        isError = _this$state3.isError;
    var downloadClassname = isError == true ? "cropper_download_icon_disabled" : "cropper_download_icon";
    var saveClassname = isError == true ? "cropper_save_icon_disabled" : "cropper_save_icon";
    return /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement(Card.Header, null, /*#__PURE__*/React.createElement("span", {
      style: {
        "float": "right"
      }
    }, /*#__PURE__*/React.createElement(CustomTooltip, {
      tooltip: localization.download || "Download"
    }, /*#__PURE__*/React.createElement(FontAwesomeIcon, {
      className: downloadClassname,
      icon: faDownload,
      onClick: this.downloadCroppedImg
    })), /*#__PURE__*/React.createElement(CustomTooltip, {
      tooltip: localization.save || "Save"
    }, /*#__PURE__*/React.createElement(FontAwesomeIcon, {
      className: saveClassname,
      icon: faSave,
      onClick: function onClick() {
        _this3.parseCroppedImage();
      }
    })), /*#__PURE__*/React.createElement(CustomTooltip, {
      tooltip: localization.cancel || "Cancel"
    }, /*#__PURE__*/React.createElement(FontAwesomeIcon, {
      className: "cropper_close_icon",
      icon: faTimesCircle,
      onClick: this.props.onClose
    })))), /*#__PURE__*/React.createElement(Card.Body, null, /*#__PURE__*/React.createElement(Row, null, /*#__PURE__*/React.createElement(Col, {
      sm: 5
    }, localization.loaded_image_to_crop || "Loaded image to crop"), /*#__PURE__*/React.createElement(Col, {
      sm: 2
    }), /*#__PURE__*/React.createElement(Col, {
      sm: 5
    }, localization.cropped_image || "Cropped image")), /*#__PURE__*/React.createElement(Row, {
      className: "margin_top_row"
    }, /*#__PURE__*/React.createElement(Col, {
      sm: 5
    }, /*#__PURE__*/React.createElement(Image$1, {
      src: src,
      id: "image",
      fluid: true
    })), /*#__PURE__*/React.createElement(Col, {
      sm: 2
    }), /*#__PURE__*/React.createElement(Col, {
      sm: 5
    }, croppedImageUrl == null && /*#__PURE__*/React.createElement("div", null, localization.crop_message || "Crop the image by creating or moving the 'cropping window'!"), croppedImageUrl && /*#__PURE__*/React.createElement(Image$1, {
      src: croppedImageUrl,
      fluid: true
    })))));
  };

  return CropImage;
}(Component);

var UploadImage = /*#__PURE__*/function (_Component) {
  _inheritsLoose(UploadImage, _Component);

  function UploadImage(props) {
    var _this;

    _this = _Component.call(this, props) || this;
    _this.state = {
      showPreviewImage: false,
      showCropModal: false,
      image: _this.props.image,
      imageToCropSrc: null,
      imageToCrop: null
    };
    _this.checkImageRatioAndDimensions = _this.checkImageRatioAndDimensions.bind(_assertThisInitialized(_this));
    _this.handleFileUpload = _this.handleFileUpload.bind(_assertThisInitialized(_this));
    _this.manageUploadedFile = _this.manageUploadedFile.bind(_assertThisInitialized(_this));
    _this.onRemove = _this.onRemove.bind(_assertThisInitialized(_this));
    _this.saveCrop = _this.saveCrop.bind(_assertThisInitialized(_this));
    return _this;
  }

  var _proto = UploadImage.prototype;

  _proto.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
    if (nextProps.image != this.state.image) {
      this.setState({
        image: nextProps.image
      });
    }
  };

  _proto.handleFileUpload = function handleFileUpload(e) {
    var self = this;
    var files = e.target.files;

    if (files.length > 0) {
      var fileSrc = files[0];
      var reader = new FileReader();

      reader.onload = function () {
        var data = reader.result;
        self.manageUploadedFile(data, fileSrc);
      };

      reader.readAsDataURL(fileSrc);
    }
  };

  _proto.checkImageRatioAndDimensions = function checkImageRatioAndDimensions(uploadedImage) {
    var self = this;
    return new Promise(function (resolve, reject) {
      var _self$props = self.props,
          localization = _self$props.localization,
          sizeConstraints = _self$props.sizeConstraints,
          ratio = _self$props.ratio,
          imageSize = _self$props.imageSize,
          cropProperties = _self$props.cropProperties;

      var _ref = sizeConstraints || {},
          constraints = _ref.constraints,
          minHeight = _ref.minHeight,
          maxHeight = _ref.maxHeight,
          minWidth = _ref.minWidth,
          maxWidth = _ref.maxWidth;

      var _ref2 = cropProperties || {},
          cropImage = _ref2.cropImage;

      var isError = false;

      try {
        var currentImageSize = uploadedImage.length * (3 / 4) - 1;
        currentImageSize = currentImageSize / 1048576;

        if (cropImage != true && imageSize != null && currentImageSize > imageSize) {
          var message = (localization.imageTooBig || "Image size must be at most") + " " + imageSize.toString() + "MB";
          toast.warn(message);
          resolve(true);
          return;
        }

        var image = new Image();

        image.onload = function () {
          var imageWidth = this.width;
          var imageHeight = this.height;

          if (ratio && cropImage != true) {
            var imageRatio = imageWidth / imageHeight;
            var tmpRatio = ratio.split(":");
            var tmpRatio = tmpRatio[0] / tmpRatio[1];

            if (imageRatio != tmpRatio) {
              isError = true;
              var message = (localization.errorAspectRatio || "Aspect ratio must be") + " " + ratio;
              toast.warn(message);
              reject();
              return;
            }
          }

          if (constraints == true) {
            if (imageWidth < minWidth) {
              isError = true;
              var message = localization.imageDimensionsConstraints || "Image dimensions must be at least";
              message = message + " " + minWidth + "x" + minHeight;
              toast.warn(message);
            } else if (imageWidth > maxWidth) {
              isError = true;
              var message = localization.imageDimensionsConstraints || "Image dimensions must be at most";
              message = message + " " + maxWidth + "x" + maxHeight;
              toast.warn(message);
            } else if (imageHeight < minHeight) {
              isError = true;
              var message = localization.imageDimensionsConstraints || "Image dimensions must be at least";
              message = message + " " + minWidth + "x" + minHeight;
              toast.warn(message);
            } else if (imageHeight > maxHeight) {
              isError = true;
              var message = localization.imageDimensionsConstraints || "Image dimensions must be at most";
              message = message + " " + maxWidth + "x" + maxHeight;
              toast.warn(message);
            }

            if (isError == true) {
              reject();
            } else {
              resolve();
              return;
            }
          }

          resolve();
          return;
        };

        image.src = uploadedImage;
      } catch (e) {
        reject(e);
        console.error(e);
        toast.error(localization.errorUploadingImage || "Error uploading image");
      }
    });
  };

  _proto.manageUploadedFile = function manageUploadedFile(uploadedImage, fileSrc) {
    var self = this;
    var _this$props = this.props,
        localization = _this$props.localization,
        resizeProperties = _this$props.resizeProperties,
        cropProperties = _this$props.cropProperties;

    var _ref3 = resizeProperties || {},
        resizeImage = _ref3.resizeImage,
        resizeHeight = _ref3.resizeHeight,
        resizeWidth = _ref3.resizeWidth;

    var _ref4 = cropProperties || {},
        cropImage = _ref4.cropImage;

    self.checkImageRatioAndDimensions(uploadedImage).then(function () {
      if (resizeImage == true) {
        self.fileChangedHandler(fileSrc, resizeWidth, resizeHeight).then(function (data) {
          if (cropImage == true) {
            self.setState({
              imageToCrop: data,
              imageToCropSrc: fileSrc,
              showCropModal: true
            });
          } else {
            self.props.onChange(data);
          }
        })["catch"](function (error) {
          console.error(error);
          toast.error(localization.errorResizingImage || "Error resizing image");
        });
      } else if (cropImage == true) {
        self.setState({
          imageToCrop: uploadedImage,
          imageToCropSrc: fileSrc,
          showCropModal: true
        });
      } else {
        self.props.onChange(uploadedImage);
      }
    })["catch"](function (e) {});
  };

  _proto.fileChangedHandler = function fileChangedHandler(input, newWidth, newHeight) {
    return new Promise(function (resolve, reject) {
      try {
        if (input && (newWidth != null || newHeight != null)) {
          Resizer.imageFileResizer(input, newWidth || 5000, newHeight || 5000, 'PNG', 100, 0, function (uri) {
            resolve(uri);
          }, 'base64', newWidth || 1, newHeight || 1);
        }
      } catch (e) {
        console.error("Error resizing image; " + e);
        reject(e);
      }
    });
  };

  _proto.saveCrop = function saveCrop(data) {
    var self = this;

    if (this.props.onChange) {
      this.setState({
        showCropModal: false
      }, function () {
        var _self$props2 = self.props,
            localization = _self$props2.localization,
            imageSize = _self$props2.imageSize;
        var currentImageSize = data.length * (3 / 4) - 1;
        currentImageSize = currentImageSize / 1048576;

        if (imageSize != null && currentImageSize > imageSize) {
          var message = (localization.imageTooBig || "Image size must be at most") + " " + imageSize.toString() + "MB";
          toast.warn(message);
        } else {
          self.props.onChange(data);
        }
      });
    }
  };

  _proto.onRemove = function onRemove() {
    var _this2 = this;

    if (this.props.onRemove) {
      this.setState({
        showCropModal: false
      }, function () {
        _this2.props.onRemove();
      });
    } else {
      this.setState({
        image: null
      });
    }
  };

  _proto.render = function render() {
    var _this3 = this;

    var _this$props2 = this.props,
        disabled = _this$props2.disabled,
        localization = _this$props2.localization,
        cropProperties = _this$props2.cropProperties,
        error = _this$props2.error,
        errorMessage = _this$props2.errorMessage,
        ratio = _this$props2.ratio;
    var _this$state = this.state,
        image = _this$state.image,
        showPreviewImage = _this$state.showPreviewImage,
        showCropModal = _this$state.showCropModal;
    var _this$state2 = this.state,
        imageToCropSrc = _this$state2.imageToCropSrc,
        imageToCrop = _this$state2.imageToCrop;
    cropProperties = cropProperties || {};
    return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Row, null, /*#__PURE__*/React.createElement(Col, {
      sm: 12
    }, image != null && /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      className: "upload_image_crud_buttons"
    }, /*#__PURE__*/React.createElement(FontAwesomeIcon, {
      className: "delete_image_icon",
      icon: faTrashAlt,
      onClick: this.onRemove
    }), /*#__PURE__*/React.createElement(FontAwesomeIcon, {
      className: "view_image_icon",
      icon: faEye,
      onClick: function onClick() {
        _this3.setState({
          showPreviewImage: true
        });
      }
    })), /*#__PURE__*/React.createElement("div", {
      className: "upload_image_box"
    }, /*#__PURE__*/React.createElement(Image$1, {
      src: image,
      fluid: true
    }))), image == null && /*#__PURE__*/React.createElement("div", {
      className: "upload_image_box"
    }, /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("input", {
      ref: "fileInput",
      onChange: this.handleFileUpload,
      type: "file",
      accept: "image/*",
      style: {
        display: "none"
      },
      multiple: false
    }), /*#__PURE__*/React.createElement(Button, {
      disabled: disabled,
      variant: "outline-secondary",
      className: error == true ? "upload_image_button_error" : "upload_image_button",
      onClick: function onClick() {
        return _this3.refs.fileInput.click();
      }
    }, /*#__PURE__*/React.createElement(FontAwesomeIcon, {
      icon: faUpload,
      onClick: this.props.onCancel
    })))))), error == true && /*#__PURE__*/React.createElement(Row, null, /*#__PURE__*/React.createElement(Col, null, /*#__PURE__*/React.createElement("div", {
      className: "upload_image_error_message"
    }, errorMessage || "Error"))), /*#__PURE__*/React.createElement(Modal, {
      onHide: function onHide() {},
      size: "xl",
      show: showPreviewImage
    }, /*#__PURE__*/React.createElement(Modal.Body, null, /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement(Card.Header, null, /*#__PURE__*/React.createElement("span", {
      style: {
        "float": "right"
      }
    }, /*#__PURE__*/React.createElement(CustomTooltip, {
      tooltip: localization.cancel || "Cancel"
    }, /*#__PURE__*/React.createElement(FontAwesomeIcon, {
      className: "edit_header_icon_close",
      icon: faTimesCircle,
      onClick: function onClick() {
        _this3.setState({
          showPreviewImage: false
        });
      }
    })))), /*#__PURE__*/React.createElement(Card.Body, null, /*#__PURE__*/React.createElement(Image$1, {
      src: image,
      fluid: true
    }))))), /*#__PURE__*/React.createElement(Modal, {
      onHide: function onHide() {},
      size: "xl",
      show: showCropModal
    }, /*#__PURE__*/React.createElement(CropImage, {
      aspectRatio: ratio,
      localization: localization,
      avoidResize: true,
      startHeightCrop: cropProperties.startHeightCrop,
      startWidthCrop: cropProperties.startWidthCrop,
      minCroppedHeight: cropProperties.minCroppedHeight,
      minCroppedWidth: cropProperties.minCroppedWidth,
      maxCroppedHeight: cropProperties.maxCroppedHeight,
      maxCroppedWidth: cropProperties.maxCroppedWidth,
      fileSrc: imageToCropSrc,
      src: imageToCrop,
      onSave: this.saveCrop,
      onClose: this.onRemove
    })));
  };

  return UploadImage;
}(Component);

var google = window.google;
var addressComponentType = "administrative_area_level_3";
var defaultCircleOptions = {
  fillColor: "red",
  fillOpacity: 0.0,
  strokeColor: "red",
  strokeOpacity: 0,
  strokeWeight: 1.2
};
var defaultLatLong = {
  lat: 41.9028,
  lng: 12.4964
};

var OrbitalLocationPicker = /*#__PURE__*/function (_Component) {
  _inheritsLoose(OrbitalLocationPicker, _Component);

  function OrbitalLocationPicker(props) {
    var _this;

    _this = _Component.call(this, props) || this;
    _this.state = {
      position: _this.props.position || defaultLatLong,
      address: _this.props.address,
      autoCompleteAddress: _this.props.address,
      city: _this.props.city
    };
    _this.placeAutocomplete = React.createRef();
    _this.map = React.createRef();
    _this.changeAddress = _this.changeAddress.bind(_assertThisInitialized(_this));
    _this.onSelectAddress = _this.onSelectAddress.bind(_assertThisInitialized(_this));
    return _this;
  }

  var _proto = OrbitalLocationPicker.prototype;

  _proto.getCity = function getCity(coordinates) {
    return new Promise(function (resolve, reject) {
      try {
        var geocoder = new google.maps.Geocoder();
        var lat = coordinates.lat;
        var lng = coordinates.lng;
        var latlng = new google.maps.LatLng(lat, lng);
        geocoder.geocode({
          latLng: latlng
        }, function (results, status) {
          if (status == "OK") {
            var firstResult = results[0];
            var address_components = firstResult.address_components;

            var addressComponent = _$1.find(address_components, function (component) {
              var types = component.types;

              if (types.indexOf(addressComponentType) != -1) {
                return component;
              }
            });

            var city = addressComponent.long_name;
            resolve(city);
          } else {
            reject("Error getting 'city' from coordinates (lat, lng)");
          }
        });
      } catch (error) {
        reject(error);
      }
    });
  };

  _proto.changeAddress = function changeAddress(autoCompleteAddress) {
    var _this2 = this;

    this.setState({
      autoCompleteAddress: autoCompleteAddress
    }, function () {
      if (_$1.isEmpty() == true) {
        _this2.props.onChange({
          address: null,
          position: {},
          city: null
        });
      }
    });
  };

  _proto.onSelectAddress = function onSelectAddress(address) {
    var self = this;
    var localization = this.props.localization;
    var city = null;
    var position = null;
    geocodeByAddress(address).then(function (results) {
      var data = results[0];

      if (data) {
        return getLatLng(data);
      }
    }).then(function (data) {
      position = data;
      return self.getCity(position);
    }).then(function (data) {
      city = data;
      self.setState({
        address: address,
        autoCompleteAddress: address,
        position: position,
        city: city
      }, function () {
        self.props.onChange({
          address: address,
          position: position,
          city: city
        });
      });
    })["catch"](function (error) {
      console.error(error);
      toast.error(localization.error || "Error");
    });
  };

  _proto.getAutoCompleteClassname = function getAutoCompleteClassname(suggestion) {
    var className = suggestion.active ? "suggestion-item--active" : "suggestion-item";
    return className;
  };

  _proto.getAutoCompleteStyle = function getAutoCompleteStyle(suggestion) {
    var backgroundColor = suggestion.active ? "#fafafa" : "#ffffff";
    var style = {
      "backgroundColor": backgroundColor,
      "cursor": "pointer"
    };
    return style;
  };

  _proto.render = function render() {
    var _this3 = this;

    var self = this;
    var _this$state = this.state,
        position = _this$state.position,
        autoCompleteAddress = _this$state.autoCompleteAddress,
        city = _this$state.city;
    var _this$props = this.props,
        localization = _this$props.localization,
        error = _this$props.error;
    return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Row, null, /*#__PURE__*/React.createElement(Col, {
      sm: 9
    }, /*#__PURE__*/React.createElement(PlacesAutocomplete, {
      ref: this.placeAutocomplete,
      value: autoCompleteAddress || "",
      onChange: this.changeAddress,
      onSelect: this.onSelectAddress
    }, function (_ref) {
      var getInputProps = _ref.getInputProps,
          suggestions = _ref.suggestions,
          getSuggestionItemProps = _ref.getSuggestionItemProps;
      return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(FormGroup, {
        style: {
          width: "100%"
        }
      }, /*#__PURE__*/React.createElement(FormControl, _extends({
        isInvalid: error
      }, getInputProps({
        placeholder: localization.searchPlaces || "Search places",
        style: {
          marginBottom: 10
        }
      }), {
        value: autoCompleteAddress || ""
      })), /*#__PURE__*/React.createElement(Form.Control.Feedback, {
        type: "invalid"
      }, localization.completeField || "Please complete the field")), /*#__PURE__*/React.createElement("div", {
        className: "autocomplete-dropdown-container"
      }, suggestions.map(function (suggestion) {
        var className = self.getAutoCompleteClassname(suggestion);
        var style = self.getAutoCompleteStyle(suggestion);
        return /*#__PURE__*/React.createElement("div", getSuggestionItemProps(suggestion, {
          className: className,
          style: style
        }), /*#__PURE__*/React.createElement("span", null, suggestion.description));
      })));
    })), /*#__PURE__*/React.createElement(Col, {
      sm: 3
    }, /*#__PURE__*/React.createElement(FormControl, {
      placeholder: localization.city || "City",
      value: city || "",
      disabled: true
    }))), /*#__PURE__*/React.createElement(Row, null, /*#__PURE__*/React.createElement(Col, {
      sm: 12
    }, /*#__PURE__*/React.createElement(LocationPicker, {
      zoom: 15,
      ref: this.map,
      circleOptions: defaultCircleOptions,
      containerElement: /*#__PURE__*/React.createElement("div", {
        className: "mapContainer"
      }),
      mapElement: position ? /*#__PURE__*/React.createElement("div", {
        style: {
          height: "250px"
        }
      }) : /*#__PURE__*/React.createElement("div", {
        style: {
          height: "250px"
        }
      }),
      defaultPosition: position || defaultLatLong,
      onChange: function onChange(locationPicker) {
        var address = locationPicker.address;

        _this3.onSelectAddress(address);
      },
      options: {
        gestureHandling: "cooperative"
      }
    }))));
  };

  return OrbitalLocationPicker;
}(Component);

function _templateObject() {
  var data = _taggedTemplateLiteralLoose(["\n  .table {\n    display: inline-block;\n    border-spacing: 0;\n    border: 1px solid #dee2e6;\n\n    .tr {\n      :last-child {\n        .td {\n          border-bottom: 0;\n        }\n      }\n      .td {\n        overflow-x: hidden;\n      }\n    }\n\n    .th,\n    .td {\n      margin: 0;\n      padding: 0.5rem;\n      border-bottom: 1px solid #dee2e6;\n      border-right: 1px solid #dee2e6;\n\n      ", "\n      position: relative;\n\n      :last-child {\n        border-right: 0;\n      }\n\n      .resizer {\n        right: 0;\n        background: #dee2e6;\n        width: 1px;\n        height: 100%;\n        position: absolute;\n        top: 0;\n        z-index: 1;\n        ", "\n        touch-action :none;\n\n        &.isResizing {\n          background: black;\n        }\n      }\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}
var Styles = styled.div(_templateObject(), "", "");

function ReactTable(_ref) {
  var localization = _ref.localization,
      columns = _ref.columns,
      data = _ref.data,
      _defaultPageSize = _ref._defaultPageSize,
      _fixedPageSize = _ref._fixedPageSize,
      _noDataMessage = _ref._noDataMessage,
      skipPageReset = _ref.skipPageReset;

  var _useTable = useTable({
    columns: columns,
    data: data,
    autoResetPage: !skipPageReset,
    initialState: {
      pageSize: _fixedPageSize || _defaultPageSize || 10
    }
  }, useSortBy, useExpanded, usePagination, useResizeColumns, useFlexLayout, useRowSelect),
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
      return /*#__PURE__*/React.createElement("option", {
        key: index,
        value: value
      }, value);
    });

    return options;
  };

  var setSortIcon = function setSortIcon(column) {
    return /*#__PURE__*/React.createElement("span", null, column.disableSortBy != true && column.isSorted == false && /*#__PURE__*/React.createElement("span", null, " ", /*#__PURE__*/React.createElement(FontAwesomeIcon, {
      icon: faSort,
      style: {
        cursor: "pointer"
      },
      onClick: function onClick() {
        column.toggleSortBy();
      }
    })), /*#__PURE__*/React.createElement("span", null, column.isSorted ? column.isSortedDesc ? /*#__PURE__*/React.createElement("span", null, " ", /*#__PURE__*/React.createElement(FontAwesomeIcon, {
      icon: faSortDown,
      style: {
        cursor: "pointer"
      },
      onClick: function onClick() {
        column.toggleSortBy();
      }
    })) : /*#__PURE__*/React.createElement("span", null, " ", /*#__PURE__*/React.createElement(FontAwesomeIcon, {
      icon: faSortUp,
      style: {
        cursor: "pointer"
      },
      onClick: function onClick() {
        column.toggleSortBy();
      }
    })) : ""));
  };

  var setResize = function setResize(column) {
    return /*#__PURE__*/React.createElement("span", null, column.canResize && /*#__PURE__*/React.createElement("div", _extends({}, column.getResizerProps(), {
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
        return /*#__PURE__*/React.createElement("div", _extends({}, row.getRowProps(), {
          className: "tr"
        }), row.cells.map(function (cell) {
          return /*#__PURE__*/React.createElement("div", _extends({}, cell.getCellProps(), {
            className: "td"
          }), /*#__PURE__*/React.createElement("div", {
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
        return /*#__PURE__*/React.createElement("div", _extends({}, headerGroup.getHeaderGroupProps(), {
          className: "tr"
        }), headerGroup.headers.map(function (column) {
          return /*#__PURE__*/React.createElement("div", _extends({}, column.getHeaderProps(), {
            className: "th"
          }), /*#__PURE__*/React.createElement("div", {
            style: {
              color: "#66000000"
            }
          }, "."));
        }));
      });
    });

    return rows;
  };

  return /*#__PURE__*/React.createElement(Styles, null, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", _extends({}, getTableProps(), {
    className: "table"
  }), /*#__PURE__*/React.createElement("div", null, headerGroups.map(function (headerGroup) {
    return /*#__PURE__*/React.createElement("div", _extends({}, headerGroup.getHeaderGroupProps(), {
      className: "tr"
    }), headerGroup.headers.map(function (column) {
      return /*#__PURE__*/React.createElement("div", _extends({}, column.getHeaderProps(), {
        className: "th"
      }), column.render("Header"), setSortIcon(column), setResize(column));
    }));
  }), data.length == 0 && /*#__PURE__*/React.createElement("span", null, setEmptyHeaders())), /*#__PURE__*/React.createElement("div", getTableBodyProps(), page.map(function (row, i) {
    prepareRow(row);
    return /*#__PURE__*/React.createElement("div", _extends({}, row.getRowProps(), {
      className: "tr"
    }), row.cells.map(function (cell) {
      return /*#__PURE__*/React.createElement("div", _extends({}, cell.getCellProps(), {
        className: "td"
      }), cell.render("Cell"));
    }));
  }), data.length > 0 && /*#__PURE__*/React.createElement("span", null, setEmptyRows())), data.length == 0 && /*#__PURE__*/React.createElement("div", {
    className: "noData"
  }, /*#__PURE__*/React.createElement(FontAwesomeIcon, {
    icon: faInfoCircle
  }), " ", _noDataMessage || "No data"))), /*#__PURE__*/React.createElement(Row, {
    className: "pagination"
  }, /*#__PURE__*/React.createElement(Col, {
    sm: 8
  }, /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement(Button, {
    variant: "outline-secondary",
    size: "sm",
    onClick: function onClick() {
      return gotoPage(0);
    },
    disabled: !canPreviousPage
  }, " ", "<<"), " ", /*#__PURE__*/React.createElement(Button, {
    variant: "outline-secondary",
    size: "sm",
    onClick: function onClick() {
      return previousPage();
    },
    disabled: !canPreviousPage
  }, " ", "<"), " ", /*#__PURE__*/React.createElement(Button, {
    variant: "outline-secondary",
    size: "sm",
    onClick: function onClick() {
      return nextPage();
    },
    disabled: !canNextPage
  }, " ", ">"), " ", /*#__PURE__*/React.createElement(Button, {
    variant: "outline-secondary",
    size: "sm",
    onClick: function onClick() {
      return gotoPage(pageCount - 1);
    },
    disabled: !canNextPage
  }, " ", ">>"), " ", /*#__PURE__*/React.createElement("span", {
    style: {
      "float": "right"
    }
  }, /*#__PURE__*/React.createElement("span", null, localization.page || "Page", " ", /*#__PURE__*/React.createElement("strong", null, pageIndex + 1, " ", localization.of || "of", " ", pageOptions.length), " "), /*#__PURE__*/React.createElement("span", null, "| ", localization.go_to_page, ": ")))), /*#__PURE__*/React.createElement(Col, {
    sm: 2
  }, /*#__PURE__*/React.createElement(Form.Control, {
    disabled: data.length == 0,
    size: "sm",
    type: "number",
    min: 1,
    max: pageOptions.length,
    defaultValue: pageIndex + 1,
    value: pageIndex + 1,
    onChange: function onChange(e) {
      var page = e.target.value ? Number(e.target.value) - 1 : 0;
      gotoPage(page);
    },
    style: {
      width: "100%"
    }
  })), /*#__PURE__*/React.createElement(Col, {
    sm: 2
  }, /*#__PURE__*/React.createElement(Form.Control, {
    as: "select",
    size: "sm",
    value: pageSize,
    disabled: _fixedPageSize != null || data.length == 0,
    onChange: function onChange(e) {
      setPageSize(Number(e.target.value));
    }
  }, setPageSizeOptions()))));
}

export { APISb, AuthStore, ClientSession, DatePicker, DatePicker$1 as DateTimePicker, HTMLTextEditor, CustomLoadingOverlay as LoadingOverlay, MandatoryFieldLabel, NormalFieldLabel, OrbitalLocationPicker, ReactTable, RecurrenceEditor, ReservationScheduler as Scheduler, TimePicker, CustomTooltip as Tooltip, UploadImage };
//# sourceMappingURL=index.modern.js.map
