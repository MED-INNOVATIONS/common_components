import { L10n, loadCldr, setCulture } from '@syncfusion/ej2-base';
import langJson from "./language.json";

function getLocaleByLanguage(lang) {
    if (lang && lang === "It") {
        L10n.load(langJson);
        setCulture("it")
        return "it";
    } else if (lang && lang === "En") {
        L10n.load(langJson);
        setCulture("en")
        return "en-US";
    } else {
        L10n.load(langJson);
    }
}

loadCldr(
    require('cldr-data/supplemental/numberingSystems.json'),
    require('cldr-data/main/it/ca-gregorian.json'),
    require('cldr-data/main/it/numbers.json'),
    require('cldr-data/main/it/timeZoneNames.json'),
    require('cldr-data/main/it/dateFields.json')
);

export { L10n, loadCldr, getLocaleByLanguage };