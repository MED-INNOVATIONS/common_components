import APISb from "./Apisb";

export default class SpecificAPI {
    static getAvailablePlugin(authKey, apiUrl, pluginKey) {
        return new Promise(function (resolve, reject) {
            var url = "/PluginAvailableListMo/search/findByPluginKey";
            var params = { "pluginKey": pluginKey }

            APISb.get(authKey, apiUrl, url, params)
                .then((result) => {
                    var data = result.data;
                    resolve(data);
                })
                .catch((error) => {
                    resolve(error);
                })
        })
    }

    static getPluginActivationForAll(authKey, apiUrl, pluginKey, brandId, userId) {
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

            APISb.get(authKey, apiUrl, url, params)
                .then((result) => {
                    var data = result.data;
                    resolve(data);
                })
                .catch((error) => {
                    reject(error);
                })
        })
    }

    static getPluginActivation(authKey, apiUrl, pluginKey, brandId, userId) {
        return new Promise(function (resolve, reject) {
            var url = "/PluginActivationMo/search/findByPluginKeyAndBrandIdAndIdRelAndPluginActiveAndPluginEnable";
            var params = {
                "pluginKey": pluginKey,
                "brandId": brandId,
                "idRel": userId,
                "pluginActive": true,
                "pluginEnable": true
            };

            APISb.get(authKey, apiUrl, url, params)
                .then((result) => {
                    var data = result.data;
                    resolve(data);
                })
                .catch((error) => {
                    reject(error);
                })
        })
    }

    static getPluginConfiguration(authKey, apiUrl, pluginId) {
        return new Promise(function (resolve, reject) {
            var url = "/BrandPluginConfigMo/search/findByPluginId";
            var params = { "pluginId": pluginId };
            APISb.get(authKey, apiUrl, url, params)
                .then((result) => {
                    var data = result.data;
                    data = data[0] || data;
                    var config = data && data.configData ? data.configData : {};
                    resolve(config);
                })
                .catch((error) => {
                    reject(error);
                })

        })
    }

    static getBrandById(authKey, apiUrl, brandId) {
        return new Promise(function (resolve, reject) {
            var url = "/BrandsMo/" + brandId;
            APISb.get(authKey, apiUrl, url, null)
                .then((result) => {
                    var data = result.data;
                    resolve(data);
                })
                .catch((error) => {
                    reject(error);
                })
        })
    }

    static getBrandConfig(authKey, apiUrl, brandId) {
        return new Promise(function (resolve, reject) {
            var url = "/BrandConfigurationMo/search/findByBrandId";
            var params = { "brandId": brandId };

            APISb.get(authKey, apiUrl, url, params)
                .then((result) => {
                    var data = result.data;
                    data = data[0] || data;
                    resolve(data);
                })
                .catch((error) => {
                    reject(error);
                })
        })
    }

    static getOrbitalConfig(authKey, apiUrl, key) {
        return new Promise(function (resolve, reject) {
            var url = "/ConfigMo/search/findByKey";

            key = key || "D001";
            var params = { "key": key };

            APISb.get(authKey, apiUrl, url, params)
                .then((result) => {
                    var data = result.data;
                    resolve(data);
                })
                .catch((error) => {
                    reject(error);
                })
        })
    }

    static getGeneralPluginLocalization(authKey, apiUrl, pluginKey) {
        return new Promise(function (resolve, reject) {
            var url = `/LocalizationAvailablePluginsMo/search/findByPluginKey`;
            var params = { "pluginKey": pluginKey }

            APISb.get(authKey, apiUrl, url, params)
                .then((result) => {
                    var data = result.data || {};
                    var dashboard = data.dashboard || {};
                    resolve(dashboard);
                })
                .catch((error) => {
                    reject(error);
                })
        })
    }

    static getActivePluginLocalization(authKey, apiUrl, pluginActivationId) {
        return new Promise(function (resolve, reject) {
            var url = "/LocalizationActivePluginsMo/search/findByPluginActivationId";
            var params = { "pluginActivationId": pluginActivationId };

            APISb.get(authKey, apiUrl, url, params)
                .then((result) => {
                    var data = result.data || {};
                    var dashboard = data.dashboard || {};
                    resolve(dashboard);
                })
                .catch((error) => {
                    reject(error);
                })
        })
    }

}