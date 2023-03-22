// import { SessionStorageStore, AuthStore } from "orbital_common_components";
import LocalizedStrings from "react-localization";

import SessionStorageStore from "../../stores/SessionStorageStore";
import AuthStore from "../../stores/AuthStore";

const en = require("./languages/en.json")
const it = require("./languages/it.json")
const lang = SessionStorageStore.getCurrentLang() || AuthStore.getDefautlLang() || "En";

class SingletonStrings {
  constructor() {
    this.instance = new LocalizedStrings({
      En: en,
      It: it
    });
    return this.instance;
  }
}

var ex = new SingletonStrings();
ex.setLanguage(lang)

export default ex;