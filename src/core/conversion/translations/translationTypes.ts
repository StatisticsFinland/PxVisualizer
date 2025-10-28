import { TMultiLanguageString, TMultiLanguageStringArray } from "../../types/queryVisualizationResponse";

export type TTranslations = {
    empty: TMultiLanguageString;
    preliminaryData: TMultiLanguageString;
    source: TMultiLanguageString;
    unit: TMultiLanguageString;
    graphCreationError: TMultiLanguageString;
    thousandsSep: TMultiLanguageString;
    thousandsSepAccessibility: TMultiLanguageString;
    decimalPoint: TMultiLanguageString;
    barMultiple: TMultiLanguageString;
    barSingle: TMultiLanguageString;
    columnSingle: TMultiLanguageString;
    columnMultiple: TMultiLanguageString;
    lineSingle: TMultiLanguageString;
    lineMultiple: TMultiLanguageString;
    pieSingle: TMultiLanguageString;
    pieMultiple: TMultiLanguageString;
    scatterSingle: TMultiLanguageString;
    scatterMultiple: TMultiLanguageString;
    defaultSingle: TMultiLanguageString;
    defaultMultiple: TMultiLanguageString;
    defaultChartTitle: TMultiLanguageString;
    chartMenuLabel: TMultiLanguageString;
    menuButtonLabel: TMultiLanguageString;
    credits: TMultiLanguageString;
    legendItem: TMultiLanguageString;
    legendLabel: TMultiLanguageString;
    legendLabelNoTitle: TMultiLanguageString;
    contextButtonTitle: TMultiLanguageString;
    downloadPNG: TMultiLanguageString;
    downloadSVG: TMultiLanguageString;
    downloadXLSX: TMultiLanguageString;
    downloadCSV: TMultiLanguageString;
    rangeCategories: TMultiLanguageString;
    rangeFromTo: TMultiLanguageString;
    timeRangeDays: TMultiLanguageString;
    timeRangeHours: TMultiLanguageString;
    timeRangeMinutes: TMultiLanguageString;
    timeRangeSeconds: TMultiLanguageString;
    xAxisDescriptionPlural: TMultiLanguageString;
    xAxisDescriptionSingular: TMultiLanguageString;
    yAxisDescriptionPlural: TMultiLanguageString;
    yAxisDescriptionSingular: TMultiLanguageString;
    seriesSummaryBar: TMultiLanguageString;
    seriesSummaryBarCombination: TMultiLanguageString;
    seriesSummaryColumn: TMultiLanguageString;
    seriesSummaryColumnCombination: TMultiLanguageString;
    seriesSummaryDefault: TMultiLanguageString;
    seriesSummaryDefaultCombination: TMultiLanguageString;
    seriesSummaryLine: TMultiLanguageString;
    seriesSummaryLineCombination: TMultiLanguageString;
    seriesSummaryPie: TMultiLanguageString;
    seriesSummaryPieCombination: TMultiLanguageString;
    seriesSummaryScatter: TMultiLanguageString;
    seriesSummaryScatterCombination: TMultiLanguageString;
    xAxisDescription: TMultiLanguageString;
    yAxisDescription: TMultiLanguageString;
    endOfChartMarker: TMultiLanguageString;
    loading: TMultiLanguageString;
    chartContainerLabel: TMultiLanguageString;
    toggleTableModeOnText: TMultiLanguageString;
    toggleTableModeOffText: TMultiLanguageString;
    externalLink: TMultiLanguageString;
    quarter: TMultiLanguageString;
    dataMissing: TMultiLanguageString;
    toggleAccessibilityModeOn: TMultiLanguageString;
    toggleAccessibilityModeOff: TMultiLanguageString;
    lastUpdated: TMultiLanguageString;
}

export type TArrayTranslations = {
    months: TMultiLanguageStringArray;
    shortMonths: TMultiLanguageStringArray;
    numericSymbols: TMultiLanguageStringArray;
    weekdays: TMultiLanguageStringArray;
    ordinalSuffices: TMultiLanguageStringArray;
}

export type TTranslationPackage = {
    Translations: TTranslations;
    ArrayTranslations: TArrayTranslations;
}