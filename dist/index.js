function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var axios = _interopDefault(require('axios'));
var _$2 = _interopDefault(require('lodash'));
var ej2Base = require('@syncfusion/ej2-base');
var LocalizedStrings = _interopDefault(require('react-localization'));
var React = require('react');
var React__default = _interopDefault(React);
var ej2ReactCalendars = require('@syncfusion/ej2-react-calendars');
var ej2ReactSchedule = require('@syncfusion/ej2-react-schedule');
var moment = _interopDefault(require('moment'));
var styled = _interopDefault(require('styled-components'));
var reactDraftWysiwyg = require('react-draft-wysiwyg');
var draftJs = require('draft-js');
var draftToHtml = _interopDefault(require('draftjs-to-html'));
var htmlToDraft = _interopDefault(require('html-to-draftjs'));
var LoadingOverlay = _interopDefault(require('react-loading-overlay'));
require('react-draft-wysiwyg/dist/react-draft-wysiwyg.css');
var ej2ReactRichtexteditor = require('@syncfusion/ej2-react-richtexteditor');
var reactBootstrap = require('react-bootstrap');
var reactToastify = require('react-toastify');
var reactFontawesome = require('@fortawesome/react-fontawesome');
var freeSolidSvgIcons = require('@fortawesome/free-solid-svg-icons');
var Resizer$1 = _interopDefault(require('react-image-file-resizer'));
var uuidV4 = _interopDefault(require('uuid/v4'));
var Cropper = _interopDefault(require('cropperjs'));
var freeRegularSvgIcons = require('@fortawesome/free-regular-svg-icons');
require('cropperjs/dist/cropper.css');
var PlacesAutocomplete = require('react-places-autocomplete');
var PlacesAutocomplete__default = _interopDefault(PlacesAutocomplete);
var LocationPicker = _interopDefault(require('react-location-picker'));
var reactTable = require('react-table');
var bs = require('react-icons/bs');
var Select = _interopDefault(require('react-select'));
var CreatableSelect = _interopDefault(require('react-select/creatable'));
var ReactPlayer = _interopDefault(require('react-player/lazy'));
var formik = require('formik');
var yup = require('yup');
var ReactPhoneInput = _interopDefault(require('react-phone-input-2'));
require('react-phone-input-2/lib/style.css');
var reactBootstrapTypeahead = require('react-bootstrap-typeahead');

function _extends() {
  _extends = Object.assign ? Object.assign.bind() : function (target) {
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
  _setPrototypeOf(subClass, superClass);
}
function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };
  return _setPrototypeOf(o, p);
}
function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }
  return target;
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
  AuthStore.getOrbitalId = function getOrbitalId() {
    var user = this.auth.user || {};
    var orbitalId = user.orbitalIdId;
    return orbitalId;
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

function getBrowserLang() {
  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  try {
    var browserLang = navigator.language || navigator.userLanguage;
    browserLang = browserLang.substring(0, 2).toLowerCase();
    browserLang = capitalizeFirstLetter(browserLang);
    return browserLang;
  } catch (e) {
    console.error(e);
    return null;
  }
}
function getInitialLocalizationLanguage() {
  var browserLang = getBrowserLang();
  var lang = SessionStorageStore.getCurrentLang() || AuthStore.getDefautlLang() || browserLang || "En";
  return lang;
}
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
    var p1 = pluginActivationId ? SpecificAPI.getActivePluginLocalization(authKey, apiUrl, pluginActivationId) : null;
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
function initializeSystemPluginPipeline(initializationObject) {
  var authKey = initializationObject.authKey,
    apiUrl = initializationObject.apiUrl,
    pluginKey = initializationObject.pluginKey,
    pluginVersion = initializationObject.pluginVersion,
    AuthStore = initializationObject.AuthStore,
    OrbitalStore = initializationObject.OrbitalStore,
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
      var p0 = self.getPluginLocalization(authKey, apiUrl, pluginKey, null);
      var p1 = SpecificAPI.getOrbitalConfig(authKey, apiUrl, null);
      return Promise.all([p0, p1]);
    }).then(function (results) {
      var localizationObj = results[0];
      self.setLocalization(localizationInstance, localizationObj, callbackLocalization);
      self.setUserLocalizationLanguage(AuthStore, localizationInstance);
      var orbitalConfig = results[1];
      OrbitalStore.setOrbitalConfig(orbitalConfig);
      resolve();
    })["catch"](function (error) {
      console.error("Error during plugin initalization pipeline");
      reject(error);
    });
  });
}

var PluginUtils = {
  __proto__: null,
  getInitialLocalizationLanguage: getInitialLocalizationLanguage,
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
  getPluginVersionChannel: getPluginVersionChannel,
  initializeSystemPluginPipeline: initializeSystemPluginPipeline
};

var it = {
	calendar: {
		today: "Oggi"
	},
	datepicker: {
		today: "Oggi"
	},
	datetimepicker: {
		today: "Oggi"
	},
	schedule: {
		day: "Giorno",
		week: "Settimana",
		workWeek: "Settimana lavorativa",
		month: "Mese",
		agenda: "Agenda",
		weekAgenda: "Agenda settimanale",
		workWeekAgenda: "Agenda settimana lavorativa",
		monthAgenda: "Agenda mensile",
		today: "Oggi",
		noEvents: "Nessun evento",
		emptyContainer: "Non ci sono eventi programmati in questo giorno.",
		allDay: "Tutto il giorno",
		start: "Inizio",
		end: "Fine",
		more: "altro",
		close: "Chiudi",
		cancel: "Cancella",
		noTitle: "(Nessun titolo)",
		"delete": "Elimina",
		deleteEvent: "Elimina Evento",
		deleteMultipleEvent: "Elimina Più Eventi",
		selectedItems: "Articoli selezionati",
		deleteSeries: "Elimina Serie",
		edit: "Modifica",
		editSeries: "Modifica Serie",
		editEvent: "Modifica Evento",
		createEvent: "Crea",
		subject: "Soggetto",
		addTitle: "Aggiungi titolo",
		moreDetails: "Più Dettagli",
		save: "Salva",
		editContent: "Vuoi modificare questo evento o l'intera serie?",
		deleteRecurrenceContent: "Vuoi eliminare solo questo evento o l'intera serie?",
		deleteContent: "Si vuole davvero eliminare questo evento?",
		deleteMultipleContent: "Si vuole davvero eliminare questi eventi?",
		newEvent: "Nuovo Evento",
		title: "Titolo",
		location: "Luogo",
		description: "Descrizione",
		timezone: "Timezone",
		startTimezone: "Timezone Iniziale",
		endTimezone: "Timezone Finale",
		repeat: "Ripeti",
		saveButton: "Salva",
		cancelButton: "Cancella",
		deleteButton: "Elimina",
		recurrence: "Ricorrenza",
		wrongPattern: "Il modello della ricorrenza non è valido.",
		seriesChangeAlert: "Le modifiche apportate a istanze specifiche di questa serie saranno annullate e tali eventi corrisponderanno nuovamente alla serie.",
		createError: "La durata dell'evento deve essere inferiore alla frequenza con cui si verifica. Ridurre la durata o modificare il modello di ricorrenza nell'editor degli eventi di ricorrenza.",
		recurrenceDateValidation: "Alcuni mesi hanno un numero di date inferiore a quello selezionato. Per questi mesi, la ricorrenza cadrà nell'ultima data del mese. ",
		sameDayAlert: "Due occorrenze dello stesso evento non possono avvenire nello stesso giorno.",
		editRecurrence: "Modifica Ricorrenza",
		repeats: "Ripetizioni",
		alert: "Attenzione",
		startEndError: "La data di fine è più grande di quella di inzio.",
		invalidDateError: "La data inserita non è valida.",
		ok: "Ok",
		occurrence: "Occorrenza",
		series: "Serie",
		previous: "Precendente",
		next: "Successivo",
		timelineDay: "Timeline Giornaliera",
		timelineWeek: "Timeline Settimanale",
		timelineWorkWeek: "Timeline Settimana Lavorativa",
		timelineMonth: "Timeline Mensile",
		expandAllDaySection: "Espandi",
		collapseAllDaySection: "Collassa"
	},
	recurrenceeditor: {
		none: "Nessuna",
		daily: "Giornaliera",
		weekly: "Settimanale",
		monthly: "Mensile",
		month: "Mese",
		yearly: "Annuale",
		never: "Mai",
		until: "Fino",
		count: "Occorrenze",
		first: "Primo",
		second: "Secondo",
		third: "Terzo",
		fourth: "Quarto",
		last: "Ultimo",
		repeat: "Ripeti",
		repeatEvery: "Ripeti Ogni",
		on: "Ripeti il",
		end: "Fine",
		onDay: "Giorno",
		days: "Giorno(i)",
		weeks: "Settimana(e)",
		months: "Mese(e)",
		years: "Anno(i)",
		every: "ogni",
		summaryTimes: "orario(i)",
		summaryOn: "il",
		summaryUntil: "fino",
		summaryRepeat: "Ripetizioni",
		summaryDay: "giorno(i)",
		summaryWeek: "settimana(e)",
		summaryMonth: "mese(i)",
		summaryYear: "anno(i)"
	},
	richtexteditor: {
		alignments: "Allineamento",
		justifyLeft: "Allinea a sinistra",
		justifyCenter: "Centrato",
		justifyRight: "Allinea a destra",
		justifyFull: "Giustificato",
		fontName: "Nome del carattere",
		fontSize: "Dimensione",
		fontColor: "Colore carattere",
		backgroundColor: "Colore sfondo",
		bold: "Grassetto",
		italic: "Corsivo",
		underline: "Sottolineato",
		strikethrough: "Barrato",
		clearFormat: "Pulisci formato",
		clearAll: "Pulisci tutto",
		cut: "Taglia",
		copy: "Copia",
		paste: "Incolla",
		unorderedList: "Elenco puntato",
		orderedList: "Elenco numerato",
		indent: "Aumento rientro",
		outdent: "Riduci rientro",
		undo: "Annulla",
		redo: "Ripristina",
		superscript: "Superscript",
		subscript: "Subscript",
		createLink: "Inserisci link",
		openLink: "Apri link",
		editLink: "Modifica link",
		removeLink: "Rimuovi link",
		image: "Inserisci immagine",
		replace: "Sostituisci",
		align: "Allineamento",
		caption: "Didascalia immagine",
		remove: "Rimuovi",
		insertLink: "Inserisci link",
		display: "Display",
		altText: "Testo alternativo",
		dimension: "Cambia dimensione",
		fullscreen: "Schermo intero",
		maximize: "Massimizza",
		minimize: "Minimizza",
		lowerCase: "Minuscolo",
		upperCase: "Maiuscolo",
		print: "Stampa",
		formats: "Formati",
		sourcecode: "Vedi codice",
		preview: "Anteprima",
		viewside: "ViewSide",
		insertCode: "Inserisci codice",
		linkText: "Mostra testo",
		linkTooltipLabel: "Titolo",
		linkWebUrl: "Indirizzo web",
		linkTitle: "Inserisci titolo",
		linkurl: "http://example.com",
		linkOpenInNewWindow: "Apri link in una nuova finestra",
		linkHeader: "Inserisci link",
		dialogInsert: "Inserisci",
		dialogCancel: "Annulla",
		dialogUpdate: "Aggiorna",
		imageHeader: "Inserisci immagine",
		imageLinkHeader: "Puoi anche fornire un link dal web",
		mdimageLink: "Fornire una URL per la tua immagine",
		imageUploadMessage: "Trascina un'immagine o naviga per caricare",
		imageDeviceUploadMessage: "Clicca qui per caricare",
		imageAlternateText: "Testo alternato",
		alternateHeader: "Testo alternativo",
		browse: "Naviga",
		imageUrl: "http://example.com/image.png",
		imageCaption: "Didascalia",
		imageSizeHeader: "Dimensione immagine",
		imageHeight: "Altezza",
		imageWidth: "Larghezza",
		textPlaceholder: "Inserisci testo",
		inserttablebtn: "Inserisci tabella",
		tabledialogHeader: "Inserisci tabella",
		tableWidth: "Larghezza",
		cellpadding: "Padding celle",
		cellspacing: "Spaziamento celle",
		columns: "Numero di colonne",
		rows: "Numero di righe",
		tableRows: "Righe taballa",
		tableColumns: "Colonne taballa",
		tableCellHorizontalAlign: "Allineamento orizzontale cella tabella",
		tableCellVerticalAlign: "Allineamento verticale cella tabella",
		createTable: "Crea taballa",
		removeTable: "Rimuovi taballa",
		tableHeader: "Intestazione tabella",
		tableRemove: "Rimuovi tabella",
		tableCellBackground: "Sfondo cella",
		tableEditProperties: "Modifica proprietà tabella",
		styles: "Stili",
		insertColumnLeft: "Inserisci colonna a sinistra",
		insertColumnRight: "Inserisci colonna a destra",
		deleteColumn: "Elimina colonna",
		insertRowBefore: "Inserisci riga sopra",
		insertRowAfter: "Inserisci riga sotto",
		deleteRow: "Elimina riga",
		tableEditHeader: "Modifica tabella",
		TableHeadingText: "Intestazione",
		TableColText: "Col",
		imageInsertLinkHeader: "Inserisci link",
		editImageHeader: "Modifica immagine",
		alignmentsDropDownLeft: "Allinea a sinistra",
		alignmentsDropDownCenter: "Centrato",
		alignmentsDropDownRight: "Allinea a destra",
		alignmentsDropDownJustify: "Giustificato",
		imageDisplayDropDownInline: "In linea",
		imageDisplayDropDownBreak: "Break",
		tableInsertRowDropDownBefore: "Inserisci riga sopra",
		tableInsertRowDropDownAfter: "Inserisci riga sotto",
		tableInsertRowDropDownDelete: "Elimina riga",
		tableInsertColumnDropDownLeft: "Inserisci colonna a sinistra",
		tableInsertColumnDropDownRight: "Inserisci colonna a destra",
		tableInsertColumnDropDownDelete: "Elimina colonna",
		tableVerticalAlignDropDownTop: "Allinea in alto",
		tableVerticalAlignDropDownMiddle: "Allinea al centro",
		tableVerticalAlignDropDownBottom: "Allinea in basso",
		tableStylesDropDownDashedBorder: "Bordi tratteggiati",
		tableStylesDropDownAlternateRows: "Righe alternati",
		pasteFormat: "Incolla formato",
		pasteFormatContent: "Scegli l'azione di formattazione",
		plainText: "Testo normale",
		cleanFormat: "Pulito",
		keepFormat: "Mantieni stile",
		pasteDialogOk: "OK",
		pasteDialogCancel: "Annulla",
		fileManager: "File Manager",
		fileDialogHeader: "File Browser",
		formatsDropDownParagraph: "Paragrafo",
		formatsDropDownCode: "Codice",
		formatsDropDownQuotation: "Quotation",
		formatsDropDownHeading1: "Heading 1",
		formatsDropDownHeading2: "Heading 2",
		formatsDropDownHeading3: "Heading 3",
		formatsDropDownHeading4: "Heading 4",
		fontNameSegoeUI: "Segoe UI",
		fontNameArial: "Arial",
		fontNameGeorgia: "Georgia",
		fontNameImpact: "Impact",
		fontNameTahoma: "Tahoma",
		fontNameTimesNewRoman: "Times New Roman",
		fontNameVerdana: "Verdana",
		numberFormatListNumber: "Number",
		numberFormatListLowerAlpha: "Numerico minuscolo",
		numberFormatListUpperAlpha: "Numerico maiuscolo",
		numberFormatListLowerRoman: "Romano minuscolo",
		numberFormatListUpperRoman: "Romano maiuscolo",
		numberFormatListLowerGreek: "Greco minuscolo",
		bulletFormatListDisc: "Disco",
		bulletFormatListCircle: "Cerchio",
		bulletFormatListSquare: "Quadrato",
		numberFormatListNone: "Nessuno",
		bulletFormatListNone: "Nessuno"
	}
};
var syncfusionLocalization = {
	it: it,
	"en-US": {
	calendar: {
		today: "Today"
	},
	datepicker: {
		today: "Today"
	},
	datetimepicker: {
		today: "Today"
	},
	schedule: {
		day: "Day",
		week: "Week",
		workWeek: "Work Week",
		month: "Month",
		agenda: "Agenda",
		weekAgenda: "Week Agenda",
		workWeekAgenda: "Work Week Agenda",
		monthAgenda: "Month Agenda",
		today: "Today",
		noEvents: "No events",
		emptyContainer: "There are no events scheduled on this day.",
		allDay: "All day",
		start: "Start",
		end: "End",
		more: "more",
		close: "Close",
		cancel: "Cancel",
		noTitle: "(No Title)",
		"delete": "Delete",
		deleteEvent: "Delete Event",
		deleteMultipleEvent: "Delete Multiple Events",
		selectedItems: "Items selected",
		deleteSeries: "Delete Series",
		edit: "Edit",
		editSeries: "Edit Series",
		editEvent: "Edit Event",
		createEvent: "Create",
		subject: "Subject",
		addTitle: "Add title",
		moreDetails: "More Details",
		save: "Save",
		editContent: "Do you want to edit only this event or entire series?",
		deleteRecurrenceContent: "Do you want to delete only this event or entire series?",
		deleteContent: "Are you sure you want to delete this event?",
		deleteMultipleContent: "Are you sure you want to delete the selected events?",
		newEvent: "New Event",
		title: "Title",
		location: "Location",
		description: "Description",
		timezone: "Timezone",
		startTimezone: "Start Timezone",
		endTimezone: "End Timezone",
		repeat: "Repeat",
		saveButton: "Save",
		cancelButton: "Cancel",
		deleteButton: "Delete",
		recurrence: "Recurrence",
		wrongPattern: "The recurrence pattern is not valid.",
		seriesChangeAlert: "The changes made to specific instances of this series will be cancelled and those events will match the series again.",
		createError: "The duration of the event must be shorter than how frequently it occurs. Shorten the duration, or change the recurrence pattern in the recurrence event editor.",
		recurrenceDateValidation: "Some months have fewer than the selected date. For these months, the occurrence will fall on the last date of the month.",
		sameDayAlert: "Two occurrences of the same event cannot occur on the same day.",
		editRecurrence: "Edit Recurrence",
		repeats: "Repeats",
		alert: "Alert",
		startEndError: "The selected end date occurs before the start date.",
		invalidDateError: "The entered date value is invalid.",
		ok: "Ok",
		occurrence: "Occurrence",
		series: "Series",
		previous: "Previous",
		next: "Next",
		timelineDay: "Timeline Day",
		timelineWeek: "Timeline Week",
		timelineWorkWeek: "Timeline Work Week",
		timelineMonth: "Timeline Month",
		expandAllDaySection: "Expand",
		collapseAllDaySection: "Collapse"
	},
	recurrenceeditor: {
		none: "None",
		daily: "Daily",
		weekly: "Weekly",
		monthly: "Monthly",
		month: "Month",
		yearly: "Yearly",
		never: "Never",
		until: "Until",
		count: "Count",
		first: "First",
		second: "Second",
		third: "Third",
		fourth: "Fourth",
		last: "Last",
		repeat: "Repeat",
		repeatEvery: "Repeat Every",
		on: "Repeat On",
		end: "End",
		onDay: "Day",
		days: "Day(s)",
		weeks: "Week(s)",
		months: "Month(s)",
		years: "Year(s)",
		every: "every",
		summaryTimes: "time(s)",
		summaryOn: "on",
		summaryUntil: "until",
		summaryRepeat: "Repeats",
		summaryDay: "day(s)",
		summaryWeek: "week(s)",
		summaryMonth: "month(s)",
		summaryYear: "year(s)"
	},
	richtexteditor: {
		alignments: "Alignments",
		justifyLeft: "Align Left",
		justifyCenter: "Align Center",
		justifyRight: "Align Right",
		justifyFull: "Align Justify",
		fontName: "Font Name",
		fontSize: "Font Size",
		fontColor: "Font Color",
		backgroundColor: "Background Color",
		bold: "Bold",
		italic: "Italic",
		underline: "Underline",
		strikethrough: "Strikethrough",
		clearFormat: "Clear Format",
		clearAll: "Clear All",
		cut: "Cut",
		copy: "Copy",
		paste: "Paste",
		unorderedList: "Bulleted List",
		orderedList: "Numbered List",
		indent: "Increase Indent",
		outdent: "Decrease Indent",
		undo: "Undo",
		redo: "Redo",
		superscript: "Superscript",
		subscript: "Subscript",
		createLink: "Insert Link",
		openLink: "Open Link",
		editLink: "Edit Link",
		removeLink: "Remove Link",
		image: "Insert Image",
		replace: "Replace",
		align: "Align",
		caption: "Image Caption",
		remove: "Remove",
		insertLink: "Insert Link",
		display: "Display",
		altText: "Alternative Text",
		dimension: "Change Size",
		fullscreen: "Maximize",
		maximize: "Maximize",
		minimize: "Minimize",
		lowerCase: "Lower Case",
		upperCase: "Upper Case",
		print: "Print",
		formats: "Formats",
		sourcecode: "Code View",
		preview: "Preview",
		viewside: "ViewSide",
		insertCode: "Insert Code",
		linkText: "Display Text",
		linkTooltipLabel: "Title",
		linkWebUrl: "Web Address",
		linkTitle: "Enter a title",
		linkurl: "http://example.com",
		linkOpenInNewWindow: "Open Link in New Window",
		linkHeader: "Insert Link",
		dialogInsert: "Insert",
		dialogCancel: "Cancel",
		dialogUpdate: "Update",
		imageHeader: "Insert Image",
		imageLinkHeader: "You can also provide a link from the web",
		mdimageLink: "Please provide a URL for your image",
		imageUploadMessage: "Drop image here or browse to upload",
		imageDeviceUploadMessage: "Click here to upload",
		imageAlternateText: "Alternate Text",
		alternateHeader: "Alternative Text",
		browse: "Browse",
		imageUrl: "http://example.com/image.png",
		imageCaption: "Caption",
		imageSizeHeader: "Image Size",
		imageHeight: "Height",
		imageWidth: "Width",
		textPlaceholder: "Enter Text",
		inserttablebtn: "Insert Table",
		tabledialogHeader: "Insert Table",
		tableWidth: "Width",
		cellpadding: "Cell Padding",
		cellspacing: "Cell Spacing",
		columns: "Number of columns",
		rows: "Number of rows",
		tableRows: "Table Rows",
		tableColumns: "Table Columns",
		tableCellHorizontalAlign: "Table Cell Horizontal Align",
		tableCellVerticalAlign: "Table Cell Vertical Align",
		createTable: "Create Table",
		removeTable: "Remove Table",
		tableHeader: "Table Header",
		tableRemove: "Table Remove",
		tableCellBackground: "Table Cell Background",
		tableEditProperties: "Table Edit Properties",
		styles: "Styles",
		insertColumnLeft: "Insert Column Left",
		insertColumnRight: "Insert Column Right",
		deleteColumn: "Delete Column",
		insertRowBefore: "Insert Row Before",
		insertRowAfter: "Insert Row After",
		deleteRow: "Delete Row",
		tableEditHeader: "Edit Table",
		TableHeadingText: "Heading",
		TableColText: "Col",
		imageInsertLinkHeader: "Insert Link",
		editImageHeader: "Edit Image",
		alignmentsDropDownLeft: "Align Left",
		alignmentsDropDownCenter: "Align Center",
		alignmentsDropDownRight: "Align Right",
		alignmentsDropDownJustify: "Align Justify",
		imageDisplayDropDownInline: "Inline",
		imageDisplayDropDownBreak: "Break",
		tableInsertRowDropDownBefore: "Insert row before",
		tableInsertRowDropDownAfter: "Insert row after",
		tableInsertRowDropDownDelete: "Delete row",
		tableInsertColumnDropDownLeft: "Insert column left",
		tableInsertColumnDropDownRight: "Insert column right",
		tableInsertColumnDropDownDelete: "Delete column",
		tableVerticalAlignDropDownTop: "Align Top",
		tableVerticalAlignDropDownMiddle: "Align Middle",
		tableVerticalAlignDropDownBottom: "Align Bottom",
		tableStylesDropDownDashedBorder: "Dashed Borders",
		tableStylesDropDownAlternateRows: "Alternate Rows",
		pasteFormat: "Paste Format",
		pasteFormatContent: "Choose the formatting action",
		plainText: "Plain Text",
		cleanFormat: "Clean",
		keepFormat: "Keep",
		pasteDialogOk: "OK",
		pasteDialogCancel: "Cancel",
		fileManager: "File Manager",
		fileDialogHeader: "File Browser",
		formatsDropDownParagraph: "Paragraph",
		formatsDropDownCode: "Code",
		formatsDropDownQuotation: "Quotation",
		formatsDropDownHeading1: "Heading 1",
		formatsDropDownHeading2: "Heading 2",
		formatsDropDownHeading3: "Heading 3",
		formatsDropDownHeading4: "Heading 4",
		fontNameSegoeUI: "Segoe UI",
		fontNameArial: "Arial",
		fontNameGeorgia: "Georgia",
		fontNameImpact: "Impact",
		fontNameTahoma: "Tahoma",
		fontNameTimesNewRoman: "Times New Roman",
		fontNameVerdana: "Verdana",
		numberFormatListNumber: "Number",
		numberFormatListLowerAlpha: "LowerAlpha",
		numberFormatListUpperAlpha: "UpperAlpha",
		numberFormatListLowerRoman: "LowerRoman",
		numberFormatListUpperRoman: "UpperRoman",
		numberFormatListLowerGreek: "LowerGreek",
		bulletFormatListDisc: "Disc",
		bulletFormatListCircle: "Circle",
		bulletFormatListSquare: "Square",
		numberFormatListNone: "None",
		bulletFormatListNone: "None"
	}
}
};

