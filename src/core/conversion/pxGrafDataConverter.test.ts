import { convertPxGraphDataToChartOptions } from "./pxGrafDataConverter";
import { GROUP_HORIZONTAL_BAR_CHART_WITH_SELECTABLES } from "./TestFixtures/groupHorizontalBarChart";
import { GROUP_VERTICAL_BAR_CHART_WITH_SELECTABLES_PIVOTED } from "./TestFixtures/groupVerticalBarChart";
import { STACKED_HORIZONTAL_BAR_CHART_WITH_SELECTABLES } from "./TestFixtures/stackedHorizontalBarChart";
import { STACKED_VERTICAL_BAR_CHART_WITH_SELECTABLES } from "./TestFixtures/stackedVerticalBarChart";
import { HORIZONTAL_BAR_CHART_WITH_SELECTABLES } from "./TestFixtures/horizontalBarChart";
import { PIE_CHART_ASCENDING } from "./TestFixtures/PieChart";
import { VERTICAL_BAR_CHART_WITH_SELECTABLES } from "./TestFixtures/verticalBarChart";
import { PERCENT_VERTICAL_BAR_CHART_WITH_SELECTABLES } from "./TestFixtures/percentVerticalBarChart";
import { PYRAMID_CHART_WITH_SELECTABLES } from "./TestFixtures/pyramidChart";
import { SCATTER_PLOT_WITH_SELECTABLES } from "./TestFixtures/scatterPlot";
import { LINE_CHART_WITH_QUARTER_SERIES } from "./TestFixtures/lineChart";
import { extractSelectableVariableValues } from "./helpers";
import { convertPxGrafResponseToView } from "./viewUtils";
import { EMPTY_VISUALIZATION_RESPONSE } from "./TestFixtures/viewUtils";
import { IQueryVisualizationResponse } from "../types";
import { EVariableType, IVariableMeta, IVariableValueMeta } from "../types/queryVisualizationResponse";
import { IUnitInfo } from "../types/view";
import { PERCENT_HORIZONTAL_BAR_CHART_WITH_SELECTABLES } from "./TestFixtures/percentHorizontalBarChart";
import { PointOptionsObject, SeriesBarOptions, SeriesColumnOptions, SeriesPieOptions } from "highcharts";

