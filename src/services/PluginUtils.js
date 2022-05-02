import _ from "lodash";

import ClientSession from "./ClientSession";
import SpecificAPI from "./SpecificAPI";
import SessionStorageStore from "../stores/SessionStorageStore";

import * as constants from "../constants";

export function getBrandPluginActivationInstance(authKey, apiUrl, pluginKey, brandId) {
    return SpecificAPI.getPluginActivation(authKey, apiUrl, pluginKey, brandId, brandId);
}

export function getOwnerPluginActivationInstance(authKey, apiUrl, pluginKey, brandId, ownerId) {
    return new Promise(function (resolve, reject) {
        var p0 = SpecificAPI.getPluginActivationForAll(authKey, apiUrl, pluginKey, brandId, brandId);
        var p1 = SpecificAPI.getPluginActivation(authKey, apiUrl, pluginKey, brandId, ownerId);
        Promise.all([p0, p1])
            .then((results) => {
                var buyForAllActivation = results[0];
                var singleOwnerActivation = results[1];

                var pluginActivation = _.isEmpty(buyForAllActivation) == false ? buyForAllActivation : singleOwnerActivation;
                resolve(pluginActivation);
            })
            .catch((error) => {
                reject(error);
            })
    })
}

export function getPluginActivation(authKey, apiUrl, pluginTarget, pluginKey, brandId, ownerId, PluginStore) {
    var self = this;
    return new Promise(function (resolve, reject) {
        SpecificAPI.getAvailablePlugin(authKey, apiUrl, pluginKey)
            .then((availablePlugin) => {
                PluginStore.setAvailablePlugin(availablePlugin);

                if (pluginTarget == "brand") {
                    return self.getBrandPluginActivationInstance(authKey, apiUrl, pluginKey, brandId);
                } else if (pluginTarget == "owner") {
                    return self.getOwnerPluginActivationInstance(authKey, apiUrl, pluginKey, brandId, ownerId)
                }
            })
            .then((pluginActivation) => {
                if (_.isEmpty(pluginActivation) == true) {
                    reject("Plugin '" + pluginKey + "' is not active")
                } else {
                    resolve(pluginActivation);
                }
            })
            .catch((error) => {
                console.error(error);
            })
    })
}

export function getPluginLocalization(authKey, apiUrl, pluginKey, pluginActivationId) {
    return new Promise(function (resolve, reject) {
        var p0 = SpecificAPI.getGeneralPluginLocalization(authKey, apiUrl, pluginKey);
        var p1 = SpecificAPI.getActivePluginLocalization(authKey, apiUrl, pluginActivationId);

        Promise.all([p0, p1])
            .then((results) => {
                var generalPluginLocalization = results[0];
                var activePluginLocalization = results[1];

                var localization = { ...generalPluginLocalization, ...activePluginLocalization };

                resolve(localization);
            })
            .catch((error) => {
                reject("Error getting localization");
            })
    })
}

export function setLocalization(localizationInstance, localizationObj, callbackLocalization) {
    var newLocalizationObject = {};
    _.each(localizationObj, (obj, key) => {
        var languages = Object.keys(obj);
        _.each(languages, (language) => {
            if (newLocalizationObject[language] == null) {
                newLocalizationObject[language] = {};
            }

            newLocalizationObject[language][key] = obj[language];
        })
    })

    newLocalizationObject.En = newLocalizationObject.En || {};
    newLocalizationObject.It = newLocalizationObject.It || {};

    newLocalizationObject.En = { ...callbackLocalization.En, ...newLocalizationObject.En }
    newLocalizationObject.It = { ...callbackLocalization.It, ...newLocalizationObject.It }

    localizationInstance.setContent(newLocalizationObject);
}

export function setUserLocalizationLanguage(AuthStore, localizationInstance) {
    var lang = SessionStorageStore.getCurrentLang() || AuthStore.getDefautlLang();
    localizationInstance.setLanguage(lang);
}

export function checkPermission(AuthStore, pluginKey) {
    return new Promise(function (resolve, reject) {
        var userPluginPermission = AuthStore.getUserPluginPermission();

        var pluginPermission = userPluginPermission[pluginKey];
        if (pluginPermission === null || pluginPermission === "D") {
            reject("The user is not allowed to access the '" + pluginKey + "' plugin");
        } else {
            resolve();
        }
    })
}