function getLocaleByLanguage(lang) {
  if (lang && lang === "It") {
    return "it";
  } else if (lang && lang === "En") {
    return "en-US";
  } else {
    return "en-US";
  }
}
function setSyncfusionLocalization(L10n, loadCldr) {
  return new Promise(function (resolve, reject) {
    resolve();
  });
}
function setSyncfusionLocalizationV2() {
  ej2Base.loadCldr(require('cldr-data/supplemental/numberingSystems.json'), require('cldr-data/main/it/ca-gregorian.json'), require('cldr-data/main/it/numbers.json'), require('cldr-data/main/it/timeZoneNames.json'), require('cldr-data/main/it/dateFields.json'));
  ej2Base.L10n.load(syncfusionLocalization);
}

var SyncfusionUtils = {
  __proto__: null,
  getLocaleByLanguage: getLocaleByLanguage,
  setSyncfusionLocalization: setSyncfusionLocalization,
  setSyncfusionLocalizationV2: setSyncfusionLocalizationV2
};

var lang = SessionStorageStore.getCurrentLang() || AuthStore.getDefautlLang() || "En";
var en = {
  noData: "No data",
  loading: "Loading",
  imageDimensionsConstraintsAtLeast: "Le dimensioni dell'immagine devono essere almeno",
  imageDimensionsConstraintsAtMost: "Le dimensioni dell'immagine devono essere al massimo",
  errorAspectRatio: "Il rapporto deve essere",
  errorResizingImage: "Errore nel ridimensionamento dell'immagine",
  errorUploadingImage: "Errore nel caricamento dell'immagine",
  imageSizeMustBeAtMost: "L'immagine deve essere al massimo",
  loaded_image_to_crop: "Immagine da ritagliare caricata",
  cropped_image: "Immagine ritagliata",
  crop_message: "Ritaglia l'immagine creando o muovendo la 'finestra di ritaglio'",
  cancel: "Annulla",
  save: "Save",
  download: "Scarica",
  minCroppedWidth: "",
  maxCroppedWidth: "",
  minCroppedHeight: "",
  maxCroppedHeight: "",
  searchPlaces: "Cerca località"
};
var it$1 = {
  noData: "Nessun dato",
  loading: "Caricamento",
  imageDimensionsConstraintsAtLeast: "Image dimensions must be at least",
  imageDimensionsConstraintsAtMost: "Image dimensions must be at most",
  errorAspectRatio: "Aspect ratio must be",
  errorResizingImage: "Error resizing image",
  errorUploadingImage: "Error uploading image",
  imageSizeMustBeAtMost: "Image size must be at most",
  loaded_image_to_crop: "Loaded image to crop",
  cropped_image: "Cropped image",
  crop_message: "Crop the image by creating or moving the 'cropping window'",
  cancel: "Cancel",
  save: "Save",
  download: "Download",
  minCroppedWidth: "",
  maxCroppedWidth: "",
  minCroppedHeight: "",
  maxCroppedHeight: "",
  searchPlaces: "Search places"
};
var SingletonStrings = function SingletonStrings() {
  this.instance = new LocalizedStrings({
    En: en,
    It: it$1
  });
  return this.instance;
};
var ex = new SingletonStrings();
ex.setLanguage(lang);

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
    return /*#__PURE__*/React__default.createElement(ej2ReactCalendars.DatePickerComponent, _extends({}, this.props, {
      value: this.state.value,
      format: format || "dd/MM/yyyy"
    }));
  };
  return DatePicker;
}(React.Component);

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
    return /*#__PURE__*/React__default.createElement(ej2ReactCalendars.DateTimePickerComponent, _extends({}, this.props, {
      format: format || "dd/MM/yyyy HH:mm"
    }));
  };
  return DatePicker;
}(React.Component);

ej2Base.loadCldr(require('cldr-data/supplemental/numberingSystems.json'), require('cldr-data/main/it-CH/ca-gregorian.json'), require('cldr-data/main/it-CH/numbers.json'), require('cldr-data/main/it-CH/timeZoneNames.json'), require('cldr-data/main/it-CH/dateFields.json'));
ej2Base.L10n.load({
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
    return /*#__PURE__*/React__default.createElement(ej2ReactSchedule.RecurrenceEditorComponent, _extends({
      dateFormat: dateFormat || "dd/MM/yyyy",
      locale: locale
    }, this.props));
  };
  return RecurrenceEditor;
}(React.Component);

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
    return /*#__PURE__*/React__default.createElement(ej2ReactSchedule.ScheduleComponent, {
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
    }, /*#__PURE__*/React__default.createElement(ej2ReactSchedule.ViewsDirective, null, this.props.dayView == true && /*#__PURE__*/React__default.createElement(ej2ReactSchedule.ViewDirective, {
      option: "Day"
    }), this.props.weekView == true && /*#__PURE__*/React__default.createElement(ej2ReactSchedule.ViewDirective, {
      option: "Week"
    }), this.props.workWeekView == true && /*#__PURE__*/React__default.createElement(ej2ReactSchedule.ViewDirective, {
      option: "WorkWeek"
    }), this.props.monthView == true && /*#__PURE__*/React__default.createElement(ej2ReactSchedule.ViewDirective, {
      option: "Month"
    }), this.props.agendaView == true && /*#__PURE__*/React__default.createElement(ej2ReactSchedule.ViewDirective, {
      option: "Agenda"
    })), /*#__PURE__*/React__default.createElement(ej2ReactSchedule.Inject, {
      services: [ej2ReactSchedule.Day, ej2ReactSchedule.Week, ej2ReactSchedule.WorkWeek, ej2ReactSchedule.Month, ej2ReactSchedule.Agenda]
    }));
  };
  return ReservationScheduler;
}(React.Component);

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
    return /*#__PURE__*/React__default.createElement(ej2ReactCalendars.TimePickerComponent, _extends({}, this.props, {
      value: this.state.value,
      format: format || "HH:mm"
    }));
  };
  return TimePicker;
}(React.Component);

var _templateObject;
var OrbitalErrorDiv = styled.div(_templateObject || (_templateObject = _taggedTemplateLiteralLoose(["\n    margin-top: 0,25rem;\n    font-size: 80%;\n    color: #dc3545;\n"])));

var _templateObject$1;
var StyledDiv = styled.div(_templateObject$1 || (_templateObject$1 = _taggedTemplateLiteralLoose(["\n    .e-input-group, .e-input-group.e-control-wrapper{\n        height: calc(1.5em + 0.75rem + 2px);\n        line-height: 1.5;\n        font-size: 1rem;\n        font-weight: 400;\n        color: #495057;\n        background-color: #fff;\n        background-clip: padding-box;\n        border: 1px solid;\n        border-color: ", ";\n        border-radius: 0.25rem;\n    } \n    \n    .e-input-group.e-error, .e-input-group.e-control-wrapper.e-error, .e-input-group.e-error:not(.e-float-icon-left), .e-input-group.e-control-wrapper.e-error:not(.e-float-icon-left) {\n        border-color: #ced4da;\n    }\n\n    .e-input-group.e-error .e-input-group-icon, .e-input-group.e-control-wrapper.e-error .e-input-group-icon{\n        border-color: #ced4da;\n    }\n    \n    .e-input-group input.e-input, .e-input-group.e-control-wrapper input.e-input, .e-float-input input, .e-float-input.e-control-wrapper input, .e-input-group textarea.e-input, .e-input-group.e-control-wrapper textarea.e-input, .e-float-input textarea, .e-float-input.e-control-wrapper textarea, .e-input-group .e-input[disabled], .e-input-group.e-control-wrapper .e-input[disabled], .e-input-group.e-disabled input.e-input, .e-input-group.e-control-wrapper.e-disabled input.e-input, .e-input-group.e-disabled textarea.e-input, .e-input-group.e-control-wrapper.e-disabled textarea.e-input {\n        margin-top: 0.225rem;\n    }\n"])), function (props) {
  return props.isInvalid === true ? "#dc3545 !important" : "#ced4da";
});
function DatePickerV2(props) {
  var enabled = props.enabled,
    disabled = props.disabled,
    isInvalid = props.isInvalid,
    errorMessage = props.errorMessage,
    format = props.format,
    _props$language = props.language,
    language = _props$language === void 0 ? "En" : _props$language,
    _props$firstDayOfWeek = props.firstDayOfWeek,
    firstDayOfWeek = _props$firstDayOfWeek === void 0 ? 1 : _props$firstDayOfWeek;
  var isEnabled = enabled === false || disabled === true ? false : true;
  var invalid = isInvalid === true || _$2.isEmpty(isInvalid) === false;
  var _useState = React.useState(false),
    initialization = _useState[0],
    setInitialization = _useState[1];
  React.useEffect(function () {
    setSyncfusionLocalizationV2();
    setInitialization(true);
  }, []);
  return /*#__PURE__*/React__default.createElement(React__default.Fragment, null, initialization === true && /*#__PURE__*/React__default.createElement(React__default.Fragment, null, /*#__PURE__*/React__default.createElement(StyledDiv, {
    isInvalid: invalid
  }, /*#__PURE__*/React__default.createElement(ej2ReactCalendars.DatePickerComponent, _extends({}, props, {
    enabled: isEnabled,
    firstDayOfWeek: firstDayOfWeek,
    locale: getLocaleByLanguage(language),
    format: format || "dd/MM/yyyy"
  }))), isInvalid && /*#__PURE__*/React__default.createElement(OrbitalErrorDiv, null, errorMessage)));
}

var _templateObject$2;
var StyledDiv$1 = styled.div(_templateObject$2 || (_templateObject$2 = _taggedTemplateLiteralLoose(["\n    .e-input-group, .e-input-group.e-control-wrapper{\n        height: calc(1.5em + 0.75rem + 2px);\n        line-height: 1.5;\n        font-size: 1rem;\n        font-weight: 400;\n        color: #495057;\n        background-color: #fff;\n        background-clip: padding-box;\n        border: 1px solid;\n        border-color: ", ";\n        border-radius: 0.25rem;\n    } \n\n    .e-input-group.e-error, .e-input-group.e-control-wrapper.e-error, .e-input-group.e-error:not(.e-float-icon-left), .e-input-group.e-control-wrapper.e-error:not(.e-float-icon-left) {\n        border-color: #ced4da;\n    }\n\n    .e-input-group.e-error .e-input-group-icon, .e-input-group.e-control-wrapper.e-error .e-input-group-icon{\n        border-color: #ced4da;\n    }\n    \n    .e-input-group input.e-input, .e-input-group.e-control-wrapper input.e-input, .e-float-input input, .e-float-input.e-control-wrapper input, .e-input-group textarea.e-input, .e-input-group.e-control-wrapper textarea.e-input, .e-float-input textarea, .e-float-input.e-control-wrapper textarea, .e-input-group .e-input[disabled], .e-input-group.e-control-wrapper .e-input[disabled], .e-input-group.e-disabled input.e-input, .e-input-group.e-control-wrapper.e-disabled input.e-input, .e-input-group.e-disabled textarea.e-input, .e-input-group.e-control-wrapper.e-disabled textarea.e-input {\n        margin-top: 0.225rem;\n    }\n"])), function (props) {
  return props.isInvalid === true ? "#dc3545 !important" : "#ced4da";
});
function DateTimePickerV2(props) {
  var format = props.format,
    isInvalid = props.isInvalid,
    errorMessage = props.errorMessage,
    _props$language = props.language,
    language = _props$language === void 0 ? "En" : _props$language,
    _props$firstDayOfWeek = props.firstDayOfWeek,
    firstDayOfWeek = _props$firstDayOfWeek === void 0 ? 1 : _props$firstDayOfWeek;
  var invalid = isInvalid === true || _$2.isEmpty(isInvalid) === false;
  var _useState = React.useState(false),
    initialization = _useState[0],
    setInitialization = _useState[1];
  React.useEffect(function () {
    setSyncfusionLocalizationV2();
    setInitialization(true);
  }, []);
  return /*#__PURE__*/React__default.createElement(React__default.Fragment, null, initialization === true && /*#__PURE__*/React__default.createElement(React__default.Fragment, null, /*#__PURE__*/React__default.createElement(StyledDiv$1, {
    isInvalid: invalid
  }, /*#__PURE__*/React__default.createElement(ej2ReactCalendars.DateTimePickerComponent, _extends({}, props, {
    firstDayOfWeek: firstDayOfWeek,
    locale: getLocaleByLanguage(language),
    format: format || "dd/MM/yyyy HH:mm"
  }))), isInvalid && /*#__PURE__*/React__default.createElement(OrbitalErrorDiv, null, errorMessage)));
}

