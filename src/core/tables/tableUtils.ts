import Translations from "../conversion/translations";
import { IDataCell } from "../types/view";

const indexedDotCodes = [
    '',
    '.',
    '..',
    '...',
    '....',
    '.....',
    '......',
    '-'
];

export function formatNumericValue(dataCell: IDataCell, locale: string, addThousandSeparator: boolean = false) {
    if (dataCell.value === null || dataCell.value === undefined) throw new Error('Can not produce a localized numeric formatting for missing data');

    // Use locale to format the number with the number of decimals specified in the data cell and an optional thousand separator
    return new Intl.NumberFormat(
        locale, {
            maximumFractionDigits: dataCell.precision,
            minimumFractionDigits: dataCell.precision,
            useGrouping: addThousandSeparator
    }).format(dataCell.value);
}

export function formatMissingData(missingCode: number | undefined, locale:string, htmlTable: boolean = false) {
    if (!missingCode) throw new Error('Invalid missing code. Can not generate table presentation'); // OBS: If we end up here with 0 (the should be data), it must be handled as error
    else if (htmlTable) return Translations.dataMissing[locale];
    else return indexedDotCodes[missingCode];
}