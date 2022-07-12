function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var axios = _interopDefault(require('axios'));
var _$2 = _interopDefault(require('lodash'));
var React = require('react');
var React__default = _interopDefault(React);
var ej2ReactCalendars = require('@syncfusion/ej2-react-calendars');
var ej2ReactSchedule = require('@syncfusion/ej2-react-schedule');
var moment = _interopDefault(require('moment'));
var reactDraftWysiwyg = require('react-draft-wysiwyg');
var draftJs = require('draft-js');
var draftToHtml = _interopDefault(require('draftjs-to-html'));
var htmlToDraft = _interopDefault(require('html-to-draftjs'));
var LoadingOverlay = _interopDefault(require('react-loading-overlay'));
require('react-draft-wysiwyg/dist/react-draft-wysiwyg.css');
var reactBootstrap = require('react-bootstrap');
var reactToastify = require('react-toastify');
var reactFontawesome = require('@fortawesome/react-fontawesome');
var freeRegularSvgIcons = require('@fortawesome/free-regular-svg-icons');
var freeSolidSvgIcons = require('@fortawesome/free-solid-svg-icons');
var Resizer = _interopDefault(require('react-image-file-resizer'));
var uuidV4 = _interopDefault(require('uuid/v4'));
var Cropper = _interopDefault(require('cropperjs'));
var PlacesAutocomplete = require('react-places-autocomplete');
var PlacesAutocomplete__default = _interopDefault(PlacesAutocomplete);
var LocationPicker = _interopDefault(require('react-location-picker'));
var reactTable = require('react-table');
var styled = _interopDefault(require('styled-components'));
require('bootstrap/dist/css/bootstrap.min.css');

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
    return /*#__PURE__*/React__default.createElement(ej2ReactSchedule.RecurrenceEditorComponent, _extends({
      dateFormat: dateFormat || "dd/MM/yyyy"
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

var MandatoryFieldLabel = /*#__PURE__*/function (_Component) {
  _inheritsLoose(MandatoryFieldLabel, _Component);

  function MandatoryFieldLabel(props) {
    return _Component.call(this, props) || this;
  }

  var _proto = MandatoryFieldLabel.prototype;

  _proto.render = function render() {
    var className = "label_style" + " " + this.props.className;
    return /*#__PURE__*/React__default.createElement("div", {
      style: this.props.style
    }, /*#__PURE__*/React__default.createElement("span", {
      className: "mandatory_style"
    }, "* "), /*#__PURE__*/React__default.createElement("span", {
      className: className
    }, this.props.value));
  };

  return MandatoryFieldLabel;
}(React.Component);

var NormalFieldLabel = /*#__PURE__*/function (_Component) {
  _inheritsLoose(NormalFieldLabel, _Component);

  function NormalFieldLabel(props) {
    return _Component.call(this, props) || this;
  }

  var _proto = NormalFieldLabel.prototype;

  _proto.render = function render() {
    var className = "label_style" + " " + this.props.className;
    return /*#__PURE__*/React__default.createElement("div", {
      style: this.props.style,
      className: className
    }, this.props.value);
  };

  return NormalFieldLabel;
}(React.Component);

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
}(React.Component);

var HTMLTextEditor = /*#__PURE__*/function (_Component) {
  _inheritsLoose(HTMLTextEditor, _Component);

  function HTMLTextEditor(props) {
    var _this;

    _this = _Component.call(this, props) || this;
    _this.state = {
      loading: false,
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
    if (this.props.data != nextProps.data) {
      this.parseData(nextProps.data);
    }
  };

  _proto.parseData = function parseData(data) {
    if (data != null) {
      var tmp = htmlToDraft(data);
      tmp = draftJs.ContentState.createFromBlockArray(tmp);
      tmp = draftJs.EditorState.createWithContent(tmp);
      this.setState({
        editorState: draftJs.EditorState.moveFocusToEnd(tmp)
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
        var rawContent = draftJs.convertToRaw(editorState.getCurrentContent());
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
    return /*#__PURE__*/React__default.createElement(CustomLoadingOverlay, {
      active: loading,
      spinner: true,
      text: (localization.loading || "Loading") + "..."
    }, /*#__PURE__*/React__default.createElement(reactDraftWysiwyg.Editor, {
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
}(React.Component);

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
    return /*#__PURE__*/React__default.createElement(reactBootstrap.OverlayTrigger, {
      style: this.props.style,
      className: this.props.className,
      placement: placement,
      delay: {
        delay: delay
      },
      overlay: /*#__PURE__*/React__default.createElement(reactBootstrap.Tooltip, null, tooltip)
    }, children);
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
    var downloadClassname = isError == true ? "cropper_download_icon_disabled" : "cropper_download_icon";
    var saveClassname = isError == true ? "cropper_save_icon_disabled" : "cropper_save_icon";
    return /*#__PURE__*/React__default.createElement(reactBootstrap.Card, null, /*#__PURE__*/React__default.createElement(reactBootstrap.Card.Header, null, /*#__PURE__*/React__default.createElement("span", {
      style: {
        "float": "right"
      }
    }, /*#__PURE__*/React__default.createElement(CustomTooltip, {
      tooltip: localization.download || "Download"
    }, /*#__PURE__*/React__default.createElement(reactFontawesome.FontAwesomeIcon, {
      className: downloadClassname,
      icon: freeSolidSvgIcons.faDownload,
      onClick: this.downloadCroppedImg
    })), /*#__PURE__*/React__default.createElement(CustomTooltip, {
      tooltip: localization.save || "Save"
    }, /*#__PURE__*/React__default.createElement(reactFontawesome.FontAwesomeIcon, {
      className: saveClassname,
      icon: freeRegularSvgIcons.faSave,
      onClick: function onClick() {
        _this3.parseCroppedImage();
      }
    })), /*#__PURE__*/React__default.createElement(CustomTooltip, {
      tooltip: localization.cancel || "Cancel"
    }, /*#__PURE__*/React__default.createElement(reactFontawesome.FontAwesomeIcon, {
      className: "cropper_close_icon",
      icon: freeRegularSvgIcons.faTimesCircle,
      onClick: this.props.onClose
    })))), /*#__PURE__*/React__default.createElement(reactBootstrap.Card.Body, null, /*#__PURE__*/React__default.createElement(reactBootstrap.Row, null, /*#__PURE__*/React__default.createElement(reactBootstrap.Col, {
      sm: 5
    }, localization.loaded_image_to_crop || "Loaded image to crop"), /*#__PURE__*/React__default.createElement(reactBootstrap.Col, {
      sm: 2
    }), /*#__PURE__*/React__default.createElement(reactBootstrap.Col, {
      sm: 5
    }, localization.cropped_image || "Cropped image")), /*#__PURE__*/React__default.createElement(reactBootstrap.Row, {
      className: "margin_top_row"
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

          if (constraints == true) {
            if (imageWidth < minWidth) {
              isError = true;
              var message = localization.imageDimensionsConstraints || "Image dimensions must be at least";
              message = message + " " + minWidth + "x" + minHeight;
              reactToastify.toast.warn(message);
            } else if (imageWidth > maxWidth) {
              isError = true;
              var message = localization.imageDimensionsConstraints || "Image dimensions must be at most";
              message = message + " " + maxWidth + "x" + maxHeight;
              reactToastify.toast.warn(message);
            } else if (imageHeight < minHeight) {
              isError = true;
              var message = localization.imageDimensionsConstraints || "Image dimensions must be at least";
              message = message + " " + minWidth + "x" + minHeight;
              reactToastify.toast.warn(message);
            } else if (imageHeight > maxHeight) {
              isError = true;
              var message = localization.imageDimensionsConstraints || "Image dimensions must be at most";
              message = message + " " + maxWidth + "x" + maxHeight;
              reactToastify.toast.warn(message);
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
          reactToastify.toast.error(localization.errorResizingImage || "Error resizing image");
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
          reactToastify.toast.warn(message);
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
    return /*#__PURE__*/React__default.createElement("div", null, /*#__PURE__*/React__default.createElement(reactBootstrap.Row, null, /*#__PURE__*/React__default.createElement(reactBootstrap.Col, {
      sm: 12
    }, image != null && /*#__PURE__*/React__default.createElement("div", null, /*#__PURE__*/React__default.createElement("div", {
      className: "upload_image_crud_buttons"
    }, /*#__PURE__*/React__default.createElement(reactFontawesome.FontAwesomeIcon, {
      className: "delete_image_icon",
      icon: freeSolidSvgIcons.faTrashAlt,
      onClick: this.onRemove
    }), /*#__PURE__*/React__default.createElement(reactFontawesome.FontAwesomeIcon, {
      className: "view_image_icon",
      icon: freeSolidSvgIcons.faEye,
      onClick: function onClick() {
        _this3.setState({
          showPreviewImage: true
        });
      }
    })), /*#__PURE__*/React__default.createElement("div", {
      className: "upload_image_box"
    }, /*#__PURE__*/React__default.createElement(reactBootstrap.Image, {
      src: image,
      fluid: true
    }))), image == null && /*#__PURE__*/React__default.createElement("div", {
      className: "upload_image_box"
    }, /*#__PURE__*/React__default.createElement(React__default.Fragment, null, /*#__PURE__*/React__default.createElement("input", {
      ref: "fileInput",
      onChange: this.handleFileUpload,
      type: "file",
      accept: "image/*",
      style: {
        display: "none"
      },
      multiple: false
    }), /*#__PURE__*/React__default.createElement(reactBootstrap.Button, {
      disabled: disabled,
      variant: "outline-secondary",
      className: error == true ? "upload_image_button_error" : "upload_image_button",
      onClick: function onClick() {
        return _this3.refs.fileInput.click();
      }
    }, /*#__PURE__*/React__default.createElement(reactFontawesome.FontAwesomeIcon, {
      icon: freeSolidSvgIcons.faUpload,
      onClick: this.props.onCancel
    })))))), error == true && /*#__PURE__*/React__default.createElement(reactBootstrap.Row, null, /*#__PURE__*/React__default.createElement(reactBootstrap.Col, null, /*#__PURE__*/React__default.createElement("div", {
      className: "upload_image_error_message"
    }, errorMessage || "Error"))), /*#__PURE__*/React__default.createElement(reactBootstrap.Modal, {
      onHide: function onHide() {},
      size: "xl",
      show: showPreviewImage
    }, /*#__PURE__*/React__default.createElement(reactBootstrap.Modal.Body, null, /*#__PURE__*/React__default.createElement(reactBootstrap.Card, null, /*#__PURE__*/React__default.createElement(reactBootstrap.Card.Header, null, /*#__PURE__*/React__default.createElement("span", {
      style: {
        "float": "right"
      }
    }, /*#__PURE__*/React__default.createElement(CustomTooltip, {
      tooltip: localization.cancel || "Cancel"
    }, /*#__PURE__*/React__default.createElement(reactFontawesome.FontAwesomeIcon, {
      className: "edit_header_icon_close",
      icon: freeRegularSvgIcons.faTimesCircle,
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

var OrbitalAddressComponentsPicker = /*#__PURE__*/function (_Component) {
  _inheritsLoose(OrbitalAddressComponentsPicker, _Component);

  function OrbitalAddressComponentsPicker(props) {
    var _this;

    _this = _Component.call(this, props) || this;
    _this.state = {
      autoCompleteLocation: _this.props.location,
      location: _this.props.location
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
    var autoCompleteLocation = this.state.autoCompleteLocation;
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
        placeholder: localization.searchPlaces || "Search places",
        style: {
          marginBottom: 10
        }
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

var MandatoryFieldLabel$1 = /*#__PURE__*/function (_Component) {
  _inheritsLoose(MandatoryFieldLabel, _Component);

  function MandatoryFieldLabel(props) {
    return _Component.call(this, props) || this;
  }

  var _proto = MandatoryFieldLabel.prototype;

  _proto.render = function render() {
    var className = "label_style" + " " + this.props.className;
    return /*#__PURE__*/React__default.createElement("div", {
      style: this.props.style
    }, /*#__PURE__*/React__default.createElement("span", {
      className: "mandatory_style"
    }, "* "), /*#__PURE__*/React__default.createElement("span", {
      className: className
    }, this.props.value));
  };

  return MandatoryFieldLabel;
}(React.Component);

var NormalFieldLabel$1 = /*#__PURE__*/function (_Component) {
  _inheritsLoose(NormalFieldLabel, _Component);

  function NormalFieldLabel(props) {
    return _Component.call(this, props) || this;
  }

  var _proto = NormalFieldLabel.prototype;

  _proto.render = function render() {
    var className = "label_style" + " " + this.props.className;
    return /*#__PURE__*/React__default.createElement("div", {
      style: this.props.style,
      className: className
    }, this.props.value);
  };

  return NormalFieldLabel;
}(React.Component);

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
        error = _this$props.error,
        mandatory = _this$props.mandatory;

    var _ref = position || {},
        lat = _ref.lat,
        lng = _ref.lng;

    var tooltip = localization.cityDoesNotModifyAddress || "Changing the city does not affect the address; viceversa the city will change";
    var cityLabel = /*#__PURE__*/React__default.createElement("span", null, " ", localization.city || "City", " ", /*#__PURE__*/React__default.createElement(CustomTooltip, {
      tooltip: tooltip
    }, /*#__PURE__*/React__default.createElement(reactFontawesome.FontAwesomeIcon, {
      className: "info_icon",
      icon: freeSolidSvgIcons.faInfoCircle
    })));
    return /*#__PURE__*/React__default.createElement("div", null, /*#__PURE__*/React__default.createElement(reactBootstrap.Row, null, /*#__PURE__*/React__default.createElement(reactBootstrap.Col, {
      sm: 5
    }, mandatory == false && /*#__PURE__*/React__default.createElement(NormalFieldLabel$1, {
      value: localization.address || "Address"
    }), (mandatory == null || mandatory == true) && /*#__PURE__*/React__default.createElement(MandatoryFieldLabel$1, {
      value: localization.address || "Address"
    })), /*#__PURE__*/React__default.createElement(reactBootstrap.Col, {
      sm: 2
    }, mandatory == false && /*#__PURE__*/React__default.createElement(NormalFieldLabel$1, {
      value: localization.lat || "Lat"
    }), (mandatory == null || mandatory == true) && /*#__PURE__*/React__default.createElement(MandatoryFieldLabel$1, {
      value: localization.lat || "Lat"
    })), /*#__PURE__*/React__default.createElement(reactBootstrap.Col, {
      sm: 2
    }, mandatory == false && /*#__PURE__*/React__default.createElement(NormalFieldLabel$1, {
      value: localization.lon || "Lon"
    }), (mandatory == null || mandatory == true) && /*#__PURE__*/React__default.createElement(MandatoryFieldLabel$1, {
      value: localization.lon || "Lon"
    })), /*#__PURE__*/React__default.createElement(reactBootstrap.Col, {
      sm: 3
    }, mandatory == false && /*#__PURE__*/React__default.createElement(NormalFieldLabel$1, {
      value: localization.city || "City"
    }), (mandatory == null || mandatory == true) && /*#__PURE__*/React__default.createElement(MandatoryFieldLabel$1, {
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
      return /*#__PURE__*/React__default.createElement("div", null, /*#__PURE__*/React__default.createElement(reactBootstrap.FormGroup, {
        style: {
          width: "100%"
        }
      }, /*#__PURE__*/React__default.createElement(reactBootstrap.FormControl, _extends({
        isInvalid: error
      }, getInputProps({
        placeholder: localization.searchPlaces || "Search places",
        style: {
          marginBottom: 10
        }
      }), {
        value: autoCompleteAddress || ""
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
        })), /*#__PURE__*/React__default.createElement("span", {
          key: index
        }, suggestion.description));
      })));
    })), /*#__PURE__*/React__default.createElement(reactBootstrap.Col, {
      sm: 2
    }, /*#__PURE__*/React__default.createElement(reactBootstrap.FormControl, {
      placeholder: localization.lat || "Lat",
      value: lat || "",
      disabled: true
    })), /*#__PURE__*/React__default.createElement(reactBootstrap.Col, {
      sm: 2
    }, /*#__PURE__*/React__default.createElement(reactBootstrap.FormControl, {
      placeholder: localization.lon || "Lon",
      value: lng || "",
      disabled: true
    })), /*#__PURE__*/React__default.createElement(reactBootstrap.Col, {
      sm: 3
    }, /*#__PURE__*/React__default.createElement(reactBootstrap.FormControl, {
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
    }))), /*#__PURE__*/React__default.createElement(reactBootstrap.Row, null, /*#__PURE__*/React__default.createElement(reactBootstrap.Col, {
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

function _templateObject() {
  var data = _taggedTemplateLiteralLoose(["\n.sub_content_container{\n  border-bottom: 1px solid #dee2e6;\n  padding: 15px;\n} \n\n.table {\n  display: inline-block;\n  border-spacing: 0;\n  border: 1px solid #dee2e6;\n\n  .tr {\n    :last-child {\n      .td {\n        border-bottom: 0;\n      }\n    }\n    .td {\n      overflow-x: hidden;\n    }\n  }\n\n  .th,\n  .td {\n    margin: 0;\n    padding: 0.5rem;\n    border-bottom: 1px solid #dee2e6;\n    border-right: 1px solid #dee2e6;\n\n    ", "\n    position: relative;\n\n    :last-child {\n      border-right: 0;\n    }\n\n    .resizer {\n      right: 0;\n      background: #dee2e6;\n      width: 1px;\n      height: 100%;\n      position: absolute;\n      top: 0;\n      z-index: 1;\n      ", "\n      touch-action :none;\n\n      &.isResizing {\n        background: black;\n      }\n    }\n  }\n}\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}
var Styles = styled.div(_templateObject(), "", "");

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
      return /*#__PURE__*/React__default.createElement("div", _extends({}, row.getRowProps(), {
        className: "my_tr"
      }), row.cells.map(function (cell) {
        return /*#__PURE__*/React__default.createElement("div", _extends({}, cell.getCellProps(), {
          className: "my_td"
        }), /*#__PURE__*/React__default.createElement("div", {
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
      return /*#__PURE__*/React__default.createElement("div", _extends({}, headerGroup.getHeaderGroupProps(), {
        className: "my_tr"
      }), headerGroup.headers.map(function (column) {
        return /*#__PURE__*/React__default.createElement("div", _extends({}, column.getHeaderProps(), {
          className: "my_th"
        }), /*#__PURE__*/React__default.createElement("div", {
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
  return /*#__PURE__*/React__default.createElement("span", null, column.canResize && /*#__PURE__*/React__default.createElement("div", _extends({}, column.getResizerProps(), {
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
    return /*#__PURE__*/React__default.createElement("option", {
      key: index,
      value: value
    }, value);
  });

  return options;
}

function getPaginationSection(localization, gotoPage, canPreviousPage, previousPage, canNextPage, nextPage, pageCount, pageIndex, pageOptions, data, pageSize, _fixedPageSize, setPageSize, _defaultPageSize, hidePagination) {
  return /*#__PURE__*/React__default.createElement(reactBootstrap.Row, {
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

function ReactTable(_ref) {
  var localization = _ref.localization,
      columns = _ref.columns,
      data = _ref.data,
      _defaultPageSize = _ref._defaultPageSize,
      _fixedPageSize = _ref._fixedPageSize,
      _noDataMessage = _ref._noDataMessage,
      skipPageReset = _ref.skipPageReset,
      hidePagination = _ref.hidePagination;
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
    }
  }, reactTable.useSortBy, reactTable.useExpanded, reactTable.usePagination, reactTable.useResizeColumns, reactTable.useFlexLayout, reactTable.useRowSelect),
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

  return /*#__PURE__*/React__default.createElement(Styles, null, /*#__PURE__*/React__default.createElement("div", _extends({}, getTableProps(), {
    className: "table"
  }), /*#__PURE__*/React__default.createElement("div", null, headerGroups.map(function (headerGroup) {
    return /*#__PURE__*/React__default.createElement("div", _extends({}, headerGroup.getHeaderGroupProps(), {
      className: "tr"
    }), headerGroup.headers.map(function (column) {
      return /*#__PURE__*/React__default.createElement("div", _extends({}, column.getHeaderProps(), {
        className: "th"
      }), column.render("Header"), setSortIcon(column), setResize(column));
    }));
  }), data.length === 0 && /*#__PURE__*/React__default.createElement("span", null, setEmptyHeaders(pageSize, headerGroups))), /*#__PURE__*/React__default.createElement("div", getTableBodyProps(), page.map(function (row, i) {
    if (row.original && row.original.subContent && _$2.isEmpty(row.original.subContent) === false) {
      row.canExpand = true;
    }

    prepareRow(row);
    return /*#__PURE__*/React__default.createElement(React__default.Fragment, null, /*#__PURE__*/React__default.createElement("div", _extends({}, row.getRowProps(), {
      className: "tr"
    }), row.cells.map(function (cell) {
      return /*#__PURE__*/React__default.createElement("div", _extends({}, cell.getCellProps(), {
        className: "td"
      }), cell.render("Cell"));
    })), row.isExpanded ? /*#__PURE__*/React__default.createElement("div", {
      className: "sub_content_container"
    }, row.original.subContent) : null);
  }), data.length > 0 && /*#__PURE__*/React__default.createElement("span", null, setEmptyRows(prepareRow, canNextPage, page, pageSize, data))), data.length == 0 && /*#__PURE__*/React__default.createElement("div", {
    className: "noData"
  }, /*#__PURE__*/React__default.createElement(reactFontawesome.FontAwesomeIcon, {
    icon: freeSolidSvgIcons.faInfoCircle
  }), " ", _noDataMessage || "No data")), getPaginationSection(localization, gotoPage, canPreviousPage, previousPage, canNextPage, nextPage, pageCount, pageIndex, pageOptions, data, pageSize, _fixedPageSize, setPageSize, _defaultPageSize, hidePagination));
}

exports.APISb = APISb;
exports.AuthStore = AuthStore;
exports.BrandStore = BrandStore;
exports.ClientSession = ClientSession;
exports.CommonUtils = PluginUtils;
exports.DatePicker = DatePicker;
exports.DateTimePicker = DatePicker$1;
exports.HTMLTextEditor = HTMLTextEditor;
exports.LoadingOverlay = CustomLoadingOverlay;
exports.MandatoryFieldLabel = MandatoryFieldLabel;
exports.NormalFieldLabel = NormalFieldLabel;
exports.OrbitalAddressComponentsPicker = OrbitalAddressComponentsPicker;
exports.OrbitalLocationPicker = OrbitalLocationPicker;
exports.OrbitalStore = OrbitalStore;
exports.PluginStore = PluginStore;
exports.ReactTable = ReactTable;
exports.RecurrenceEditor = RecurrenceEditor;
exports.Scheduler = ReservationScheduler;
exports.SessionStorageStore = SessionStorageStore;
exports.TimePicker = TimePicker;
exports.Tooltip = CustomTooltip;
exports.UploadImage = UploadImage;
//# sourceMappingURL=index.js.map
