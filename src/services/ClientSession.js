import _ from "lodash";

import SessionStorageStore from "../stores/SessionStorageStore";


class ClientSession {
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