var _templateObject$3;
var StyledDiv$2 = styled.div(_templateObject$3 || (_templateObject$3 = _taggedTemplateLiteralLoose(["\n    .e-input-group, .e-input-group.e-control-wrapper{\n        height: calc(1.5em + 0.75rem + 2px);\n        line-height: 1.5;\n        font-size: 1rem;\n        font-weight: 400;\n        color: #495057;\n        background-color: #fff;\n        background-clip: padding-box;\n        border: 1px solid;\n        border-color: ", ";\n        border-radius: 0.25rem;\n    } \n\n    .e-input-group.e-error, .e-input-group.e-control-wrapper.e-error, .e-input-group.e-error:not(.e-float-icon-left), .e-input-group.e-control-wrapper.e-error:not(.e-float-icon-left) {\n        border-color: #ced4da;\n    }\n\n    .e-input-group.e-error .e-input-group-icon, .e-input-group.e-control-wrapper.e-error .e-input-group-icon{\n        border-color: #ced4da;\n    }\n    \n    .e-input-group input.e-input, .e-input-group.e-control-wrapper input.e-input, .e-float-input input, .e-float-input.e-control-wrapper input, .e-input-group textarea.e-input, .e-input-group.e-control-wrapper textarea.e-input, .e-float-input textarea, .e-float-input.e-control-wrapper textarea, .e-input-group .e-input[disabled], .e-input-group.e-control-wrapper .e-input[disabled], .e-input-group.e-disabled input.e-input, .e-input-group.e-control-wrapper.e-disabled input.e-input, .e-input-group.e-disabled textarea.e-input, .e-input-group.e-control-wrapper.e-disabled textarea.e-input {\n        margin-top: 0.225rem;\n    }\n"])), function (props) {
  return props.isInvalid === true ? "#dc3545 !important" : "#ced4da";
});
function RecurrenceEditorV2(props) {
  var _props$language = props.language,
    language = _props$language === void 0 ? "En" : _props$language,
    dateFormat = props.dateFormat,
    isInvalid = props.isInvalid,
    _props$firstDayOfWeek = props.firstDayOfWeek,
    firstDayOfWeek = _props$firstDayOfWeek === void 0 ? 1 : _props$firstDayOfWeek;
  var invalid = isInvalid === true || _$2.isEmpty(isInvalid) === false;
  var _useState = React.useState(false),
    initialization = _useState[0],
    setInitialization = _useState[1];
  React.useEffect(function () {
    setSyncfusionLocalizationV2();
    setInitialization(true);
  }, []);
  return /*#__PURE__*/React__default.createElement(React__default.Fragment, null, initialization === true && /*#__PURE__*/React__default.createElement(React__default.Fragment, null, /*#__PURE__*/React__default.createElement(StyledDiv$2, {
    isInvalid: invalid
  }, /*#__PURE__*/React__default.createElement(ej2ReactSchedule.RecurrenceEditorComponent, _extends({}, props, {
    firstDayOfWeek: firstDayOfWeek,
    locale: getLocaleByLanguage(language),
    dateFormat: dateFormat || "dd/MM/yyyy"
  })))));
}

var dateFormat = "DD/MM/YYYY";
var scheduleObj = {};
function SchedulerV2(props) {
  var _props$language = props.language,
    language = _props$language === void 0 ? "En" : _props$language,
    height = props.height,
    dayView = props.dayView,
    weekView = props.weekView,
    workWeekView = props.workWeekView,
    monthView = props.monthView,
    agendaView = props.agendaView,
    startingCurrentView = props.currentView,
    _props$firstDayOfWeek = props.firstDayOfWeek,
    firstDayOfWeek = _props$firstDayOfWeek === void 0 ? 1 : _props$firstDayOfWeek,
    _props$closedDates = props.closedDates,
    closedDates = _props$closedDates === void 0 ? [] : _props$closedDates,
    events = props.events,
    onChangeDate = props.onChangeDate,
    onChangeDateRange = props.onChangeDateRange,
    onChangeView = props.onChangeView,
    onChangeAgendaRange = props.onChangeAgendaRange;
  var _useState = React.useState(moment().format(dateFormat)),
    selectedDate = _useState[0],
    setSelectedDate = _useState[1];
  var _useState2 = React.useState(startingCurrentView || "Month"),
    currentView = _useState2[0],
    setCurrentView = _useState2[1];
  var _useState3 = React.useState(false),
    initialization = _useState3[0],
    setInitialization = _useState3[1];
  React.useEffect(function () {
    setSyncfusionLocalizationV2();
    setInitialization(true);
  }, []);
  React.useEffect(function () {
    if (_$2.isEmpty(scheduleObj) === false) {
      scheduleObj.refresh();
    }
  }, [language, closedDates]);
  React.useEffect(function () {
    if (_$2.isEmpty(scheduleObj) === false) {
      scheduleObj.changeCurrentView(currentView);
      changeDateRange();
    }
  }, [currentView]);
  function cellClick(args) {
    var startTime = args.startTime;
    var parsedDate = moment(startTime).format(dateFormat);
    setSelectedDate(parsedDate);
    scheduleObj.refresh();
    if (onChangeDate) {
      var parsedStartTime = moment(startTime);
      onChangeDate(parsedStartTime);
    }
  }
  function popupOpen(args) {
    var type = args.type;
    if (type === "QuickInfo" || type === "Editor") {
      args.cancel = true;
    }
  }
  function actionComplete(args) {
    var items = args.items,
      requestType = args.requestType;
    if (requestType === "toolBarItemRendered") {
      var todayButton = _$2.find(items || [], {
        cssClass: "e-today"
      });
      if (_$2.isEmpty(todayButton) === false) {
        todayButton.click = function () {
          var previousDate = new Date(2001, 1, 1);
          var currentDate = new Date();
          scheduleObj.navigating({
            action: "date",
            previousDate: previousDate,
            currentDate: currentDate
          });
        };
      }
    }
  }
  function changeDateRange() {
    var first = moment(_$2.first(scheduleObj.activeView.renderDates));
    var last = moment(_$2.last(scheduleObj.activeView.renderDates));
    if (onChangeAgendaRange) {
      onChangeAgendaRange(first, last);
    }
    if (onChangeDateRange) {
      onChangeDateRange(first, last);
    }
  }
  function manageViewAction(args) {
    var currentView = args.currentView;
    setCurrentView(currentView);
    if (onChangeView) {
      currentView = currentView;
      onChangeView(currentView);
    }
  }
  function manageDateAction(args) {
    var currentDate = args.currentDate,
      previousDate = args.previousDate;
    var today = moment().format(dateFormat);
    previousDate = previousDate ? moment(previousDate).format(dateFormat) : null;
    currentDate = currentDate ? moment(currentDate).format(dateFormat) : null;
    if (currentDate && currentDate === today && previousDate !== today) {
      scheduleObj.selectedDate = new Date();
      cellClick({
        startTime: new Date()
      });
    }
  }
  function navigating(args) {
    var action = args.action;
    switch (action) {
      case "date":
        manageDateAction(args);
        break;
      case "view":
        manageViewAction(args);
        break;
    }
    changeDateRange();
  }
  function checkSelectedDate(args) {
    var date = args.date,
      element = args.element,
      elementType = args.elementType;
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
    var parsedClosedDates = _$2.map(closedDates || [], function (date) {
      var parsedDate = moment(date).format(dateFormat);
      return parsedDate;
    });
    return parsedClosedDates;
  }
  function checkClosedDate(args) {
    var date = args.date,
      element = args.element,
      elementType = args.elementType;
    var parsedClosedDates = parseClosedDates(closedDates) || [];
    var parsedCellDate = moment(date).format(dateFormat);
    if (elementType === "monthCells" && _$2.indexOf(parsedClosedDates, parsedCellDate) > -1) {
      args.element.classList.add("e-current-date");
      var innerElement = element.getElementsByClassName("e-date-header e-navigate")[0];
      innerElement.setAttribute("style", "background-color:#dc3545");
    }
  }
  function renderCell(args) {
    checkSelectedDate(args);
    checkClosedDate(args);
  }
  return /*#__PURE__*/React__default.createElement(React__default.Fragment, null, initialization === true && /*#__PURE__*/React__default.createElement(ej2ReactSchedule.ScheduleComponent, {
    locale: getLocaleByLanguage(language),
    ref: function ref(schedule) {
      scheduleObj = schedule;
    },
    height: height,
    firstDayOfWeek: firstDayOfWeek,
    eventSettings: events || [],
    renderCell: renderCell,
    cellClick: cellClick,
    popupOpen: popupOpen,
    actionComplete: actionComplete,
    navigating: navigating
  }, /*#__PURE__*/React__default.createElement(ej2ReactSchedule.ViewsDirective, null, dayView === true && /*#__PURE__*/React__default.createElement(ej2ReactSchedule.ViewDirective, {
    option: "Day"
  }), weekView === true && /*#__PURE__*/React__default.createElement(ej2ReactSchedule.ViewDirective, {
    option: "Week"
  }), workWeekView === true && /*#__PURE__*/React__default.createElement(ej2ReactSchedule.ViewDirective, {
    option: "WorkWeek"
  }), monthView === true && /*#__PURE__*/React__default.createElement(ej2ReactSchedule.ViewDirective, {
    option: "Month"
  }), agendaView === true && /*#__PURE__*/React__default.createElement(ej2ReactSchedule.ViewDirective, {
    option: "Agenda"
  })), /*#__PURE__*/React__default.createElement(ej2ReactSchedule.Inject, {
    services: [ej2ReactSchedule.Day, ej2ReactSchedule.Week, ej2ReactSchedule.WorkWeek, ej2ReactSchedule.Month, ej2ReactSchedule.Agenda]
  })));
}

var _templateObject$4;
var StyledDiv$3 = styled.div(_templateObject$4 || (_templateObject$4 = _taggedTemplateLiteralLoose(["\n    .e-input-group, .e-input-group.e-control-wrapper{\n        height: calc(1.5em + 0.75rem + 2px);\n        line-height: 1.5;\n        font-size: 1rem;\n        font-weight: 400;\n        color: #495057;\n        background-color: #fff;\n        background-clip: padding-box;\n        border: 1px solid;\n        border-color: ", ";\n        border-radius: 0.25rem;\n    } \n    \n    .e-input-group.e-error, .e-input-group.e-control-wrapper.e-error, .e-input-group.e-error:not(.e-float-icon-left), .e-input-group.e-control-wrapper.e-error:not(.e-float-icon-left) {\n        border-color: #ced4da;\n    }\n\n    .e-input-group.e-error .e-input-group-icon, .e-input-group.e-control-wrapper.e-error .e-input-group-icon{\n        border-color: #ced4da;\n    }\n    \n    .e-input-group input.e-input, .e-input-group.e-control-wrapper input.e-input, .e-float-input input, .e-float-input.e-control-wrapper input, .e-input-group textarea.e-input, .e-input-group.e-control-wrapper textarea.e-input, .e-float-input textarea, .e-float-input.e-control-wrapper textarea, .e-input-group .e-input[disabled], .e-input-group.e-control-wrapper .e-input[disabled], .e-input-group.e-disabled input.e-input, .e-input-group.e-control-wrapper.e-disabled input.e-input, .e-input-group.e-disabled textarea.e-input, .e-input-group.e-control-wrapper.e-disabled textarea.e-input {\n        margin-top: 0.225rem;\n    }\n"])), function (props) {
  return props.isInvalid === true ? "#dc3545 !important" : "#ced4da";
});
function TimePickerv2(props) {
  var enabled = props.enabled,
    disabled = props.disabled,
    isInvalid = props.isInvalid,
    errorMessage = props.errorMessage;
  var isEnabled = enabled === false || disabled === true ? false : true;
  var invalid = isInvalid === true || _$2.isEmpty(isInvalid) === false;
  return /*#__PURE__*/React__default.createElement(React__default.Fragment, null, /*#__PURE__*/React__default.createElement(StyledDiv$3, {
    isInvalid: invalid
  }, /*#__PURE__*/React__default.createElement(ej2ReactCalendars.TimePickerComponent, _extends({}, props, {
    enabled: isEnabled
  }))), isInvalid && /*#__PURE__*/React__default.createElement(OrbitalErrorDiv, null, errorMessage));
}

var _templateObject$5, _templateObject2;
var StyledDiv$4 = styled.div(_templateObject$5 || (_templateObject$5 = _taggedTemplateLiteralLoose(["\n    font-weight:  ", ";;\n"])), function (props) {
  return props.halfbold === true ? "500" : "normal";
});
var StyledSpan = styled.span(_templateObject2 || (_templateObject2 = _taggedTemplateLiteralLoose(["\n    color: #dc3545;\n"])));
function MandatoryFieldLabel(props) {
  return /*#__PURE__*/React__default.createElement(StyledDiv$4, props, /*#__PURE__*/React__default.createElement(StyledSpan, null, "* "), /*#__PURE__*/React__default.createElement("span", null, props.value));
}

var _templateObject$6;
var StyledDiv$5 = styled.div(_templateObject$6 || (_templateObject$6 = _taggedTemplateLiteralLoose(["\n    font-weight:  ", ";;\n    color:  ", ";\n"])), function (props) {
  return props.halfbold === true ? "500" : "normal";
}, function (props) {
  return (props.isTransparent || props.istransparent) === true ? "transparent" : null;
});
function NormalFieldLabel(props) {
  return /*#__PURE__*/React__default.createElement(StyledDiv$5, props, props.value);
}

function CustomLoadingOverlay(props) {
  return /*#__PURE__*/React__default.createElement(LoadingOverlay, _extends({}, props, {
    styles: {
      overlay: function overlay(base) {
        return _extends({}, base, {
          background: 'rgba(24, 144, 255, 0.5)'
        });
      }
    }
  }), props.children);
}

