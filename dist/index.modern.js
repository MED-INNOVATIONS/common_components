import axios from 'axios';
import _$2 from 'lodash';
import React, { Component as Component$1, useEffect } from 'react';
import { DatePickerComponent, DateTimePickerComponent, TimePickerComponent } from '@syncfusion/ej2-react-calendars';
import { RecurrenceEditorComponent, ScheduleComponent, ViewsDirective, ViewDirective, Inject, Day, Week, WorkWeek, Month, Agenda } from '@syncfusion/ej2-react-schedule';
import moment from 'moment';
import styled from 'styled-components';
import { Editor } from 'react-draft-wysiwyg';
import { ContentState, EditorState, convertToRaw } from 'draft-js';
import draftToHtml from 'draftjs-to-html';
import htmlToDraft from 'html-to-draftjs';
import LoadingOverlay from 'react-loading-overlay';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import { OverlayTrigger, Tooltip, Button, Card, Row, Col, Image as Image$1, Modal, FormGroup, FormControl, Form, FormCheck } from 'react-bootstrap';
import { toast } from 'react-toastify';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle, faPencilAlt, faTrashAlt, faDownload, faUpload, faInfoCircle, faSort, faSortDown, faSortUp } from '@fortawesome/free-solid-svg-icons';
import Resizer from 'react-image-file-resizer';
import uuidV4 from 'uuid/v4';
import Cropper from 'cropperjs';
import { faTimesCircle, faSave } from '@fortawesome/free-regular-svg-icons';
import PlacesAutocomplete, { geocodeByPlaceId, geocodeByAddress, getLatLng } from 'react-places-autocomplete';
import LocationPicker from 'react-location-picker';
import { useTable, useSortBy, useExpanded, usePagination, useResizeColumns, useFlexLayout, useRowSelect } from 'react-table';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BsPlusCircle } from 'react-icons/bs';
import Select from 'react-select';

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

