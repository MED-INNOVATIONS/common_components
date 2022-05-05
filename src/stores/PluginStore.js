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

    static getPluginConfiguration() {
        var pluginConfiguration = this.pluginActivation && this.pluginActivation.config ? this.pluginActivation.config : null;
        return pluginConfiguration;
    }
}