describe('PxGrafDataConverter tests, convertPxGrafResponseToView', () => {
    const unit1 = { 'fi': 'foo' };
    const unit2 = { 'fi': 'foo' };
    const unit3 = { 'fi': 'bar' };

    // content var value 1, unit 1 = unit 2
    const contentVarValue1Meta: IVariableValueMeta = {
        code: 'contentVar1Code',
        name: { 'fi': 'contentVarValue1Name' },
        note: null,
        isSum: false,
        contentComponent: {
            unit: unit1,
            source: { 'fi': 'some source' },
            numberOfDecimals: 0,
            lastUpdated: ''
        }
    };

    // content var value 2, unit 2 = unit 1
    const contentVarValue2Meta: IVariableValueMeta = {
        code: 'contentVar2Code',
        name: { 'fi': 'contentVarValue2Name' },
        note: null,
        isSum: false,
        contentComponent: {
            unit: unit2,
            source: { 'fi': 'some source' },
            numberOfDecimals: 0,
            lastUpdated: ''
        }
    };

    // content var value 3, unit 3
    const contentVarValue3Meta: IVariableValueMeta = {
        code: 'contentVar3Code',
        name: { 'fi': 'contentVarValue3Name' },
        note: null,
        isSum: false,
        contentComponent: {
            unit: unit3,
            source: { 'fi': 'some source' },
            numberOfDecimals: 0,
            lastUpdated: ''
        }
    };

    const contentVarMeta: IVariableMeta = {
        code: 'contentVarCode',
        name: { 'fi': 'contentVarName' },
        note: null,
        type: EVariableType.Content,
        values: []
    };

    describe('column variables', () => {
        it('should keep multi valued content variables in column vars', () => {
            const response: IQueryVisualizationResponse = {
                ...EMPTY_VISUALIZATION_RESPONSE,
                columnVariableCodes: [contentVarMeta.code],
                metaData: [{
                    ...contentVarMeta,
                    values: [contentVarValue1Meta, contentVarValue3Meta]
                }]
            };
            const { colVarNames, columnNameGroups } = convertPxGrafResponseToView(response, {});
            expect(colVarNames).toEqual([contentVarMeta.name]);
            expect(columnNameGroups).toEqual([[contentVarValue1Meta.name], [contentVarValue3Meta.name]]);
        });

        it('should remove single valued content variables from column vars', () => {
            const response: IQueryVisualizationResponse = {
                ...EMPTY_VISUALIZATION_RESPONSE,
                columnVariableCodes: [contentVarMeta.code],
                metaData: [{
                    ...contentVarMeta,
                    values: [contentVarValue1Meta]
                }]
            };
            const { colVarNames, columnNameGroups } = convertPxGrafResponseToView(response, {});
            expect(colVarNames).toEqual([contentVarMeta.name]);
            expect(columnNameGroups).toEqual([[]]);
        });
    });

    describe('row variables', () => {
        it('should keep multi valued content variables in row vars', () => {
            const response: IQueryVisualizationResponse = {
                ...EMPTY_VISUALIZATION_RESPONSE,
                rowVariableCodes: [contentVarMeta.code],
                metaData: [{
                    ...contentVarMeta,
                    values: [contentVarValue1Meta, contentVarValue3Meta]
                }]
            };
            const { rowVarNames, series } = convertPxGrafResponseToView(response, {});
            const rowNameGroups = series.map(serie => serie.rowNameGroup);
            expect(rowVarNames).toEqual([contentVarMeta.name]);
            expect(rowNameGroups).toEqual([[contentVarValue1Meta.name], [contentVarValue3Meta.name]]);
        });

        it('should remove single valued content variables from row vars', () => {
            const response: IQueryVisualizationResponse = {
                ...EMPTY_VISUALIZATION_RESPONSE,
                rowVariableCodes: [contentVarMeta.code],
                metaData: [{
                    ...contentVarMeta,
                    values: [contentVarValue1Meta]
                }]
            };
            const { rowVarNames, series } = convertPxGrafResponseToView(response, {});
            const rowNameGroups = series.map(serie => serie.rowNameGroup);
            expect(rowVarNames).toEqual([contentVarMeta.name]);
            expect(rowNameGroups).toEqual([[]]);
        });
    });

    describe('units', () => {
        it('returns content variable value names combined with content variable value units', () => {
            const response: IQueryVisualizationResponse = {
                ...EMPTY_VISUALIZATION_RESPONSE,
                metaData: [{
                    ...contentVarMeta,
                    values: [contentVarValue1Meta, contentVarValue3Meta]
                }],
                selectableVariableCodes: []
            };
            const { units } = convertPxGrafResponseToView(response, {});
            const expectedUnits: IUnitInfo[] = [{
                name: contentVarValue1Meta.name,
                unit: contentVarValue1Meta.contentComponent!.unit
            }, {
                name: contentVarValue3Meta.name,
                unit: contentVarValue3Meta.contentComponent!.unit
            }];

            expect(units).toEqual(expectedUnits);
        });

        it('returns correct unitinfo when only one content variable value', () => {
            const response: IQueryVisualizationResponse = {
                ...EMPTY_VISUALIZATION_RESPONSE,
                metaData: [{
                    ...contentVarMeta,
                    values: [contentVarValue1Meta]
                }]
            };
            const { units } = convertPxGrafResponseToView(response, {});
            const expectedUnits: IUnitInfo[] = [{
                name: contentVarValue1Meta.name,
                unit: contentVarValue1Meta.contentComponent!.unit
            }];

            expect(units).toEqual(expectedUnits);
        });

        it('returns only unit when all content variable values have the same unit', () => {
            const response: IQueryVisualizationResponse = {
                ...EMPTY_VISUALIZATION_RESPONSE,
                metaData: [{
                    ...contentVarMeta,
                    values: [contentVarValue1Meta, contentVarValue2Meta]
                }],
                selectableVariableCodes: []
            };
            const { units } = convertPxGrafResponseToView(response, {});
            const expectedUnits: IUnitInfo[] = [
                {
                    name: contentVarValue1Meta.name,
                    unit: contentVarValue1Meta.contentComponent!.unit
                },
                {
                    name: contentVarValue2Meta.name,
                    unit: contentVarValue2Meta.contentComponent!.unit
                },
            ];

            expect(units).toEqual(expectedUnits);
        });
    });
});

