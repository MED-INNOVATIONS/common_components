// import { SessionStorageStore, AuthStore } from "orbital_common_components";
import LocalizedStrings from "react-localization";

import SessionStorageStore from "../stores/SessionStorageStore";
import AuthStore from "../stores/AuthStore";

const lang = SessionStorageStore.getCurrentLang() || AuthStore.getDefautlLang() || "En";

const en = {
  noData: "No data",
  loading: "Loading",
  imageDimensionsConstraintsAtLeast: "Le dimensioni dell'immagine devono essere almeno",
  imageDimensionsConstraintsAtMost: "Le dimensioni dell'immagine devono essere al massimo",
  errorAspectRatio: "Il rapporto deve essere",
  errorResizingImage: "Errore nel ridimensionamento dell'immagine",
  errorUploadingImage: "Errore nel caricamento dell'immagine",
  imageSizeMustBeAtMost: "L'immagine deve essere al massimo",
  loaded_image_to_crop: "Immagine da ritagliare caricata",
  cropped_image: "Immagine ritagliata",
  crop_message: "Ritaglia l'immagine creando o muovendo la 'finestra di ritaglio'",
  cancel: "Annulla",
  save: "Save",
  download: "Scarica",
  minCroppedWidth: "",
  maxCroppedWidth: "",
  minCroppedHeight: "",
  maxCroppedHeight: ""
}

const it = {
  noData: "Nessun dato",
  loading: "Caricamento",
  imageDimensionsConstraintsAtLeast: "Image dimensions must be at least",
  imageDimensionsConstraintsAtMost: "Image dimensions must be at most",
  errorAspectRatio: "Aspect ratio must be",
  errorResizingImage: "Error resizing image",
  errorUploadingImage: "Error uploading image",
  imageSizeMustBeAtMost: "Image size must be at most",
  loaded_image_to_crop: "Loaded image to crop",
  cropped_image: "Cropped image",
  crop_message: "Crop the image by creating or moving the 'cropping window'",
  cancel: "Cancel",
  save: "Save",
  download: "Download",
  minCroppedWidth: "",
  maxCroppedWidth: "",
  minCroppedHeight: "",
  maxCroppedHeight: ""
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