// export function initializePluginPipeline(authKey, apiUrl, pluginTarget, pluginKey, AuthStore, OrbitalStore, BrandStore, PluginStore, localizationInstance, callbackLocalization) {
export function initializePluginPipeline(initializationObject) {
    var { authKey, apiUrl, pluginTarget, pluginKey, AuthStore, OrbitalStore, BrandStore, PluginStore, localizationInstance, callbackLocalization } = initializationObject;
    var self = this;
    return new Promise(function (resolve, reject) {
        ClientSession.checkLogin()
            .then(() => {
                var auth = SessionStorageStore.getAuth();
                auth = auth && typeof auth == "string" ? JSON.parse(auth) : auth;
                return AuthStore.setAuth(auth);
            })
            .then(() => {
                self.checkPermission(AuthStore, pluginKey);
            })
            .then(() => {
                var brandId = AuthStore.getBrandId();
                var ownerId = AuthStore.getOwnerId();

                return self.getPluginActivation(authKey, apiUrl, pluginTarget, pluginKey, brandId, ownerId, PluginStore);
            })
            .then((pluginActivation) => {
                var pluginActivationId = pluginActivation.id;
                var brandId = AuthStore.getBrandId();
                PluginStore.setPluginActivation(pluginActivation);

                var p0 = SpecificAPI.getPluginConfiguration(authKey, apiUrl, pluginActivationId);
                var p1 = self.getPluginLocalization(authKey, apiUrl, pluginKey, pluginActivationId);
                var p2 = SpecificAPI.getOrbitalConfig(authKey, apiUrl, null);
                var p3 = SpecificAPI.getBrandById(authKey, apiUrl, brandId);
                var p4 = SpecificAPI.getBrandConfig(authKey, apiUrl, brandId);

                return Promise.all([p0, p1, p2, p3, p4])
            })
            .then((results) => {
                var pluginConfiguration = results[0];
                PluginStore.setPluginConfiguration(pluginConfiguration);

                var localizationObj = results[1];
                self.setLocalization(localizationInstance, localizationObj, callbackLocalization);
                self.setUserLocalizationLanguage(AuthStore, localizationInstance);

                var orbitalConfig = results[2];
                OrbitalStore.setOrbitalConfig(orbitalConfig);

                var brand = results[3];
                BrandStore.setBrand(brand);

                var brandConfig = results[4];
                BrandStore.setBrandConfiguration(brandConfig);

                resolve();
            })
            .catch((error) => {
                console.error("Error during plugin initalization pipeline");
                reject(error);
            })
    })
}

export function initializePluginPipeline_WITHOUT_pluginAvailable_pluginActivation(initializationObject) {
    var { authKey, apiUrl, pluginTarget, pluginKey, AuthStore, OrbitalStore, BrandStore, PluginStore, localizationInstance, callbackLocalization } = initializationObject;
    var self = this;
    return new Promise(function (resolve, reject) {
        ClientSession.checkLogin()
            .then(() => {
                var auth = SessionStorageStore.getAuth();
                auth = auth && typeof auth == "string" ? JSON.parse(auth) : auth;
                return AuthStore.setAuth(auth);
            })
            .then(() => {
                return SpecificAPI.getAvailablePlugin(authKey, apiUrl, pluginKey)
            })
            .then((availablePlugin) => {
                PluginStore.setAvailablePlugin(availablePlugin);
                var brandId = AuthStore.getBrandId();

                var p0 = SpecificAPI.getOrbitalConfig(authKey, apiUrl, null);
                var p1 = SpecificAPI.getBrandById(authKey, apiUrl, brandId);
                var p2 = SpecificAPI.getBrandConfig(authKey, apiUrl, brandId);

                return Promise.all([p0, p1, p2])
            })
            .then((results) => {
                var orbitalConfig = results[0];
                OrbitalStore.setOrbitalConfig(orbitalConfig);

                var brand = results[1];
                BrandStore.setBrand(brand);

                var brandConfig = results[2];
                BrandStore.setBrandConfiguration(brandConfig);

                var localizationObj = {};
                self.setLocalization(localizationInstance, localizationObj, callbackLocalization);

                resolve();
            })
            .catch((error) => {
                console.error("Error during plugin initalization pipeline");
                reject(error);
            })
    })
}

export function getLocalizationChannel() {
    var localizationChannel = constants.localizationChannel;
    return localizationChannel;
}