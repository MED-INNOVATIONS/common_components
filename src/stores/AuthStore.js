import ClientSession from "../services/ClientSession";

export default class AuthStore {
    static defaultLang = "En";

    static auth = {};

    static setAuthStore() {
        var self = this;
        return new Promise(function (resolve, reject) {
            ClientSession.getAuth()
                .then((data) => {
                    self.setAuth(data);
                    resolve();
                })
                .catch((error) => {
                    reject(error);
                })
        })
    }

    static setAuth(auth) {
        this.auth = auth;
    }

    static getAuth() {
        return this.auth;
    }

    static getUser() {
        var user = this.auth.user || {};
        return user;
    }

    static getUserId() {
        var user = this.auth.user || {};
        var userId = user.id;
        return userId
    }

    static getUserRole() {
        var user = this.auth.user || {};
        var role = user.role;
        return role;
    }

    static getUserSubRole() {
        var user = this.auth.user || {};
        var subRole = user.subRole;
        return subRole;
    }

    static getDefautlLang() {
        var auth = this.auth || {};
        var lang = auth.lang;
        return lang;
    }

    static getCurrentLang() {
       return this.getDefautlLang();
    }

    static getUserLang() {
        return this.getDefautlLang();
    }

    static getPreferedLanguages() {
        var auth = this.auth || {};
        var user = auth.user || {};
        var brand = user._brand || {};
        var brandConfiguration = brand._brandConfiguration || {};
        var languages = brandConfiguration.preferedLang || [];

        return languages;
    }

    static getUserPluginPermission() {
        var user = this.auth.user || {};
        var permissions = user._permission || {};
        return permissions
    }

    static checkPermissionKey(permission_key) {
        var user = this.auth.user || {};
        var permissions = user._permission || {};
        var permitted = permissions[permission_key] || "D";

        return permitted;
    }

    static getBrandId() {
        var user = this.auth.user || {};
        var brandId = user.brandId;
        return brandId
    }

    static getReferrerId() {
        var user = this.auth.user || {};
        var referrerId = user.referrerId;
        return referrerId
    }

    static getOwnerId() {
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
    }

    static getParentId() {
        return this.getOwnerId();
    }
}