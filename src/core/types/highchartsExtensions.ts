// Type extensions for custom Highcharts options
export type TExtendedPoint = Highcharts.Point & {
    dataLabel: TExtendedDataLabel;
    updateNeeded?: boolean;
}

export type TExtendedDataLabel = Highcharts.DataLabelsOptions & {
    alignOptions: {
        inside: boolean;
    }
}

export type TExtendedPointOptionsType = Highcharts.PointOptionsType & {
    updateNeeded?: boolean;
}