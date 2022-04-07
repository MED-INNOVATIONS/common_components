import * as constants from "../constants";

export default class SessionStorageStore {
    /*************************************************************************/
    /************************** DASHBOARD AUTH *******************************/
    /*************************************************************************/
    static setDashboardAuthKey(dashboardAuthKey) {
        sessionStorage.setItem(constants.SBDashboardAuthkey, dashboardAuthKey);
    }

    static getDashboardAuthKey() {
        var dashboardAuthKey = sessionStorage.getItem(constants.SBDashboardAuthkey);
        return dashboardAuthKey;
    }

    /*************************************************************************/
    /************************** DASHBOARD AUTH *******************************/
    /*************************************************************************/
    static setUserAuthKey(userAuthKey) {
        sessionStorage.setItem(constants.SBUserAuthkey, userAuthKey);
    }

    static getUserAuthKey() {
        var userAuthKey = sessionStorage.getItem(constants.SBUserAuthkey);
        return userAuthKey;
    }

    /*************************************************************************/
    /************************** SBAPI URL ************************************/
    /*************************************************************************/
    static setSBAPIUrl(SBAPIUrl) {
        sessionStorage.setItem(constants.SBAPI_URL, SBAPIUrl);
    }

    static getSBAPIUrl() {
        var SBAPIUrl = sessionStorage.getItem(constants.SBAPI_URL);
        return SBAPIUrl;
    }
}