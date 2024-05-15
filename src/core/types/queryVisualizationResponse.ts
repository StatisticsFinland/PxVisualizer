export interface IQueryVisualizationResponse {
    tableReference: ITableReference;
    data: (number | null)[];
    dataNotes: { [key: number]: TMultiLanguageString };
    missingDataInfo: { [key: number]: number };
    metaData: IVariableMeta[];
    selectableVariableCodes: string[];
    rowVariableCodes: string[];
    columnVariableCodes: string[];
    header: TMultiLanguageString;
    visualizationSettings: IVisualizationSettings;
}

export interface ITableReference {
    name: string,
    hierarchy: string[]
}

export type TVisualizationType = 
'VerticalBarChart'
| 'GroupVerticalBarChart'
| 'StackedVerticalBarChart'
| 'PercentVerticalBarChart'
| 'HorizontalBarChart'
| 'GroupHorizontalBarChart'
| 'StackedHorizontalBarChart'
| 'PercentHorizontalBarChart'
| 'PyramidChart'
| 'PieChart'
| 'LineChart'
| 'ScatterPlot'
| 'Table'


export enum EVisualizationType {
    VerticalBarChart = 'VerticalBarChart',
    GroupVerticalBarChart = 'GroupVerticalBarChart',
    StackedVerticalBarChart = 'StackedVerticalBarChart',
    PercentVerticalBarChart = 'PercentVerticalBarChart',
    HorizontalBarChart = 'HorizontalBarChart',
    GroupHorizontalBarChart = 'GroupHorizontalBarChart',
    StackedHorizontalBarChart = 'StackedHorizontalBarChart',
    PercentHorizontalBarChart = 'PercentHorizontalBarChart',
    PyramidChart = 'PyramidChart',
    PieChart = 'PieChart',
    LineChart = 'LineChart',
    ScatterPlot = 'ScatterPlot',
    Table = 'Table'
}

export type TVariableType =
// Unknown
'N'
// Time
| 'T'
// Ordinal
| 'P'
// Geological
| 'G'
// Content
| 'C'
// OtherClassificatory
| 'F'

export enum EVariableType {
    Unknown = 'N',
    Time = 'T',
    Ordinal = 'P',
    Geological = 'G',
    Content = 'C',
    OtherClassificatory = 'F'
}

export type TTimeVariableInterval =
'Week'
| 'Month'
| 'Quarter'
| 'HalfYear'
| 'Year'
| 'Decade'
| 'Irregular'

export enum ETimeVariableInterval {
    Week = 'Week',
    Month = 'Month',
    Quarter = 'Quarter',
    HalfYear = 'HalfYear',
    Year = 'Year',
    Decade = 'Decade',
    Irregular = 'Irregular'
}

export type TMultiLanguageString = { [key: string]: string };
export type TMultiLanguageStringArray = { [key: string]: string[] };

export interface IVariableMeta {
    code: string;
    name: TMultiLanguageString;
    note: TMultiLanguageString | null;
    type: EVariableType;
    values: IVariableValueMeta[];
}

export interface IContentComponent {
    unit: TMultiLanguageString;
    source: TMultiLanguageString;
    numberOfDecimals: number;
    lastUpdated: string;
}

export interface IVariableValueMeta {
    code: string;
    name: TMultiLanguageString;
    note: TMultiLanguageString | null;
    isSum: boolean;
    contentComponent: IContentComponent | null;
}

export interface IVisualizationSettings {
    visualizationType: EVisualizationType;
    defaultSelectableVariableCodes?: { [key: string]: string[] } | null;
    multiselectableVariableCode?: string
    timeVariableIntervals: ETimeVariableInterval,
    timeSeriesStartingPoint?: string,
    cutValueAxis?: boolean;
    showLastLabel?: boolean;
    sorting?: string;
    markerSize?: number;
    cutYAxis?: boolean;
    showDataPoints?: boolean;
}
