export default class OrbitalStore {
    /*************************************************************************/
    /************************** ORBITAL CONFIG *******************************/
    /*************************************************************************/
    static orbitalConfig = {};

    static setOrbitalConfig(orbitalConfig) {
        this.orbitalConfig = orbitalConfig || {};
    }

    static getOrbitalConfig() {
        return this.orbitalConfig;
    }

    static getDefaultImage() {
        var image = this.orbitalConfig && this.orbitalConfig.image ? this.orbitalConfig.image : null;
        return image;
    }

    static getDefaultLang(){
        var defaultLang = this.orbitalConfig && this.orbitalConfig.defaultLang ? this.orbitalConfig.defaultLang : null;
        return defaultLang;
    }
}