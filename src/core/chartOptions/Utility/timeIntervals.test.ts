import { ETimeVariableInterval } from "../../types";
import { EVisualizationType } from "../../types/queryVisualizationResponse";
import { ESeriesType, View } from "../../types/view";
import { getTimeSeriesOptions, getXAxisOptions } from "./timeIntervals";

const TIME = '2020-01-01T12:00:00Z';

describe('getTimeSeriesOptions tests', () => {
    it('Should return undefined when interval is irregular', () => {
        const result = getTimeSeriesOptions(ETimeVariableInterval.Irregular, TIME);
        expect(result).toBeFalsy();
    });
    it('Should return undefined', () => {
        const result = getTimeSeriesOptions(ETimeVariableInterval.Week, TIME);
        expect(result).toEqual(undefined);
    });
    it('Should return correct options when interval is month', () => {
        const result = getTimeSeriesOptions(ETimeVariableInterval.Month, TIME);
        expect(result).toEqual({
            pointIntervalUnit: 'month',
            pointStart: 1577880000000
        });
    });
    it('Should return undefined', () => {
        const result = getTimeSeriesOptions(ETimeVariableInterval.Quarter, TIME);
        expect(result).toEqual(undefined);
    });
    it('Should return undefined', () => {
        const result = getTimeSeriesOptions(ETimeVariableInterval.HalfYear, TIME);
        expect(result).toEqual(undefined);
    });
    it('Should return correct options when interval is year', () => {
        const result = getTimeSeriesOptions(ETimeVariableInterval.Year, TIME);
        expect(result).toEqual({
            pointIntervalUnit: 'year',
            pointStart: 1577880000000
        });
    });
});

describe('getXAxisOptions tests', () => {
    const mockView: View = {
        header: {},
        subheaderValues: [],
        units: [],
        sources: [],
        columnNameGroups: [
            [{ 'fi': 'test_1_fi', 'en': 'test_1_en', 'sv': 'test_1_sv' }],
            [{ 'fi': 'test_2_fi', 'en': 'test_2_en', 'sv': 'test_2_sv' }]
        ],
        series: [],
        colVarNames: [],
        rowVarNames: [],
        selectableVarNames: [],
        visualizationSettings: {
            visualizationType: EVisualizationType.LineChart,
            timeVariableIntervals: ETimeVariableInterval.Week
        },
        seriesType: ESeriesType.Time,
        tableReferenceName: ""
    };

    it('Should return correct options when interval is irregular', () => {
        const irregularTimeView = {
            ...mockView,
            seriesType: ESeriesType.Time,
            visualizationSettings: {
                ...mockView.visualizationSettings,
                timeVariableIntervals: ETimeVariableInterval.Irregular
            }
        };

        const result = getXAxisOptions(irregularTimeView, 'fi');
        expect(result).toEqual({
            categories: [
                "test_1_fi",
                "test_2_fi",
            ],
            type: 'category'
        });
    });

    it('Should return correct options when series type is nominal', () => {
        const irregularNominalView = {
            ...mockView,
            seriesType: ESeriesType.Nominal,
            visualizationSettings: {
                ...mockView.visualizationSettings,
                timeVariableIntervals: ETimeVariableInterval.Irregular
            }
        };

        const result = getXAxisOptions(irregularNominalView, 'fi');
        expect(result).toEqual({
            categories: [
                "test_1_fi",
                "test_2_fi",
            ],
            type: 'category',
            labels: {
                autoRotation: [-45]
            }
        });
    });

    it('Should return correct options when series type is ordinal with non-numeric values', () => {
        const irregularOrdinalView = {
            ...mockView,
            seriesType: ESeriesType.Ordinal,
            visualizationSettings: {
                ...mockView.visualizationSettings,
                timeVariableIntervals: ETimeVariableInterval.Irregular
            }
        };

        const result = getXAxisOptions(irregularOrdinalView, 'fi');
        expect(result).toEqual({
            categories: [
                "test_1_fi",
                "test_2_fi",
            ],
            type: 'category',
            labels: {
                autoRotation: [-45]
            }
        });
    });

    it('Should return correct options when series type is ordinal with numeric values', () => {
        const irregularOrdinalView = {
            ...mockView,
            seriesType: ESeriesType.Ordinal,
            visualizationSettings: {
                ...mockView.visualizationSettings
            },
            columnNameGroups: [
                [{ 'fi': '1', 'en': '1', 'sv': '1' }],
                [{ 'fi': '2', 'en': '2', 'sv': '2' }]
            ]
        };

        const result = getXAxisOptions(irregularOrdinalView, 'fi');
        expect(result.ordinal).toEqual(true);
        expect(result.type).toEqual('category');
        expect(result.categories).toEqual(["1", "2"]);
    });

    it('Should return correct options when interval is week', () => {
        const weekTimeView = {
            ...mockView,
            seriesType: ESeriesType.Time,
            visualizationSettings: {
                ...mockView.visualizationSettings,
                timeVariableIntervals: ETimeVariableInterval.Week
            }
        };

        const result = getXAxisOptions(weekTimeView, 'fi');
        expect(result.type).toEqual('linear');
        expect(result.labels).toBeTruthy();
    });

    it('Should return correct options when interval is month', () => {
        const monthTimeView = {
            ...mockView,
            seriesType: ESeriesType.Time,
            visualizationSettings: {
                ...mockView.visualizationSettings,
                timeVariableIntervals: ETimeVariableInterval.Month
            }
        };

        const result = getXAxisOptions(monthTimeView, 'fi');
        expect(result.type).toEqual('datetime');
        expect(result.ordinal).toEqual(false);
        expect(result.labels).toBeTruthy();
    });

    it('Should return correct options when interval is quarter', () => {
        const quarterTimeView = {
            ...mockView,
            seriesType: ESeriesType.Time,
            visualizationSettings: {
                ...mockView.visualizationSettings,
                timeVariableIntervals: ETimeVariableInterval.Quarter
            }
        };

        const result = getXAxisOptions(quarterTimeView, 'fi');
        expect(result.type).toEqual('linear');
        expect(result.labels).toBeTruthy();
    });

    it('Should return correct options when interval is half year', () => {
        const halfYearTimeView = {
            ...mockView,
            seriesType: ESeriesType.Time,
            visualizationSettings: {
                ...mockView.visualizationSettings,
                timeVariableIntervals: ETimeVariableInterval.HalfYear
            }
        };

        const result = getXAxisOptions(halfYearTimeView, 'fi');
        expect(result.type).toEqual('linear');
        expect(result.labels).toBeTruthy();
    });

    it('Should return correct options when interval is year', () => {
        const yearTimeView = {
            ...mockView,
            seriesType: ESeriesType.Time,
            visualizationSettings: {
                ...mockView.visualizationSettings,
                timeVariableIntervals: ETimeVariableInterval.Year
            }
        };

        const result = getXAxisOptions(yearTimeView, 'fi');
        expect(result).toEqual({
            type: 'datetime'
        });
    });

    //TODO: Test with numeric and non-numeric ordinal column name groups
});