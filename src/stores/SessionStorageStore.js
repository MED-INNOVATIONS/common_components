import _ from "lodash";
import * as constants from "../constants";

const MySessionStorage = require('browser-session-store')

MySessionStorage.setItem = function (key) {
    if (key == constants.currentLang) {
        var localizationChannel = constants.localizationChannel;
        var setLocalizationEvent = new Event(localizationChannel);
        setLocalizationEvent.key = key;
        window.dispatchEvent(setLocalizationEvent);
    }
};

export default class SessionStorageStore {
    static cleanKey(value) {
        if (value != null) {
            value = value.replaceAll('"', "");
        }
        return value;
    }

    /*************************************************************************/
    /************************** CURRENT LANG *********************************/
    /*************************************************************************/
    static getCurrentLang() {
        var currentLang = sessionStorage.getItem(constants.currentLang);
        currentLang = this.cleanKey(currentLang);
        return currentLang;
    }

    static setCurrentLang(currentLang) {
        return new Promise(function (resolve, reject) {
            MySessionStorage.put(constants.currentLang, currentLang, (error) => {
                if (error) {
                    reject(error);
                } else {
                    MySessionStorage.setItem(constants.currentLang);
                    resolve(currentLang);
                }
            });
        })
    }

    static removeCurrentLang() {
        return new Promise(function (resolve, reject) {
            MySessionStorage.remove(constants.currentLang, (error) => {
                if (error) {
                    reject(error);
                } else {
                    resolve();
                }
            });
        })
    }

    /*************************************************************************/
    /************************** DASHBOARD AUTH KEY ***************************/
    /*************************************************************************/
    static getDashboardAuthKey() {
        var SBDashboardAuthkey = sessionStorage.getItem(constants.SBDashboardAuthkey);
        SBDashboardAuthkey = this.cleanKey(SBDashboardAuthkey);
        return SBDashboardAuthkey;
    }

    static setDashboardAuthKey(dashboardAuthKey) {
        return new Promise(function (resolve, reject) {
            MySessionStorage.put(constants.SBDashboardAuthkey, dashboardAuthKey, (error) => {
                if (error) {
                    reject(error);
                } else {
                    resolve(dashboardAuthKey);
                }
            });
        })
    }

    static removeDashboardAuthKey() {
        return new Promise(function (resolve, reject) {
            MySessionStorage.remove(constants.SBDashboardAuthkey, (error) => {
                if (error) {
                    reject(error);
                } else {
                    resolve();
                }
            });
        })
    }

    /*************************************************************************/
    /************************** USER AUTH KEY ********************************/
    /*************************************************************************/
    static getUserAuthKey() {
        var SBUserAuthkey = sessionStorage.getItem(constants.SBUserAuthkey);
        SBUserAuthkey = this.cleanKey(SBUserAuthkey);
        return SBUserAuthkey;
    }

    static setUserAuthKey(userAuthKey) {
        return new Promise(function (resolve, reject) {
            MySessionStorage.put(constants.SBUserAuthkey, userAuthKey, (error) => {
                if (error) {
                    reject(error);
                } else {
                    resolve(userAuthKey);
                }
            });
        })
    }

    static removeUserAuthKey() {
        return new Promise(function (resolve, reject) {
            MySessionStorage.remove(constants.SBUserAuthkey, (error) => {
                if (error) {
                    reject(error);
                } else {
                    resolve();
                }
            });
        })
    }

    /*************************************************************************/
    /************************** AUTH DATA-STRUCTURE **************************/
    /*************************************************************************/
    static getAuth() {
        var authkey = sessionStorage.getItem(constants.authkey);
        return authkey;
    }

    static setAuth(authkey) {
        return new Promise(function (resolve, reject) {
            MySessionStorage.put(constants.authkey, authkey, (error) => {
                if (error) {
                    reject(error);
                } else {
                    resolve(authkey);
                }
            });
        })
    }

    static removeAuth() {
        return new Promise(function (resolve, reject) {
            MySessionStorage.remove(constants.authkey, (error) => {
                if (error) {
                    reject(error);
                } else {
                    resolve();
                }
            });
        })
    }

    /*************************************************************************/
    /************************** SBAPI URL ************************************/
    /*************************************************************************/
    static getSBAPIUrl() {
        var SBAPI_URL = sessionStorage.getItem(constants.SBAPI_URL);
        SBAPI_URL = this.cleanKey(SBAPI_URL);
        return SBAPI_URL;
    }

    static setSBAPIUrl(SBAPIUrl) {
        return new Promise(function (resolve, reject) {
            MySessionStorage.put(constants.SBAPI_URL, SBAPIUrl, (error) => {
                if (error) {
                    reject(error);
                } else {
                    resolve(SBAPIUrl);
                }
            });
        })
    }

    static removeSBAPIUrl() {
        return new Promise(function (resolve, reject) {
            MySessionStorage.remove(constants.SBAPI_URL, (error) => {
                if (error) {
                    reject(error);
                } else {
                    resolve();
                }
            });
        })
    }
}