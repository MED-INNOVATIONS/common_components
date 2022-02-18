export default class OrbitalStore {
    /*************************************************************************/
    /************************** ORBITAL CONFIG *******************************/
    /*************************************************************************/
    static orbitalConfig = null;

    static setOrbitalConfig(orbitalConfig) {
        this.orbitalConfig = orbitalConfig || {};
    }

    static getOrbitalConfig() {
        return this.orbitalConfig;
    }
}