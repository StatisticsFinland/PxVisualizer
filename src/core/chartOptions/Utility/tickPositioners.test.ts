import { Axis } from "highcharts";
import { getLinearAxisTickPositionerFunction, getLinearSumAxisTickPositionerFunction, getOrdinalAxisTickPositionerFunction, getQuarterlySeriesTickPositionerFunction } from "./tickPositioners";

describe('getQuerterlySeriesTickPositionerFunction interval tests', () => {
    const mockAxis : Axis = {chart: {plotWidth: 500}} as unknown as Axis
    const FIRST_QUARTER_TIME = '2020-01-01T12:00:00Z';

    it('Should return tickpositioner with interval 1 when all labels fit the chart', () => {
        const resultFunk = getQuarterlySeriesTickPositionerFunction(5, new Date(FIRST_QUARTER_TIME));
        const resultTickPositions: number[] = resultFunk.apply(mockAxis);
        expect(resultTickPositions).toEqual([0, 1, 2, 3, 4]);
    });

    it('Should return tickpositioner with interval 2 when chart width and combined label length ratio is between 1 and 2', () => {
        const resultFunk = getQuarterlySeriesTickPositionerFunction(10, new Date(FIRST_QUARTER_TIME));
        const resultTickPositions: number[] = resultFunk.apply(mockAxis);
        expect(resultTickPositions).toEqual([0, 2, 4, 6, 8]);
    });

    it('Should return tickpositioner with 1 year interval when chart width and combined label length ratio is between 2 and 4', () => {
        const resultFunk = getQuarterlySeriesTickPositionerFunction(21, new Date(FIRST_QUARTER_TIME));
        const resultTickPositions: number[] = resultFunk.apply(mockAxis);
        expect(resultTickPositions).toEqual([0, 4, 8, 12, 16, 20]);
    });

    it('Should return tickpositioner with 2 year interval', () => {
        const resultFunk = getQuarterlySeriesTickPositionerFunction(50, new Date(FIRST_QUARTER_TIME));
        const resultTickPositions: number[] = resultFunk.apply(mockAxis);
        expect(resultTickPositions).toEqual([0, 8, 16, 24, 32, 40, 48]);
    });

    it('Should return tickpositioner with 5 year interval', () => {
        const resultFunk = getQuarterlySeriesTickPositionerFunction(150, new Date(FIRST_QUARTER_TIME));
        const resultTickPositions: number[] = resultFunk.apply(mockAxis);
        expect(resultTickPositions).toEqual([0, 20, 40, 60, 80, 100, 120, 140]);
    });

    it('Should return tickpositioner with 10 year interval', () => {
        const resultFunk = getQuarterlySeriesTickPositionerFunction(300, new Date(FIRST_QUARTER_TIME));
        const resultTickPositions: number[] = resultFunk.apply(mockAxis);
        expect(resultTickPositions).toEqual([0, 40, 80, 120, 160, 200, 240, 280]);
    });
});

describe('getQuerterlySeriesTickPositionerFunction shift tests', () => {
    const mockAxis : Axis = {chart: {plotWidth: 500}} as unknown as Axis
    
    it('Should return tickpositioner shift 0 when all labels fit the chart', () => {
        const SECOND_QUARTER_TIME = '2020-04-01T12:00:00Z';
        const resultFunk = getQuarterlySeriesTickPositionerFunction(5, new Date(SECOND_QUARTER_TIME));
        const resultTickPositions: number[] = resultFunk.apply(mockAxis);
        expect(resultTickPositions).toEqual([0, 1, 2, 3, 4]);
    });

    it('Should return tickpositioner with shift 1 when the series starts from the second quarter and interval is 2', () => {
        const SECOND_QUARTER_TIME = '2020-04-01T12:00:00Z';
        const resultFunk = getQuarterlySeriesTickPositionerFunction(10, new Date(SECOND_QUARTER_TIME));
        const resultTickPositions: number[] = resultFunk.apply(mockAxis);
        expect(resultTickPositions).toEqual([1, 3, 5, 7, 9]);
    });

    it('Should return tickpositioner with shift 1 when the series starts from the fourth quarter and interval is 2', () => {
        const SECOND_QUARTER_TIME = '2020-10-01T12:00:00Z';
        const resultFunk = getQuarterlySeriesTickPositionerFunction(10, new Date(SECOND_QUARTER_TIME));
        const resultTickPositions: number[] = resultFunk.apply(mockAxis);
        expect(resultTickPositions).toEqual([1, 3, 5, 7, 9]);
    });

    it('Should return tickpositioner with shift 2 when the series starts from the third quarter and interval is 4', () => {
        const SECOND_QUARTER_TIME = '2020-07-01T12:00:00Z';
        const resultFunk = getQuarterlySeriesTickPositionerFunction(21, new Date(SECOND_QUARTER_TIME));
        const resultTickPositions: number[] = resultFunk.apply(mockAxis);
        expect(resultTickPositions).toEqual([2, 6, 10, 14, 18]);
    });

    it('Should return tickpositioner with shift 14 when the series starts from the third quarter of year ending in 6 and interval is 20', () => {
        const SECOND_QUARTER_TIME = '2016-07-01T12:00:00Z';
        const resultFunk = getQuarterlySeriesTickPositionerFunction(150, new Date(SECOND_QUARTER_TIME));
        const resultTickPositions: number[] = resultFunk.apply(mockAxis);
        expect(resultTickPositions).toEqual([14, 34, 54, 74, 94, 114, 134]);
    });

    it('Should return tickpositioner with shift 26 when the series starts from the third quarter of year ending in 06 and interval is 40', () => {
        const SECOND_QUARTER_TIME = '2013-07-01T12:00:00Z';
        const resultFunk = getQuarterlySeriesTickPositionerFunction(250, new Date(SECOND_QUARTER_TIME));
        const resultTickPositions: number[] = resultFunk.apply(mockAxis);
        expect(resultTickPositions).toEqual([26, 66, 106, 146, 186, 226]);
    });
});

