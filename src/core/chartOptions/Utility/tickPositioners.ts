import { Axis, AxisTickPositionsArray} from "highcharts";
import { buildLinearAxisTickPositioner } from "./tickPositionerUtilities";
import Decimal from 'decimal.js';
import { IDataCell } from "../../types/view";

export function getQuarterlySeriesTickPositionerFunction(seriesLength: number, timeSeriesStartingPoint: Date): (this: Axis) => AxisTickPositionsArray {
    const LABEL_WIDTH_PX = 60;
    const stepFunc = function (x: number): number {
        if (x <= 2) return Math.ceil(x);
        else if (x <= 4) return 4;
        else if (x <= 20) return 4 * Math.ceil(x / 4);
        else if (x <= 40) return 20 * Math.ceil(x / 20);
        else return 40 * Math.ceil(x / 40);
    }

    const shiftFunc = function (interval: number, startingDate: Date): number {
        const distFromPrevMatching: number = (startingDate.getFullYear() * 4 + Math.floor(startingDate.getMonth() / 3)) % interval;
        if (distFromPrevMatching > 0) return interval - distFromPrevMatching;
        else return 0;
    }

    return function () {
        const interval = stepFunc(seriesLength * LABEL_WIDTH_PX / this.chart.plotWidth);
        const shift = shiftFunc(interval, timeSeriesStartingPoint)
        const numOfLabels = Math.ceil((seriesLength - shift) / interval);
        return Array.from({ length: numOfLabels }, (_, index) => shift + index * interval)
    }
}

export function getBiannualSeriesTickPositionerFunction(seriesLength: number, timeSeriesStartingPoint: Date): (this: Axis) => AxisTickPositionsArray {
    const LABEL_WIDTH_PX = 60;
    const stepFunc = function (x: number): number {
        if (x <= 2) return Math.ceil(x);
        else if (x <= 10) return 2 * Math.ceil(x / 2);
        else if (x <= 20) return 10 * Math.ceil(x / 10);
        else return 20 * Math.ceil(x / 20);
    }

    const shiftFunc = function (interval: number, startingDate: Date): number {
        const distFromPrevMatching: number = (startingDate.getFullYear() * 2 + Math.floor(startingDate.getMonth() / 6)) % interval;
        if (distFromPrevMatching > 0) return interval - distFromPrevMatching;
        else return 0;
    }

    return function () {
        const interval = stepFunc(seriesLength * LABEL_WIDTH_PX / this.chart.plotWidth);
        const shift = shiftFunc(interval, timeSeriesStartingPoint)
        const numOfLabels = Math.ceil((seriesLength - shift) / interval);
        return Array.from({ length: numOfLabels }, (_, index) => shift + index * interval)
    }
}

export function getLinearAxisTickPositionerFunction(series: IDataCell[][]): (this: Axis) => AxisTickPositionsArray {

    let min: number | null = null;
    let max: number | null = null;
    let mostPrecise: number = 0;

    series.forEach((innerSeries) => {
        innerSeries.forEach((cell) => {
            if (cell.value && (!min || cell.value < min)) min = cell.value;
            if (cell.value && (!max || cell.value > max)) max = cell.value;
            if (cell.precision > mostPrecise) mostPrecise = cell.precision;
        })
    });

    // If all values are null
    if (!min || !max) return () => [];
    return buildLinearAxisTickPositioner(new Decimal(min), new Decimal(max), new Decimal(Math.pow(10, -mostPrecise)));
}

export function getLinearSumAxisTickPositionerFunction(series: IDataCell[][]): (this: Axis) => AxisTickPositionsArray {

    let min: number | null = null;
    let max: number | null = null;
    let mostPrecise: number = 0;

    series[0].forEach((cell, index) => {
        const sum = series.reduce((acc, curr) => acc + (curr[index].value ?? 0), 0);
        if (sum && (!min || sum < min)) min = sum;
        if (sum && (!max || sum > max)) max = sum;
        if (cell.precision > mostPrecise) mostPrecise = cell.precision;
    });

    // If all values are null
    if (!min || !max) return () => [];
    return buildLinearAxisTickPositioner(new Decimal(min), new Decimal(max), new Decimal(Math.pow(10, -mostPrecise)));
}

export function getOrdinalAxisTickPositionerFunction(seriesLength: number, maxLabelLen: number): (this: Axis) => AxisTickPositionsArray {
    const CHAR_WIDTH_PX = 10;

    return function () {
        const interval = Math.ceil(seriesLength * maxLabelLen * CHAR_WIDTH_PX / this.chart.plotWidth);
        const numOfLabels = Math.ceil(seriesLength / interval);
        return Array.from({ length: numOfLabels }, (_, index) => index * interval)
    }
}