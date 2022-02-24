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

    static getUserPluginPermission() {
        var permission = this.auth.permission || [];
        permission = permission[0];
        permission = permission != null ? permission.permission : {};
        return permission;
    }

    static checkPermissionKey(permission_key) {
        var permitted = null;
        var permission = this.auth.permission || [];
        permission = permission[0];
        permission = permission != null ? permission.permission : {};
        permitted = permission[permission_key] || permitted;
        return permitted;
    }

    static getBrandId() {
        var brandId = this.auth && this.auth.user && this.auth.user.brandId ? this.auth.user.brandId : null;
        return brandId
    }

    static getReferrerId() {
        var referrerId = this.auth && this.auth.user && this.auth.user.referrerId ? this.auth.user.referrerId : null;
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

    static getUser() {
        var user = this.auth && this.auth.user ? this.auth.user : null;
        return user;
    }

    static getUserId() {
        var userId = this.auth && this.auth.user && this.auth.user.id ? this.auth.user.id : null;
        return userId
    }

    static isChildOwner() {
        var isChild = this.auth && this.auth.user && this.auth.user.referrerId != null ? true : false;
        return isChild;
    }

    static getOwnerAllowedActivities() {
        return this.getUserAllowedActivities();
    }

    static getUserAllowedActivities() {
        var allowedActivities = this.auth && this.auth.user && this.auth.user.allowedActivities ? this.auth.user.allowedActivities : [];
        return allowedActivities;
    }
    static getUserRole() {
        var role = this.auth && this.auth.user && this.auth.user.role ? this.auth.user.role : null;
        return role;
    }

    static getDefautlLang() {
        var config = this.auth.config;
        var defaultLang = config != null ? config.defaultLang : this.defaultLang;
        return defaultLang;
    }

    static getCurrentLang() {
        var lang = null;
        var auth = sessionStorage.getItem("auth");
        if (auth) {
            auth = JSON.parse(auth);
            lang = auth.config.userLang;
        }
        return lang;
    }

    static getPreferedLanguages() {
        var config = this.auth.config;
        var preferedlang = config != null ? config.preferedlang : null;
        return preferedlang;
    }

    static getUserLang() {
        var lang = this.auth && this.auth.user && this.auth.user.lang ? this.auth.user.lang : null;
        return lang;
    }
}