describe('PxGrafDataConverter tests, VerticalBarChart', () => {
    it('should return correct options object', () => {
        const mockVarSelections = extractSelectableVariableValues(VERTICAL_BAR_CHART_WITH_SELECTABLES.pxGraphData.selectableVariableCodes, VERTICAL_BAR_CHART_WITH_SELECTABLES.pxGraphData.metaData, VERTICAL_BAR_CHART_WITH_SELECTABLES.pxGraphData.visualizationSettings.defaultSelectableVariableCodes, VERTICAL_BAR_CHART_WITH_SELECTABLES.selectedVariableCodes);
        const mockView = convertPxGrafResponseToView(VERTICAL_BAR_CHART_WITH_SELECTABLES.pxGraphData, mockVarSelections);
        const result = convertPxGraphDataToChartOptions('fi', mockView);
        expect(result.chart?.type).toBe('column');
        expect(result.title?.text).toBe('Lukumäärä 2015Q1 muuttujina Alue, Huoneluku, Rahoitusmuoto');
        expect(result.credits?.text).toBe('Lähde: PxVisualizer-fi');
        expect(result.subtitle?.text).toBe('2015Q1 | Pääkaupunkiseutu (PKS) | Vapaarahoitteinen');
    });

    it('should return correct options object on different localisation', () => {
        const mockVarSelections = extractSelectableVariableValues(VERTICAL_BAR_CHART_WITH_SELECTABLES.pxGraphData.selectableVariableCodes, VERTICAL_BAR_CHART_WITH_SELECTABLES.pxGraphData.metaData, VERTICAL_BAR_CHART_WITH_SELECTABLES.pxGraphData.visualizationSettings.defaultSelectableVariableCodes, VERTICAL_BAR_CHART_WITH_SELECTABLES.selectedVariableCodes);
        const mockView = convertPxGrafResponseToView(VERTICAL_BAR_CHART_WITH_SELECTABLES.pxGraphData, mockVarSelections);
        const result = convertPxGraphDataToChartOptions('sv', mockView);
        expect(result.chart?.type).toBe('column');
        expect(result.title?.text).toBe('Antal 2015Q1 efter Område, Antal rum, Finansieringssätt');
        expect(result.credits?.text).toBe('Källa: PxVisualizer-sv');
        expect(result.subtitle?.text).toBe('2015Q1 | Huvudstadsregionen | Fri finansierad');
    });
});

describe('PxGrafDataConverter tests, BasicHorizontalBarChart', () => {
    it('should return correct options object', () => {
        const mockVarSelections = extractSelectableVariableValues(HORIZONTAL_BAR_CHART_WITH_SELECTABLES.selectableVariableCodes, HORIZONTAL_BAR_CHART_WITH_SELECTABLES.metaData, HORIZONTAL_BAR_CHART_WITH_SELECTABLES.visualizationSettings.defaultSelectableVariableCodes, null);
        const mockView = convertPxGrafResponseToView(HORIZONTAL_BAR_CHART_WITH_SELECTABLES, mockVarSelections);
        const result = convertPxGraphDataToChartOptions('fi', mockView);
        expect(result.chart?.type).toBe('bar');
        expect(result.title?.text).toBe('Tiedot 2022Q4 muuttujina Tiedot, Alue, Huoneluku');
        expect(result.credits?.text).toBe('Lähde: PxVisualizer-fi');
        expect(result.subtitle?.text).toBe('Yksiöt | Lukumäärä');
    });

    it('should return correct options object on different localisation', () => {
        const mockVarSelections = extractSelectableVariableValues(HORIZONTAL_BAR_CHART_WITH_SELECTABLES.selectableVariableCodes, HORIZONTAL_BAR_CHART_WITH_SELECTABLES.metaData, HORIZONTAL_BAR_CHART_WITH_SELECTABLES.visualizationSettings.defaultSelectableVariableCodes, null);
        const mockView = convertPxGrafResponseToView(HORIZONTAL_BAR_CHART_WITH_SELECTABLES, mockVarSelections);
        const result = convertPxGraphDataToChartOptions('en', mockView);
        expect(result.chart?.type).toBe('bar');
        expect(result.title?.text).toBe('Information 2022Q4 by Information, Region, Number of rooms');
        expect(result.credits?.text).toBe('Source: PxVisualizer-en');
        expect(result.subtitle?.text).toBe('One-room flat | Number');
    });
});

describe('PxGrafDataConverter tests, GroupHorizontalBarChart', () => {
    it('should return correct options object', () => {
        const mockVarSelections = extractSelectableVariableValues(GROUP_HORIZONTAL_BAR_CHART_WITH_SELECTABLES.pxGraphData.selectableVariableCodes, GROUP_HORIZONTAL_BAR_CHART_WITH_SELECTABLES.pxGraphData.metaData, GROUP_HORIZONTAL_BAR_CHART_WITH_SELECTABLES.pxGraphData.visualizationSettings.defaultSelectableVariableCodes, GROUP_HORIZONTAL_BAR_CHART_WITH_SELECTABLES.selectedVariableCodes);
        const mockView = convertPxGrafResponseToView(GROUP_HORIZONTAL_BAR_CHART_WITH_SELECTABLES.pxGraphData, mockVarSelections);
        const result = convertPxGraphDataToChartOptions('fi', mockView);
        expect(result.chart?.type).toBe('bar');
        expect(result.title?.text).toBe('Tiedot 2015Q1-2015Q2 muuttujina Tiedot, Alue, Huoneluku, Rahoitusmuoto');
        expect(result.credits?.text).toBe('Lähde: PxVisualizer-fi');
        expect(result.subtitle?.text).toBe('Pääkaupunkiseutu (PKS) | Yksiöt | Lukumäärä');
    });

    it('should return correct options object on different localisation', () => {
        const mockVarSelections = extractSelectableVariableValues(GROUP_HORIZONTAL_BAR_CHART_WITH_SELECTABLES.pxGraphData.selectableVariableCodes, GROUP_HORIZONTAL_BAR_CHART_WITH_SELECTABLES.pxGraphData.metaData, GROUP_HORIZONTAL_BAR_CHART_WITH_SELECTABLES.pxGraphData.visualizationSettings.defaultSelectableVariableCodes, GROUP_HORIZONTAL_BAR_CHART_WITH_SELECTABLES.selectedVariableCodes);
        const mockView = convertPxGrafResponseToView(GROUP_HORIZONTAL_BAR_CHART_WITH_SELECTABLES.pxGraphData, mockVarSelections);
        const result = convertPxGraphDataToChartOptions('en', mockView);
        expect(result.chart?.type).toBe('bar');
        expect(result.title?.text).toBe('Information 2015Q1-2015Q2 by Information, Region, Number of rooms, Type of funding');
        expect(result.credits?.text).toBe('Source: PxVisualizer-en');
        expect(result.subtitle?.text).toBe('Greater Helsinki | One-room flat | Number');
    });
});

