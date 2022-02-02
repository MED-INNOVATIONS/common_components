import axios from "axios";

var API_SB_BASE_URL = "https://sbapi.orbital.cloud";

export default class APISb {
    static API_SB_BASE_URL = API_SB_BASE_URL;

    static cleanToken(token) {
        token = `Bearer ${token}`;
        token = token.replaceAll('"', "");
        return token;
    }

    static get(token, endpoint, params, customHeaders) {
        var url = API_SB_BASE_URL + endpoint;

        token = this.cleanToken(token);
        var defaultHeaders = {
            "content-type": "application/json",
            "Accept": "application/json",
            "Authorization": token
        };
        defaultHeaders = { ...defaultHeaders, ...customHeaders };

        var config = {
            method: "get",
            url: url,
            params: params || {},
            headers: defaultHeaders
        }

        return new Promise(function (resolve, reject) {
            axios(config)
                .then((result) => {
                    resolve(result);
                })
                .catch((error) => {
                    reject(error);
                })
        })
    }

    static post(token, endpoint, params, data, customHeaders) {
        var url = API_SB_BASE_URL + endpoint;

        token = this.cleanToken(token);
        var defaultHeaders = {
            "content-type": "application/json",
            "Accept": "application/json",
            "Authorization": token
        };
        defaultHeaders = { ...defaultHeaders, ...customHeaders };

        var config = {
            method: "post",
            url: url,
            params: params || {},
            data: data,
            headers: defaultHeaders
        }

        return new Promise(function (resolve, reject) {
            axios(config)
                .then((result) => {
                    resolve(result);
                })
                .catch((error) => {
                    reject(error);
                })
        })
    }

    static put(token, endpoint, params, data, customHeaders) {
        var url = API_SB_BASE_URL + endpoint;

        token = this.cleanToken(token);
        var defaultHeaders = {
            "content-type": "application/json",
            "Accept": "application/json",
            "Authorization": token
        };
        defaultHeaders = { ...defaultHeaders, ...customHeaders };

        var config = {
            method: "put",
            url: url,
            params: params || {},
            data: data,
            headers: defaultHeaders
        }

        return new Promise(function (resolve, reject) {
            axios(config)
                .then((result) => {
                    resolve(result);
                })
                .catch((error) => {
                    reject(error);
                })
        })
    }

    static delete(token, endpoint, params, customHeaders) {
        var url = API_SB_BASE_URL + endpoint;

        token = this.cleanToken(token);
        var defaultHeaders = {
            "content-type": "application/json",
            "Accept": "application/json",
            "Authorization": token
        };
        defaultHeaders = { ...defaultHeaders, ...customHeaders };

        var config = {
            method: "delete",
            url: url,
            params: params || {},
            headers: defaultHeaders
        }

        return new Promise(function (resolve, reject) {
            axios(config)
                .then((result) => {
                    resolve(result);
                })
                .catch((error) => {
                    reject(error);
                })
        })
    }

    /*************************************************************************/
    /******************************* WITHOUT TOKEN ***************************/
    /*************************************************************************/

    static get_plain(endpoint, params, customHeaders) {
        var url = API_SB_BASE_URL + endpoint;

        var defaultHeaders = {
            "content-type": "application/json",
            "Accept": "application/json"
        };
        defaultHeaders = { ...defaultHeaders, ...customHeaders };

        var config = {
            method: "get",
            url: url,
            params: params || {},
            headers: defaultHeaders
        }

        return new Promise(function (resolve, reject) {
            axios(config)
                .then((result) => {
                    resolve(result);
                })
                .catch((error) => {
                    reject(error);
                })
        })
    }

    static post_plain(endpoint, params, data, customHeaders) {
        var url = API_SB_BASE_URL + endpoint;

        var defaultHeaders = {
            "content-type": "application/json",
            "Accept": "application/json"
        };
        defaultHeaders = { ...defaultHeaders, ...customHeaders };

        var config = {
            method: "post",
            url: url,
            params: params || {},
            data: data,
            headers: defaultHeaders
        }

        return new Promise(function (resolve, reject) {
            axios(config)
                .then((result) => {
                    resolve(result);
                })
                .catch((error) => {
                    reject(error);
                })
        })
    }

    static put_plain(endpoint, params, data, customHeaders) {
        var url = API_SB_BASE_URL + endpoint;

        var defaultHeaders = {
            "content-type": "application/json",
            "Accept": "application/json"
        };
        defaultHeaders = { ...defaultHeaders, ...customHeaders };

        var config = {
            method: "put",
            url: url,
            params: params || {},
            data: data,
            headers: defaultHeaders
        }

        return new Promise(function (resolve, reject) {
            axios(config)
                .then((result) => {
                    resolve(result);
                })
                .catch((error) => {
                    reject(error);
                })
        })
    }

}