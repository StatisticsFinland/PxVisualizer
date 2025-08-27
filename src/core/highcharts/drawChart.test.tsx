import * as Highcharts from "highcharts";
import { drawChart } from "./drawChart";
import { GROUP_VERTICAL_BAR_CHART_CHART_FIXTURE } from "../../react/components/chart/testFixtures/pxGrafResponses";

jest.mock("highcharts/modules/pattern-fill.js", () => ({
    default: (H: typeof Highcharts) => { }
}), { virtual: true });
jest.mock("highcharts/modules/accessibility.js", () => ({
    default: (H: typeof Highcharts) => { }
}), { virtual: true });
jest.mock("highcharts/modules/exporting.js", () => ({
    default: (H: typeof Highcharts) => { }
}), { virtual: true });
jest.mock("highcharts/modules/offline-exporting.js", () => ({
    default: (H: typeof Highcharts) => { }
}), { virtual: true });

jest.mock("highcharts", () => ({
    chart: jest.fn().mockReturnValue({ mockedChart: true }),
    setOptions: jest.fn(),
    animObject: jest.fn(),
    defaultOptions: {},
    win: {}
}));

describe('drawChart tests', () => {
    beforeEach(() => {
        jest.clearAllMocks();
        document.body.innerHTML = '<div id="chart-container"></div>';
    });

    it('calls Highcharts.chart with correct parameters', () => {
        // Arrange
        const customOptions = { accessibilityMode: true };
        const selectedVariableCodes = { 'variableCode1': ['value1', 'value2'] };

        // Act
        const result = drawChart(
            'chart-container',
            GROUP_VERTICAL_BAR_CHART_CHART_FIXTURE,
            'fi',
            selectedVariableCodes,
            customOptions
        );
        
        // Assert
        expect(Highcharts.setOptions).toHaveBeenCalledTimes(1);
        expect(Highcharts.chart).toHaveBeenCalledTimes(1);
        expect(Highcharts.chart).toHaveBeenCalledWith('chart-container', expect.any(Object));
        expect(result).toEqual({ mockedChart: true });
    });
});