describe('PxGrafDataConverter tests, PieBarChart', () => {
    it('should return correct options object', () => {
        const mockVarSelections = extractSelectableVariableValues(PIE_CHART_ASCENDING.selectableVariableCodes, PIE_CHART_ASCENDING.metaData, PIE_CHART_ASCENDING.visualizationSettings.defaultSelectableVariableCodes, null);
        const mockView = convertPxGrafResponseToView(PIE_CHART_ASCENDING, mockVarSelections);
        const result = convertPxGraphDataToChartOptions('fi', mockView);
        expect(result.chart?.type).toBe('pie');
        expect(result.title?.text).toBe('Lukumäärä, Yksiöt 2022Q4 muuttujana Alue');
        expect(result.credits?.text).toBe('Lähde: PxVisualizer-fi');
        expect(result.subtitle?.text).toBe('');
    });

    it('should return correct options object on different localisation', () => {
        const mockVarSelections = extractSelectableVariableValues(PIE_CHART_ASCENDING.selectableVariableCodes, PIE_CHART_ASCENDING.metaData, PIE_CHART_ASCENDING.visualizationSettings.defaultSelectableVariableCodes, null);
        const mockView = convertPxGrafResponseToView(PIE_CHART_ASCENDING, mockVarSelections);
        const result = convertPxGraphDataToChartOptions('en', mockView);
        expect(result.chart?.type).toBe('pie');
        expect(result.title?.text).toBe('Number, One-room flat 2022Q4 by Region');
        expect(result.credits?.text).toBe('Source: PxVisualizer-en');
        expect(result.subtitle?.text).toBe('');
    });
});

describe('PxGrafDataConverter tests, GroupVerticalBarChart', () => {
    it('should return correct options object', () => {
        const mockVarSelections = extractSelectableVariableValues(GROUP_VERTICAL_BAR_CHART_WITH_SELECTABLES_PIVOTED.pxGraphData.selectableVariableCodes, GROUP_VERTICAL_BAR_CHART_WITH_SELECTABLES_PIVOTED.pxGraphData.metaData, GROUP_VERTICAL_BAR_CHART_WITH_SELECTABLES_PIVOTED.pxGraphData.visualizationSettings.defaultSelectableVariableCodes, GROUP_VERTICAL_BAR_CHART_WITH_SELECTABLES_PIVOTED.selectedVariableCodes);
        const mockView = convertPxGrafResponseToView(GROUP_VERTICAL_BAR_CHART_WITH_SELECTABLES_PIVOTED.pxGraphData, mockVarSelections);
        const result = convertPxGraphDataToChartOptions('fi', mockView);
        expect(result.chart?.type).toBe('column');
        expect(result.title?.text).toBe('Tiedot 2015Q1-2015Q2 muuttujina Tiedot, Alue, Huoneluku, Rahoitusmuoto');
        expect(result.credits?.text).toBe('Lähde: PxVisualizer-fi');
        expect(result.subtitle?.text).toBe('Pääkaupunkiseutu (PKS) | Yksiöt | Lukumäärä');
    });

    it('should return correct options object on different localisation', () => {
        const mockVarSelections = extractSelectableVariableValues(GROUP_VERTICAL_BAR_CHART_WITH_SELECTABLES_PIVOTED.pxGraphData.selectableVariableCodes, GROUP_VERTICAL_BAR_CHART_WITH_SELECTABLES_PIVOTED.pxGraphData.metaData, GROUP_VERTICAL_BAR_CHART_WITH_SELECTABLES_PIVOTED.pxGraphData.visualizationSettings.defaultSelectableVariableCodes, GROUP_VERTICAL_BAR_CHART_WITH_SELECTABLES_PIVOTED.selectedVariableCodes);
        const mockView = convertPxGrafResponseToView(GROUP_VERTICAL_BAR_CHART_WITH_SELECTABLES_PIVOTED.pxGraphData, mockVarSelections);
        const result = convertPxGraphDataToChartOptions('sv', mockView);
        expect(result.chart?.type).toBe('column');
        expect(result.title?.text).toBe('Uppgifter 2015Q1-2015Q2 efter Uppgifter, Område, Antal rum, Finansieringssätt');
        expect(result.credits?.text).toBe('Källa: PxVisualizer-sv');
        expect(result.subtitle?.text).toBe('Huvudstadsregionen | Enrumslägenhet | Antal');
    });
});

