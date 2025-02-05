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
            [{ 'fi': '1', 'en': '1', 'sv': '1' }],
            [{ 'fi': '2', 'en': '2', 'sv': '2' }]
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
                "1",
                "2",
            ]);
        expect(result.type).toEqual('category');
        expect(result.ordinal).toEqual(true);
    });
});