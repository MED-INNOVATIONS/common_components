import axios from "axios";

export default class APISb {
    static cleanToken(token) {
        token = `Bearer ${token}`;
        token = token.replaceAll('"', "");
        return token;
    }

    static get(token, baseUrl, endpoint, params, customHeaders) {
        var url = baseUrl + endpoint;

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

    static post(token, baseUrl, endpoint, params, data, customHeaders) {
        var url = baseUrl + endpoint;

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

    static put(token, baseUrl, endpoint, params, data, customHeaders) {
        var url = baseUrl + endpoint;

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

    static delete(token, baseUrl, endpoint, params, customHeaders) {
        var url = baseUrl + endpoint;

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

    static get_plain(baseUrl, endpoint, params, customHeaders) {
        var url = baseUrl + endpoint;

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

    static post_plain(baseUrl, endpoint, params, data, customHeaders) {
        var url = baseUrl + endpoint;

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

    static put_plain(baseUrl, endpoint, params, data, customHeaders) {
        var url = baseUrl + endpoint;

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