describe('PxGrafDataConverter tests, StackedVerticalBarChart', () => {
    it('should return correct options object', () => {
        const mockVarSelections = extractSelectableVariableValues(STACKED_VERTICAL_BAR_CHART_WITH_SELECTABLES.pxGraphData.selectableVariableCodes, STACKED_VERTICAL_BAR_CHART_WITH_SELECTABLES.pxGraphData.metaData, STACKED_VERTICAL_BAR_CHART_WITH_SELECTABLES.pxGraphData.visualizationSettings.defaultSelectableVariableCodes, STACKED_VERTICAL_BAR_CHART_WITH_SELECTABLES.selectedVariableCodes);
        const mockView = convertPxGrafResponseToView(STACKED_VERTICAL_BAR_CHART_WITH_SELECTABLES.pxGraphData, mockVarSelections);
        const result = convertPxGraphDataToChartOptions('fi', mockView);
        expect(result.chart?.type).toBe('column');
        expect(result.plotOptions?.column?.stacking).toBe('normal');
        expect(result.title?.text).toBe('Tiedot 2015Q1-2015Q2 muuttujina Tiedot, Alue, Huoneluku, Rahoitusmuoto');
        expect(result.credits?.text).toBe('Lähde: PxVisualizer-fi');
        expect(result.subtitle?.text).toBe('Pääkaupunkiseutu (PKS) | Yksiöt | Lukumäärä');
    });

    it('should return correct options object on different localisation', () => {
        const mockVarSelections = extractSelectableVariableValues(STACKED_VERTICAL_BAR_CHART_WITH_SELECTABLES.pxGraphData.selectableVariableCodes, STACKED_VERTICAL_BAR_CHART_WITH_SELECTABLES.pxGraphData.metaData, STACKED_VERTICAL_BAR_CHART_WITH_SELECTABLES.pxGraphData.visualizationSettings.defaultSelectableVariableCodes, STACKED_VERTICAL_BAR_CHART_WITH_SELECTABLES.selectedVariableCodes);
        const mockView = convertPxGrafResponseToView(STACKED_VERTICAL_BAR_CHART_WITH_SELECTABLES.pxGraphData, mockVarSelections);
        const result = convertPxGraphDataToChartOptions('sv', mockView);
        expect(result.chart?.type).toBe('column');
        expect(result.plotOptions?.column?.stacking).toBe('normal');
        expect(result.title?.text).toBe('Uppgifter 2015Q1-2015Q2 efter Uppgifter, Område, Antal rum, Finansieringssätt');
        expect(result.credits?.text).toBe('Källa: PxVisualizer-sv');
        expect(result.subtitle?.text).toBe('Huvudstadsregionen | Enrumslägenhet | Antal');
    });
});

describe('PxGrafDataConverter tests, StackedHorizontalBarChart', () => {
    it('should return correct options object', () => {
        const mockVarSelections = extractSelectableVariableValues(STACKED_HORIZONTAL_BAR_CHART_WITH_SELECTABLES.pxGraphData.selectableVariableCodes, STACKED_HORIZONTAL_BAR_CHART_WITH_SELECTABLES.pxGraphData.metaData, STACKED_HORIZONTAL_BAR_CHART_WITH_SELECTABLES.pxGraphData.visualizationSettings.defaultSelectableVariableCodes, STACKED_HORIZONTAL_BAR_CHART_WITH_SELECTABLES.selectedVariableCodes);
        const mockView = convertPxGrafResponseToView(STACKED_HORIZONTAL_BAR_CHART_WITH_SELECTABLES.pxGraphData, mockVarSelections);
        const result = convertPxGraphDataToChartOptions('fi', mockView);
        expect(result.chart?.type).toBe('bar');
        expect(result.plotOptions?.bar?.stacking).toBe('normal');
        expect(result.title?.text).toBe('Tiedot 2015Q1 muuttujina Tiedot, Alue, Huoneluku, Rahoitusmuoto');
        expect(result.credits?.text).toBe('Lähde: PxVisualizer-fi');
        expect(result.subtitle?.text).toBe('2015Q1 | Pääkaupunkiseutu (PKS) | Yksiöt');
    });

    it('should return correct options object on different localisation', () => {
        const mockVarSelections = extractSelectableVariableValues(STACKED_HORIZONTAL_BAR_CHART_WITH_SELECTABLES.pxGraphData.selectableVariableCodes, STACKED_HORIZONTAL_BAR_CHART_WITH_SELECTABLES.pxGraphData.metaData, STACKED_HORIZONTAL_BAR_CHART_WITH_SELECTABLES.pxGraphData.visualizationSettings.defaultSelectableVariableCodes, STACKED_HORIZONTAL_BAR_CHART_WITH_SELECTABLES.selectedVariableCodes);
        const mockView = convertPxGrafResponseToView(STACKED_HORIZONTAL_BAR_CHART_WITH_SELECTABLES.pxGraphData, mockVarSelections);
        const result = convertPxGraphDataToChartOptions('sv', mockView);
        expect(result.chart?.type).toBe('bar');
        expect(result.plotOptions?.bar?.stacking).toBe('normal');
        expect(result.title?.text).toBe('Uppgifter 2015Q1 efter Uppgifter, Område, Antal rum, Finansieringssätt');
        expect(result.credits?.text).toBe('Källa: PxVisualizer-sv');
        expect(result.subtitle?.text).toBe('2015Q1 | Huvudstadsregionen | Enrumslägenhet');
    });
});

