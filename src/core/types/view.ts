import { IVisualizationSettings, TMultiLanguageString } from "./queryVisualizationResponse"

export enum ESeriesType {
    Time,
    Ordinal,
    Nominal
}

export interface IUnitInfo {
    name: TMultiLanguageString;
    unit: TMultiLanguageString;
}

export interface View {
    tableReferenceName: string,
    header: TMultiLanguageString,
    subheaderValues: TMultiLanguageString[],
    units: IUnitInfo[],
    sources: TMultiLanguageString[],
    lastUpdated?: string,
    columnNameGroups: TMultiLanguageString[][],
    series: IDataSeries[],
    colVarNames: TMultiLanguageString[],
    rowVarNames: TMultiLanguageString[],
    selectableVarNames: TMultiLanguageString[],
    visualizationSettings: IVisualizationSettings,
    seriesType: ESeriesType
}

export interface IDataCell {
    value: number | null;
    missingCode?: number;
    precision: number;
    preliminary: boolean;
}

export interface IDataSeries {
    rowNameGroup: TMultiLanguageString[],
    series: IDataCell[]
}

export type TValueSelectionAmounts = { [key: string]: number };