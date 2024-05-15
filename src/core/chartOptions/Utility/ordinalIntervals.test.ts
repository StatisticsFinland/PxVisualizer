import { ETimeVariableInterval, EVisualizationType } from "../../types";
import { ESeriesType, View } from "../../types/view";
import { getOrdinalOptions } from "./ordinalIntervals";

describe('ordinalOptions tests', () => {
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
        seriesType: ESeriesType.Ordinal,
        tableReferenceName: ""
    };

    it('Check result type and correct labeling', () => {
        const irregularTimeView = {
            ...mockView,
            seriesType: ESeriesType.Time,
            visualizationSettings: {
                ...mockView.visualizationSettings,
                timeVariableIntervals: ETimeVariableInterval.Irregular
            }
        };

        const result = getOrdinalOptions(irregularTimeView, 'fi');
        expect(result.categories).toEqual(
            [
                "test_1_fi",
                "test_2_fi",
            ]);
        expect(result.type).toEqual('category');
        expect(result.ordinal).toEqual(true);
    });
});