const checkDataPointPrecision = (data: any) => {
    data.forEach((point: any) => {
        expect(point.custom?.precision).toBe(1);
    });
};

describe('PxGrafDataConverter tests, PercentVerticalBarChart', () => {
    it('should return correct options object', () => {
        const mockVarSelections = extractSelectableVariableValues(
            PERCENT_VERTICAL_BAR_CHART_WITH_SELECTABLES.pxGraphData.selectableVariableCodes,
            PERCENT_VERTICAL_BAR_CHART_WITH_SELECTABLES.pxGraphData.metaData,
            PERCENT_VERTICAL_BAR_CHART_WITH_SELECTABLES.pxGraphData.visualizationSettings.defaultSelectableVariableCodes,
            PERCENT_VERTICAL_BAR_CHART_WITH_SELECTABLES.selectedVariableCodes
        );
        const mockView = convertPxGrafResponseToView(PERCENT_VERTICAL_BAR_CHART_WITH_SELECTABLES.pxGraphData, mockVarSelections);
        const result = convertPxGraphDataToChartOptions('fi', mockView);
        expect(result.chart?.type).toBe('column');
        expect(result.plotOptions?.column?.stacking).toBe('percent');
        expect(result.title?.text).toBe('Lukumäärä 2021Q4 muuttujina Alue, Huoneluku, Rahoitusmuoto');
        expect(result.credits?.text).toBe('Lähde: PxVisualizer-fi');
        expect(result.subtitle?.text).toBe('2022Q1 | Yksiöt');

        result.series?.forEach((series) => {
            const columnSeries = series as SeriesColumnOptions;
            if (columnSeries.data) {
                checkDataPointPrecision(columnSeries.data);
            }
        });
    });

    it('should return correct options object on different localisation', () => {
        const mockVarSelections = extractSelectableVariableValues(
            PERCENT_VERTICAL_BAR_CHART_WITH_SELECTABLES.pxGraphData.selectableVariableCodes,
            PERCENT_VERTICAL_BAR_CHART_WITH_SELECTABLES.pxGraphData.metaData,
            PERCENT_VERTICAL_BAR_CHART_WITH_SELECTABLES.pxGraphData.visualizationSettings.defaultSelectableVariableCodes,
            PERCENT_VERTICAL_BAR_CHART_WITH_SELECTABLES.selectedVariableCodes
        );
        const mockView = convertPxGrafResponseToView(PERCENT_VERTICAL_BAR_CHART_WITH_SELECTABLES.pxGraphData, mockVarSelections);
        const result = convertPxGraphDataToChartOptions('sv', mockView);
        expect(result.chart?.type).toBe('column');
        expect(result.plotOptions?.column?.stacking).toBe('percent');
        expect(result.title?.text).toBe('Antal 2021Q4 efter Område, Antal rum, Finansieringssätt');
        expect(result.credits?.text).toBe('Källa: PxVisualizer-sv');
        expect(result.subtitle?.text).toBe('2022Q1 | Enrumslägenhet');

        result.series?.forEach((series) => {
            const columnSeries = series as SeriesColumnOptions;
            if (columnSeries.data) {
                checkDataPointPrecision(columnSeries.data);
            }
        });
    });
});

