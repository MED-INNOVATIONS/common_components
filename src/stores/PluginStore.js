export default class PluginStore {
    /*************************************************************************/
    /************************** AVAILABLE PLUGIN *****************************/
    /*************************************************************************/
    static availablePlugin = null;

    static setAvailablePlugin(availablePlugin) {
        this.availablePlugin = availablePlugin;
    }

    static getAvailablePlugin() {
        return this.availablePlugin;
    }

    /*************************************************************************/
    /************************** ACTIVED PLUGIN *******************************/
    /*************************************************************************/
    static pluginActivation = null;

    static setPluginActivation(pluginActivation) {
        this.pluginActivation = pluginActivation;
    }

    static getPluginActivation() {
        return this.pluginActivation;
    }


    /*************************************************************************/
    /************************** PLUGIN CONFIGURATION *************************/
    /*************************************************************************/
    static pluginConfiguration = null;

    static setPluginConfiguration(pluginConfiguration) {
        this.pluginConfiguration = pluginConfiguration;
    }

    static getPluginConfiguration() {
        return this.pluginConfiguration;
    }
}