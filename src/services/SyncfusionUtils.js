import syncfusionLocalization from "./syncfusionLocalization.json";

export function getLocaleByLanguage(lang) {
    if (lang && lang === "It") {

        return "it";
    } else if (lang && lang === "En") {
        return "en-US";
    } else {
        return "en-US";
    }
}

export function setSyncfusionLocalization(L10n, loadCldr) {
    return new Promise(function (resolve, reject) {
        // loadCldr(
        //     require('cldr-data/supplemental/numberingSystems.json'),
        //     require('cldr-data/main/it/ca-gregorian.json'),
        //     require('cldr-data/main/it/numbers.json'),
        //     require('cldr-data/main/it/timeZoneNames.json'),
        //     require('cldr-data/main/it/dateFields.json')
        // );
        // L10n.load(syncfusionLocalization);
        resolve();
    })
}

export function setSyncfusionLocalizationV2() {
    loadCldr(
        require('cldr-data/supplemental/numberingSystems.json'),
        require('cldr-data/main/it/ca-gregorian.json'),
        require('cldr-data/main/it/numbers.json'),
        require('cldr-data/main/it/timeZoneNames.json'),
        require('cldr-data/main/it/dateFields.json')
    );
    L10n.load(syncfusionLocalization);
}