describe('PxGrafDataConverter tests, PercentHorizontalBarChart', () => {
    it('should return correct options object', () => {
        const mockVarSelections = extractSelectableVariableValues(
            PERCENT_HORIZONTAL_BAR_CHART_WITH_SELECTABLES.pxGraphData.selectableVariableCodes,
            PERCENT_HORIZONTAL_BAR_CHART_WITH_SELECTABLES.pxGraphData.metaData,
            PERCENT_HORIZONTAL_BAR_CHART_WITH_SELECTABLES.pxGraphData.visualizationSettings.defaultSelectableVariableCodes,
            PERCENT_HORIZONTAL_BAR_CHART_WITH_SELECTABLES.selectedVariableCodes
        );
        const mockView = convertPxGrafResponseToView(PERCENT_HORIZONTAL_BAR_CHART_WITH_SELECTABLES.pxGraphData, mockVarSelections);
        const result = convertPxGraphDataToChartOptions('fi', mockView);
        expect(result.chart?.type).toBe('bar');
        expect(result.plotOptions?.bar?.stacking).toBe('percent');
        expect(result.title?.text).toBe('Lukumäärä 2022Q4 muuttujina Alue, Huoneluku, Rahoitusmuoto');
        expect(result.credits?.text).toBe('Lähde: PxVisualizer-fi');
        expect(result.subtitle?.text).toBe('Kaksiot');

        result.series?.forEach((series) => {
            const columnSeries = series as SeriesBarOptions;
            if (columnSeries.data) {
                checkDataPointPrecision(columnSeries.data);
            }
        });
    });

    it('should return correct options object on different localisation', () => {
        const mockVarSelections = extractSelectableVariableValues(
            PERCENT_HORIZONTAL_BAR_CHART_WITH_SELECTABLES.pxGraphData.selectableVariableCodes,
            PERCENT_HORIZONTAL_BAR_CHART_WITH_SELECTABLES.pxGraphData.metaData,
            PERCENT_HORIZONTAL_BAR_CHART_WITH_SELECTABLES.pxGraphData.visualizationSettings.defaultSelectableVariableCodes,
            PERCENT_HORIZONTAL_BAR_CHART_WITH_SELECTABLES.selectedVariableCodes
        );
        const mockView = convertPxGrafResponseToView(PERCENT_HORIZONTAL_BAR_CHART_WITH_SELECTABLES.pxGraphData, mockVarSelections);
        const result = convertPxGraphDataToChartOptions('sv', mockView);
        expect(result.chart?.type).toBe('bar');
        expect(result.plotOptions?.bar?.stacking).toBe('percent');
        expect(result.title?.text).toBe('Antal 2022Q4 efter Område, Antal rum, Finansieringssätt');
        expect(result.credits?.text).toBe('Källa: PxVisualizer-sv');
        expect(result.subtitle?.text).toBe('Tvårumslägenhet');

        result.series?.forEach((series) => {
            const columnSeries = series as SeriesBarOptions;
            if (columnSeries.data) {
                checkDataPointPrecision(columnSeries.data);
            }
        });
    });
});

describe('PxGrafDataConverter tests, PyramidChart', () => {
    it('should return correct options object', () => {
        const mockVarSelections = extractSelectableVariableValues(PYRAMID_CHART_WITH_SELECTABLES.pxGraphData.selectableVariableCodes, PYRAMID_CHART_WITH_SELECTABLES.pxGraphData.metaData, PYRAMID_CHART_WITH_SELECTABLES.pxGraphData.visualizationSettings.defaultSelectableVariableCodes, PYRAMID_CHART_WITH_SELECTABLES.selectedVariableCodes);
        const mockView = convertPxGrafResponseToView(PYRAMID_CHART_WITH_SELECTABLES.pxGraphData, mockVarSelections);
        const result = convertPxGraphDataToChartOptions('fi', mockView);
        expect(result.chart?.type).toBe('bar');
        expect(result.plotOptions?.series?.stacking).toBe('normal');
        expect(result.title?.text).toBe('Väestö 31.12. 2020 muuttujina Alue, Ikä, Sukupuoli');
        expect(result.credits?.text).toBe('Lähde: PxVisualizer-fi');
        expect(result.subtitle?.text).toBe('KOKO MAA | 2020');
    });

    it('should return correct options object on different localisation', () => {
        const mockVarSelections = extractSelectableVariableValues(PYRAMID_CHART_WITH_SELECTABLES.pxGraphData.selectableVariableCodes, PYRAMID_CHART_WITH_SELECTABLES.pxGraphData.metaData, PYRAMID_CHART_WITH_SELECTABLES.pxGraphData.visualizationSettings.defaultSelectableVariableCodes, PYRAMID_CHART_WITH_SELECTABLES.selectedVariableCodes);
        const mockView = convertPxGrafResponseToView(PYRAMID_CHART_WITH_SELECTABLES.pxGraphData, mockVarSelections);
        const result = convertPxGraphDataToChartOptions('sv', mockView);
        expect(result.chart?.type).toBe('bar');
        expect(result.plotOptions?.series?.stacking).toBe('normal');
        expect(result.title?.text).toBe('Befolkning 31.12. 2020 efter Område, Ålder, Kön');
        expect(result.credits?.text).toBe('Källa: PxVisualizer-sv');
        expect(result.subtitle?.text).toBe('HELA LANDET | 2020');
    });
});

