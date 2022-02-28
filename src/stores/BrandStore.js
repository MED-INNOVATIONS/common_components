const EventEmitter = require('events');
export default class BrandStore {
    static eventEmitter = new EventEmitter();

    static emit(channel, data) {
        this.eventEmitter.emit(channel, data);
    }

    static on(channel, callback) {
        return this.eventEmitter.on(channel, callback);
    }

    static removeListener(channel, callback) {
        return this.eventEmitter.removeListener(channel, callback);
    }

    /*************************************************************************/
    /**************************** BRAND **************************************/
    /*************************************************************************/
    static brand = null;

    static setBrand(brand) {
        this.brand = brand || {};
    }

    static getBrand() {
        return this.brand;
    }

    /*************************************************************************/
    /************************** BRAND CONFIG *********************************/
    /*************************************************************************/
    static brandConfiguration = null;

    static setBrandConfiguration(brandConfiguration) {
        this.brandConfiguration = brandConfiguration || {};
    }

    static getBrandConfiguration() {
        return this.brandConfiguration;
    }

    /*************************************************************************/
    /************************** GET METHODS **********************************/
    /*************************************************************************/
    static getBrandId() {
        var brandId = this.brand.id;
        return brandId;
    }

    static getPreferedLanguages() {
        var preferedLang = this.brandConfiguration.preferedLang;
        return preferedLang;
    }

    static getDefaultLang() {
        var defaultLang = this.brandConfiguration.defaultLang;
        return defaultLang;
    }

    static getCurrency() {
        var currency = this.brandConfiguration.currency;
        return currency;
    }

    static getCustomerIsolation() {
        var customerIsolation = this.brandConfiguration.customerIsolation;
        return customerIsolation;
    }

    static getPermissionGroups() {
        var pluginPermissionGroups = this.brandConfiguration != null ? this.brandConfiguration.pluginPermissionGroups : null;
        return pluginPermissionGroups;
    }

    static setPermissionGroups(pluginPermissionGroups) {
        var brandConfiguration = this.brandConfiguration ? this.brandConfiguration : {};
        brandConfiguration.pluginPermissionGroups = pluginPermissionGroups;
        this.brandConfiguration = brandConfiguration;
    }

}