describe('getLinearAxisTickPositionerFunction interval tests', () => {

    const mockAxis200: Axis = { chart: { plotWidth: 200 } } as unknown as Axis
    const mockAxis1200: Axis = { chart: { plotWidth: 1000 } } as unknown as Axis

    it('With min value 1, max value 10, significant decimals 0 and axis length 200. Should return tickpositioner with interval of 2.', () => {
        const resultFunk = getLinearAxisTickPositionerFunction([
            [
                { value: 5, precision: 0, preliminary: false },
                { value: null, precision: 0, preliminary: false, missingCode: 1 },
                { value: 6, precision: 0, preliminary: false },
                { value: 4, precision: 0, preliminary: false },
                { value: 2, precision: 0, preliminary: false },
                { value: 9, precision: 0, preliminary: false },
                { value: 10, precision: 0, preliminary: false }
            ],
            [
                { value: 1, precision: 0, preliminary: false },
                { value: null, precision: 0, preliminary: false, missingCode: 1 },
                { value: 6, precision: 0, preliminary: false },
                { value: 4, precision: 0, preliminary: false },
                { value: 2, precision: 0, preliminary: false },
                { value: 9, precision: 0, preliminary: false },
                { value: 2, precision: 0, preliminary: false }
            ]
        ]);
        const resultTickPositions: number[] = resultFunk.apply(mockAxis200);
        expect(resultTickPositions).toEqual([0, 5, 10]);
    });

    it('With min value 1, max value 10, significant decimals 0 and axis length 1200. Should return tickpositioner with interval of 1.', () => {
        const resultFunk = getLinearAxisTickPositionerFunction([
            [
                { value: 5, precision: 0, preliminary: false },
                { value: null, precision: 0, preliminary: false, missingCode: 1 },
                { value: 6, precision: 0, preliminary: false },
                { value: 4, precision: 0, preliminary: false },
                { value: 2, precision: 0, preliminary: false },
                { value: 9, precision: 0, preliminary: false },
                { value: 10, precision: 0, preliminary: false }
            ],
            [
                { value: 1, precision: 0, preliminary: false },
                { value: null, precision: 0, preliminary: false, missingCode: 1 },
                { value: 6, precision: 0, preliminary: false },
                { value: 4, precision: 0, preliminary: false },
                { value: 2, precision: 0, preliminary: false },
                { value: 9, precision: 0, preliminary: false },
                { value: 2, precision: 0, preliminary: false }
            ]
        ]);
        const resultTickPositions: number[] = resultFunk.apply(mockAxis1200);
        expect(resultTickPositions).toEqual([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
    });

    it('With no input data, significant decimals 0 and axis length 200. Should not return any interval.', () => {
        const resultFunk = getLinearAxisTickPositionerFunction([
            [
                { value: null, precision: 0, preliminary: false, missingCode: 1 },
                { value: null, precision: 0, preliminary: false, missingCode: 1 },
                { value: null, precision: 0, preliminary: false, missingCode: 1 },
                { value: null, precision: 0, preliminary: false, missingCode: 1 }
            ],
            [
                { value: null, precision: 0, preliminary: false, missingCode: 1 },
                { value: null, precision: 0, preliminary: false, missingCode: 1 },
                { value: null, precision: 0, preliminary: false, missingCode: 1 },
                { value: null, precision: 0, preliminary: false, missingCode: 1 }
            ]
        ]);
        const resultTickPositions: number[] = resultFunk.apply(mockAxis1200);
        expect(resultTickPositions).toEqual([]);
    });

    it('With min value 3, max value 3, significant decimals 0 and axis length 1200. Should return interval of 1.', () => {
        const resultFunk = getLinearAxisTickPositionerFunction([
            [
                { value: null, precision: 0, preliminary: false, missingCode: 1 },
                { value: 3, precision: 0, preliminary: false },
                { value: null, precision: 0, preliminary: false, missingCode: 1 },
                { value: null, precision: 0, preliminary: false, missingCode: 1 }
            ],
            [
                { value: null, precision: 0, preliminary: false, missingCode: 1 },
                { value: null, precision: 0, preliminary: false, missingCode: 1 },
                { value: null, precision: 0, preliminary: false, missingCode: 1 },
                { value: null, precision: 0, preliminary: false, missingCode: 1 }
            ]
        ]);
        const resultTickPositions: number[] = resultFunk.apply(mockAxis1200);
        expect(resultTickPositions).toEqual([0, 1, 2, 3]);
    });

    it('With min value 0.4, max value 10.0, significant decimals 1 and axis length 1200. Should return tickpositioner with interval of 0.5.', () => {
        const resultFunk = getLinearAxisTickPositionerFunction([
            [
                { value: 0.5, precision: 1, preliminary: false },
                { value: null, precision: 1, preliminary: false, missingCode: 1 },
                { value: 0.6, precision: 1, preliminary: false },
                { value: 0.4, precision: 1, preliminary: false },
                { value: 2.2, precision: 1, preliminary: false },
                { value: 3.9, precision: 1, preliminary: false },
                { value: 10.0, precision: 1, preliminary: false },
            ]
        ]);
        const resultTickPositions: number[] = resultFunk.apply(mockAxis1200);
        expect(resultTickPositions).toEqual([0.0, 0.5, 1.0, 1.5, 2.0, 2.5, 3.0, 3.5, 4, 4.5, 5.0, 5.5, 6.0, 6.5, 7.0, 7.5, 8.0, 8.5, 9.0, 9.5, 10.0]);
    });
});

describe('getLinearSumAxisTickPositionerFunction interval tests', () => {

    const mockAxis200: Axis = { chart: { plotWidth: 200 } } as unknown as Axis
    const mockAxis1200: Axis = { chart: { plotWidth: 1000 } } as unknown as Axis

    it('With min value 1, max value 10, significant decimals 0 and axis length 200. Should return tickpositioner with interval of 10.', () => {
        const resultFunk = getLinearSumAxisTickPositionerFunction([
            [
                { value: 5, precision: 0, preliminary: false },
                { value: null, precision: 0, preliminary: false, missingCode: 1 },
                { value: 6, precision: 0, preliminary: false },
                { value: 4, precision: 0, preliminary: false },
                { value: 2, precision: 0, preliminary: false },
                { value: 9, precision: 0, preliminary: false },
                { value: 10, precision: 0, preliminary: false }
            ],
            [
                { value: 1, precision: 0, preliminary: false },
                { value: null, precision: 0, preliminary: false, missingCode: 1 },
                { value: 6, precision: 0, preliminary: false },
                { value: 4, precision: 0, preliminary: false },
                { value: 2, precision: 0, preliminary: false },
                { value: 9, precision: 0, preliminary: false },
                { value: 2, precision: 0, preliminary: false },
            ]
        ]);
        const resultTickPositions: number[] = resultFunk.apply(mockAxis200);
        expect(resultTickPositions).toEqual([0, 10, 20]);
    });

    it('With min value 1, max value 10, significant decimals 0 and axis length 1200. Should return tickpositioner with interval of 1.', () => {
        const resultFunk = getLinearSumAxisTickPositionerFunction([
            [
                { value: 5, precision: 0, preliminary: false },
                { value: null, precision: 0, preliminary: false, missingCode: 1 },
                { value: 6, precision: 0, preliminary: false },
                { value: 4, precision: 0, preliminary: false },
                { value: 2, precision: 0, preliminary: false },
                { value: 9, precision: 0, preliminary: false },
                { value: 10, precision: 0, preliminary: false },
            ],
            [
                { value: 1, precision: 0, preliminary: false },
                { value: null, precision: 0, preliminary: false, missingCode: 1 },
                { value: 6, precision: 0, preliminary: false },
                { value: 4, precision: 0, preliminary: false },
                { value: 2, precision: 0, preliminary: false },
                { value: 9, precision: 0, preliminary: false },
                { value: 2, precision: 0, preliminary: false },
            ]
        ]);
        const resultTickPositions: number[] = resultFunk.apply(mockAxis1200);
        expect(resultTickPositions).toEqual([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18]);
    });

    it('With no input data, significant decimals 0 and axis length 200. Should not return any interval.', () => {
        const resultFunk = getLinearSumAxisTickPositionerFunction([
            [
                { value: null, precision: 0, preliminary: false, missingCode: 1 },
                { value: null, precision: 0, preliminary: false, missingCode: 1 },
                { value: null, precision: 0, preliminary: false, missingCode: 1 },
                { value: null, precision: 0, preliminary: false, missingCode: 1 }
            ],
            [
                { value: null, precision: 0, preliminary: false, missingCode: 1 },
                { value: null, precision: 0, preliminary: false, missingCode: 1 },
                { value: null, precision: 0, preliminary: false, missingCode: 1 },
                { value: null, precision: 0, preliminary: false, missingCode: 1 }
            ]
        ]);
        const resultTickPositions: number[] = resultFunk.apply(mockAxis1200);
        expect(resultTickPositions).toEqual([]);
    });

    it('With min value 3, max value 3, significant decimals 0 and axis length 1200. Should return interval of 1.', () => {
        const resultFunk = getLinearSumAxisTickPositionerFunction([
            [
                { value: null, precision: 0, preliminary: false, missingCode: 1 },
                { value: 3, precision: 0, preliminary: false },
                { value: null, precision: 0, preliminary: false, missingCode: 1 },
                { value: null, precision: 0, preliminary: false, missingCode: 1 }
            ],
            [
                { value: null, precision: 0, preliminary: false, missingCode: 1 },
                { value: null, precision: 0, preliminary: false, missingCode: 1 },
                { value: null, precision: 0, preliminary: false, missingCode: 1 },
                { value: null, precision: 0, preliminary: false, missingCode: 1 }
            ]
        ]);
        const resultTickPositions: number[] = resultFunk.apply(mockAxis1200);
        expect(resultTickPositions).toEqual([0, 1, 2, 3]);
    });

    it('With min value 0.4, max value 10.0, significant decimals 1 and axis length 1200. Should return tickpositioner with interval of 0.5.', () => {
        const resultFunk = getLinearSumAxisTickPositionerFunction([
            [
                { value: 0.5, precision: 1, preliminary: false },
                { value: null, precision: 1, preliminary: false, missingCode: 1 },
                { value: 0.6, precision: 1, preliminary: false },
                { value: 0.4, precision: 1, preliminary: false },
                { value: 2.2, precision: 1, preliminary: false },
                { value: 3.9, precision: 1, preliminary: false },
                { value: 10.0, precision: 1, preliminary: false },
            ]
        ]);
        const resultTickPositions: number[] = resultFunk.apply(mockAxis1200);
        expect(resultTickPositions).toEqual([0.0, 0.5, 1.0, 1.5, 2.0, 2.5, 3.0, 3.5, 4, 4.5, 5.0, 5.5, 6.0, 6.5, 7.0, 7.5, 8.0, 8.5, 9.0, 9.5, 10.0]);
    });

    describe('getOrdinalAxisTickPositionerFunction interval tests', () => {
        const mockAxis: Axis = { chart: { plotWidth: 500 } } as unknown as Axis

        it('Should return tickpositioner with interval 1 when all labels fit the chart', () => {
            const resultFunk = getOrdinalAxisTickPositionerFunction(5, 2);
            const resultTickPositions: number[] = resultFunk.apply(mockAxis);
            expect(resultTickPositions).toEqual([0, 1, 2, 3, 4]);
        });

        it('Should return tickpositioner with interval 2 when there are between 1 and 2 times the amount of labels that can fit the chart', () => {
            const resultFunk = getOrdinalAxisTickPositionerFunction(10, 10);
            const resultTickPositions: number[] = resultFunk.apply(mockAxis);
            expect(resultTickPositions).toEqual([0, 2, 4, 6, 8]);
        });

        it('Should return tickpositioner with interval 3 when there are between 2 and 3 times the amount of labels that can fit the chart', () => {
            const resultFunk = getOrdinalAxisTickPositionerFunction(10, 15);
            const resultTickPositions: number[] = resultFunk.apply(mockAxis);
            expect(resultTickPositions).toEqual([0, 3, 6, 9]);
        });
    });
});