var _templateObject$7;
var StyledDiv$6 = styled.div(_templateObject$7 || (_templateObject$7 = _taggedTemplateLiteralLoose(["\n  .rdw-editor-toolbar{\n    border-top-color: white;\n    border-right-color: white;\n    border-left-color: white;\n    border-bottom-color: #d9d9d9;\n    z-index: 1;\n  }\n\n  .rdw-editor-wrapper{\n    border: 1px solid;\n    border-color: ", ";\n  }\n\n  .rdw-editor-main{\n    height: ", ";\n    max-height: ", ";\n  }\n"])), function (props) {
  return props.isInvalid === true ? "#ff4d4f" : "#d9d9d9";
}, function (props) {
  return props.editorHeight;
}, function (props) {
  return props.maxHeight;
});
var HTMLTextEditor = /*#__PURE__*/function (_Component) {
  _inheritsLoose(HTMLTextEditor, _Component);
  function HTMLTextEditor(props) {
    var _this;
    _this = _Component.call(this, props) || this;
    _this.state = {
      loading: false,
      init: 0,
      editorState: draftJs.EditorState.createEmpty()
    };
    _this.onEditorStateChange = _this.onEditorStateChange.bind(_assertThisInitialized(_this));
    _this.uploadImageCallBack = _this.uploadImageCallBack.bind(_assertThisInitialized(_this));
    return _this;
  }
  var _proto = HTMLTextEditor.prototype;
  _proto.componentDidMount = function componentDidMount() {
    this.parseData(this.props.data);
  };
  _proto.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
    if (this.props.data != nextProps.data && this.state.init == 0) {
      this.setState({
        init: 1
      });
      this.parseData(nextProps.data);
    } else if (this.props.data != nextProps.data && this.props.lang != nextProps.lang) {
      this.parseData(nextProps.data);
    }
  };
  _proto.parseData = function parseData(data) {
    data = _$2.isEmpty(data) === false ? data : "";
    var contentBlock = htmlToDraft(data);
    if (contentBlock) {
      var contentState = draftJs.ContentState.createFromBlockArray(contentBlock.contentBlocks);
      var editorState = draftJs.EditorState.createWithContent(contentState);
      this.setState({
        editorState: editorState
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
            data: {
              link: imageUrl
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
  _proto.onEditorStateChange = function onEditorStateChange(editorState) {
    this.props.onChange(draftToHtml(draftJs.convertToRaw(editorState.getCurrentContent())));
    this.setState({
      editorState: editorState
    });
  };
  _proto.render = function render() {
    var _this$props = this.props,
      localization = _this$props.localization,
      disabled = _this$props.disabled,
      error = _this$props.error,
      isInvalid = _this$props.isInvalid,
      editorHeight = _this$props.editorHeight,
      maxHeight = _this$props.maxHeight;
    var _this$state = this.state,
      editorState = _this$state.editorState,
      loading = _this$state.loading;
    return /*#__PURE__*/React__default.createElement(CustomLoadingOverlay, {
      active: loading,
      spinner: true,
      text: (localization.loading || "Loading") + "..."
    }, /*#__PURE__*/React__default.createElement(StyledDiv$6, {
      isInvalid: error || isInvalid,
      editorHeight: editorHeight,
      maxHeight: maxHeight
    }, /*#__PURE__*/React__default.createElement(reactDraftWysiwyg.Editor, {
      readOnly: disabled,
      toolbarHidden: disabled,
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
    }, /*#__PURE__*/React__default.createElement("textarea", {
      disabled: true,
      value: draftToHtml(draftJs.convertToRaw(editorState.getCurrentContent()))
    }))));
  };
  return HTMLTextEditor;
}(React.Component);

var items = ['Bold', 'Italic', 'Underline', 'StrikeThrough', 'FontName', 'FontSize', 'LowerCase', 'UpperCase', '|', 'Formats', 'Alignments', 'Outdent', 'Indent', 'SuperScript', 'SubScript', '|', 'CreateTable', 'CreateLink', 'Image', '|', 'ClearFormat', 'Print', 'SourceCode', 'FullScreen', '|', 'Undo', 'Redo'];
var tableItems = ['TableHeader', 'TableRows', 'TableColumns', 'TableCell', '-', 'BackgroundColor', 'TableRemove', 'TableCellVerticalAlign', 'Styles'];
var imageItems = ['Replace', 'Align', 'Caption', 'Remove', 'InsertLink', 'OpenImageLink', '-', 'EditImageLink', 'RemoveImageLink', 'Display', 'AltText', 'Dimension'];

function HTMLEditor(props) {
  var _props$language = props.language,
    language = _props$language === void 0 ? "En" : _props$language,
    height = props.height,
    enabled = props.enabled,
    disabled = props.disabled,
    value = props.value,
    onChange = props.onChange;
  var isEnabled = enabled === false || disabled === true ? false : true;
  var rteObj;
  var _useState = React.useState(false),
    initialization = _useState[0],
    setInitialization = _useState[1];
  React.useEffect(function () {
    setSyncfusionLocalizationV2();
    setInitialization(true);
  }, []);
  React.useEffect(function () {
    try {
      var element = document.getElementById("js-licensing");
      if (element) {
        element.remove();
      }
      var aTags = document.getElementsByTagName("a");
      var searchText = "Claim your free account";
      _$2.each(aTags, function (tag) {
        if (tag && tag.textContent.toLowerCase() == searchText.toLowerCase()) {
          var parentElement = tag.parentElement;
          parentElement.remove();
          var secondParentElement = parentElement.parentElement;
          if (secondParentElement) {
            secondParentElement.remove();
            var thirdParentElement = secondParentElement.parentElement;
            if (thirdParentElement) {
              thirdParentElement.remove();
              var fourthParentElement = thirdParentElement.parentElement;
              if (fourthParentElement) {
                fourthParentElement.remove();
              }
            }
          }
          var divTags = document.getElementsByTagName("div");
          _$2.each(divTags, function (tag) {
            if (tag) {
              var style = tag.style;
              if (style.position === "fixed" && style.width == "100%" && style.height == "100%" && style.zIndex == "99999" && style.backgroundColor == "rgba(0, 0, 0, 0.5)") {
                tag.remove();
                return;
              }
            }
          });
        }
      });
    } catch (e) {
      console.error(e);
    }
  }, [initialization]);
  function created() {
    rteObj.refreshUI();
  }
  var quickToolbarSettings = {
    table: tableItems,
    image: imageItems
  };
  var toolbarSettings = {
    items: items,
    type: 'Expand'
  };
  return /*#__PURE__*/React__default.createElement(React__default.Fragment, null, initialization === true && /*#__PURE__*/React__default.createElement(ej2ReactRichtexteditor.RichTextEditorComponent, {
    id: "toolsRTE",
    height: height,
    locale: getLocaleByLanguage(language),
    ref: function ref(richtexteditor) {
      rteObj = richtexteditor;
    },
    enabled: isEnabled,
    value: value,
    toolbarSettings: toolbarSettings,
    created: created,
    pasteCleanupSettings: {
      prompt: true,
      plainText: false,
      keepFormat: false
    },
    insertImageSettings: {
      allowedTypes: [".png", ".png"],
      display: "inline",
      width: "auto",
      height: "auto",
      saveFormat: "Base64"
    },
    quickToolbarSettings: quickToolbarSettings,
    showCharCount: true,
    change: function change(e) {
      onChange(e.value);
    }
  }, /*#__PURE__*/React__default.createElement(ej2ReactRichtexteditor.Inject, {
    services: [ej2ReactRichtexteditor.Toolbar, ej2ReactRichtexteditor.Image, ej2ReactRichtexteditor.Link, ej2ReactRichtexteditor.HtmlEditor, ej2ReactRichtexteditor.Count, ej2ReactRichtexteditor.QuickToolbar, ej2ReactRichtexteditor.Table, ej2ReactRichtexteditor.FileManager, ej2ReactRichtexteditor.PasteCleanup]
  })));
}

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
    if (_$2.isEmpty(tooltip) === true) {
      return /*#__PURE__*/React__default.createElement(React__default.Fragment, null, children);
    } else {
      return /*#__PURE__*/React__default.createElement(reactBootstrap.OverlayTrigger, {
        style: this.props.style,
        className: this.props.className,
        placement: placement,
        delay: {
          delay: delay
        },
        overlay: /*#__PURE__*/React__default.createElement(reactBootstrap.Tooltip, null, tooltip)
      }, children);
    }
  };
  return CustomTooltip;
}(React.Component);

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

var _templateObject$8, _templateObject2$1, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10, _templateObject11, _templateObject12, _templateObject13;
var ImageBoxDiv = styled.div(_templateObject$8 || (_templateObject$8 = _taggedTemplateLiteralLoose(["\n    position: relative;\n"])));
function ImageBox(props) {
  return /*#__PURE__*/React__default.createElement(ImageBoxDiv, null, props.children);
}
var IconsBoxDiv = styled.div(_templateObject2$1 || (_templateObject2$1 = _taggedTemplateLiteralLoose(["\n    position: absolute;\n    z-index: 10;\n    top: -3px;\n    left: -17px;\n"])));
function IconsBox(props) {
  return /*#__PURE__*/React__default.createElement(IconsBoxDiv, null, props.children);
}
var StyledFaCircleUpdate = styled(reactFontawesome.FontAwesomeIcon)(_templateObject3 || (_templateObject3 = _taggedTemplateLiteralLoose(["\n    opacity: 0.7;\n    color: #007bff;\n    cursor: pointer;\n"])));
var StyledPencilAlt = styled(reactFontawesome.FontAwesomeIcon)(_templateObject4 || (_templateObject4 = _taggedTemplateLiteralLoose(["\n    color: white;\n    cursor: pointer;\n"])));
function UpdateImageIcon() {
  return /*#__PURE__*/React__default.createElement("span", {
    className: "fa-stack small"
  }, /*#__PURE__*/React__default.createElement(StyledFaCircleUpdate, {
    className: "fa-stack-2x",
    icon: freeSolidSvgIcons.faCircle
  }), /*#__PURE__*/React__default.createElement(StyledPencilAlt, {
    className: "fa-stack-1x",
    icon: freeSolidSvgIcons.faPencilAlt
  }));
}
var StyledDivDeleteImage = styled.div(_templateObject5 || (_templateObject5 = _taggedTemplateLiteralLoose(["\n    top: -10px\n"])));
var StyledFaCircleDelete = styled(reactFontawesome.FontAwesomeIcon)(_templateObject6 || (_templateObject6 = _taggedTemplateLiteralLoose(["\n    opacity: 0.7;\n    color: #dc3545;\n    cursor: pointer;\n"])));
var StyledTrashAlt = styled(reactFontawesome.FontAwesomeIcon)(_templateObject7 || (_templateObject7 = _taggedTemplateLiteralLoose(["\n    color: white;\n    cursor: pointer;\n"])));
function DeleteImageIcon(props) {
  return /*#__PURE__*/React__default.createElement(StyledDivDeleteImage, _extends({
    className: "fa-stack small"
  }, props), /*#__PURE__*/React__default.createElement(StyledFaCircleDelete, {
    className: "fa-stack-2x",
    icon: freeSolidSvgIcons.faCircle
  }), /*#__PURE__*/React__default.createElement(StyledTrashAlt, {
    className: "fa-stack-1x",
    icon: freeSolidSvgIcons.faTrashAlt
  }));
}
var StyledImg = styled.img(_templateObject8 || (_templateObject8 = _taggedTemplateLiteralLoose(["\n    max-width: 100% !important;\n    max-height: 100%;\n    cursor: pointer;\n"])));
function StyledImage(props) {
  return /*#__PURE__*/React__default.createElement(StyledImg, props);
}
var StyledButton = styled(reactBootstrap.Button)(_templateObject9 || (_templateObject9 = _taggedTemplateLiteralLoose(["\n    width: 104px;\n    height: 104px;\n    background-color: #fafafa;\n    text-align: center;\n    border-radius: 4px;\n    vertical-align: top;\n    border: 1px dashed;\n    border-color: ", ";\n"])), function (props) {
  return props.error === true || props.isinvalid === true ? "#dc3545" : "#d9d9d9";
});
function UploadImageButton(props) {
  return /*#__PURE__*/React__default.createElement(StyledButton, props, props.children);
}
var StyledDivErrorMessage = styled.div(_templateObject10 || (_templateObject10 = _taggedTemplateLiteralLoose(["\n    margin-top: 0.25rem;\n    font-size: 80%;\n    color: #dc3545;\n"])));
function ErrorMessage(props) {
  return /*#__PURE__*/React__default.createElement(StyledDivErrorMessage, null, props.children);
}
var StyledFontAwesomeIconClose = styled(reactFontawesome.FontAwesomeIcon)(_templateObject11 || (_templateObject11 = _taggedTemplateLiteralLoose(["\n    cursor: pointer;\n    font-size: 1.5rem;\n    color: grey\n"])));
function CloseIcon(props) {
  return /*#__PURE__*/React__default.createElement("span", null, /*#__PURE__*/React__default.createElement(StyledFontAwesomeIconClose, _extends({
    icon: freeRegularSvgIcons.faTimesCircle
  }, props)));
}
var StyledFontAwesomeIconCropper = styled(reactFontawesome.FontAwesomeIcon)(_templateObject12 || (_templateObject12 = _taggedTemplateLiteralLoose(["\n    font-size: 1.5rem;\n    margin-right: 15px;\n    cursor: ", ";\n    color: ", ";\n"])), function (props) {
  return props.isError === true ? "not-allowed" : "pointer";
}, function (props) {
  return props.isError === true ? "#dee2e6" : "#007bff";
});
function CropperDownloadIcon(props) {
  return /*#__PURE__*/React__default.createElement("span", null, /*#__PURE__*/React__default.createElement(StyledFontAwesomeIconCropper, _extends({}, props, {
    icon: freeSolidSvgIcons.faDownload
  })));
}
var StyledFontAwesomeIconSave = styled(reactFontawesome.FontAwesomeIcon)(_templateObject13 || (_templateObject13 = _taggedTemplateLiteralLoose(["\n    font-size: 1.5rem;\n    margin-right: 15px;\n    cursor: ", ";\n    color: ", ";\n"])), function (props) {
  return props.isError === true ? "not-allowed" : "pointer";
}, function (props) {
  return props.isError === true ? "#dee2e6" : "#007bff";
});
function CropperSaveIcon(props) {
  return /*#__PURE__*/React__default.createElement("span", null, /*#__PURE__*/React__default.createElement(StyledFontAwesomeIconSave, _extends({}, props, {
    icon: freeRegularSvgIcons.faSave
  })));
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
        reactToastify.toast.warn(localization.minCroppedWidth || "minCroppedWidth");
      }
    }
    if (maxCroppedWidth != null && croppedWidth > maxCroppedWidth) {
      isError = true;
      if (showMessage == true) {
        reactToastify.toast.warn(localization.maxCroppedWidth || "maxCroppedWidth");
      }
    }
    if (minCroppedHeight != null && croppedHeight < minCroppedHeight) {
      isError = true;
      if (showMessage == true) {
        reactToastify.toast.warn(localization.minCroppedHeight || "minCroppedHeight");
      }
    }
    if (maxCroppedHeight != null && croppedHeight > maxCroppedHeight) {
      isError = true;
      if (showMessage == true) {
        reactToastify.toast.warn(localization.maxCroppedHeight || "maxCroppedHeight");
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
    return /*#__PURE__*/React__default.createElement(reactBootstrap.Card, null, /*#__PURE__*/React__default.createElement(reactBootstrap.Card.Header, null, /*#__PURE__*/React__default.createElement("span", {
      style: {
        "float": "right"
      }
    }, /*#__PURE__*/React__default.createElement(CustomTooltip, {
      tooltip: localization.download || "Download"
    }, /*#__PURE__*/React__default.createElement(CropperDownloadIcon, {
      tooltip: localization.download || "Download",
      isError: isError,
      onClick: this.downloadCroppedImg
    })), /*#__PURE__*/React__default.createElement(CustomTooltip, {
      tooltip: localization.save || "Save"
    }, /*#__PURE__*/React__default.createElement(CropperSaveIcon, {
      isError: isError,
      onClick: function onClick() {
        _this3.parseCroppedImage();
      }
    })), /*#__PURE__*/React__default.createElement(CustomTooltip, {
      tooltip: localization.cancel || "Cancel"
    }, /*#__PURE__*/React__default.createElement(CloseIcon, {
      onClick: this.props.onClose
    })))), /*#__PURE__*/React__default.createElement(reactBootstrap.Card.Body, null, /*#__PURE__*/React__default.createElement(reactBootstrap.Row, null, /*#__PURE__*/React__default.createElement(reactBootstrap.Col, {
      sm: 5
    }, localization.loaded_image_to_crop || "Loaded image to crop"), /*#__PURE__*/React__default.createElement(reactBootstrap.Col, {
      sm: 2
    }), /*#__PURE__*/React__default.createElement(reactBootstrap.Col, {
      sm: 5
    }, localization.cropped_image || "Cropped image")), /*#__PURE__*/React__default.createElement(reactBootstrap.Row, {
      style: {
        marginTop: "1rem"
      }
    }, /*#__PURE__*/React__default.createElement(reactBootstrap.Col, {
      sm: 5
    }, /*#__PURE__*/React__default.createElement(reactBootstrap.Image, {
      src: src,
      id: "image",
      fluid: true
    })), /*#__PURE__*/React__default.createElement(reactBootstrap.Col, {
      sm: 2
    }), /*#__PURE__*/React__default.createElement(reactBootstrap.Col, {
      sm: 5
    }, croppedImageUrl == null && /*#__PURE__*/React__default.createElement("div", null, localization.crop_message || "Crop the image by creating or moving the 'cropping window'!"), croppedImageUrl && /*#__PURE__*/React__default.createElement(reactBootstrap.Image, {
      src: croppedImageUrl,
      fluid: true
    })))));
  };
  return CropImage;
}(React.Component);

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
          reactToastify.toast.warn(message);
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
              reactToastify.toast.warn(message);
              reject();
              return;
            }
          }
          if (constraints === true) {
            if (imageWidth < minWidth) {
              isError = true;
              var message = localization.imageDimensionsConstraintsAtLeast || "Image dimensions must be at least";
              message = message + " " + minWidth + "x" + minHeight + " pixel";
              reactToastify.toast.warn(message);
            } else if (imageWidth > maxWidth) {
              isError = true;
              var message = localization.imageDimensionsConstraintsAtMost || "Image dimensions must be at most";
              message = message + " " + maxWidth + "x" + maxHeight + " pixel";
              ;
              reactToastify.toast.warn(message);
            } else if (imageHeight < minHeight) {
              isError = true;
              var message = localization.imageDimensionsConstraintsAtLeast || "Image dimensions must be at least";
              message = message + " " + minWidth + "x" + minHeight + " pixel";
              ;
              reactToastify.toast.warn(message);
            } else if (imageHeight > maxHeight) {
              isError = true;
              var message = localization.imageDimensionsConstraintsAtMost || "Image dimensions must be at most";
              message = message + " " + maxWidth + "x" + maxHeight + " pixel";
              ;
              reactToastify.toast.warn(message);
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
        reactToastify.toast.error(localization.errorUploadingImage || "Error uploading image");
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
          reactToastify.toast.error(localization.errorResizingImage || "Error resizing image");
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
          Resizer$1.imageFileResizer(input, newWidth || 5000, newHeight || 5000, 'PNG', 100, 0, function (uri) {
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
          reactToastify.toast.warn(message);
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
      isInvalid = _this$props2.isInvalid,
      isinvalid = _this$props2.isinvalid,
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
    return /*#__PURE__*/React__default.createElement(React__default.Fragment, null, /*#__PURE__*/React__default.createElement(reactBootstrap.Row, null, /*#__PURE__*/React__default.createElement(reactBootstrap.Col, {
      sm: 12
    }, _$2.isEmpty(image) === false && /*#__PURE__*/React__default.createElement(ImageBox, null, /*#__PURE__*/React__default.createElement(IconsBox, null, /*#__PURE__*/React__default.createElement("div", null, /*#__PURE__*/React__default.createElement("label", {
      htmlFor: "file-input"
    }, /*#__PURE__*/React__default.createElement(UpdateImageIcon, null)), /*#__PURE__*/React__default.createElement("input", {
      id: "file-input",
      type: "file",
      accept: "image/*",
      style: {
        display: "none"
      },
      multiple: false,
      onChange: this.handleFileUpload
    })), /*#__PURE__*/React__default.createElement(DeleteImageIcon, {
      onClick: function onClick() {
        return _this3.onRemove();
      }
    })), /*#__PURE__*/React__default.createElement(StyledImage, {
      style: imageStyle,
      src: image,
      alt: "img",
      onClick: function onClick() {
        _this3.setState({
          showPreviewImage: true
        });
      }
    })), _$2.isEmpty(image) === true && /*#__PURE__*/React__default.createElement(React__default.Fragment, null, /*#__PURE__*/React__default.createElement("input", {
      ref: "fileInput",
      onChange: this.handleFileUpload,
      type: "file",
      accept: "image/*",
      style: {
        display: "none"
      },
      multiple: false
    }), /*#__PURE__*/React__default.createElement(UploadImageButton, {
      disabled: disabled,
      variant: "outline-secondary",
      isinvalid: error || isInvalid || isinvalid,
      onClick: function onClick() {
        return _this3.refs.fileInput.click();
      }
    }, /*#__PURE__*/React__default.createElement(reactFontawesome.FontAwesomeIcon, {
      icon: freeSolidSvgIcons.faUpload,
      onClick: this.props.onCancel
    }))))), (error === true || isInvalid === true || isinvalid) && /*#__PURE__*/React__default.createElement(reactBootstrap.Row, null, /*#__PURE__*/React__default.createElement(reactBootstrap.Col, null, /*#__PURE__*/React__default.createElement(ErrorMessage, null, errorMessage || "Error"))), /*#__PURE__*/React__default.createElement(reactBootstrap.Modal, {
      onHide: function onHide() {},
      size: "xl",
      show: showPreviewImage
    }, /*#__PURE__*/React__default.createElement(reactBootstrap.Modal.Body, null, /*#__PURE__*/React__default.createElement(reactBootstrap.Card, null, /*#__PURE__*/React__default.createElement(reactBootstrap.Card.Header, null, /*#__PURE__*/React__default.createElement("span", {
      style: {
        "float": "right"
      }
    }, /*#__PURE__*/React__default.createElement(CustomTooltip, {
      tooltip: localization.cancel || "Cancel"
    }, /*#__PURE__*/React__default.createElement(CloseIcon, {
      onClick: function onClick() {
        _this3.setState({
          showPreviewImage: false
        });
      }
    })))), /*#__PURE__*/React__default.createElement(reactBootstrap.Card.Body, null, /*#__PURE__*/React__default.createElement(reactBootstrap.Image, {
      src: image,
      fluid: true
    }))))), /*#__PURE__*/React__default.createElement(reactBootstrap.Modal, {
      onHide: function onHide() {},
      size: "xl",
      show: showCropModal
    }, /*#__PURE__*/React__default.createElement(CropImage, {
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
}(React.Component);

var _templateObject$9, _templateObject2$2, _templateObject3$1, _templateObject4$1, _templateObject5$1, _templateObject6$1, _templateObject7$1, _templateObject8$1, _templateObject9$1, _templateObject10$1;
var StyledButtonUpload = styled(reactBootstrap.Button)(_templateObject$9 || (_templateObject$9 = _taggedTemplateLiteralLoose(["\n    width: 50px;\n    height: 60px;\n    background-color: #fafafa;\n    text-align: center;\n    border-radius: 4px;\n    vertical-align: top;\n    border: 1px dashed;\n    border-color: ", ";\n"])), function (props) {
  return props.error === true || props.isInvalid === true ? "#dc3545" : "#d9d9d9";
});
function UploadImageButton$1(props) {
  return /*#__PURE__*/React__default.createElement(StyledButtonUpload, props, props.children);
}
var StyledDivDocumentBox = styled.div(_templateObject2$2 || (_templateObject2$2 = _taggedTemplateLiteralLoose(["\n    position: relative;\n"])));
function DocumentBox(props) {
  return /*#__PURE__*/React__default.createElement(StyledDivDocumentBox, null, props.children);
}
var StyledDivIconxBox = styled.div(_templateObject3$1 || (_templateObject3$1 = _taggedTemplateLiteralLoose(["\n    position: absolute;\n    z-index: 10;\n    top: -3px;\n    left: -17px;\n"])));
function IconsBox$1(props) {
  return /*#__PURE__*/React__default.createElement(StyledDivIconxBox, null, props.children);
}
var StyledFaCircleUpdate$1 = styled(reactFontawesome.FontAwesomeIcon)(_templateObject4$1 || (_templateObject4$1 = _taggedTemplateLiteralLoose(["\n    opacity: 0.7;\n    color: #007bff;\n    cursor: pointer;\n"])));
var StyledPencilAlt$1 = styled(reactFontawesome.FontAwesomeIcon)(_templateObject5$1 || (_templateObject5$1 = _taggedTemplateLiteralLoose(["\n    color: white;\n    cursor: pointer;\n"])));
function UpdateImageIcon$1() {
  return /*#__PURE__*/React__default.createElement("span", {
    className: "fa-stack small"
  }, /*#__PURE__*/React__default.createElement(StyledFaCircleUpdate$1, {
    className: "fa-stack-2x",
    icon: freeSolidSvgIcons.faCircle
  }), /*#__PURE__*/React__default.createElement(StyledPencilAlt$1, {
    className: "fa-stack-1x",
    icon: freeSolidSvgIcons.faPencilAlt
  }));
}
var StyledDiv$7 = styled.div(_templateObject6$1 || (_templateObject6$1 = _taggedTemplateLiteralLoose(["\n    top: -10px\n"])));
var StyledFaCircleDelete$1 = styled(reactFontawesome.FontAwesomeIcon)(_templateObject7$1 || (_templateObject7$1 = _taggedTemplateLiteralLoose(["\n    opacity: 0.7;\n    color: #dc3545;\n    cursor: pointer;\n"])));
var StyledTrashAlt$1 = styled(reactFontawesome.FontAwesomeIcon)(_templateObject8$1 || (_templateObject8$1 = _taggedTemplateLiteralLoose(["\n    color: white;\n    cursor: pointer;\n"])));
function DeleteImageIcon$1(props) {
  return /*#__PURE__*/React__default.createElement(StyledDiv$7, _extends({
    className: "fa-stack small"
  }, props), /*#__PURE__*/React__default.createElement(StyledFaCircleDelete$1, {
    className: "fa-stack-2x",
    icon: freeSolidSvgIcons.faCircle
  }), /*#__PURE__*/React__default.createElement(StyledTrashAlt$1, {
    className: "fa-stack-1x",
    icon: freeSolidSvgIcons.faTrashAlt
  }));
}
var StyledFontAwesomeIcon = styled(reactFontawesome.FontAwesomeIcon)(_templateObject9$1 || (_templateObject9$1 = _taggedTemplateLiteralLoose(["\n    color: #007bff;\n    font-size: 4rem;\n"])));
function FileIcon(props) {
  return /*#__PURE__*/React__default.createElement(StyledFontAwesomeIcon, {
    icon: freeRegularSvgIcons.faFileAlt
  });
}
var StyledDivErrorMessage$1 = styled.div(_templateObject10$1 || (_templateObject10$1 = _taggedTemplateLiteralLoose(["\n    margin-top: 0.25rem;\n    font-size: 80%;\n    color: #dc3545;\n"])));
function ErrorMessage$1(props) {
  return /*#__PURE__*/React__default.createElement(StyledDivErrorMessage$1, null, props.children);
}

function UploadDocument(props) {
  var document = props.document,
    onChange = props.onChange,
    onRemove = props.onRemove,
    disabled = props.disabled,
    isInvalid = props.isInvalid,
    errorMessage = props.errorMessage;
  var inputRef = React.useRef(null);
  function handleFileUpload(e) {
    var files = e.target.files;
    if (files.length > 0) {
      var fileSrc = files[0];
      var reader = new FileReader();
      reader.onload = function () {
        var data = reader.result;
        var fileName = fileSrc.name;
        var fileType = fileSrc.type;
        var fileExtension = data.split(';')[0].split('/')[1];
        onChange(data, fileName, fileExtension, fileType);
      };
      reader.readAsDataURL(fileSrc);
    }
  }
  return /*#__PURE__*/React__default.createElement(reactBootstrap.Row, null, /*#__PURE__*/React__default.createElement(reactBootstrap.Col, null, _$2.isEmpty(document) === true && /*#__PURE__*/React__default.createElement(React__default.Fragment, null, /*#__PURE__*/React__default.createElement("input", {
    ref: inputRef,
    onChange: handleFileUpload,
    type: "file",
    accept: "application/*, text/*",
    style: {
      display: "none"
    },
    multiple: false
  }), /*#__PURE__*/React__default.createElement(UploadImageButton$1, {
    disabled: disabled,
    variant: "outline-secondary",
    isInvalid: isInvalid,
    onClick: function onClick() {
      inputRef.current.click();
    }
  }, /*#__PURE__*/React__default.createElement(reactFontawesome.FontAwesomeIcon, {
    icon: freeSolidSvgIcons.faUpload
  })), isInvalid === true && /*#__PURE__*/React__default.createElement(ErrorMessage$1, null, errorMessage || "Error")), _$2.isEmpty(document) === false && /*#__PURE__*/React__default.createElement(DocumentBox, null, /*#__PURE__*/React__default.createElement(IconsBox$1, null, /*#__PURE__*/React__default.createElement("div", null, /*#__PURE__*/React__default.createElement("label", {
    htmlFor: "file-input"
  }, /*#__PURE__*/React__default.createElement(UpdateImageIcon$1, null)), /*#__PURE__*/React__default.createElement("input", {
    id: "file-input",
    type: "file",
    accept: "application/*, text/*",
    style: {
      display: "none"
    },
    multiple: false,
    onChange: handleFileUpload
  })), /*#__PURE__*/React__default.createElement(DeleteImageIcon$1, {
    onClick: onRemove
  })), /*#__PURE__*/React__default.createElement(FileIcon, null), /*#__PURE__*/React__default.createElement("div", null, document && document.fileName ? document.fileName : "N/A"))));
}

var OrbitalAddressComponentsPicker = /*#__PURE__*/function (_Component) {
  _inheritsLoose(OrbitalAddressComponentsPicker, _Component);
  function OrbitalAddressComponentsPicker(props) {
    var _this;
    _this = _Component.call(this, props) || this;
    _this.state = {
      autoCompleteLocation: _this.props.location,
      location: _this.props.location,
      disabled: _this.props.disabled
    };
    _this.placeAutocomplete = React__default.createRef();
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
    if (nextProps.disabled != this.state.disabled) {
      this.setState({
        disabled: nextProps.disabled
      });
    }
  };
  _proto.onSelectCity = function onSelectCity(location, placeId) {
    var self = this;
    var localization = this.props.localization;
    PlacesAutocomplete.geocodeByPlaceId(placeId).then(function (results) {
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
        reactToastify.toast.error(localization.error || "Error");
      }
    })["catch"](function (error) {
      console.error(error);
      reactToastify.toast.error(localization.error || "Error");
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
    var _this$state = this.state,
      autoCompleteLocation = _this$state.autoCompleteLocation,
      disabled = _this$state.disabled;
    var _this$props = this.props,
      localization = _this$props.localization,
      error = _this$props.error;
    return /*#__PURE__*/React__default.createElement(PlacesAutocomplete__default, {
      ref: this.placeAutocomplete,
      value: autoCompleteLocation || "",
      onChange: this.changeCity,
      onSelect: this.onSelectCity
    }, function (_ref) {
      var getInputProps = _ref.getInputProps,
        suggestions = _ref.suggestions,
        getSuggestionItemProps = _ref.getSuggestionItemProps;
      return /*#__PURE__*/React__default.createElement("div", null, /*#__PURE__*/React__default.createElement(reactBootstrap.FormGroup, {
        style: {
          width: "100%"
        }
      }, /*#__PURE__*/React__default.createElement(reactBootstrap.FormControl, _extends({
        isInvalid: error
      }, getInputProps({
        placeholder: self.props.placeholder || localization.searchPlaces || "Search places",
        style: {
          marginBottom: 10
        },
        disabled: disabled
      }), {
        value: autoCompleteLocation || ""
      })), /*#__PURE__*/React__default.createElement(reactBootstrap.Form.Control.Feedback, {
        type: "invalid"
      }, localization.completeField || "Please complete the field")), /*#__PURE__*/React__default.createElement("div", {
        className: "autocomplete-dropdown-container"
      }, suggestions.map(function (suggestion, index) {
        var className = self.getAutoCompleteClassname(suggestion);
        var style = self.getAutoCompleteStyle(suggestion);
        return /*#__PURE__*/React__default.createElement("div", _extends({
          key: index
        }, getSuggestionItemProps(suggestion, {
          className: className,
          style: style
        })), /*#__PURE__*/React__default.createElement("span", null, suggestion.description));
      })));
    });
  };
  return OrbitalAddressComponentsPicker;
}(React.Component);

var _templateObject$a;
var OrbitalInfoIcon = styled(reactFontawesome.FontAwesomeIcon)(_templateObject$a || (_templateObject$a = _taggedTemplateLiteralLoose(["\n    color: #007bff;\n    font-size: 0.7rem;\n    margin-bottom: 0.35rem;\n"])));
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
    _this.placeAutocomplete = React__default.createRef();
    _this.map = React__default.createRef();
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
    PlacesAutocomplete.geocodeByAddress(address).then(function (results) {
      var data = results[0];
      if (data) {
        return PlacesAutocomplete.getLatLng(data);
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
      errorAddress = _this$props.errorAddress,
      errorCity = _this$props.errorCity,
      mandatory = _this$props.mandatory,
      halfbold = _this$props.halfbold;
    var _ref = position || {},
      lat = _ref.lat,
      lng = _ref.lng;
    var tooltip = localization.cityDoesNotModifyAddress || "Changing the city does not affect the address; viceversa the city will change";
    var cityLabel = /*#__PURE__*/React__default.createElement("span", null, " ", localization.city || "City", " ", /*#__PURE__*/React__default.createElement(CustomTooltip, {
      tooltip: tooltip
    }, /*#__PURE__*/React__default.createElement(OrbitalInfoIcon, {
      icon: freeSolidSvgIcons.faInfoCircle
    })));
    return /*#__PURE__*/React__default.createElement("div", null, /*#__PURE__*/React__default.createElement(reactBootstrap.Row, null, /*#__PURE__*/React__default.createElement(reactBootstrap.Col, {
      sm: 5
    }, mandatory == false && /*#__PURE__*/React__default.createElement(NormalFieldLabel, {
      halfbold: halfbold,
      value: localization.address || "Address"
    }), (mandatory == null || mandatory == true) && /*#__PURE__*/React__default.createElement(MandatoryFieldLabel, {
      halfbold: halfbold,
      value: localization.address || "Address"
    })), /*#__PURE__*/React__default.createElement(reactBootstrap.Col, {
      sm: 2
    }, mandatory == false && /*#__PURE__*/React__default.createElement(NormalFieldLabel, {
      halfbold: halfbold,
      value: localization.lat || "Lat"
    }), (mandatory == null || mandatory == true) && /*#__PURE__*/React__default.createElement(MandatoryFieldLabel, {
      halfbold: halfbold,
      value: localization.lat || "Lat"
    })), /*#__PURE__*/React__default.createElement(reactBootstrap.Col, {
      sm: 2
    }, mandatory == false && /*#__PURE__*/React__default.createElement(NormalFieldLabel, {
      halfbold: halfbold,
      value: localization.lon || "Lon"
    }), (mandatory == null || mandatory == true) && /*#__PURE__*/React__default.createElement(MandatoryFieldLabel, {
      halfbold: halfbold,
      value: localization.lon || "Lon"
    })), /*#__PURE__*/React__default.createElement(reactBootstrap.Col, {
      sm: 3
    }, mandatory == false && /*#__PURE__*/React__default.createElement(NormalFieldLabel, {
      halfbold: halfbold,
      value: localization.city || "City"
    }), (mandatory == null || mandatory == true) && /*#__PURE__*/React__default.createElement(MandatoryFieldLabel, {
      halfbold: halfbold,
      value: cityLabel
    }))), /*#__PURE__*/React__default.createElement(reactBootstrap.Row, null, /*#__PURE__*/React__default.createElement(reactBootstrap.Col, {
      sm: 5
    }, /*#__PURE__*/React__default.createElement(PlacesAutocomplete__default, {
      ref: this.placeAutocomplete,
      value: autoCompleteAddress || "",
      onChange: this.changeAddress,
      onSelect: this.onSelectAddress
    }, function (_ref2) {
      var getInputProps = _ref2.getInputProps,
        suggestions = _ref2.suggestions,
        getSuggestionItemProps = _ref2.getSuggestionItemProps;
      return /*#__PURE__*/React__default.createElement("div", null, /*#__PURE__*/React__default.createElement(reactBootstrap.InputGroup, {
        style: {
          width: "100%"
        }
      }, /*#__PURE__*/React__default.createElement(reactBootstrap.Form.Control, _extends({
        isInvalid: errorAddress
      }, getInputProps({
        placeholder: localization.searchPlaces || "Search places"
      }), {
        value: autoCompleteAddress || ""
      })), /*#__PURE__*/React__default.createElement(reactBootstrap.Form.Control.Feedback, {
        type: "invalid"
      }, errorAddress, " ")), /*#__PURE__*/React__default.createElement("div", {
        className: "autocomplete-dropdown-container"
      }, suggestions.map(function (suggestion, index) {
        var className = self.getAutoCompleteClassname(suggestion);
        var style = self.getAutoCompleteStyle(suggestion);
        return /*#__PURE__*/React__default.createElement("div", _extends({
          key: index
        }, getSuggestionItemProps(suggestion, {
          className: className,
          style: style
        })), /*#__PURE__*/React__default.createElement("span", {
          key: index
        }, suggestion.description));
      })));
    })), /*#__PURE__*/React__default.createElement(reactBootstrap.Col, {
      sm: 2
    }, /*#__PURE__*/React__default.createElement(reactBootstrap.Form.Control, {
      placeholder: localization.lat || "Lat",
      value: lat || "",
      disabled: true
    })), /*#__PURE__*/React__default.createElement(reactBootstrap.Col, {
      sm: 2
    }, /*#__PURE__*/React__default.createElement(reactBootstrap.Form.Control, {
      placeholder: localization.lon || "Lon",
      value: lng || "",
      disabled: true
    })), /*#__PURE__*/React__default.createElement(reactBootstrap.Col, {
      sm: 3
    }, /*#__PURE__*/React__default.createElement(reactBootstrap.InputGroup, null, /*#__PURE__*/React__default.createElement(reactBootstrap.Form.Control, {
      placeholder: localization.city || "City",
      isInvalid: errorCity,
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
    }), /*#__PURE__*/React__default.createElement(reactBootstrap.Form.Control.Feedback, {
      type: "invalid"
    }, errorCity)))), /*#__PURE__*/React__default.createElement(reactBootstrap.Row, {
      style: {
        marginTop: "1rem"
      }
    }, /*#__PURE__*/React__default.createElement(reactBootstrap.Col, {
      sm: 12
    }, /*#__PURE__*/React__default.createElement(LocationPicker, {
      zoom: 15,
      ref: this.map,
      circleOptions: defaultCircleOptions,
      containerElement: /*#__PURE__*/React__default.createElement("div", {
        className: "mapContainer"
      }),
      mapElement: position ? /*#__PURE__*/React__default.createElement("div", {
        style: {
          height: "250px"
        }
      }) : /*#__PURE__*/React__default.createElement("div", {
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
}(React.Component);

var _templateObject$b, _templateObject2$3, _templateObject3$2, _templateObject4$2, _templateObject5$2, _templateObject6$2, _templateObject7$2, _templateObject8$2;
var NoData = styled.div(_templateObject$b || (_templateObject$b = _taggedTemplateLiteralLoose(["\n    display: block;\n    position: absolute;\n    left: 50%;\n    top: 40%;\n    z-index: 1;\n    padding: 20px;\n    background-color: white;\n    border: 1px solid #dee2e6;\n"])));
var SubContentContainer = styled.div(_templateObject2$3 || (_templateObject2$3 = _taggedTemplateLiteralLoose(["\n    border-bottom: 1px solid #dee2e6;\n    padding: 15px;\n"])));
var StyledTable = styled.div(_templateObject3$2 || (_templateObject3$2 = _taggedTemplateLiteralLoose(["\n    display: inline-block;\n    border-spacing: 0;\n    border: 1px solid #dee2e6;\n    width: 100%;\n"])));
var StyledTd = styled.div(_templateObject4$2 || (_templateObject4$2 = _taggedTemplateLiteralLoose(["\n    margin: 0;\n    padding: 0.5rem;\n    border-bottom: 1px solid #dee2e6;\n    border-right: 1px solid #dee2e6;\n    position: relative;\n"])));
var StyledTh = styled.div(_templateObject5$2 || (_templateObject5$2 = _taggedTemplateLiteralLoose(["\n    margin: 0;\n    padding: 0.5rem;\n    border-bottom: 1px solid #dee2e6;\n    border-right: 1px solid #dee2e6;\n    position: relative;\n"])));
var PaginationRow = styled(reactBootstrap.Row)(_templateObject6$2 || (_templateObject6$2 = _taggedTemplateLiteralLoose(["\n    margin-top: 1rem;\n"])));
var Resizer = styled.div(_templateObject7$2 || (_templateObject7$2 = _taggedTemplateLiteralLoose(["\n    right: 0;\n    background: #dee2e6;\n    width: 1px;\n    height: 100%;\n    position: absolute;\n    top: 0;\n    z-index: 1;\n    touch-action: none;\n"])));
var StyledTr = styled.div(_templateObject8$2 || (_templateObject8$2 = _taggedTemplateLiteralLoose(["\n&:last-child{\n    overflow-x: hidden;\n    ", "{\n        border-bottom: 0;\n    }\n}\n"])), StyledTd);

var _excluded = ["indeterminate"];
var IndeterminateCheckbox = React.forwardRef(function (_ref, ref) {
  var indeterminate = _ref.indeterminate,
    rest = _objectWithoutPropertiesLoose(_ref, _excluded);
  var defaultRef = React.useRef();
  var resolvedRef = ref || defaultRef;
  React.useEffect(function () {
    resolvedRef.current.indeterminate = indeterminate;
  }, [resolvedRef, indeterminate]);
  return /*#__PURE__*/React__default.createElement("input", _extends({
    type: "checkbox",
    ref: resolvedRef
  }, rest));
});
function setEmptyRows(prepareRow, canNextPage, page, pageSize, data, headerGroups) {
  var rows = null;
  if (canNextPage === false && page.length < pageSize && page[0]) {
    var new_filling_rows = pageSize - page.length;
    new_filling_rows = new Array(new_filling_rows);
    var page_tmp = _$2.map(new_filling_rows, function (f) {
      return page[0];
    });
    rows = _$2.map(new_filling_rows, function () {
      return headerGroups.map(function (headerGroup) {
        return /*#__PURE__*/React__default.createElement(StyledTr, headerGroup.getHeaderGroupProps(), headerGroup.headers.map(function (column) {
          return /*#__PURE__*/React__default.createElement(StyledTh, column.getHeaderProps(), /*#__PURE__*/React__default.createElement("div", {
            style: {
              color: "#66000000"
            }
          }, "."));
        }));
      });
    });
  }
  return rows;
}
function setEmptyHeaders(pageSize, headerGroups) {
  var new_filling_rows = new Array(pageSize);
  var rows = _$2.map(new_filling_rows, function () {
    return headerGroups.map(function (headerGroup) {
      return /*#__PURE__*/React__default.createElement(StyledTr, headerGroup.getHeaderGroupProps(), headerGroup.headers.map(function (column) {
        return /*#__PURE__*/React__default.createElement(StyledTh, column.getHeaderProps(), /*#__PURE__*/React__default.createElement("div", {
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
  return /*#__PURE__*/React__default.createElement("span", null, column.disableSortBy !== true && column.isSorted === false && /*#__PURE__*/React__default.createElement("span", null, " ", /*#__PURE__*/React__default.createElement(reactFontawesome.FontAwesomeIcon, {
    icon: freeSolidSvgIcons.faSort,
    style: {
      cursor: "pointer"
    },
    onClick: function onClick() {
      column.toggleSortBy();
    }
  })), /*#__PURE__*/React__default.createElement("span", null, column.isSorted ? column.isSortedDesc ? /*#__PURE__*/React__default.createElement("span", null, " ", /*#__PURE__*/React__default.createElement(reactFontawesome.FontAwesomeIcon, {
    icon: freeSolidSvgIcons.faSortDown,
    style: {
      cursor: "pointer"
    },
    onClick: function onClick() {
      column.toggleSortBy();
    }
  })) : /*#__PURE__*/React__default.createElement("span", null, " ", /*#__PURE__*/React__default.createElement(reactFontawesome.FontAwesomeIcon, {
    icon: freeSolidSvgIcons.faSortUp,
    style: {
      cursor: "pointer"
    },
    onClick: function onClick() {
      column.toggleSortBy();
    }
  })) : ""));
}
function setResize(column) {
  return /*#__PURE__*/React__default.createElement("span", null, column.canResize && /*#__PURE__*/React__default.createElement(Resizer, _extends({}, column.getResizerProps(), {
    className: "" + (column.isResizing ? "isResizing" : "")
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
    return /*#__PURE__*/React__default.createElement("option", {
      key: index,
      value: value
    }, value);
  });
  return options;
}
function getPaginationSection(localization, gotoPage, canPreviousPage, previousPage, canNextPage, nextPage, pageCount, pageIndex, pageOptions, data, pageSize, _fixedPageSize, setPageSize, _defaultPageSize, hidePagination) {
  return /*#__PURE__*/React__default.createElement(PaginationRow, {
    className: "pagination",
    hidden: hidePagination === true
  }, /*#__PURE__*/React__default.createElement(reactBootstrap.Col, {
    sm: 8
  }, /*#__PURE__*/React__default.createElement("span", null, /*#__PURE__*/React__default.createElement(reactBootstrap.Button, {
    variant: "outline-secondary",
    size: "sm",
    onClick: function onClick() {
      return gotoPage(0);
    },
    disabled: !canPreviousPage
  }, " ", "<<"), " ", /*#__PURE__*/React__default.createElement(reactBootstrap.Button, {
    variant: "outline-secondary",
    size: "sm",
    onClick: function onClick() {
      return previousPage();
    },
    disabled: !canPreviousPage
  }, " ", "<"), " ", /*#__PURE__*/React__default.createElement(reactBootstrap.Button, {
    variant: "outline-secondary",
    size: "sm",
    onClick: function onClick() {
      return nextPage();
    },
    disabled: !canNextPage
  }, " ", ">"), " ", /*#__PURE__*/React__default.createElement(reactBootstrap.Button, {
    variant: "outline-secondary",
    size: "sm",
    onClick: function onClick() {
      return gotoPage(pageCount - 1);
    },
    disabled: !canNextPage
  }, " ", ">>"), " ", /*#__PURE__*/React__default.createElement("span", {
    style: {
      "float": "right"
    }
  }, /*#__PURE__*/React__default.createElement("span", null, localization.page || "Page", " ", /*#__PURE__*/React__default.createElement("strong", null, pageIndex + 1, " ", localization.of || "of", " ", pageOptions.length), " "), /*#__PURE__*/React__default.createElement("span", null, "| ", localization.go_to_page, ": ")))), /*#__PURE__*/React__default.createElement(reactBootstrap.Col, {
    sm: 2
  }, /*#__PURE__*/React__default.createElement(reactBootstrap.Form.Control, {
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
  })), /*#__PURE__*/React__default.createElement(reactBootstrap.Col, {
    sm: 2
  }, /*#__PURE__*/React__default.createElement(reactBootstrap.Form.Control, {
    as: "select",
    size: "sm",
    value: pageSize,
    disabled: _fixedPageSize != null || data.length === 0,
    onChange: function onChange(e) {
      setPageSize(Number(e.target.value));
    }
  }, setPageSizeOptions(_defaultPageSize, _fixedPageSize))));
}

function ReactTable(props) {
  var localization = props.localization,
    columns = props.columns,
    data = props.data,
    _defaultPageSize = props._defaultPageSize,
    _fixedPageSize = props._fixedPageSize,
    _noDataMessage = props._noDataMessage,
    skipPageReset = props.skipPageReset,
    hidePagination = props.hidePagination,
    _props$showRowSelecti = props.showRowSelection,
    showRowSelection = _props$showRowSelecti === void 0 ? false : _props$showRowSelecti,
    setSelectedRows = props.setSelectedRows;
  React.useEffect(function () {
    var tableSize = _fixedPageSize || _defaultPageSize || pageSize;
    setPageSize(tableSize);
  }, [_fixedPageSize, _defaultPageSize]);
  var _useTable = reactTable.useTable({
      columns: columns,
      data: data,
      autoResetPage: !skipPageReset,
      initialState: {
        pageSize: _fixedPageSize || _defaultPageSize || 10
      },
      enableMultiRowSelection: true
    }, reactTable.useSortBy, reactTable.useExpanded, reactTable.usePagination, reactTable.useResizeColumns, reactTable.useFlexLayout, reactTable.useRowSelect, function (hooks) {
      if (showRowSelection === true) {
        hooks.visibleColumns.push(function (columns) {
          return [{
            id: "selection",
            disableSortBy: true,
            width: 30,
            Header: function Header(_ref) {
              var getToggleAllRowsSelectedProps = _ref.getToggleAllRowsSelectedProps;
              return /*#__PURE__*/React__default.createElement(IndeterminateCheckbox, getToggleAllRowsSelectedProps());
            },
            Cell: function Cell(_ref2) {
              var row = _ref2.row;
              return /*#__PURE__*/React__default.createElement(IndeterminateCheckbox, row.getToggleRowSelectedProps());
            }
          }].concat(columns);
        });
      }
    }),
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
    selectedFlatRows = _useTable.selectedFlatRows,
    _useTable$state = _useTable.state,
    pageIndex = _useTable$state.pageIndex,
    pageSize = _useTable$state.pageSize,
    selectedRowIds = _useTable$state.selectedRowIds;
  reactTable.useMountedLayoutEffect(function () {
    if (showRowSelection && setSelectedRows) {
      setSelectedRows(selectedFlatRows.map(function (row) {
        return row.original;
      }));
    }
  }, [setSelectedRows, selectedRowIds]);
  return /*#__PURE__*/React__default.createElement(React__default.Fragment, null, /*#__PURE__*/React__default.createElement(StyledTable, getTableProps(), /*#__PURE__*/React__default.createElement("div", null, headerGroups.map(function (headerGroup) {
    return /*#__PURE__*/React__default.createElement(StyledTr, headerGroup.getHeaderGroupProps(), headerGroup.headers.map(function (column) {
      return /*#__PURE__*/React__default.createElement(StyledTh, column.getHeaderProps(), column.render("Header"), setSortIcon(column), setResize(column));
    }));
  }), data.length === 0 && /*#__PURE__*/React__default.createElement("span", null, setEmptyHeaders(pageSize, headerGroups))), /*#__PURE__*/React__default.createElement("div", getTableBodyProps(), page.map(function (row, i) {
    if (row.original && row.original.subContent && _$2.isEmpty(row.original.subContent) === false) {
      row.canExpand = true;
    }
    prepareRow(row);
    return /*#__PURE__*/React__default.createElement(React__default.Fragment, {
      key: i
    }, /*#__PURE__*/React__default.createElement(StyledTr, row.getRowProps(), row.cells.map(function (cell, index) {
      return /*#__PURE__*/React__default.createElement(StyledTh, _extends({
        key: index
      }, cell.getCellProps()), cell.render("Cell"));
    })), row.isExpanded ? /*#__PURE__*/React__default.createElement(SubContentContainer, null, row.original.subContent) : null);
  }), data.length > 0 && /*#__PURE__*/React__default.createElement("span", null, setEmptyRows(prepareRow, canNextPage, page, pageSize, data, headerGroups))), data.length === 0 && /*#__PURE__*/React__default.createElement(NoData, null, /*#__PURE__*/React__default.createElement(reactFontawesome.FontAwesomeIcon, {
    icon: freeSolidSvgIcons.faInfoCircle
  }), " ", _noDataMessage || "No data")), getPaginationSection(localization, gotoPage, canPreviousPage, previousPage, canNextPage, nextPage, pageCount, pageIndex, pageOptions, data, pageSize, _fixedPageSize, setPageSize, _defaultPageSize, hidePagination));
}

var _templateObject$c;
var StyledFontAwesomeIcon$1 = styled(reactFontawesome.FontAwesomeIcon)(_templateObject$c || (_templateObject$c = _taggedTemplateLiteralLoose(["\n    color: ", ";\n    cursor: ", ";\n    margin-right: ", ";\n    font-size: 1.5rem;\n"])), function (props) {
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
  return /*#__PURE__*/React__default.createElement(CustomTooltip, {
    tooltip: tooltip
  }, /*#__PURE__*/React__default.createElement(StyledFontAwesomeIcon$1, {
    marginright: marginright,
    icon: freeRegularSvgIcons.faSave,
    disabled: disabled,
    onClick: function onClick() {
      if (disabled !== true) {
        _onClick();
      }
    }
  }));
};

var _templateObject$d, _templateObject2$4;
var Container = styled.div(_templateObject$d || (_templateObject$d = _taggedTemplateLiteralLoose(["\n    float: ", "\n"])), function (props) {
  return props["float"];
});
var StyledBsPlusCircle = styled(bs.BsPlusCircle)(_templateObject2$4 || (_templateObject2$4 = _taggedTemplateLiteralLoose(["\n    color: ", ";\n    cursor: ", ";\n    font-size:  ", ";\n"])), function (props) {
  return props.disabled === true ? "grey" : "#007bff";
}, function (props) {
  return props.disabled === true ? "not-allowed" : "pointer";
}, function (props) {
  return props.fontSize;
});
var OrbitalAddIcon = function OrbitalAddIcon(props) {
  var _float = props["float"],
    tooltip = props.tooltip,
    disabled = props.disabled,
    fontsize = props.fontsize,
    fontSize = props.fontSize,
    _onClick = props.onClick;
  return /*#__PURE__*/React__default.createElement(Container, {
    "float": _float
  }, /*#__PURE__*/React__default.createElement(CustomTooltip, {
    tooltip: tooltip
  }, /*#__PURE__*/React__default.createElement(StyledBsPlusCircle, {
    fontSize: fontSize || fontsize || "1.5rem",
    disabled: disabled,
    onClick: function onClick() {
      if (disabled !== true) {
        _onClick();
      }
    }
  })));
};

var _templateObject$e;
var StyledFontAwesomeIcon$2 = styled(reactFontawesome.FontAwesomeIcon)(_templateObject$e || (_templateObject$e = _taggedTemplateLiteralLoose(["\n    cursor: ", ";\n    color: grey;\n    font-size: 1.5rem;\n"])), function (props) {
  return props.disabled === true ? "not-allowed" : "pointer";
});
var OrbitalCancelIcon = function OrbitalCancelIcon(props) {
  var tooltip = props.tooltip,
    disabled = props.disabled,
    _onClick = props.onClick;
  return /*#__PURE__*/React__default.createElement(CustomTooltip, {
    tooltip: tooltip
  }, /*#__PURE__*/React__default.createElement(StyledFontAwesomeIcon$2, {
    icon: freeRegularSvgIcons.faTimesCircle,
    disabled: disabled,
    onClick: function onClick() {
      if (disabled !== true) {
        _onClick();
      }
    }
  }));
};

var _templateObject$f;
var StyledFormCheck = styled(reactBootstrap.FormCheck)(_templateObject$f || (_templateObject$f = _taggedTemplateLiteralLoose(["\n    padding-top:   ", ";\n    input{\n        transform: ", ";\n    }\n"])), function (props) {
  return props.paddingtop;
}, function (props) {
  return props.scale ? "scale(" + props.scale + ")" : "scale(1.5)";
});
var OrbitalCheckbox = function OrbitalCheckbox(props) {
  var paddingTop = props.paddingTop,
    paddingtop = props.paddingtop;
  var pT = paddingtop || paddingTop;
  return /*#__PURE__*/React__default.createElement(StyledFormCheck, _extends({
    type: "checkbox",
    paddingtop: pT
  }, props));
};

function OrbitalSelect(props) {
  var isInvalid = props.isInvalid,
    errorMsg = props.errorMsg,
    _props$showCreatable = props.showCreatable,
    showCreatable = _props$showCreatable === void 0 ? false : _props$showCreatable;
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
      },
      menuPortal: function menuPortal(base) {
        return _extends({}, base, {
          zIndex: 9999
        });
      }
    };
    return typeStyles;
  }
  return /*#__PURE__*/React__default.createElement(React__default.Fragment, null, showCreatable == false ? /*#__PURE__*/React__default.createElement(Select, _extends({
    styles: getTypeSelectStyles(isInvalid),
    menuPortalTarget: document.body
  }, props)) : /*#__PURE__*/React__default.createElement(CreatableSelect, _extends({
    styles: getTypeSelectStyles(isInvalid),
    menuPortalTarget: document.body
  }, props)), isInvalid && /*#__PURE__*/React__default.createElement(OrbitalErrorDiv, null, errorMsg));
}

function CompleteSchema(props) {
  var localization = props.localization,
    jsonSchema = props.jsonSchema,
    customFields = props.customFields,
    lang = props.lang,
    onLoadImage = props.onLoadImage,
    onLoadDocument = props.onLoadDocument,
    onChange = props.onChange;
  var _useState = React.useState(false),
    playing = _useState[0],
    setPlaying = _useState[1];
  var _useState2 = React.useState(false),
    enablePlay = _useState2[0],
    setEnablePlay = _useState2[1];
  function onChangeBoolean(fieldName) {
    var tmp = _$2.cloneDeep(customFields);
    tmp[fieldName] = !tmp[fieldName];
    onChange(tmp);
  }
  function onChangeNumber(fieldName, e) {
    var value = e.target.value;
    value = Number(value);
    var tmp = _$2.cloneDeep(customFields);
    tmp[fieldName] = value;
    onChange(tmp);
  }
  function onChangeObject(fieldName, e) {
    var value = e.target.value;
    value = _$2.isEmpty(value) === true ? null : JSON.stringify(JSON.parse(value));
    var tmp = _$2.cloneDeep(customFields);
    tmp[fieldName] = value;
    onChange(tmp);
  }
  function onChangeString(fieldName, e) {
    var value = e.target.value;
    value = _$2.isEmpty(value) === true ? null : value;
    var tmp = _$2.cloneDeep(customFields);
    tmp[fieldName] = value;
    onChange(tmp);
  }
  function onChangeSelect(fieldName, value) {
    var tmp = _$2.cloneDeep(customFields);
    tmp[fieldName] = value;
    onChange(tmp);
  }
  function parseObject(value) {
    value = JSON.parse(value);
    value = JSON.stringify(value, undefined, 4);
    return value;
  }
  function getSelectOptions(options) {
    var lang = SessionStorageStore.getCurrentLang() || AuthStore.getDefautlLang() || "En";
    var selectOptions = _$2.map(options, function (option) {
      var value = option.value,
        label = option.label;
      var localizedLabel = label[lang] || value;
      return {
        "value": value,
        "label": localizedLabel
      };
    });
    selectOptions = _$2.sortBy(selectOptions, "label");
    return selectOptions;
  }
  function getSelectValue(options, value) {
    var selectOptions = getSelectOptions(options);
    var option = _$2.find(selectOptions, {
      "value": value
    });
    return option;
  }
  return /*#__PURE__*/React__default.createElement(React__default.Fragment, null, _$2.map(jsonSchema, function (entry) {
    var fieldName = entry.fieldName,
      label = entry.label,
      type = entry.type,
      required = entry.required,
      step = entry.step,
      options = entry.options;
    label = entry.label[lang];
    var value = customFields[fieldName];
    return /*#__PURE__*/React__default.createElement(reactBootstrap.Row, {
      className: "margin_top_row",
      key: fieldName
    }, /*#__PURE__*/React__default.createElement(reactBootstrap.Col, null, required === true ? /*#__PURE__*/React__default.createElement(MandatoryFieldLabel, {
      value: label
    }) : /*#__PURE__*/React__default.createElement(NormalFieldLabel, {
      value: label
    }), type === "boolean" && /*#__PURE__*/React__default.createElement(OrbitalCheckbox, {
      checked: value || false,
      onChange: function onChange() {
        onChangeBoolean(fieldName);
      }
    }), type === "document" && /*#__PURE__*/React__default.createElement(UploadDocument, {
      localization: localization,
      document: value || {},
      isInvalid: false,
      errorMessage: "",
      onChange: function onChange(base64, fileName, fileExtension, fileType) {
        onLoadDocument(fieldName, base64, fileName, fileExtension, fileType);
      },
      onRemove: function onRemove() {
        onLoadImage(fieldName);
      }
    }), type === "image" && /*#__PURE__*/React__default.createElement(UploadImage, {
      localization: localization,
      image: value || null,
      onChange: function onChange(base64, fileName, fileExtension, fileType) {
        onLoadImage(fieldName, base64, fileName, fileExtension);
      },
      onRemove: function onRemove() {
        onLoadImage(fieldName);
      }
    }), type === "number" && /*#__PURE__*/React__default.createElement(reactBootstrap.FormControl, {
      type: "number",
      placeholder: label,
      step: step.toString(),
      value: value != null ? value.toString() : "",
      onChange: function onChange(e) {
        onChangeNumber(fieldName, e);
      }
    }), type === "link" && /*#__PURE__*/React__default.createElement(reactBootstrap.FormControl, {
      type: "url",
      placeholder: label,
      value: value || "",
      onChange: function onChange(e) {
        onChangeString(fieldName, e);
      }
    }), type === "object" && /*#__PURE__*/React__default.createElement(reactBootstrap.FormControl, {
      as: "textarea",
      rows: 6,
      value: value != null ? parseObject(value) : "",
      onChange: function onChange(e) {
        onChangeObject(fieldName, e);
      }
    }), type === "string" && /*#__PURE__*/React__default.createElement(reactBootstrap.FormControl, {
      placeholder: label,
      value: value,
      onChange: function onChange(e) {
        onChangeString(fieldName, e);
      }
    }), type === "select" && /*#__PURE__*/React__default.createElement(Select, {
      placeholder: label,
      value: getSelectValue(options, value),
      isClearable: true,
      onChange: function onChange(data) {
        var value = data && data.value ? data.value : null;
        onChangeSelect(fieldName, value);
      },
      options: getSelectOptions(options)
    }), type === "video" && /*#__PURE__*/React__default.createElement(React__default.Fragment, null, /*#__PURE__*/React__default.createElement(reactBootstrap.InputGroup, null, /*#__PURE__*/React__default.createElement(reactBootstrap.InputGroup.Prepend, null, /*#__PURE__*/React__default.createElement(reactBootstrap.InputGroup.Text, null, "Url")), /*#__PURE__*/React__default.createElement(reactBootstrap.FormControl, {
      placeholder: localization.videoUrl || "Video url",
      value: value || "",
      onChange: function onChange(e) {
        setEnablePlay(false);
        onChangeString(fieldName, e);
      }
    })), _$2.isEmpty(value) === false && /*#__PURE__*/React__default.createElement("div", {
      style: {
        marginTop: "0.5rem"
      }
    }, /*#__PURE__*/React__default.createElement(ReactPlayer, {
      playing: playing,
      onReady: function onReady() {
        setEnablePlay(true);
      },
      onPlay: function onPlay() {
        setPlaying(true);
      },
      onPause: function onPause() {
        setPlaying(false);
      },
      url: value || null
    }), /*#__PURE__*/React__default.createElement(reactBootstrap.Button, {
      size: "sm",
      disabled: enablePlay === false,
      style: {
        marginTop: "0.2rem"
      },
      onClick: function onClick() {
        setPlaying(!playing);
      }
    }, /*#__PURE__*/React__default.createElement(reactFontawesome.FontAwesomeIcon, {
      icon: playing === true ? freeSolidSvgIcons.faPause : freeSolidSvgIcons.faPlay
    }))))));
  }));
}

var types = ["string", "number", "boolean", "object", "image", "video", "link", "select", "document"];
var newProperty = {
  fieldName: null,
  label: {},
  type: null,
  step: null,
  options: []
};
var newOption = {
  value: null,
  label: {}
};
function getLocalizedField(editingLanguage) {
  return "label." + editingLanguage;
}
function parseLocalLocalizedField(field, editingLanguage) {
  field = field && field[editingLanguage] ? field[editingLanguage] : null;
  return field;
}
function DeleteOption(props) {
  var localization = props.localization,
    option = props.option,
    onCancel = props.onCancel,
    onDelete = props.onDelete;
  var _useState = React.useState(""),
    cardTitle = _useState[0],
    setCardTitle = _useState[1];
  React.useEffect(function () {
    var lang = SessionStorageStore.getCurrentLang() || AuthStore.getDefautlLang() || "En";
    var cardTitle = _$2.isEmpty(option) === true ? localization.newOption || "New option" : option.label[lang] || option.value;
    setCardTitle(cardTitle);
  }, []);
  return /*#__PURE__*/React__default.createElement(reactBootstrap.Card, {
    style: {
      marginTop: "1rem"
    }
  }, /*#__PURE__*/React__default.createElement(reactBootstrap.Card.Header, null, /*#__PURE__*/React__default.createElement("b", null, cardTitle)), /*#__PURE__*/React__default.createElement(reactBootstrap.Card.Body, null, /*#__PURE__*/React__default.createElement("div", null, localization.confirmDeleteOption || "Do you really want to delete this option?"), /*#__PURE__*/React__default.createElement("div", null, localization.affectAlreadyAssignedValue || "This might affect some elements that are already using this option."), /*#__PURE__*/React__default.createElement("div", {
    style: {
      marginTop: "1rem",
      "float": "right"
    }
  }, /*#__PURE__*/React__default.createElement(reactBootstrap.Button, {
    style: {
      marginRight: "0.25rem"
    },
    variant: "outline-secondary",
    onClick: onCancel
  }, " ", localization.cancel || "Cancel"), /*#__PURE__*/React__default.createElement(reactBootstrap.Button, {
    variant: "outline-danger",
    onClick: function onClick() {
      onDelete(option);
    }
  }, localization["delete"] || "Delete"))));
}
function AddEditOption(props) {
  var _yup$object$shape;
  var languageOptions = props.languageOptions,
    localization = props.localization,
    option = props.option,
    onSave = props.onSave,
    onUpdate = props.onUpdate,
    onCancel = props.onCancel;
  var defaultLang = AuthStore.getDefautlLang();
  var validationSchema = yup.object().shape({
    value: yup.string().typeError(localization.completeField || "Please complete the field").required(localization.completeField || "Please complete the field").matches("^[a-zA-Z0-9]*$", localization.onlyLettersAndNumberAllowed || "Only letters and numbers allowed"),
    label: yup.object().shape((_yup$object$shape = {}, _yup$object$shape[defaultLang] = yup.string().typeError((localization.completeFieldForDefaultLang || "Complete the field for the default lang") + ": " + defaultLang).required((localization.completeFieldForDefaultLang || "Complete the field for the default lang") + ": " + defaultLang), _yup$object$shape))
  });
  var _useState2 = React.useState(AuthStore.getUserLang() || "En"),
    editingLanguage = _useState2[0],
    setEditingLanguage = _useState2[1];
  var _useState3 = React.useState(""),
    cardTitle = _useState3[0],
    setCardTitle = _useState3[1];
  React.useEffect(function () {
    var lang = SessionStorageStore.getCurrentLang() || AuthStore.getDefautlLang() || "En";
    var cardTitle = _$2.isEmpty(option) === true ? localization.newOption || "New option" : option.label[lang] || option.value;
    setCardTitle(cardTitle);
  }, []);
  function setInitialValues() {
    var initialValues = _$2.isEmpty(option) === true ? newOption : option;
    return initialValues;
  }
  var parsedLang = _$2.find(languageOptions, {
    "value": editingLanguage
  });
  return /*#__PURE__*/React__default.createElement(formik.Formik, {
    validationSchema: validationSchema,
    onSubmit: function onSubmit(values, actions) {
      if (_$2.isEmpty(option) === true) {
        onSave(values);
      } else {
        onUpdate(values);
      }
    },
    initialValues: setInitialValues()
  }, function (_ref) {
    var handleSubmit = _ref.handleSubmit,
      handleChange = _ref.handleChange,
      values = _ref.values,
      errors = _ref.errors;
    return /*#__PURE__*/React__default.createElement(reactBootstrap.Card, {
      style: {
        marginTop: "1rem"
      }
    }, /*#__PURE__*/React__default.createElement(reactBootstrap.Card.Header, null, /*#__PURE__*/React__default.createElement("b", null, cardTitle), /*#__PURE__*/React__default.createElement("span", {
      style: {
        "float": "right"
      }
    }, /*#__PURE__*/React__default.createElement(OrbitalSaveIcon, {
      tooltip: localization.save || "Save",
      marginright: "15px",
      onClick: handleSubmit
    }), /*#__PURE__*/React__default.createElement(OrbitalCancelIcon, {
      tooltip: localization.cancel || "Cancel",
      onClick: onCancel
    }))), /*#__PURE__*/React__default.createElement(reactBootstrap.Card.Body, null, /*#__PURE__*/React__default.createElement(reactBootstrap.Row, {
      style: {
        marginTop: "1rem"
      }
    }, /*#__PURE__*/React__default.createElement(reactBootstrap.Col, {
      sm: 4
    }, /*#__PURE__*/React__default.createElement(NormalFieldLabel, {
      value: localization.language || "Language"
    }), /*#__PURE__*/React__default.createElement(OrbitalSelect, {
      value: parsedLang,
      onChange: function onChange(data) {
        setEditingLanguage(data.value);
      },
      options: languageOptions
    }))), /*#__PURE__*/React__default.createElement(reactBootstrap.Row, {
      style: {
        marginTop: "1rem"
      }
    }, /*#__PURE__*/React__default.createElement(reactBootstrap.Col, null, /*#__PURE__*/React__default.createElement(MandatoryFieldLabel, {
      value: localization.optionValue || "Option value"
    }), /*#__PURE__*/React__default.createElement(reactBootstrap.FormControl, {
      name: "value",
      disabled: _$2.isEmpty(option) === false,
      placeholder: localization.optionValue || "Option value",
      value: values.value || "",
      onChange: handleChange,
      isInvalid: errors.value
    }), /*#__PURE__*/React__default.createElement(reactBootstrap.FormControl.Feedback, {
      type: "invalid"
    }, errors.value))), /*#__PURE__*/React__default.createElement(reactBootstrap.Row, {
      style: {
        marginTop: "1rem"
      }
    }, /*#__PURE__*/React__default.createElement(reactBootstrap.Col, null, /*#__PURE__*/React__default.createElement(MandatoryFieldLabel, {
      value: localization.optionLabel || "Option label"
    }), /*#__PURE__*/React__default.createElement(reactBootstrap.InputGroup, null, /*#__PURE__*/React__default.createElement(reactBootstrap.InputGroup.Prepend, null, /*#__PURE__*/React__default.createElement(reactBootstrap.InputGroup.Text, null, editingLanguage)), /*#__PURE__*/React__default.createElement(reactBootstrap.FormControl, {
      name: getLocalizedField(editingLanguage),
      placeholder: localization.propertyLabel || "Property label",
      value: parseLocalLocalizedField(values.label, editingLanguage) || "",
      onChange: handleChange,
      isInvalid: errors.label && errors.label[defaultLang]
    }), /*#__PURE__*/React__default.createElement(reactBootstrap.FormControl.Feedback, {
      type: "invalid"
    }, errors.label && errors.label[defaultLang] ? errors.label[defaultLang] : ""))))));
  });
}
function AddEditProperty(props) {
  var _yup$object$shape2;
  var localization = props.localization,
    onSave = props.onSave,
    onCancel = props.onCancel,
    property = props.property;
  var defaultLang = AuthStore.getDefautlLang();
  var validationSchema = yup.object().shape({
    fieldName: yup.string().typeError(localization.completeField || "Please complete the field").required(localization.completeField || "Please complete the field").min(2, localization.atLeastTwoCharacters || "At least two caracthers").matches("^([a-z])([A-Za-z])+$", localization.onlyLettersAllowedTheFirstLowerCase || "The first letter must be lowercase and only letters are allowed"),
    label: yup.object().shape((_yup$object$shape2 = {}, _yup$object$shape2[defaultLang] = yup.string().typeError((localization.completeFieldForDefaultLang || "Complete the field for the default lang") + ": " + defaultLang).required((localization.completeFieldForDefaultLang || "Complete the field for the default lang") + ": " + defaultLang), _yup$object$shape2)),
    type: yup.string().typeError(localization.completeField || "Please complete the field").required(localization.completeField || "Please complete the field"),
    step: yup.string().nullable(true).when("type", {
      is: "number",
      then: yup.string().typeError(localization.completeField || "Please complete the field").required(localization.completeField || "Please complete the field").matches("^[0-9.]+$", localization.onlyDecimelNumbersAllowed || "Only decimal numbers allowed")
    })
  });
  var _useState4 = React.useState(null),
    cardTitle = _useState4[0],
    setCardTitle = _useState4[1];
  var _useState5 = React.useState([]),
    languageOptions = _useState5[0],
    setLanguageOptions = _useState5[1];
  var _useState6 = React.useState(AuthStore.getUserLang() || "En"),
    editingLanguage = _useState6[0],
    setEditingLanguage = _useState6[1];
  var _useState7 = React.useState([]),
    typeOptions = _useState7[0],
    setTypeOptions = _useState7[1];
  var _useState8 = React.useState(false),
    showAddEditOption = _useState8[0],
    setShowAddEditOption = _useState8[1];
  var _useState9 = React.useState(false),
    showDeleteOption = _useState9[0],
    setShowDeleteOption = _useState9[1];
  var _useState10 = React.useState({}),
    selectedOption = _useState10[0],
    setSelectedOption = _useState10[1];
  React.useEffect(function () {
    var lang = SessionStorageStore.getCurrentLang() || AuthStore.getDefautlLang() || "En";
    var cardTitle = _$2.isEmpty(property) === true ? localization.newProperty || "New property" : property.label[lang] || property.fieldName;
    var languages = AuthStore.getPreferedLanguages() || ["En"];
    var languageOptions = _$2.map(languages, function (lang) {
      return {
        "value": lang,
        "label": lang
      };
    });
    var typeOptions = _$2.map(types, function (type) {
      var label = localization[type] || type;
      return {
        "value": type,
        "label": label
      };
    });
    typeOptions = _$2.sortBy(typeOptions, "label");
    setCardTitle(cardTitle);
    setLanguageOptions(languageOptions);
    setTypeOptions(typeOptions);
  }, []);
  function addOption(values, setFieldValue, newOption) {
    var options = _$2.cloneDeep(values).options || [];
    var tmp = _$2.find(options, {
      "value": newOption.value
    });
    if (tmp) {
      reactToastify.toast.warn(localization.optionWithSameValueAlreadyPresent || "An option with the same value is already present");
    } else {
      options.push(newOption);
      setFieldValue("options", options);
      setShowAddEditOption(false);
    }
  }
  function updateOption(values, setFieldValue, option) {
    var options = _$2.cloneDeep(values).options || [];
    var idx = _$2.findIndex(options, ['value', option.value]);
    options.splice(idx, 1, option);
    setFieldValue("options", options);
    setShowAddEditOption(false);
  }
  function deleteOption(values, setFieldValue, option) {
    var options = _$2.cloneDeep(values).options || [];
    var idx = _$2.findIndex(options, ['value', option.value]);
    options.splice(idx, 1);
    setFieldValue("options", options);
    setShowDeleteOption(false);
  }
  function setInitialValues() {
    var initialValues = _$2.isEmpty(property) === true ? newProperty : property;
    return initialValues;
  }
  var parsedLang = _$2.find(languageOptions, {
    "value": editingLanguage
  });
  return /*#__PURE__*/React__default.createElement(formik.Formik, {
    validationSchema: validationSchema,
    onSubmit: function onSubmit(values, actions) {
      onSave(values);
    },
    initialValues: setInitialValues()
  }, function (_ref2) {
    var handleSubmit = _ref2.handleSubmit,
      handleChange = _ref2.handleChange,
      values = _ref2.values,
      errors = _ref2.errors,
      setFieldValue = _ref2.setFieldValue,
      setValues = _ref2.setValues;
    return /*#__PURE__*/React__default.createElement(reactBootstrap.Card, null, /*#__PURE__*/React__default.createElement(reactBootstrap.Card.Header, null, /*#__PURE__*/React__default.createElement("b", null, cardTitle), /*#__PURE__*/React__default.createElement("span", {
      style: {
        "float": "right"
      }
    }, /*#__PURE__*/React__default.createElement(OrbitalSaveIcon, {
      disabled: showAddEditOption === true || showDeleteOption === true,
      tooltip: localization.save || "Save",
      marginright: "15px",
      onClick: handleSubmit
    }), /*#__PURE__*/React__default.createElement(OrbitalCancelIcon, {
      tooltip: localization.cancel || "Cancel",
      onClick: onCancel
    }))), /*#__PURE__*/React__default.createElement(reactBootstrap.Card.Body, null, /*#__PURE__*/React__default.createElement(reactBootstrap.Row, null, /*#__PURE__*/React__default.createElement(reactBootstrap.Col, {
      sm: 4
    }, /*#__PURE__*/React__default.createElement(NormalFieldLabel, {
      value: localization.language || "Language"
    }), /*#__PURE__*/React__default.createElement(OrbitalSelect, {
      value: parsedLang,
      onChange: function onChange(data) {
        setEditingLanguage(data.value);
      },
      options: languageOptions
    }))), /*#__PURE__*/React__default.createElement(reactBootstrap.Row, {
      style: {
        marginTop: "1rem"
      }
    }, /*#__PURE__*/React__default.createElement(reactBootstrap.Col, null, /*#__PURE__*/React__default.createElement(MandatoryFieldLabel, {
      value: (localization.propertyFieldName || "Property field name") + " - " + (localization.onlyLetters || "Only letter") + " (a-zA-Z)"
    }), /*#__PURE__*/React__default.createElement(reactBootstrap.FormControl, {
      name: "fieldName",
      disabled: _$2.isEmpty(property) === false,
      placeholder: localization.propertyFieldName || "Property field name",
      value: values.fieldName || "",
      onChange: handleChange,
      isInvalid: errors.fieldName
    }), /*#__PURE__*/React__default.createElement(reactBootstrap.FormControl.Feedback, {
      type: "invalid"
    }, errors.fieldName))), /*#__PURE__*/React__default.createElement(reactBootstrap.Row, {
      style: {
        marginTop: "1rem"
      }
    }, /*#__PURE__*/React__default.createElement(reactBootstrap.Col, null, /*#__PURE__*/React__default.createElement(MandatoryFieldLabel, {
      value: localization.propertyLabel || "Property label"
    }), /*#__PURE__*/React__default.createElement(reactBootstrap.InputGroup, null, /*#__PURE__*/React__default.createElement(reactBootstrap.InputGroup.Prepend, null, /*#__PURE__*/React__default.createElement(reactBootstrap.InputGroup.Text, null, editingLanguage)), /*#__PURE__*/React__default.createElement(reactBootstrap.FormControl, {
      name: getLocalizedField(editingLanguage),
      placeholder: localization.propertyLabel || "Property label",
      value: parseLocalLocalizedField(values.label, editingLanguage) || "",
      onChange: handleChange,
      isInvalid: errors.label && errors.label[defaultLang]
    }), /*#__PURE__*/React__default.createElement(reactBootstrap.FormControl.Feedback, {
      type: "invalid"
    }, errors.label && errors.label[defaultLang] ? errors.label[defaultLang] : "")))), /*#__PURE__*/React__default.createElement(reactBootstrap.Row, {
      style: {
        marginTop: "1rem"
      }
    }, /*#__PURE__*/React__default.createElement(reactBootstrap.Col, null, /*#__PURE__*/React__default.createElement(MandatoryFieldLabel, {
      value: localization.propertyType || "Property type"
    }), /*#__PURE__*/React__default.createElement(OrbitalSelect, {
      isInvalid: errors.type,
      isDisabled: _$2.isEmpty(property) === false,
      errorMsg: errors.type,
      value: _$2.find(typeOptions, {
        "value": values.type
      }),
      placeholder: localization.propertyType || "Property type",
      options: typeOptions,
      onChange: function onChange(data) {
        var value = data ? data.value : null;
        setValues(_extends({}, values, {
          type: value,
          step: value === "number" ? "0.5" : null,
          options: value === "select" ? [] : null
        }));
      }
    }))), values.type && values.type === "number" && /*#__PURE__*/React__default.createElement(reactBootstrap.Row, {
      style: {
        marginTop: "1rem"
      }
    }, /*#__PURE__*/React__default.createElement(reactBootstrap.Col, null, /*#__PURE__*/React__default.createElement(NormalFieldLabel, {
      value: localization.stepNumber || "Step number"
    }), /*#__PURE__*/React__default.createElement(reactBootstrap.FormControl, {
      name: "step",
      placeholder: localization.step || "Step number",
      value: values.step || "",
      onChange: handleChange,
      isInvalid: errors.step
    }), /*#__PURE__*/React__default.createElement(reactBootstrap.FormControl.Feedback, {
      type: "invalid"
    }, errors.step))), values.type && values.type === "select" && /*#__PURE__*/React__default.createElement(React__default.Fragment, null, /*#__PURE__*/React__default.createElement(reactBootstrap.Row, {
      style: {
        marginTop: "1rem"
      }
    }, /*#__PURE__*/React__default.createElement(reactBootstrap.Col, {
      sm: 8
    }, /*#__PURE__*/React__default.createElement(NormalFieldLabel, {
      value: localization.options || "Options"
    })), /*#__PURE__*/React__default.createElement(reactBootstrap.Col, {
      sm: 4
    }, /*#__PURE__*/React__default.createElement("div", {
      style: {
        "float": "right"
      }
    }, showAddEditOption !== true && /*#__PURE__*/React__default.createElement(OrbitalAddIcon, {
      "float": "right",
      tooltip: localization.addOption || "Add option",
      onClick: function onClick() {
        setShowAddEditOption(true);
        setSelectedOption({});
      }
    })))), showAddEditOption === true && /*#__PURE__*/React__default.createElement(AddEditOption, {
      localization: localization,
      languageOptions: languageOptions,
      option: selectedOption,
      onSave: function onSave(option) {
        addOption(values, setFieldValue, option);
      },
      onUpdate: function onUpdate(option) {
        updateOption(values, setFieldValue, option);
      },
      onCancel: function onCancel() {
        setShowAddEditOption(false);
      }
    }), showDeleteOption === true && /*#__PURE__*/React__default.createElement(DeleteOption, {
      localization: localization,
      option: selectedOption,
      onDelete: function onDelete(option) {
        deleteOption(values, setFieldValue, option);
      },
      onCancel: function onCancel() {
        setShowDeleteOption(false);
      }
    }), values.options.length === 0 && showAddEditOption === false && showDeleteOption === false && /*#__PURE__*/React__default.createElement(reactBootstrap.Row, {
      style: {
        marginTop: "1rem"
      }
    }, /*#__PURE__*/React__default.createElement(reactBootstrap.Col, null, localization.noOptionsArePresentsYet || "No options are presents yet")), values.options.length > 0 && showAddEditOption === false && showDeleteOption === false && /*#__PURE__*/React__default.createElement(reactBootstrap.Row, {
      style: {
        marginTop: "1rem"
      }
    }, _$2.map(values.options || [], function (option) {
      var label = option.label[editingLanguage];
      return /*#__PURE__*/React__default.createElement(React__default.Fragment, null, /*#__PURE__*/React__default.createElement(reactBootstrap.Col, {
        sm: 8
      }, label), /*#__PURE__*/React__default.createElement(reactBootstrap.Col, {
        sm: 4
      }, /*#__PURE__*/React__default.createElement(reactBootstrap.ButtonGroup, {
        style: {
          "float": "right"
        }
      }, /*#__PURE__*/React__default.createElement(CustomTooltip, {
        key: "edit_option",
        tooltip: localization.editCategory || "Edit category"
      }, /*#__PURE__*/React__default.createElement(reactBootstrap.Button, {
        variant: "outline-primary",
        onClick: function onClick() {
          setShowAddEditOption(true);
          setSelectedOption(option);
        }
      }, /*#__PURE__*/React__default.createElement(reactFontawesome.FontAwesomeIcon, {
        icon: freeSolidSvgIcons.faPencilAlt
      }))), /*#__PURE__*/React__default.createElement(CustomTooltip, {
        key: "delete_option",
        tooltip: localization["delete"] || "Delete"
      }, /*#__PURE__*/React__default.createElement(reactBootstrap.Button, {
        variant: "outline-danger",
        onClick: function onClick() {
          setShowDeleteOption(true);
          setSelectedOption(option);
        }
      }, /*#__PURE__*/React__default.createElement(reactFontawesome.FontAwesomeIcon, {
        icon: freeSolidSvgIcons.faTrashAlt
      }))))));
    })))));
  });
}

function DeleteProperty(props) {
  var localization = props.localization,
    onDelete = props.onDelete,
    onCancel = props.onCancel,
    property = props.property;
  var fieldName = property && property.fieldName ? property.fieldName : null;
  var elements = property && property._elements ? property._elements : [];
  return /*#__PURE__*/React__default.createElement(React__default.Fragment, null, /*#__PURE__*/React__default.createElement(reactBootstrap.Modal.Header, null, /*#__PURE__*/React__default.createElement(reactBootstrap.Modal.Title, null, localization["delete"] || "Delete", " ", "\"", fieldName, "\"")), /*#__PURE__*/React__default.createElement(reactBootstrap.Modal.Body, null, elements.length === 0 && /*#__PURE__*/React__default.createElement("div", null, localization.confirmDeleteProperty || "Do you really want to delete the property", " ", /*#__PURE__*/React__default.createElement("b", null, fieldName), "?"), elements.length > 0 && /*#__PURE__*/React__default.createElement("div", null, localization.cannotDeletePropertyInUse || "Impossible to delete the property because it's currently in use")), /*#__PURE__*/React__default.createElement(reactBootstrap.Modal.Footer, null, /*#__PURE__*/React__default.createElement(reactBootstrap.Button, {
    variant: "outline-secondary",
    onClick: onCancel
  }, " ", localization.cancel || "Cancel"), elements.length === 0 && /*#__PURE__*/React__default.createElement(reactBootstrap.Button, {
    variant: "outline-danger",
    onClick: function onClick() {
      onDelete(property);
    }
  }, localization["delete"] || "Delete")));
}

function OrbitalJsonSchema(props) {
  var localization = props.localization,
    title = props.title,
    onChange = props.onChange,
    orbitalJsonSchema = props.orbitalJsonSchema;
  var _useState = React.useState([]),
    body = _useState[0],
    setBody = _useState[1];
  var _useState2 = React.useState(false),
    showEditModal = _useState2[0],
    setShowEditModal = _useState2[1];
  var _useState3 = React.useState(false),
    showDeleteModal = _useState3[0],
    setShowDeleteModal = _useState3[1];
  var _useState4 = React.useState(null),
    selectedProperty = _useState4[0],
    setSelectedProperty = _useState4[1];
  React.useEffect(function () {
    var schema = _$2.isEmpty(orbitalJsonSchema) === true ? [] : orbitalJsonSchema;
    var body = parseBody(schema);
    setBody(body);
  }, [orbitalJsonSchema]);
  function parseLabel(label) {
    var lang = SessionStorageStore.getCurrentLang() || AuthStore.getDefautlLang() || "En";
    label = label && label[lang] ? label[lang] : null;
    return label;
  }
  function parseActions(property) {
    return /*#__PURE__*/React__default.createElement(reactBootstrap.ButtonToolbar, null, /*#__PURE__*/React__default.createElement(reactBootstrap.ButtonGroup, null, /*#__PURE__*/React__default.createElement(CustomTooltip, {
      key: "edit_property",
      tooltip: localization.editProperty || "Edit property"
    }, /*#__PURE__*/React__default.createElement(reactBootstrap.Button, {
      variant: "outline-primary",
      onClick: function onClick() {
        setSelectedProperty(property);
        setShowEditModal(true);
      }
    }, /*#__PURE__*/React__default.createElement(reactFontawesome.FontAwesomeIcon, {
      icon: freeSolidSvgIcons.faPencilAlt
    }))), /*#__PURE__*/React__default.createElement(CustomTooltip, {
      key: "delete_property",
      tooltip: localization["delete"] || "Delete"
    }, /*#__PURE__*/React__default.createElement(reactBootstrap.Button, {
      variant: "outline-danger",
      onClick: function onClick() {
        setSelectedProperty(property);
        setShowDeleteModal(true);
      }
    }, /*#__PURE__*/React__default.createElement(reactFontawesome.FontAwesomeIcon, {
      icon: freeSolidSvgIcons.faTrashAlt
    })))));
  }
  function parseBody(schema) {
    var body = [];
    _$2.each(schema, function (property) {
      var label = parseLabel(property.label);
      var type = property.type;
      var actions = parseActions(property);
      body.push({
        fieldName: property.fieldName,
        label: label,
        type: localization[type] || type,
        actions: actions
      });
    });
    return body;
  }
  function changeProperty(property) {
    var tmpSchema = _$2.cloneDeep(orbitalJsonSchema) || [];
    var idx = _$2.findIndex(tmpSchema, {
      "fieldName": property.fieldName
    });
    if (_$2.isEmpty(selectedProperty) === true && idx !== -1) {
      reactToastify.toast.warn(localization.propertyWithSameNameExisting || "A property with the same 'name' is already present");
    } else if (_$2.isEmpty(selectedProperty) === true && idx === -1) {
      tmpSchema.push(property);
    } else if (_$2.isEmpty(selectedProperty) === false && idx !== -1) {
      tmpSchema.splice(idx, 1, property);
    }
    setShowEditModal(false);
    onChange(tmpSchema);
  }
  function deleteProperty(property) {
    var tmpSchema = _$2.cloneDeep(orbitalJsonSchema);
    var idx = _$2.findIndex(tmpSchema, {
      "name": property.name
    });
    tmpSchema.splice(idx, 1);
    setShowDeleteModal(false);
    onChange(tmpSchema);
  }
  function getColumns() {
    return [{
      Header: localization.propertyName || "Property name",
      accessor: 'fieldName',
      disableSortBy: true
    }, {
      Header: localization.propertyLabel || "Property label",
      accessor: 'label',
      disableSortBy: true
    }, {
      Header: localization.propertyType || "Property type",
      accessor: 'type',
      disableSortBy: true
    }, {
      Header: localization.actions || "Actions",
      accessor: 'actions',
      disableSortBy: true
    }];
  }
  return /*#__PURE__*/React__default.createElement(React__default.Fragment, null, /*#__PURE__*/React__default.createElement(reactBootstrap.Row, null, title && /*#__PURE__*/React__default.createElement(reactBootstrap.Col, {
    sm: 8
  }, title), /*#__PURE__*/React__default.createElement(reactBootstrap.Col, {
    sm: title ? 4 : 12
  }, /*#__PURE__*/React__default.createElement("div", {
    style: {
      "float": "right"
    }
  }, /*#__PURE__*/React__default.createElement(OrbitalAddIcon, {
    "float": "right",
    tooltip: localization.addProperty || "Add property",
    onClick: function onClick() {
      setShowEditModal(true);
      setSelectedProperty({});
    }
  })))), /*#__PURE__*/React__default.createElement(reactBootstrap.Row, {
    style: {
      marginTop: "1rem"
    }
  }, /*#__PURE__*/React__default.createElement(reactBootstrap.Col, null, /*#__PURE__*/React__default.createElement(ReactTable, {
    localization: localization,
    columns: getColumns(),
    data: body,
    _defaultPageSize: 5,
    _noDataMessage: localization.noData || "No data",
    skipPageReset: true
  }))), /*#__PURE__*/React__default.createElement(reactBootstrap.Modal, {
    onHide: function onHide() {},
    show: showEditModal
  }, /*#__PURE__*/React__default.createElement(AddEditProperty, {
    localization: localization,
    property: selectedProperty,
    onSave: changeProperty,
    onCancel: function onCancel() {
      setShowEditModal(false);
    }
  })), /*#__PURE__*/React__default.createElement(reactBootstrap.Modal, {
    onHide: function onHide() {},
    size: "lg",
    show: showDeleteModal
  }, /*#__PURE__*/React__default.createElement(DeleteProperty, {
    localization: localization,
    property: _$2.cloneDeep(selectedProperty),
    onDelete: deleteProperty,
    onCancel: function onCancel() {
      setShowDeleteModal(false);
      setSelectedProperty(null);
    }
  })));
}

var _templateObject$g;
var PluginContainer = styled.div(_templateObject$g || (_templateObject$g = _taggedTemplateLiteralLoose(["\n    padding-left: ", ";\n    padding-top: ", ";\n    padding-right: ", ";\n    height: ", ";\n    min-height: ", ";\n"])), function (props) {
  return props.paddingLeft || "15px";
}, function (props) {
  return props.paddingTop || "15px";
}, function (props) {
  return props.paddingRight || "15px";
}, function (props) {
  return props.height;
}, function (props) {
  return props.minheight || "95vh";
});

function OrbitalToastContainer(props) {
  var position = props.position,
    closeButton = props.closeButton,
    draggable = props.draggable,
    pauseOnHover = props.pauseOnHover,
    autoClose = props.autoClose,
    newestOnTop = props.newestOnTop;
  return /*#__PURE__*/React__default.createElement(reactToastify.ToastContainer, {
    position: position || "top-center",
    closeButton: closeButton || false,
    draggable: draggable || false,
    pauseOnHover: pauseOnHover || false,
    autoClose: autoClose || 3000,
    newestOnTop: newestOnTop || true
  });
}

function OrbitalReactPhoneInput(props) {
  var isInvalid = props.isInvalid,
    errorMsg = props.errorMsg,
    errorMessage = props.errorMessage,
    disabled = props.disabled;
  function getPhoneStyleButton(isInvalid) {
    var error = _$2.isEmpty(isInvalid) === false ? true : false;
    var phoneStyleButton = error === true ? {
      borderColor: "#dc3545"
    } : null;
    return phoneStyleButton;
  }
  function getPhoneStyleInput(disabled, isInvalid) {
    var error = _$2.isEmpty(isInvalid) === false ? true : false;
    var phoneStyleInput = null;
    if (disabled === true && error === true) {
      phoneStyleInput = {
        width: "100%",
        backgroundColor: "#e9ecef",
        opacity: "1",
        borderColor: "#dc3545"
      };
    } else if (disabled === true) {
      phoneStyleInput = {
        width: "100%",
        backgroundColor: "#e9ecef",
        opacity: "1"
      };
    } else if (error === true) {
      phoneStyleInput = {
        width: "100%",
        borderColor: "#dc3545"
      };
    } else {
      phoneStyleInput = {
        width: "100%"
      };
    }
    return phoneStyleInput;
  }
  var phoneStyleInput = getPhoneStyleInput(disabled, isInvalid);
  var phoneStyleButton = getPhoneStyleButton(isInvalid);
  return /*#__PURE__*/React__default.createElement(React__default.Fragment, null, /*#__PURE__*/React__default.createElement(ReactPhoneInput, _extends({
    buttonStyle: phoneStyleButton,
    inputStyle: phoneStyleInput,
    disableDropdown: disabled
  }, props)), isInvalid && /*#__PURE__*/React__default.createElement(OrbitalErrorDiv, null, errorMessage || errorMsg));
}

var _excluded$1 = ["inputRef", "referenceElementRef"];
function OrbitalAsyncTypeahead(props) {
  var isInvalid = props.isInvalid,
    disabled = props.disabled,
    errorMessage = props.errorMessage,
    errorMsg = props.errorMsg;
  return /*#__PURE__*/React__default.createElement(React__default.Fragment, null, /*#__PURE__*/React__default.createElement(reactBootstrapTypeahead.AsyncTypeahead, _extends({
    renderInput: function renderInput(_ref) {
      var inputRef = _ref.inputRef,
        referenceElementRef = _ref.referenceElementRef,
        inputProps = _objectWithoutPropertiesLoose(_ref, _excluded$1);
      return /*#__PURE__*/React__default.createElement(reactBootstrap.Form.Control, _extends({
        isInvalid: isInvalid,
        disabled: disabled
      }, inputProps, {
        ref: function ref(input) {
          inputRef(input);
          referenceElementRef(input);
        }
      }));
    }
  }, props)), isInvalid && /*#__PURE__*/React__default.createElement(OrbitalErrorDiv, null, errorMessage || errorMsg));
}

exports.APISb = APISb;
exports.AuthStore = AuthStore;
exports.BrandStore = BrandStore;
exports.ClientSession = ClientSession;
exports.CommonUtils = PluginUtils;
exports.CompleteSchema = CompleteSchema;
exports.DatePicker = DatePicker;
exports.DatePickerV2 = DatePickerV2;
exports.DateTimePicker = DatePicker$1;
exports.DateTimePickerV2 = DateTimePickerV2;
exports.HTMLTextEditorV2 = HTMLTextEditor;
exports.HTMLTextEditorV3 = HTMLEditor;
exports.LoadingOverlay = CustomLoadingOverlay;
exports.MandatoryFieldLabel = MandatoryFieldLabel;
exports.NormalFieldLabel = NormalFieldLabel;
exports.OrbitalAddIcon = OrbitalAddIcon;
exports.OrbitalAddressComponentsPicker = OrbitalAddressComponentsPicker;
exports.OrbitalAsyncTypeahead = OrbitalAsyncTypeahead;
exports.OrbitalCancelIcon = OrbitalCancelIcon;
exports.OrbitalCheckbox = OrbitalCheckbox;
exports.OrbitalErrorDiv = OrbitalErrorDiv;
exports.OrbitalJsonSchema = OrbitalJsonSchema;
exports.OrbitalLocationPicker = OrbitalLocationPicker;
exports.OrbitalReactPhoneInput = OrbitalReactPhoneInput;
exports.OrbitalSaveIcon = OrbitalSaveIcon;
exports.OrbitalSelect = OrbitalSelect;
exports.OrbitalStore = OrbitalStore;
exports.OrbitalToastContainer = OrbitalToastContainer;
exports.PluginContainer = PluginContainer;
exports.PluginStore = PluginStore;
exports.ReactTable = ReactTable;
exports.RecurrenceEditor = RecurrenceEditor;
exports.RecurrenceEditorV2 = RecurrenceEditorV2;
exports.Scheduler = ReservationScheduler;
exports.SchedulerV2 = SchedulerV2;
exports.SessionStorageStore = SessionStorageStore;
exports.SyncfusionUtils = SyncfusionUtils;
exports.TimePicker = TimePicker;
exports.TimePickerV2 = TimePickerv2;
exports.Tooltip = CustomTooltip;
exports.UploadDocument = UploadDocument;
exports.UploadImage = UploadImage;
exports.localization = ex;
//# sourceMappingURL=index.js.map
