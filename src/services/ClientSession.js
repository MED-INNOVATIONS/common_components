import * as session from "browser-store";
import sessionStorage from "browser-session-store";
import _ from "lodash";

import * as constants from "../constants";

sessionStorage.setItem = function (key) {
  var setLocalizationEvent = new Event("setLocalizationEvent");
  setLocalizationEvent.key = key;
  window.dispatchEvent(setLocalizationEvent);
};

class ClientSession {
  static SBDashboardAuthkey = constants.SBDashboardAuthkey;
  static SBUserAuthkey = constants.SBUserAuthkey;
  static orbitalAuthkey = constants.orbitalAuthkey;
  static authkey = constants.authkey;

  /*************************************************************************/
  /************************ SET/GET LOOPBACK TOKENS ************************/
  /*************************************************************************/
  static getAuth() {
    var self = this;
    return new Promise(function (resolve, reject) {
      sessionStorage.get(self.authkey, (error, value) => {
        if (error) {
          reject(error);
        } else {
          resolve(value);
        }
      });
    })
  }

  static setAuth(value) {
    var self = this;
    return new Promise(function (resolve, reject) {
      sessionStorage.put(self.authkey, value, (error) => {
        if (error) {
          reject(error);
        } else {
          sessionStorage.setItem(self.authkey);
          resolve(value);
        }
      });
    })
  }

  static removeAuth() {
    var self = this;
    return new Promise(function (resolve, reject) {
      sessionStorage.remove(self.authkey, (error) => {
        if (error) {
          reject(error);
        } else {
          sessionStorage.setItem(self.authkey);
          resolve();
        }
      })
    })
  }

  static getOrbitalAuthkey() {
    var self = this;
    return new Promise(function (resolve, reject) {
      session.get(self.orbitalAuthkey, (error, value) => {
        if (error) {
          reject(error);
        } else {
          resolve(value);
        }
      });
    })
  }

  static setOrbitalAuthkey(authData) {
    var self = this;
    return new Promise(function (resolve, reject) {
      session.put(self.orbitalAuthkey, authData, (error) => {
        if (error) {
          reject(error);
        } else {
          resolve(authData.user);
        }
      })
    })
  }

  static removeOrbitalAuthKey() {
    var self = this;
    return new Promise(function (resolve, reject) {
      session.remove(self.orbitalAuthkey, (error) => {
        if (error) {
          reject(error);
        } else {
          resolve();
        }
      })
    })
  }

  /*************************************************************************/
  /************************ SET/GET SPRINGBOOT TOKENS **********************/
  /*************************************************************************/
  static setSBDashboardAuthkey(value) {
    var self = this;
    return new Promise(function (resolve, reject) {
      sessionStorage.put(self.SBDashboardAuthkey, value, (error) => {
        if (error) {
          reject(error);
        } else {
          resolve(value);
        }
      });
    })
  }

  static removeSBDashboardAuthkey() {
    var self = this;
    return new Promise(function (resolve, reject) {
      sessionStorage.remove(self.SBDashboardAuthkey, (error) => {
        if (error) {
          reject(error);
        } else {
          resolve();
        }
      });
    })
  }

  static setSBUserAuthkey(value) {
    var self = this;
    return new Promise(function (resolve, reject) {
      sessionStorage.put(self.SBUserAuthkey, value, (error) => {
        if (error) {
          reject(error);
        } else {
          resolve(value);
        }
      });
    })
  }

  static removeSBUserAuthkey() {
    var self = this;
    return new Promise(function (resolve, reject) {
      sessionStorage.remove(self.SBUserAuthkey, (error) => {
        if (error) {
          reject(error);
        } else {
          resolve();
        }
      });
    })
  }

  /*************************************************************************/
  /************************ CONTROLS ***************************************/
  /*************************************************************************/
  static isLoggedInToOrbital() {
    var self = this;
    return new Promise(function (resolve, reject) {
      self.getOrbitalAuthkey()
        .then((data) => {
          if (_.isEmpty(data) == true) {
            resolve(false);
          } else {
            resolve(true);
          }
        })
        .catch((error) => {
          reject(error);
        })
    })
  }

  static isLoggedIn() {
    var self = this;
    return new Promise(function (resolve, reject) {
      self.getAuth()
        .then((data) => {
          if (_.isEmpty(data) == true) {
            resolve(false);
          } else {
            resolve(true);
          }
        })
        .catch((error) => {
          reject(error);
        })
    })
  }

  static isLoggedInV2() {
    var logged = false;
    const authKey = sessionStorage.getItem(self.authkey);
    logged = _.isEmpty(authKey) ? false : true;
    return logged;
  }

  static getAccessToken(callback) {
    this.getAuth()
      .then((value) => {
        callback(true, value);
      })
      .catch((error) => {
        console.error(error);
        callback(false, error);
      })
  };

  static getPermission(callback) {
    // this.getAuth()
    //   .then((value) => {
    //     var permission = value.permission || {};
    //     permission = permission.permission || {}
    //     callback(permission);
    //   })
    //   .catch((error) => {
    //     console.error(error);
    //     callback(error);
    //   })
  }

  static checkPermission(plugin_key) {
    var self = this;
    return new Promise((resolve, reject) => {
      self.getAuth()
        .then((auth) => {
          var permission = auth.permission || {};
          permission = permission.permission || {};

          var permission_value = permission[plugin_key];
          resolve(permission_value);
        })
        .catch((error) => {
          reject(error);
        })
    })
  }

  static checkLogin() {
    var self = this;
    return new Promise(function (resolve, reject) {
      self.isLoggedIn()
        .then((logged) => {
          if (logged == true) {
            resolve();
          } else {
            reject("The user isn't logged in");
          }
        })
        .catch((error) => {
          reject(error);
        })
    })
  }
}
export default ClientSession;
