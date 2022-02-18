export default class BrandStore {
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

}