var APISb = /*#__PURE__*/function () {
  function APISb() {}

  APISb.cleanToken = function cleanToken(token) {
    token = "Bearer " + token;
    token = token.replaceAll('"', "");
    return token;
  };

  APISb.get = function get(token, baseUrl, endpoint, params, customHeaders) {
    var url = baseUrl + endpoint;
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

  APISb.post = function post(token, baseUrl, endpoint, params, data, customHeaders) {
    var url = baseUrl + endpoint;
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

  APISb.put = function put(token, baseUrl, endpoint, params, data, customHeaders) {
    var url = baseUrl + endpoint;
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

  APISb["delete"] = function _delete(token, baseUrl, endpoint, params, customHeaders) {
    var url = baseUrl + endpoint;
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

  APISb.get_plain = function get_plain(baseUrl, endpoint, params, customHeaders) {
    var url = baseUrl + endpoint;
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

  APISb.post_plain = function post_plain(baseUrl, endpoint, params, data, customHeaders) {
    var url = baseUrl + endpoint;
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

  APISb.put_plain = function put_plain(baseUrl, endpoint, params, data, customHeaders) {
    var url = baseUrl + endpoint;
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

var SBDashboardAuthkey = "SBDashboardAuth";
var SBUserAuthkey = "SBUserAuth";
var authkey = "auth";
var SBAPI_URL = "sbapiUrl";
var currentLang = "currentLang";
var localizationChannel = "setLocalizationEvent";
var pluginVersionChannel = "pluginVersionEvent";

var MySessionStorage = require('browser-session-store');

MySessionStorage.setItem = function (key) {
  if (key == currentLang) {
    var localizationChannel$1 = localizationChannel;
    var setLocalizationEvent = new Event(localizationChannel$1);
    setLocalizationEvent.key = key;
    window.dispatchEvent(setLocalizationEvent);
  }
};

var SessionStorageStore = /*#__PURE__*/function () {
  function SessionStorageStore() {}

  SessionStorageStore.cleanKey = function cleanKey(value) {
    if (value != null) {
      value = value.replaceAll('"', "");
    }

    return value;
  };

  SessionStorageStore.getCurrentLang = function getCurrentLang() {
    var currentLang$1 = sessionStorage.getItem(currentLang);
    currentLang$1 = this.cleanKey(currentLang$1);
    return currentLang$1;
  };

  SessionStorageStore.setCurrentLang = function setCurrentLang(currentLang$1) {
    return new Promise(function (resolve, reject) {
      MySessionStorage.put(currentLang, currentLang$1, function (error) {
        if (error) {
          reject(error);
        } else {
          MySessionStorage.setItem(currentLang);
          resolve(currentLang$1);
        }
      });
    });
  };

  SessionStorageStore.removeCurrentLang = function removeCurrentLang() {
    return new Promise(function (resolve, reject) {
      MySessionStorage.remove(currentLang, function (error) {
        if (error) {
          reject(error);
        } else {
          resolve();
        }
      });
    });
  };

  SessionStorageStore.getDashboardAuthKey = function getDashboardAuthKey() {
    var SBDashboardAuthkey$1 = sessionStorage.getItem(SBDashboardAuthkey);
    SBDashboardAuthkey$1 = this.cleanKey(SBDashboardAuthkey$1);
    return SBDashboardAuthkey$1;
  };

  SessionStorageStore.setDashboardAuthKey = function setDashboardAuthKey(dashboardAuthKey) {
    return new Promise(function (resolve, reject) {
      MySessionStorage.put(SBDashboardAuthkey, dashboardAuthKey, function (error) {
        if (error) {
          reject(error);
        } else {
          resolve(dashboardAuthKey);
        }
      });
    });
  };

  SessionStorageStore.removeDashboardAuthKey = function removeDashboardAuthKey() {
    return new Promise(function (resolve, reject) {
      MySessionStorage.remove(SBDashboardAuthkey, function (error) {
        if (error) {
          reject(error);
        } else {
          resolve();
        }
      });
    });
  };

  SessionStorageStore.getUserAuthKey = function getUserAuthKey() {
    var SBUserAuthkey$1 = sessionStorage.getItem(SBUserAuthkey);
    SBUserAuthkey$1 = this.cleanKey(SBUserAuthkey$1);
    return SBUserAuthkey$1;
  };

  SessionStorageStore.setUserAuthKey = function setUserAuthKey(userAuthKey) {
    return new Promise(function (resolve, reject) {
      MySessionStorage.put(SBUserAuthkey, userAuthKey, function (error) {
        if (error) {
          reject(error);
        } else {
          resolve(userAuthKey);
        }
      });
    });
  };

  SessionStorageStore.removeUserAuthKey = function removeUserAuthKey() {
    return new Promise(function (resolve, reject) {
      MySessionStorage.remove(SBUserAuthkey, function (error) {
        if (error) {
          reject(error);
        } else {
          resolve();
        }
      });
    });
  };

  SessionStorageStore.getAuth = function getAuth() {
    var authkey$1 = sessionStorage.getItem(authkey);
    return authkey$1;
  };

  SessionStorageStore.setAuth = function setAuth(authkey$1) {
    return new Promise(function (resolve, reject) {
      MySessionStorage.put(authkey, authkey$1, function (error) {
        if (error) {
          reject(error);
        } else {
          resolve(authkey$1);
        }
      });
    });
  };

  SessionStorageStore.removeAuth = function removeAuth() {
    return new Promise(function (resolve, reject) {
      MySessionStorage.remove(authkey, function (error) {
        if (error) {
          reject(error);
        } else {
          resolve();
        }
      });
    });
  };

  SessionStorageStore.getSBAPIUrl = function getSBAPIUrl() {
    var SBAPI_URL$1 = sessionStorage.getItem(SBAPI_URL);
    SBAPI_URL$1 = this.cleanKey(SBAPI_URL$1);
    return SBAPI_URL$1;
  };

  SessionStorageStore.setSBAPIUrl = function setSBAPIUrl(SBAPIUrl) {
    return new Promise(function (resolve, reject) {
      MySessionStorage.put(SBAPI_URL, SBAPIUrl, function (error) {
        if (error) {
          reject(error);
        } else {
          resolve(SBAPIUrl);
        }
      });
    });
  };

  SessionStorageStore.removeSBAPIUrl = function removeSBAPIUrl() {
    return new Promise(function (resolve, reject) {
      MySessionStorage.remove(SBAPI_URL, function (error) {
        if (error) {
          reject(error);
        } else {
          resolve();
        }
      });
    });
  };

  return SessionStorageStore;
}();

var ClientSession = /*#__PURE__*/function () {
  function ClientSession() {}

  ClientSession.isLoggedIn = function isLoggedIn() {
    return new Promise(function (resolve, reject) {
      var auth = SessionStorageStore.getAuth();

      if (_$2.isEmpty(auth) == true) {
        resolve(false);
      } else {
        resolve(true);
      }
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

  ClientSession.getAuth = function getAuth() {
    return new Promise(function (resolve, reject) {
      var auth = SessionStorageStore.getAuth();

      if (_$2.isEmpty(auth) == true) {
        reject(null);
      } else {
        resolve(auth);
      }
    });
  };

  return ClientSession;
}();

var SpecificAPI = /*#__PURE__*/function () {
  function SpecificAPI() {}

  SpecificAPI.getAvailablePlugin = function getAvailablePlugin(authKey, apiUrl, pluginKey) {
    return new Promise(function (resolve, reject) {
      var url = "/PluginAvailableListMo/search/findByPluginKey";
      var params = {
        "pluginKey": pluginKey
      };
      APISb.get(authKey, apiUrl, url, params).then(function (result) {
        var data = result.data;
        resolve(data);
      })["catch"](function (error) {
        resolve(error);
      });
    });
  };

  SpecificAPI.getPluginActivationForAll = function getPluginActivationForAll(authKey, apiUrl, pluginKey, brandId, userId) {
    return new Promise(function (resolve, reject) {
      var url = "/PluginActivationMo/search/findByPluginKeyAndBrandIdAndIdRelAndPluginActiveAndPluginEnableAndBuyForAll";
      var params = {
        "pluginKey": pluginKey,
        "brandId": brandId,
        "idRel": userId,
        "pluginActive": true,
        "pluginEnable": true,
        "buyForAll": true
      };
      APISb.get(authKey, apiUrl, url, params).then(function (result) {
        var data = result.data;
        resolve(data);
      })["catch"](function (error) {
        reject(error);
      });
    });
  };

  SpecificAPI.getPluginActivation = function getPluginActivation(authKey, apiUrl, pluginKey, brandId, userId) {
    return new Promise(function (resolve, reject) {
      var url = "/PluginActivationMo/search/findByPluginKeyAndBrandIdAndIdRelAndPluginActiveAndPluginEnable";
      var params = {
        "pluginKey": pluginKey,
        "brandId": brandId,
        "idRel": userId,
        "pluginActive": true,
        "pluginEnable": true
      };
      APISb.get(authKey, apiUrl, url, params).then(function (result) {
        var data = result.data;
        resolve(data);
      })["catch"](function (error) {
        reject(error);
      });
    });
  };

  SpecificAPI.getPluginConfiguration = function getPluginConfiguration(authKey, apiUrl, pluginId) {
    return new Promise(function (resolve, reject) {
      var url = "/BrandPluginConfigMo/search/findByPluginId";
      var params = {
        "pluginId": pluginId
      };
      APISb.get(authKey, apiUrl, url, params).then(function (result) {
        var data = result.data;
        data = data[0] || data;
        var config = data && data.configData ? data.configData : {};
        resolve(config);
      })["catch"](function (error) {
        reject(error);
      });
    });
  };

  SpecificAPI.getBrandById = function getBrandById(authKey, apiUrl, brandId) {
    return new Promise(function (resolve, reject) {
      var url = "/BrandsMo/" + brandId;
      APISb.get(authKey, apiUrl, url, null).then(function (result) {
        var data = result.data;
        resolve(data);
      })["catch"](function (error) {
        reject(error);
      });
    });
  };

  SpecificAPI.getBrandConfig = function getBrandConfig(authKey, apiUrl, brandId) {
    return new Promise(function (resolve, reject) {
      var url = "/BrandConfigurationMo/search/findByBrandId";
      var params = {
        "brandId": brandId
      };
      APISb.get(authKey, apiUrl, url, params).then(function (result) {
        var data = result.data;
        data = data[0] || data;
        resolve(data);
      })["catch"](function (error) {
        reject(error);
      });
    });
  };

  SpecificAPI.getOrbitalConfig = function getOrbitalConfig(authKey, apiUrl, key) {
    return new Promise(function (resolve, reject) {
      var url = "/ConfigMo/search/findByKey";
      key = key || "D001";
      var params = {
        "key": key
      };
      APISb.get(authKey, apiUrl, url, params).then(function (result) {
        var data = result.data;
        resolve(data);
      })["catch"](function (error) {
        reject(error);
      });
    });
  };

  SpecificAPI.getGeneralPluginLocalization = function getGeneralPluginLocalization(authKey, apiUrl, pluginKey) {
    return new Promise(function (resolve, reject) {
      var url = "/LocalizationAvailablePluginsMo/search/findByPluginKey";
      var params = {
        "pluginKey": pluginKey
      };
      APISb.get(authKey, apiUrl, url, params).then(function (result) {
        var data = result.data || {};
        var dashboard = data.dashboard || {};
        resolve(dashboard);
      })["catch"](function (error) {
        reject(error);
      });
    });
  };

  SpecificAPI.getActivePluginLocalization = function getActivePluginLocalization(authKey, apiUrl, pluginActivationId) {
    return new Promise(function (resolve, reject) {
      var url = "/LocalizationActivePluginsMo/search/findByPluginActivationId";
      var params = {
        "pluginActivationId": pluginActivationId
      };
      APISb.get(authKey, apiUrl, url, params).then(function (result) {
        var data = result.data || {};
        var dashboard = data.dashboard || {};
        resolve(dashboard);
      })["catch"](function (error) {
        reject(error);
      });
    });
  };

  return SpecificAPI;
}();

function getBrandPluginActivationInstance(authKey, apiUrl, pluginKey, brandId) {
  return SpecificAPI.getPluginActivation(authKey, apiUrl, pluginKey, brandId, brandId);
}
function getOwnerPluginActivationInstance(authKey, apiUrl, pluginKey, brandId, ownerId) {
  return new Promise(function (resolve, reject) {
    var p0 = SpecificAPI.getPluginActivationForAll(authKey, apiUrl, pluginKey, brandId, brandId);
    var p1 = SpecificAPI.getPluginActivation(authKey, apiUrl, pluginKey, brandId, ownerId);
    Promise.all([p0, p1]).then(function (results) {
      var buyForAllActivation = results[0];
      var singleOwnerActivation = results[1];
      var pluginActivation = _$2.isEmpty(buyForAllActivation) == false ? buyForAllActivation : singleOwnerActivation;
      resolve(pluginActivation);
    })["catch"](function (error) {
      reject(error);
    });
  });
}
function getPluginActivation(authKey, apiUrl, pluginTarget, pluginKey, brandId, ownerId, PluginStore) {
  var self = this;
  return new Promise(function (resolve, reject) {
    SpecificAPI.getAvailablePlugin(authKey, apiUrl, pluginKey).then(function (availablePlugin) {
      PluginStore.setAvailablePlugin(availablePlugin);

      if (pluginTarget == "brand") {
        return self.getBrandPluginActivationInstance(authKey, apiUrl, pluginKey, brandId);
      } else if (pluginTarget == "owner") {
        return self.getOwnerPluginActivationInstance(authKey, apiUrl, pluginKey, brandId, ownerId);
      }
    }).then(function (pluginActivation) {
      if (_$2.isEmpty(pluginActivation) == true) {
        reject("Plugin '" + pluginKey + "' is not active");
      } else {
        resolve(pluginActivation);
      }
    })["catch"](function (error) {
      console.error(error);
    });
  });
}
function getPluginLocalization(authKey, apiUrl, pluginKey, pluginActivationId) {
  return new Promise(function (resolve, reject) {
    var p0 = SpecificAPI.getGeneralPluginLocalization(authKey, apiUrl, pluginKey);
    var p1 = SpecificAPI.getActivePluginLocalization(authKey, apiUrl, pluginActivationId);
    Promise.all([p0, p1]).then(function (results) {
      var generalPluginLocalization = results[0];
      var activePluginLocalization = results[1];

      var localization = _extends({}, generalPluginLocalization, activePluginLocalization);

      resolve(localization);
    })["catch"](function (error) {
      reject("Error getting localization");
    });
  });
}
function setLocalization(localizationInstance, localizationObj, callbackLocalization) {
  var newLocalizationObject = {};

  _$2.each(localizationObj, function (obj, key) {
    var languages = Object.keys(obj);

    _$2.each(languages, function (language) {
      if (newLocalizationObject[language] == null) {
        newLocalizationObject[language] = {};
      }

      newLocalizationObject[language][key] = obj[language];
    });
  });

  newLocalizationObject.En = newLocalizationObject.En || {};
  newLocalizationObject.It = newLocalizationObject.It || {};
  newLocalizationObject.En = _extends({}, callbackLocalization.En, newLocalizationObject.En);
  newLocalizationObject.It = _extends({}, callbackLocalization.It, newLocalizationObject.It);
  localizationInstance.setContent(newLocalizationObject);
}
function setUserLocalizationLanguage(AuthStore, localizationInstance) {
  var lang = SessionStorageStore.getCurrentLang() || AuthStore.getDefautlLang();
  localizationInstance.setLanguage(lang);
}
function checkPermission(AuthStore, pluginKey) {
  return new Promise(function (resolve, reject) {
    var userPluginPermission = AuthStore.getUserPluginPermission();
    var pluginPermission = userPluginPermission[pluginKey];

    if (pluginPermission === null || pluginPermission === "D") {
      reject("The user is not allowed to access the '" + pluginKey + "' plugin");
    } else {
      resolve();
    }
  });
}
function initializePluginPipeline(initializationObject) {
  var authKey = initializationObject.authKey,
      apiUrl = initializationObject.apiUrl,
      pluginTarget = initializationObject.pluginTarget,
      pluginKey = initializationObject.pluginKey,
      pluginVersion = initializationObject.pluginVersion,
      AuthStore = initializationObject.AuthStore,
      OrbitalStore = initializationObject.OrbitalStore,
      BrandStore = initializationObject.BrandStore,
      PluginStore = initializationObject.PluginStore,
      localizationInstance = initializationObject.localizationInstance,
      callbackLocalization = initializationObject.callbackLocalization;
  var self = this;
  return new Promise(function (resolve, reject) {
    var pluginVersionEvent = new Event(pluginVersionChannel);
    pluginVersionEvent.pluginVersion = pluginVersion;
    window.dispatchEvent(pluginVersionEvent);
    ClientSession.checkLogin().then(function () {
      var auth = SessionStorageStore.getAuth();
      auth = auth && typeof auth == "string" ? JSON.parse(auth) : auth;
      return AuthStore.setAuth(auth);
    }).then(function () {
      self.checkPermission(AuthStore, pluginKey);
    }).then(function () {
      var brandId = AuthStore.getBrandId();
      var ownerId = AuthStore.getOwnerId();
      return self.getPluginActivation(authKey, apiUrl, pluginTarget, pluginKey, brandId, ownerId, PluginStore);
    }).then(function (pluginActivation) {
      var pluginActivationId = pluginActivation.id;
      var brandId = AuthStore.getBrandId();
      PluginStore.setPluginActivation(pluginActivation);
      var p0 = self.getPluginLocalization(authKey, apiUrl, pluginKey, pluginActivationId);
      var p1 = SpecificAPI.getOrbitalConfig(authKey, apiUrl, null);
      var p2 = SpecificAPI.getBrandById(authKey, apiUrl, brandId);
      var p3 = SpecificAPI.getBrandConfig(authKey, apiUrl, brandId);
      return Promise.all([p0, p1, p2, p3]);
    }).then(function (results) {
      var localizationObj = results[0];
      self.setLocalization(localizationInstance, localizationObj, callbackLocalization);
      self.setUserLocalizationLanguage(AuthStore, localizationInstance);
      var orbitalConfig = results[1];
      OrbitalStore.setOrbitalConfig(orbitalConfig);
      var brand = results[2];
      BrandStore.setBrand(brand);
      var brandConfig = results[3];
      BrandStore.setBrandConfiguration(brandConfig);
      resolve();
    })["catch"](function (error) {
      console.error("Error during plugin initalization pipeline");
      reject(error);
    });
  });
}
function initializePluginPipeline_WITHOUT_pluginAvailable_pluginActivation(initializationObject) {
  var authKey = initializationObject.authKey,
      apiUrl = initializationObject.apiUrl,
      pluginKey = initializationObject.pluginKey,
      pluginVersion = initializationObject.pluginVersion,
      AuthStore = initializationObject.AuthStore,
      OrbitalStore = initializationObject.OrbitalStore,
      BrandStore = initializationObject.BrandStore,
      PluginStore = initializationObject.PluginStore,
      localizationInstance = initializationObject.localizationInstance,
      callbackLocalization = initializationObject.callbackLocalization;
  var self = this;
  return new Promise(function (resolve, reject) {
    var pluginVersionEvent = new Event(pluginVersionChannel);
    pluginVersionEvent.pluginVersion = pluginVersion;
    window.dispatchEvent(pluginVersionEvent);
    ClientSession.checkLogin().then(function () {
      var auth = SessionStorageStore.getAuth();
      auth = auth && typeof auth == "string" ? JSON.parse(auth) : auth;
      return AuthStore.setAuth(auth);
    }).then(function () {
      return SpecificAPI.getAvailablePlugin(authKey, apiUrl, pluginKey);
    }).then(function (availablePlugin) {
      PluginStore.setAvailablePlugin(availablePlugin);
      var brandId = AuthStore.getBrandId();
      var p0 = SpecificAPI.getOrbitalConfig(authKey, apiUrl, null);
      var p1 = SpecificAPI.getBrandById(authKey, apiUrl, brandId);
      var p2 = SpecificAPI.getBrandConfig(authKey, apiUrl, brandId);
      return Promise.all([p0, p1, p2]);
    }).then(function (results) {
      var orbitalConfig = results[0];
      OrbitalStore.setOrbitalConfig(orbitalConfig);
      var brand = results[1];
      BrandStore.setBrand(brand);
      var brandConfig = results[2];
      BrandStore.setBrandConfiguration(brandConfig);
      var localizationObj = {};
      self.setLocalization(localizationInstance, localizationObj, callbackLocalization);
      resolve();
    })["catch"](function (error) {
      console.error("Error during plugin initalization pipeline");
      reject(error);
    });
  });
}
function getLocalizationChannel() {
  var localizationChannel$1 = localizationChannel;
  return localizationChannel$1;
}
function getPluginVersionChannel() {
  var pluginVersionChannel$1 = pluginVersionChannel;
  return pluginVersionChannel$1;
}

var PluginUtils = {
  __proto__: null,
  getBrandPluginActivationInstance: getBrandPluginActivationInstance,
  getOwnerPluginActivationInstance: getOwnerPluginActivationInstance,
  getPluginActivation: getPluginActivation,
  getPluginLocalization: getPluginLocalization,
  setLocalization: setLocalization,
  setUserLocalizationLanguage: setUserLocalizationLanguage,
  checkPermission: checkPermission,
  initializePluginPipeline: initializePluginPipeline,
  initializePluginPipeline_WITHOUT_pluginAvailable_pluginActivation: initializePluginPipeline_WITHOUT_pluginAvailable_pluginActivation,
  getLocalizationChannel: getLocalizationChannel,
  getPluginVersionChannel: getPluginVersionChannel
};

var AuthStore = /*#__PURE__*/function () {
  function AuthStore() {}

  AuthStore.setAuthStore = function setAuthStore() {
    var self = this;
    return new Promise(function (resolve, reject) {
      var auth = SessionStorageStore.getAuth();

      if (_.isEmpty(auth) == true) {
        reject("'Auth' is null");
      } else {
        self.setAuth(auth);
        resolve();
      }
    });
  };

  AuthStore.setAuth = function setAuth(auth) {
    this.auth = auth;
  };

  AuthStore.getAuth = function getAuth() {
    return this.auth;
  };

  AuthStore.getUser = function getUser() {
    var user = this.auth.user || {};
    return user;
  };

  AuthStore.getUserId = function getUserId() {
    var user = this.auth.user || {};
    var userId = user.id;
    return userId;
  };

  AuthStore.getUserRole = function getUserRole() {
    var user = this.auth.user || {};
    var role = user.role;
    return role;
  };

  AuthStore.getUserSubRole = function getUserSubRole() {
    var user = this.auth.user || {};
    var subRole = user.subRole;
    return subRole;
  };

  AuthStore.getDefautlLang = function getDefautlLang() {
    var auth = this.auth || {};
    var lang = auth.lang;
    return lang;
  };

  AuthStore.getCurrentLang = function getCurrentLang() {
    return this.getDefautlLang();
  };

  AuthStore.getUserLang = function getUserLang() {
    return this.getDefautlLang();
  };

  AuthStore.getPreferedLanguages = function getPreferedLanguages() {
    var auth = this.auth || {};
    var user = auth.user || {};
    var brand = user._brand || {};
    var brandConfiguration = brand._brandConfiguration || {};
    var languages = brandConfiguration.preferedLang || [];
    return languages;
  };

  AuthStore.getUserPluginPermission = function getUserPluginPermission() {
    var user = this.auth.user || {};
    var permissions = user._permission || {};
    return permissions;
  };

  AuthStore.checkPermissionKey = function checkPermissionKey(permission_key) {
    var user = this.auth.user || {};
    var permissions = user._permission || {};
    var permitted = permissions[permission_key] || "D";
    return permitted;
  };

  AuthStore.getBrandId = function getBrandId() {
    var user = this.auth.user || {};
    var brandId = user.brandId;
    return brandId;
  };

  AuthStore.getReferrerId = function getReferrerId() {
    var user = this.auth.user || {};
    var referrerId = user.referrerId;
    return referrerId;
  };

  AuthStore.getOwnerId = function getOwnerId() {
    var user = this.auth && this.auth.user ? this.auth.user : null;

    if (user.role == "Owner" && user.subRole == "Sub Owner") {
      return user.referrerId;
    } else if (user.role == "Owner") {
      return user.id;
    } else if (user.role == "Brand Manager" && user.subRole == "Brand Assistant") {
      return user.referrerId;
    } else if (user.role == "Brand Manager") {
      return user.id;
    }
  };

  AuthStore.getParentId = function getParentId() {
    return this.getOwnerId();
  };

  return AuthStore;
}();

AuthStore.defaultLang = "En";
AuthStore.auth = {};

var OrbitalStore = /*#__PURE__*/function () {
  function OrbitalStore() {}

  OrbitalStore.setOrbitalConfig = function setOrbitalConfig(orbitalConfig) {
    this.orbitalConfig = orbitalConfig || {};
  };

  OrbitalStore.getOrbitalConfig = function getOrbitalConfig() {
    return this.orbitalConfig;
  };

  OrbitalStore.getDefaultImage = function getDefaultImage() {
    var image = this.orbitalConfig && this.orbitalConfig.image ? this.orbitalConfig.image : null;
    return image;
  };

  OrbitalStore.getDefaultLang = function getDefaultLang() {
    var defaultLang = this.orbitalConfig && this.orbitalConfig.defaultLang ? this.orbitalConfig.defaultLang : null;
    return defaultLang;
  };

  return OrbitalStore;
}();

OrbitalStore.orbitalConfig = {};

var EventEmitter = require('events');

var BrandStore = /*#__PURE__*/function () {
  function BrandStore() {}

  BrandStore.emit = function emit(channel, data) {
    this.eventEmitter.emit(channel, data);
  };

  BrandStore.on = function on(channel, callback) {
    return this.eventEmitter.on(channel, callback);
  };

  BrandStore.removeListener = function removeListener(channel, callback) {
    return this.eventEmitter.removeListener(channel, callback);
  };

  BrandStore.setBrand = function setBrand(brand) {
    this.brand = brand || {};
  };

  BrandStore.getBrand = function getBrand() {
    return this.brand;
  };

  BrandStore.setBrandConfiguration = function setBrandConfiguration(brandConfiguration) {
    this.brandConfiguration = brandConfiguration || {};
  };

  BrandStore.getBrandConfiguration = function getBrandConfiguration() {
    return this.brandConfiguration;
  };

  BrandStore.getBrandId = function getBrandId() {
    var brandId = this.brand.id;
    return brandId;
  };

  BrandStore.getPreferedLanguages = function getPreferedLanguages() {
    var preferedLang = this.brandConfiguration.preferedLang;
    return preferedLang;
  };

  BrandStore.getDefaultLang = function getDefaultLang() {
    var defaultLang = this.brandConfiguration.defaultLang;
    return defaultLang;
  };

  BrandStore.getCurrency = function getCurrency() {
    var currency = this.brandConfiguration.currency;
    return currency;
  };

  BrandStore.getCustomerIsolation = function getCustomerIsolation() {
    var customerIsolation = this.brandConfiguration.customerIsolation;
    return customerIsolation;
  };

  BrandStore.getPermissionGroups = function getPermissionGroups() {
    var pluginPermissionGroups = this.brandConfiguration != null ? this.brandConfiguration.pluginPermissionGroups : null;
    return pluginPermissionGroups;
  };

  BrandStore.setPermissionGroups = function setPermissionGroups(pluginPermissionGroups) {
    var brandConfiguration = this.brandConfiguration ? this.brandConfiguration : {};
    brandConfiguration.pluginPermissionGroups = pluginPermissionGroups;
    this.brandConfiguration = brandConfiguration;
  };

  return BrandStore;
}();

BrandStore.eventEmitter = new EventEmitter();
BrandStore.brand = null;
BrandStore.brandConfiguration = null;

var PluginStore = /*#__PURE__*/function () {
  function PluginStore() {}

  PluginStore.setAvailablePlugin = function setAvailablePlugin(availablePlugin) {
    this.availablePlugin = availablePlugin;
  };

  PluginStore.getAvailablePlugin = function getAvailablePlugin() {
    return this.availablePlugin;
  };

  PluginStore.setPluginActivation = function setPluginActivation(pluginActivation) {
    this.pluginActivation = pluginActivation;
  };

  PluginStore.getPluginActivation = function getPluginActivation() {
    return this.pluginActivation;
  };

  PluginStore.getPluginConfiguration = function getPluginConfiguration() {
    var pluginConfiguration = this.pluginActivation && this.pluginActivation.config ? this.pluginActivation.config : null;
    return pluginConfiguration;
  };

  PluginStore.getPluginDefaultData = function getPluginDefaultData() {
    var pluginDefaultData = this.pluginActivation && this.pluginActivation.defaultData ? this.pluginActivation.defaultData : null;
    return pluginDefaultData;
  };

  return PluginStore;
}();

PluginStore.availablePlugin = null;
PluginStore.pluginActivation = null;

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
}(Component$1);

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
}(Component$1);

var isBlazorPlatform = false;
/**
 * Create Instance from constructor function with desired parameters.
 * @param {Function} classFunction - Class function to which need to create instance
 * @param {any[]} params - Parameters need to passed while creating instance
 * @return {any}
 * @private
 */
function createInstance(classFunction, params) {
    var arrayParam = params;
    arrayParam.unshift(undefined);
    return new (Function.prototype.bind.apply(classFunction, arrayParam));
}
/**
 * To run a callback function immediately after the browser has completed other operations.
 * @param {Function} handler - callback function to be triggered.
 * @return {Function}
 * @private
 */
function setImmediate(handler) {
    var unbind;
    var num = new Uint16Array(5);
    var intCrypto = window.msCrypto || window.crypto;
    intCrypto.getRandomValues(num);
    var secret = 'ej2' + combineArray(num);
    var messageHandler = function (event) {
        if (event.source === window && typeof event.data === 'string' && event.data.length <= 32 && event.data === secret) {
            handler();
            unbind();
        }
    };
    window.addEventListener('message', messageHandler, false);
    window.postMessage(secret, '*');
    return unbind = function () {
        window.removeEventListener('message', messageHandler);
        handler = messageHandler = secret = undefined;
    };
}
/**
 * To get nameSpace value from the desired object.
 * @param {string} nameSpace - String value to the get the inner object
 * @param {any} obj - Object to get the inner object value.
 * @return {any}
 * @private
 */
function getValue(nameSpace, obj) {
    /* tslint:disable no-any */
    var value = obj;
    var splits = nameSpace.replace(/\[/g, '.').replace(/\]/g, '').split('.');
    for (var i = 0; i < splits.length && !isUndefined(value); i++) {
        value = value[splits[i]];
    }
    return value;
}
/**
 * To set value for the nameSpace in desired object.
 * @param {string} nameSpace - String value to the get the inner object
 * @param {any} value - Value that you need to set.
 * @param {any} obj - Object to get the inner object value.
 * @return {void}
 * @private
 */
function setValue(nameSpace, value, obj) {
    var keys = nameSpace.replace(/\[/g, '.').replace(/\]/g, '').split('.');
    var start = obj || {};
    var fromObj = start;
    var i;
    var length = keys.length;
    var key;
    for (i = 0; i < length; i++) {
        key = keys[i];
        if (i + 1 === length) {
            fromObj[key] = value === undefined ? {} : value;
        }
        else if (isNullOrUndefined(fromObj[key])) {
            fromObj[key] = {};
        }
        fromObj = fromObj[key];
    }
    return start;
}
/**
 * Delete an item from Object
 * @param {any} obj - Object in which we need to delete an item.
 * @param {string} params - String value to the get the inner object
 * @return {void}
 * @private
 */
function deleteObject(obj, key) {
    delete obj[key];
}
/**
 * Check weather the given argument is only object.
 * @param {any} obj - Object which is need to check.
 * @return {boolean}
 * @private
 */
function isObject(obj) {
    var objCon = {};
    return (!isNullOrUndefined(obj) && obj.constructor === objCon.constructor);
}
/**
 * Merge the source object into destination object.
 * @param {any} source - source object which is going to merge with destination object
 * @param {any} destination - object need to be merged
 * @return {void}
 * @private
 */
function merge(source, destination) {
    if (!isNullOrUndefined(destination)) {
        var temrObj = source;
        var tempProp = destination;
        var keys = Object.keys(destination);
        var deepmerge = 'deepMerge';
        for (var _i = 0, keys_1 = keys; _i < keys_1.length; _i++) {
            var key = keys_1[_i];
            if (!isNullOrUndefined(temrObj[deepmerge]) && (temrObj[deepmerge].indexOf(key) !== -1) &&
                (isObject(tempProp[key]) || Array.isArray(tempProp[key]))) {
                extend(temrObj[key], temrObj[key], tempProp[key], true);
            }
            else {
                temrObj[key] = tempProp[key];
            }
        }
    }
}
/**
 * Extend the two object with newer one.
 * @param {any} copied - Resultant object after merged
 * @param {Object} first - First object need to merge
 * @param {Object} second - Second object need to merge
 * @return {Object}
 * @private
 */
function extend(copied, first, second, deep) {
    var result = copied && typeof copied === 'object' ? copied : {};
    var length = arguments.length;
    if (deep) {
        length = length - 1;
    }
    var _loop_1 = function (i) {
        if (!arguments_1[i]) {
            return "continue";
        }
        var obj1 = arguments_1[i];
        Object.keys(obj1).forEach(function (key) {
            var src = result[key];
            var copy = obj1[key];
            var clone;
            var blazorEventExtend =  true;
            if (deep && blazorEventExtend && (isObject(copy) || Array.isArray(copy))) {
                if (isObject(copy)) {
                    clone = src ? src : {};
                    if (Array.isArray(clone) && clone.hasOwnProperty('isComplexArray')) {
                        extend(clone, {}, copy, deep);
                    }
                    else {
                        result[key] = extend(clone, {}, copy, deep);
                    }
                }
                else {
                    /* istanbul ignore next */
                    clone =  src ? src : [];
                    result[key] = extend([], clone, copy, deep);
                }
            }
            else {
                result[key] = copy;
            }
        });
    };
    var arguments_1 = arguments;
    for (var i = 1; i < length; i++) {
        _loop_1(i);
    }
    return result;
}
/**
 * To check whether the object is null or undefined.
 * @param {Object} value - To check the object is null or undefined
 * @return {boolean}
 * @private
 */
function isNullOrUndefined(value) {
    return value === undefined || value === null;
}
/**
 * To check whether the object is undefined.
 * @param {Object} value - To check the object is undefined
 * @return {boolean}
 * @private
 */
function isUndefined(value) {
    return ('undefined' === typeof value);
}
/**
 * It limits the rate at which a function can fire. The function will fire only once every provided second instead of as quickly.
 * @param {Function} eventFunction - Specifies the function to run when the event occurs
 * @param {number} delay - A number that specifies the milliseconds for function delay call option
 * @return {Function}
 * @private
 */
function debounce(eventFunction, delay) {
    var out;
    // tslint:disable-next-line
    return function () {
        var _this = this;
        var args = arguments;
        var later = function () {
            out = null;
            return eventFunction.apply(_this, args);
        };
        clearTimeout(out);
        out = setTimeout(later, delay);
    };
}
/**
 * To check whether the  child element is descendant to parent element or parent and child are same element.
 * @param{Element} - Specifies the child element to compare with parent.
 * @param{Element} - Specifies the parent element.
 * @return boolean
 * @private
 */
function compareElementParent(child, parent) {
    var node = child;
    if (node === parent) {
        return true;
    }
    else if (node === document || !node) {
        return false;
    }
    else {
        return compareElementParent(node.parentNode, parent);
    }
}
/**
 * To throw custom error message.
 * @param{string} - Specifies the error message to be thrown.
 * @private
 */
function throwError(message) {
    try {
        throw new Error(message);
    }
    catch (e) {
        throw e.message + '\n' + e.stack;
    }
}
/**
 * Function to check whether the platform is blazor or not.
 * @return {boolean} result
 * @private
 */
function isBlazor() {
    return isBlazorPlatform;
}
/**
 * Function to generate the unique id.
 * @return {any}
 * @private
 */
// tslint:disable-next-line:no-any
function uniqueID() {
    // tslint:disable-next-line:no-any
    if ((typeof window) === 'undefined') {
        return;
    }
    // tslint:disable-next-line:no-any
    var num = new Uint16Array(5);
    var intCrypto = window.msCrypto || window.crypto;
    return intCrypto.getRandomValues(num);
}
function combineArray(num) {
    var ret = '';
    for (var i = 0; i < 5; i++) {
        ret += (i ? ',' : '') + num[i];
    }
    return ret;
}

/**
 * Parser
 */
var defaultNumberingSystem = {
    'latn': {
        '_digits': '0123456789',
        '_type': 'numeric'
    }
};
var defaultNumberSymbols = {
    'decimal': '.',
    'group': ',',
    'percentSign': '%',
    'plusSign': '+',
    'minusSign': '-',
    'infinity': '∞',
    'nan': 'NaN',
    'exponential': 'E'
};
var latnNumberSystem = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
/**
 * Interface for parser base
 * @private
 */
var ParserBase = /** @class */ (function () {
    function ParserBase() {
    }
    /**
     * Returns the cldr object for the culture specifies
     * @param {Object} obj - Specifies the object from which culture object to be acquired.
     * @param {string} cName - Specifies the culture name.
     * @returns {Object}
     */
    ParserBase.getMainObject = function (obj, cName) {
        var value =  'main.' + cName;
        return getValue(value, obj);
    };
    /**
     * Returns the numbering system object from given cldr data.
     * @param {Object} obj - Specifies the object from which number system is acquired.
     * @returns {Object}
     */
    ParserBase.getNumberingSystem = function (obj) {
        return getValue('supplemental.numberingSystems', obj) || this.numberingSystems;
    };
    /**
     * Returns the reverse of given object keys or keys specified.
     * @param {Object} prop - Specifies the object to be reversed.
     * @param {number[]} keys - Optional parameter specifies the custom keyList for reversal.
     * @returns {Object}
     */
    ParserBase.reverseObject = function (prop, keys) {
        var propKeys = keys || Object.keys(prop);
        var res = {};
        for (var _i = 0, propKeys_1 = propKeys; _i < propKeys_1.length; _i++) {
            var key = propKeys_1[_i];
            /* tslint:disable no-any */
            if (!res.hasOwnProperty(prop[key])) {
                res[prop[key]] = key;
            }
        }
        return res;
    };
    /**
     * Returns the symbol regex by skipping the escape sequence.
     * @param {string[]} props - Specifies the array values to be skipped.
     * @returns {RegExp}
     */
    ParserBase.getSymbolRegex = function (props) {
        var regexStr = props.map(function (str) {
            return str.replace(/([.*+?^=!:${}()|\[\]\/\\])/g, '\\$1');
        }).join('|');
        return new RegExp(regexStr, 'g');
    };
    ParserBase.getSymbolMatch = function (prop) {
        var matchKeys = Object.keys(defaultNumberSymbols);
        var ret = {};
        for (var _i = 0, matchKeys_1 = matchKeys; _i < matchKeys_1.length; _i++) {
            var key = matchKeys_1[_i];
            ret[prop[key]] = defaultNumberSymbols[key];
        }
        return ret;
    };
    /**
     * Returns regex string for provided value
     * @param {string} val
     * @returns {string}
     */
    ParserBase.constructRegex = function (val) {
        var len = val.length;
        var ret = '';
        for (var i = 0; i < len; i++) {
            if (i !== len - 1) {
                ret += val[i] + '|';
            }
            else {
                ret += val[i];
            }
        }
        return ret;
    };
    /**
     * Returns the replaced value of matching regex and obj mapper.
     * @param {string} value - Specifies the  values to be replaced.
     * @param {RegExp} regex - Specifies the  regex to search.
     * @param {Object} obj - Specifies the  object matcher to be replace value parts.
     * @returns {string}
     */
    ParserBase.convertValueParts = function (value, regex, obj) {
        return value.replace(regex, function (str) {
            return obj[str];
        });
    };
    /**
     * Returns default numbering system object for formatting from cldr data
     * @param {Object} obj
     * @returns {NumericObject}
     */
    ParserBase.getDefaultNumberingSystem = function (obj) {
        var ret = {};
        ret.obj = getValue('numbers', obj);
        ret.nSystem = getValue('defaultNumberingSystem', ret.obj);
        return ret;
    };
    /**
     * Returns the replaced value of matching regex and obj mapper.
     */
    ParserBase.getCurrentNumericOptions = function (curObj, numberSystem, needSymbols, blazorMode) {
        var ret = {};
        var cur = this.getDefaultNumberingSystem(curObj);
        if (!isUndefined(cur.nSystem) || blazorMode) {
            var digits = blazorMode ? getValue('obj.mapperDigits', cur) : getValue(cur.nSystem + '._digits', numberSystem);
            if (!isUndefined(digits)) {
                ret.numericPair = this.reverseObject(digits, latnNumberSystem);
                ret.numberParseRegex = new RegExp(this.constructRegex(digits), 'g');
                ret.numericRegex = '[' + digits[0] + '-' + digits[9] + ']';
                if (needSymbols) {
                    ret.numericRegex = digits[0] + '-' + digits[9];
                    ret.symbolNumberSystem = getValue(blazorMode ? 'numberSymbols' : 'symbols-numberSystem-' + cur.nSystem, cur.obj);
                    ret.symbolMatch = this.getSymbolMatch(ret.symbolNumberSystem);
                    ret.numberSystem = cur.nSystem;
                }
            }
        }
        return ret;
    };
    /**
     * Returns number mapper object for the provided cldr data
     * @param {Object} curObj
     * @param {Object} numberSystem
     * @param {boolean} isNumber
     * @returns {NumberMapper}
     */
    ParserBase.getNumberMapper = function (curObj, numberSystem, isNumber) {
        var ret = { mapper: {} };
        var cur = this.getDefaultNumberingSystem(curObj);
        if (!isUndefined(cur.nSystem)) {
            ret.numberSystem = cur.nSystem;
            ret.numberSymbols = getValue('symbols-numberSystem-' + cur.nSystem, cur.obj);
            ret.timeSeparator = getValue('timeSeparator', ret.numberSymbols);
            var digits = getValue(cur.nSystem + '._digits', numberSystem);
            if (!isUndefined(digits)) {
                for (var _i = 0, latnNumberSystem_1 = latnNumberSystem; _i < latnNumberSystem_1.length; _i++) {
                    var i = latnNumberSystem_1[_i];
                    ret.mapper[i] = digits[i];
                }
            }
        }
        return ret;
    };
    ParserBase.nPair = 'numericPair';
    ParserBase.nRegex = 'numericRegex';
    ParserBase.numberingSystems = defaultNumberingSystem;
    return ParserBase;
}());
/**
 * @private
 */
var blazorCurrencyData = {
    'DJF': 'Fdj',
    'ERN': 'Nfk',
    'ETB': 'Br',
    'NAD': '$',
    'ZAR': 'R',
    'XAF': 'FCFA',
    'GHS': 'GH₵',
    'XDR': 'XDR',
    'AED': 'د.إ.‏',
    'BHD': 'د.ب.‏',
    'DZD': 'د.ج.‏',
    'EGP': 'ج.م.‏',
    'ILS': '₪',
    'IQD': 'د.ع.‏',
    'JOD': 'د.ا.‏',
    'KMF': 'CF',
    'KWD': 'د.ك.‏',
    'LBP': 'ل.ل.‏',
    'LYD': 'د.ل.‏',
    'MAD': 'د.م.‏',
    'MRU': 'أ.م.',
    'OMR': 'ر.ع.‏',
    'QAR': 'ر.ق.‏',
    'SAR': 'ر.س.‏',
    'SDG': 'ج.س.',
    'SOS': 'S',
    'SSP': '£',
    'SYP': 'ل.س.‏',
    'TND': 'د.ت.‏',
    'YER': 'ر.ي.‏',
    'CLP': '$',
    'INR': '₹',
    'TZS': 'TSh',
    'EUR': '€',
    'AZN': '₼',
    'RUB': '₽',
    'BYN': 'Br',
    'ZMW': 'K',
    'BGN': 'лв.',
    'NGN': '₦',
    'XOF': 'CFA',
    'BDT': '৳',
    'CNY': '¥',
    'BAM': 'КМ',
    'UGX': 'USh',
    'USD': '$',
    'CZK': 'Kč',
    'GBP': '£',
    'DKK': 'kr.',
    'KES': 'Ksh',
    'CHF': 'CHF',
    'MVR': 'ރ.',
    'BTN': 'Nu.',
    'XCD': 'EC$',
    'AUD': '$',
    'BBD': '$',
    'BIF': 'FBu',
    'BMD': '$',
    'BSD': '$',
    'BWP': 'P',
    'BZD': '$',
    'CAD': '$',
    'NZD': '$',
    'FJD': '$',
    'FKP': '£',
    'GIP': '£',
    'GMD': 'D',
    'GYD': '$',
    'HKD': '$',
    'IDR': 'Rp',
    'JMD': '$',
    'KYD': '$',
    'LRD': '$',
    'MGA': 'Ar',
    'MOP': 'MOP$',
    'MUR': 'Rs',
    'MWK': 'MK',
    'MYR': 'RM',
    'PGK': 'K',
    'PHP': '₱',
    'PKR': 'Rs',
    'RWF': 'RF',
    'SBD': '$',
    'SCR': 'SR',
    'SEK': 'kr',
    'SGD': '$',
    'SHP': '£',
    'SLL': 'Le',
    'ANG': 'NAf.',
    'SZL': 'E',
    'TOP': 'T$',
    'TTD': '$',
    'VUV': 'VT',
    'WST': 'WS$',
    'ARS': '$',
    'BOB': 'Bs',
    'BRL': 'R$',
    'COP': '$',
    'CRC': '₡',
    'CUP': '$',
    'DOP': '$',
    'GTQ': 'Q',
    'HNL': 'L',
    'MXN': '$',
    'NIO': 'C$',
    'PAB': 'B/.',
    'PEN': 'S/',
    'PYG': '₲',
    'UYU': '$',
    'VES': 'Bs.S',
    'IRR': 'ريال',
    'GNF': 'FG',
    'CDF': 'FC',
    'HTG': 'G',
    'XPF': 'FCFP',
    'HRK': 'kn',
    'HUF': 'Ft',
    'AMD': '֏',
    'ISK': 'kr',
    'JPY': '¥',
    'GEL': '₾',
    'CVE': '​',
    'KZT': '₸',
    'KHR': '៛',
    'KPW': '₩',
    'KRW': '₩',
    'KGS': 'сом',
    'AOA': 'Kz',
    'LAK': '₭',
    'MZN': 'MTn',
    'MKD': 'ден',
    'MNT': '₮',
    'BND': '$',
    'MMK': 'K',
    'NOK': 'kr',
    'NPR': 'रु',
    'AWG': 'Afl.',
    'SRD': '$',
    'PLN': 'zł',
    'AFN': '؋',
    'STN': 'Db',
    'MDL': 'L',
    'RON': 'lei',
    'UAH': '₴',
    'LKR': 'රු.',
    'ALL': 'Lekë',
    'RSD': 'дин.',
    'TJS': 'смн',
    'THB': '฿',
    'TMT': 'm.',
    'TRY': '₺',
    'UZS': 'сўм',
    'VND': '₫',
    'TWD': 'NT$'
};
function getBlazorCurrencySymbol(currencyCode) {
    return getValue(currencyCode || '', blazorCurrencyData);
}

/***
 * Hijri parser
 */
var HijriParser;
(function (HijriParser) {
    /* tslint:disable */
    var dateCorrection = [28607, 28636, 28665, 28695, 28724, 28754, 28783, 28813, 28843, 28872, 28901, 28931, 28960, 28990, 29019, 29049, 29078, 29108, 29137, 29167,
        29196, 29226, 29255, 29285, 29315, 29345, 29375, 29404, 29434, 29463, 29492, 29522, 29551, 29580, 29610, 29640, 29669, 29699, 29729, 29759,
        29788, 29818, 29847, 29876, 29906, 29935, 29964, 29994, 30023, 30053, 30082, 30112, 30141, 30171, 30200, 30230, 30259, 30289, 30318, 30348,
        30378, 30408, 30437, 30467, 30496, 30526, 30555, 30585, 30614, 30644, 30673, 30703, 30732, 30762, 30791, 30821, 30850, 30880, 30909, 30939,
        30968, 30998, 31027, 31057, 31086, 31116, 31145, 31175, 31204, 31234, 31263, 31293, 31322, 31352, 31381, 31411, 31441, 31471, 31500, 31530,
        31559, 31589, 31618, 31648, 31676, 31706, 31736, 31766, 31795, 31825, 31854, 31884, 31913, 31943, 31972, 32002, 32031, 32061, 32090, 32120,
        32150, 32180, 32209, 32239, 32268, 32298, 32327, 32357, 32386, 32416, 32445, 32475, 32504, 32534, 32563, 32593, 32622, 32652, 32681, 32711,
        32740, 32770, 32799, 32829, 32858, 32888, 32917, 32947, 32976, 33006, 33035, 33065, 33094, 33124, 33153, 33183, 33213, 33243, 33272, 33302,
        33331, 33361, 33390, 33420, 33450, 33479, 33509, 33539, 33568, 33598, 33627, 33657, 33686, 33716, 33745, 33775, 33804, 33834, 33863, 33893,
        33922, 33952, 33981, 34011, 34040, 34069, 34099, 34128, 34158, 34187, 34217, 34247, 34277, 34306, 34336, 34365, 34395, 34424, 34454, 34483,
        34512, 34542, 34571, 34601, 34631, 34660, 34690, 34719, 34749, 34778, 34808, 34837, 34867, 34896, 34926, 34955, 34985, 35015, 35044, 35074,
        35103, 35133, 35162, 35192, 35222, 35251, 35280, 35310, 35340, 35370, 35399, 35429, 35458, 35488, 35517, 35547, 35576, 35605, 35635, 35665,
        35694, 35723, 35753, 35782, 35811, 35841, 35871, 35901, 35930, 35960, 35989, 36019, 36048, 36078, 36107, 36136, 36166, 36195, 36225, 36254,
        36284, 36314, 36343, 36373, 36403, 36433, 36462, 36492, 36521, 36551, 36580, 36610, 36639, 36669, 36698, 36728, 36757, 36786, 36816, 36845,
        36875, 36904, 36934, 36963, 36993, 37022, 37052, 37081, 37111, 37141, 37170, 37200, 37229, 37259, 37288, 37318, 37347, 37377, 37406, 37436,
        37465, 37495, 37524, 37554, 37584, 37613, 37643, 37672, 37701, 37731, 37760, 37790, 37819, 37849, 37878, 37908, 37938, 37967, 37997, 38027,
        38056, 38085, 38115, 38144, 38174, 38203, 38233, 38262, 38292, 38322, 38351, 38381, 38410, 38440, 38469, 38499, 38528, 38558, 38587, 38617,
        38646, 38676, 38705, 38735, 38764, 38794, 38823, 38853, 38882, 38912, 38941, 38971, 39001, 39030, 39059, 39089, 39118, 39148, 39178, 39208,
        39237, 39267, 39297, 39326, 39355, 39385, 39414, 39444, 39473, 39503, 39532, 39562, 39592, 39621, 39650, 39680, 39709, 39739, 39768, 39798,
        39827, 39857, 39886, 39916, 39946, 39975, 40005, 40035, 40064, 40094, 40123, 40153, 40182, 40212, 40241, 40271, 40300, 40330, 40359, 40389,
        40418, 40448, 40477, 40507, 40536, 40566, 40595, 40625, 40655, 40685, 40714, 40744, 40773, 40803, 40832, 40862, 40892, 40921, 40951, 40980,
        41009, 41039, 41068, 41098, 41127, 41157, 41186, 41216, 41245, 41275, 41304, 41334, 41364, 41393, 41422, 41452, 41481, 41511, 41540, 41570,
        41599, 41629, 41658, 41688, 41718, 41748, 41777, 41807, 41836, 41865, 41894, 41924, 41953, 41983, 42012, 42042, 42072, 42102, 42131, 42161,
        42190, 42220, 42249, 42279, 42308, 42337, 42367, 42397, 42426, 42456, 42485, 42515, 42545, 42574, 42604, 42633, 42662, 42692, 42721, 42751,
        42780, 42810, 42839, 42869, 42899, 42929, 42958, 42988, 43017, 43046, 43076, 43105, 43135, 43164, 43194, 43223, 43253, 43283, 43312, 43342,
        43371, 43401, 43430, 43460, 43489, 43519, 43548, 43578, 43607, 43637, 43666, 43696, 43726, 43755, 43785, 43814, 43844, 43873, 43903, 43932,
        43962, 43991, 44021, 44050, 44080, 44109, 44139, 44169, 44198, 44228, 44258, 44287, 44317, 44346, 44375, 44405, 44434, 44464, 44493, 44523,
        44553, 44582, 44612, 44641, 44671, 44700, 44730, 44759, 44788, 44818, 44847, 44877, 44906, 44936, 44966, 44996, 45025, 45055, 45084, 45114,
        45143, 45172, 45202, 45231, 45261, 45290, 45320, 45350, 45380, 45409, 45439, 45468, 45498, 45527, 45556, 45586, 45615, 45644, 45674, 45704,
        45733, 45763, 45793, 45823, 45852, 45882, 45911, 45940, 45970, 45999, 46028, 46058, 46088, 46117, 46147, 46177, 46206, 46236, 46265, 46295,
        46324, 46354, 46383, 46413, 46442, 46472, 46501, 46531, 46560, 46590, 46620, 46649, 46679, 46708, 46738, 46767, 46797, 46826, 46856, 46885,
        46915, 46944, 46974, 47003, 47033, 47063, 47092, 47122, 47151, 47181, 47210, 47240, 47269, 47298, 47328, 47357, 47387, 47417, 47446, 47476,
        47506, 47535, 47565, 47594, 47624, 47653, 47682, 47712, 47741, 47771, 47800, 47830, 47860, 47890, 47919, 47949, 47978, 48008, 48037, 48066,
        48096, 48125, 48155, 48184, 48214, 48244, 48273, 48303, 48333, 48362, 48392, 48421, 48450, 48480, 48509, 48538, 48568, 48598, 48627, 48657,
        48687, 48717, 48746, 48776, 48805, 48834, 48864, 48893, 48922, 48952, 48982, 49011, 49041, 49071, 49100, 49130, 49160, 49189, 49218, 49248,
        49277, 49306, 49336, 49365, 49395, 49425, 49455, 49484, 49514, 49543, 49573, 49602, 49632, 49661, 49690, 49720, 49749, 49779, 49809, 49838,
        49868, 49898, 49927, 49957, 49986, 50016, 50045, 50075, 50104, 50133, 50163, 50192, 50222, 50252, 50281, 50311, 50340, 50370, 50400, 50429,
        50459, 50488, 50518, 50547, 50576, 50606, 50635, 50665, 50694, 50724, 50754, 50784, 50813, 50843, 50872, 50902, 50931, 50960, 50990, 51019,
        51049, 51078, 51108, 51138, 51167, 51197, 51227, 51256, 51286, 51315, 51345, 51374, 51403, 51433, 51462, 51492, 51522, 51552, 51582, 51611,
        51641, 51670, 51699, 51729, 51758, 51787, 51816, 51846, 51876, 51906, 51936, 51965, 51995, 52025, 52054, 52083, 52113, 52142, 52171, 52200,
        52230, 52260, 52290, 52319, 52349, 52379, 52408, 52438, 52467, 52497, 52526, 52555, 52585, 52614, 52644, 52673, 52703, 52733, 52762, 52792,
        52822, 52851, 52881, 52910, 52939, 52969, 52998, 53028, 53057, 53087, 53116, 53146, 53176, 53205, 53235, 53264, 53294, 53324, 53353, 53383,
        53412, 53441, 53471, 53500, 53530, 53559, 53589, 53619, 53648, 53678, 53708, 53737, 53767, 53796, 53825, 53855, 53884, 53913, 53943, 53973,
        54003, 54032, 54062, 54092, 54121, 54151, 54180, 54209, 54239, 54268, 54297, 54327, 54357, 54387, 54416, 54446, 54476, 54505, 54535, 54564,
        54593, 54623, 54652, 54681, 54711, 54741, 54770, 54800, 54830, 54859, 54889, 54919, 54948, 54977, 55007, 55036, 55066, 55095, 55125, 55154,
        55184, 55213, 55243, 55273, 55302, 55332, 55361, 55391, 55420, 55450, 55479, 55508, 55538, 55567, 55597, 55627, 55657, 55686, 55716, 55745,
        55775, 55804, 55834, 55863, 55892, 55922, 55951, 55981, 56011, 56040, 56070, 56100, 56129, 56159, 56188, 56218, 56247, 56276, 56306, 56335,
        56365, 56394, 56424, 56454, 56483, 56513, 56543, 56572, 56601, 56631, 56660, 56690, 56719, 56749, 56778, 56808, 56837, 56867, 56897, 56926,
        56956, 56985, 57015, 57044, 57074, 57103, 57133, 57162, 57192, 57221, 57251, 57280, 57310, 57340, 57369, 57399, 57429, 57458, 57487, 57517,
        57546, 57576, 57605, 57634, 57664, 57694, 57723, 57753, 57783, 57813, 57842, 57871, 57901, 57930, 57959, 57989, 58018, 58048, 58077, 58107,
        58137, 58167, 58196, 58226, 58255, 58285, 58314, 58343, 58373, 58402, 58432, 58461, 58491, 58521, 58551, 58580, 58610, 58639, 58669, 58698,
        58727, 58757, 58786, 58816, 58845, 58875, 58905, 58934, 58964, 58994, 59023, 59053, 59082, 59111, 59141, 59170, 59200, 59229, 59259, 59288,
        59318, 59348, 59377, 59407, 59436, 59466, 59495, 59525, 59554, 59584, 59613, 59643, 59672, 59702, 59731, 59761, 59791, 59820, 59850, 59879,
        59909, 59939, 59968, 59997, 60027, 60056, 60086, 60115, 60145, 60174, 60204, 60234, 60264, 60293, 60323, 60352, 60381, 60411, 60440, 60469,
        60499, 60528, 60558, 60588, 60618, 60648, 60677, 60707, 60736, 60765, 60795, 60824, 60853, 60883, 60912, 60942, 60972, 61002, 61031, 61061,
        61090, 61120, 61149, 61179, 61208, 61237, 61267, 61296, 61326, 61356, 61385, 61415, 61445, 61474, 61504, 61533, 61563, 61592, 61621, 61651,
        61680, 61710, 61739, 61769, 61799, 61828, 61858, 61888, 61917, 61947, 61976, 62006, 62035, 62064, 62094, 62123, 62153, 62182, 62212, 62242,
        62271, 62301, 62331, 62360, 62390, 62419, 62448, 62478, 62507, 62537, 62566, 62596, 62625, 62655, 62685, 62715, 62744, 62774, 62803, 62832,
        62862, 62891, 62921, 62950, 62980, 63009, 63039, 63069, 63099, 63128, 63157, 63187, 63216, 63246, 63275, 63305, 63334, 63363, 63393, 63423,
        63453, 63482, 63512, 63541, 63571, 63600, 63630, 63659, 63689, 63718, 63747, 63777, 63807, 63836, 63866, 63895, 63925, 63955, 63984, 64014,
        64043, 64073, 64102, 64131, 64161, 64190, 64220, 64249, 64279, 64309, 64339, 64368, 64398, 64427, 64457, 64486, 64515, 64545, 64574, 64603,
        64633, 64663, 64692, 64722, 64752, 64782, 64811, 64841, 64870, 64899, 64929, 64958, 64987, 65017, 65047, 65076, 65106, 65136, 65166, 65195,
        65225, 65254, 65283, 65313, 65342, 65371, 65401, 65431, 65460, 65490, 65520, 65549, 65579, 65608, 65638, 65667, 65697, 65726, 65755, 65785,
        65815, 65844, 65874, 65903, 65933, 65963, 65992, 66022, 66051, 66081, 66110, 66140, 66169, 66199, 66228, 66258, 66287, 66317, 66346, 66376,
        66405, 66435, 66465, 66494, 66524, 66553, 66583, 66612, 66641, 66671, 66700, 66730, 66760, 66789, 66819, 66849, 66878, 66908, 66937, 66967,
        66996, 67025, 67055, 67084, 67114, 67143, 67173, 67203, 67233, 67262, 67292, 67321, 67351, 67380, 67409, 67439, 67468, 67497, 67527, 67557,
        67587, 67617, 67646, 67676, 67705, 67735, 67764, 67793, 67823, 67852, 67882, 67911, 67941, 67971, 68000, 68030, 68060, 68089, 68119, 68148,
        68177, 68207, 68236, 68266, 68295, 68325, 68354, 68384, 68414, 68443, 68473, 68502, 68532, 68561, 68591, 68620, 68650, 68679, 68708, 68738,
        68768, 68797, 68827, 68857, 68886, 68916, 68946, 68975, 69004, 69034, 69063, 69092, 69122, 69152, 69181, 69211, 69240, 69270, 69300, 69330,
        69359, 69388, 69418, 69447, 69476, 69506, 69535, 69565, 69595, 69624, 69654, 69684, 69713, 69743, 69772, 69802, 69831, 69861, 69890, 69919,
        69949, 69978, 70008, 70038, 70067, 70097, 70126, 70156, 70186, 70215, 70245, 70274, 70303, 70333, 70362, 70392, 70421, 70451, 70481, 70510,
        70540, 70570, 70599, 70629, 70658, 70687, 70717, 70746, 70776, 70805, 70835, 70864, 70894, 70924, 70954, 70983, 71013, 71042, 71071, 71101,
        71130, 71159, 71189, 71218, 71248, 71278, 71308, 71337, 71367, 71397, 71426, 71455, 71485, 71514, 71543, 71573, 71602, 71632, 71662, 71691,
        71721, 71751, 71781, 71810, 71839, 71869, 71898, 71927, 71957, 71986, 72016, 72046, 72075, 72105, 72135, 72164, 72194, 72223, 72253, 72282,
        72311, 72341, 72370, 72400, 72429, 72459, 72489, 72518, 72548, 72577, 72607, 72637, 72666, 72695, 72725, 72754, 72784, 72813, 72843, 72872,
        72902, 72931, 72961, 72991, 73020, 73050, 73080, 73109, 73139, 73168, 73197, 73227, 73256, 73286, 73315, 73345, 73375, 73404, 73434, 73464,
        73493, 73523, 73552, 73581, 73611, 73640, 73669, 73699, 73729, 73758, 73788, 73818, 73848, 73877, 73907, 73936, 73965, 73995, 74024, 74053,
        74083, 74113, 74142, 74172, 74202, 74231, 74261, 74291, 74320, 74349, 74379, 74408, 74437, 74467, 74497, 74526, 74556, 74586, 74615, 74645,
        74675, 74704, 74733, 74763, 74792, 74822, 74851, 74881, 74910, 74940, 74969, 74999, 75029, 75058, 75088, 75117, 75147, 75176, 75206, 75235,
        75264, 75294, 75323, 75353, 75383, 75412, 75442, 75472, 75501, 75531, 75560, 75590, 75619, 75648, 75678, 75707, 75737, 75766, 75796, 75826,
        75856, 75885, 75915, 75944, 75974, 76003, 76032, 76062, 76091, 76121, 76150, 76180, 76210, 76239, 76269, 76299, 76328, 76358, 76387, 76416,
        76446, 76475, 76505, 76534, 76564, 76593, 76623, 76653, 76682, 76712, 76741, 76771, 76801, 76830, 76859, 76889, 76918, 76948, 76977, 77007,
        77036, 77066, 77096, 77125, 77155, 77185, 77214, 77243, 77273, 77302, 77332, 77361, 77390, 77420, 77450, 77479, 77509, 77539, 77569, 77598,
        77627, 77657, 77686, 77715, 77745, 77774, 77804, 77833, 77863, 77893, 77923, 77952, 77982, 78011, 78041, 78070, 78099, 78129, 78158, 78188,
        78217, 78247, 78277, 78307, 78336, 78366, 78395, 78425, 78454, 78483, 78513, 78542, 78572, 78601, 78631, 78661, 78690, 78720, 78750, 78779,
        78808, 78838, 78867, 78897, 78926, 78956, 78985, 79015, 79044, 79074, 79104, 79133, 79163, 79192, 79222, 79251, 79281, 79310, 79340, 79369,
        79399, 79428, 79458, 79487, 79517, 79546, 79576, 79606, 79635, 79665, 79695, 79724, 79753, 79783, 79812, 79841, 79871, 79900, 79930, 79960,
        79990];
    /* tslint:enable */
    function getHijriDate(gDate) {
        var day = gDate.getDate();
        var month = gDate.getMonth();
        var year = gDate.getFullYear();
        var tMonth = month + 1;
        var tYear = year;
        if (tMonth < 3) {
            tYear -= 1;
            tMonth += 12;
        }
        var yPrefix = Math.floor(tYear / 100.);
        var julilanOffset = yPrefix - Math.floor(yPrefix / 4.) - 2;
        var julianNumber = Math.floor(365.25 * (tYear + 4716)) + Math.floor(30.6001 * (tMonth + 1)) + day - julilanOffset - 1524;
        yPrefix = Math.floor((julianNumber - 1867216.25) / 36524.25);
        julilanOffset = yPrefix - Math.floor(yPrefix / 4.) + 1;
        var b = julianNumber + julilanOffset + 1524;
        var c = Math.floor((b - 122.1) / 365.25);
        var d = Math.floor(365.25 * c);
        var tempMonth = Math.floor((b - d) / 30.6001);
        day = (b - d) - Math.floor(30.6001 * tempMonth);
        month = Math.floor((b - d) / 20.6001);
        if (month > 13) {
            c += 1;
            month -= 12;
        }
        month -= 1;
        year = c - 4716;
        var modifiedJulianDate = julianNumber - 2400000;
        // date calculation for year after 2077
        var iyear = 10631. / 30.;
        var z = julianNumber - 1948084;
        var cyc = Math.floor(z / 10631.);
        z = z - 10631 * cyc;
        var j = Math.floor((z - 0.1335) / iyear);
        var iy = 30 * cyc + j;
        z = z - Math.floor(j * iyear + 0.1335);
        var im = Math.floor((z + 28.5001) / 29.5);
        /* istanbul ignore next */
        if (im === 13) {
            im = 12;
        }
        var tempDay = z - Math.floor(29.5001 * im - 29);
        var i = 0;
        for (; i < dateCorrection.length; i++) {
            if (dateCorrection[i] > modifiedJulianDate) {
                break;
            }
        }
        var iln = i + 16260;
        var ii = Math.floor((iln - 1) / 12);
        var hYear = ii + 1;
        var hmonth = iln - 12 * ii;
        var hDate = modifiedJulianDate - dateCorrection[i - 1] + 1;
        if ((hDate + '').length > 2) {
            hDate = tempDay;
            hmonth = im;
            hYear = iy;
        }
        return { year: hYear, month: hmonth, date: hDate };
    }
    HijriParser.getHijriDate = getHijriDate;
    function toGregorian(year, month, day) {
        var iy = year;
        var im = month;
        var id = day;
        var ii = iy - 1;
        var iln = (ii * 12) + 1 + (im - 1);
        var i = iln - 16260;
        var mcjdn = id + dateCorrection[i - 1] - 1;
        var julianDate = mcjdn + 2400000;
        var z = Math.floor(julianDate + 0.5);
        var a = Math.floor((z - 1867216.25) / 36524.25);
        a = z + 1 + a - Math.floor(a / 4);
        var b = a + 1524;
        var c = Math.floor((b - 122.1) / 365.25);
        var d = Math.floor(365.25 * c);
        var e = Math.floor((b - d) / 30.6001);
        var gDay = b - d - Math.floor(e * 30.6001);
        var gMonth = e - (e > 13.5 ? 13 : 1);
        var gYear = c - (gMonth > 2.5 ? 4716 : 4715);
        /* istanbul ignore next */
        if (gYear <= 0) {
            gMonth--;
        } // No year zero
        return new Date(gYear + '/' + (gMonth) + '/' + gDay);
    }
    HijriParser.toGregorian = toGregorian;
})(HijriParser || (HijriParser = {}));

var abbreviateRegexGlobal = /\/MMMMM|MMMM|MMM|a|LLLL|LLL|EEEEE|EEEE|E|K|cccc|ccc|WW|W|G+|z+/gi;
var standalone = 'stand-alone';
var weekdayKey = ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat'];
var timeSetter = {
    m: 'getMinutes',
    h: 'getHours',
    H: 'getHours',
    s: 'getSeconds',
    d: 'getDate',
    f: 'getMilliseconds'
};
var timeSeparator = 'timeSeparator';
/* tslint:disable no-any */
/**
 * Date Format is a framework provides support for date formatting.
 * @private
 */
var DateFormat = /** @class */ (function () {
    function DateFormat() {
    }
    /**
     * Returns the formatter function for given skeleton.
     * @param {string} -  Specifies the culture name to be which formatting.
     * @param {DateFormatOptions} - Specific the format in which date  will format.
     * @param {cldr} - Specifies the global cldr data collection.
     * @return Function.
     */
    DateFormat.dateFormat = function (culture, option, cldr) {
        var _this = this;
        var dependable = IntlBase.getDependables(cldr, culture, option.calendar);
        var numObject = getValue('parserObject.numbers', dependable);
        var dateObject = dependable.dateObject;
        var formatOptions = { isIslamic: IntlBase.islamicRegex.test(option.calendar) };
        var resPattern = option.format ||
            IntlBase.getResultantPattern(option.skeleton, dependable.dateObject, option.type, false,  '');
        formatOptions.dateSeperator =  IntlBase.getDateSeparator(dependable.dateObject);
        if (isUndefined(resPattern)) {
            throwError('Format options or type given must be invalid');
        }
        else {
            resPattern = IntlBase.ConvertDateToWeekFormat(resPattern);
            formatOptions.pattern = resPattern;
            formatOptions.numMapper =  ParserBase.getNumberMapper(dependable.parserObject, ParserBase.getNumberingSystem(cldr));
            var patternMatch = resPattern.match(abbreviateRegexGlobal) || [];
            for (var _i = 0, patternMatch_1 = patternMatch; _i < patternMatch_1.length; _i++) {
                var str = patternMatch_1[_i];
                var len = str.length;
                var char = str[0];
                if (char === 'K') {
                    char = 'h';
                }
                switch (char) {
                    case 'E':
                    case 'c':
                        {
                            formatOptions.weekday = dependable.dateObject[IntlBase.days][standalone][IntlBase.monthIndex[len]];
                        }
                        break;
                    case 'M':
                    case 'L':
                        {
                            formatOptions.month = dependable.dateObject[IntlBase.month][standalone][IntlBase.monthIndex[len]];
                        }
                        break;
                    case 'a':
                        formatOptions.designator =  getValue('dayPeriods.format.wide', dateObject);
                        break;
                    case 'G':
                        var eText = (len <= 3) ? 'eraAbbr' : (len === 4) ? 'eraNames' : 'eraNarrow';
                        formatOptions.era =  getValue('eras.' + eText, dependable.dateObject);
                        break;
                    case 'z':
                        formatOptions.timeZone = getValue('dates.timeZoneNames', dependable.parserObject);
                        break;
                }
            }
        }
        return function (value) {
            if (isNaN(value.getDate())) {
                return null;
            }
            return _this.intDateFormatter(value, formatOptions);
        };
    };
    /**
     * Returns formatted date string based on options passed.
     * @param {Date} value
     * @param {FormatOptions} options
     */
    // tslint:disable-next-line:max-func-body-length
    DateFormat.intDateFormatter = function (value, options) {
        var pattern = options.pattern;
        var ret = '';
        var matches = pattern.match(IntlBase.dateParseRegex);
        var dObject = this.getCurrentDateValue(value, options.isIslamic);
        for (var _i = 0, matches_1 = matches; _i < matches_1.length; _i++) {
            var match = matches_1[_i];
            var length_1 = match.length;
            var char = match[0];
            if (char === 'K') {
                char = 'h';
            }
            var curval = void 0;
            var curvalstr = '';
            var isNumber = void 0;
            var processNumber = void 0;
            var curstr = '';
            switch (char) {
                case 'M':
                case 'L':
                    curval = dObject.month;
                    if (length_1 > 2) {
                        ret += options.month[curval];
                    }
                    else {
                        isNumber = true;
                    }
                    break;
                case 'E':
                case 'c':
                    ret += options.weekday[weekdayKey[value.getDay()]];
                    break;
                case 'H':
                case 'h':
                case 'm':
                case 's':
                case 'd':
                case 'f':
                    isNumber = true;
                    if (char === 'd') {
                        curval = dObject.date;
                    }
                    else if (char === 'f') {
                        isNumber = false;
                        processNumber = true;
                        curvalstr = value[timeSetter[char]]().toString();
                        curvalstr = curvalstr.substring(0, length_1);
                        var curlength = curvalstr.length;
                        if (length_1 !== curlength) {
                            if (length_1 > 3) {
                                continue;
                            }
                            for (var i = 0; i < length_1 - curlength; i++) {
                                curvalstr = '0' + curvalstr.toString();
                            }
                        }
                        curstr += curvalstr;
                    }
                    else {
                        curval = value[timeSetter[char]]();
                    }
                    if (char === 'h') {
                        curval = curval % 12 || 12;
                    }
                    break;
                case 'y':
                    processNumber = true;
                    curstr += dObject.year;
                    if (length_1 === 2) {
                        curstr = curstr.substr(curstr.length - 2);
                    }
                    break;
                case 'a':
                    var desig = value.getHours() < 12 ? 'am' : 'pm';
                    ret += options.designator[desig];
                    break;
                case 'G':
                    var dec = value.getFullYear() < 0 ? 0 : 1;
                    var retu = options.era[dec];
                    if (isNullOrUndefined(retu)) {
                        retu = options.era[dec ? 0 : 1];
                    }
                    ret += retu || '';
                    break;
                case '\'':
                    ret += (match === '\'\'') ? '\'' : match.replace(/\'/g, '');
                    break;
                case 'z':
                    var timezone = value.getTimezoneOffset();
                    var pattern_1 = (length_1 < 4) ? '+H;-H' : options.timeZone.hourFormat;
                    pattern_1 = pattern_1.replace(/:/g, options.numMapper.timeSeparator);
                    if (timezone === 0) {
                        ret += options.timeZone.gmtZeroFormat;
                    }
                    else {
                        processNumber = true;
                        curstr = this.getTimeZoneValue(timezone, pattern_1);
                    }
                    curstr = options.timeZone.gmtFormat.replace(/\{0\}/, curstr);
                    break;
                case ':':
                    ret += options.numMapper.numberSymbols[timeSeparator];
                    /* tslint:enable no-any */
                    break;
                case '/':
                    ret += options.dateSeperator;
                    break;
                case 'W':
                    isNumber = true;
                    curval = IntlBase.getWeekOfYear(value);
                    break;
                default:
                    ret += match;
            }
            if (isNumber) {
                processNumber = true;
                curstr = this.checkTwodigitNumber(curval, length_1);
            }
            if (processNumber) {
                ret += ParserBase.convertValueParts(curstr, IntlBase.latnParseRegex, options.numMapper.mapper);
            }
        }
        return ret;
    };
    DateFormat.getCurrentDateValue = function (value, isIslamic) {
        if (isIslamic) {
            return HijriParser.getHijriDate(value);
        }
        return { year: value.getFullYear(), month: value.getMonth() + 1, date: value.getDate() };
    };
    /**
     * Returns two digit numbers for given value and length
     */
    DateFormat.checkTwodigitNumber = function (val, len) {
        var ret = val + '';
        if (len === 2 && ret.length !== 2) {
            return '0' + ret;
        }
        return ret;
    };
    /**
     * Returns the value of the Time Zone.
     * @param {number} tVal
     * @param {string} pattern
     * @private
     */
    DateFormat.getTimeZoneValue = function (tVal, pattern) {
        var _this = this;
        var splt = pattern.split(';');
        var curPattern = splt[tVal > 0 ? 1 : 0];
        var no = Math.abs(tVal);
        return curPattern = curPattern.replace(/HH?|mm/g, function (str) {
            var len = str.length;
            var ishour = str.indexOf('H') !== -1;
            return _this.checkTwodigitNumber(Math.floor(ishour ? (no / 60) : (no % 60)), len);
        });
    };
    return DateFormat;
}());

var errorText = {
    'ms': 'minimumSignificantDigits',
    'ls': 'maximumSignificantDigits',
    'mf': 'minimumFractionDigits',
    'lf': 'maximumFractionDigits',
};
var percentSign = 'percentSign';
var minusSign = 'minusSign';
var mapper = ['infinity', 'nan', 'group', 'decimal', 'exponential'];
/**
 * Module for number formatting.
 * @private
 */
var NumberFormat = /** @class */ (function () {
    function NumberFormat() {
    }
    /**
     * Returns the formatter function for given skeleton.
     * @param {string} culture -  Specifies the culture name to be which formatting.
     * @param {NumberFormatOptions} option - Specific the format in which number  will format.
     * @param {Object} object- Specifies the global cldr data collection.
     * @return Function.
     */
    NumberFormat.numberFormatter = function (culture, option, cldr) {
        var _this = this;
        var fOptions = extend({}, option);
        var cOptions = {};
        var dOptions = {};
        var symbolPattern;
        var dependable = IntlBase.getDependables(cldr, culture, '', true);
        dOptions.numberMapper = 
            ParserBase.getNumberMapper(dependable.parserObject, ParserBase.getNumberingSystem(cldr), true);
        dOptions.currencySymbol =  IntlBase.getCurrencySymbol(dependable.numericObject, fOptions.currency || defaultCurrencyCode, option.altSymbol);
        /* tslint:disable no-any */
        dOptions.percentSymbol = 
            dOptions.numberMapper.numberSymbols[percentSign];
        dOptions.minusSymbol = 
            dOptions.numberMapper.numberSymbols[minusSign];
        var symbols = dOptions.numberMapper.numberSymbols;
        if ((option.format) && !(IntlBase.formatRegex.test(option.format))) {
            cOptions = IntlBase.customFormat(option.format, dOptions, dependable.numericObject);
        }
        else {
            extend(fOptions, IntlBase.getProperNumericSkeleton(option.format || 'N'));
            fOptions.isCurrency = fOptions.type === 'currency';
            fOptions.isPercent = fOptions.type === 'percent';
            {
                symbolPattern = IntlBase.getSymbolPattern(fOptions.type, dOptions.numberMapper.numberSystem, dependable.numericObject, fOptions.isAccount);
            }
            fOptions.groupOne = this.checkValueRange(fOptions.maximumSignificantDigits, fOptions.minimumSignificantDigits, true);
            this.checkValueRange(fOptions.maximumFractionDigits, fOptions.minimumFractionDigits, false, true);
            if (!isUndefined(fOptions.fractionDigits)) {
                fOptions.minimumFractionDigits = fOptions.maximumFractionDigits = fOptions.fractionDigits;
            }
            if (isUndefined(fOptions.useGrouping)) {
                fOptions.useGrouping = true;
            }
            if (fOptions.isCurrency && !isBlazor()) {
                symbolPattern = symbolPattern.replace(/\u00A4/g, IntlBase.defaultCurrency);
            }
            {
                var split = symbolPattern.split(';');
                cOptions.nData = IntlBase.getFormatData(split[1] || '-' + split[0], true, dOptions.currencySymbol);
                cOptions.pData = IntlBase.getFormatData(split[0], false, dOptions.currencySymbol);
                if (fOptions.useGrouping) {
                    fOptions.groupSeparator = symbols[mapper[2]];
                    fOptions.groupData = this.getGroupingDetails(split[0]);
                }
            }
            var minFrac = isUndefined(fOptions.minimumFractionDigits);
            if (minFrac) {
                fOptions.minimumFractionDigits = cOptions.nData.minimumFraction;
            }
            if (isUndefined(fOptions.maximumFractionDigits)) {
                var mval = cOptions.nData.maximumFraction;
                fOptions.maximumFractionDigits = isUndefined(mval) && fOptions.isPercent ? 0 : mval;
            }
            var mfrac = fOptions.minimumFractionDigits;
            var lfrac = fOptions.maximumFractionDigits;
            if (!isUndefined(mfrac) && !isUndefined(lfrac)) {
                if (mfrac > lfrac) {
                    fOptions.maximumFractionDigits = mfrac;
                }
            }
        }
        extend(cOptions.nData, fOptions);
        extend(cOptions.pData, fOptions);
        return function (value) {
            if (isNaN(value)) {
                return symbols[mapper[1]];
            }
            else if (!isFinite(value)) {
                return symbols[mapper[0]];
            }
            return _this.intNumberFormatter(value, cOptions, dOptions);
        };
    };
    /**
     * Returns grouping details for the pattern provided
     * @param {string} pattern
     * @returns {GroupDetails}
     */
    NumberFormat.getGroupingDetails = function (pattern) {
        var ret = {};
        var match = pattern.match(IntlBase.negativeDataRegex);
        if (match && match[4]) {
            var pattern_1 = match[4];
            var p = pattern_1.lastIndexOf(',');
            if (p !== -1) {
                var temp = pattern_1.split('.')[0];
                ret.primary = (temp.length - p) - 1;
                var s = pattern_1.lastIndexOf(',', p - 1);
                if (s !== -1) {
                    ret.secondary = p - 1 - s;
                }
            }
        }
        return ret;
    };
    /**
     * Returns if the provided integer range is valid.
     * @param {number} val1
     * @param {number} val2
     * @param {boolean} checkbothExist
     * @param {boolean} isFraction
     * @returns {boolean}
     */
    NumberFormat.checkValueRange = function (val1, val2, checkbothExist, isFraction) {
        var decide = isFraction ? 'f' : 's';
        var dint = 0;
        var str1 = errorText['l' + decide];
        var str2 = errorText['m' + decide];
        if (!isUndefined(val1)) {
            this.checkRange(val1, str1, isFraction);
            dint++;
        }
        if (!isUndefined(val2)) {
            this.checkRange(val2, str2, isFraction);
            dint++;
        }
        if (dint === 2) {
            if (val1 < val2) {
                throwError(str2 + 'specified must be less than the' + str1);
            }
            else {
                return true;
            }
        }
        else if (checkbothExist && dint === 1) {
            throwError('Both' + str2 + 'and' + str2 + 'must be present');
        }
        return false;
    };
    /**
     * Check if the provided fraction range is valid
     * @param {number} val
     * @param {string} text
     * @param {boolean} isFraction
     * @returns {void}
     */
    NumberFormat.checkRange = function (val, text, isFraction) {
        var range = isFraction ? [0, 20] : [1, 21];
        if (val < range[0] || val > range[1]) {
            throwError(text + 'value must be within the range' + range[0] + 'to' + range[1]);
        }
    };
    /**
     * Returns formatted numeric string for provided formatting options
     * @param {number} value
     * @param {base.GenericFormatOptions} fOptions
     * @param {CommonOptions} dOptions
     * @returns {string}
     */
    NumberFormat.intNumberFormatter = function (value, fOptions, dOptions) {
        var curData;
        if (isUndefined(fOptions.nData.type)) {
            return undefined;
        }
        else {
            if (value < 0) {
                value = value * -1;
                curData = fOptions.nData;
            }
            else if (value === 0) {
                curData = fOptions.zeroData || fOptions.pData;
            }
            else {
                curData = fOptions.pData;
            }
            var fValue = '';
            if (curData.isPercent) {
                value = value * 100;
            }
            if (curData.groupOne) {
                fValue = this.processSignificantDigits(value, curData.minimumSignificantDigits, curData.maximumSignificantDigits);
            }
            else {
                fValue = this.processFraction(value, curData.minimumFractionDigits, curData.maximumFractionDigits);
                if (curData.minimumIntegerDigits) {
                    fValue = this.processMinimumIntegers(fValue, curData.minimumIntegerDigits);
                }
            }
            if (curData.type === 'scientific') {
                fValue = value.toExponential(curData.maximumFractionDigits);
                fValue = fValue.replace('e', dOptions.numberMapper.numberSymbols[mapper[4]]);
            }
            fValue = fValue.replace('.', dOptions.numberMapper.numberSymbols[mapper[3]]);
            if (curData.useGrouping) {
                fValue = this.groupNumbers(fValue, curData.groupData.primary, curData.groupSeparator || ',', dOptions.numberMapper.numberSymbols[mapper[3]] || '.', curData.groupData.secondary);
            }
            fValue = ParserBase.convertValueParts(fValue, IntlBase.latnParseRegex, dOptions.numberMapper.mapper);
            if (curData.nlead === 'N/A') {
                return curData.nlead;
            }
            else {
                return curData.nlead + fValue + curData.nend;
            }
        }
    };
    /**
     * Returns significant digits processed numeric string
     * @param {number} value
     * @param {number} min
     * @param {number} max
     * @returns {string}
     */
    NumberFormat.processSignificantDigits = function (value, min, max) {
        var temp = value + '';
        var tn;
        var length = temp.length;
        if (length < min) {
            return value.toPrecision(min);
        }
        else {
            temp = value.toPrecision(max);
            tn = +temp;
            return tn + '';
        }
    };
    /**
     * Returns grouped numeric string
     * @param {string} val
     * @param {number} level1
     * @param {string} sep
     * @param {string} decimalSymbol
     * @param {number} level2
     * @returns {string}
     */
    NumberFormat.groupNumbers = function (val, level1, sep, decimalSymbol, level2) {
        var flag = !isNullOrUndefined(level2) && level2 !== 0;
        var split = val.split(decimalSymbol);
        var prefix = split[0];
        var length = prefix.length;
        var str = '';
        while (length > level1) {
            str = prefix.slice(length - level1, length) + (str.length ?
                (sep + str) : '');
            length -= level1;
            if (flag) {
                level1 = level2;
                flag = false;
            }
        }
        split[0] = prefix.slice(0, length) + (str.length ? sep : '') + str;
        return split.join(decimalSymbol);
    };
    /**
     * Returns fraction processed numeric string
     * @param {number} value
     * @param {number} min
     * @param {number} max
     * @returns {string}
     */
    NumberFormat.processFraction = function (value, min, max) {
        var temp = (value + '').split('.')[1];
        var length = temp ? temp.length : 0;
        if (min && length < min) {
            var ret = '';
            if (length === 0) {
                ret = value.toFixed(min);
            }
            else {
                ret += value;
                for (var j = 0; j < min - length; j++) {
                    ret += '0';
                }
                return ret;
            }
            return value.toFixed(min);
        }
        else if (!isNullOrUndefined(max) && (length > max || max === 0)) {
            return value.toFixed(max);
        }
        return value + '';
    };
    /**
     * Returns integer processed numeric string
     * @param {string} value
     * @param {number} min
     * @returns {string}
     */
    NumberFormat.processMinimumIntegers = function (value, min) {
        var temp = value.split('.');
        var lead = temp[0];
        var len = lead.length;
        if (len < min) {
            for (var i = 0; i < min - len; i++) {
                lead = '0' + lead;
            }
            temp[0] = lead;
        }
        return temp.join('.');
    };
    return NumberFormat;
}());

var Observer = /** @class */ (function () {
    function Observer(context) {
        this.ranArray = [];
        this.boundedEvents = {};
        if (isNullOrUndefined(context)) {
            return;
        }
        this.context = context;
    }
    /**
     * To attach handler for given property in current context.
     * @param {string} property - specifies the name of the event.
     * @param {Function} handler - Specifies the handler function to be called while event notified.
     * @param {Object} context - Specifies the context binded to the handler.
     * @param {string} id - specifies the random generated id.
     * @return {void}
     */
    Observer.prototype.on = function (property, handler, context, id) {
        if (isNullOrUndefined(handler)) {
            return;
        }
        var cntxt = context || this.context;
        if (this.notExist(property)) {
            this.boundedEvents[property] = [{ handler: handler, context: cntxt }];
            return;
        }
        if (!isNullOrUndefined(id)) {
            if (this.ranArray.indexOf(id) === -1) {
                this.ranArray.push(id);
                this.boundedEvents[property].push({ handler: handler, context: cntxt, id: id });
            }
        }
        else if (!this.isHandlerPresent(this.boundedEvents[property], handler)) {
            this.boundedEvents[property].push({ handler: handler, context: cntxt });
        }
    };
    /**
     * To remove handlers from a event attached using on() function.
     * @param {string} eventName - specifies the name of the event.
     * @param {Function} handler - Optional argument specifies the handler function to be called while event notified.
     * @param {string} id - specifies the random generated id.
     * @return {void}
     */
    Observer.prototype.off = function (property, handler, id) {
        if (this.notExist(property)) {
            return;
        }
        var curObject = getValue(property, this.boundedEvents);
        if (handler) {
            for (var i = 0; i < curObject.length; i++) {
                if (id) {
                    if (curObject[i].id === id) {
                        curObject.splice(i, 1);
                        var indexLocation = this.ranArray.indexOf(id);
                        if (indexLocation !== -1) {
                            this.ranArray.splice(indexLocation, 1);
                        }
                        break;
                    }
                }
                else if (handler === curObject[i].handler) {
                    curObject.splice(i, 1);
                    break;
                }
            }
        }
        else {
            delete this.boundedEvents[property];
        }
    };
    /**
     * To notify the handlers in the specified event.
     * @param {string} property - Specifies the event to be notify.
     * @param {Object} args - Additional parameters to pass while calling the handler.
     * @param {Function} successHandler - this function will invoke after event successfully triggered
     * @param {Function} errorHandler - this function will invoke after event if it was failure to call.
     * @return {void}
     */
    Observer.prototype.notify = function (property, argument, successHandler, errorHandler) {
        if (this.notExist(property)) {
            if (successHandler) {
                successHandler.call(this, argument);
            }
            return;
        }
        if (argument) {
            argument.name = property;
        }
        var blazor = 'Blazor';
        var curObject = getValue(property, this.boundedEvents).slice(0);
        if (window[blazor]) {
            return this.blazorCallback(curObject, argument, successHandler, errorHandler, 0);
        }
        else {
            for (var _i = 0, curObject_1 = curObject; _i < curObject_1.length; _i++) {
                var cur = curObject_1[_i];
                cur.handler.call(cur.context, argument);
            }
            if (successHandler) {
                successHandler.call(this, argument);
            }
        }
    };
    Observer.prototype.blazorCallback = function (objs, argument, successHandler, errorHandler, index) {
        var _this = this;
        var isTrigger = index === objs.length - 1;
        if (index < objs.length) {
            var obj_1 = objs[index];
            var promise = obj_1.handler.call(obj_1.context, argument);
            if (promise && typeof promise.then === 'function') {
                if (!successHandler) {
                    return promise;
                }
                promise.then(function (data) {
                    data = typeof data === 'string' && _this.isJson(data) ? JSON.parse(data, _this.dateReviver) : data;
                    extend(argument, argument, data, true);
                    if (successHandler && isTrigger) {
                        successHandler.call(obj_1.context, argument);
                    }
                    else {
                        return _this.blazorCallback(objs, argument, successHandler, errorHandler, index + 1);
                    }
                }).catch(function (data) {
                    if (errorHandler) {
                        errorHandler.call(obj_1.context, typeof data === 'string' &&
                            _this.isJson(data) ? JSON.parse(data, _this.dateReviver) : data);
                    }
                });
            }
            else if (successHandler && isTrigger) {
                successHandler.call(obj_1.context, argument);
            }
            else {
                return this.blazorCallback(objs, argument, successHandler, errorHandler, index + 1);
            }
        }
    };
    // tslint:disable-next-line:no-any
    Observer.prototype.dateReviver = function (key, value) {
        var dPattern = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}/;
        if (isBlazor && typeof value === 'string' && value.match(dPattern) !== null) {
            return (new Date(value));
        }
        return (value);
    };
    Observer.prototype.isJson = function (value) {
        try {
            JSON.parse(value);
        }
        catch (e) {
            return false;
        }
        return true;
    };
    /**
     * To destroy handlers in the event
     */
    Observer.prototype.destroy = function () {
        this.boundedEvents = this.context = undefined;
    };
    /**
     * Returns if the property exists.
     */
    Observer.prototype.notExist = function (prop) {
        return this.boundedEvents.hasOwnProperty(prop) === false || this.boundedEvents[prop].length <= 0;
    };
    /**
     * Returns if the handler is present.
     */
    Observer.prototype.isHandlerPresent = function (boundedEvents, handler) {
        for (var _i = 0, boundedEvents_1 = boundedEvents; _i < boundedEvents_1.length; _i++) {
            var cur = boundedEvents_1[_i];
            if (cur.handler === handler) {
                return true;
            }
        }
        return false;
    };
    return Observer;
}());

/**
 * Specifies the observer used for external change detection.
 */
var onIntlChange = new Observer();
/**
 * Specifies the default rtl status for EJ2 components.
 */
var rightToLeft = false;
/**
 * Specifies the CLDR data loaded for internationalization functionalities.
 * @private
 */
var cldrData = {};
/**
 * Specifies the default culture value to be considered.
 * @private
 */
var defaultCulture = 'en-US';
/**
 * Specifies default currency code to be considered
 * @private
 */
var defaultCurrencyCode = 'USD';
/**
 * Load the CLDR data into context
 * @param {Object[]} obj Specifies the CLDR data's to be used for formatting and parser.
 * @returns {void}
 */
function loadCldr() {
    var data = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        data[_i] = arguments[_i];
    }
    for (var _a = 0, data_1 = data; _a < data_1.length; _a++) {
        var obj = data_1[_a];
        extend(cldrData, obj, {}, true);
    }
}

var blazorCultureFormats = {
    'en-US': {
        'd': 'M/d/y',
        'D': 'EEEE, MMMM d, y',
        'f': 'EEEE, MMMM d, y h:mm a',
        'F': 'EEEE, MMMM d, y h:mm:s a',
        'g': 'M/d/y h:mm a',
        'G': 'M/d/yyyy h:mm:ss tt',
        'm': 'MMMM d',
        'M': 'MMMM d',
        'r': 'ddd, dd MMM yyyy HH\':\'mm\':\'ss \'GMT\'',
        'R': 'ddd, dd MMM yyyy HH\':\'mm\':\'ss \'GMT\'',
        's': 'yyyy\'-\'MM\'-\'dd\'T\'HH\':\'mm\':\'ss',
        't': 'h:mm tt',
        'T': 'h:m:s tt',
        'u': 'yyyy\'-\'MM\'-\'dd HH\':\'mm\':\'ss\'Z\'',
        'U': 'dddd, MMMM d, yyyy h:mm:ss tt',
        'y': 'MMMM yyyy',
        'Y': 'MMMM yyyy'
    }
};
/**
 * Date base common constants and function for date parser and formatter.
 */
var IntlBase;
(function (IntlBase) {
    // tslint:disable-next-line:max-line-length
    IntlBase.negativeDataRegex = /^(('[^']+'|''|[^*#@0,.E])*)(\*.)?((([#,]*[0,]*0+)(\.0*[0-9]*#*)?)|([#,]*@+#*))(E\+?0+)?(('[^']+'|''|[^*#@0,.E])*)$/;
    IntlBase.customRegex = /^(('[^']+'|''|[^*#@0,.])*)(\*.)?((([0#,]*[0,]*[0#]*)(\.[0#]*)?)|([#,]*@+#*))(E\+?0+)?(('[^']+'|''|[^*#@0,.E])*)$/;
    IntlBase.latnParseRegex = /0|1|2|3|4|5|6|7|8|9/g;
    var fractionRegex = /[0-9]/g;
    IntlBase.defaultCurrency = '$';
    var mapper = ['infinity', 'nan', 'group', 'decimal'];
    var patternRegex = /G|M|L|H|c|'| a|yy|y|EEEE|E/g;
    var patternMatch = {
        'G': '',
        'M': 'm',
        'L': 'm',
        'H': 'h',
        'c': 'd',
        '\'': '"',
        ' a': ' AM/PM',
        'yy': 'yy',
        'y': 'yyyy',
        'EEEE': 'dddd',
        'E': 'ddd'
    };
    IntlBase.dateConverterMapper = /dddd|ddd/ig;
    var defaultFirstDay = 'sun';
    IntlBase.islamicRegex = /^islamic/;
    var firstDayMapper = {
        'sun': 0,
        'mon': 1,
        'tue': 2,
        'wed': 3,
        'thu': 4,
        'fri': 5,
        'sat': 6
    };
    IntlBase.formatRegex = /(^[ncpae]{1})([0-1]?[0-9]|20)?$/i;
    IntlBase.currencyFormatRegex = /(^[ca]{1})([0-1]?[0-9]|20)?$/i;
    IntlBase.curWithoutNumberRegex = /(c|a)$/ig;
    var typeMapper = {
        '$': 'isCurrency',
        '%': 'isPercent',
        '-': 'isNegative',
        0: 'nlead',
        1: 'nend'
    };
    IntlBase.dateParseRegex = /([a-z])\1*|'([^']|'')+'|''|./gi;
    IntlBase.basicPatterns = ['short', 'medium', 'long', 'full'];
    /* tslint:disable:quotemark */
    IntlBase.defaultObject = {
        'dates': {
            'calendars': {
                'gregorian': {
                    'months': {
                        'stand-alone': {
                            'abbreviated': {
                                '1': 'Jan',
                                '2': 'Feb',
                                '3': 'Mar',
                                '4': 'Apr',
                                '5': 'May',
                                '6': 'Jun',
                                '7': 'Jul',
                                '8': 'Aug',
                                '9': 'Sep',
                                '10': 'Oct',
                                '11': 'Nov',
                                '12': 'Dec'
                            },
                            'narrow': {
                                '1': 'J',
                                '2': 'F',
                                '3': 'M',
                                '4': 'A',
                                '5': 'M',
                                '6': 'J',
                                '7': 'J',
                                '8': 'A',
                                '9': 'S',
                                '10': 'O',
                                '11': 'N',
                                '12': 'D'
                            },
                            'wide': {
                                '1': 'January',
                                '2': 'February',
                                '3': 'March',
                                '4': 'April',
                                '5': 'May',
                                '6': 'June',
                                '7': 'July',
                                '8': 'August',
                                '9': 'September',
                                '10': 'October',
                                '11': 'November',
                                '12': 'December'
                            }
                        }
                    },
                    "days": {
                        "stand-alone": {
                            "abbreviated": {
                                "sun": "Sun",
                                "mon": "Mon",
                                "tue": "Tue",
                                "wed": "Wed",
                                "thu": "Thu",
                                "fri": "Fri",
                                "sat": "Sat"
                            },
                            "narrow": {
                                "sun": "S",
                                "mon": "M",
                                "tue": "T",
                                "wed": "W",
                                "thu": "T",
                                "fri": "F",
                                "sat": "S"
                            },
                            "short": {
                                "sun": "Su",
                                "mon": "Mo",
                                "tue": "Tu",
                                "wed": "We",
                                "thu": "Th",
                                "fri": "Fr",
                                "sat": "Sa"
                            },
                            "wide": {
                                "sun": "Sunday",
                                "mon": "Monday",
                                "tue": "Tuesday",
                                "wed": "Wednesday",
                                "thu": "Thursday",
                                "fri": "Friday",
                                "sat": "Saturday"
                            }
                        }
                    },
                    "dayPeriods": {
                        "format": {
                            "wide": {
                                "am": "AM",
                                "pm": "PM"
                            }
                        }
                    },
                    'eras': {
                        'eraNames': {
                            '0': 'Before Christ',
                            '0-alt-variant': 'Before Common Era',
                            '1': 'Anno Domini',
                            "1-alt-variant": "Common Era"
                        },
                        'eraAbbr': {
                            '0': 'BC',
                            '0-alt-variant': 'BCE',
                            '1': 'AD',
                            '1-alt-variant': 'CE'
                        },
                        'eraNarrow': {
                            '0': 'B',
                            '0-alt-variant': 'BCE',
                            '1': 'A',
                            '1-alt-variant': 'CE'
                        }
                    },
                    'dateFormats': {
                        'full': 'EEEE, MMMM d, y',
                        'long': 'MMMM d, y',
                        'medium': 'MMM d, y',
                        'short': 'M/d/yy'
                    },
                    'timeFormats': {
                        'full': 'h:mm:ss a zzzz',
                        'long': 'h:mm:ss a z',
                        'medium': 'h:mm:ss a',
                        'short': 'h:mm a'
                    },
                    'dateTimeFormats': {
                        'full': "{1} 'at' {0}",
                        'long': "{1} 'at' {0}",
                        'medium': '{1}, {0}',
                        'short': '{1}, {0}',
                        'availableFormats': {
                            'd': 'd',
                            'E': 'ccc',
                            'Ed': 'd E',
                            'Ehm': 'E h:mm a',
                            'EHm': 'E HH:mm',
                            'Ehms': 'E h:mm:ss a',
                            'EHms': 'E HH:mm:ss',
                            'Gy': 'y G',
                            'GyMMM': 'MMM y G',
                            'GyMMMd': 'MMM d, y G',
                            'GyMMMEd': 'E, MMM d, y G',
                            'h': 'h a',
                            'H': 'HH',
                            'hm': 'h:mm a',
                            'Hm': 'HH:mm',
                            'hms': 'h:mm:ss a',
                            'Hms': 'HH:mm:ss',
                            'hmsv': 'h:mm:ss a v',
                            'Hmsv': 'HH:mm:ss v',
                            'hmv': 'h:mm a v',
                            'Hmv': 'HH:mm v',
                            'M': 'L',
                            'Md': 'M/d',
                            'MEd': 'E, M/d',
                            'MMM': 'LLL',
                            'MMMd': 'MMM d',
                            'MMMEd': 'E, MMM d',
                            'MMMMd': 'MMMM d',
                            'ms': 'mm:ss',
                            'y': 'y',
                            'yM': 'M/y',
                            'yMd': 'M/d/y',
                            'yMEd': 'E, M/d/y',
                            'yMMM': 'MMM y',
                            'yMMMd': 'MMM d, y',
                            'yMMMEd': 'E, MMM d, y',
                            'yMMMM': 'MMMM y',
                        },
                    }
                },
                "islamic": {
                    "months": {
                        "stand-alone": {
                            "abbreviated": {
                                "1": "Muh.",
                                "2": "Saf.",
                                "3": "Rab. I",
                                "4": "Rab. II",
                                "5": "Jum. I",
                                "6": "Jum. II",
                                "7": "Raj.",
                                "8": "Sha.",
                                "9": "Ram.",
                                "10": "Shaw.",
                                "11": "Dhuʻl-Q.",
                                "12": "Dhuʻl-H."
                            },
                            "narrow": {
                                "1": "1",
                                "2": "2",
                                "3": "3",
                                "4": "4",
                                "5": "5",
                                "6": "6",
                                "7": "7",
                                "8": "8",
                                "9": "9",
                                "10": "10",
                                "11": "11",
                                "12": "12"
                            },
                            "wide": {
                                "1": "Muharram",
                                "2": "Safar",
                                "3": "Rabiʻ I",
                                "4": "Rabiʻ II",
                                "5": "Jumada I",
                                "6": "Jumada II",
                                "7": "Rajab",
                                "8": "Shaʻban",
                                "9": "Ramadan",
                                "10": "Shawwal",
                                "11": "Dhuʻl-Qiʻdah",
                                "12": "Dhuʻl-Hijjah"
                            }
                        }
                    },
                    "days": {
                        "stand-alone": {
                            "abbreviated": {
                                "sun": "Sun",
                                "mon": "Mon",
                                "tue": "Tue",
                                "wed": "Wed",
                                "thu": "Thu",
                                "fri": "Fri",
                                "sat": "Sat"
                            },
                            "narrow": {
                                "sun": "S",
                                "mon": "M",
                                "tue": "T",
                                "wed": "W",
                                "thu": "T",
                                "fri": "F",
                                "sat": "S"
                            },
                            "short": {
                                "sun": "Su",
                                "mon": "Mo",
                                "tue": "Tu",
                                "wed": "We",
                                "thu": "Th",
                                "fri": "Fr",
                                "sat": "Sa"
                            },
                            "wide": {
                                "sun": "Sunday",
                                "mon": "Monday",
                                "tue": "Tuesday",
                                "wed": "Wednesday",
                                "thu": "Thursday",
                                "fri": "Friday",
                                "sat": "Saturday"
                            }
                        }
                    },
                    "dayPeriods": {
                        "format": {
                            "wide": {
                                "am": "AM",
                                "pm": "PM"
                            }
                        }
                    },
                    "eras": {
                        "eraNames": {
                            "0": "AH"
                        },
                        "eraAbbr": {
                            "0": "AH"
                        },
                        "eraNarrow": {
                            "0": "AH"
                        }
                    },
                    "dateFormats": {
                        "full": "EEEE, MMMM d, y G",
                        "long": "MMMM d, y G",
                        "medium": "MMM d, y G",
                        "short": "M/d/y GGGGG"
                    },
                    "timeFormats": {
                        "full": "h:mm:ss a zzzz",
                        "long": "h:mm:ss a z",
                        "medium": "h:mm:ss a",
                        "short": "h:mm a"
                    },
                    "dateTimeFormats": {
                        "full": "{1} 'at' {0}",
                        "long": "{1} 'at' {0}",
                        "medium": "{1}, {0}",
                        "short": "{1}, {0}",
                        "availableFormats": {
                            "d": "d",
                            "E": "ccc",
                            "Ed": "d E",
                            "Ehm": "E h:mm a",
                            "EHm": "E HH:mm",
                            "Ehms": "E h:mm:ss a",
                            "EHms": "E HH:mm:ss",
                            "Gy": "y G",
                            "GyMMM": "MMM y G",
                            "GyMMMd": "MMM d, y G",
                            "GyMMMEd": "E, MMM d, y G",
                            "h": "h a",
                            "H": "HH",
                            "hm": "h:mm a",
                            "Hm": "HH:mm",
                            "hms": "h:mm:ss a",
                            "Hms": "HH:mm:ss",
                            "M": "L",
                            "Md": "M/d",
                            "MEd": "E, M/d",
                            "MMM": "LLL",
                            "MMMd": "MMM d",
                            "MMMEd": "E, MMM d",
                            "MMMMd": "MMMM d",
                            "ms": "mm:ss",
                            "y": "y G",
                            "yyyy": "y G",
                            "yyyyM": "M/y GGGGG",
                            "yyyyMd": "M/d/y GGGGG",
                            "yyyyMEd": "E, M/d/y GGGGG",
                            "yyyyMMM": "MMM y G",
                            "yyyyMMMd": "MMM d, y G",
                            "yyyyMMMEd": "E, MMM d, y G",
                            "yyyyMMMM": "MMMM y G",
                            "yyyyQQQ": "QQQ y G",
                            "yyyyQQQQ": "QQQQ y G"
                        }
                    }
                }
            },
            'timeZoneNames': {
                "hourFormat": "+HH:mm;-HH:mm",
                "gmtFormat": "GMT{0}",
                "gmtZeroFormat": "GMT",
            }
        },
        'numbers': {
            'currencies': {
                'USD': {
                    'displayName': 'US Dollar',
                    'symbol': '$',
                    'symbol-alt-narrow': '$'
                },
                'EUR': {
                    'displayName': 'Euro',
                    'symbol': '€',
                    'symbol-alt-narrow': '€'
                },
                'GBP': {
                    'displayName': 'British Pound',
                    'symbol-alt-narrow': '£'
                },
            },
            'defaultNumberingSystem': 'latn',
            'minimumGroupingDigits': '1',
            'symbols-numberSystem-latn': {
                'decimal': '.',
                'group': ',',
                'list': ';',
                'percentSign': '%',
                'plusSign': '+',
                'minusSign': '-',
                'exponential': 'E',
                'superscriptingExponent': '×',
                'perMille': '‰',
                'infinity': '∞',
                'nan': 'NaN',
                'timeSeparator': ':'
            },
            'decimalFormats-numberSystem-latn': {
                'standard': '#,##0.###',
            },
            'percentFormats-numberSystem-latn': {
                'standard': '#,##0%'
            },
            'currencyFormats-numberSystem-latn': {
                'standard': '¤#,##0.00',
                'accounting': '¤#,##0.00;(¤#,##0.00)'
            },
            'scientificFormats-numberSystem-latn': {
                'standard': '#E0'
            }
        }
    };
    IntlBase.blazorDefaultObject = {
        "numbers": {
            "mapper": {
                "0": "0",
                "1": "1",
                "2": "2",
                "3": "3",
                "4": "4",
                "5": "5",
                "6": "6",
                "7": "7",
                "8": "8",
                "9": "9"
            },
            "mapperDigits": "0123456789",
            "numberSymbols": {
                "decimal": ".",
                "group": ",",
                "plusSign": "+",
                "minusSign": "-",
                "percentSign": "%",
                "nan": "NaN",
                "timeSeparator": ":",
                "infinity": "∞"
            },
            "timeSeparator": ":",
            "currencySymbol": "$",
            "currencypData": {
                "nlead": "$",
                "nend": "",
                "groupSeparator": ",",
                "groupData": {
                    "primary": 3
                },
                "maximumFraction": 2,
                "minimumFraction": 2
            },
            "percentpData": {
                "nlead": "",
                "nend": "%",
                "groupSeparator": ",",
                "groupData": {
                    "primary": 3
                },
                "maximumFraction": 2,
                "minimumFraction": 2
            },
            "percentnData": {
                "nlead": "-",
                "nend": "%",
                "groupSeparator": ",",
                "groupData": {
                    "primary": 3
                },
                "maximumFraction": 2,
                "minimumFraction": 2
            },
            "currencynData": {
                "nlead": "($",
                "nend": ")",
                "groupSeparator": ",",
                "groupData": {
                    "primary": 3
                },
                "maximumFraction": 2,
                "minimumFraction": 2
            },
            "decimalnData": {
                "nlead": "-",
                "nend": "",
                "groupData": {
                    "primary": 3
                },
                "maximumFraction": 2,
                "minimumFraction": 2
            },
            "decimalpData": {
                "nlead": "",
                "nend": "",
                "groupData": {
                    "primary": 3
                },
                "maximumFraction": 2,
                "minimumFraction": 2
            }
        },
        "dates": {
            "dayPeriods": {
                "am": "AM",
                "pm": "PM"
            },
            "dateSeperator": "/",
            "days": {
                "abbreviated": {
                    "sun": "Sun",
                    "mon": "Mon",
                    "tue": "Tue",
                    "wed": "Wed",
                    "thu": "Thu",
                    "fri": "Fri",
                    "sat": "Sat"
                },
                "short": {
                    "sun": "Su",
                    "mon": "Mo",
                    "tue": "Tu",
                    "wed": "We",
                    "thu": "Th",
                    "fri": "Fr",
                    "sat": "Sa"
                },
                "wide": {
                    "sun": "Sunday",
                    "mon": "Monday",
                    "tue": "Tuesday",
                    "wed": "Wednesday",
                    "thu": "Thursday",
                    "fri": "Friday",
                    "sat": "Saturday"
                }
            },
            "months": {
                "abbreviated": {
                    "1": "Jan",
                    "2": "Feb",
                    "3": "Mar",
                    "4": "Apr",
                    "5": "May",
                    "6": "Jun",
                    "7": "Jul",
                    "8": "Aug",
                    "9": "Sep",
                    "10": "Oct",
                    "11": "Nov",
                    "12": "Dec"
                },
                "wide": {
                    "1": "January",
                    "2": "February",
                    "3": "March",
                    "4": "April",
                    "5": "May",
                    "6": "June",
                    "7": "July",
                    "8": "August",
                    "9": "September",
                    "10": "October",
                    "11": "November",
                    "12": "December"
                }
            },
            "eras": {
                "1": "AD"
            }
        }
    };
    /* tslint:enable:quotemark */
    IntlBase.monthIndex = {
        3: 'abbreviated',
        4: 'wide',
        5: 'narrow',
        1: 'abbreviated'
    };
    /**
     *
     */
    IntlBase.month = 'months';
    IntlBase.days = 'days';
    /**
     * Default numerber Object
     */
    IntlBase.patternMatcher = {
        C: 'currency',
        P: 'percent',
        N: 'decimal',
        A: 'currency',
        E: 'scientific'
    };
    /**
     * Returns the resultant pattern based on the skeleton, dateObject and the type provided
     * @private
     * @param {string} skeleton
     * @param {Object} dateObject
     * @param {string} type
     * @returns {string}
     */
    function getResultantPattern(skeleton, dateObject, type, isIslamic, blazorCulture) {
        var resPattern;
        var iType = type || 'date';
        if (blazorCulture) {
            resPattern = compareBlazorDateFormats({ skeleton: skeleton }, blazorCulture).format ||
                compareBlazorDateFormats({ skeleton: 'd' }, 'en-US').format;
        }
        else {
            if (IntlBase.basicPatterns.indexOf(skeleton) !== -1) {
                resPattern = getValue(iType + 'Formats.' + skeleton, dateObject);
                if (iType === 'dateTime') {
                    var dPattern = getValue('dateFormats.' + skeleton, dateObject);
                    var tPattern = getValue('timeFormats.' + skeleton, dateObject);
                    resPattern = resPattern.replace('{1}', dPattern).replace('{0}', tPattern);
                }
            }
            else {
                resPattern = getValue('dateTimeFormats.availableFormats.' + skeleton, dateObject);
            }
            if (isUndefined(resPattern) && skeleton === 'yMd') {
                resPattern = 'M/d/y';
            }
        }
        return resPattern;
    }
    IntlBase.getResultantPattern = getResultantPattern;
    /**
     * Returns the dependable object for provided cldr data and culture
     * @private
     * @param {Object} cldr
     * @param {string} culture
     * @param {boolean} isNumber
     * @returns {Dependables}
     */
    function getDependables(cldr, culture, mode, isNumber) {
        var ret = {};
        var calendartype = mode || 'gregorian';
        ret.parserObject = ParserBase.getMainObject(cldr, culture) || ( IntlBase.defaultObject);
        if (isNumber) {
            ret.numericObject = getValue('numbers', ret.parserObject);
        }
        else {
            var dateString =  ('dates.calendars.' + calendartype);
            ret.dateObject = getValue(dateString, ret.parserObject);
        }
        return ret;
    }
    IntlBase.getDependables = getDependables;
    /**
     * Returns the symbol pattern for provided parameters
     * @private
     * @param {string} type
     * @param {string} numSystem
     * @param {Object} obj
     * @param {boolean} isAccount
     * @returns {string}
     */
    function getSymbolPattern(type, numSystem, obj, isAccount) {
        return getValue(type + 'Formats-numberSystem-' +
            numSystem + (isAccount ? '.accounting' : '.standard'), obj) || (isAccount ? getValue(type + 'Formats-numberSystem-' +
            numSystem + '.standard', obj) : '');
    }
    IntlBase.getSymbolPattern = getSymbolPattern;
    function ConvertDateToWeekFormat(format) {
        var convertMapper = format.match(IntlBase.dateConverterMapper);
        if (convertMapper && isBlazor()) {
            var tempString = convertMapper[0].length === 3 ? 'EEE' : 'EEEE';
            return format.replace(IntlBase.dateConverterMapper, tempString);
        }
        return format;
    }
    IntlBase.ConvertDateToWeekFormat = ConvertDateToWeekFormat;
    function compareBlazorDateFormats(formatOptions, culture) {
        var format = formatOptions.format || formatOptions.skeleton;
        var curFormatMapper = getValue((culture || 'en-US') + '.' + format, blazorCultureFormats);
        if (!curFormatMapper) {
            curFormatMapper = getValue('en-US.' + format, blazorCultureFormats);
        }
        if (curFormatMapper) {
            curFormatMapper = ConvertDateToWeekFormat(curFormatMapper);
            formatOptions.format = curFormatMapper.replace(/tt/, 'a');
        }
        return formatOptions;
    }
    IntlBase.compareBlazorDateFormats = compareBlazorDateFormats;
    /**
     * Returns proper numeric skeleton
     * @private
     * @param {string} skeleton
     * @returns {NumericSkeleton}
     */
    function getProperNumericSkeleton(skeleton) {
        var matches = skeleton.match(IntlBase.formatRegex);
        var ret = {};
        var pattern = matches[1].toUpperCase();
        ret.isAccount = (pattern === 'A');
        /* tslint:disable no-any */
        ret.type = IntlBase.patternMatcher[pattern];
        if (skeleton.length > 1) {
            ret.fractionDigits = parseInt(matches[2], 10);
        }
        return ret;
    }
    IntlBase.getProperNumericSkeleton = getProperNumericSkeleton;
    /**
     * Returns format data for number formatting like minimum fraction, maximum fraction, etc..,
     * @private
     * @param {string} pattern
     * @param {boolean} needFraction
     * @param {string} cSymbol
     * @param {boolean} fractionOnly
     * @returns {NegativeData}
     */
    function getFormatData(pattern, needFraction, cSymbol, fractionOnly) {
        var nData = fractionOnly ? {} : { nlead: '', nend: '' };
        var match = pattern.match(IntlBase.customRegex);
        if (match) {
            if (!fractionOnly) {
                nData.nlead = changeCurrencySymbol(match[1], cSymbol);
                nData.nend = changeCurrencySymbol(match[10], cSymbol);
                nData.groupPattern = match[4];
            }
            var fraction = match[7];
            if (fraction && needFraction) {
                var fmatch = fraction.match(fractionRegex);
                if (!isNullOrUndefined(fmatch)) {
                    nData.minimumFraction = fmatch.length;
                }
                else {
                    nData.minimumFraction = 0;
                }
                nData.maximumFraction = fraction.length - 1;
            }
        }
        return nData;
    }
    IntlBase.getFormatData = getFormatData;
    /**
     * Changes currency symbol
     * @private
     * @param {string} val
     * @param {string} sym
     * @returns {string}
     */
    function changeCurrencySymbol(val, sym) {
        if (val) {
            return val.replace(IntlBase.defaultCurrency, sym);
        }
        return '';
    }
    /**
     * Returns currency symbol based on currency code
     * @private
     * @param {Object} numericObject
     * @param {string} currencyCode
     * @returns {string}
     */
    function getCurrencySymbol(numericObject, currencyCode, altSymbol) {
        var symbol = altSymbol ? ('.' + altSymbol) : '.symbol';
        var getCurrency = getValue('currencies.' + currencyCode + symbol, numericObject) ||
            getValue('currencies.' + currencyCode + '.symbol-alt-narrow', numericObject) || '$';
        return getCurrency;
    }
    IntlBase.getCurrencySymbol = getCurrencySymbol;
    /**
     * Returns formatting options for custom number format
     * @private
     * @param {string} format
     * @param {CommonOptions} dOptions
     * @param {Dependables} obj
     * @returns {GenericFormatOptions}
     */
    function customFormat(format, dOptions, obj) {
        var options = {};
        var formatSplit = format.split(';');
        var data = ['pData', 'nData', 'zeroData'];
        for (var i = 0; i < formatSplit.length; i++) {
            options[data[i]] = customNumberFormat(formatSplit[i], dOptions, obj);
        }
        if (isNullOrUndefined(options.nData)) {
            options.nData = extend({}, options.pData);
            options.nData.nlead = isNullOrUndefined(dOptions) ? '-' + options.nData.nlead : dOptions.minusSymbol + options.nData.nlead;
        }
        return options;
    }
    IntlBase.customFormat = customFormat;
    /**
     * Returns custom formatting options
     * @private
     * @param {string} format
     * @param {CommonOptions} dOptions
     * @param {Object} numObject
     * @returns {NegativeData}
     */
    function customNumberFormat(format, dOptions, numObject) {
        var cOptions = { type: 'decimal', minimumFractionDigits: 0, maximumFractionDigits: 0 };
        var pattern = format.match(IntlBase.customRegex);
        if (isNullOrUndefined(pattern) || (pattern[5] === '' && format !== 'N/A')) {
            cOptions.type = undefined;
            return cOptions;
        }
        cOptions.nlead = pattern[1];
        cOptions.nend = pattern[10];
        var integerPart = pattern[6];
        cOptions.useGrouping = integerPart.indexOf(',') !== -1;
        integerPart = integerPart.replace(/,/g, '');
        var fractionPart = pattern[7];
        if (integerPart.indexOf('0') !== -1) {
            cOptions.minimumIntegerDigits = integerPart.length - integerPart.indexOf('0');
        }
        if (!isNullOrUndefined(fractionPart)) {
            cOptions.minimumFractionDigits = fractionPart.lastIndexOf('0');
            cOptions.maximumFractionDigits = fractionPart.lastIndexOf('#');
            if (cOptions.minimumFractionDigits === -1) {
                cOptions.minimumFractionDigits = 0;
            }
            if (cOptions.maximumFractionDigits === -1 || cOptions.maximumFractionDigits < cOptions.minimumFractionDigits) {
                cOptions.maximumFractionDigits = cOptions.minimumFractionDigits;
            }
        }
        if (!isNullOrUndefined(dOptions)) {
            extend(cOptions, isCurrencyPercent([cOptions.nlead, cOptions.nend], '$', dOptions.currencySymbol));
            if (!cOptions.isCurrency) {
                extend(cOptions, isCurrencyPercent([cOptions.nlead, cOptions.nend], '%', dOptions.percentSymbol));
            }
        }
        else {
            extend(cOptions, isCurrencyPercent([cOptions.nlead, cOptions.nend], '%', '%'));
        }
        if (!isNullOrUndefined(numObject)) {
            var symbolPattern = getSymbolPattern(cOptions.type, dOptions.numberMapper.numberSystem, numObject, false);
            if (cOptions.useGrouping) {
                cOptions.groupSeparator = dOptions.numberMapper.numberSymbols[mapper[2]];
                cOptions.groupData = NumberFormat.getGroupingDetails(symbolPattern.split(';')[0]);
            }
            cOptions.nlead = cOptions.nlead.replace(/\'/g, '');
            cOptions.nend = cOptions.nend.replace(/\'/g, '');
        }
        return cOptions;
    }
    /**
     * Returns formatting options for currency or percent type
     * @private
     * @param {string[]} parts
     * @param {string} actual
     * @param {string} symbol
     * @returns {NegativeData}
     */
    function isCurrencyPercent(parts, actual, symbol) {
        var options = { nlead: parts[0], nend: parts[1] };
        for (var i = 0; i < 2; i++) {
            var part = parts[i];
            var loc = part.indexOf(actual);
            if ((loc !== -1) && ((loc < part.indexOf('\'')) || (loc > part.lastIndexOf('\'')))) {
                options[typeMapper[i]] = part.substr(0, loc) + symbol + part.substr(loc + 1);
                options[typeMapper[actual]] = true;
                options.type = options.isCurrency ? 'currency' : 'percent';
                break;
            }
        }
        return options;
    }
    IntlBase.isCurrencyPercent = isCurrencyPercent;
    /**
     * Returns culture based date separator
     * @private
     * @param {Object} dateObj
     * @returns {string}
     */
    function getDateSeparator(dateObj) {
        var value = (getValue('dateFormats.short', dateObj) || '').match(/[d‏M‏]([^d‏M])[d‏M‏]/i);
        return value ? value[1] : '/';
    }
    IntlBase.getDateSeparator = getDateSeparator;
    /**
     * Returns Native Date Time pattern
     * @private
     * @param {string} culture
     * @param {DateFormatOptions} options
     * @param {Object} cldr
     * @returns {string}
     */
    function getActualDateTimeFormat(culture, options, cldr, isExcelFormat) {
        var dependable = getDependables(cldr, culture, options.calendar);
        var actualPattern = options.format || getResultantPattern(options.skeleton, dependable.dateObject, options.type);
        if (isExcelFormat) {
            actualPattern = actualPattern.replace(patternRegex, function (pattern) {
                return patternMatch[pattern];
            });
            if (actualPattern.indexOf('z') !== -1) {
                var tLength = actualPattern.match(/z/g).length;
                var timeZonePattern = void 0;
                var options_1 = { 'timeZone': {} };
                options_1.numMapper = ParserBase.getNumberMapper(dependable.parserObject, ParserBase.getNumberingSystem(cldr));
                options_1.timeZone = getValue('dates.timeZoneNames', dependable.parserObject);
                var value = new Date();
                var timezone = value.getTimezoneOffset();
                var pattern = (tLength < 4) ? '+H;-H' : options_1.timeZone.hourFormat;
                pattern = pattern.replace(/:/g, options_1.numMapper.timeSeparator);
                if (timezone === 0) {
                    timeZonePattern = options_1.timeZone.gmtZeroFormat;
                }
                else {
                    timeZonePattern = DateFormat.getTimeZoneValue(timezone, pattern);
                    timeZonePattern = options_1.timeZone.gmtFormat.replace(/\{0\}/, timeZonePattern);
                }
                actualPattern = actualPattern.replace(/[z]+/, '"' + timeZonePattern + '"');
            }
            actualPattern = actualPattern.replace(/ $/, '');
        }
        return actualPattern;
    }
    IntlBase.getActualDateTimeFormat = getActualDateTimeFormat;
    // tslint:disable-next-line:no-any
    function processSymbol(actual, option) {
        if (actual.indexOf(',') !== -1) {
            // tslint:disable-next-line:no-any
            var split = actual.split(',');
            actual = (split[0] + getValue('numberMapper.numberSymbols.group', option) +
                split[1].replace('.', getValue('numberMapper.numberSymbols.decimal', option)));
        }
        else {
            actual = actual.replace('.', getValue('numberMapper.numberSymbols.decimal', option));
        }
        return actual;
    }
    /**
     * Returns Native Number pattern
     * @private
     * @param {string} culture
     * @param {NumberFormatOptions} options
     * @param {Object} cldr
     * @returns {string}
     */
    function getActualNumberFormat(culture, options, cldr, isExcel) {
        var dependable = getDependables(cldr, culture, '', true);
        var parseOptions = { custom: true };
        var minFrac;
        var curObj = {};
        var curMatch = (options.format || '').match(IntlBase.currencyFormatRegex);
        var type = IntlBase.formatRegex.test(options.format) ? getProperNumericSkeleton(options.format || 'N') : {};
        var dOptions = {};
        if (curMatch) {
            dOptions.numberMapper = 
                ParserBase.getNumberMapper(dependable.parserObject, ParserBase.getNumberingSystem(cldr), true);
            var curCode = 
                getCurrencySymbol(dependable.numericObject, options.currency || defaultCurrencyCode, options.altSymbol);
            var symbolPattern = getSymbolPattern('currency', dOptions.numberMapper.numberSystem, dependable.numericObject, (/a/i).test(options.format));
            symbolPattern = symbolPattern.replace(/\u00A4/g, curCode);
            var split = symbolPattern.split(';');
            curObj.hasNegativePattern =  (split.length > 1);
            curObj.nData = 
                getFormatData(split[1] || '-' + split[0], true, curCode);
            curObj.pData = 
                getFormatData(split[0], false, curCode);
            if (!curMatch[2] && !options.minimumFractionDigits && !options.maximumFractionDigits) {
                minFrac = getFormatData(symbolPattern.split(';')[0], true, '', true).minimumFraction;
            }
        }
        var actualPattern;
        if ((IntlBase.formatRegex.test(options.format)) || !(options.format)) {
            extend(parseOptions, getProperNumericSkeleton(options.format || 'N'));
            parseOptions.custom = false;
            actualPattern = '###0';
            if (parseOptions.fractionDigits || options.minimumFractionDigits || options.maximumFractionDigits || minFrac) {
                var defaultMinimum = 0;
                if (parseOptions.fractionDigits) {
                    options.minimumFractionDigits = options.maximumFractionDigits = parseOptions.fractionDigits;
                }
                actualPattern = fractionDigitsPattern(actualPattern, minFrac || parseOptions.fractionDigits ||
                    options.minimumFractionDigits || defaultMinimum, options.maximumFractionDigits || defaultMinimum);
            }
            if (options.minimumIntegerDigits) {
                actualPattern = minimumIntegerPattern(actualPattern, options.minimumIntegerDigits);
            }
            if (options.useGrouping) {
                actualPattern = groupingPattern(actualPattern);
            }
            if (parseOptions.type === 'currency' || (parseOptions.type && isBlazor())) {
                var cPattern = actualPattern;
                actualPattern = curObj.pData.nlead + cPattern + curObj.pData.nend;
                if (curObj.hasNegativePattern || isBlazor()) {
                    actualPattern += ';' + curObj.nData.nlead + cPattern + curObj.nData.nend;
                }
            }
            if (parseOptions.type === 'percent' && !isBlazor()) {
                actualPattern += ' %';
            }
        }
        else {
            actualPattern = options.format.replace(/\'/g, '"');
        }
        if (Object.keys(dOptions).length > 0) {
            actualPattern = !isExcel ? processSymbol(actualPattern, dOptions) : actualPattern;
        }
        return actualPattern;
    }
    IntlBase.getActualNumberFormat = getActualNumberFormat;
    function fractionDigitsPattern(pattern, minDigits, maxDigits) {
        pattern += '.';
        for (var a = 0; a < minDigits; a++) {
            pattern += '0';
        }
        if (minDigits < maxDigits) {
            var diff = maxDigits - minDigits;
            for (var b = 0; b < diff; b++) {
                pattern += '#';
            }
        }
        return pattern;
    }
    function minimumIntegerPattern(pattern, digits) {
        var temp = pattern.split('.');
        var integer = '';
        for (var x = 0; x < digits; x++) {
            integer += '0';
        }
        return temp[1] ? (integer + '.' + temp[1]) : integer;
    }
    function groupingPattern(pattern) {
        var temp = pattern.split('.');
        var integer = temp[0];
        var no = 3 - integer.length % 3;
        var hash = (no && no === 1) ? '#' : (no === 2 ? '##' : '');
        integer = hash + integer;
        pattern = '';
        for (var x = integer.length - 1; x > 0; x = x - 3) {
            pattern = ',' + integer[x - 2] + integer[x - 1] + integer[x] + pattern;
        }
        pattern = pattern.slice(1);
        return temp[1] ? (pattern + '.' + temp[1]) : pattern;
    }
    function getWeekData(culture, cldr) {
        var firstDay = defaultFirstDay;
        var mapper = getValue('supplemental.weekData.firstDay', cldr);
        var iCulture = culture;
        if ((/en-/).test(iCulture)) {
            iCulture = iCulture.slice(3);
        }
        iCulture = iCulture.slice(0, 2).toUpperCase() + iCulture.substr(2);
        if (mapper) {
            firstDay = mapper[iCulture] || defaultFirstDay;
        }
        return firstDayMapper[firstDay];
    }
    IntlBase.getWeekData = getWeekData;
    /**
     * @private
     * @param pData
     * @param aCurrency
     * @param rCurrency
     */
    function replaceBlazorCurrency(pData, aCurrency, rCurrency) {
        var iCurrency = getBlazorCurrencySymbol(rCurrency);
        if (aCurrency !== iCurrency) {
            for (var _i = 0, pData_1 = pData; _i < pData_1.length; _i++) {
                var data = pData_1[_i];
                data.nend = data.nend.replace(aCurrency, iCurrency);
                data.nlead = data.nlead.replace(aCurrency, iCurrency);
            }
        }
    }
    IntlBase.replaceBlazorCurrency = replaceBlazorCurrency;
    /**
     * @private
     */
    function getWeekOfYear(date) {
        var newYear = new Date(date.getFullYear(), 0, 1);
        var day = newYear.getDay();
        var weeknum;
        day = (day >= 0 ? day : day + 7);
        var daynum = Math.floor((date.getTime() - newYear.getTime() -
            (date.getTimezoneOffset() - newYear.getTimezoneOffset()) * 60000) / 86400000) + 1;
        if (day < 4) {
            weeknum = Math.floor((daynum + day - 1) / 7) + 1;
            if (weeknum > 52) {
                var nYear = new Date(this.getFullYear() + 1, 0, 1);
                var nday = nYear.getDay();
                nday = nday >= 0 ? nday : nday + 7;
                weeknum = nday < 4 ? 1 : 53;
            }
        }
        else {
            weeknum = Math.floor((daynum + day - 1) / 7);
        }
        return weeknum;
    }
    IntlBase.getWeekOfYear = getWeekOfYear;
})(IntlBase || (IntlBase = {}));

var REGX_MOBILE = /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini|mobile/i;
var REGX_IE = /msie|trident/i;
var REGX_IE11 = /Trident\/7\./;
var REGX_IOS = /(ipad|iphone|ipod touch)/i;
var REGX_IOS7 = /(ipad|iphone|ipod touch);.*os 7_\d|(ipad|iphone|ipod touch);.*os 8_\d/i;
var REGX_ANDROID = /android/i;
var REGX_WINDOWS = /trident|windows phone|edge/i;
var REGX_VERSION = /(version)[ \/]([\w.]+)/i;
var REGX_BROWSER = {
    OPERA: /(opera|opr)(?:.*version|)[ \/]([\w.]+)/i,
    EDGE: /(edge)(?:.*version|)[ \/]([\w.]+)/i,
    CHROME: /(chrome|crios)[ \/]([\w.]+)/i,
    PANTHOMEJS: /(phantomjs)[ \/]([\w.]+)/i,
    SAFARI: /(safari)[ \/]([\w.]+)/i,
    WEBKIT: /(webkit)[ \/]([\w.]+)/i,
    MSIE: /(msie|trident) ([\w.]+)/i,
    MOZILLA: /(mozilla)(?:.*? rv:([\w.]+)|)/i
};
/* istanbul ignore else  */
if (typeof window !== 'undefined') {
    window.browserDetails = window.browserDetails || {};
}
/**
 * Get configuration details for Browser
 * @private
 */
var Browser = /** @class */ (function () {
    function Browser() {
    }
    Browser.extractBrowserDetail = function () {
        var browserInfo = { culture: {} };
        var keys = Object.keys(REGX_BROWSER);
        var clientInfo = [];
        for (var _i = 0, keys_1 = keys; _i < keys_1.length; _i++) {
            var key = keys_1[_i];
            clientInfo = Browser.userAgent.match(REGX_BROWSER[key]);
            if (clientInfo) {
                browserInfo.name = (clientInfo[1].toLowerCase() === 'opr' ? 'opera' : clientInfo[1].toLowerCase());
                browserInfo.name = (clientInfo[1].toLowerCase() === 'crios' ? 'chrome' : browserInfo.name);
                browserInfo.version = clientInfo[2];
                browserInfo.culture.name = browserInfo.culture.language = navigator.language;
                if (!!Browser.userAgent.match(REGX_IE11)) {
                    browserInfo.name = 'msie';
                    break;
                }
                var version = Browser.userAgent.match(REGX_VERSION);
                if (browserInfo.name === 'safari' && version) {
                    browserInfo.version = version[2];
                }
                break;
            }
        }
        return browserInfo;
    };
    /**
     * To get events from the browser
     * @param {string} event - type of event triggered.
     * @returns {Boolean}
     */
    Browser.getEvent = function (event) {
        // tslint:disable-next-line:no-any
        var events = {
            start: {
                isPointer: 'pointerdown', isTouch: 'touchstart', isDevice: 'mousedown'
            },
            move: {
                isPointer: 'pointermove', isTouch: 'touchmove', isDevice: 'mousemove'
            },
            end: {
                isPointer: 'pointerup', isTouch: 'touchend', isDevice: 'mouseup'
            },
            cancel: {
                isPointer: 'pointercancel', isTouch: 'touchcancel', isDevice: 'mouseleave'
            }
        };
        return (Browser.isPointer && !Browser.isWindows ? events[event].isPointer :
            (Browser.isTouch ? events[event].isTouch + (!Browser.isDevice ? ' ' + events[event].isDevice : '')
                : events[event].isDevice));
    };
    /**
     * To get the Touch start event from browser
     * @returns {string}
     */
    Browser.getTouchStartEvent = function () {
        return Browser.getEvent('start');
    };
    /**
     * To get the Touch end event from browser
     * @returns {string}
     */
    Browser.getTouchEndEvent = function () {
        return Browser.getEvent('end');
    };
    /**
     * To get the Touch move event from browser
     * @returns {string}
     */
    Browser.getTouchMoveEvent = function () {
        return Browser.getEvent('move');
    };
    /**
     * To cancel the touch event from browser
     * @returns {string}
     */
    Browser.getTouchCancelEvent = function () {
        return Browser.getEvent('cancel');
    };
    /**
     * To get the value based on provided key and regX
     * @param {string} key
     * @param {RegExp} regX
     * @returns {Object}
     */
    Browser.getValue = function (key, regX) {
        var browserDetails = window.browserDetails;
        if ('undefined' === typeof browserDetails[key]) {
            return browserDetails[key] = regX.test(Browser.userAgent);
        }
        return browserDetails[key];
    };
    Object.defineProperty(Browser, "userAgent", {
        get: function () {
            return Browser.uA;
        },
        //Properties 
        /**
         * Property specifies the userAgent of the browser. Default userAgent value is based on the browser.
         * Also we can set our own userAgent.
         */
        set: function (uA) {
            Browser.uA = uA;
            window.browserDetails = {};
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Browser, "info", {
        //Read Only Properties
        /**
         * Property is to get the browser information like Name, Version and Language
         * @returns BrowserInfo
         */
        get: function () {
            if (isUndefined(window.browserDetails.info)) {
                return window.browserDetails.info = Browser.extractBrowserDetail();
            }
            return window.browserDetails.info;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Browser, "isIE", {
        /**
         * Property is to get whether the userAgent is based IE.
         */
        get: function () {
            return Browser.getValue('isIE', REGX_IE);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Browser, "isTouch", {
        /**
         * Property is to get whether the browser has touch support.
         */
        get: function () {
            if (isUndefined(window.browserDetails.isTouch)) {
                return (window.browserDetails.isTouch =
                    ('ontouchstart' in window.navigator) ||
                        (window &&
                            window.navigator &&
                            (window.navigator.maxTouchPoints > 0)) || ('ontouchstart' in window));
            }
            return window.browserDetails.isTouch;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Browser, "isPointer", {
        /**
         * Property is to get whether the browser has Pointer support.
         */
        get: function () {
            if (isUndefined(window.browserDetails.isPointer)) {
                return window.browserDetails.isPointer = ('pointerEnabled' in window.navigator);
            }
            return window.browserDetails.isPointer;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Browser, "isMSPointer", {
        /**
         * Property is to get whether the browser has MSPointer support.
         */
        get: function () {
            if (isUndefined(window.browserDetails.isMSPointer)) {
                return window.browserDetails.isMSPointer = ('msPointerEnabled' in window.navigator);
            }
            return window.browserDetails.isMSPointer;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Browser, "isDevice", {
        /**
         * Property is to get whether the userAgent is device based.
         */
        get: function () {
            return Browser.getValue('isDevice', REGX_MOBILE);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Browser, "isIos", {
        /**
         * Property is to get whether the userAgent is IOS.
         */
        get: function () {
            return Browser.getValue('isIos', REGX_IOS);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Browser, "isIos7", {
        /**
         * Property is to get whether the userAgent is Ios7.
         */
        get: function () {
            return Browser.getValue('isIos7', REGX_IOS7);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Browser, "isAndroid", {
        /**
         * Property is to get whether the userAgent is Android.
         */
        get: function () {
            return Browser.getValue('isAndroid', REGX_ANDROID);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Browser, "isWebView", {
        /**
         * Property is to identify whether application ran in web view.
         */
        get: function () {
            if (isUndefined(window.browserDetails.isWebView)) {
                window.browserDetails.isWebView = !(isUndefined(window.cordova) && isUndefined(window.PhoneGap)
                    && isUndefined(window.phonegap) && window.forge !== 'object');
                return window.browserDetails.isWebView;
            }
            return window.browserDetails.isWebView;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Browser, "isWindows", {
        /**
         * Property is to get whether the userAgent is Windows.
         */
        get: function () {
            return Browser.getValue('isWindows', REGX_WINDOWS);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Browser, "touchStartEvent", {
        /**
         * Property is to get the touch start event. It returns event name based on browser.
         */
        get: function () {
            if (isUndefined(window.browserDetails.touchStartEvent)) {
                return window.browserDetails.touchStartEvent = Browser.getTouchStartEvent();
            }
            return window.browserDetails.touchStartEvent;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Browser, "touchMoveEvent", {
        /**
         * Property is to get the touch move event. It returns event name based on browser.
         */
        get: function () {
            if (isUndefined(window.browserDetails.touchMoveEvent)) {
                return window.browserDetails.touchMoveEvent = Browser.getTouchMoveEvent();
            }
            return window.browserDetails.touchMoveEvent;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Browser, "touchEndEvent", {
        /**
         * Property is to get the touch end event. It returns event name based on browser.
         */
        get: function () {
            if (isUndefined(window.browserDetails.touchEndEvent)) {
                return window.browserDetails.touchEndEvent = Browser.getTouchEndEvent();
            }
            return window.browserDetails.touchEndEvent;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Browser, "touchCancelEvent", {
        /**
         * Property is to cancel the touch end event.
         */
        get: function () {
            if (isUndefined(window.browserDetails.touchCancelEvent)) {
                return window.browserDetails.touchCancelEvent = Browser.getTouchCancelEvent();
            }
            return window.browserDetails.touchCancelEvent;
        },
        enumerable: true,
        configurable: true
    });
    /* istanbul ignore next */
    Browser.uA = typeof navigator !== 'undefined' ? navigator.userAgent : '';
    return Browser;
}());

/**
 * EventHandler class provides option to add, remove, clear and trigger events to a HTML DOM element
 * @private
 * ```html
 * <div id="Eventdiv">  </div>
 * <script>
 *   let node: HTMLElement = document.querySelector("#Eventdiv");
 *   EventHandler.addEventListener(node, "click", function(){
 *       // click handler function code
 *   });
 *   EventHandler.addEventListener(node, "onmouseover", function(){
 *       // mouseover handler function code
 *   });
 *   EventHandler.removeEventListener(node, "click", function(){
 *       // click handler function code
 *   });
 *   eventObj.clearEvents();
 * </script>
 * ```
 */
var EventHandler = /** @class */ (function () {
    function EventHandler() {
    }
    // to get the event data based on element
    EventHandler.addOrGetEventData = function (element) {
        if (element) {
            if ('__eventList' in element) {
                return element.__eventList.events;
            }
            else {
                element.__eventList = {};
                return element.__eventList.events = [];
            }
        }
        else {
            return [];
        }
    };
    /**
     * Add an event to the specified DOM element.
     * @param {any} element - Target HTML DOM element
     * @param {string} eventName - A string that specifies the name of the event
     * @param {Function} listener - Specifies the function to run when the event occurs
     * @param {Object} bindTo - A object that binds 'this' variable in the event handler
     * @param {number} debounce - Specifies at what interval given event listener should be triggered.
     * @return {Function}
     */
    EventHandler.add = function (element, eventName, listener, bindTo, intDebounce) {
        var eventData = EventHandler.addOrGetEventData(element);
        var debounceListener;
        if (intDebounce) {
            debounceListener = debounce(listener, intDebounce);
        }
        else {
            debounceListener = listener;
        }
        if (bindTo) {
            debounceListener = debounceListener.bind(bindTo);
        }
        var event = eventName.split(' ');
        for (var i = 0; i < event.length; i++) {
            eventData.push({
                name: event[i],
                listener: listener,
                debounce: debounceListener
            });
            if (Browser.isIE) {
                element.addEventListener(event[i], debounceListener);
            }
            else {
                element.addEventListener(event[i], debounceListener, { passive: false });
            }
        }
        return debounceListener;
    };
    /**
     * Remove an event listener that has been attached before.
     * @param {any} element - Specifies the target html element to remove the event
     * @param {string} eventName - A string that specifies the name of the event to remove
     * @param {Function} listener - Specifies the function to remove
     * @return {void}
     */
    EventHandler.remove = function (element, eventName, listener) {
        var eventData = EventHandler.addOrGetEventData(element);
        var event = eventName.split(' ');
        var _loop_1 = function (j) {
            var index = -1;
            var debounceListener;
            if (eventData && eventData.length !== 0) {
                eventData.some(function (x, i) {
                    return x.name === event[j] && x.listener === listener ?
                        (index = i, debounceListener = x.debounce, true) : false;
                });
            }
            if (index !== -1) {
                eventData.splice(index, 1);
            }
            if (debounceListener) {
                element.removeEventListener(event[j], debounceListener);
            }
        };
        for (var j = 0; j < event.length; j++) {
            _loop_1(j);
        }
    };
    /**
     * Clear all the event listeners that has been previously attached to the element.
     * @param {any} element - Specifies the target html element to clear the events
     * @return {void}
     */
    EventHandler.clearEvents = function (element) {
        var eventData;
        var copyData;
        eventData = EventHandler.addOrGetEventData(element);
        copyData = extend([], copyData, eventData);
        for (var i = 0; i < copyData.length; i++) {
            element.removeEventListener(copyData[i].name, copyData[i].debounce);
            eventData.shift();
        }
    };
    /**
     * Trigger particular event of the element.
     * @param {any} element - Specifies the target html element to trigger the events
     * @param {string} eventName - Specifies the event to trigger for the specified element.
     * Can be a custom event, or any of the standard events.
     * @param {any} eventProp - Additional parameters to pass on to the event properties
     * @return {void}
     */
    EventHandler.trigger = function (element, eventName, eventProp) {
        var eventData = EventHandler.addOrGetEventData(element);
        for (var _i = 0, eventData_1 = eventData; _i < eventData_1.length; _i++) {
            var event_1 = eventData_1[_i];
            if (event_1.name === eventName) {
                event_1.debounce.call(this, eventProp);
            }
        }
    };
    return EventHandler;
}());

/**
 * Template Engine Bridge
 */
function getRandomId() {
    return '-' + Math.random().toString(36).substr(2, 5);
}

var simpleRegex = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/;
var multipleSplitRegex = /(?:#([\w-]+)|(\w+)|\.([\w-]+))/g;
var idClassSelector = /^(\.|#)/;
var selectMapper = {
    '.': 'className',
    '#': 'id'
};
var classRegexString = '(?=.*?\\b{value}\\b)';
var assigner = { className: 'attributes.className', id: 'attributes.id', tagName: 'tagName' };
var emptyElements = ['area', 'base', 'basefont', 'br', 'col', 'frame', 'hr', 'img', 'input',
    'link', 'meta', 'param', 'embed', 'command', 'keygen', 'source', 'track', 'wbr'];
var blockElements = ['a', 'address', 'article', 'applet', 'aside', 'audio', 'blockquote',
    'button', 'canvas', 'center', 'dd', 'del', 'dir', 'div', 'dl', 'dt', 'fieldset', 'figcaption', 'figure',
    'footer', 'form', 'frameset', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'header', 'hgroup', 'hr', 'iframe', 'ins',
    'isindex', 'li', 'map', 'menu', 'noframes', 'noscript', 'object', 'ol', 'output', 'p', 'pre', 'section',
    'script', 'table', 'tbody', 'td', 'tfoot', 'th', 'thead', 'tr', 'ul', 'video'];
var inlineElement = ['abbr', 'acronym', 'applet', 'b', 'basefont', 'bdo', 'big', 'br', 'button',
    'cite', 'code', 'del', 'dfn', 'em', 'font', 'i', 'iframe', 'img', 'input', 'ins', 'kbd', 'label', 'map',
    'object', 'q', 's', 'samp', 'script', 'select', 'small', 'span', 'strike', 'strong', 'sub', 'sup', 'textarea',
    'tt', 'u', 'var'];
var selfClosingElements = ['colgroup', 'dd', 'dt', 'li', 'options', 'p', 'td', 'tfoot', 'th',
    'thead', 'tr'];
var fillAttrs = ['checked', 'compact', 'declare', 'defer', 'disabled', 'ismap', 'multiple',
    'nohref', 'noresize', 'noshade', 'nowrap', 'readonly', 'selected'];
var cspElement = ['Script', 'style'];
var nameMapper = { 'tabindex': 'tabIndex' };
var startRegex = /^<([-A-Za-z0-9_]+)((?:\s+[a-zA-Z_:][-a-zA-Z0-9_:.]*(?:\s*=\s*(?:(?:"[^"]*")|(?:'[^']*')|[^>\s]+))?)*)\s*(\/?)>/;
var endRegex = /^<\/([-A-Za-z0-9_]+)[^>]*>/;
var attributeRegex = /([a-zA-Z_:][-a-zA-Z0-9_:.]*)(?:\s*=\s*(?:(?:"((?:\\.|[^"])*)")|(?:'((?:\\.|[^'])*)')|([^>\s]+)))?/g;
/**
 * Namespace for VirtualDOM
 * @private
 */
var VirtualDOM;
(function (VirtualDOM) {
    //tslint:disable:no-any
    function createElement(tagName, properties) {
        var children = [];
        var extended = extend({}, {}, properties, true);
        if (!isNullOrUndefined(properties)) {
            var keys = Object.keys(properties);
            if (keys.length) {
                if (extended.innerHTML) {
                    children = ConvertHTMLToJSon(extended.innerHTML);
                    delete extended.innerHTML;
                }
                if (extended.attrs) {
                    extend(extended, extended.attrs);
                    delete extended.attrs;
                }
                if (extended.styles) {
                    var valArr = extended.styles.split(';');
                    var vObj = {};
                    for (var i = 0, length_1 = valArr.length; i < length_1; i++) {
                        var cVal = valArr[i];
                        var styleSplit = cVal.split(':');
                        vObj[styleSplit[0]] = styleSplit[1];
                    }
                    delete extended.styles;
                    extended.style = vObj;
                }
            }
        }
        return {
            tagName: tagName,
            attributes: extended || {},
            children: children
        };
    }
    VirtualDOM.createElement = createElement;
    function assignParent(childrens, parent) {
        if (parent && childrens) {
            childrens.forEach(function (child) {
                if (isObject(child)) {
                    if (child.parent) {
                        detach(child);
                    }
                    child.parent = parent;
                }
                return child;
            });
        }
    }
    VirtualDOM.assignParent = assignParent;
    function append(fromElements, toElement) {
        assignParent(fromElements, toElement);
        if (toElement.children) {
            toElement.children = toElement.children.concat(fromElements);
        }
        else {
            toElement.children = [].concat(fromElements);
        }
    }
    VirtualDOM.append = append;
    function prepend(child, toElement) {
        assignParent(child, toElement);
        if (!toElement.children || !toElement.children.length) {
            toElement.children = [];
            toElement.children.concat(child);
        }
        else {
            for (var i = child.length - 1; i >= 0; i--) {
                toElement.children.unshift(child[i]);
            }
        }
    }
    VirtualDOM.prepend = prepend;
    function detach(element) {
        var parent = element.parent;
        if (parent) {
            var index = parent.children.indexOf(element);
            if (index !== -1) {
                parent.children.splice(index);
            }
        }
        return parent;
    }
    VirtualDOM.detach = detach;
    //tslint:disable-next-line
    function vDomSelector(_a) {
        var ele = _a.ele, selector = _a.selector, selectAll = _a.selectAll, immediateParent = _a.immediateParent;
        var iSelector = selector.split(' ');
        var curColl = ele;
        for (var i = 0, length_2 = iSelector.length; i < length_2; i++) {
            var isDescendant = false;
            var parent_2 = curColl;
            var curSelector = iSelector[i];
            var mapper = [];
            if (simpleRegex.test(curSelector)) {
                processSelector(curSelector, mapper);
            }
            else if (curSelector.indexOf('>') === -1) {
                var splitSelector = curSelector.match(multipleSplitRegex);
                for (var _i = 0, splitSelector_1 = splitSelector; _i < splitSelector_1.length; _i++) {
                    var curMap = splitSelector_1[_i];
                    processSelector(curMap, mapper);
                }
            }
            else if (curSelector.indexOf('>') !== -1) {
                isDescendant = true;
                var dSelector = curSelector.split('>');
                //tslint:disable-next-line
                var dParent = ele;
                var descendent = void 0;
                var flag = 0;
                for (var _b = 0, dSelector_1 = dSelector; _b < dSelector_1.length; _b++) {
                    var sel = dSelector_1[_b];
                    if (!dParent) {
                        break;
                    }
                    if (dParent.length) {
                        var descendentChild = [];
                        for (var _c = 0, dParent_1 = dParent; _c < dParent_1.length; _c++) {
                            var child = dParent_1[_c];
                            descendentChild = descendentChild.concat(vDomSelector({
                                ele: child, selector: sel,
                                selectAll: selectAll, immediateParent: !!flag
                            }));
                        }
                        descendent = descendentChild;
                    }
                    else {
                        descendent = vDomSelector({ ele: dParent, selector: sel, selectAll: selectAll, immediateParent: !!flag });
                    }
                    flag++;
                    dParent = descendent;
                }
                if (descendent) {
                    curColl = descendent;
                }
            }
            if (!isDescendant) {
                if (parent_2.length) {
                    var iCurSelector = [];
                    for (var _d = 0, parent_1 = parent_2; _d < parent_1.length; _d++) {
                        var curParent = parent_1[_d];
                        iCurSelector = iCurSelector.concat(accessElement(curParent, mapper, selectAll, immediateParent));
                    }
                    curColl = iCurSelector;
                }
                else {
                    curColl = accessElement(parent_2, mapper, selectAll, immediateParent);
                }
            }
        }
        if (selectAll) {
            return curColl;
        }
        else {
            return curColl[0] || null;
        }
    }
    VirtualDOM.vDomSelector = vDomSelector;
    function processSelector(selector, mapper) {
        var match = selector.match(idClassSelector);
        var obj = {};
        if (match) {
            var curMapper = selectMapper[match[0]];
            if (curMapper === 'className') {
                var curObj = mapper.filter(function (obj) { return obj.hasOwnProperty('className'); })[0];
                var canPush = false;
                if (!curObj) {
                    canPush = true;
                    curObj = {};
                }
                var existValue = curObj[curMapper] || '';
                curObj[curMapper] = existValue + classRegexString.replace('{value}', selector.replace('.', ''));
                if (canPush) {
                    mapper.push(curObj);
                }
            }
            else {
                obj[curMapper] = selector.replace(match[0], '');
                mapper.push(obj);
            }
        }
        else {
            mapper.push({ tagName: selector });
        }
    }
    //tslint:disable-next-line
    function accessElement(ele, mapper, selectAll, immediateParent) {
        if (ele.children) {
            //tslint:disable-next-line
            var temp_1 = ele.children.filter(function (child) {
                if (typeof (child) !== 'string') {
                    var matched = true;
                    for (var _i = 0, mapper_1 = mapper; _i < mapper_1.length; _i++) {
                        var map = mapper_1[_i];
                        var key = Object.keys(map)[0];
                        var expected = map[key];
                        var actualValue = getValue(assigner[key], child);
                        if (key === 'className') {
                            if (!(new RegExp('^' + expected + '.*$').test(actualValue))) {
                                matched = false;
                                break;
                            }
                        }
                        else if (actualValue !== expected) {
                            matched = false;
                            break;
                        }
                    }
                    return matched;
                }
                else {
                    return false;
                }
            });
            if (!immediateParent && (!temp_1.length || selectAll)) {
                ele.children.forEach(function (child) {
                    if (isObject(child)) {
                        temp_1 = temp_1.concat(accessElement(child, mapper, selectAll));
                    }
                });
            }
            return temp_1;
        }
        else {
            return [];
        }
    }
    VirtualDOM.accessElement = accessElement;
    function ConvertHTMLToJSon(htmlString) {
        var results = [];
        var isText;
        var tagArray = [];
        var nodeArray = [];
        while (htmlString) {
            isText = true;
            var lastVal = getLastValue(tagArray);
            if (!lastVal || !contains(cspElement, lastVal)) {
                if (htmlString.indexOf('</') === 0) {
                    var match = htmlString.match(endRegex);
                    if (match) {
                        htmlString = htmlString.substring(match[0].length);
                        //tslint:disable-next-line
                        match[0].replace(endRegex, iterateEndTag);
                    }
                    isText = false;
                }
                else if (htmlString.indexOf('<') === 0) {
                    var match = htmlString.match(startRegex);
                    if (match) {
                        htmlString = htmlString.substring(match[0].length);
                        //tslint:disable-next-line
                        match[0].replace(startRegex, iterateStartTag);
                    }
                    isText = false;
                }
                if (isText) {
                    var tagIndex = htmlString.indexOf('<');
                    var text = tagIndex < 0 ? htmlString : htmlString.substring(0, tagIndex);
                    htmlString = tagIndex < 0 ? '' : htmlString.substring(tagIndex);
                    iterateText(text);
                }
            }
            else {
                //tslint:disable-next-line
                htmlString = htmlString.replace(new RegExp('([\\s\\S]*?)<\/' + getLastValue(nodeArray) + '[^>]*>'), function (all, text) {
                    text = text.replace(/<!--([\s\S]*?)-->|<!\[CDATA\[([\s\S]*?)]]>/g, '$1$2');
                    iterateText(text);
                    return '';
                });
                iterateEndTag('', getLastValue(tagArray));
            }
        }
        function iterateStartTag(start, tagName, rest) {
            tagName = tagName.toLowerCase();
            if (contains(blockElements, tagName)) {
                while (getLastValue(tagArray) && contains(inlineElement, getLastValue(tagArray))) {
                    iterateEndTag('', getLastValue(tagArray));
                }
            }
            if (contains(selfClosingElements, tagName) && getLastValue(tagArray)) {
                iterateEndTag('', tagName);
            }
            var isSelfTag = contains(emptyElements, tagName);
            if (!isSelfTag) {
                tagArray.push(tagName);
            }
            var attrs = {};
            //tslint:disable-next-line
            rest.replace(attributeRegex, function (match, name) {
                var names = [];
                for (var _i = 2; _i < arguments.length; _i++) {
                    names[_i - 2] = arguments[_i];
                }
                //tslint:disable-next-line
                var val = names[2] ? names[2] :
                    names[3] ? names[3] :
                        names[4] ? names[4] :
                            contains(fillAttrs, name) ? name : '';
                if (name === 'style') {
                    var valArr = val.split(';');
                    var vObj = {};
                    for (var i = 0, length_3 = valArr.length; i < length_3; i++) {
                        var cVal = valArr[i];
                        var styleSplit = cVal.split(':');
                        vObj[styleSplit[0]] = styleSplit[1];
                    }
                    val = vObj;
                }
                name = nameMapper[name] || name;
                attrs[name] = val;
                //tslint:disable-next-line
            });
            attrs['data-id'] = getRandomId();
            var tagObject = {
                tagName: tagName,
                attributes: attrs
            };
            if (isSelfTag) {
                var parent_3 = (nodeArray[0] || results);
                if (parent_3.children === undefined) {
                    parent_3.children = [];
                }
                tagObject.parent = parent_3;
                parent_3.children.push(tagObject);
            }
            else {
                nodeArray.unshift(tagObject);
            }
        }
        function iterateEndTag(start, tagName) {
            var pos;
            if (!tagName) {
                pos = 0;
            }
            else {
                for (pos = tagArray.length - 1; pos >= 0; pos--) {
                    if (tagArray[pos] === tagName) {
                        break;
                    }
                }
            }
            if (pos >= 0) {
                for (var j = nodeArray.length - 1; j >= pos; j--) {
                    //tslint:disable-next-line
                    var node = nodeArray.shift();
                    if (nodeArray.length === 0) {
                        results.push(node);
                    }
                    else {
                        var parent_4 = nodeArray[0];
                        if (parent_4.children === undefined) {
                            parent_4.children = [];
                        }
                        node.parent = parent_4;
                        parent_4.children.push(node);
                    }
                }
                tagArray.length = pos;
            }
        }
        function iterateText(text) {
            if (nodeArray.length === 0) {
                results.push(text);
            }
            else {
                var parent_5 = nodeArray[0];
                if (parent_5.children === undefined) {
                    parent_5.children = [];
                }
                parent_5.children.push(text);
            }
        }
        return results;
    }
    VirtualDOM.ConvertHTMLToJSon = ConvertHTMLToJSon;
    //tslint:disable-next-line 
    function getLastValue(arr) {
        return arr[arr.length - 1];
    }
    function contains(arr, key) {
        return arr.indexOf(key) !== -1;
    }
    //tslint:disable-next-line
    function cloneNode(ele, deep) {
        if (isObject(ele)) {
            if (deep) {
                return extend({}, {}, ele, true);
            }
            else {
                return { tagName: ele.tagName, attributes: ele.attributes };
            }
        }
        else {
            return ele.cloneNode(deep);
        }
    }
    VirtualDOM.cloneNode = cloneNode;
    function setStyleAttribute(element, attrs) {
        if (element.attributes.style) {
            (element.attributes).style = extend({}, attrs);
        }
        else {
            element.attributes.style = extend(element.attributes.style, attrs);
        }
    }
    VirtualDOM.setStyleAttribute = setStyleAttribute;
    //tslint:enable:no-any
})(VirtualDOM || (VirtualDOM = {}));

/**
 * Functions related to dom operations.
 */
var SVG_REG = /^svg|^path|^g/;
/**
 * Function to create Html element.
 * @param tagName - Name of the tag, id and class names.
 * @param properties - Object to set properties in the element.
 * @param properties.id - To set the id to the created element.
 * @param properties.className - To add classes to the element.
 * @param properties.innerHTML - To set the innerHTML to element.
 * @param properties.styles - To set the some custom styles to element.
 * @param properties.attrs - To set the attributes to element.
 * @private
 */
function createElement(tagName, properties) {
    //tslint:disable-next-line
    var element = (SVG_REG.test(tagName) ? document.createElementNS('http://www.w3.org/2000/svg', tagName) : document.createElement(tagName));
    if (typeof (properties) === 'undefined') {
        return element;
    }
    element.innerHTML = (properties.innerHTML ? properties.innerHTML : '');
    if (properties.className !== undefined) {
        element.className = properties.className;
    }
    if (properties.id !== undefined) {
        element.id = properties.id;
    }
    if (properties.styles !== undefined) {
        element.setAttribute('style', properties.styles);
    }
    if (properties.attrs !== undefined) {
        attributes(element, properties.attrs);
    }
    return element;
}
/**
 * The function used to add the classes to array of elements
 * @param  {Element[]|NodeList} elements - An array of elements that need to add a list of classes
 * @param  {string|string[]} classes - String or array of string that need to add an individual element as a class
 * @private
 */
function addClass(elements, classes) {
    var classList = getClassList(classes);
    for (var _i = 0, _a = elements; _i < _a.length; _i++) {
        var ele = _a[_i];
        if (ele && classList) {
            for (var _b = 0, classList_1 = classList; _b < classList_1.length; _b++) {
                var className = classList_1[_b];
                if (isObject(ele)) {
                    var curClass = getValue('attributes.className', ele);
                    if (isNullOrUndefined(curClass)) {
                        setValue('attributes.className', className, ele);
                    }
                    else if (!new RegExp('\\b' + className + '\\b', 'i').test(curClass)) {
                        setValue('attributes.className', curClass + ' ' + className, ele);
                    }
                }
                else {
                    if (!ele.classList.contains(className)) {
                        ele.classList.add(className);
                    }
                }
            }
        }
    }
    return elements;
}
/**
 * The function used to add the classes to array of elements
 * @param  {Element[]|NodeList} elements - An array of elements that need to remove a list of classes
 * @param  {string|string[]} classes - String or array of string that need to add an individual element as a class
 * @private
 */
function removeClass(elements, classes) {
    var classList = getClassList(classes);
    for (var _i = 0, _a = elements; _i < _a.length; _i++) {
        var ele = _a[_i];
        if (ele && classList) {
            var flag = isObject(ele);
            var canRemove = flag ? getValue('attributes.className', ele) : ele.className !== '';
            if (canRemove) {
                for (var _b = 0, classList_2 = classList; _b < classList_2.length; _b++) {
                    var className = classList_2[_b];
                    if (flag) {
                        var classes_1 = getValue('attributes.className', ele);
                        var classArr = classes_1.split(' ');
                        var index = classArr.indexOf(className);
                        if (index !== -1) {
                            classArr.splice(index, 1);
                        }
                        setValue('attributes.className', classArr.join(' '), ele);
                    }
                    else {
                        ele.classList.remove(className);
                    }
                }
            }
        }
    }
    return elements;
}
function getClassList(classes) {
    var classList = [];
    if (typeof classes === 'string') {
        classList.push(classes);
    }
    else {
        classList = classes;
    }
    return classList;
}
/**
 * The function used to check element is visible or not.
 * @param  {Element|Node} element - An element the need to check visibility
 * @private
 */
function isVisible(element) {
    var ele = element;
    return (ele.style.visibility === '' && ele.offsetWidth > 0);
}
/**
 * The function helps to set multiple attributes to an element
 * @param  {Element|Node} element - An element that need to set attributes.
 * @param  {{[key:string]:string}} attributes - JSON Object that is going to as attributes.
 * @private
 */
function attributes(element, attributes) {
    var keys = Object.keys(attributes);
    var ele = element;
    if (ele) {
        for (var _i = 0, keys_1 = keys; _i < keys_1.length; _i++) {
            var key = keys_1[_i];
            if (isObject(ele)) {
                var iKey = key;
                if (key === 'tabindex') {
                    iKey = 'tabIndex';
                }
                ele.attributes[iKey] = attributes[key];
            }
            else {
                ele.setAttribute(key, attributes[key]);
            }
        }
    }
    return ele;
}
/**
 * The function selects the element from giving context.
 * @param  {string} selector - Selector string need fetch element from the
 * @param  {Document|Element=document} context - It is an optional type, That specifies a Dom context.
 * @private
 */
//tslint:disable-next-line
function select(selector, context, needsVDOM) {
    if (context === void 0) { context = document; }
    if (isObject(context) && needsVDOM) {
        //tslint:disable-next-line
        return VirtualDOM.vDomSelector({ ele: context, selector: selector, selectAll: false });
    }
    else {
        selector = querySelectId(selector);
        return context.querySelector(selector);
    }
}
/**
 * The function selects an array of element from the given context.
 * @param  {string} selector - Selector string need fetch element from the
 * @param  {Document|Element=document} context - It is an optional type, That specifies a Dom context.
 * @private
 */
function selectAll(selector, context, needsVDOM) {
    if (context === void 0) { context = document; }
    if (isObject(context) && !needsVDOM) {
        //tslint:disable-next-line
        return VirtualDOM.vDomSelector({ ele: context, selector: selector, selectAll: true });
    }
    else {
        selector = querySelectId(selector);
        var nodeList = context.querySelectorAll(selector);
        return nodeList;
    }
}
function querySelectId(selector) {
    var charRegex = /(!|"|\$|%|&|'|\(|\)|\*|\/|:|;|<|=|\?|@|\]|\^|`|{|}|\||\+|~)/g;
    if (selector.match(/#[0-9]/g) || selector.match(charRegex)) {
        var idList = selector.split(',');
        for (var i = 0; i < idList.length; i++) {
            var list = idList[i].split(' ');
            for (var j = 0; j < list.length; j++) {
                if (list[j].indexOf('#') > -1) {
                    if (!list[j].match(/\[.*\]/)) {
                        var splitId = list[j].split('#');
                        if (splitId[1].match(/^\d/) || splitId[1].match(charRegex)) {
                            var setId = list[j].split('.');
                            setId[0] = setId[0].replace(/#/, '[id=\'') + '\']';
                            list[j] = setId.join('.');
                        }
                    }
                }
            }
            idList[i] = list.join(' ');
        }
        return idList.join(',');
    }
    return selector;
}
/**
 * Returns single closest parent element based on class selector.
 * @param  {Element} element - An element that need to find the closest element.
 * @param  {string} selector - A classSelector of closest element.
 * @private
 */
function closest(element, selector) {
    var el = element;
    if (typeof el.closest === 'function') {
        return el.closest(selector);
    }
    while (el && el.nodeType === 1) {
        if (matches(el, selector)) {
            return el;
        }
        el = el.parentNode;
    }
    return null;
}
/**
 * Set the style attributes to Html element.
 * @param {HTMLElement} element - Element which we want to set attributes
 * @param {any} attrs - Set the given attributes to element
 * @return {void}
 * @private
 */
function setStyleAttribute(element, attrs) {
    if (attrs !== undefined) {
        if (isObject(element)) {
            // tslint:disable-next-line:no-any
            VirtualDOM.setStyleAttribute(element, attrs);
        }
        else {
            Object.keys(attrs).forEach(function (key) {
                // tslint:disable-next-line:no-any
                element.style[key] = attrs[key];
            });
        }
    }
}
/**
 * Method to check whether the element matches the given selector.
 * @param {Element} element - Element to compare with the selector.
 * @param {string} selector - String selector which element will satisfy.
 * @return {void}
 * @private
 */
function matches(element, selector) {
    //tslint:disable-next-line
    var matches = element.matches || element.msMatchesSelector || element.webkitMatchesSelector;
    if (matches) {
        return matches.call(element, selector);
    }
    else {
        return [].indexOf.call(document.querySelectorAll(selector), element) !== -1;
    }
}

var isColEName = new RegExp('\]');
/* tslint:enable:no-any */
/**
 * Base library module is common module for Framework modules like touch,keyboard and etc.,
 * @private
 */
var Base = /** @class */ (function () {
    /**
     * Base constructor accept options and element
     */
    function Base(options, element) {
        this.isRendered = false;
        this.isComplexArraySetter = false;
        this.isServerRendered = false;
        this.allowServerDataBinding = true;
        this.isProtectedOnChange = true;
        this.properties = {};
        this.changedProperties = {};
        this.oldProperties = {};
        this.bulkChanges = {};
        this.refreshing = false;
        this.ignoreCollectionWatch = false;
        // tslint:disable-next-line:no-empty
        this.finalUpdate = function () { };
        this.childChangedProperties = {};
        this.modelObserver = new Observer(this);
        if (!isUndefined(element)) {
            if ('string' === typeof (element)) {
                this.element = document.querySelector(element);
            }
            else {
                this.element = element;
            }
            if (!isNullOrUndefined(this.element)) {
                this.isProtectedOnChange = false;
                this.addInstance();
            }
        }
        if (!isUndefined(options)) {
            this.setProperties(options, true);
        }
        this.isDestroyed = false;
    }
    /** Property base section */
    /**
     * Function used to set bunch of property at a time.
     * @private
     * @param  {Object} prop - JSON object which holds components properties.
     * @param  {boolean} muteOnChange? - Specifies to true when we set properties.
     */
    Base.prototype.setProperties = function (prop, muteOnChange) {
        var prevDetection = this.isProtectedOnChange;
        this.isProtectedOnChange = !!muteOnChange;
        merge(this, prop);
        if (muteOnChange !== true) {
            merge(this.changedProperties, prop);
            this.dataBind();
        }
        this.finalUpdate();
        this.changedProperties = {};
        this.oldProperties = {};
        this.isProtectedOnChange = prevDetection;
    };
    /**
     * Calls for child element data bind
     * @param {Object} obj
     * @param {Object} parent
     * @returns {void}
     */
    // tslint:disable-next-line:no-any
    Base.callChildDataBind = function (obj, parent) {
        var keys = Object.keys(obj);
        for (var _i = 0, keys_1 = keys; _i < keys_1.length; _i++) {
            var key = keys_1[_i];
            if (parent[key] instanceof Array) {
                for (var _a = 0, _b = parent[key]; _a < _b.length; _a++) {
                    var obj_1 = _b[_a];
                    if (obj_1.dataBind !== undefined) {
                        obj_1.dataBind();
                    }
                }
            }
            else {
                parent[key].dataBind();
            }
        }
    };
    Base.prototype.clearChanges = function () {
        this.finalUpdate();
        this.changedProperties = {};
        this.oldProperties = {};
        this.childChangedProperties = {};
    };
    /**
     * Bind property changes immediately to components
     */
    Base.prototype.dataBind = function () {
        Base.callChildDataBind(this.childChangedProperties, this);
        if (Object.getOwnPropertyNames(this.changedProperties).length) {
            var prevDetection = this.isProtectedOnChange;
            var newChanges = this.changedProperties;
            var oldChanges = this.oldProperties;
            this.clearChanges();
            this.isProtectedOnChange = true;
            this.onPropertyChanged(newChanges, oldChanges);
            this.isProtectedOnChange = prevDetection;
        }
    };
    /* tslint:disable:no-any */
    Base.prototype.serverDataBind = function (newChanges) {
        {
            return;
        }
    };
    /* tslint:enable:no-any */
    Base.prototype.saveChanges = function (key, newValue, oldValue) {
        if (this.isProtectedOnChange) {
            return;
        }
        this.oldProperties[key] = oldValue;
        this.changedProperties[key] = newValue;
        this.finalUpdate();
        this.finalUpdate = setImmediate(this.dataBind.bind(this));
    };
    /** Event Base Section */
    /**
     * Adds the handler to the given event listener.
     * @param {string} eventName - A String that specifies the name of the event
     * @param {Function} listener - Specifies the call to run when the event occurs.
     * @return {void}
     */
    Base.prototype.addEventListener = function (eventName, handler) {
        this.modelObserver.on(eventName, handler);
    };
    /**
     * Removes the handler from the given event listener.
     * @param {string} eventName - A String that specifies the name of the event to remove
     * @param {Function} listener - Specifies the function to remove
     * @return {void}
     */
    Base.prototype.removeEventListener = function (eventName, handler) {
        this.modelObserver.off(eventName, handler);
    };
    /**
     * Triggers the handlers in the specified event.
     * @private
     * @param {string} eventName - Specifies the event to trigger for the specified component properties.
     * Can be a custom event, or any of the standard events.
     * @param {Event} eventProp - Additional parameters to pass on to the event properties
     * @param {Function} successHandler - this function will invoke after event successfully triggered
     * @param {Function} errorHandler - this function will invoke after event if it failured to call.
     * @return {void}
     */
    Base.prototype.trigger = function (eventName, eventProp, successHandler, errorHandler) {
        var _this = this;
        if (this.isDestroyed !== true) {
            var prevDetection = this.isProtectedOnChange;
            this.isProtectedOnChange = false;
            var data = this.modelObserver.notify(eventName, eventProp, successHandler, errorHandler);
            if (isColEName.test(eventName)) {
                var handler = getValue(eventName, this);
                if (handler) {
                    var blazor = 'Blazor';
                    if (window[blazor]) {
                        var promise = handler.call(this, eventProp);
                        if (promise && typeof promise.then === 'function') {
                            if (!successHandler) {
                                data = promise;
                            }
                            else {
                                promise.then(function (data) {
                                    if (successHandler) {
                                        data = typeof data === 'string' && _this.modelObserver.isJson(data) ?
                                            JSON.parse(data) : data;
                                        successHandler.call(_this, data);
                                    }
                                }).catch(function (data) {
                                    if (errorHandler) {
                                        data = typeof data === 'string' && _this.modelObserver.isJson(data) ? JSON.parse(data) : data;
                                        errorHandler.call(_this, data);
                                    }
                                });
                            }
                        }
                        else if (successHandler) {
                            successHandler.call(this, eventProp);
                        }
                    }
                    else {
                        handler.call(this, eventProp);
                        if (successHandler) {
                            successHandler.call(this, eventProp);
                        }
                    }
                }
                else if (successHandler) {
                    successHandler.call(this, eventProp);
                }
            }
            this.isProtectedOnChange = prevDetection;
            return data;
        }
    };
    /**
     * To maintain instance in base class
     */
    Base.prototype.addInstance = function () {
        // Add module class to the root element
        var moduleClass = 'e-' + this.getModuleName().toLowerCase();
        addClass([this.element], ['e-lib', moduleClass]);
        if (!isNullOrUndefined(this.element.ej2_instances)) {
            this.element.ej2_instances.push(this);
        }
        else {
            setValue('ej2_instances', [this], this.element);
        }
    };
    /**
     * To remove the instance from the element
     */
    Base.prototype.destroy = function () {
        var _this = this;
        this.element.ej2_instances =
            this.element.ej2_instances.filter(function (i) { return i !== _this; });
        removeClass([this.element], ['e-' + this.getModuleName()]);
        if (this.element.ej2_instances.length === 0) {
            // Remove module class from the root element
            removeClass([this.element], ['e-lib']);
        }
        this.clearChanges();
        this.modelObserver.destroy();
        this.isDestroyed = true;
    };
    return Base;
}());

/**
 * Returns the Class Object
 * @param {ClassObject} instance - instance of ClassObject
 * @param {string} curKey - key of the current instance
 * @param {Object} defaultValue - default Value
 * @param {Object[]} type
 */
function getObject(instance, curKey, defaultValue, type) {
    if (!instance.properties.hasOwnProperty(curKey) || !(instance.properties[curKey] instanceof type)) {
        instance.properties[curKey] = createInstance(type, [instance, curKey, defaultValue]);
    }
    return instance.properties[curKey];
}
/**
 * Returns the properties of the object
 * @param {Object} defaultValue
 * @param {string} curKey
 */
function propertyGetter(defaultValue, curKey) {
    return function () {
        if (!this.properties.hasOwnProperty(curKey)) {
            this.properties[curKey] = defaultValue;
        }
        return this.properties[curKey];
    };
}
/**
 * Set the properties for the object
 * @param {Object} defaultValue
 * @param {string} curKey
 */
function propertySetter(defaultValue, curKey) {
    return function (newValue) {
        if (this.properties[curKey] !== newValue) {
            var oldVal = this.properties.hasOwnProperty(curKey) ? this.properties[curKey] : defaultValue;
            this.saveChanges(curKey, newValue, oldVal);
            this.properties[curKey] = newValue;
        }
    };
}
/**
 * Returns complex objects
 */
function complexGetter(defaultValue, curKey, type) {
    return function () {
        return getObject(this, curKey, defaultValue, type);
    };
}
/**
 * Sets complex objects
 */
function complexSetter(defaultValue, curKey, type) {
    return function (newValue) {
        getObject(this, curKey, defaultValue, type).setProperties(newValue);
    };
}
/**
 * Method used to create property. General syntax below.
 * @param  {T} defaultValue? - Specifies the default value of property.
 * ```
 * @Property('TypeScript')
 * propertyName: Type;
 * ```
 * @private
 */
function Property(defaultValue) {
    return function (target, key) {
        var propertyDescriptor = {
            set: propertySetter(defaultValue, key),
            get: propertyGetter(defaultValue, key),
            enumerable: true,
            configurable: true
        };
        //new property creation
        Object.defineProperty(target, key, propertyDescriptor);
        addPropertyCollection(target, key, 'prop', defaultValue);
    };
}
/**
 * Method used to create complex property. General syntax below.
 * @param  {T} defaultValue - Specifies the default value of property.
 * @param  {Function} type - Specifies the class type of complex object.
 * ```
 * @Complex<Type>({},Type)
 * propertyName: Type;
 * ```
 * @private
 */
function Complex(defaultValue, type) {
    return function (target, key) {
        var propertyDescriptor = {
            set: complexSetter(defaultValue, key, type),
            get: complexGetter(defaultValue, key, type),
            enumerable: true,
            configurable: true
        };
        //new property creation
        Object.defineProperty(target, key, propertyDescriptor);
        addPropertyCollection(target, key, 'complexProp', defaultValue, type);
    };
}
/**
 * Method used to create event property. General syntax below.
 * @param  {Function} defaultValue? - Specifies the default value of property.
 * @param  {boolean} isComplex? - Specifies the whether it is complex object.
 * ```
 * @Event(()=>{return true;})
 * ```
 * @private
 */
function Event$1() {
    return function (target, key) {
        var eventDescriptor = {
            set: function (newValue) {
                var oldValue = this.properties[key];
                if (oldValue !== newValue) {
                    var finalContext = getParentContext(this, key);
                    if (isUndefined(oldValue) === false) {
                        finalContext.context.removeEventListener(finalContext.prefix, oldValue);
                    }
                    finalContext.context.addEventListener(finalContext.prefix, newValue);
                    this.properties[key] = newValue;
                }
            },
            get: propertyGetter(undefined, key),
            enumerable: true,
            configurable: true
        };
        Object.defineProperty(target, key, eventDescriptor);
        addPropertyCollection(target, key, 'event');
    };
}
/**
 * NotifyPropertyChanges is triggers the call back when the property has been changed.
 *
 * ```
 *  @NotifyPropertyChanges
 * class DemoClass implements INotifyPropertyChanged {
 *
 *     @Property()
 *     property1: string;
 *
 *     dataBind: () => void;
 *
 *     constructor() { }
 *
 *     onPropertyChanged(newProp: any, oldProp: any) {
 *         // Called when property changed
 *     }
 * }
 * ```
 * @private
 */
function NotifyPropertyChanges(classConstructor) {
    /** Need to code */
}
/**
 * Method  used to create the builderObject for the target component.
 * @private
 */
function addPropertyCollection(target, key, propertyType, defaultValue, type) {
    if (isUndefined(target.propList)) {
        target.propList = {
            props: [],
            complexProps: [],
            colProps: [],
            events: [],
            propNames: [],
            complexPropNames: [],
            colPropNames: [],
            eventNames: []
        };
    }
    /* tslint:disable no-any */
    target.propList[propertyType + 's'].push({
        propertyName: key,
        defaultValue: defaultValue,
        type: type
    });
    target.propList[propertyType + 'Names'].push(key);
    /* tslint:enable no-any */
}
/**
 * Returns parent options for the object
 * @param {Object} context
 * @param {string} prefix
 * @private
 */
function getParentContext(context, prefix) {
    if (context.hasOwnProperty('parentObj') === false) {
        return { context: context, prefix: prefix };
    }
    else {
        var curText = getValue('propName', context);
        if (curText) {
            prefix = curText + '-' + prefix;
        }
        return getParentContext(getValue('parentObj', context), prefix);
    }
}

var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/**
 * The Animation framework provide options to animate the html DOM elements
 * ```typescript
 *   let animeObject = new Animation({
 *      name: 'SlideLeftIn',
 *      duration: 1000
 *   });
 *   animeObject.animate('#anime1');
 *   animeObject.animate('#anime2', { duration: 500 });
 * ```
 */
var Animation = /** @class */ (function (_super) {
    __extends(Animation, _super);
    function Animation(options) {
        var _this = _super.call(this, options, undefined) || this;
        /**
         * @private
         */
        _this.easing = {
            ease: 'cubic-bezier(0.250, 0.100, 0.250, 1.000)',
            linear: 'cubic-bezier(0.250, 0.250, 0.750, 0.750)',
            easeIn: 'cubic-bezier(0.420, 0.000, 1.000, 1.000)',
            easeOut: 'cubic-bezier(0.000, 0.000, 0.580, 1.000)',
            easeInOut: 'cubic-bezier(0.420, 0.000, 0.580, 1.000)',
            elasticInOut: 'cubic-bezier(0.5,-0.58,0.38,1.81)',
            elasticIn: 'cubic-bezier(0.17,0.67,0.59,1.81)',
            elasticOut: 'cubic-bezier(0.7,-0.75,0.99,1.01)'
        };
        return _this;
    }
    Animation_1 = Animation;
    /**
     * Applies animation to the current element.
     * @param {string | HTMLElement} element - Element which needs to be animated.
     * @param {AnimationModel} options - Overriding default animation settings.
     * @return {void}
     */
    Animation.prototype.animate = function (element, options) {
        options = !options ? {} : options;
        var model = this.getModel(options);
        if (typeof element === 'string') {
            var elements = Array.prototype.slice.call(selectAll(element, document));
            for (var _i = 0, elements_1 = elements; _i < elements_1.length; _i++) {
                var element_1 = elements_1[_i];
                model.element = element_1;
                Animation_1.delayAnimation(model);
            }
        }
        else {
            model.element = element;
            Animation_1.delayAnimation(model);
        }
    };
    /**
     * Stop the animation effect on animated element.
     * @param {HTMLElement} element - Element which needs to be stop the animation.
     * @param {AnimationOptions} model - Handling the animation model at stop function.
     * @return {void}
     */
    Animation.stop = function (element, model) {
        element.style.animation = '';
        element.removeAttribute('e-animate');
        var animationId = element.getAttribute('e-animation-id');
        if (animationId) {
            var frameId = parseInt(animationId, 10);
            cancelAnimationFrame(frameId);
            element.removeAttribute('e-animation-id');
        }
        if (model && model.end) {
            model.end.call(this, model);
        }
    };
    /**
     * Set delay to animation element
     * @param {AnimationModel} model
     * @returns {void}
     */
    Animation.delayAnimation = function (model) {
        if (model.delay) {
            setTimeout(function () { Animation_1.applyAnimation(model); }, model.delay);
        }
        else {
            Animation_1.applyAnimation(model);
        }
    };
    /**
     * Triggers animation
     * @param {AnimationModel} model
     * @returns {void}
     */
    Animation.applyAnimation = function (model) {
        var _this = this;
        model.timeStamp = 0;
        var step = 0;
        var timerId = 0;
        var startTime = 0;
        var prevTimeStamp = 0;
        var duration = model.duration;
        model.element.setAttribute('e-animate', 'true');
        var startAnimation = function (timeStamp) {
            try {
                if (timeStamp) {
                    // let step: number = model.timeStamp = timeStamp - startTime;
                    /** phantomjs workaround for timestamp fix */
                    prevTimeStamp = prevTimeStamp === 0 ? timeStamp : prevTimeStamp;
                    model.timeStamp = (timeStamp + model.timeStamp) - prevTimeStamp;
                    prevTimeStamp = timeStamp;
                    /** phantomjs workaround end */
                    // trigger animation begin event
                    if (!step && model.begin) {
                        model.begin.call(_this, model);
                    }
                    step = step + 1;
                    var avg = model.timeStamp / step;
                    if (model.timeStamp < duration && model.timeStamp + avg < duration && model.element.getAttribute('e-animate')) {
                        // apply animation effect to the current element                
                        model.element.style.animation = model.name + ' ' + model.duration + 'ms ' + model.timingFunction;
                        if (model.progress) {
                            model.progress.call(_this, model);
                        }
                        // repeat requestAnimationFrame 
                        requestAnimationFrame(startAnimation);
                    }
                    else {
                        // clear requestAnimationFrame
                        cancelAnimationFrame(timerId);
                        model.element.removeAttribute('e-animation-id');
                        model.element.removeAttribute('e-animate');
                        model.element.style.animation = '';
                        if (model.end) {
                            model.end.call(_this, model);
                        }
                    }
                }
                else {
                    startTime = performance.now();
                    // set initial requestAnimationFrame
                    timerId = requestAnimationFrame(startAnimation);
                    model.element.setAttribute('e-animation-id', timerId.toString());
                }
            }
            catch (e) {
                cancelAnimationFrame(timerId);
                model.element.removeAttribute('e-animation-id');
                if (model.fail) {
                    model.fail.call(_this, e);
                }
            }
        };
        startAnimation();
    };
    /**
     * Returns Animation Model
     * @param {AnimationModel} options
     * @returns {AnimationModel}
     */
    Animation.prototype.getModel = function (options) {
        return {
            name: options.name || this.name,
            delay: options.delay || this.delay,
            duration: (options.duration !== undefined ? options.duration : this.duration),
            begin: options.begin || this.begin,
            end: options.end || this.end,
            fail: options.fail || this.fail,
            progress: options.progress || this.progress,
            timingFunction: this.easing[options.timingFunction] ? this.easing[options.timingFunction] :
                (options.timingFunction || this.easing[this.timingFunction])
        };
    };
    /**
     * @private
     */
    Animation.prototype.onPropertyChanged = function (newProp, oldProp) {
        // no code needed
    };
    /**
     * Returns module name as animation
     * @private
     */
    Animation.prototype.getModuleName = function () {
        return 'animation';
    };
    /**
     * @private
     */
    Animation.prototype.destroy = function () {
        //Override base destroy;
    };
    var Animation_1;
    __decorate([
        Property('FadeIn')
    ], Animation.prototype, "name", void 0);
    __decorate([
        Property(400)
    ], Animation.prototype, "duration", void 0);
    __decorate([
        Property('ease')
    ], Animation.prototype, "timingFunction", void 0);
    __decorate([
        Property(0)
    ], Animation.prototype, "delay", void 0);
    __decorate([
        Event$1()
    ], Animation.prototype, "progress", void 0);
    __decorate([
        Event$1()
    ], Animation.prototype, "begin", void 0);
    __decorate([
        Event$1()
    ], Animation.prototype, "end", void 0);
    __decorate([
        Event$1()
    ], Animation.prototype, "fail", void 0);
    Animation = Animation_1 = __decorate([
        NotifyPropertyChanges
    ], Animation);
    return Animation;
}(Base));

/**
 * Module loading operations
 */
var MODULE_SUFFIX = 'Module';
var ModuleLoader = /** @class */ (function () {
    function ModuleLoader(parent) {
        this.loadedModules = [];
        this.parent = parent;
    }
    /**
     * Inject required modules in component library
     * @return {void}
     * @param {ModuleDeclaration[]} requiredModules - Array of modules to be required
     * @param {Function[]} moduleList - Array of modules to be injected from sample side
     */
    ModuleLoader.prototype.inject = function (requiredModules, moduleList) {
        var reqLength = requiredModules.length;
        if (reqLength === 0) {
            this.clean();
            return;
        }
        if (this.loadedModules.length) {
            this.clearUnusedModule(requiredModules);
        }
        for (var i = 0; i < reqLength; i++) {
            var modl = requiredModules[i];
            for (var _i = 0, moduleList_1 = moduleList; _i < moduleList_1.length; _i++) {
                var module = moduleList_1[_i];
                var modName = modl.member;
                if (module.prototype.getModuleName() === modl.member && !this.isModuleLoaded(modName)) {
                    var moduleObject = createInstance(module, modl.args);
                    var memberName = this.getMemberName(modName);
                    if (modl.isProperty) {
                        setValue(memberName, module, this.parent);
                    }
                    else {
                        setValue(memberName, moduleObject, this.parent);
                    }
                    var loadedModule = modl;
                    loadedModule.member = memberName;
                    this.loadedModules.push(loadedModule);
                }
            }
        }
    };
    /**
     * To remove the created object while destroying the control
     * @return {void}
     */
    ModuleLoader.prototype.clean = function () {
        for (var _i = 0, _a = this.loadedModules; _i < _a.length; _i++) {
            var modules = _a[_i];
            if (!modules.isProperty) {
                getValue(modules.member, this.parent).destroy();
            }
        }
        this.loadedModules = [];
    };
    /**
     * Removes all unused modules
     * @param {ModuleDeclaration[]} moduleList
     * @returns {void}
     */
    ModuleLoader.prototype.clearUnusedModule = function (moduleList) {
        var _this = this;
        var usedModules = moduleList.map(function (arg) { return _this.getMemberName(arg.member); });
        var removableModule = this.loadedModules.filter(function (module) {
            return usedModules.indexOf(module.member) === -1;
        });
        for (var _i = 0, removableModule_1 = removableModule; _i < removableModule_1.length; _i++) {
            var mod = removableModule_1[_i];
            if (!mod.isProperty) {
                getValue(mod.member, this.parent).destroy();
            }
            this.loadedModules.splice(this.loadedModules.indexOf(mod), 1);
            deleteObject(this.parent, mod.member);
        }
    };
    /**
     * To get the name of the member.
     * @param {string} name
     * @returns {string}
     */
    ModuleLoader.prototype.getMemberName = function (name) {
        return name[0].toLowerCase() + name.substring(1) + MODULE_SUFFIX;
    };
    /**
     * Returns boolean based on whether the module specified is loaded or not
     * @param {string} modName
     * @returns {boolean}
     */
    ModuleLoader.prototype.isModuleLoaded = function (modName) {
        for (var _i = 0, _a = this.loadedModules; _i < _a.length; _i++) {
            var mod = _a[_i];
            if (mod.member === this.getMemberName(modName)) {
                return true;
            }
        }
        return false;
    };
    return ModuleLoader;
}());

/**
 * To detect the changes for inner properties.
 * @private
 */
var ChildProperty = /** @class */ (function () {
    function ChildProperty(parent, propName, defaultValue, isArray) {
        this.isComplexArraySetter = false;
        this.properties = {};
        this.changedProperties = {};
        this.childChangedProperties = {};
        this.oldProperties = {};
        // tslint:disable-next-line:no-empty
        this.finalUpdate = function () { };
        this.callChildDataBind = getValue('callChildDataBind', Base);
        this.parentObj = parent;
        this.controlParent = this.parentObj.controlParent || this.parentObj;
        this.propName = propName;
        this.isParentArray = isArray;
        this.setProperties(defaultValue, true);
    }
    /**
     * Updates the property changes
     * @param {boolean} val
     * @param {string} propName
     * @returns {void}
     */
    ChildProperty.prototype.updateChange = function (val, propName) {
        if (val === true) {
            this.parentObj.childChangedProperties[propName] = val;
        }
        else {
            delete this.parentObj.childChangedProperties[propName];
        }
        if (this.parentObj.updateChange) {
            this.parentObj.updateChange(val, this.parentObj.propName);
        }
    };
    /**
     * Updates time out duration
     */
    ChildProperty.prototype.updateTimeOut = function () {
        if (this.parentObj.updateTimeOut) {
            this.parentObj.finalUpdate();
            this.parentObj.updateTimeOut();
        }
        else {
            var changeTime_1 = setTimeout(this.parentObj.dataBind.bind(this.parentObj));
            var clearUpdate = function () {
                clearTimeout(changeTime_1);
            };
            this.finalUpdate = clearUpdate;
        }
    };
    /**
     * Clears changed properties
     */
    ChildProperty.prototype.clearChanges = function () {
        this.finalUpdate();
        this.updateChange(false, this.propName);
        this.oldProperties = {};
        this.changedProperties = {};
    };
    /**
     * Set property changes
     * @param {Object} prop
     * @param {boolean} muteOnChange
     * {void}
     */
    ChildProperty.prototype.setProperties = function (prop, muteOnChange) {
        if (muteOnChange === true) {
            merge(this, prop);
            this.updateChange(false, this.propName);
            this.clearChanges();
        }
        else {
            merge(this, prop);
        }
    };
    /**
     * Binds data
     */
    ChildProperty.prototype.dataBind = function () {
        this.callChildDataBind(this.childChangedProperties, this);
        if (this.isParentArray) {
            var curIndex = this.parentObj[this.propName].indexOf(this);
            if (Object.keys(this.changedProperties).length) {
                setValue(this.propName + '.' + curIndex, this.changedProperties, this.parentObj.changedProperties);
                setValue(this.propName + '.' + curIndex, this.oldProperties, this.parentObj.oldProperties);
            }
        }
        else {
            this.parentObj.changedProperties[this.propName] = this.changedProperties;
            this.parentObj.oldProperties[this.propName] = this.oldProperties;
        }
        this.clearChanges();
    };
    /**
     * Saves changes to newer values
     * @param {string} key
     * @param {Object} newValue
     * @param {Object} oldValue
     * @returns {void}
     */
    ChildProperty.prototype.saveChanges = function (key, newValue, oldValue, restrictServerDataBind) {
        if (this.controlParent.isProtectedOnChange) {
            return;
        }
        if (!restrictServerDataBind) {
            this.serverDataBind(key, newValue, true);
        }
        this.oldProperties[key] = oldValue;
        this.changedProperties[key] = newValue;
        this.updateChange(true, this.propName);
        this.finalUpdate();
        this.updateTimeOut();
    };
    ChildProperty.prototype.serverDataBind = function (key, value, isSaveChanges, action) {
    };
    ChildProperty.prototype.getParentKey = function (isSaveChanges) {
        // tslint:disable-next-line:no-any
        var index = '';
        var propName = this.propName;
        /* istanbul ignore next */
        if (this.isParentArray) {
            index = this.parentObj[this.propName].indexOf(this);
            var valueLength = this.parentObj[this.propName].length;
            valueLength = isSaveChanges ? valueLength : (valueLength > 0 ? valueLength - 1 : 0);
            index = index !== -1 ? '-' + index : '-' + valueLength;
            propName = propName + index;
        }
        if (this.controlParent !== this.parentObj) {
            propName = this.parentObj.getParentKey() + '.' + this.propName + index;
        }
        return propName;
    };
    return ChildProperty;
}());

var __extends$1 = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate$1 = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var componentCount = 0;
var lastPageID;
var lastHistoryLen = 0;
/**
 * Base class for all Essential JavaScript components
 */
var Component = /** @class */ (function (_super) {
    __extends$1(Component, _super);
    /**
     * Initialize the constructor for component base
     */
    function Component(options, selector) {
        var _this = _super.call(this, options, selector) || this;
        _this.randomId = uniqueID();
        /**
         * string template option for Blazor template rendering
         * @private
         */
        _this.isStringTemplate = false;
        _this.needsID = false;
        _this.isReactHybrid = false;
        if (isNullOrUndefined(_this.enableRtl)) {
            _this.setProperties({ 'enableRtl': rightToLeft }, true);
        }
        if (isNullOrUndefined(_this.locale)) {
            _this.setProperties({ 'locale': defaultCulture }, true);
        }
        _this.moduleLoader = new ModuleLoader(_this);
        _this.localObserver = new Observer(_this);
        // tslint:disable-next-line:no-function-constructor-with-string-args
        onIntlChange.on('notifyExternalChange', _this.detectFunction, _this, _this.randomId);
        if (!isUndefined(selector)) {
            _this.appendTo();
        }
        return _this;
    }
    Component.prototype.requiredModules = function () {
        return [];
    };
    /**
     * Destroys the sub modules while destroying the widget
     */
    Component.prototype.destroy = function () {
        if (this.isDestroyed) {
            return;
        }
        if (this.enablePersistence) {
            this.setPersistData();
        }
        this.localObserver.destroy();
        if (this.refreshing) {
            return;
        }
        removeClass([this.element], ['e-control']);
        this.trigger('destroyed', { cancel: false });
        _super.prototype.destroy.call(this);
        this.moduleLoader.clean();
        onIntlChange.off('notifyExternalChange', this.detectFunction, this.randomId);
    };
    /**
     * Applies all the pending property changes and render the component again.
     */
    Component.prototype.refresh = function () {
        this.refreshing = true;
        this.moduleLoader.clean();
        this.destroy();
        this.clearChanges();
        this.localObserver = new Observer(this);
        this.preRender();
        this.injectModules();
        this.render();
        this.refreshing = false;
    };
    /* istanbul ignore next */
    Component.prototype.accessMount = function () {
        if (this.mount && !this.isReactHybrid) {
            this.mount();
        }
    };
    /**
     * Returns the route element of the component
     */
    /* istanbul ignore next */
    Component.prototype.getRootElement = function () {
        if (this.isReactHybrid) {
            return this.actualElement;
        }
        else {
            return this.element;
        }
    };
    /**
     * Returns the persistence data for component
     */
    /* istanbul ignore next */
    //tslint:disable:no-any
    Component.prototype.getLocalData = function () {
        var eleId = this.getModuleName() + this.element.id;
        {
            return window.localStorage.getItem(eleId);
        }
    };
    /**
     * Appends the control within the given HTML element
     * @param {string | HTMLElement} selector - Target element where control needs to be appended
     */
    Component.prototype.appendTo = function (selector) {
        if (!isNullOrUndefined(selector) && typeof (selector) === 'string') {
            this.element = select(selector, document);
        }
        else if (!isNullOrUndefined(selector)) {
            this.element = selector;
        }
        if (!isNullOrUndefined(this.element)) {
            var moduleClass = 'e-' + this.getModuleName().toLowerCase();
            addClass([this.element], ['e-control', moduleClass]);
            this.isProtectedOnChange = false;
            if (this.needsID && !this.element.id) {
                this.element.id = this.getUniqueID(this.getModuleName());
            }
            if (this.enablePersistence) {
                this.mergePersistData();
                window.addEventListener('unload', this.setPersistData.bind(this));
            }
            var inst = getValue('ej2_instances', this.element);
            if (!inst || inst.indexOf(this) === -1) {
                _super.prototype.addInstance.call(this);
            }
            this.preRender();
            this.injectModules();
            this.render();
            if (!this.mount) {
                this.trigger('created');
            }
            else {
                this.accessMount();
            }
        }
    };
    /**
     * It is used to process the post rendering functionalities to a component.
     */
    Component.prototype.renderComplete = function (wrapperElement) {
        this.isRendered = true;
    };
    /**
     * When invoked, applies the pending property changes immediately to the component.
     */
    Component.prototype.dataBind = function () {
        this.injectModules();
        _super.prototype.dataBind.call(this);
    };
    /**
     * Attach one or more  event handler to the current component context.
     * It is used for internal handling event internally within the component only.
     * @param {BoundOptions[]| string} event - It is  optional type either to  Set the collection of event list or the eventName.
     * @param {Function} handler - optional parameter Specifies the handler to run when the event occurs
     * @param {Object} context - optional parameter Specifies the context to be bind in the handler.
     * @return {void}
     * @private
     */
    Component.prototype.on = function (event, handler, context) {
        if (typeof event === 'string') {
            this.localObserver.on(event, handler, context);
        }
        else {
            for (var _i = 0, event_1 = event; _i < event_1.length; _i++) {
                var arg = event_1[_i];
                this.localObserver.on(arg.event, arg.handler, arg.context);
            }
        }
    };
    /**
     * To remove one or more event handler that has been attached with the on() method.
     * @param {BoundOptions[]| string} event - It is  optional type either to  Set the collection of event list or the eventName.
     * @param {Function} handler - optional parameter Specifies the function to run when the event occurs
     * @return {void}
     * @private
     */
    Component.prototype.off = function (event, handler) {
        if (typeof event === 'string') {
            this.localObserver.off(event, handler);
        }
        else {
            for (var _i = 0, event_2 = event; _i < event_2.length; _i++) {
                var arg = event_2[_i];
                this.localObserver.off(arg.event, arg.handler);
            }
        }
    };
    /**
     * To notify the handlers in the specified event.
     * @param {string} property - Specifies the event to be notify.
     * @param {Object} argument - Additional parameters to pass while calling the handler.
     * @return {void}
     * @private
     */
    Component.prototype.notify = function (property, argument) {
        if (this.isDestroyed !== true) {
            this.localObserver.notify(property, argument);
        }
    };
    /**
     * Get injected modules
     * @private
     */
    Component.prototype.getInjectedModules = function () {
        return this.injectedModules;
    };
    /**
     * Dynamically injects the required modules to the component.
     */
    Component.Inject = function () {
        var moduleList = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            moduleList[_i] = arguments[_i];
        }
        if (!this.prototype.injectedModules) {
            this.prototype.injectedModules = [];
        }
        for (var i = 0; i < moduleList.length; i++) {
            if (this.prototype.injectedModules.indexOf(moduleList[i]) === -1) {
                this.prototype.injectedModules.push(moduleList[i]);
            }
        }
    };
    /**
     * This is a instance method to create an element.
     * @private
     */
    /* istanbul ignore next */
    //tslint:disable:no-any
    Component.prototype.createElement = function (tagName, prop, isVDOM) {
        if (isVDOM && this.isReactHybrid) {
            if (prop) {
                prop = {};
            }
            prop['data-id'] = getRandomId();
            return VirtualDOM.createElement(tagName, prop);
        }
        else {
            return createElement(tagName, prop);
        }
    };
    /**
     *
     * @param handler - handler to be triggered after state Updated.
     * @param argument - Arguments to be passed to caller.
     * @private
     */
    /* istanbul ignore next */
    //tslint:disable:no-any
    Component.prototype.triggerStateChange = function (handler, argument) {
        if (this.isReactHybrid) {
            //tslint:disable:no-any
            this.setState();
            this.currentContext = { calls: handler, args: argument };
        }
    };
    // tslint: enable: no-any
    Component.prototype.injectModules = function () {
        if (this.injectedModules && this.injectedModules.length) {
            this.moduleLoader.inject(this.requiredModules(), this.injectedModules);
        }
    };
    Component.prototype.detectFunction = function (args) {
        var prop = Object.keys(args);
        if (prop.length) {
            this[prop[0]] = args[prop[0]];
        }
    };
    Component.prototype.mergePersistData = function () {
        var data;
        {
            data = window.localStorage.getItem(this.getModuleName() + this.element.id);
        }
        if (!(isNullOrUndefined(data) || (data === ''))) {
            this.setProperties(JSON.parse(data), true);
        }
    };
    Component.prototype.setPersistData = function () {
        if (!this.isDestroyed) {
            {
                window.localStorage.setItem(this.getModuleName() + this.element.id, this.getPersistData());
            }
        }
    };
    //tslint:disable-next-line
    Component.prototype.renderReactTemplates = function () {
        //No Code
    };
    //tslint:disable-next-line
    Component.prototype.clearTemplate = function (templateName, index) {
        //No Code
    };
    Component.prototype.getUniqueID = function (definedName) {
        if (this.isHistoryChanged()) {
            componentCount = 0;
        }
        lastPageID = this.pageID(location.href);
        lastHistoryLen = history.length;
        return definedName + '_' + lastPageID + '_' + componentCount++;
    };
    Component.prototype.pageID = function (url) {
        var hash = 0;
        if (url.length === 0) {
            return hash;
        }
        for (var i = 0; i < url.length; i++) {
            var char = url.charCodeAt(i);
            hash = ((hash << 5) - hash) + char;
            hash = hash & hash; // Convert to 32bit integer
        }
        return Math.abs(hash);
    };
    Component.prototype.isHistoryChanged = function () {
        return lastPageID !== this.pageID(location.href) || lastHistoryLen !== history.length;
    };
    Component.prototype.addOnPersist = function (options) {
        var _this = this;
        var persistObj = {};
        for (var _i = 0, options_1 = options; _i < options_1.length; _i++) {
            var key = options_1[_i];
            var objValue = void 0;
            objValue = getValue(key, this);
            if (!isUndefined(objValue)) {
                setValue(key, this.getActualProperties(objValue), persistObj);
            }
        }
        return JSON.stringify(persistObj, function (key, value) {
            return _this.getActualProperties(value);
        });
    };
    Component.prototype.getActualProperties = function (obj) {
        if (obj instanceof ChildProperty) {
            return getValue('properties', obj);
        }
        else {
            return obj;
        }
    };
    Component.prototype.ignoreOnPersist = function (options) {
        return JSON.stringify(this.iterateJsonProperties(this.properties, options));
    };
    Component.prototype.iterateJsonProperties = function (obj, ignoreList) {
        var newObj = {};
        var _loop_1 = function (key) {
            if (ignoreList.indexOf(key) === -1) {
                // tslint:disable-next-line:no-any
                var value = obj[key];
                if (typeof value === 'object' && !(value instanceof Array)) {
                    var newList = ignoreList.filter(function (str) {
                        return new RegExp(key + '.').test(str);
                    }).map(function (str) {
                        return str.replace(key + '.', '');
                    });
                    newObj[key] = this_1.iterateJsonProperties(this_1.getActualProperties(value), newList);
                }
                else {
                    newObj[key] = value;
                }
            }
        };
        var this_1 = this;
        for (var _i = 0, _a = Object.keys(obj); _i < _a.length; _i++) {
            var key = _a[_i];
            _loop_1(key);
        }
        return newObj;
    };
    __decorate$1([
        Property(false)
    ], Component.prototype, "enablePersistence", void 0);
    __decorate$1([
        Property()
    ], Component.prototype, "enableRtl", void 0);
    __decorate$1([
        Property()
    ], Component.prototype, "locale", void 0);
    Component = __decorate$1([
        NotifyPropertyChanges
    ], Component);
    return Component;
}(Base));
//Function handling for page navigation detection 
/* istanbul ignore next */
(function () {
    if (typeof window !== 'undefined') {
        window.addEventListener('popstate', 
        /* istanbul ignore next */
        function () {
            componentCount = 0;
        });
    }
})();

var __extends$2 = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate$2 = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var defaultPosition = { left: 0, top: 0, bottom: 0, right: 0 };
var isDraggedObject = { isDragged: false };
/**
 * Specifies the position coordinates
 */
var Position = /** @class */ (function (_super) {
    __extends$2(Position, _super);
    function Position() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate$2([
        Property(0)
    ], Position.prototype, "left", void 0);
    __decorate$2([
        Property(0)
    ], Position.prototype, "top", void 0);
    return Position;
}(ChildProperty));
/**
 * Draggable Module provides support to enable draggable functionality in Dom Elements.
 * ```html
 * <div id='drag'>Draggable</div>
 * <script>
 * var ele = document.getElementById('drag');
 * var drag:Draggable = new Draggable(ele,{
 *     clone:false,
 *     drag: function(e) {
 *      //drag handler code.
 *      },
 *     handle:'.class'
 * });
 * </script>
 * ```
 */
var Draggable = /** @class */ (function (_super) {
    __extends$2(Draggable, _super);
    function Draggable(element, options) {
        var _this = _super.call(this, options, element) || this;
        _this.dragLimit = Draggable_1.getDefaultPosition();
        _this.borderWidth = Draggable_1.getDefaultPosition();
        _this.padding = Draggable_1.getDefaultPosition();
        _this.diffX = 0;
        _this.prevLeft = 0;
        _this.prevTop = 0;
        _this.dragProcessStarted = false;
        /* tslint:disable no-any */
        _this.tapHoldTimer = 0;
        _this.externalInitialize = false;
        _this.diffY = 0;
        _this.parentScrollX = 0;
        _this.parentScrollY = 0;
        _this.droppables = {};
        _this.bind();
        return _this;
    }
    Draggable_1 = Draggable;
    Draggable.prototype.bind = function () {
        this.toggleEvents();
        if (Browser.isIE) {
            addClass([this.element], 'e-block-touch');
        }
        this.droppables[this.scope] = {};
    };
    Draggable.getDefaultPosition = function () {
        return extend({}, defaultPosition);
    };
    Draggable.prototype.toggleEvents = function (isUnWire) {
        var ele;
        if (!isUndefined(this.handle)) {
            ele = select(this.handle, this.element);
        }
        var handler = (this.enableTapHold && Browser.isDevice && Browser.isTouch) ? this.mobileInitialize : this.initialize;
        if (isUnWire) {
            EventHandler.remove(ele || this.element, Browser.touchStartEvent, handler);
        }
        else {
            EventHandler.add(ele || this.element, Browser.touchStartEvent, handler, this);
        }
    };
    /* istanbul ignore next */
    Draggable.prototype.mobileInitialize = function (evt) {
        var _this = this;
        var target = evt.currentTarget;
        this.tapHoldTimer = setTimeout(function () {
            _this.externalInitialize = true;
            _this.removeTapholdTimer();
            _this.initialize(evt, target);
        }, this.tapHoldThreshold);
        EventHandler.add(document, Browser.touchMoveEvent, this.removeTapholdTimer, this);
        EventHandler.add(document, Browser.touchEndEvent, this.removeTapholdTimer, this);
    };
    /* istanbul ignore next */
    Draggable.prototype.removeTapholdTimer = function () {
        clearTimeout(this.tapHoldTimer);
        EventHandler.remove(document, Browser.touchMoveEvent, this.removeTapholdTimer);
        EventHandler.remove(document, Browser.touchEndEvent, this.removeTapholdTimer);
    };
    /* istanbul ignore next */
    Draggable.prototype.getScrollableParent = function (element, axis) {
        var scroll = { 'vertical': 'scrollHeight', 'horizontal': 'scrollWidth' };
        var client = { 'vertical': 'clientHeight', 'horizontal': 'clientWidth' };
        if (isNullOrUndefined(element)) {
            return null;
        }
        if (element[scroll[axis]] > element[client[axis]]) {
            if (axis === 'vertical' ? element.scrollTop > 0 : element.scrollLeft > 0) {
                if (axis === 'vertical') {
                    this.parentScrollY = this.parentScrollY +
                        (this.parentScrollY === 0 ? element.scrollTop : element.scrollTop - this.parentScrollY);
                    this.tempScrollHeight = element.scrollHeight;
                }
                else {
                    this.parentScrollX = this.parentScrollX +
                        (this.parentScrollX === 0 ? element.scrollLeft : element.scrollLeft - this.parentScrollX);
                    this.tempScrollWidth = element.scrollWidth;
                }
                if (!isNullOrUndefined(element)) {
                    return this.getScrollableParent(element.parentNode, axis);
                }
                else {
                    return element;
                }
            }
            else {
                return this.getScrollableParent(element.parentNode, axis);
            }
        }
        else {
            return this.getScrollableParent(element.parentNode, axis);
        }
    };
    Draggable.prototype.getScrollableValues = function () {
        this.parentScrollX = 0;
        this.parentScrollY = 0;
        var isModalDialog = this.element.classList.contains('e-dialog') && this.element.classList.contains('e-dlg-modal');
        var verticalScrollParent = this.getScrollableParent(this.element.parentNode, 'vertical');
        var horizontalScrollParent = this.getScrollableParent(this.element.parentNode, 'horizontal');
    };
    Draggable.prototype.initialize = function (evt, curTarget) {
        this.currentStateTarget = evt.target;
        if (this.isDragStarted()) {
            return;
        }
        else {
            this.isDragStarted(true);
            this.externalInitialize = false;
        }
        this.target = (evt.currentTarget || curTarget);
        this.dragProcessStarted = false;
        if (this.abort) {
            /* tslint:disable no-any */
            var abortSelectors = this.abort;
            if (typeof abortSelectors === 'string') {
                abortSelectors = [abortSelectors];
            }
            for (var i = 0; i < abortSelectors.length; i++) {
                if (!isNullOrUndefined(closest(evt.target, abortSelectors[i]))) {
                    /* istanbul ignore next */
                    if (this.isDragStarted()) {
                        this.isDragStarted(true);
                    }
                    return;
                }
            }
        }
        if (this.preventDefault && !isUndefined(evt.changedTouches) && evt.type !== 'touchstart') {
            evt.preventDefault();
        }
        this.element.setAttribute('aria-grabbed', 'true');
        var intCoord = this.getCoordinates(evt);
        this.initialPosition = { x: intCoord.pageX, y: intCoord.pageY };
        if (!this.clone) {
            var pos = this.element.getBoundingClientRect();
            this.getScrollableValues();
            if (evt.clientX === evt.pageX) {
                this.parentScrollX = 0;
            }
            if (evt.clientY === evt.pageY) {
                this.parentScrollY = 0;
            }
            this.relativeXPosition = intCoord.pageX - (pos.left + this.parentScrollX);
            this.relativeYPosition = intCoord.pageY - (pos.top + this.parentScrollY);
        }
        if (this.externalInitialize) {
            this.intDragStart(evt);
        }
        else {
            EventHandler.add(document, Browser.touchMoveEvent, this.intDragStart, this);
            EventHandler.add(document, Browser.touchEndEvent, this.intDestroy, this);
        }
        this.toggleEvents(true);
        if (evt.type !== 'touchstart' && this.isPreventSelect) {
            document.body.classList.add('e-prevent-select');
        }
        this.externalInitialize = false;
        EventHandler.trigger(document.documentElement, Browser.touchStartEvent, evt);
    };
    Draggable.prototype.intDragStart = function (evt) {
        this.removeTapholdTimer();
        var isChangeTouch = !isUndefined(evt.changedTouches);
        if (isChangeTouch && (evt.changedTouches.length !== 1)) {
            return;
        }
        if (isChangeTouch) {
            evt.preventDefault();
        }
        var intCordinate = this.getCoordinates(evt);
        var pos;
        var styleProp = getComputedStyle(this.element);
        this.margin = {
            left: parseInt(styleProp.marginLeft, 10),
            top: parseInt(styleProp.marginTop, 10),
            right: parseInt(styleProp.marginRight, 10),
            bottom: parseInt(styleProp.marginBottom, 10),
        };
        var element = this.element;
        if (this.clone && this.dragTarget) {
            var intClosest = closest(evt.target, this.dragTarget);
            if (!isNullOrUndefined(intClosest)) {
                element = intClosest;
            }
        }
        /* istanbul ignore next */
        if (this.isReplaceDragEle) {
            element = this.currentStateCheck(evt.target, element);
        }
        this.offset = this.calculateParentPosition(element);
        this.position = this.getMousePosition(evt, this.isDragScroll);
        var x = this.initialPosition.x - intCordinate.pageX;
        var y = this.initialPosition.y - intCordinate.pageY;
        var distance = Math.sqrt((x * x) + (y * y));
        if ((distance >= this.distance || this.externalInitialize)) {
            var ele = this.getHelperElement(evt);
            if (!ele || isNullOrUndefined(ele)) {
                return;
            }
            var dragTargetElement = this.helperElement = ele;
            this.parentClientRect = this.calculateParentPosition(dragTargetElement.offsetParent);
            if (this.dragStart) {
                var curTarget = this.getProperTargetElement(evt);
                var args = {
                    event: evt,
                    element: element,
                    target: curTarget,
                    bindEvents:  null,
                    dragElement: dragTargetElement
                };
                this.trigger('dragStart', args);
            }
            if (this.dragArea) {
                this.setDragArea();
            }
            else {
                this.dragLimit = { left: 0, right: 0, bottom: 0, top: 0 };
                this.borderWidth = { top: 0, left: 0 };
            }
            pos = { left: this.position.left - this.parentClientRect.left, top: this.position.top - this.parentClientRect.top };
            if (this.clone && !this.enableTailMode) {
                this.diffX = this.position.left - this.offset.left;
                this.diffY = this.position.top - this.offset.top;
            }
            this.getScrollableValues();
            // when drag element has margin-top
            var styles = getComputedStyle(element);
            var marginTop = parseFloat(styles.marginTop);
            /* istanbul ignore next */
            if (this.clone && marginTop !== 0) {
                pos.top += marginTop;
            }
            var posValue = this.getProcessedPositionValue({
                top: (pos.top - this.diffY) + 'px',
                left: (pos.left - this.diffX) + 'px'
            });
            this.dragElePosition = { top: pos.top, left: pos.left };
            setStyleAttribute(dragTargetElement, this.getDragPosition({ position: 'absolute', left: posValue.left, top: posValue.top }));
            EventHandler.remove(document, Browser.touchMoveEvent, this.intDragStart);
            EventHandler.remove(document, Browser.touchEndEvent, this.intDestroy);
            {
                this.bindDragEvents(dragTargetElement);
            }
        }
    };
    Draggable.prototype.bindDragEvents = function (dragTargetElement) {
        if (isVisible(dragTargetElement)) {
            EventHandler.add(document, Browser.touchMoveEvent, this.intDrag, this);
            EventHandler.add(document, Browser.touchEndEvent, this.intDragStop, this);
            this.setGlobalDroppables(false, this.element, dragTargetElement);
        }
        else {
            this.toggleEvents();
            document.body.classList.remove('e-prevent-select');
        }
    };
    Draggable.prototype.elementInViewport = function (el) {
        this.top = el.offsetTop;
        this.left = el.offsetLeft;
        this.width = el.offsetWidth;
        this.height = el.offsetHeight;
        while (el.offsetParent) {
            el = el.offsetParent;
            this.top += el.offsetTop;
            this.left += el.offsetLeft;
        }
        return (this.top >= window.pageYOffset &&
            this.left >= window.pageXOffset &&
            (this.top + this.height) <= (window.pageYOffset + window.innerHeight) &&
            (this.left + this.width) <= (window.pageXOffset + window.innerWidth));
    };
    Draggable.prototype.getProcessedPositionValue = function (value) {
        if (this.queryPositionInfo) {
            return this.queryPositionInfo(value);
        }
        return value;
    };
    Draggable.prototype.calculateParentPosition = function (ele) {
        if (isNullOrUndefined(ele)) {
            return { left: 0, top: 0 };
        }
        var rect = ele.getBoundingClientRect();
        var style = getComputedStyle(ele);
        return {
            left: (rect.left + window.pageXOffset) - parseInt(style.marginLeft, 10),
            top: (rect.top + window.pageYOffset) - parseInt(style.marginTop, 10)
        };
    };
    // tslint:disable-next-line:max-func-body-length
    Draggable.prototype.intDrag = function (evt) {
        if (!isUndefined(evt.changedTouches) && (evt.changedTouches.length !== 1)) {
            return;
        }
        var left;
        var top;
        this.position = this.getMousePosition(evt, this.isDragScroll);
        var docHeight = this.getDocumentWidthHeight('Height');
        if (docHeight < this.position.top) {
            this.position.top = docHeight;
        }
        var docWidth = this.getDocumentWidthHeight('Width');
        if (docWidth < this.position.left) {
            this.position.left = docWidth;
        }
        if (this.drag) {
            var curTarget = this.getProperTargetElement(evt);
            this.trigger('drag', { event: evt, element: this.element, target: curTarget });
        }
        var eleObj = this.checkTargetElement(evt);
        if (eleObj.target && eleObj.instance) {
            /* tslint:disable no-any */
            var flag = true;
            if (this.hoverObject) {
                if (this.hoverObject.instance !== eleObj.instance) {
                    this.triggerOutFunction(evt, eleObj);
                }
                else {
                    flag = false;
                }
            }
            if (flag) {
                eleObj.instance.dragData[this.scope] = this.droppables[this.scope];
                eleObj.instance.intOver(evt, eleObj.target);
                this.hoverObject = eleObj;
            }
        }
        else if (this.hoverObject) {
            this.triggerOutFunction(evt, eleObj);
        }
        var helperElement = this.droppables[this.scope].helper;
        this.parentClientRect = this.calculateParentPosition(this.helperElement.offsetParent);
        var tLeft = this.parentClientRect.left;
        var tTop = this.parentClientRect.top;
        var intCoord = this.getCoordinates(evt);
        var pagex = intCoord.pageX;
        var pagey = intCoord.pageY;
        var dLeft = this.position.left - this.diffX;
        var dTop = this.position.top - this.diffY;
        var styles = getComputedStyle(helperElement);
        var marginTop = parseFloat(styles.marginTop);
        if (this.dragArea) {
            if (this.pageX !== pagex || this.skipDistanceCheck) {
                var helperWidth = helperElement.offsetWidth + (parseFloat(styles.marginLeft)
                    + parseFloat(styles.marginRight));
                if (this.dragLimit.left > dLeft && dLeft > 0) {
                    left = this.dragLimit.left;
                }
                else if (this.dragLimit.right + window.pageXOffset < dLeft + helperWidth && dLeft > 0) {
                    left = dLeft - (dLeft - this.dragLimit.right) + window.pageXOffset - helperWidth;
                }
                else {
                    left = dLeft < 0 ? this.dragLimit.left : dLeft;
                }
            }
            if (this.pageY !== pagey || this.skipDistanceCheck) {
                var helperHeight = helperElement.offsetHeight + (parseFloat(styles.marginTop)
                    + parseFloat(styles.marginBottom));
                if (this.dragLimit.top > dTop && dTop > 0) {
                    top = this.dragLimit.top;
                }
                else if (this.dragLimit.bottom + window.pageYOffset < dTop + helperHeight && dTop > 0) {
                    top = dTop - (dTop - this.dragLimit.bottom) + window.pageYOffset - helperHeight;
                }
                else {
                    top = dTop < 0 ? this.dragLimit.top : dTop;
                }
            }
        }
        else {
            left = dLeft;
            top = dTop;
        }
        var iTop = tTop + this.borderWidth.top;
        var iLeft = tLeft + this.borderWidth.left;
        if (this.dragProcessStarted) {
            if (isNullOrUndefined(top)) {
                top = this.prevTop;
            }
            if (isNullOrUndefined(left)) {
                left = this.prevLeft;
            }
        }
        var draEleTop;
        var draEleLeft;
        if (this.dragArea) {
            this.dragLimit.top = this.clone ? this.dragLimit.top : 0;
            draEleTop = (top - iTop) < 0 ? this.dragLimit.top : (top - iTop);
            draEleLeft = (left - iLeft) < 0 ? this.dragElePosition.left : (left - iLeft);
            // when drag-element has margin-top
            /* istanbul ignore next */
            if (marginTop > 0) {
                if (this.clone) {
                    draEleTop += this.element.offsetTop;
                    if (dTop < 0) {
                        if ((this.element.offsetTop + dTop) >= 0) {
                            draEleTop = this.element.offsetTop + dTop;
                        }
                        else {
                            draEleTop -= this.element.offsetTop;
                        }
                    }
                    draEleTop = (this.dragLimit.bottom < draEleTop) ? this.dragLimit.bottom : draEleTop;
                }
                if ((top - iTop) < 0) {
                    if (dTop + marginTop + (helperElement.offsetHeight - iTop) >= 0) {
                        var tempDraEleTop = this.dragLimit.top + dTop - iTop;
                        if ((tempDraEleTop + marginTop + iTop) < 0) {
                            draEleTop -= marginTop + iTop;
                        }
                        else {
                            draEleTop = tempDraEleTop;
                        }
                    }
                    else {
                        draEleTop -= marginTop + iTop;
                    }
                }
            }
        }
        else {
            draEleTop = top - iTop;
            draEleLeft = left - iLeft;
        }
        var dragValue = this.getProcessedPositionValue({ top: draEleTop + 'px', left: draEleLeft + 'px' });
        setStyleAttribute(helperElement, this.getDragPosition(dragValue));
        if (!this.elementInViewport(helperElement) && this.enableAutoScroll) {
            this.helperElement.scrollIntoView();
        }
        this.dragProcessStarted = true;
        this.prevLeft = left;
        this.prevTop = top;
        this.position.left = left;
        this.position.top = top;
        this.pageX = pagex;
        this.pageY = pagey;
    };
    Draggable.prototype.triggerOutFunction = function (evt, eleObj) {
        this.hoverObject.instance.intOut(evt, eleObj.target);
        this.hoverObject.instance.dragData[this.scope] = null;
        this.hoverObject = null;
    };
    Draggable.prototype.getDragPosition = function (dragValue) {
        var temp = extend({}, dragValue);
        if (this.axis) {
            if (this.axis === 'x') {
                delete temp.top;
            }
            else if (this.axis === 'y') {
                delete temp.left;
            }
        }
        return temp;
    };
    Draggable.prototype.getDocumentWidthHeight = function (str) {
        var docBody = document.body;
        var docEle = document.documentElement;
        var returnValue = Math.max(docBody['scroll' + str], docEle['scroll' + str], docBody['offset' + str], docEle['offset' + str], docEle['client' + str]);
        return returnValue;
    };
    Draggable.prototype.intDragStop = function (evt) {
        this.dragProcessStarted = false;
        if (!isUndefined(evt.changedTouches) && (evt.changedTouches.length !== 1)) {
            return;
        }
        var type = ['touchend', 'pointerup', 'mouseup'];
        if (type.indexOf(evt.type) !== -1) {
            if (this.dragStop) {
                var curTarget = this.getProperTargetElement(evt);
                this.trigger('dragStop', { event: evt, element: this.element, target: curTarget, helper: this.helperElement });
            }
            this.intDestroy(evt);
        }
        else {
            this.element.setAttribute('aria-grabbed', 'false');
        }
        var eleObj = this.checkTargetElement(evt);
        if (eleObj.target && eleObj.instance) {
            eleObj.instance.dragStopCalled = true;
            eleObj.instance.dragData[this.scope] = this.droppables[this.scope];
            eleObj.instance.intDrop(evt, eleObj.target);
        }
        this.setGlobalDroppables(true);
        document.body.classList.remove('e-prevent-select');
    };
    /**
     * @private
     */
    Draggable.prototype.intDestroy = function (evt) {
        this.dragProcessStarted = false;
        this.toggleEvents();
        document.body.classList.remove('e-prevent-select');
        this.element.setAttribute('aria-grabbed', 'false');
        EventHandler.remove(document, Browser.touchMoveEvent, this.intDragStart);
        EventHandler.remove(document, Browser.touchEndEvent, this.intDragStop);
        EventHandler.remove(document, Browser.touchEndEvent, this.intDestroy);
        EventHandler.remove(document, Browser.touchMoveEvent, this.intDrag);
        if (this.isDragStarted()) {
            this.isDragStarted(true);
        }
    };
    // triggers when property changed
    Draggable.prototype.onPropertyChanged = function (newProp, oldProp) {
        //No Code to handle
    };
    Draggable.prototype.getModuleName = function () {
        return 'draggable';
    };
    Draggable.prototype.isDragStarted = function (change) {
        if (change) {
            isDraggedObject.isDragged = !isDraggedObject.isDragged;
        }
        return isDraggedObject.isDragged;
    };
    Draggable.prototype.setDragArea = function () {
        var eleWidthBound;
        var eleHeightBound;
        var top = 0;
        var left = 0;
        var ele;
        var type = typeof this.dragArea;
        if (type === 'string') {
            ele = select(this.dragArea);
        }
        else {
            ele = this.dragArea;
        }
        if (ele) {
            var elementArea = ele.getBoundingClientRect();
            eleWidthBound = ele.scrollWidth ? ele.scrollWidth : elementArea.right - elementArea.left;
            eleHeightBound = ele.scrollHeight ? ele.scrollHeight : elementArea.bottom - elementArea.top;
            var keys = ['Top', 'Left', 'Bottom', 'Right'];
            var styles = getComputedStyle(ele);
            for (var i = 0; i < keys.length; i++) {
                var key = keys[i];
                var tborder = styles['border' + key + 'Width'];
                var tpadding = styles['padding' + key];
                var lowerKey = key.toLowerCase();
                this.borderWidth[lowerKey] = isNaN(parseFloat(tborder)) ? 0 : parseFloat(tborder);
                this.padding[lowerKey] = isNaN(parseFloat(tpadding)) ? 0 : parseFloat(tpadding);
            }
            top = elementArea.top;
            left = elementArea.left;
            this.dragLimit.left = left + this.borderWidth.left + this.padding.left;
            this.dragLimit.top = ele.offsetTop + this.borderWidth.top + this.padding.top;
            this.dragLimit.right = left + eleWidthBound - (this.borderWidth.right + this.padding.right);
            this.dragLimit.bottom = top + eleHeightBound - (this.borderWidth.bottom + this.padding.bottom);
        }
    };
    Draggable.prototype.getProperTargetElement = function (evt) {
        var intCoord = this.getCoordinates(evt);
        var ele;
        var prevStyle = this.helperElement.style.pointerEvents || '';
        if (compareElementParent(evt.target, this.helperElement) || evt.type.indexOf('touch') !== -1) {
            this.helperElement.style.pointerEvents = 'none';
            ele = document.elementFromPoint(intCoord.clientX, intCoord.clientY);
            this.helperElement.style.pointerEvents = prevStyle;
        }
        else {
            ele = evt.target;
        }
        return ele;
    };
    /* istanbul ignore next */
    Draggable.prototype.currentStateCheck = function (ele, oldEle) {
        var elem;
        if (!isNullOrUndefined(this.currentStateTarget) && this.currentStateTarget !== ele) {
            elem = this.currentStateTarget;
        }
        else {
            elem = !isNullOrUndefined(oldEle) ? oldEle : ele;
        }
        return elem;
    };
    Draggable.prototype.getMousePosition = function (evt, isdragscroll) {
        /* tslint:disable no-any */
        var dragEle = evt.srcElement !== undefined ? evt.srcElement : evt.target;
        var intCoord = this.getCoordinates(evt);
        var pageX;
        var pageY;
        var isOffsetParent = isNullOrUndefined(dragEle.offsetParent);
        /* istanbul ignore next */
        if (isdragscroll) {
            pageX = this.clone ? intCoord.pageX :
                (intCoord.pageX + (isOffsetParent ? 0 : dragEle.offsetParent.scrollLeft)) - this.relativeXPosition;
            pageY = this.clone ? intCoord.pageY :
                (intCoord.pageY + (isOffsetParent ? 0 : dragEle.offsetParent.scrollTop)) - this.relativeYPosition;
        }
        else {
            pageX = this.clone ? intCoord.pageX : (intCoord.pageX + window.pageXOffset) - this.relativeXPosition;
            pageY = this.clone ? intCoord.pageY : (intCoord.pageY + window.pageYOffset) - this.relativeYPosition;
        }
        if (!this.clone) {
            this.getScrollableValues();
            pageY -= this.tempScrollHeight ? this.parentScrollY : 0;
            pageX -= this.tempScrollWidth ? this.parentScrollY : 0;
        }
        return {
            left: pageX - (this.margin.left + this.cursorAt.left),
            top: pageY - (this.margin.top + this.cursorAt.top)
        };
    };
    Draggable.prototype.getCoordinates = function (evt) {
        if (evt.type.indexOf('touch') > -1) {
            return evt.changedTouches[0];
        }
        return evt;
    };
    Draggable.prototype.getHelperElement = function (evt) {
        var element;
        if (this.clone) {
            if (this.helper) {
                element = this.helper({ sender: evt, element: this.target });
            }
            else {
                element = createElement('div', { className: 'e-drag-helper e-block-touch', innerHTML: 'Draggable' });
                document.body.appendChild(element);
            }
        }
        else {
            element = this.element;
        }
        return element;
    };
    Draggable.prototype.setGlobalDroppables = function (reset, drag, helper) {
        this.droppables[this.scope] = reset ? null : {
            draggable: drag,
            helper: helper,
            draggedElement: this.element
        };
    };
    Draggable.prototype.checkTargetElement = function (evt) {
        var target = this.getProperTargetElement(evt);
        var dropIns = this.getDropInstance(target);
        if (!dropIns && target && !isNullOrUndefined(target.parentNode)) {
            var parent_1 = closest(target.parentNode, '.e-droppable') || target.parentElement;
            if (parent_1) {
                dropIns = this.getDropInstance(parent_1);
            }
        }
        return { target: target, instance: dropIns };
    };
    Draggable.prototype.getDropInstance = function (ele) {
        var name = 'getModuleName';
        var drop;
        var eleInst = ele && ele.ej2_instances;
        if (eleInst) {
            for (var _i = 0, eleInst_1 = eleInst; _i < eleInst_1.length; _i++) {
                var inst = eleInst_1[_i];
                if (inst[name]() === 'droppable') {
                    drop = inst;
                    break;
                }
            }
        }
        return drop;
    };
    Draggable.prototype.destroy = function () {
        this.toggleEvents(true);
        _super.prototype.destroy.call(this);
    };
    var Draggable_1;
    __decorate$2([
        Complex({}, Position)
    ], Draggable.prototype, "cursorAt", void 0);
    __decorate$2([
        Property(true)
    ], Draggable.prototype, "clone", void 0);
    __decorate$2([
        Property()
    ], Draggable.prototype, "dragArea", void 0);
    __decorate$2([
        Property()
    ], Draggable.prototype, "isDragScroll", void 0);
    __decorate$2([
        Property()
    ], Draggable.prototype, "isReplaceDragEle", void 0);
    __decorate$2([
        Property(true)
    ], Draggable.prototype, "isPreventSelect", void 0);
    __decorate$2([
        Event$1()
    ], Draggable.prototype, "drag", void 0);
    __decorate$2([
        Event$1()
    ], Draggable.prototype, "dragStart", void 0);
    __decorate$2([
        Event$1()
    ], Draggable.prototype, "dragStop", void 0);
    __decorate$2([
        Property(1)
    ], Draggable.prototype, "distance", void 0);
    __decorate$2([
        Property()
    ], Draggable.prototype, "handle", void 0);
    __decorate$2([
        Property()
    ], Draggable.prototype, "abort", void 0);
    __decorate$2([
        Property()
    ], Draggable.prototype, "helper", void 0);
    __decorate$2([
        Property('default')
    ], Draggable.prototype, "scope", void 0);
    __decorate$2([
        Property('')
    ], Draggable.prototype, "dragTarget", void 0);
    __decorate$2([
        Property()
    ], Draggable.prototype, "axis", void 0);
    __decorate$2([
        Property()
    ], Draggable.prototype, "queryPositionInfo", void 0);
    __decorate$2([
        Property(false)
    ], Draggable.prototype, "enableTailMode", void 0);
    __decorate$2([
        Property(false)
    ], Draggable.prototype, "skipDistanceCheck", void 0);
    __decorate$2([
        Property(true)
    ], Draggable.prototype, "preventDefault", void 0);
    __decorate$2([
        Property(false)
    ], Draggable.prototype, "enableAutoScroll", void 0);
    __decorate$2([
        Property(false)
    ], Draggable.prototype, "enableTapHold", void 0);
    __decorate$2([
        Property(750)
    ], Draggable.prototype, "tapHoldThreshold", void 0);
    Draggable = Draggable_1 = __decorate$2([
        NotifyPropertyChanges
    ], Draggable);
    return Draggable;
}(Base));

var __extends$3 = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate$3 = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/**
 * Droppable Module provides support to enable droppable functionality in Dom Elements.
 * ```html
 * <div id='drop'>Droppable</div>
 * <script>
 * let ele:HTMLElement = document.getElementById('drop');
 * var drag:Droppable = new Droppable(ele,{
 *     accept:'.drop',
 *     drop: function(e) {
 *      //drop handler code.
 *     }
 * });
 * </script>
 * ```
 */
var Droppable = /** @class */ (function (_super) {
    __extends$3(Droppable, _super);
    function Droppable(element, options) {
        var _this = _super.call(this, options, element) || this;
        _this.mouseOver = false;
        _this.dragData = {};
        _this.dragStopCalled = false;
        _this.bind();
        return _this;
    }
    Droppable.prototype.bind = function () {
        this.wireEvents();
    };
    Droppable.prototype.wireEvents = function () {
        EventHandler.add(this.element, Browser.touchEndEvent, this.intDrop, this);
    };
    // triggers when property changed
    Droppable.prototype.onPropertyChanged = function (newProp, oldProp) {
        //No Code to handle
    };
    Droppable.prototype.getModuleName = function () {
        return 'droppable';
    };
    Droppable.prototype.intOver = function (event, element) {
        if (!this.mouseOver) {
            var drag = this.dragData[this.scope];
            this.trigger('over', { event: event, target: element, dragData: drag });
            this.mouseOver = true;
        }
    };
    Droppable.prototype.intOut = function (event, element) {
        if (this.mouseOver) {
            this.trigger('out', { evt: event, target: element });
            this.mouseOver = false;
        }
    };
    Droppable.prototype.intDrop = function (evt, element) {
        if (!this.dragStopCalled) {
            return;
        }
        else {
            this.dragStopCalled = false;
        }
        var accept = true;
        var drag = this.dragData[this.scope];
        var isDrag = drag ? (drag.helper && isVisible(drag.helper)) : false;
        var area;
        if (isDrag) {
            area = this.isDropArea(evt, drag.helper, element);
            if (this.accept) {
                accept = matches(drag.helper, this.accept);
            }
        }
        if (isDrag && this.drop && area.canDrop && accept) {
            this.trigger('drop', { event: evt, target: area.target, droppedElement: drag.helper, dragData: drag });
        }
        this.mouseOver = false;
    };
    Droppable.prototype.isDropArea = function (evt, helper, element) {
        var area = { canDrop: true, target: element || evt.target };
        var isTouch = evt.type === 'touchend';
        if (isTouch || area.target === helper) {
            helper.style.display = 'none';
            var coord = isTouch ? (evt.changedTouches[0]) : evt;
            var ele = document.elementFromPoint(coord.clientX, coord.clientY);
            area.canDrop = false;
            area.canDrop = compareElementParent(ele, this.element);
            if (area.canDrop) {
                area.target = ele;
            }
            helper.style.display = '';
        }
        return area;
    };
    Droppable.prototype.destroy = function () {
        EventHandler.remove(this.element, Browser.touchEndEvent, this.intDrop);
        _super.prototype.destroy.call(this);
    };
    __decorate$3([
        Property()
    ], Droppable.prototype, "accept", void 0);
    __decorate$3([
        Property('default')
    ], Droppable.prototype, "scope", void 0);
    __decorate$3([
        Event$1()
    ], Droppable.prototype, "drop", void 0);
    __decorate$3([
        Event$1()
    ], Droppable.prototype, "over", void 0);
    __decorate$3([
        Event$1()
    ], Droppable.prototype, "out", void 0);
    Droppable = __decorate$3([
        NotifyPropertyChanges
    ], Droppable);
    return Droppable;
}(Base));

var __extends$4 = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate$4 = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var keyCode = {
    'backspace': 8,
    'tab': 9,
    'enter': 13,
    'shift': 16,
    'control': 17,
    'alt': 18,
    'pause': 19,
    'capslock': 20,
    'space': 32,
    'escape': 27,
    'pageup': 33,
    'pagedown': 34,
    'end': 35,
    'home': 36,
    'leftarrow': 37,
    'uparrow': 38,
    'rightarrow': 39,
    'downarrow': 40,
    'insert': 45,
    'delete': 46,
    'f1': 112,
    'f2': 113,
    'f3': 114,
    'f4': 115,
    'f5': 116,
    'f6': 117,
    'f7': 118,
    'f8': 119,
    'f9': 120,
    'f10': 121,
    'f11': 122,
    'f12': 123,
    'semicolon': 186,
    'plus': 187,
    'comma': 188,
    'minus': 189,
    'dot': 190,
    'forwardslash': 191,
    'graveaccent': 192,
    'openbracket': 219,
    'backslash': 220,
    'closebracket': 221,
    'singlequote': 222
};
/**
 * KeyboardEvents class enables you to bind key action desired key combinations for ex., Ctrl+A, Delete, Alt+Space etc.
 * ```html
 * <div id='testEle'>  </div>;
 * <script>
 *   let node: HTMLElement = document.querySelector('#testEle');
 *   let kbInstance = new KeyboardEvents({
 *       element: node,
 *       keyConfigs:{ selectAll : 'ctrl+a' },
 *       keyAction: function (e:KeyboardEvent, action:string) {
 *           // handler function code
 *       }
 *   });
 * </script>
 * ```
 */
var KeyboardEvents = /** @class */ (function (_super) {
    __extends$4(KeyboardEvents, _super);
    /**
     * Initializes the KeyboardEvents
     * @param {HTMLElement} element
     * @param {KeyboardEventsModel} options
     */
    function KeyboardEvents(element, options) {
        var _this = _super.call(this, options, element) || this;
        /**
         * To handle a key press event returns null
         */
        _this.keyPressHandler = function (e) {
            var isAltKey = e.altKey;
            var isCtrlKey = e.ctrlKey;
            var isShiftKey = e.shiftKey;
            var curkeyCode = e.which;
            var keys = Object.keys(_this.keyConfigs);
            for (var _i = 0, keys_1 = keys; _i < keys_1.length; _i++) {
                var key = keys_1[_i];
                var configCollection = _this.keyConfigs[key].split(',');
                for (var _a = 0, configCollection_1 = configCollection; _a < configCollection_1.length; _a++) {
                    var rconfig = configCollection_1[_a];
                    var rKeyObj = KeyboardEvents_1.getKeyConfigData(rconfig.trim());
                    if (isAltKey === rKeyObj.altKey && isCtrlKey === rKeyObj.ctrlKey &&
                        isShiftKey === rKeyObj.shiftKey && curkeyCode === rKeyObj.keyCode) {
                        e.action = key;
                        if (_this.keyAction) {
                            _this.keyAction(e);
                        }
                    }
                }
            }
        };
        _this.bind();
        return _this;
    }
    KeyboardEvents_1 = KeyboardEvents;
    /**
     * Unwire bound events and destroy the instance.
     * @return {void}
     */
    KeyboardEvents.prototype.destroy = function () {
        this.unwireEvents();
        _super.prototype.destroy.call(this);
    };
    /**
     * Function can be used to specify certain action if a property is changed
     * @param newProp
     * @param oldProp
     * @returns {void}
     * @private
     */
    KeyboardEvents.prototype.onPropertyChanged = function (newProp, oldProp) {
        // No code are needed
    };
    KeyboardEvents.prototype.bind = function () {
        this.wireEvents();
    };
    /**
     * To get the module name, returns 'keyboard'.
     * @private
     */
    KeyboardEvents.prototype.getModuleName = function () {
        return 'keyboard';
    };
    /**
     * Wiring event handlers to events
     */
    KeyboardEvents.prototype.wireEvents = function () {
        this.element.addEventListener(this.eventName, this.keyPressHandler);
    };
    /**
     * Unwiring event handlers to events
     */
    KeyboardEvents.prototype.unwireEvents = function () {
        this.element.removeEventListener(this.eventName, this.keyPressHandler);
    };
    /**
     * To get the key configuration data
     * @param {string} config - configuration data
     * returns {KeyData}
     */
    KeyboardEvents.getKeyConfigData = function (config) {
        if (config in this.configCache) {
            return this.configCache[config];
        }
        var keys = config.toLowerCase().split('+');
        var keyData = {
            altKey: (keys.indexOf('alt') !== -1 ? true : false),
            ctrlKey: (keys.indexOf('ctrl') !== -1 ? true : false),
            shiftKey: (keys.indexOf('shift') !== -1 ? true : false),
            keyCode: null
        };
        if (keys[keys.length - 1].length > 1 && !!Number(keys[keys.length - 1])) {
            keyData.keyCode = Number(keys[keys.length - 1]);
        }
        else {
            keyData.keyCode = KeyboardEvents_1.getKeyCode(keys[keys.length - 1]);
        }
        KeyboardEvents_1.configCache[config] = keyData;
        return keyData;
    };
    // Return the keycode value as string 
    KeyboardEvents.getKeyCode = function (keyVal) {
        return keyCode[keyVal] || keyVal.toUpperCase().charCodeAt(0);
    };
    var KeyboardEvents_1;
    KeyboardEvents.configCache = {};
    __decorate$4([
        Property({})
    ], KeyboardEvents.prototype, "keyConfigs", void 0);
    __decorate$4([
        Property('keyup')
    ], KeyboardEvents.prototype, "eventName", void 0);
    __decorate$4([
        Event$1()
    ], KeyboardEvents.prototype, "keyAction", void 0);
    KeyboardEvents = KeyboardEvents_1 = __decorate$4([
        NotifyPropertyChanges
    ], KeyboardEvents);
    return KeyboardEvents;
}(Base));

/**
 * L10n modules provides localized text for different culture.
 * ```typescript
 * import {setCulture} from '@syncfusion/ts-base-library';
 * //load global locale object common for all components.
 * L10n.load({
 *    'fr-BE': {
 *       'button': {
 *            'check': 'vérifié'
 *        }
 *    }
 * });
 * //set globale default locale culture.
 * setCulture('fr-BE');
 * let instance: L10n = new L10n('button', {
 *    check: 'checked'
 * });
 * //Get locale text for current property.
 * instance.getConstant('check');
 * //Change locale culture in a component.
 * instance.setLocale('en-US');
 * ```
 */
var L10n = /** @class */ (function () {
    /**
     * Constructor
     */
    function L10n(controlName, localeStrings, locale) {
        this.controlName = controlName;
        this.localeStrings = localeStrings;
        this.setLocale(locale || defaultCulture);
    }
    /**
     * Sets the locale text
     * @param {string} locale
     * @returns {void}
     */
    L10n.prototype.setLocale = function (locale) {
        var intLocale = this.intGetControlConstant(L10n.locale, locale);
        this.currentLocale = intLocale || this.localeStrings;
    };
    /**
     * Sets the global locale for all components.
     * @param {Object} localeObject - specifies the localeObject to be set as global locale.
     */
    L10n.load = function (localeObject) {
        this.locale = extend(this.locale, localeObject, {}, true);
    };
    /**
     * Returns current locale text for the property based on the culture name and control name.
     * @param {string} propertyName - specifies the property for which localize text to be returned.
     * @return string
     */
    L10n.prototype.getConstant = function (prop) {
        // Removed conditional operator because this method does not return correct value when passing 0 as value in localization
        if (!isNullOrUndefined(this.currentLocale[prop])) {
            return this.currentLocale[prop];
        }
        else {
            return this.localeStrings[prop] || '';
        }
    };
    /**
     * Returns the control constant object for current object and the locale specified.
     * @param {Object} curObject
     * @param {string} locale
     * @returns {Object}
     */
    L10n.prototype.intGetControlConstant = function (curObject, locale) {
        if ((curObject)[locale]) {
            return (curObject)[locale][this.controlName];
        }
        return null;
    };
    L10n.locale = {};
    return L10n;
}());

var __extends$5 = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate$5 = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/**
 * SwipeSettings is a framework module that provides support to handle swipe event like swipe up, swipe right, etc..,
 */
var SwipeSettings = /** @class */ (function (_super) {
    __extends$5(SwipeSettings, _super);
    function SwipeSettings() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate$5([
        Property(50)
    ], SwipeSettings.prototype, "swipeThresholdDistance", void 0);
    return SwipeSettings;
}(ChildProperty));
var swipeRegex = /(Up|Down)/;
/**
 * Touch class provides support to handle the touch event like tap, double tap, tap hold, etc..,
 * ```typescript
 *    let node: HTMLElement;
 * let touchObj: Touch = new Touch({
 *    element: node,
 *    tap: function (e) {
 *        // tap handler function code
 *    }
 *    tapHold: function (e) {
 *        // tap hold handler function code
 *    }
 *    scroll: function (e) {
 *        // scroll handler function code
 *    }
 *    swipe: function (e) {
 *        // swipe handler function code
 *    }
 * });
 * ```
 */
var Touch = /** @class */ (function (_super) {
    __extends$5(Touch, _super);
    /* End-Properties */
    function Touch(element, options) {
        var _this = _super.call(this, options, element) || this;
        _this.touchAction = true;
        _this.tapCount = 0;
        _this.startEvent = function (evt) {
            if (_this.touchAction === true) {
                var point = _this.updateChangeTouches(evt);
                if (evt.changedTouches !== undefined) {
                    _this.touchAction = false;
                }
                _this.isTouchMoved = false;
                _this.movedDirection = '';
                _this.startPoint = _this.lastMovedPoint = { clientX: point.clientX, clientY: point.clientY };
                _this.startEventData = point;
                _this.hScrollLocked = _this.vScrollLocked = false;
                _this.tStampStart = Date.now();
                _this.timeOutTapHold = setTimeout(function () { _this.tapHoldEvent(evt); }, _this.tapHoldThreshold);
                EventHandler.add(_this.element, Browser.touchMoveEvent, _this.moveEvent, _this);
                EventHandler.add(_this.element, Browser.touchEndEvent, _this.endEvent, _this);
                EventHandler.add(_this.element, Browser.touchCancelEvent, _this.cancelEvent, _this);
            }
        };
        _this.moveEvent = function (evt) {
            var point = _this.updateChangeTouches(evt);
            _this.movedPoint = point;
            _this.isTouchMoved = !(point.clientX === _this.startPoint.clientX && point.clientY === _this.startPoint.clientY);
            var eScrollArgs = {};
            if (_this.isTouchMoved) {
                clearTimeout(_this.timeOutTapHold);
                _this.calcScrollPoints(evt);
                var scrollArg = {
                    startEvents: _this.startEventData,
                    originalEvent: evt, startX: _this.startPoint.clientX,
                    startY: _this.startPoint.clientY, distanceX: _this.distanceX,
                    distanceY: _this.distanceY, scrollDirection: _this.scrollDirection,
                    velocity: _this.getVelocity(point)
                };
                eScrollArgs = extend(eScrollArgs, {}, scrollArg);
                _this.trigger('scroll', eScrollArgs);
                _this.lastMovedPoint = { clientX: point.clientX, clientY: point.clientY };
            }
        };
        _this.cancelEvent = function (evt) {
            clearTimeout(_this.timeOutTapHold);
            clearTimeout(_this.timeOutTap);
            _this.tapCount = 0;
            _this.swipeFn(evt);
            EventHandler.remove(_this.element, Browser.touchCancelEvent, _this.cancelEvent);
        };
        _this.endEvent = function (evt) {
            _this.swipeFn(evt);
            if (!_this.isTouchMoved) {
                if (typeof _this.tap === 'function') {
                    _this.trigger('tap', { originalEvent: evt, tapCount: ++_this.tapCount });
                    _this.timeOutTap = setTimeout(function () {
                        _this.tapCount = 0;
                    }, _this.tapThreshold);
                }
            }
            _this.modeclear();
        };
        _this.swipeFn = function (evt) {
            clearTimeout(_this.timeOutTapHold);
            clearTimeout(_this.timeOutTap);
            var point = _this.updateChangeTouches(evt);
            var diffX = point.clientX - _this.startPoint.clientX;
            var diffY = point.clientY - _this.startPoint.clientY;
            diffX = Math.floor(diffX < 0 ? -1 * diffX : diffX);
            diffY = Math.floor(diffY < 0 ? -1 * diffY : diffX);
            _this.isTouchMoved = diffX > 1 || diffY > 1;
            // tslint:disable-next-line:no-any
            var isFirefox = (/Mozilla|Firefox/).test(Browser.userAgent);
            if (isFirefox && point.clientX === 0 && point.clientY === 0 && evt.type === 'mouseup') {
                _this.isTouchMoved = false;
            }
            _this.endPoint = point;
            _this.calcPoints(evt);
            var swipeArgs = {
                originalEvent: evt,
                startEvents: _this.startEventData,
                startX: _this.startPoint.clientX,
                startY: _this.startPoint.clientY,
                distanceX: _this.distanceX, distanceY: _this.distanceY, swipeDirection: _this.movedDirection,
                velocity: _this.getVelocity(point)
            };
            if (_this.isTouchMoved) {
                var eSwipeArgs = void 0;
                var tDistance = _this.swipeSettings.swipeThresholdDistance;
                eSwipeArgs = extend(eSwipeArgs, _this.defaultArgs, swipeArgs);
                var canTrigger = false;
                var ele = _this.element;
                var scrollBool = _this.isScrollable(ele);
                var moved = swipeRegex.test(_this.movedDirection);
                if ((tDistance < _this.distanceX && !moved) || (tDistance < _this.distanceY && moved)) {
                    if (!scrollBool) {
                        canTrigger = true;
                    }
                    else {
                        canTrigger = _this.checkSwipe(ele, moved);
                    }
                }
                if (canTrigger) {
                    _this.trigger('swipe', eSwipeArgs);
                }
            }
            _this.modeclear();
        };
        _this.modeclear = function () {
            _this.modeClear = setTimeout(function () {
                _this.touchAction = true;
            }, (typeof _this.tap !== 'function' ? 0 : 20));
            _this.lastTapTime = new Date().getTime();
            EventHandler.remove(_this.element, Browser.touchMoveEvent, _this.moveEvent);
            EventHandler.remove(_this.element, Browser.touchEndEvent, _this.endEvent);
            EventHandler.remove(_this.element, Browser.touchCancelEvent, _this.cancelEvent);
        };
        _this.bind();
        return _this;
    }
    // triggers when property changed 
    /**
     * @private
     * @param newProp
     * @param oldProp
     */
    Touch.prototype.onPropertyChanged = function (newProp, oldProp) {
        //No Code to handle
    };
    Touch.prototype.bind = function () {
        this.wireEvents();
        if (Browser.isIE) {
            this.element.classList.add('e-block-touch');
        }
    };
    /**
     * To destroy the touch instance.
     * @return {void}
     */
    Touch.prototype.destroy = function () {
        this.unwireEvents();
        _super.prototype.destroy.call(this);
    };
    // Need to changes the event binding once we updated the event handler.
    Touch.prototype.wireEvents = function () {
        EventHandler.add(this.element, Browser.touchStartEvent, this.startEvent, this);
    };
    Touch.prototype.unwireEvents = function () {
        EventHandler.remove(this.element, Browser.touchStartEvent, this.startEvent);
    };
    /**
     * Returns module name as touch
     * @returns {string}
     * @private
     */
    Touch.prototype.getModuleName = function () {
        return 'touch';
    };
    /**
     * Returns if the HTML element is Scrollable.
     * @param {HTMLElement} element - HTML Element to check if Scrollable.
     * @returns {boolean}
     */
    Touch.prototype.isScrollable = function (element) {
        var eleStyle = getComputedStyle(element);
        var style = eleStyle.overflow + eleStyle.overflowX + eleStyle.overflowY;
        if ((/(auto|scroll)/).test(style)) {
            return true;
        }
        return false;
    };
    Touch.prototype.tapHoldEvent = function (evt) {
        this.tapCount = 0;
        this.touchAction = true;
        var eTapArgs;
        EventHandler.remove(this.element, Browser.touchMoveEvent, this.moveEvent);
        EventHandler.remove(this.element, Browser.touchEndEvent, this.endEvent);
        eTapArgs = { originalEvent: evt };
        this.trigger('tapHold', eTapArgs);
        EventHandler.remove(this.element, Browser.touchCancelEvent, this.cancelEvent);
    };
    Touch.prototype.calcPoints = function (evt) {
        var point = this.updateChangeTouches(evt);
        this.defaultArgs = { originalEvent: evt };
        this.distanceX = Math.abs((Math.abs(point.clientX) - Math.abs(this.startPoint.clientX)));
        this.distanceY = Math.abs((Math.abs(point.clientY) - Math.abs(this.startPoint.clientY)));
        if (this.distanceX > this.distanceY) {
            this.movedDirection = (point.clientX > this.startPoint.clientX) ? 'Right' : 'Left';
        }
        else {
            this.movedDirection = (point.clientY < this.startPoint.clientY) ? 'Up' : 'Down';
        }
    };
    Touch.prototype.calcScrollPoints = function (evt) {
        var point = this.updateChangeTouches(evt);
        this.defaultArgs = { originalEvent: evt };
        this.distanceX = Math.abs((Math.abs(point.clientX) - Math.abs(this.lastMovedPoint.clientX)));
        this.distanceY = Math.abs((Math.abs(point.clientY) - Math.abs(this.lastMovedPoint.clientY)));
        if ((this.distanceX > this.distanceY || this.hScrollLocked === true) && this.vScrollLocked === false) {
            this.scrollDirection = (point.clientX > this.lastMovedPoint.clientX) ? 'Right' : 'Left';
            this.hScrollLocked = true;
        }
        else {
            this.scrollDirection = (point.clientY < this.lastMovedPoint.clientY) ? 'Up' : 'Down';
            this.vScrollLocked = true;
        }
    };
    Touch.prototype.getVelocity = function (pnt) {
        var newX = pnt.clientX;
        var newY = pnt.clientY;
        var newT = Date.now();
        var xDist = newX - this.startPoint.clientX;
        var yDist = newY - this.startPoint.clientX;
        var interval = newT - this.tStampStart;
        return Math.sqrt(xDist * xDist + yDist * yDist) / interval;
    };
    // tslint:disable-next-line:no-any
    Touch.prototype.checkSwipe = function (ele, flag) {
        var keys = ['scroll', 'offset'];
        var temp = flag ? ['Height', 'Top'] : ['Width', 'Left'];
        if ((ele[keys[0] + temp[0]] <= ele[keys[1] + temp[0]])) {
            return true;
        }
        return (ele[keys[0] + temp[1]] === 0) ||
            (ele[keys[1] + temp[0]] + ele[keys[0] + temp[1]] >= ele[keys[0] + temp[0]]);
    };
    Touch.prototype.updateChangeTouches = function (evt) {
        // tslint:disable-next-line:max-line-length
        var point = evt.changedTouches && evt.changedTouches.length !== 0 ? evt.changedTouches[0] : evt;
        return point;
    };
    __decorate$5([
        Event$1()
    ], Touch.prototype, "tap", void 0);
    __decorate$5([
        Event$1()
    ], Touch.prototype, "tapHold", void 0);
    __decorate$5([
        Event$1()
    ], Touch.prototype, "swipe", void 0);
    __decorate$5([
        Event$1()
    ], Touch.prototype, "scroll", void 0);
    __decorate$5([
        Property(350)
    ], Touch.prototype, "tapThreshold", void 0);
    __decorate$5([
        Property(750)
    ], Touch.prototype, "tapHoldThreshold", void 0);
    __decorate$5([
        Complex({}, SwipeSettings)
    ], Touch.prototype, "swipeSettings", void 0);
    Touch = __decorate$5([
        NotifyPropertyChanges
    ], Touch);
    return Touch;
}(Base));

loadCldr(require('cldr-data/supplemental/numberingSystems.json'), require('cldr-data/main/it-CH/ca-gregorian.json'), require('cldr-data/main/it-CH/numbers.json'), require('cldr-data/main/it-CH/timeZoneNames.json'), require('cldr-data/main/it-CH/dateFields.json'));
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
});

var RecurrenceEditor = /*#__PURE__*/function (_Component) {
  _inheritsLoose(RecurrenceEditor, _Component);

  function RecurrenceEditor(props) {
    var _this;

    _this = _Component.call(this, props) || this;
    _this.state = {
      locale: _this.props.locale
    };
    return _this;
  }

  var _proto = RecurrenceEditor.prototype;

  _proto.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
    var _this2 = this;

    setTimeout(function () {
      _this2.setState({
        locale: nextProps.locale
      });
    }, 100);
  };

  _proto.render = function render() {
    var dateFormat = this.props.dateFormat;
    var locale = this.state.locale || "en-US";
    return /*#__PURE__*/React.createElement(RecurrenceEditorComponent, _extends({
      dateFormat: dateFormat || "dd/MM/yyyy",
      locale: locale
    }, this.props));
  };

  return RecurrenceEditor;
}(Component$1);

var _$1 = require("lodash");

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
    var closed_day = closedDates.length ? _$1.map(this.state.closedDates, function (el) {
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
          var first = _$1.first(_this3.scheduleObj.activeView.renderDates);

          var last = _$1.last(_this3.scheduleObj.activeView.renderDates);

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
        var todayButton = _$1.find(props.items || [], {
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
}(Component$1);

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
}(Component$1);

function _templateObject2() {
  var data = _taggedTemplateLiteralLoose(["\n        color: #dc3545;\n    "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteralLoose(["\n        font-weight: normal;\n    "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function MandatoryFieldLabel(props) {
  var StyledDiv = styled.div(_templateObject());
  var StyledSpan = styled.span(_templateObject2());
  return /*#__PURE__*/React.createElement(StyledDiv, props, /*#__PURE__*/React.createElement(StyledSpan, null, "* "), /*#__PURE__*/React.createElement("span", null, props.value));
}

function _templateObject$1() {
  var data = _taggedTemplateLiteralLoose(["\n        font-weight: normal;\n    "]);

  _templateObject$1 = function _templateObject() {
    return data;
  };

  return data;
}

function NormalFieldLabel(props) {
  var StyledDiv = styled.div(_templateObject$1());
  return /*#__PURE__*/React.createElement(StyledDiv, props, props.value);
}

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
}(Component$1);

var HTMLTextEditor = /*#__PURE__*/function (_Component) {
  _inheritsLoose(HTMLTextEditor, _Component);

  function HTMLTextEditor(props) {
    var _this;

    _this = _Component.call(this, props) || this;
    _this.state = {
      loading: false,
      editorState: EditorState.createEmpty()
    };
    _this.state = {
      editorState: _this.parseData(props.value)
    };
    _this.onEditorStateChange = _this.onEditorStateChange.bind(_assertThisInitialized(_this));
    _this.uploadImageCallBack = _this.uploadImageCallBack.bind(_assertThisInitialized(_this));
    return _this;
  }

  var _proto = HTMLTextEditor.prototype;

  _proto.componentDidMount = function componentDidMount() {
    var editorState = this.parseData(this.props.data);
    this.setState({
      editorState: editorState
    });
  };

  _proto.parseData = function parseData(data) {
    if (data != null) {
      var tmp = htmlToDraft(data);
      tmp = ContentState.createFromBlockArray(tmp);
      tmp = EditorState.createWithContent(tmp);
      tmp = EditorState.moveFocusToEnd(tmp);
      return tmp;
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
        options: ["inline", "blockType", "fontFamily", "fontSize", "list", "textAlign", "link", "image", "remove", "history"],
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
}(Component$1);

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
}(Component$1);

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

function _templateObject13() {
  var data = _taggedTemplateLiteralLoose(["\n        font-size: 1.5rem;\n        margin-right: 15px;\n        cursor: ", ";\n        color: ", ";\n    "]);

  _templateObject13 = function _templateObject13() {
    return data;
  };

  return data;
}

function _templateObject12() {
  var data = _taggedTemplateLiteralLoose(["\n        font-size: 1.5rem;\n        margin-right: 15px;\n        cursor: ", ";\n        color: ", ";\n    "]);

  _templateObject12 = function _templateObject12() {
    return data;
  };

  return data;
}

function _templateObject11() {
  var data = _taggedTemplateLiteralLoose(["\n        cursor: pointer;\n        font-size: 1.5rem;\n        color: grey\n    "]);

  _templateObject11 = function _templateObject11() {
    return data;
  };

  return data;
}

function _templateObject10() {
  var data = _taggedTemplateLiteralLoose(["\n        margin-top: 0.25rem;\n        font-size: 80%;\n        color: #dc3545;\n    "]);

  _templateObject10 = function _templateObject10() {
    return data;
  };

  return data;
}

function _templateObject9() {
  var data = _taggedTemplateLiteralLoose(["\n        width: 104px;\n        height: 104px;\n        background-color: #fafafa;\n        text-align: center;\n        border-radius: 4px;\n        vertical-align: top;\n        border: 1px dashed;\n        border-color: ", ";\n    "]);

  _templateObject9 = function _templateObject9() {
    return data;
  };

  return data;
}

function _templateObject8() {
  var data = _taggedTemplateLiteralLoose(["\n        max-width: 100% !important;\n        max-height: 100%;\n        cursor: pointer;\n    "]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  var data = _taggedTemplateLiteralLoose(["\n        color: white;\n        cursor: pointer;\n    "]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = _taggedTemplateLiteralLoose(["\n        opacity: 0.7;\n        color: #dc3545;\n        cursor: pointer;\n    "]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteralLoose(["\n        top: -10px\n    "]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteralLoose(["\n        color: white;\n        cursor: pointer;\n    "]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteralLoose(["\n        opacity: 0.7;\n        color: #007bff;\n        cursor: pointer;\n    "]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2$1() {
  var data = _taggedTemplateLiteralLoose(["\n        position: absolute;\n        z-index: 10;\n        top: -3px;\n        left: -17px;\n    "]);

  _templateObject2$1 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject$2() {
  var data = _taggedTemplateLiteralLoose(["\n        position: relative;\n    "]);

  _templateObject$2 = function _templateObject() {
    return data;
  };

  return data;
}

function ImageBox(props) {
  var StyledDiv = styled.div(_templateObject$2());
  return /*#__PURE__*/React.createElement(StyledDiv, null, props.children);
}

function IconsBox(props) {
  var StyledDiv = styled.div(_templateObject2$1());
  return /*#__PURE__*/React.createElement(StyledDiv, null, props.children);
}

function UpdateImageIcon() {
  var StyledFaCircle = styled(FontAwesomeIcon)(_templateObject3());
  var StyledPencilAlt = styled(FontAwesomeIcon)(_templateObject4());
  return /*#__PURE__*/React.createElement("span", {
    className: "fa-stack small"
  }, /*#__PURE__*/React.createElement(StyledFaCircle, {
    className: "fa-stack-2x",
    icon: faCircle
  }), /*#__PURE__*/React.createElement(StyledPencilAlt, {
    className: "fa-stack-1x",
    icon: faPencilAlt
  }));
}

function DeleteImageIcon(props) {
  var StyledDiv = styled.div(_templateObject5());
  var StyledFaCircle = styled(FontAwesomeIcon)(_templateObject6());
  var StyledTrashAlt = styled(FontAwesomeIcon)(_templateObject7());
  return /*#__PURE__*/React.createElement(StyledDiv, _extends({
    className: "fa-stack small"
  }, props), /*#__PURE__*/React.createElement(StyledFaCircle, {
    className: "fa-stack-2x",
    icon: faCircle
  }), /*#__PURE__*/React.createElement(StyledTrashAlt, {
    className: "fa-stack-1x",
    icon: faTrashAlt
  }));
}

function StyledImage(props) {
  var StyledImg = styled.img(_templateObject8());
  return /*#__PURE__*/React.createElement(StyledImg, props);
}

function UploadImageButton(props) {
  var StyledButton = styled(Button)(_templateObject9(), function (props) {
    return props.error === true || props.isInvalid === true ? "#dc3545" : "#d9d9d9";
  });
  return /*#__PURE__*/React.createElement(StyledButton, props, props.children);
}

function ErrorMessage(props) {
  var StyledDiv = styled.div(_templateObject10());
  return /*#__PURE__*/React.createElement(StyledDiv, null, props.children);
}

function CloseIcon(props) {
  var StyledFontAwesomeIcon = styled(FontAwesomeIcon)(_templateObject11());
  return /*#__PURE__*/React.createElement(StyledFontAwesomeIcon, _extends({
    icon: faTimesCircle
  }, props));
}

function CropperDownloadIcon(props) {
  var StyledFontAwesomeIcon = styled(FontAwesomeIcon)(_templateObject12(), function (props) {
    return props.isError === true ? "not-allowed" : "pointer";
  }, function (props) {
    return props.isError === true ? "#dee2e6" : "#007bff";
  });
  return /*#__PURE__*/React.createElement(StyledFontAwesomeIcon, _extends({}, props, {
    icon: faDownload
  }));
}

function CropperSaveIcon(props) {
  var StyledFontAwesomeIcon = styled(FontAwesomeIcon)(_templateObject13(), function (props) {
    return props.isError === true ? "not-allowed" : "pointer";
  }, function (props) {
    return props.isError === true ? "#dee2e6" : "#007bff";
  });
  return /*#__PURE__*/React.createElement(StyledFontAwesomeIcon, _extends({}, props, {
    icon: faSave
  }));
}

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
    return /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement(Card.Header, null, /*#__PURE__*/React.createElement("span", {
      style: {
        "float": "right"
      }
    }, /*#__PURE__*/React.createElement(CustomTooltip, {
      tooltip: localization.download || "Download"
    }, /*#__PURE__*/React.createElement(CropperDownloadIcon, {
      tooltip: localization.download || "Download",
      isError: isError,
      onClick: this.downloadCroppedImg
    })), /*#__PURE__*/React.createElement(CustomTooltip, {
      tooltip: localization.save || "Save"
    }, /*#__PURE__*/React.createElement(CropperSaveIcon, {
      isError: isError,
      onClick: function onClick() {
        _this3.parseCroppedImage();
      }
    })), /*#__PURE__*/React.createElement(CustomTooltip, {
      tooltip: localization.cancel || "Cancel"
    }, /*#__PURE__*/React.createElement(CloseIcon, {
      onClick: this.props.onClose
    })))), /*#__PURE__*/React.createElement(Card.Body, null, /*#__PURE__*/React.createElement(Row, null, /*#__PURE__*/React.createElement(Col, {
      sm: 5
    }, localization.loaded_image_to_crop || "Loaded image to crop"), /*#__PURE__*/React.createElement(Col, {
      sm: 2
    }), /*#__PURE__*/React.createElement(Col, {
      sm: 5
    }, localization.cropped_image || "Cropped image")), /*#__PURE__*/React.createElement(Row, {
      style: {
        marginTop: "1rem"
      }
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
}(Component$1);

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
      imageToCrop: null,
      fileName: null,
      fileExtension: null,
      fileType: null
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
          var message = (localization.imageSizeMustBeAtMost || "Image size must be at most") + " " + imageSize.toString() + "MB";
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

          if (constraints === true) {
            if (imageWidth < minWidth) {
              isError = true;
              var message = localization.imageDimensionsConstraintsAtLeast || "Image dimensions must be at least";
              message = message + " " + minWidth + "x" + minHeight + " pixel";
              toast.warn(message);
            } else if (imageWidth > maxWidth) {
              isError = true;
              var message = localization.imageDimensionsConstraintsAtMost || "Image dimensions must be at most";
              message = message + " " + maxWidth + "x" + maxHeight + " pixel";
              ;
              toast.warn(message);
            } else if (imageHeight < minHeight) {
              isError = true;
              var message = localization.imageDimensionsConstraintsAtLeast || "Image dimensions must be at least";
              message = message + " " + minWidth + "x" + minHeight + " pixel";
              ;
              toast.warn(message);
            } else if (imageHeight > maxHeight) {
              isError = true;
              var message = localization.imageDimensionsConstraintsAtMost || "Image dimensions must be at most";
              message = message + " " + maxWidth + "x" + maxHeight + " pixel";
              ;
              toast.warn(message);
            }

            if (isError === true) {
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

    var fileName = fileSrc.name;
    var fileType = fileSrc.type;
    var fileExtension = uploadedImage.split(';')[0].split('/')[1];
    self.checkImageRatioAndDimensions(uploadedImage).then(function () {
      if (resizeImage === true) {
        self.fileChangedHandler(fileSrc, resizeWidth, resizeHeight).then(function (data) {
          if (cropImage === true) {
            self.setState({
              imageToCrop: data,
              imageToCropSrc: fileSrc,
              showCropModal: true,
              fileName: fileName,
              fileType: fileType,
              fileExtension: fileExtension
            });
          } else {
            self.props.onChange(data, fileName, fileExtension, fileType);
          }
        })["catch"](function (error) {
          console.error(error);
          toast.error(localization.errorResizingImage || "Error resizing image");
        });
      } else if (cropImage === true) {
        self.setState({
          imageToCrop: uploadedImage,
          imageToCropSrc: fileSrc,
          showCropModal: true,
          fileName: fileName,
          fileType: fileType,
          fileExtension: fileExtension
        });
      } else {
        self.props.onChange(uploadedImage, fileName, fileExtension, fileType);
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
    var _self$state = self.state,
        fileName = _self$state.fileName,
        fileType = _self$state.fileType,
        fileExtension = _self$state.fileExtension;

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
          var message = (localization.imageSizeMustBeAtMost || "Image size must be at most") + " " + imageSize.toString() + "MB";
          toast.warn(message);
        } else {
          self.props.onChange(data, fileName, fileExtension, fileType);
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
        ratio = _this$props2.ratio,
        viewImgHeight = _this$props2.viewImgHeight,
        viewImgWidth = _this$props2.viewImgWidth,
        viewImgMaxHeight = _this$props2.viewImgMaxHeight;
    var _this$state = this.state,
        image = _this$state.image,
        showPreviewImage = _this$state.showPreviewImage,
        showCropModal = _this$state.showCropModal;
    var _this$state2 = this.state,
        imageToCropSrc = _this$state2.imageToCropSrc,
        imageToCrop = _this$state2.imageToCrop;
    cropProperties = cropProperties || {};
    viewImgHeight = viewImgHeight || "auto";
    viewImgWidth = viewImgHeight ? "auto" : viewImgWidth || "auto";
    var imageStyle = {
      "height": viewImgHeight,
      "width": viewImgWidth,
      "maxHeight": viewImgMaxHeight
    };
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Row, null, /*#__PURE__*/React.createElement(Col, {
      sm: 12
    }, _$2.isEmpty(image) === false && /*#__PURE__*/React.createElement(ImageBox, null, /*#__PURE__*/React.createElement(IconsBox, null, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
      htmlFor: "file-input"
    }, /*#__PURE__*/React.createElement(UpdateImageIcon, null)), /*#__PURE__*/React.createElement("input", {
      id: "file-input",
      type: "file",
      accept: "image/*",
      style: {
        display: "none"
      },
      multiple: false,
      onChange: this.handleFileUpload
    })), /*#__PURE__*/React.createElement(DeleteImageIcon, {
      onClick: this.onRemove
    })), /*#__PURE__*/React.createElement(StyledImage, {
      style: imageStyle,
      src: image,
      alt: "img",
      onClick: function onClick() {
        _this3.setState({
          showPreviewImage: true
        });
      }
    })), _$2.isEmpty(image) === true && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("input", {
      ref: "fileInput",
      onChange: this.handleFileUpload,
      type: "file",
      accept: "image/*",
      style: {
        display: "none"
      },
      multiple: false
    }), /*#__PURE__*/React.createElement(UploadImageButton, {
      disabled: disabled,
      variant: "outline-secondary",
      isInvalid: error,
      onClick: function onClick() {
        return _this3.refs.fileInput.click();
      }
    }, /*#__PURE__*/React.createElement(FontAwesomeIcon, {
      icon: faUpload,
      onClick: this.props.onCancel
    }))))), error === true && /*#__PURE__*/React.createElement(Row, null, /*#__PURE__*/React.createElement(Col, null, /*#__PURE__*/React.createElement(ErrorMessage, null, errorMessage || "Error"))), /*#__PURE__*/React.createElement(Modal, {
      onHide: function onHide() {},
      size: "xl",
      show: showPreviewImage
    }, /*#__PURE__*/React.createElement(Modal.Body, null, /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement(Card.Header, null, /*#__PURE__*/React.createElement("span", {
      style: {
        "float": "right"
      }
    }, /*#__PURE__*/React.createElement(CustomTooltip, {
      tooltip: localization.cancel || "Cancel"
    }, /*#__PURE__*/React.createElement(CloseIcon, {
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
}(Component$1);

var OrbitalAddressComponentsPicker = /*#__PURE__*/function (_Component) {
  _inheritsLoose(OrbitalAddressComponentsPicker, _Component);

  function OrbitalAddressComponentsPicker(props) {
    var _this;

    _this = _Component.call(this, props) || this;
    _this.state = {
      autoCompleteLocation: _this.props.location,
      location: _this.props.location
    };
    _this.placeAutocomplete = React.createRef();
    _this.onSelectCity = _this.onSelectCity.bind(_assertThisInitialized(_this));
    _this.changeCity = _this.changeCity.bind(_assertThisInitialized(_this));
    return _this;
  }

  var _proto = OrbitalAddressComponentsPicker.prototype;

  _proto.componentDidUpdate = function componentDidUpdate(nextProps) {
    if (nextProps.location != this.state.location) {
      this.setState({
        location: nextProps.location,
        autoCompleteLocation: nextProps.location
      });
    }
  };

  _proto.onSelectCity = function onSelectCity(location, placeId) {
    var self = this;
    var localization = this.props.localization;
    geocodeByPlaceId(placeId).then(function (results) {
      var data = results[0];

      if (data) {
        var address_components = data.address_components;
        self.setState({
          autoCompleteLocation: location
        }, function () {
          self.props.onChange(address_components);
        });
      } else {
        console.error("No data");
        toast.error(localization.error || "Error");
      }
    })["catch"](function (error) {
      console.error(error);
      toast.error(localization.error || "Error");
    });
  };

  _proto.changeCity = function changeCity(autoCompleteLocation) {
    var _this2 = this;

    this.setState({
      autoCompleteLocation: autoCompleteLocation
    }, function () {
      if (_$2.isEmpty(autoCompleteLocation) == true) {
        _this2.props.onChange([]);
      }
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
    var self = this;
    var autoCompleteLocation = this.state.autoCompleteLocation;
    var _this$props = this.props,
        localization = _this$props.localization,
        error = _this$props.error;
    return /*#__PURE__*/React.createElement(PlacesAutocomplete, {
      ref: this.placeAutocomplete,
      value: autoCompleteLocation || "",
      onChange: this.changeCity,
      onSelect: this.onSelectCity
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
        value: autoCompleteLocation || ""
      })), /*#__PURE__*/React.createElement(Form.Control.Feedback, {
        type: "invalid"
      }, localization.completeField || "Please complete the field")), /*#__PURE__*/React.createElement("div", {
        className: "autocomplete-dropdown-container"
      }, suggestions.map(function (suggestion, index) {
        var className = self.getAutoCompleteClassname(suggestion);
        var style = self.getAutoCompleteStyle(suggestion);
        return /*#__PURE__*/React.createElement("div", _extends({
          key: index
        }, getSuggestionItemProps(suggestion, {
          className: className,
          style: style
        })), /*#__PURE__*/React.createElement("span", null, suggestion.description));
      })));
    });
  };

  return OrbitalAddressComponentsPicker;
}(Component$1);

function _templateObject2$2() {
  var data = _taggedTemplateLiteralLoose(["\n        color: #dc3545;\n    "]);

  _templateObject2$2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject$3() {
  var data = _taggedTemplateLiteralLoose(["\n        font-weight: normal;\n    "]);

  _templateObject$3 = function _templateObject() {
    return data;
  };

  return data;
}

function MandatoryFieldLabel$1(props) {
  var StyledDiv = styled.div(_templateObject$3());
  var StyledSpan = styled.span(_templateObject2$2());
  return /*#__PURE__*/React.createElement(StyledDiv, props, /*#__PURE__*/React.createElement(StyledSpan, null, "* "), /*#__PURE__*/React.createElement("span", null, props.value));
}

function _templateObject$4() {
  var data = _taggedTemplateLiteralLoose(["\n        font-weight: normal;\n    "]);

  _templateObject$4 = function _templateObject() {
    return data;
  };

  return data;
}

function NormalFieldLabel$1(props) {
  var StyledDiv = styled.div(_templateObject$4());
  return /*#__PURE__*/React.createElement(StyledDiv, props, props.value);
}

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

            var addressComponent = _$2.find(address_components, function (component) {
              var types = component.types;

              if (types.indexOf(addressComponentType) != -1) {
                return component;
              }
            });

            var city = addressComponent.long_name;
            resolve(city);
          } else {
            console.error("status - ", status);
            reject("Error getting 'city' from coordinates (" + lat + ", " + lng + ")");
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
      if (_$2.isEmpty() == true) {
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
        error = _this$props.error,
        mandatory = _this$props.mandatory;

    var _ref = position || {},
        lat = _ref.lat,
        lng = _ref.lng;

    var tooltip = localization.cityDoesNotModifyAddress || "Changing the city does not affect the address; viceversa the city will change";
    var cityLabel = /*#__PURE__*/React.createElement("span", null, " ", localization.city || "City", " ", /*#__PURE__*/React.createElement(CustomTooltip, {
      tooltip: tooltip
    }, /*#__PURE__*/React.createElement(FontAwesomeIcon, {
      className: "info_icon",
      icon: faInfoCircle
    })));
    return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Row, null, /*#__PURE__*/React.createElement(Col, {
      sm: 5
    }, mandatory == false && /*#__PURE__*/React.createElement(NormalFieldLabel$1, {
      value: localization.address || "Address"
    }), (mandatory == null || mandatory == true) && /*#__PURE__*/React.createElement(MandatoryFieldLabel$1, {
      value: localization.address || "Address"
    })), /*#__PURE__*/React.createElement(Col, {
      sm: 2
    }, mandatory == false && /*#__PURE__*/React.createElement(NormalFieldLabel$1, {
      value: localization.lat || "Lat"
    }), (mandatory == null || mandatory == true) && /*#__PURE__*/React.createElement(MandatoryFieldLabel$1, {
      value: localization.lat || "Lat"
    })), /*#__PURE__*/React.createElement(Col, {
      sm: 2
    }, mandatory == false && /*#__PURE__*/React.createElement(NormalFieldLabel$1, {
      value: localization.lon || "Lon"
    }), (mandatory == null || mandatory == true) && /*#__PURE__*/React.createElement(MandatoryFieldLabel$1, {
      value: localization.lon || "Lon"
    })), /*#__PURE__*/React.createElement(Col, {
      sm: 3
    }, mandatory == false && /*#__PURE__*/React.createElement(NormalFieldLabel$1, {
      value: localization.city || "City"
    }), (mandatory == null || mandatory == true) && /*#__PURE__*/React.createElement(MandatoryFieldLabel$1, {
      value: cityLabel
    }))), /*#__PURE__*/React.createElement(Row, null, /*#__PURE__*/React.createElement(Col, {
      sm: 5
    }, /*#__PURE__*/React.createElement(PlacesAutocomplete, {
      ref: this.placeAutocomplete,
      value: autoCompleteAddress || "",
      onChange: this.changeAddress,
      onSelect: this.onSelectAddress
    }, function (_ref2) {
      var getInputProps = _ref2.getInputProps,
          suggestions = _ref2.suggestions,
          getSuggestionItemProps = _ref2.getSuggestionItemProps;
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
      }, suggestions.map(function (suggestion, index) {
        var className = self.getAutoCompleteClassname(suggestion);
        var style = self.getAutoCompleteStyle(suggestion);
        return /*#__PURE__*/React.createElement("div", _extends({
          key: index
        }, getSuggestionItemProps(suggestion, {
          className: className,
          style: style
        })), /*#__PURE__*/React.createElement("span", {
          key: index
        }, suggestion.description));
      })));
    })), /*#__PURE__*/React.createElement(Col, {
      sm: 2
    }, /*#__PURE__*/React.createElement(FormControl, {
      placeholder: localization.lat || "Lat",
      value: lat || "",
      disabled: true
    })), /*#__PURE__*/React.createElement(Col, {
      sm: 2
    }, /*#__PURE__*/React.createElement(FormControl, {
      placeholder: localization.lon || "Lon",
      value: lng || "",
      disabled: true
    })), /*#__PURE__*/React.createElement(Col, {
      sm: 3
    }, /*#__PURE__*/React.createElement(FormControl, {
      placeholder: localization.city || "City",
      value: city || "",
      onChange: function onChange(e) {
        var value = e.target.value;

        _this3.setState({
          city: value
        });

        if (_this3.props.onChangeCity) {
          _this3.props.onChangeCity(value);
        }
      }
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
}(Component$1);

function setEmptyRows(prepareRow, canNextPage, page, pageSize, data) {
  var rows = null;

  if (canNextPage === false && page.length < pageSize && page[0]) {
    var new_filling_rows = pageSize - page.length;
    new_filling_rows = new Array(new_filling_rows);

    var page_tmp = _$2.map(new_filling_rows, function (f) {
      return page[0];
    });

    rows = page_tmp.map(function (row, i) {
      var new_id = data.length + i;
      row.id = new_id;
      prepareRow(row);
      return /*#__PURE__*/React.createElement("div", _extends({}, row.getRowProps(), {
        className: "my_tr"
      }), row.cells.map(function (cell) {
        return /*#__PURE__*/React.createElement("div", _extends({}, cell.getCellProps(), {
          className: "my_td"
        }), /*#__PURE__*/React.createElement("div", {
          style: {
            color: "#66000000"
          }
        }, "."));
      }));
    });
  }

  return rows;
}
function setEmptyHeaders(pageSize, headerGroups) {
  var new_filling_rows = new Array(pageSize);

  var rows = _$2.map(new_filling_rows, function () {
    return headerGroups.map(function (headerGroup) {
      return /*#__PURE__*/React.createElement("div", _extends({}, headerGroup.getHeaderGroupProps(), {
        className: "my_tr"
      }), headerGroup.headers.map(function (column) {
        return /*#__PURE__*/React.createElement("div", _extends({}, column.getHeaderProps(), {
          className: "my_th"
        }), /*#__PURE__*/React.createElement("div", {
          style: {
            color: "#66000000"
          }
        }, "."));
      }));
    });
  });

  return rows;
}
function setSortIcon(column) {
  return /*#__PURE__*/React.createElement("span", null, column.disableSortBy !== true && column.isSorted === false && /*#__PURE__*/React.createElement("span", null, " ", /*#__PURE__*/React.createElement(FontAwesomeIcon, {
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
}
function setResize(column) {
  return /*#__PURE__*/React.createElement("span", null, column.canResize && /*#__PURE__*/React.createElement("div", _extends({}, column.getResizerProps(), {
    className: "my_resizer " + (column.isResizing ? "isResizing" : "")
  })));
}

function setPageSizeOptions(_defaultPageSize, _fixedPageSize) {
  var base_values = [5, 10, 20, 30, 40, 50];

  if (_$2.includes(base_values, _defaultPageSize) === false) {
    base_values.push(_defaultPageSize);
    base_values = _$2.sortBy(base_values);
  }

  if (_$2.includes(base_values, _fixedPageSize) === false) {
    base_values.push(_fixedPageSize);
    base_values = _$2.sortBy(base_values);
  }

  var options = _$2.map(base_values, function (value, index) {
    return /*#__PURE__*/React.createElement("option", {
      key: index,
      value: value
    }, value);
  });

  return options;
}

function getPaginationSection(localization, gotoPage, canPreviousPage, previousPage, canNextPage, nextPage, pageCount, pageIndex, pageOptions, data, pageSize, _fixedPageSize, setPageSize, _defaultPageSize, hidePagination) {
  return /*#__PURE__*/React.createElement(Row, {
    className: "pagination",
    hidden: hidePagination === true
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
    disabled: data.length === 0,
    size: "sm",
    type: "number",
    min: 1,
    max: pageOptions.length,
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
    disabled: _fixedPageSize != null || data.length === 0,
    onChange: function onChange(e) {
      setPageSize(Number(e.target.value));
    }
  }, setPageSizeOptions(_defaultPageSize, _fixedPageSize))));
}

function ReactTable(_ref) {
  var localization = _ref.localization,
      columns = _ref.columns,
      data = _ref.data,
      _defaultPageSize = _ref._defaultPageSize,
      _fixedPageSize = _ref._fixedPageSize,
      _noDataMessage = _ref._noDataMessage,
      skipPageReset = _ref.skipPageReset,
      hidePagination = _ref.hidePagination;
  useEffect(function () {
    var tableSize = _fixedPageSize || _defaultPageSize || pageSize;
    setPageSize(tableSize);
  }, [_fixedPageSize, _defaultPageSize]);

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

  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", _extends({}, getTableProps(), {
    className: "my_table"
  }), /*#__PURE__*/React.createElement("div", null, headerGroups.map(function (headerGroup) {
    return /*#__PURE__*/React.createElement("div", _extends({}, headerGroup.getHeaderGroupProps(), {
      className: "my_tr"
    }), headerGroup.headers.map(function (column) {
      return /*#__PURE__*/React.createElement("div", _extends({}, column.getHeaderProps(), {
        className: "my_th"
      }), column.render("Header"), setSortIcon(column), setResize(column));
    }));
  }), data.length === 0 && /*#__PURE__*/React.createElement("span", null, setEmptyHeaders(pageSize, headerGroups))), /*#__PURE__*/React.createElement("div", getTableBodyProps(), page.map(function (row, i) {
    if (row.original && row.original.subContent && _$2.isEmpty(row.original.subContent) === false) {
      row.canExpand = true;
    }

    prepareRow(row);
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", _extends({}, row.getRowProps(), {
      className: "my_tr"
    }), row.cells.map(function (cell) {
      return /*#__PURE__*/React.createElement("div", _extends({}, cell.getCellProps(), {
        className: "my_th"
      }), cell.render("Cell"));
    })), row.isExpanded ? /*#__PURE__*/React.createElement("div", {
      className: "sub_content_container"
    }, row.original.subContent) : null);
  }), data.length > 0 && /*#__PURE__*/React.createElement("span", null, setEmptyRows(prepareRow, canNextPage, page, pageSize, data))), data.length === 0 && /*#__PURE__*/React.createElement("div", {
    className: "noData"
  }, /*#__PURE__*/React.createElement(FontAwesomeIcon, {
    icon: faInfoCircle
  }), " ", _noDataMessage || "No data")), getPaginationSection(localization, gotoPage, canPreviousPage, previousPage, canNextPage, nextPage, pageCount, pageIndex, pageOptions, data, pageSize, _fixedPageSize, setPageSize, _defaultPageSize, hidePagination));
}

function _templateObject$5() {
  var data = _taggedTemplateLiteralLoose(["\n    color: ", ";\n    cursor: ", ";\n    margin-right: ", ";\n    font-size: 1.5rem;\n"]);

  _templateObject$5 = function _templateObject() {
    return data;
  };

  return data;
}
var StyledFontAwesomeIcon = styled(FontAwesomeIcon)(_templateObject$5(), function (props) {
  return props.disabled === true ? "grey" : "#007bff";
}, function (props) {
  return props.disabled === true ? "not-allowed" : "pointer";
}, function (props) {
  return props.marginright;
});

var OrbitalSaveIcon = function OrbitalSaveIcon(props) {
  var tooltip = props.tooltip,
      disabled = props.disabled,
      marginright = props.marginright,
      _onClick = props.onClick;
  return /*#__PURE__*/React.createElement(CustomTooltip, {
    tooltip: tooltip
  }, /*#__PURE__*/React.createElement(StyledFontAwesomeIcon, {
    marginright: marginright,
    icon: faSave,
    disabled: disabled,
    onClick: function onClick() {
      if (disabled !== true) {
        _onClick();
      }
    }
  }));
};

function _templateObject2$3() {
  var data = _taggedTemplateLiteralLoose(["\n    color: ", ";\n    cursor: ", ";\n    font-size: 1.5rem;\n"]);

  _templateObject2$3 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject$6() {
  var data = _taggedTemplateLiteralLoose(["\n    float: ", "\n"]);

  _templateObject$6 = function _templateObject() {
    return data;
  };

  return data;
}
var Container = styled.div(_templateObject$6(), function (props) {
  return props["float"];
});
var StyledBsPlusCircle = styled(BsPlusCircle)(_templateObject2$3(), function (props) {
  return props.disabled === true ? "grey" : "#007bff";
}, function (props) {
  return props.disabled === true ? "not-allowed" : "pointer";
});

var OrbitalAddIcon = function OrbitalAddIcon(props) {
  var _float = props["float"],
      tooltip = props.tooltip,
      disabled = props.disabled,
      _onClick = props.onClick;
  return /*#__PURE__*/React.createElement(Container, {
    "float": _float
  }, /*#__PURE__*/React.createElement(CustomTooltip, {
    tooltip: tooltip
  }, /*#__PURE__*/React.createElement(StyledBsPlusCircle, {
    disabled: disabled,
    onClick: function onClick() {
      if (disabled !== true) {
        _onClick();
      }
    }
  })));
};

function _templateObject$7() {
  var data = _taggedTemplateLiteralLoose(["\n    cursor: ", ";\n    color: grey;\n    font-size: 1.5rem;\n"]);

  _templateObject$7 = function _templateObject() {
    return data;
  };

  return data;
}
var StyledFontAwesomeIcon$1 = styled(FontAwesomeIcon)(_templateObject$7(), function (props) {
  return props.disabled === true ? "not-allowed" : "pointer";
});

var OrbitalCancelIcon = function OrbitalCancelIcon(props) {
  var tooltip = props.tooltip,
      disabled = props.disabled,
      _onClick = props.onClick;
  return /*#__PURE__*/React.createElement(CustomTooltip, {
    tooltip: tooltip
  }, /*#__PURE__*/React.createElement(StyledFontAwesomeIcon$1, {
    icon: faTimesCircle,
    disabled: disabled,
    onClick: function onClick() {
      if (disabled !== true) {
        _onClick();
      }
    }
  }));
};

function _templateObject$8() {
  var data = _taggedTemplateLiteralLoose(["\n    padding-top:  ", ";\n    input{\n        transform: ", ";\n    }\n"]);

  _templateObject$8 = function _templateObject() {
    return data;
  };

  return data;
}
var StyledFormCheck = styled(FormCheck)(_templateObject$8(), function (props) {
  return props.paddingTop ? props.paddingTop : "0.5rem";
}, function (props) {
  return props.scale ? "scale(" + props.scale + ")" : "scale(1.5)";
});

var OrbitalCheckbox = function OrbitalCheckbox(props) {
  return /*#__PURE__*/React.createElement(StyledFormCheck, _extends({
    type: "checkbox"
  }, props));
};

function _templateObject$9() {
  var data = _taggedTemplateLiteralLoose(["\n        margin-top: 0,25rem;\n        font-size: 80%;\n        color: #dc3545;\n    "]);

  _templateObject$9 = function _templateObject() {
    return data;
  };

  return data;
}

function OrbitalErrorDiv(props) {
  var StyledDiv = styled.div(_templateObject$9());
  return /*#__PURE__*/React.createElement(StyledDiv, null, props.children);
}

function OrbitalSelect(props) {
  var isInvalid = props.isInvalid,
      errorMsg = props.errorMsg;

  function getTypeSelectStyles(isInvalid) {
    var typeBorder = isInvalid ? {
      borderColor: "#dc3545",
      boxShadow: "#dc3545",
      "&:hover": {
        borderColor: "#dc3545"
      }
    } : {};
    var typeStyles = {
      control: function control(styles) {
        return _extends({}, styles, typeBorder);
      }
    };
    return typeStyles;
  }

  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Select, _extends({
    styles: getTypeSelectStyles(isInvalid)
  }, props)), isInvalid && /*#__PURE__*/React.createElement(OrbitalErrorDiv, null, errorMsg));
}

export { APISb, AuthStore, BrandStore, ClientSession, PluginUtils as CommonUtils, DatePicker, DatePicker$1 as DateTimePicker, HTMLTextEditor, CustomLoadingOverlay as LoadingOverlay, MandatoryFieldLabel, NormalFieldLabel, OrbitalAddIcon, OrbitalAddressComponentsPicker, OrbitalCancelIcon, OrbitalCheckbox, OrbitalErrorDiv, OrbitalLocationPicker, OrbitalSaveIcon, OrbitalSelect, OrbitalStore, PluginStore, ReactTable, RecurrenceEditor, ReservationScheduler as Scheduler, SessionStorageStore, TimePicker, CustomTooltip as Tooltip, UploadImage };
//# sourceMappingURL=index.modern.js.map