describe('PxGrafDataConverter tests, ScatterPlot', () => {
    it('should return correct options object', () => {
        const mockVarSelections = extractSelectableVariableValues(SCATTER_PLOT_WITH_SELECTABLES.pxGraphData.selectableVariableCodes, SCATTER_PLOT_WITH_SELECTABLES.pxGraphData.metaData, SCATTER_PLOT_WITH_SELECTABLES.pxGraphData.visualizationSettings.defaultSelectableVariableCodes, SCATTER_PLOT_WITH_SELECTABLES.selectedVariableCodes);
        const mockView = convertPxGrafResponseToView(SCATTER_PLOT_WITH_SELECTABLES.pxGraphData, mockVarSelections);
        const result = convertPxGraphDataToChartOptions('fi', mockView);
        expect(result.chart?.type).toBe('scatter');
        expect(result.title?.text).toBe('Tiedot 2015Q1-2022Q4 muuttujina Tiedot, Alue, Huoneluku, Rahoitusmuoto');
        expect(result.credits?.text).toBe('Lähde: PxVisualizer-fi');
        expect(result.subtitle?.text).toBe('Pääkaupunkiseutu (PKS) | Yksiöt | Vapaarahoitteinen');
    });

    it('should return correct options object on different localisation', () => {
        const mockVarSelections = extractSelectableVariableValues(SCATTER_PLOT_WITH_SELECTABLES.pxGraphData.selectableVariableCodes, SCATTER_PLOT_WITH_SELECTABLES.pxGraphData.metaData, SCATTER_PLOT_WITH_SELECTABLES.pxGraphData.visualizationSettings.defaultSelectableVariableCodes, SCATTER_PLOT_WITH_SELECTABLES.selectedVariableCodes);
        const mockView = convertPxGrafResponseToView(SCATTER_PLOT_WITH_SELECTABLES.pxGraphData, mockVarSelections);
        const result = convertPxGraphDataToChartOptions('sv', mockView);
        expect(result.chart?.type).toBe('scatter');
        expect(result.title?.text).toBe('Uppgifter 2015Q1-2022Q4 efter Uppgifter, Område, Antal rum, Finansieringssätt');
        expect(result.credits?.text).toBe('Källa: PxVisualizer-sv');
        expect(result.subtitle?.text).toBe('Huvudstadsregionen | Enrumslägenhet | Fri finansierad');
    });
});

describe('PxGrafDataConverter tests, LineChart', () => {
    it('should return correct options object', () => {
        const mockVarSelections = extractSelectableVariableValues(LINE_CHART_WITH_QUARTER_SERIES.pxGraphData.selectableVariableCodes, LINE_CHART_WITH_QUARTER_SERIES.pxGraphData.metaData, LINE_CHART_WITH_QUARTER_SERIES.pxGraphData.visualizationSettings.defaultSelectableVariableCodes, LINE_CHART_WITH_QUARTER_SERIES.selectedVariableCodes);
        const mockView = convertPxGrafResponseToView(LINE_CHART_WITH_QUARTER_SERIES.pxGraphData, mockVarSelections);
        const result = convertPxGraphDataToChartOptions('fi', mockView);
        expect(result.chart?.type).toBe('line');
        expect(result.title?.text).toBe('Neliövuokra (eur/m2), Yksiöt, Vapaarahoitteinen 2015Q1-2022Q4 muuttujana Alue');
        expect(result.credits?.text).toBe('Lähde: PxVisualizer-fi');
        expect(result.subtitle?.text).toBe('');
    });

    it('should return correct options object on different localisation', () => {
        const mockVarSelections = extractSelectableVariableValues(LINE_CHART_WITH_QUARTER_SERIES.pxGraphData.selectableVariableCodes, LINE_CHART_WITH_QUARTER_SERIES.pxGraphData.metaData, LINE_CHART_WITH_QUARTER_SERIES.pxGraphData.visualizationSettings.defaultSelectableVariableCodes, LINE_CHART_WITH_QUARTER_SERIES.selectedVariableCodes);
        const mockView = convertPxGrafResponseToView(LINE_CHART_WITH_QUARTER_SERIES.pxGraphData, mockVarSelections);
        const result = convertPxGraphDataToChartOptions('sv', mockView);
        expect(result.chart?.type).toBe('line');
        expect(result.title?.text).toBe('Kvadratmeterspris (eur/m2), Enrumslägenhet, Fri finansierad 2015Q1-2022Q4 efter Område');
        expect(result.credits?.text).toBe('Källa: PxVisualizer-sv');
        expect(result.subtitle?.text).toBe('');
    });
});