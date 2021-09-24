import axios from "axios";

var API_SB_BASE_URL = "https://sbapi.orbital.cloud";

export default class APISb {
    static API_SB_BASE_URL = API_SB_BASE_URL;

    static get(token, endpoint, params, contentType) {
        var url = API_SB_BASE_URL + endpoint;
        contentType = contentType || "application/json"

        const configHeaders = {
            "content-type": contentType,
            "Accept": "application/json",
            "Authorization": `Bearer ${token}`
        };

        var config = {
            method: "get",
            url: url,
            params: params || {},
            headers: configHeaders
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

    static post(token, endpoint, params, data, contentType) {
        var url = API_SB_BASE_URL + endpoint;
        contentType = contentType || "application/json"

        const configHeaders = {
            "content-type": contentType,
            "Accept": "application/json",
            "Authorization": `Bearer ${token}`
        };

        var config = {
            method: "post",
            url: url,
            params: params || {},
            data: data,
            headers: configHeaders
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

    static put(token, endpoint, params, data, contentType) {
        var url = API_SB_BASE_URL + endpoint;
        contentType = contentType || "application/json"

        const configHeaders = {
            "content-type": contentType,
            "Accept": "application/json",
            "Authorization": `Bearer ${token}`
        };

        var config = {
            method: "put",
            url: url,
            params: params || {},
            data: data,
            headers: configHeaders
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

    static get_plain(endpoint, params, contentType) {
        var url = API_SB_BASE_URL + endpoint;
        contentType = contentType || "application/json"

        const configHeaders = {
            "content-type": contentType,
            "Accept": "application/json"
        };

        var config = {
            method: "get",
            url: url,
            params: params || {},
            headers: configHeaders
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

    static post_plain(endpoint, params, data, contentType) {
        var url = API_SB_BASE_URL + endpoint;
        contentType = contentType || "application/json"

        const configHeaders = {
            "content-type": contentType,
            "Accept": "application/json"
        };

        var config = {
            method: "post",
            url: url,
            params: params || {},
            data: data,
            headers: configHeaders
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

    static put_plain(endpoint, params, data, contentType) {
        var url = API_SB_BASE_URL + endpoint;
        contentType = contentType || "application/json"

        const configHeaders = {
            "content-type": contentType,
            "Accept": "application/json"
        };

        var config = {
            method: "put",
            url: url,
            params: params || {},
            data: data,
            headers: configHeaders
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