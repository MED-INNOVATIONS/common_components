import _ from "lodash";

import SessionStorageStore from "../stores/SessionStorageStore";


class ClientSession {

  static isLoggedIn_V2(){
    const auth = SessionStorageStore.getAuth();
    const SBDashboardAuthkey = SessionStorageStore.getDashboardAuthKey();
    const isLoggedIn = _.isEmpty(auth) === true || _.isEmpty(SBDashboardAuthkey) ? false : true;
    return isLoggedIn;
  }

  static isLoggedIn() {
    return new Promise(function (resolve, reject) {
      var auth = SessionStorageStore.getAuth();
      if (_.isEmpty(auth) == true) {
        resolve(false);
      } else {
        resolve(true);
      }
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

  static getAuth() {
    return new Promise(function (resolve, reject) {
      var auth = SessionStorageStore.getAuth();
      if (_.isEmpty(auth) == true) {
        reject(null);
      } else {
        resolve(auth);
      }
    })
  }
}
export default ClientSession;
