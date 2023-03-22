// import { SessionStorageStore, AuthStore } from "orbital_common_components";
import LocalizedStrings from "react-localization";

import SessionStorageStore from "../../stores/SessionStorageStore";
import AuthStore from "../../stores/AuthStore";

const lang = SessionStorageStore.getCurrentLang() || AuthStore.getDefautlLang() || "En";

const en = {
  "noData": "No data",
  "loading": "Loading"
}
const it = {
  "noData": "Nessun dato",
  "loading": "Caricamento"
}

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