import syncfusionLocalization from "./syncfusionLocalization.json";
import { L10n, loadCldr } from '@syncfusion/ej2-base';

export function getLocaleByLanguage(lang) {
    if (lang && lang === "It") {
        return "it";
    } else if (lang && lang === "En") {
        return "en"; // Change "en-US" to "en"
    } else {
        return "en"; // Fallback to "en" for any other language or if lang is not provided
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

export function setSyncfusionLocalizationV2(locale) {
    try {
        loadCldr(
            require('cldr-data/supplemental/numberingSystems.json'),
            require('cldr-data/main/' + locale + '/ca-gregorian.json'),
            require('cldr-data/main/' + locale + '/numbers.json'),
            require('cldr-data/main/' + locale + '/timeZoneNames.json'),
            require('cldr-data/main/' + locale + '/dateFields.json')
        );
        L10n.load(syncfusionLocalization[locale]);
    } catch (error) {
        // If localization for the specified locale is not found, fall back to English
        console.error(`Localization for '${locale}' not found. Falling back to English.`);
        loadCldr(
            require('cldr-data/supplemental/numberingSystems.json'),
            require('cldr-data/main/en/ca-gregorian.json'),
            require('cldr-data/main/en/numbers.json'),
            require('cldr-data/main/en/timeZoneNames.json'),
            require('cldr-data/main/en/dateFields.json')
        );
        L10n.load(syncfusionLocalization["en"]);
    }
}