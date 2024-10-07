import { ETimeVariableInterval, EVariableType, EVisualizationType, IContentComponent, IQueryVisualizationResponse, IVariableMeta, IVariableValueMeta, TMultiLanguageString } from '../types/queryVisualizationResponse';
import { TVariableSelections } from '../types/variableSelections';
import { ESeriesType, IDataSeries, View } from '../types/view';
import { GROUP_HORIZONTAL_BAR_CHART_WITH_PRELIMINARY_DATA_SET, GROUP_HORIZONTAL_BAR_CHART_WITH_SUM_SORTING,GROUP_HORIZONTAL_BAR_CHART_WITH_REVERSED_SORTING } from './TestFixtures/groupHorizontalBarChart';
import { HORIZONTAL_BAR_CHART_ASCENDING, HORIZONTAL_BAR_CHART_WITH_SELECTABLES } from './TestFixtures/horizontalBarChart';
import { LINE_CHART_WITH_COMBINATION_SERIES, LINE_CHART_WITH_MULTISELECTABLE_VARIABLE, LINE_CHART_WITH_QUARTER_SERIES } from './TestFixtures/lineChart';
import { PERCENT_HORIZONTAL_BAR_CHART, PERCENT_HORIZONTAL_BAR_CHART_VIEW, PERCENT_HORIZONTAL_BAR_CHART_WITH_SELECTABLES, PERCENT_HORIZONTAL_BAR_CHART_WITH_SELECTABLES_VIEW } from './TestFixtures/percentHorizontalBarChart';
import {
    PERCENT_VERTICAL_BAR_CHART,
    PERCENT_VERTICAL_BAR_CHART_PIVOTED_WITH_SELECTABLES,
    PERCENT_VERTICAL_BAR_CHART_PIVOTED_WITH_SELECTABLES_VIEW,
    PERCENT_VERTICAL_BAR_CHART_VIEW,
    PERCENT_VERTICAL_BAR_CHART_WITH_SELECTABLES,
    PERCENT_VERTICAL_BAR_CHART_WITH_SELECTABLES_VIEW
} from './TestFixtures/percentVerticalBarChart';
import { SELECTABLE_TABLE_WITH_MISSING_DATA } from './TestFixtures/tableChart';
import { ASCENDING, DESCENDING, SUM, REVERSED, NO_SORTING } from './viewSorting';
import { buildSeries, convertPxGrafResponseToView, convertToRelative } from './viewUtils';
import { v4 as uuidV4 } from 'uuid'

const createContentComponent = (overrides?: Partial<IContentComponent>) => {
    const id = uuidV4();
    const defaultContentComponent = {
        unit: { fi: `test-unit-${id}` },
        source: { fi: `test-source-${id}` },
        numberOfDecimals: 0,
        lastUpdated: '',
    };

    return { ...defaultContentComponent, ...overrides };
};

const createVariableValue = (overrides?: Partial<IVariableValueMeta>) => {
    const id = uuidV4();
    const defaultValueMeta = {
        name: { fi: `test-variable-value-name-${id}` },
        code: `test-variable-value-code-${id}`,
        note: null,
        isSum: false,
        contentComponent: overrides?.contentComponent
            ? createContentComponent(overrides?.contentComponent)
            : null
    }

    return { ...defaultValueMeta, ...overrides };
};

const createVariable = (overrides?: Partial<IVariableMeta>): IVariableMeta => {
    const id = uuidV4();
    const defaultVariableMeta: IVariableMeta = {
        code: `test-variable-code-${id}`,
        name: { fi: `test-variable-name-${id}` },
        note: { fi: `test-variable-note-${id}` },
        type: EVariableType.Time,
        values: overrides?.values ?? []
    }

    return { ...defaultVariableMeta, ...overrides };
};

const createPxGrafResponse = (overrides?: Partial<IQueryVisualizationResponse>): IQueryVisualizationResponse => {
    const id = uuidV4();
    const defaultMetaData: IQueryVisualizationResponse = {
        tableReference: { name: `test-table-reference-${id}`, hierarchy: [] },
        data: [],
        missingDataInfo: {},
        dataNotes: {},
        metaData: [],
        selectableVariableCodes: [],
        rowVariableCodes: [],
        columnVariableCodes: [],
        header: { 'fi': `test-header-${id}` },
        visualizationSettings: overrides?.visualizationSettings ?? {
            visualizationType: EVisualizationType.Table,
            timeVariableIntervals: ETimeVariableInterval.Quarter
        }
    };

    return { ...defaultMetaData, ...overrides };
};

const generatePxGrafResponse = (
    variableConfigs: { type: EVariableType, valuesAmount: number }[],
    rowAndColumnIndexes: { rows?: number[], columns?: number[] } = {},
    selectableVariableIndexes: number[] = []
): IQueryVisualizationResponse => {
    let index = 0;
    const variables: IVariableMeta[] = variableConfigs.map(config => {
        index++;
        return generateVariable(index, config.valuesAmount, config.type);
    });
    const metaData: IVariableMeta[] = [...variables];
    const rowVariableCodes: string[] = rowAndColumnIndexes.rows?.map(i => variables[i].code) ?? [];
    const columnVariableCodes: string[] = rowAndColumnIndexes.columns?.map(i => variables[i].code) ?? [];
    const selectableVariableCodes: string[] = selectableVariableIndexes.map(i => variables[i].code);
    const dataLength = variables.map(v => v.values.length).reduce((acc, val) => acc * val, 1);
    let data: number[] = [dataLength];
    let currentData: number = 1;
    for (let i = 0; i < dataLength; i++) {
        data[i] = currentData;
        currentData += 1;
    }
    return createPxGrafResponse({
        metaData: metaData,
        data: data,
        rowVariableCodes: rowVariableCodes.length > 0 ? rowVariableCodes : [],
        columnVariableCodes: columnVariableCodes.length > 0 ? columnVariableCodes : [],
        selectableVariableCodes: selectableVariableCodes.length > 0 ? selectableVariableCodes : []
    });
}

const generateVariable = (variableIndex: number, valuesAmount: number, type: EVariableType): IVariableMeta => {
    let values: IVariableValueMeta[] = [];
    for (let j = 0; j < valuesAmount; j++) {
        const id = `var${variableIndex}-val${j}`
        const value = createVariableValue({ name: { fi: id }, code: id });
        if (type == EVariableType.Content) value.contentComponent = createContentComponent();
        values.push(value);
    }
    const variable = createVariable({type: type, values: values });
    return(variable);
}

describe('series metadata', () => {
    describe('convertPxGrafResponseToView', () => {
        it.each([{
            sorting: ASCENDING,
            expectedSeries: [
                { value: 1.1, precision: 1, preliminary: false },
                { value: 2.11, precision: 2, preliminary: false }
            ]
        },
        {
            sorting: DESCENDING,
            expectedSeries: [
                { value: 2.11, precision: 2, preliminary: false },
                { value: 1.1, precision: 1, preliminary: false }
            ]
        },
        {
            sorting: SUM,
            expectedSeries: [
                { value: 2.11, precision: 2, preliminary: false },
                { value: 1.1, precision: 1, preliminary: false }
            ]
        },
        {
            sorting: NO_SORTING,
            expectedSeries: [
                { value: 1.1, precision: 1, preliminary: false },
                { value: 2.11, precision: 2, preliminary: false }
            ]
        },
        {
            sorting: REVERSED,
            expectedSeries: [
                { value: 2.11, precision: 2, preliminary: false },
                { value: 1.1, precision: 1, preliminary: false }
            ]
        }
        ])('returns sorted metadata with view', ({
            sorting, expectedSeries
        }) => {
            const contentVariableValue1 = createVariableValue({ contentComponent: { numberOfDecimals: 1 } as IContentComponent });
            const contentVariableValue2 = createVariableValue({ contentComponent: { numberOfDecimals: 2 } as IContentComponent });

            const contentVariable = createVariable({
                type: EVariableType.Content,
                values: [contentVariableValue1, contentVariableValue2]
            });

            const browsingVariableValue = createVariableValue();
            const browsingVariable = createVariable({
                type: EVariableType.Time,
                values: [browsingVariableValue]
            });

            const metaData: IVariableMeta[] = [browsingVariable, contentVariable];
            const pxGrafResponse = createPxGrafResponse({
                data: [1.1, 2.11],
                metaData,
                columnVariableCodes: [browsingVariable.code, contentVariable.code],
                visualizationSettings: {
                    visualizationType: EVisualizationType.HorizontalBarChart,
                    timeVariableIntervals: ETimeVariableInterval.Quarter,
                    sorting
                }
            });

            const view = convertPxGrafResponseToView(pxGrafResponse, {});

            const { series: rows } = view;
            const { series } = rows[0];

            expect(series).toEqual(expectedSeries);
        });
    });

    describe('buildSeries', () => {
        it('returns correct number of decimals in series metadata when content var value in selection', () => {
            const contentVariableValue1 = createVariableValue({ contentComponent: { numberOfDecimals: 1 } as IContentComponent });
            const contentVariableValue2 = createVariableValue({ contentComponent: { numberOfDecimals: 2 } as IContentComponent });

            const contentVariable = createVariable({
                type: EVariableType.Content,
                values: [contentVariableValue1, contentVariableValue2]
            });

            const browsingVariableValue = createVariableValue();
            const browsingVariable = createVariable({
                type: EVariableType.Time,
                values: [browsingVariableValue]
            });

            const metaData: IVariableMeta[] = [browsingVariable, contentVariable];
            const pxGrafResponse = createPxGrafResponse({
                data: [1.1, 2.11],
                metaData,
                selectableVariableCodes: [contentVariable.code],
            });

            // Value 1 in selection
            const selectedValueCodes1: TVariableSelections = { [contentVariable.code]: [contentVariableValue1.code] };
            const { series: rows1 } = buildSeries(pxGrafResponse, selectedValueCodes1);
            expect(rows1.length).toEqual(1);

            const { series: series1 } = rows1[0];
            expect(series1.length).toEqual(1);

            expect(series1[0].precision).toBe(contentVariableValue1.contentComponent?.numberOfDecimals);

            // Value 2 in selection
            const selectedValueCodes2: TVariableSelections = { [contentVariable.code]: [contentVariableValue2.code] };
            const { series: rows2 } = buildSeries(pxGrafResponse, selectedValueCodes2);
            expect(rows2.length).toEqual(1);

            const { series: series2 } = rows2[0];
            expect(series2.length).toEqual(1);

            expect(series2[0].precision).toBe(contentVariableValue2.contentComponent?.numberOfDecimals);
        });

        it('returns correct number of decimals in series metadata when only single content var value', () => {
            const contentVariableValue = createVariableValue({ contentComponent: { numberOfDecimals: 1 } as IContentComponent });
            const contentVariable = createVariable({
                type: EVariableType.Content,
                values: [contentVariableValue]
            });

            const browsingVariableValue = createVariableValue();
            const browsingVariable = createVariable({
                type: EVariableType.Time,
                values: [browsingVariableValue]
            });

            const metaData: IVariableMeta[] = [contentVariable, browsingVariable];
            const pxGrafResponse = createPxGrafResponse({
                data: [1.1],
                metaData
            });

            const selectedValueCodes1: TVariableSelections = {};

            const { series: rows } = buildSeries(pxGrafResponse, selectedValueCodes1);
            expect(rows.length).toEqual(1);

            const { series } = rows[0];
            expect(series.length).toEqual(pxGrafResponse.data.length);

            expect(series[0].precision).toEqual(contentVariable.values[0].contentComponent?.numberOfDecimals);
        });

        it('returns correct number of decimals in series metadata when content var value in column variables', () => {
            const contentVariableValue1 = createVariableValue({ contentComponent: { numberOfDecimals: 1 } as IContentComponent });
            const contentVariableValue2 = createVariableValue({ contentComponent: { numberOfDecimals: 2 } as IContentComponent });
            const contentVariable = createVariable({
                type: EVariableType.Content,
                values: [contentVariableValue1, contentVariableValue2]
            });

            const browsingVariableValue = createVariableValue();
            const browsingVariable = createVariable({
                type: EVariableType.Time,
                values: [browsingVariableValue]
            });

            const pxGrafResponse = createPxGrafResponse({
                data: [1.1, 2.11],
                metaData: [browsingVariable, contentVariable],
                columnVariableCodes: [browsingVariable.code, contentVariable.code],
            });

            const selectedValueCodes1: TVariableSelections = {};

            const { series: rows } = buildSeries(pxGrafResponse, selectedValueCodes1);
            expect(rows.length).toEqual(1);

            const { series } = rows[0];
            expect(series.length).toEqual(pxGrafResponse.data.length);

            expect(series[0].precision).toEqual(contentVariable.values[0].contentComponent?.numberOfDecimals);

            expect(series[1].precision).toEqual(contentVariable.values[1].contentComponent?.numberOfDecimals);
        })

        it('returns correct number of decimals in series metadata when content var value in row variables', () => {
            const contentVariableValue1 = createVariableValue({ contentComponent: { numberOfDecimals: 1 } as IContentComponent });
            const contentVariableValue2 = createVariableValue({ contentComponent: { numberOfDecimals: 2 } as IContentComponent });
            const contentVariable = createVariable({
                type: EVariableType.Content,
                values: [contentVariableValue1, contentVariableValue2]
            });

            const browsingVariableValue = createVariableValue();
            const browsingVariable = createVariable({
                type: EVariableType.Time,
                values: [browsingVariableValue]
            });

            const pxGrafResponse = createPxGrafResponse({
                data: [1.1, 2.11],
                metaData: [browsingVariable, contentVariable],
                columnVariableCodes: [browsingVariable.code],
                rowVariableCodes: [contentVariable.code],
            });

            const selectedValueCodes1: TVariableSelections = {};

            const { series: rows } = buildSeries(pxGrafResponse, selectedValueCodes1);
            expect(rows.length).toEqual(2);

            // Row 1
            const { series: series0 } = rows[0];
            expect(series0.length).toEqual(1);
            expect(series0[0].precision).toEqual(contentVariable.values[0].contentComponent?.numberOfDecimals);

            // Row 2
            const { series: series1 } = rows[1];
            expect(series1.length).toEqual(1);
            expect(series1[0].precision).toEqual(contentVariable.values[1].contentComponent?.numberOfDecimals);
        });

        it('returns the correct data without selectable variables', () => {
            const variableConfigs = [
                { type: EVariableType.Content, valuesAmount: 1 },
                { type: EVariableType.Time, valuesAmount: 2 },
                { type: EVariableType.OtherClassificatory, valuesAmount: 2 },
                { type: EVariableType.OtherClassificatory, valuesAmount: 2 }
            ];

            const rowAndColumnIndexes = {
                rows: [2, 3],
                columns: [1]
            };

            const response = generatePxGrafResponse(variableConfigs, rowAndColumnIndexes);
            const expectedData: number[][] =
                [
                    [1, 5],
                    [2, 6],
                    [3, 7],
                    [4, 8]
                ];
            const selectedValueCodes: TVariableSelections = {};
            const series: { columnNameGroups: TMultiLanguageString[][], series: IDataSeries[] } =
                buildSeries(response, selectedValueCodes);
            const data: (number | null)[][] = series.series.map(s => s.series.map(d => d.value));
            expect(data).toEqual(expectedData);
        });

        it('returns correct column and row name groups without selectable variables', () => {
            const variableConfigs = [
                { type: EVariableType.Content, valuesAmount: 1 },
                { type: EVariableType.Time, valuesAmount: 2 },
                { type: EVariableType.OtherClassificatory, valuesAmount: 2 },
                { type: EVariableType.OtherClassificatory, valuesAmount: 2 }
            ];

            const rowAndColumnIndexes = {
                rows: [2, 3],
                columns: [1]
            };

            const pxGrafResponse: IQueryVisualizationResponse = generatePxGrafResponse(variableConfigs, rowAndColumnIndexes);
            const selectedValueCodes: TVariableSelections = {};
            const series: { columnNameGroups: TMultiLanguageString[][], series: IDataSeries[] } =
                buildSeries(pxGrafResponse, selectedValueCodes);
            const expectedRowNameGroups: TMultiLanguageString[][] = [
                [{ "fi": "var3-val0" }, { "fi": "var4-val0" }],
                [{ "fi": "var3-val0" }, { "fi": "var4-val1" }],
                [{ "fi": "var3-val1" }, { "fi": "var4-val0" }],
                [{ "fi": "var3-val1" }, { "fi": "var4-val1" }],
            ];
            const expectedColumnNameGroups: TMultiLanguageString[][] = [
                [{ "fi": "var2-val0" }],
                [{"fi": "var2-val1"}]
            ];
            const rowNameGroups = series.series.map(s => s.rowNameGroup);
            expect(series.columnNameGroups).toEqual(expectedColumnNameGroups);
            expect(rowNameGroups).toEqual(expectedRowNameGroups);
        });

        it('returns the correct series when there is a selectable variable', () => {
            const variableConfigs = [
                { type: EVariableType.Content, valuesAmount: 1 },
                { type: EVariableType.Time, valuesAmount: 2 },
                { type: EVariableType.OtherClassificatory, valuesAmount: 2 },
                { type: EVariableType.OtherClassificatory, valuesAmount: 2 },
                { type: EVariableType.OtherClassificatory, valuesAmount: 2 },
            ];
            const rowAndColumnIndexes = {
                rows: [2, 3],
                columns: [1]
            };
            const selectableVariableIndexes = [4];
            const response = generatePxGrafResponse(variableConfigs, rowAndColumnIndexes, selectableVariableIndexes);
            const selectedValueCodes: TVariableSelections = { [response.metaData[4].code]: [response.metaData[4].values[1].code] };

            const series: { columnNameGroups: TMultiLanguageString[][], series: IDataSeries[] } =
                buildSeries(response, selectedValueCodes);
            const data: (number | null)[][] = series.series.map(s => s.series.map(d => d.value));
            const expectedDataSelectable: number[][] = [
                [2, 10],
                [4, 12],
                [6, 14],
                [8, 16]
            ];
            const expectedRows: TMultiLanguageString[][] = [
                [{ "fi": "var3-val0" }, { "fi": "var4-val0" }],
                [{ "fi": "var3-val0" }, { "fi": "var4-val1" }],
                [{ "fi": "var3-val1" }, { "fi": "var4-val0" }],
                [{ "fi": "var3-val1" }, { "fi": "var4-val1" }],
            ];
            const expectedColumns: TMultiLanguageString[][] = [
                [{ fi: 'var2-val0' }],
                [{ fi: 'var2-val1' }]
            ];
            expect(data).toEqual(expectedDataSelectable);
            expect(series.columnNameGroups).toEqual(expectedColumns);
            expect(series.series.map(s => s.rowNameGroup)).toEqual(expectedRows);
        });

        it('returns the correct series after swapping row and column variables around', () => {
            const variableConfigs = [
                { type: EVariableType.Content, valuesAmount: 1 },
                { type: EVariableType.Time, valuesAmount: 2 },
                { type: EVariableType.OtherClassificatory, valuesAmount: 2 },
                { type: EVariableType.OtherClassificatory, valuesAmount: 2 },
                { type: EVariableType.OtherClassificatory, valuesAmount: 2 },
            ];
            const rowAndColumnIndexes = {
                rows: [2],
                columns: [1, 3]
            };
            const selectableVariableIndexes = [4];
            const response = generatePxGrafResponse(variableConfigs, rowAndColumnIndexes, selectableVariableIndexes);
            const selectedValueCodes: TVariableSelections = { [response.metaData[4].code]: [response.metaData[4].values[1].code] };

            const reordered: IQueryVisualizationResponse = {
                ...response,
                columnVariableCodes: [response.rowVariableCodes[0]],
                rowVariableCodes: [response.columnVariableCodes[0], response.columnVariableCodes[1]]
            };
            const series: { columnNameGroups: TMultiLanguageString[][], series: IDataSeries[] } =
                buildSeries(reordered, selectedValueCodes);
            const data: (number | null)[][] = series.series.map(s => s.series.map(d => d.value));
            const expected: number[][] = [
                [2, 6],
                [4, 8],
                [10, 14],
                [12, 16]
            ];
            const expectedColumnNames: TMultiLanguageString[][] = [
                [{ fi: 'var3-val0' }],
                [{ fi: 'var3-val1' }]
            ];
            const expectedRowNames: TMultiLanguageString[][] = [
                [{ fi: 'var2-val0' }, { fi: 'var4-val0' }],
                [{ fi: 'var2-val0' }, { fi: 'var4-val1' }],
                [{ fi: 'var2-val1' }, { fi: 'var4-val0' }],
                [{ fi: 'var2-val1' }, { fi: 'var4-val1' }],
            ];
            expect(data).toEqual(expected);
            expect(series.columnNameGroups).toEqual(expectedColumnNames);
            expect(series.series.map(s => s.rowNameGroup)).toEqual(expectedRowNames);
        });

        it('returns correct series if the order of row and column variables is changed', () => {
            const variableConfigs = [
                { type: EVariableType.Content, valuesAmount: 1 },
                { type: EVariableType.Time, valuesAmount: 2 },
                { type: EVariableType.OtherClassificatory, valuesAmount: 2 },
                { type: EVariableType.OtherClassificatory, valuesAmount: 2 },
                { type: EVariableType.OtherClassificatory, valuesAmount: 2 },
                { type: EVariableType.OtherClassificatory, valuesAmount: 2 },
                { type: EVariableType.OtherClassificatory, valuesAmount: 2 },
            ];
            const rowAndColumnIndexes = {
                rows: [2, 3],
                columns: [1, 4, 5]
            };
            const selectableVariableIndexes = [6];
            const response = generatePxGrafResponse(variableConfigs, rowAndColumnIndexes, selectableVariableIndexes);
            const selectedValueCodes: TVariableSelections = { [response.metaData[6].code]: [response.metaData[6].values[1].code] };

            const reordered: IQueryVisualizationResponse = {
                ...response,
                rowVariableCodes: [response.rowVariableCodes[1], response.rowVariableCodes[0]],
                columnVariableCodes: [response.columnVariableCodes[3], response.columnVariableCodes[2], response.columnVariableCodes[1], response.columnVariableCodes[0]]
            };
            const series: { columnNameGroups: TMultiLanguageString[][], series: IDataSeries[] } =
                buildSeries(reordered, selectedValueCodes);
            const data: (number | null)[][] = series.series.map(s => s.series.map(d => d.value));
            const expectedColumnNames: TMultiLanguageString[][] = [
                [{ fi: 'var2-val0' }, { fi: 'var5-val0' }, { fi: 'var6-val0' }],
                [{ fi: 'var2-val0' }, { fi: 'var5-val0' }, { fi: 'var6-val1' }],
                [{ fi: 'var2-val0' }, { fi: 'var5-val1' }, { fi: 'var6-val0' }],
                [{ fi: 'var2-val0' }, { fi: 'var5-val1' }, { fi: 'var6-val1' }],
                [{ fi: 'var2-val1' }, { fi: 'var5-val0' }, { fi: 'var6-val0' }],
                [{ fi: 'var2-val1' }, { fi: 'var5-val0' }, { fi: 'var6-val1' }],
                [{ fi: 'var2-val1' }, { fi: 'var5-val1' }, { fi: 'var6-val0' }],
                [{ fi: 'var2-val1' }, { fi: 'var5-val1' }, { fi: 'var6-val1' }]
            ];
            const expectedRowNames: TMultiLanguageString[][] = [
                [{ fi: 'var3-val0' }, { fi: 'var4-val0' }],
                [{ fi: 'var3-val0' }, { fi: 'var4-val1' }],
                [{ fi: 'var3-val1' }, { fi: 'var4-val0' }],
                [{ fi: 'var3-val1' }, { fi: 'var4-val1' }]
            ];
            const expectedData: number[][] = [
                [2, 4, 6, 8, 34, 36, 38, 40],
                [10, 12, 14, 16, 42, 44, 46, 48],
                [18, 20, 22, 24, 50, 52, 54, 56],
                [26, 28, 30, 32, 58, 60, 62, 64]
            ];
            expect(data).toEqual(expectedData);
            expect(series.columnNameGroups).toEqual(expectedColumnNames);
            expect(series.series.map(s => s.rowNameGroup)).toEqual(expectedRowNames);
        });

        it('returns the correct series if the order of values in variables are changed', () => {
            const variableConfigs = [
                { type: EVariableType.Content, valuesAmount: 1 },
                { type: EVariableType.Time, valuesAmount: 2 },
                { type: EVariableType.OtherClassificatory, valuesAmount: 2 },
                { type: EVariableType.OtherClassificatory, valuesAmount: 2 },
                { type: EVariableType.OtherClassificatory, valuesAmount: 2 },
            ];
            const rowAndColumnIndexes = {
                rows: [2],
                columns: [1, 3]
            };
            const selectableVariableIndexes = [4];
            const response = generatePxGrafResponse(variableConfigs, rowAndColumnIndexes, selectableVariableIndexes);
            const selectedValueCodes: TVariableSelections = { [response.metaData[4].code]: [response.metaData[4].values[1].code] };
            response.metaData[2].values = [response.metaData[2].values[1], response.metaData[2].values[0]];
            response.metaData[3].values = [response.metaData[3].values[1], response.metaData[3].values[0]];

            const series: { columnNameGroups: TMultiLanguageString[][], series: IDataSeries[] } =
                buildSeries(response, selectedValueCodes);
            const data: (number | null)[][] = series.series.map(s => s.series.map(d => d.value));
            const expectedColumnNames: TMultiLanguageString[][] = [
                [{ fi: 'var2-val0' }, { fi: 'var4-val1' }],
                [{ fi: 'var2-val0' }, { fi: 'var4-val0' }],
                [{ fi: 'var2-val1' }, { fi: 'var4-val1' }],
                [{ fi: 'var2-val1' }, { fi: 'var4-val0' }]
            ];
            const expectedRowNames: TMultiLanguageString[][] = [
                [{ fi: 'var3-val1' }], [{ fi: 'var3-val0' }]
            ];
            const expectedData: number[][] = [
                [2, 4, 10, 12],
                [6, 8, 14, 16]
            ];
            expect(data).toEqual(expectedData);
            expect(series.columnNameGroups).toEqual(expectedColumnNames);
            expect(series.series.map(s => s.rowNameGroup)).toEqual(expectedRowNames);
        });

        it('returns the correct series with a multiselectable variable', () => {
            const variableConfigs = [
                { type: EVariableType.Content, valuesAmount: 1 },
                { type: EVariableType.Time, valuesAmount: 2 },
                { type: EVariableType.OtherClassificatory, valuesAmount: 2 },
                { type: EVariableType.OtherClassificatory, valuesAmount: 2 },
                { type: EVariableType.OtherClassificatory, valuesAmount: 3 },
            ];
            const rowAndColumnIndexes = {
                rows: [2],
                columns: [1, 3]
            };
            const selectableVariableIndexes = [4];
            const response = generatePxGrafResponse(variableConfigs, rowAndColumnIndexes, selectableVariableIndexes);
            response.visualizationSettings.multiselectableVariableCode = response.selectableVariableCodes[0];
            const selectableVariable: IVariableMeta = response.metaData[4];
            const selectedValueCodes: TVariableSelections = { [selectableVariable.code]: [selectableVariable.values[0].code, selectableVariable.values[2].code] };
            const series: { columnNameGroups: TMultiLanguageString[][], series: IDataSeries[] } = buildSeries(response, selectedValueCodes);
            const values: (number | null)[][] = series.series.map(s => s.series.map(d => d.value));
            const expected: number[][] = [
                [1, 4, 13, 16],
                [7, 10, 19, 22],
                [3, 6, 15, 18],
                [9, 12, 21, 24]
            ];
            const expectedColumnNames: TMultiLanguageString[][] = [
                [{ fi: 'var2-val0' }, { fi: 'var4-val0' }],
                [{ fi: 'var2-val0' }, { fi: 'var4-val1' }],
                [{ fi: 'var2-val1' }, { fi: 'var4-val0' }],
                [{ fi: 'var2-val1' }, { fi: 'var4-val1' }]
            ];
            const expectedRowNames: TMultiLanguageString[][] = [
                [{ fi: 'var5-val0' }, { fi: 'var3-val0' }],
                [{ fi: 'var5-val0' }, { fi: 'var3-val1' }],
                [{ fi: 'var5-val1' }, { fi: 'var3-val0' }],
                [{ fi: 'var5-val1' }, { fi: 'var3-val1' }]
            ]
            expect(values).toEqual(expected);
            expect(series.columnNameGroups).toEqual(expectedColumnNames);
            expect(series.series.map(s => s.rowNameGroup)).toEqual(expectedRowNames);
        });

        it('returns the correct series with a multiselectable variable on rows', () => {
            const variableConfigs = [
                { type: EVariableType.Content, valuesAmount: 1 },
                { type: EVariableType.Time, valuesAmount: 2 },
                { type: EVariableType.OtherClassificatory, valuesAmount: 3 },
                { type: EVariableType.OtherClassificatory, valuesAmount: 2 },
            ];
            const rowAndColumnIndexes = {
                rows: [2],
                columns: [1, 3]
            };
            const selectableVariableIndexes = [2];
            const pxGrafResponse: IQueryVisualizationResponse = generatePxGrafResponse(variableConfigs, rowAndColumnIndexes, selectableVariableIndexes);
            pxGrafResponse.visualizationSettings.multiselectableVariableCode = pxGrafResponse.selectableVariableCodes[0];
            const selectableVariable: IVariableMeta = pxGrafResponse.metaData[2];
            const selectedValueCodes: TVariableSelections = { [selectableVariable.code]: [selectableVariable.values[0].code, selectableVariable.values[2].code] };
            const series: { columnNameGroups: TMultiLanguageString[][], series: IDataSeries[] } = buildSeries(pxGrafResponse, selectedValueCodes);
            const values: (number | null)[][] = series.series.map(s => s.series.map(d => d.value));
            const expected: number[][] = [
                [1, 2, 7, 8],
                [3, 4, 9, 10],
                [5, 6, 11, 12]
            ];
            const expectedColumnNames: TMultiLanguageString[][] = [
                [{ fi: 'var2-val0' }, { fi: 'var4-val0' }],
                [{ fi: 'var2-val0' }, { fi: 'var4-val1' }],
                [{ fi: 'var2-val1' }, { fi: 'var4-val0' }],
                [{ fi: 'var2-val1' }, { fi: 'var4-val1' }]
            ];
            const expectedRowNames: TMultiLanguageString[][] = [
                [{ fi: 'var3-val0' }],
                [{ fi: 'var3-val1' }],
                [{ fi: 'var3-val2' }]
            ]
            expect(values).toEqual(expected);
            expect(series.columnNameGroups).toEqual(expectedColumnNames);
            expect(series.series.map(s => s.rowNameGroup)).toEqual(expectedRowNames);
        });

        it('returns the correct series with a multiselectable variable on columns', () => {
            const variableConfigs = [
                { type: EVariableType.Content, valuesAmount: 1 },
                { type: EVariableType.Time, valuesAmount: 2 },
                { type: EVariableType.OtherClassificatory, valuesAmount: 2 },
                { type: EVariableType.OtherClassificatory, valuesAmount: 3 },
            ];
            const rowAndColumnIndexes = {
                rows: [2],
                columns: [1, 3]
            };
            const selectableVariableIndexes = [3];
            const pxGrafResponse: IQueryVisualizationResponse = generatePxGrafResponse(variableConfigs, rowAndColumnIndexes, selectableVariableIndexes);
            pxGrafResponse.visualizationSettings.multiselectableVariableCode = pxGrafResponse.selectableVariableCodes[0];
            const selectableVariable: IVariableMeta = pxGrafResponse.metaData[3];
            const selectedValueCodes: TVariableSelections = { [selectableVariable.code]: [selectableVariable.values[0].code, selectableVariable.values[2].code] };
            const series: { columnNameGroups: TMultiLanguageString[][], series: IDataSeries[] } = buildSeries(pxGrafResponse, selectedValueCodes);
            const values: (number | null)[][] = series.series.map(s => s.series.map(d => d.value));
            const expected: number[][] = [
                [1, 2, 3, 7, 8, 9],
                [4, 5, 6, 10, 11, 12]
            ];
            const expectedColumnNames: TMultiLanguageString[][] = [
                [{ fi: 'var2-val0' }, { fi: 'var4-val0' }],
                [{ fi: 'var2-val0' }, { fi: 'var4-val1' }],
                [{ fi: 'var2-val0' }, { fi: 'var4-val2' }],
                [{ fi: 'var2-val1' }, { fi: 'var4-val0' }],
                [{ fi: 'var2-val1' }, { fi: 'var4-val1' }],
                [{ fi: 'var2-val1' }, { fi: 'var4-val2' }]
            ];
            const expectedRowNames: TMultiLanguageString[][] = [
                [{ fi: 'var3-val0' }], [{ fi: 'var3-val1' }]
            ];
            expect(values).toEqual(expected);
            expect(series.columnNameGroups).toEqual(expectedColumnNames);
            expect(series.series.map(s => s.rowNameGroup)).toEqual(expectedRowNames);
        });

        it('returns the correct series with a multiselectable variable with only one value selected', () => {
            const variableConfigs = [
                { type: EVariableType.Content, valuesAmount: 1 },
                { type: EVariableType.Time, valuesAmount: 2 },
                { type: EVariableType.OtherClassificatory, valuesAmount: 2 },
                { type: EVariableType.OtherClassificatory, valuesAmount: 2 },
                { type: EVariableType.OtherClassificatory, valuesAmount: 3 },
            ];
            const rowAndColumnIndexes = {
                rows: [2],
                columns: [1, 3]
            };
            const selectableVariableIndexes = [4];
            const response = generatePxGrafResponse(variableConfigs, rowAndColumnIndexes, selectableVariableIndexes);
            response.visualizationSettings.multiselectableVariableCode = response.selectableVariableCodes[0];
            const selectableVariable: IVariableMeta = response.metaData[4];
            const selectedValueCodes: TVariableSelections = { [selectableVariable.code]: [selectableVariable.values[0].code] };
            const series: { columnNameGroups: TMultiLanguageString[][], series: IDataSeries[] } = buildSeries(response, selectedValueCodes);
            const values: (number | null)[][] = series.series.map(s => s.series.map(d => d.value));
            const expected: number[][] = [
                [1, 4, 13, 16],
                [7, 10, 19, 22]
            ];
            const expectedColumnNames: TMultiLanguageString[][] = [
                [{ fi: 'var2-val0' }, { fi: 'var4-val0' }],
                [{ fi: 'var2-val0' }, { fi: 'var4-val1' }],
                [{ fi: 'var2-val1' }, { fi: 'var4-val0' }],
                [{ fi: 'var2-val1' }, { fi: 'var4-val1' }]
            ];
            const expectedRowNameGroups: TMultiLanguageString[][] = [
                [{ fi: 'var3-val0' }], [{ fi: 'var3-val1' }]
            ];
            expect(values).toEqual(expected);
            const rowNameGroups = series.series.map(s => s.rowNameGroup);
            expect(rowNameGroups).toEqual(expectedRowNameGroups);
            expect(series.columnNameGroups).toEqual(expectedColumnNames);
        });

        it('returns the correct precisions with two content variable values of different precisions', () => {
            const variableConfigs = [
                { type: EVariableType.Content, valuesAmount: 2 },
                { type: EVariableType.Time, valuesAmount: 4 },
            ];
            const rowAndColumnIndexes = {
                columns: [1]
            };
            const pxGrafResponse: IQueryVisualizationResponse = generatePxGrafResponse(variableConfigs, rowAndColumnIndexes);
            const contentVariable: IVariableMeta = pxGrafResponse.metaData[0];
            contentVariable.values[0].contentComponent = createContentComponent({ numberOfDecimals: 1 });
            contentVariable.values[1].contentComponent = createContentComponent({ numberOfDecimals: 2 });
            const selectedValueCodes: TVariableSelections = {};
            const precisions: number[][] = buildSeries(pxGrafResponse, selectedValueCodes).series.map(s => s.series.map(d => d.precision));
            const expectedPrecisions: number[][] = [
                [1, 2, 1, 2],
                [1, 2, 1, 2]
            ];
            expect(precisions).toEqual(expectedPrecisions);
        });

        it('returns precision of 0 if content variable value has no precision', () => {
            const variableConfigs = [
                { type: EVariableType.Content, valuesAmount: 2 },
                { type: EVariableType.Time, valuesAmount: 4 },
            ];
            const rowAndColumnIndexes = {
                columns: [1]
            };
            const pxGrafResponse: IQueryVisualizationResponse = generatePxGrafResponse(variableConfigs, rowAndColumnIndexes);
            const contentVariable: IVariableMeta = pxGrafResponse.metaData[0];
            contentVariable.values[0].contentComponent = null;
            const selectedValueCodes: TVariableSelections = {};
            const precisions: number[][] = buildSeries(pxGrafResponse, selectedValueCodes).series.map(s => s.series.map(d => d.precision));
            const expectedPrecisions: number[][] = [
                [0, 0, 0, 0],
                [0, 0, 0, 0]
            ];
            expect(precisions).toEqual(expectedPrecisions);
        });

        it('time variable with some preliminary values returns the correct series', () => {
            const variableConfigs = [
                { type: EVariableType.Content, valuesAmount: 2 },
                { type: EVariableType.Time, valuesAmount: 4 },
            ];
            const rowAndColumnIndexes = {
                columns: [1]
            };
            const pxGrafResponse: IQueryVisualizationResponse = generatePxGrafResponse(variableConfigs, rowAndColumnIndexes);
            const selectedValueCodes: TVariableSelections = {};
            const timeVariable: IVariableMeta = pxGrafResponse.metaData[1];
            timeVariable.values[2].name = { fi: '2024Q3*', en: '2024Q3*', sv: '2024Q3*' };
            timeVariable.values[3].name = { fi: '2024Q4*', en: '2024Q4*', sv: '2024Q4*' };
            const preliminary: boolean[][] = buildSeries(pxGrafResponse, selectedValueCodes).series.map(s => s.series.map(d => d.preliminary));
            console.log(preliminary);
            const expected: boolean[][] = [
                [false, false, false, false],
                [true, true, true, true]
            ];
            expect(preliminary).toEqual(expected);
        });
    });
});

describe('horizontal bar chart view conversion', () => {
    it('returns a view sorted by ascending', () => {
        const resultView: View = convertPxGrafResponseToView(HORIZONTAL_BAR_CHART_ASCENDING, {});
        const expectedView: View = {
                tableReferenceName: "table.px",
                seriesType: ESeriesType.Nominal,
                visualizationSettings: {
                    defaultSelectableVariableCodes: {
                        "Huoneluku": [
                            "01",
                        ],
                        "Tiedot": [
                            "lkm",
                        ],
                    },
                    sorting: "ascending",
                    timeVariableIntervals: ETimeVariableInterval.Quarter,
                    visualizationType: EVisualizationType.HorizontalBarChart,
                },
                selectableVarNames: [],
                colVarNames: [
                    {
                        "en": "Region",
                        "fi": "Alue",
                        "sv": "Område",
                    },
                ],
                columnNameGroups: [
                    [
                        {
                            en: 'Turku',
                            fi: 'Turku',
                            sv: 'Åbo'
                        }
                    ],
                    [
                        {
                            en: 'Tampere',
                            fi: 'Tampere',
                            sv: 'Tammerfors'
                        }
                    ],
                    [
                        {
                            en: 'Helsinki',
                            fi: 'Helsinki',
                            sv: 'Helsingfors'
                        }
                    ]
                ],
                header: {
                    en: 'Number, One-room flat 2022Q4 by Region',
                    fi: 'Lukumäärä, Yksiöt 2022Q4 muuttujana Alue',
                    sv: 'Antal, Enrumslägenhet 2022Q4 efter Område'
                },
                rowVarNames: [],
                series: [
                    {
                        rowNameGroup: [],
                        series: [
                            { value: 5356, precision: 0, preliminary: false },
                            { value: 6786, precision: 0, preliminary: false },
                            { value: 13595, precision: 0, preliminary: false }
                        ]
                    }
                ],
                sources: [
                    {
                        en: 'PxVisualizer-en',
                        fi: 'PxVisualizer-fi',
                        sv: 'PxVisualizer-sv'
                    }
                ],
                subheaderValues: [],
                units: [
                    {
                        name: {
                            "en": "Number",
                            "fi": "Lukumäärä",
                            "sv": "Antal",
                        },
                        unit: {
                            en: 'number',
                            fi: 'lukumäärä',
                            sv: 'antal'
                        }
                    }
                ]
        };
        expect(resultView).toEqual(expectedView);
    });

    it('returns a correctly selected view', () => {
        const resultView: View = convertPxGrafResponseToView(HORIZONTAL_BAR_CHART_WITH_SELECTABLES, { 'Huoneluku': ['01'], 'Tiedot': ['lkm'] });
        const expectedView: View = {
                tableReferenceName: "table.px",
                seriesType: ESeriesType.Nominal,
                visualizationSettings: {
                    defaultSelectableVariableCodes: {
                        "Huoneluku": [
                            "01",
                        ],
                        "Tiedot": [
                            "lkm",
                        ],
                    },
                    sorting: "descending",
                    timeVariableIntervals: ETimeVariableInterval.Quarter,
                    visualizationType: EVisualizationType.HorizontalBarChart,
                },
                colVarNames: [
                    {
                        "en": "Region",
                        "fi": "Alue",
                        "sv": "Område",
                    },
                ],
                selectableVarNames: [
                    {
                        "en": "Number of rooms",
                        "fi": "Huoneluku",
                        "sv": "Antal rum",
                    },
                    {
                        "en": "Information",
                        "fi": "Tiedot",
                        "sv": "Uppgifter",
                    }
                ],
                columnNameGroups: [
                    [
                        {
                            en: 'Helsinki',
                            fi: 'Helsinki',
                            sv: 'Helsingfors'
                        }
                    ],
                    [
                        {
                            en: 'Tampere',
                            fi: 'Tampere',
                            sv: 'Tammerfors'
                        }
                    ],
                    [
                        {
                            en: 'Turku',
                            fi: 'Turku',
                            sv: 'Åbo'
                        }
                    ]
                ],
                header: {
                    en: 'Information 2022Q4 by Information, Region, Number of rooms',
                    fi: 'Tiedot 2022Q4 muuttujina Tiedot, Alue, Huoneluku',
                    sv: 'Uppgifter 2022Q4 efter Uppgifter, Område, Antal rum'
                },
                rowVarNames: [],
                series: [
                    {
                        rowNameGroup: [],
                        series: [
                            { value: 13595, precision: 0, preliminary: false},
                            { value: 6786, precision: 0, preliminary: false},
                            { value: 5356, precision: 0, preliminary: false }                         
                        ]
                    }
                ],
                sources: [
                    {
                        en: 'PxVisualizer-en',
                        fi: 'PxVisualizer-fi',
                        sv: 'PxVisualizer-sv'
                    }],
                subheaderValues: [
                    {
                        en: 'One-room flat',
                        fi: 'Yksiöt',
                        sv: 'Enrumslägenhet'
                    },
                    {
                        en: 'Number',
                        fi: 'Lukumäärä',
                        sv: 'Antal'
                    }
                ],
                units: [
                    {
                        name: {
                            "en": "Number",
                            "fi": "Lukumäärä",
                            "sv": "Antal",
                        },
                        unit: {
                            en: 'number',
                            fi: 'lukumäärä',
                            sv: 'antal'
                        }
                    }
                ]
        };
        expect(resultView).toEqual(expectedView);
    });

    it('returns a view sorted by sum', () => {
        const resultView: View = convertPxGrafResponseToView(GROUP_HORIZONTAL_BAR_CHART_WITH_SUM_SORTING, {});
        const expectedView: View = {
                tableReferenceName: "table.px",
                seriesType: ESeriesType.Nominal,
                visualizationSettings: {
                    defaultSelectableVariableCodes: null,
                    sorting: "sum",
                    timeVariableIntervals: ETimeVariableInterval.Year,
                    visualizationType: EVisualizationType.GroupHorizontalBarChart,
                },
                selectableVarNames: [],
                colVarNames: [
                    {
                        "en": "Greenhouse gas",
                        "fi": "Kasvihuonekaasu",
                        "sv": "Växthusgas",
                    },
                ],
                columnNameGroups: [
                    [
                        {
                            "en": "Carbon dioxide (CO2)",
                            "fi": "Hiilidioksidi (CO2)",
                            "sv": "Koldioksid (CO2)",
                        },
                    ],
                    [
                        {
                            "en": "Methane (CH4)",
                            "fi": "Metaani (CH4)",
                            "sv": "Metan (CH4)",
                        },
                    ],
                    [
                        {
                            "en": "Nitrous oxide (N2O)",
                            "fi": "Dityppioksidi (N2O)",
                            "sv": "Dikväveoksid (N2O)",
                        },
                    ],
                ],
                header: {
                    "en": "Emission, thousand tonnes of CO2 eq. 2020 by Emission category, Greenhouse gas",
                    "fi": "Päästö, tuhatta tonnia CO2-ekv. 2020 muuttujina Päästöluokka, Kasvihuonekaasu",
                    "sv": "Utsläpp, tusen ton CO2-ekv. 2020 efter Utsläppsklass, Växthusgas",
                },
                rowVarNames: [
                    {
                        "en": "Emission category",
                        "fi": "Päästöluokka",
                        "sv": "Utsläppsklass",
                    }
                ],
                series: [
                    {
                        rowNameGroup: [
                            {
                                "en": "1A3a Domestic aviation",
                                "fi": "1A3a Kotimaan lentoliikenne",
                                "sv": "1A3a Inrikes flygtrafik",
                            },
                        ],
                        series: [
                            { value: 86, precision: 0, preliminary: false},
                            { value: 0, precision: 0, preliminary: false},
                            { value: 1, precision: 0, preliminary: false }
                        ]
                    },
                    {
                        rowNameGroup: [
                            {
                                "en": "1A3b Road transportation",
                                "fi": "1A3b Tieliikenne",
                                "sv": "1A3b Vägtrafik",
                            },
                        ],
                        series: [
                            { value: 9845, precision: 0, preliminary: false },
                            { value: 8, precision: 0, preliminary: false },
                            { value: 82, precision: 0, preliminary: false }
                        ]
                    },
                    {
                        rowNameGroup: [
                            {
                                "en": "1A4bi Residential, stationary",
                                "fi": "1A4bi Kotitalouksien lämmitys",
                                "sv": "1A4bi Hushållen, egen uppvärmning av bostäder och lokaler",
                            },
                        ],
                        series: [
                            { value: 748, precision: 0, preliminary: false },
                            { value: 155, precision: 0, preliminary: false },
                            { value: 35, precision: 0, preliminary: false }
                        ]
                    },
                ],
                sources: [
                    {
                        "en": "PxVisualizer-en",
                        "fi": "PxVisualizer-fi",
                        "sv": "PxVisualizer-sv",
                    },
                ],
                subheaderValues: [],
                units: [
                    {
                        name: {
                            "en": "Emission, thousand tonnes of CO2 eq.",
                            "fi": "Päästö, tuhatta tonnia CO2-ekv.",
                            "sv": "Utsläpp, tusen ton CO2-ekv.",
                        },
                        unit: {
                            "en": "thousand tonnes of CO2 eq.",
                            "fi": "tuhatta tonnia CO2-ekv.",
                            "sv": "tusen ton CO2-ekv.",
                        },
                    }
                ],
        };
        expect(resultView).toEqual(expectedView);
    });

    it('returns a view with reversed sorting', () => {
        const resultView: View = convertPxGrafResponseToView(GROUP_HORIZONTAL_BAR_CHART_WITH_REVERSED_SORTING, {});
        const expectedView: View = {
            tableReferenceName: "table.px",
            seriesType: ESeriesType.Nominal,
            visualizationSettings: {
                defaultSelectableVariableCodes: null,
                sorting: "reversed",
                timeVariableIntervals: ETimeVariableInterval.Year,
                visualizationType: EVisualizationType.GroupHorizontalBarChart,
            },
            selectableVarNames: [],
            colVarNames: [
                {
                    "en": "Greenhouse gas",
                    "fi": "Kasvihuonekaasu",
                    "sv": "Växthusgas",
                },
            ],
            columnNameGroups: [
                [
                    {
                        "en": "Nitrous oxide (N2O)",
                        "fi": "Dityppioksidi (N2O)",
                        "sv": "Dikväveoksid (N2O)",
                    },
                ],
                [
                    {
                        "en": "Methane (CH4)",
                        "fi": "Metaani (CH4)",
                        "sv": "Metan (CH4)",
                    },
                ],
                [
                    {
                        "en": "Carbon dioxide (CO2)",
                        "fi": "Hiilidioksidi (CO2)",
                        "sv": "Koldioksid (CO2)",
                    },
                ],
            ],
            header: {
                "en": "Emission, thousand tonnes of CO2 eq. 2020 by Emission category, Greenhouse gas",
                "fi": "Päästö, tuhatta tonnia CO2-ekv. 2020 muuttujina Päästöluokka, Kasvihuonekaasu",
                "sv": "Utsläpp, tusen ton CO2-ekv. 2020 efter Utsläppsklass, Växthusgas",
            },
            rowVarNames: [
                {
                    "en": "Emission category",
                    "fi": "Päästöluokka",
                    "sv": "Utsläppsklass",
                }
            ],
            series: [
                {
                    rowNameGroup: [
                        {
                            "en": "1A4bi Residential, stationary",
                            "fi": "1A4bi Kotitalouksien lämmitys",
                            "sv": "1A4bi Hushållen, egen uppvärmning av bostäder och lokaler",
                        },
                    ],
                    series: [
                        { value: 35, precision: 0, preliminary: false },
                        { value: 155, precision: 0, preliminary: false },
                        { value: 748, precision: 0, preliminary: false }
                    ]
                },
                {
                    rowNameGroup: [
                        {
                            "en": "1A3b Road transportation",
                            "fi": "1A3b Tieliikenne",
                            "sv": "1A3b Vägtrafik",
                        },
                    ],
                    series: [
                        { value: 82, precision: 0, preliminary: false },
                        { value: 8, precision: 0, preliminary: false },
                        { value: 9845, precision: 0, preliminary: false }
                    ]
                },
                {
                    rowNameGroup: [
                        {
                            "en": "1A3a Domestic aviation",
                            "fi": "1A3a Kotimaan lentoliikenne",
                            "sv": "1A3a Inrikes flygtrafik",
                        },
                    ],
                    series: [
                        { value: 1, precision: 0, preliminary: false },
                        { value: 0, precision: 0, preliminary: false },
                        { value: 86, precision: 0, preliminary: false }
                    ]
                },
            ],
            sources: [
                {
                    "en": "PxVisualizer-en",
                    "fi": "PxVisualizer-fi",
                    "sv": "PxVisualizer-sv",
                },
            ],
            subheaderValues: [],
            units: [
                {
                    name: {
                        "en": "Emission, thousand tonnes of CO2 eq.",
                        "fi": "Päästö, tuhatta tonnia CO2-ekv.",
                        "sv": "Utsläpp, tusen ton CO2-ekv.",
                    },
                    unit: {
                        "en": "thousand tonnes of CO2 eq.",
                        "fi": "tuhatta tonnia CO2-ekv.",
                        "sv": "tusen ton CO2-ekv.",
                    },
                }
            ],
        };
        expect(resultView).toEqual(expectedView);
    });

    it('Every cell in series should preliminary true if series rowNameGroup contains preliminary data series', () => {
        const view = convertPxGrafResponseToView(GROUP_HORIZONTAL_BAR_CHART_WITH_PRELIMINARY_DATA_SET.pxGraphData, {});
        expect(view.series[0].series.every(d => d.preliminary)).toBeFalsy();
        expect(view.series[1].series.every(d => d.preliminary)).toBeTruthy();
    });
});

describe('line chart view conversion', () => {
    it('returns multiline linechart view', () => {
        const resultView: View = convertPxGrafResponseToView(LINE_CHART_WITH_QUARTER_SERIES.pxGraphData, {});
        const expectedView: View = {

                tableReferenceName: "table.px",
                seriesType: ESeriesType.Time,
                visualizationSettings: {
                    "cutValueAxis": false,
                    "timeSeriesStartingPoint": "2015-01-01T00:00:00",
                    timeVariableIntervals: ETimeVariableInterval.Quarter,
                    visualizationType: EVisualizationType.LineChart
                },
                selectableVarNames: [],
                colVarNames: [
                    {
                        "en": "Quarter",
                        "fi": "Vuosineljännes",
                        "sv": "Kvartal"
                    }
                ],
                rowVarNames: [
                    {
                        "en": "Region",
                        "fi": "Alue",
                        "sv": "Område"
                    }
                ],
                columnNameGroups: [
                    [
                        {
                            "en": "2015Q1",
                            "fi": "2015Q1",
                            "sv": "2015Q1",
                        }
                    ],
                    [
                        {
                            "en": "2015Q2",
                            "fi": "2015Q2",
                            "sv": "2015Q2",
                        }
                    ],
                    [
                        {
                            "en": "2015Q3",
                            "fi": "2015Q3",
                            "sv": "2015Q3",
                        }
                    ],
                    [
                        {

                            "en": "2015Q4",
                            "fi": "2015Q4",
                            "sv": "2015Q4",
                        }
                    ],
                    [
                        {

                            "en": "2016Q1",
                            "fi": "2016Q1",
                            "sv": "2016Q1",
                        }
                    ],
                    [
                        {

                            "en": "2016Q2",
                            "fi": "2016Q2",
                            "sv": "2016Q2",
                        }
                    ],
                    [
                        {
                            "en": "2016Q3",
                            "fi": "2016Q3",
                            "sv": "2016Q3",
                        }
                    ],
                    [
                        {
                            "en": "2016Q4",
                            "fi": "2016Q4",
                            "sv": "2016Q4",
                        }
                    ],
                    [
                        {
                            "en": "2017Q1",
                            "fi": "2017Q1",
                            "sv": "2017Q1",
                        }
                    ],
                    [
                        {
                            "en": "2017Q2",
                            "fi": "2017Q2",
                            "sv": "2017Q2",
                        }
                    ],
                    [
                        {
                            "en": "2017Q3",
                            "fi": "2017Q3",
                            "sv": "2017Q3",
                        }
                    ],
                    [
                        {
                            "en": "2017Q4",
                            "fi": "2017Q4",
                            "sv": "2017Q4",
                        }
                    ],
                    [
                        {
                            "en": "2018Q1",
                            "fi": "2018Q1",
                            "sv": "2018Q1",
                        }
                    ],
                    [
                        {
                            "en": "2018Q2",
                            "fi": "2018Q2",
                            "sv": "2018Q2",
                        }
                    ],
                    [
                        {
                            "en": "2018Q3",
                            "fi": "2018Q3",
                            "sv": "2018Q3",
                        }
                    ],
                    [
                        {
                            "en": "2018Q4",
                            "fi": "2018Q4",
                            "sv": "2018Q4",
                        }
                    ],
                    [
                        {
                            "en": "2019Q1",
                            "fi": "2019Q1",
                            "sv": "2019Q1",
                        }
                    ],
                    [
                        {
                            "en": "2019Q2",
                            "fi": "2019Q2",
                            "sv": "2019Q2",
                        }
                    ],
                    [
                        {
                            "en": "2019Q3",
                            "fi": "2019Q3",
                            "sv": "2019Q3",
                        }
                    ],
                    [
                        {
                            "en": "2019Q4",
                            "fi": "2019Q4",
                            "sv": "2019Q4",
                        }
                    ],
                    [
                        {
                            "en": "2020Q1",
                            "fi": "2020Q1",
                            "sv": "2020Q1",
                        }
                    ],
                    [
                        {
                            "en": "2020Q2",
                            "fi": "2020Q2",
                            "sv": "2020Q2",
                        }
                    ],
                    [
                        {
                            "en": "2020Q3",
                            "fi": "2020Q3",
                            "sv": "2020Q3",
                        }
                    ],
                    [
                        {
                            "en": "2020Q4",
                            "fi": "2020Q4",
                            "sv": "2020Q4",
                        }
                    ],
                    [
                        {
                            "en": "2021Q1",
                            "fi": "2021Q1",
                            "sv": "2021Q1",
                        }
                    ],
                    [
                        {
                            "en": "2021Q2",
                            "fi": "2021Q2",
                            "sv": "2021Q2",
                        }
                    ],
                    [
                        {
                            "en": "2021Q3",
                            "fi": "2021Q3",
                            "sv": "2021Q3",
                        }
                    ],
                    [
                        {
                            "en": "2021Q4",
                            "fi": "2021Q4",
                            "sv": "2021Q4",
                        }
                    ],
                    [
                        {
                            "en": "2022Q1",
                            "fi": "2022Q1",
                            "sv": "2022Q1",
                        }
                    ],
                    [
                        {
                            "en": "2022Q2",
                            "fi": "2022Q2",
                            "sv": "2022Q2",
                        }
                    ],
                    [
                        {
                            "en": "2022Q3",
                            "fi": "2022Q3",
                            "sv": "2022Q3",
                        }
                    ],
                    [
                        {
                            "en": "2022Q4",
                            "fi": "2022Q4",
                            "sv": "2022Q4",
                        }
                    ]
                ],
                header: {
                    "en": "Rents per square meter (eur/m2), One-room flat, Non subsidised 2015Q1-2022Q4 by Region",
                    "fi": "Neliövuokra (eur/m2), Yksiöt, Vapaarahoitteinen 2015Q1-2022Q4 muuttujana Alue",
                    "sv": "Kvadratmeterspris (eur/m2), Enrumslägenhet, Fri finansierad 2015Q1-2022Q4 efter Område",
                },
                "series": [
                    {
                        "rowNameGroup": [
                            {
                                "en": "Helsinki",
                                "fi": "Helsinki",
                                "sv": "Helsingfors",
                            },
                        ],
                        "series": [
                            { value: 22.68, precision: 2, preliminary: false },
                            { value: 22.87, precision: 2, preliminary: false },
                            { value: 23.10, precision: 2, preliminary: false },
                            { value: 23.23, precision: 2, preliminary: false },
                            { value: 23.50, precision: 2, preliminary: false },
                            { value: 23.68, precision: 2, preliminary: false },
                            { value: 23.78, precision: 2, preliminary: false },
                            { value: 23.89, precision: 2, preliminary: false },
                            { value: 24.07, precision: 2, preliminary: false },
                            { value: 24.08, precision: 2, preliminary: false },
                            { value: 24.45, precision: 2, preliminary: false },
                            { value: 24.55, precision: 2, preliminary: false },
                            { value: 24.54, precision: 2, preliminary: false },
                            { value: 24.65, precision: 2, preliminary: false },
                            { value: 24.72, precision: 2, preliminary: false },
                            { value: 25.13, precision: 2, preliminary: false },
                            { value: 25.09, precision: 2, preliminary: false },
                            { value: 25.22, precision: 2, preliminary: false },
                            { value: 25.44, precision: 2, preliminary: false },
                            { value: 25.87, precision: 2, preliminary: false },
                            { value: 26.15, precision: 2, preliminary: false },
                            { value: 26.27, precision: 2, preliminary: false },
                            { value: 26.36, precision: 2, preliminary: false },
                            { value: 26.51,precision: 2, preliminary: false },
                            { value: 26.59,precision: 2, preliminary: false },
                            { value: 26.68,precision: 2, preliminary: false },
                            { value: 26.72,precision: 2, preliminary: false },
                            { value: 26.75,precision: 2, preliminary: false },
                            { value: 26.64,precision: 2, preliminary: false },
                            { value: 26.82,precision: 2, preliminary: false },
                            { value: 26.93,precision: 2, preliminary: false },
                            { value: 26.93, precision: 2, preliminary: false }
                        ]
                    },
                    {
                        "rowNameGroup": [
                            {
                                "en": "Turku",
                                "fi": "Turku",
                                "sv": "Åbo",
                            },
                        ],
                        "series": [
                            { value: 15.15, precision: 2, preliminary: false },
                            { value: 15.18, precision: 2, preliminary: false },
                            { value: 15.32, precision: 2, preliminary: false },
                            { value: 15.41, precision: 2, preliminary: false },
                            { value: 15.56, precision: 2, preliminary: false },
                            { value: 15.58, precision: 2, preliminary: false },
                            { value: 15.72, precision: 2, preliminary: false },
                            { value: 15.80, precision: 2, preliminary: false },
                            { value: 15.96, precision: 2, preliminary: false },
                            { value: 15.93, precision: 2, preliminary: false },
                            { value: 16.11, precision: 2, preliminary: false },
                            { value: 16.24, precision: 2, preliminary: false },
                            { value: 16.18, precision: 2, preliminary: false },
                            { value: 16.25, precision: 2, preliminary: false },
                            { value: 16.40, precision: 2, preliminary: false },
                            { value: 16.68, precision: 2, preliminary: false },
                            { value: 16.62, precision: 2, preliminary: false },
                            { value: 16.71, precision: 2, preliminary: false },
                            { value: 16.83, precision: 2, preliminary: false },
                            { value: 17.20, precision: 2, preliminary: false },
                            { value: 17.45, precision: 2, preliminary: false },
                            { value: 17.48, precision: 2, preliminary: false },
                            { value: 17.57, precision: 2, preliminary: false },
                            { value: 17.64, precision: 2, preliminary: false },
                            { value: 17.76, precision: 2, preliminary: false },
                            { value: 17.88, precision: 2, preliminary: false },
                            { value: 17.95, precision: 2, preliminary: false },
                            { value: 18.01, precision: 2, preliminary: false },
                            { value: 18.16, precision: 2, preliminary: false },
                            { value: 18.32, precision: 2, preliminary: false },
                            { value: 18.44, precision: 2, preliminary: false },
                            { value: 18.53, precision: 2, preliminary: false }
                        ]
                    },
                    {
                        "rowNameGroup": [
                            {
                                "en": "Tampere",
                                "fi": "Tampere",
                                "sv": "Tammerfors",
                            },
                        ],
                        "series": [
                            { value: 16.34, precision: 2, preliminary: false },
                            { value: 16.38, precision: 2, preliminary: false },
                            { value: 16.49, precision: 2, preliminary: false },
                            { value: 16.54, precision: 2, preliminary: false },
                            { value: 16.32, precision: 2, preliminary: false },
                            { value: 16.70, precision: 2, preliminary: false },
                            { value: 16.92, precision: 2, preliminary: false },
                            { value: 16.98, precision: 2, preliminary: false },
                            { value: 17.48, precision: 2, preliminary: false },
                            { value: 17.58, precision: 2, preliminary: false },
                            { value: 17.67, precision: 2, preliminary: false },
                            { value: 17.71, precision: 2, preliminary: false },
                            { value: 17.48, precision: 2, preliminary: false },
                            { value: 17.62, precision: 2, preliminary: false },
                            { value: 17.71, precision: 2, preliminary: false },
                            { value: 17.91, precision: 2, preliminary: false },
                            { value: 17.90, precision: 2, preliminary: false },
                            { value: 17.97, precision: 2, preliminary: false },
                            { value: 18.11, precision: 2, preliminary: false },
                            { value: 18.33, precision: 2, preliminary: false },
                            { value: 18.59, precision: 2, preliminary: false },
                            { value: 18.61, precision: 2, preliminary: false },
                            { value: 18.70, precision: 2, preliminary: false },
                            { value: 18.78, precision: 2, preliminary: false },
                            { value: 18.93, precision: 2, preliminary: false },
                            { value: 19.14, precision: 2, preliminary: false },
                            { value: 19.20, precision: 2, preliminary: false },
                            { value: 19.21, precision: 2, preliminary: false },
                            { value: 19.39, precision: 2, preliminary: false },
                            { value: 19.60, precision: 2, preliminary: false },
                            { value: 19.73, precision: 2, preliminary: false },
                            { value: 19.87, precision: 2, preliminary: false }
                        ]
                    },
                ],
                sources: [
                    {
                        en: 'PxVisualizer-en',
                        fi: 'PxVisualizer-fi',
                        sv: 'PxVisualizer-sv'
                    }
                ],
                subheaderValues: [],
                units: [
                    {
                        name: {
                            "en": "Rents per square meter (eur/m2)",
                            "fi": "Neliövuokra (eur/m2)",
                            "sv": "Kvadratmeterspris (eur/m2)",
                        },
                        unit: {
                            "en": "eur / m2",
                            "fi": "eur / m2",
                            "sv": "eur / m2"
                        }
                    }
                ]
        };
        expect(resultView).toEqual(expectedView);
    });

    it('returns a view with combination lines', () => {
        const resultView: View = convertPxGrafResponseToView(LINE_CHART_WITH_COMBINATION_SERIES.pxGraphData, {});
        const expectedView: View = {
            
                tableReferenceName: "table.px",
                seriesType: ESeriesType.Time,
                visualizationSettings: {
                    cutValueAxis: false,
                    timeSeriesStartingPoint: "2015-01-01T00:00:00",
                    timeVariableIntervals: ETimeVariableInterval.Quarter,
                    visualizationType: EVisualizationType.LineChart,
                },
                selectableVarNames: [],
                colVarNames: [
                    {
                        "en": "Quarter",
                        "fi": "Vuosineljännes",
                        "sv": "Kvartal",
                    }
                ],
                rowVarNames: [
                    {
                        "en": "Region",
                        "fi": "Alue",
                        "sv": "Område",
                    },
                    {
                        "en": "Number of rooms",
                        "fi": "Huoneluku",
                        "sv": "Antal rum"
                    },
                ],
                columnNameGroups: [
                    [
                        {
                            "en": "2015Q1",
                            "fi": "2015Q1",
                            "sv": "2015Q1",
                        }
                    ],
                    [
                        {
                            "en": "2015Q2",
                            "fi": "2015Q2",
                            "sv": "2015Q2",
                        }
                    ],
                    [
                        {
                            "en": "2015Q3",
                            "fi": "2015Q3",
                            "sv": "2015Q3",
                        }
                    ],
                    [
                        {

                            "en": "2015Q4",
                            "fi": "2015Q4",
                            "sv": "2015Q4",
                        }
                    ],
                    [
                        {

                            "en": "2016Q1",
                            "fi": "2016Q1",
                            "sv": "2016Q1",
                        }
                    ],
                    [
                        {

                            "en": "2016Q2",
                            "fi": "2016Q2",
                            "sv": "2016Q2",
                        }
                    ],
                    [
                        {
                            "en": "2016Q3",
                            "fi": "2016Q3",
                            "sv": "2016Q3",
                        }
                    ],
                    [
                        {
                            "en": "2016Q4",
                            "fi": "2016Q4",
                            "sv": "2016Q4",
                        }
                    ],
                    [
                        {
                            "en": "2017Q1",
                            "fi": "2017Q1",
                            "sv": "2017Q1",
                        }
                    ],
                    [
                        {
                            "en": "2017Q2",
                            "fi": "2017Q2",
                            "sv": "2017Q2",
                        }
                    ],
                    [
                        {
                            "en": "2017Q3",
                            "fi": "2017Q3",
                            "sv": "2017Q3",
                        }
                    ],
                    [
                        {
                            "en": "2017Q4",
                            "fi": "2017Q4",
                            "sv": "2017Q4",
                        }
                    ],
                    [
                        {
                            "en": "2018Q1",
                            "fi": "2018Q1",
                            "sv": "2018Q1",
                        }
                    ],
                    [
                        {
                            "en": "2018Q2",
                            "fi": "2018Q2",
                            "sv": "2018Q2",
                        }
                    ],
                    [
                        {
                            "en": "2018Q3",
                            "fi": "2018Q3",
                            "sv": "2018Q3",
                        }
                    ],
                    [
                        {
                            "en": "2018Q4",
                            "fi": "2018Q4",
                            "sv": "2018Q4",
                        }
                    ],
                    [
                        {
                            "en": "2019Q1",
                            "fi": "2019Q1",
                            "sv": "2019Q1",
                        }
                    ],
                    [
                        {
                            "en": "2019Q2",
                            "fi": "2019Q2",
                            "sv": "2019Q2",
                        }
                    ],
                    [
                        {
                            "en": "2019Q3",
                            "fi": "2019Q3",
                            "sv": "2019Q3",
                        }
                    ],
                    [
                        {
                            "en": "2019Q4",
                            "fi": "2019Q4",
                            "sv": "2019Q4",
                        }
                    ],
                    [
                        {
                            "en": "2020Q1",
                            "fi": "2020Q1",
                            "sv": "2020Q1",
                        }
                    ],
                    [
                        {
                            "en": "2020Q2",
                            "fi": "2020Q2",
                            "sv": "2020Q2",
                        }
                    ],
                    [
                        {
                            "en": "2020Q3",
                            "fi": "2020Q3",
                            "sv": "2020Q3",
                        }
                    ],
                    [
                        {
                            "en": "2020Q4",
                            "fi": "2020Q4",
                            "sv": "2020Q4",
                        }
                    ],
                    [
                        {
                            "en": "2021Q1",
                            "fi": "2021Q1",
                            "sv": "2021Q1",
                        }
                    ],
                    [
                        {
                            "en": "2021Q2",
                            "fi": "2021Q2",
                            "sv": "2021Q2",
                        }
                    ],
                    [
                        {
                            "en": "2021Q3",
                            "fi": "2021Q3",
                            "sv": "2021Q3",
                        }
                    ],
                    [
                        {
                            "en": "2021Q4",
                            "fi": "2021Q4",
                            "sv": "2021Q4",
                        }
                    ],
                    [
                        {
                            "en": "2022Q1",
                            "fi": "2022Q1",
                            "sv": "2022Q1",
                        }
                    ],
                    [
                        {
                            "en": "2022Q2",
                            "fi": "2022Q2",
                            "sv": "2022Q2",
                        }
                    ],
                    [
                        {
                            "en": "2022Q3",
                            "fi": "2022Q3",
                            "sv": "2022Q3",
                        }
                    ],
                    [
                        {
                            "en": "2022Q4",
                            "fi": "2022Q4",
                            "sv": "2022Q4",
                        }
                    ]
                ],
                header: {
                    "en": "Rents per square meter (eur/m2), Non subsidised 2015Q1-2022Q4 by Region, Number of rooms",
                    "fi": "Neliövuokra (eur/m2), Vapaarahoitteinen 2015Q1-2022Q4 muuttujina Alue, Huoneluku",
                    "sv": "Kvadratmeterspris (eur/m2), Fri finansierad 2015Q1-2022Q4 efter Område, Antal rum",
                },
                series: [
                    {
                        rowNameGroup: [
                            {
                                "en": "Helsinki",
                                "fi": "Helsinki",
                                "sv": "Helsingfors"
                            },
                            {
                                "en": "One-room flat",
                                "fi": "Yksiöt",
                                "sv": "Enrumslägenhet"
                            }
                        ],
                        series: [
                            { value: 22.68, precision: 2, preliminary: false },
                            { value: 22.87, precision: 2, preliminary: false },
                            { value: 23.10, precision: 2, preliminary: false },
                            { value: 23.23, precision: 2, preliminary: false },
                            { value: 23.50, precision: 2, preliminary: false },
                            { value: 23.68, precision: 2, preliminary: false },
                            { value: 23.78, precision: 2, preliminary: false },
                            { value: 23.89, precision: 2, preliminary: false },
                            { value: 24.07, precision: 2, preliminary: false },
                            { value: 24.08, precision: 2, preliminary: false },
                            { value: 24.45, precision: 2, preliminary: false },
                            { value: 24.55, precision: 2, preliminary: false },
                            { value: 24.54, precision: 2, preliminary: false },
                            { value: 24.65, precision: 2, preliminary: false },
                            { value: 24.72, precision: 2, preliminary: false },
                            { value: 25.13, precision: 2, preliminary: false },
                            { value: 25.09, precision: 2, preliminary: false },
                            { value: 25.22, precision: 2, preliminary: false },
                            { value: 25.44, precision: 2, preliminary: false },
                            { value: 25.87, precision: 2, preliminary: false },
                            { value: 26.15, precision: 2, preliminary: false },
                            { value: 26.27, precision: 2, preliminary: false },
                            { value: 26.36, precision: 2, preliminary: false },
                            { value: 26.51, precision: 2, preliminary: false },
                            { value: 26.59, precision: 2, preliminary: false },
                            { value: 26.68, precision: 2, preliminary: false },
                            { value: 26.72, precision: 2, preliminary: false },
                            { value: 26.75, precision: 2, preliminary: false },
                            { value: 26.64, precision: 2, preliminary: false },
                            { value: 26.82, precision: 2, preliminary: false },
                            { value: 26.93, precision: 2, preliminary: false },
                            { value: 26.93, precision: 2, preliminary: false }
                        ]
                    },
                    {
                        "rowNameGroup": [
                            {
                                "en": "Helsinki",
                                "fi": "Helsinki",
                                "sv": "Helsingfors",
                            },
                            {
                                "en": "Two-room flat",
                                "fi": "Kaksiot",
                                "sv": "Tvårumslägenhet",
                            }
                        ],
                        "series": [
                            { value: 15.77, precision: 2, preliminary: false },
                            { value: 15.95, precision: 2, preliminary: false },
                            { value: 16.12, precision: 2, preliminary: false },
                            { value: 16.04, precision: 2, preliminary: false },
                            { value: 16.40, precision: 2, preliminary: false },
                            { value: 16.71, precision: 2, preliminary: false },
                            { value: 16.85, precision: 2, preliminary: false },
                            { value: 16.82, precision: 2, preliminary: false },
                            { value: 17.14, precision: 2, preliminary: false },
                            { value: 17.30, precision: 2, preliminary: false },
                            { value: 18.63, precision: 2, preliminary: false },
                            { value: 18.93, precision: 2, preliminary: false },
                            { value: 18.68, precision: 2, preliminary: false },
                            { value: 18.71, precision: 2, preliminary: false },
                            { value: 18.83, precision: 2, preliminary: false },
                            { value: 19.11, precision: 2, preliminary: false },
                            { value: 18.90, precision: 2, preliminary: false },
                            { value: 19.02, precision: 2, preliminary: false },
                            { value: 19.21, precision: 2, preliminary: false },
                            { value: 19.72, precision: 2, preliminary: false },
                            { value: 19.85, precision: 2, preliminary: false },
                            { value: 19.92, precision: 2, preliminary: false },
                            { value: 20.02, precision: 2, preliminary: false },
                            { value: 20.10, precision: 2, preliminary: false },
                            { value: 20.01, precision: 2, preliminary: false },
                            { value: 20.14, precision: 2, preliminary: false },
                            { value: 20.21, precision: 2, preliminary: false },
                            { value: 20.19, precision: 2, preliminary: false },
                            { value: 20.22, precision: 2, preliminary: false },
                            { value: 20.45, precision: 2, preliminary: false },
                            { value: 20.59, precision: 2, preliminary: false },
                            { value: 20.66, precision: 2, preliminary: false }
                        ]
                    },
                    {
                        "rowNameGroup": [
                            {
                                "en": "Helsinki",
                                "fi": "Helsinki",
                                "sv": "Helsingfors",
                            },
                            {
                                "en": "Three-room flat+",
                                "fi": "Kolmiot+",
                                "sv": "Trerumslägenhet+",
                            }
                        ],
                        "series": [
                            { value: 14.69, precision: 2, preliminary: false },
                            { value: 14.80, precision: 2, preliminary: false },
                            { value: 14.85, precision: 2, preliminary: false },
                            { value: 14.77, precision: 2, preliminary: false },
                            { value: 15.26, precision: 2, preliminary: false },
                            { value: 15.58, precision: 2, preliminary: false },
                            { value: 15.80, precision: 2, preliminary: false },
                            { value: 15.66, precision: 2, preliminary: false },
                            { value: 16.04, precision: 2, preliminary: false },
                            { value: 16.17, precision: 2, preliminary: false },
                            { value: 17.00, precision: 2, preliminary: false },
                            { value: 17.07, precision: 2, preliminary: false },
                            { value: 16.58, precision: 2, preliminary: false },
                            { value: 16.66, precision: 2, preliminary: false },
                            { value: 16.76, precision: 2, preliminary: false },
                            { value: 17.28, precision: 2, preliminary: false },
                            { value: 16.95, precision: 2, preliminary: false },
                            { value: 17.11, precision: 2, preliminary: false },
                            { value: 17.16, precision: 2, preliminary: false },
                            { value: 17.69, precision: 2, preliminary: false },
                            { value: 17.88, precision: 2, preliminary: false },
                            { value: 18.06, precision: 2, preliminary: false },
                            { value: 18.12, precision: 2, preliminary: false },
                            { value: 18.11, precision: 2, preliminary: false },
                            { value: 18.02, precision: 2, preliminary: false },
                            { value: 18.19, precision: 2, preliminary: false },
                            { value: 18.42, precision: 2, preliminary: false },
                            { value: 18.41, precision: 2, preliminary: false },
                            { value: 18.43, precision: 2, preliminary: false },
                            { value: 18.75, precision: 2, preliminary: false },
                            { value: 19.04, precision: 2, preliminary: false },
                            { value: 19.13, precision: 2, preliminary: false }
                        ]
                    },
                    {
                        rowNameGroup: [
                            {
                                "en": "Turku",
                                "fi": "Turku",
                                "sv": "Åbo",
                            },
                            {
                                "en": "One-room flat",
                                "fi": "Yksiöt",
                                "sv": "Enrumslägenhet",
                            }
                        ],
                        series: [
                            { value: 15.15, precision: 2, preliminary: false },
                            { value: 15.18, precision: 2, preliminary: false },
                            { value: 15.32, precision: 2, preliminary: false },
                            { value: 15.41, precision: 2, preliminary: false },
                            { value: 15.56, precision: 2, preliminary: false },
                            { value: 15.58, precision: 2, preliminary: false },
                            { value: 15.72, precision: 2, preliminary: false },
                            { value: 15.80, precision: 2, preliminary: false },
                            { value: 15.96, precision: 2, preliminary: false },
                            { value: 15.93, precision: 2, preliminary: false },
                            { value: 16.11, precision: 2, preliminary: false },
                            { value: 16.24, precision: 2, preliminary: false },
                            { value: 16.18, precision: 2, preliminary: false },
                            { value: 16.25, precision: 2, preliminary: false },
                            { value: 16.40, precision: 2, preliminary: false },
                            { value: 16.68, precision: 2, preliminary: false },
                            { value: 16.62, precision: 2, preliminary: false },
                            { value: 16.71, precision: 2, preliminary: false },
                            { value: 16.83, precision: 2, preliminary: false },
                            { value: 17.20, precision: 2, preliminary: false },
                            { value: 17.45, precision: 2, preliminary: false },
                            { value: 17.48, precision: 2, preliminary: false },
                            { value: 17.57, precision: 2, preliminary: false },
                            { value: 17.64, precision: 2, preliminary: false },
                            { value: 17.76, precision: 2, preliminary: false },
                            { value: 17.88, precision: 2, preliminary: false },
                            { value: 17.95, precision: 2, preliminary: false },
                            { value: 18.01, precision: 2, preliminary: false },
                            { value: 18.16, precision: 2, preliminary: false },
                            { value: 18.32, precision: 2, preliminary: false },
                            { value: 18.44, precision: 2, preliminary: false },
                            { value: 18.53, precision: 2, preliminary: false }
                        ]
                    },
                    {
                        "rowNameGroup": [
                            {
                                "en": "Turku",
                                "fi": "Turku",
                                "sv": "Åbo",
                            },
                            {
                                "en": "Two-room flat",
                                "fi": "Kaksiot",
                                "sv": "Tvårumslägenhet",
                            }
                        ],
                        "series": [
                            { value: 10.50, precision: 2, preliminary: false },
                            { value: 10.57, precision: 2, preliminary: false },
                            { value: 10.65, precision: 2, preliminary: false },
                            { value: 10.64, precision: 2, preliminary: false },
                            { value: 10.85, precision: 2, preliminary: false },
                            { value: 11.10, precision: 2, preliminary: false },
                            { value: 11.23, precision: 2, preliminary: false },
                            { value: 11.24, precision: 2, preliminary: false },
                            { value: 11.42, precision: 2, preliminary: false },
                            { value: 11.44, precision: 2, preliminary: false },
                            { value: 12.53, precision: 2, preliminary: false },
                            { value: 12.83, precision: 2, preliminary: false },
                            { value: 12.67, precision: 2, preliminary: false },
                            { value: 12.74, precision: 2, preliminary: false },
                            { value: 12.79, precision: 2, preliminary: false },
                            { value: 13.12, precision: 2, preliminary: false },
                            { value: 12.93, precision: 2, preliminary: false },
                            { value: 13.00, precision: 2, preliminary: false },
                            { value: 13.11, precision: 2, preliminary: false },
                            { value: 13.52, precision: 2, preliminary: false },
                            { value: 13.57, precision: 2, preliminary: false },
                            { value: 13.61, precision: 2, preliminary: false },
                            { value: 13.65, precision: 2, preliminary: false },
                            { value: 13.73, precision: 2, preliminary: false },
                            { value: 13.76, precision: 2, preliminary: false },
                            { value: 13.88, precision: 2, preliminary: false },
                            { value: 13.93, precision: 2, preliminary: false },
                            { value: 13.98, precision: 2, preliminary: false },
                            { value: 14.07, precision: 2, preliminary: false },
                            { value: 14.27, precision: 2, preliminary: false },
                            { value: 14.37, precision: 2, preliminary: false },
                            { value: 14.48, precision: 2, preliminary: false }
                        ]
                    },
                    {
                        "rowNameGroup": [
                            {
                                "en": "Turku",
                                "fi": "Turku",
                                "sv": "Åbo",
                            },
                            {
                                "en": "Three-room flat+",
                                "fi": "Kolmiot+",
                                "sv": "Trerumslägenhet+",
                            },
                        ],
                        "series": [
                            { value: 9.65, precision: 2, preliminary: false },
                            { value: 9.76, precision: 2, preliminary: false },
                            { value: 9.79, precision: 2, preliminary: false },
                            { value: 9.81, precision: 2, preliminary: false },
                            { value: 9.99, precision: 2, preliminary: false },
                            { value: 10.10, precision: 2, preliminary: false },
                            { value: 10.23, precision: 2, preliminary: false },
                            { value: 10.26, precision: 2, preliminary: false },
                            { value: 10.51, precision: 2, preliminary: false },
                            { value: 10.43, precision: 2, preliminary: false },
                            { value: 10.89, precision: 2, preliminary: false },
                            { value: 11.03, precision: 2, preliminary: false },
                            { value: 10.88, precision: 2, preliminary: false },
                            { value: 10.92, precision: 2, preliminary: false },
                            { value: 10.96, precision: 2, preliminary: false },
                            { value: 11.26, precision: 2, preliminary: false },
                            { value: 11.10, precision: 2, preliminary: false },
                            { value: 11.21, precision: 2, preliminary: false },
                            { value: 11.25, precision: 2, preliminary: false },
                            { value: 11.51, precision: 2, preliminary: false },
                            { value: 11.48, precision: 2, preliminary: false },
                            { value: 11.52, precision: 2, preliminary: false },
                            { value: 11.62, precision: 2, preliminary: false },
                            { value: 11.65, precision: 2, preliminary: false },
                            { value: 11.65, precision: 2, preliminary: false },
                            { value: 11.83, precision: 2, preliminary: false },
                            { value: 11.98, precision: 2, preliminary: false },
                            { value: 12.02, precision: 2, preliminary: false },
                            { value: 12.27, precision: 2, preliminary: false },
                            { value: 12.65, precision: 2, preliminary: false },
                            { value: 12.78, precision: 2, preliminary: false },
                            { value: 12.87, precision: 2, preliminary: false }
                        ]
                    },
                    {
                        rowNameGroup: [
                            {
                                "en": "Tampere",
                                "fi": "Tampere",
                                "sv": "Tammerfors",
                            },
                            {
                                "en": "One-room flat",
                                "fi": "Yksiöt",
                                "sv": "Enrumslägenhet",
                            }
                        ],
                        series: [
                            { value: 16.34, precision: 2, preliminary: false },
                            { value: 16.38, precision: 2, preliminary: false },
                            { value: 16.49, precision: 2, preliminary: false },
                            { value: 16.54, precision: 2, preliminary: false },
                            { value: 16.32, precision: 2, preliminary: false },
                            { value: 16.70, precision: 2, preliminary: false },
                            { value: 16.92, precision: 2, preliminary: false },
                            { value: 16.98, precision: 2, preliminary: false },
                            { value: 17.48, precision: 2, preliminary: false },
                            { value: 17.58, precision: 2, preliminary: false },
                            { value: 17.67, precision: 2, preliminary: false },
                            { value: 17.71, precision: 2, preliminary: false },
                            { value: 17.48, precision: 2, preliminary: false },
                            { value: 17.62, precision: 2, preliminary: false },
                            { value: 17.71, precision: 2, preliminary: false },
                            { value: 17.91, precision: 2, preliminary: false },
                            { value: 17.90, precision: 2, preliminary: false },
                            { value: 17.97, precision: 2, preliminary: false },
                            { value: 18.11, precision: 2, preliminary: false },
                            { value: 18.33, precision: 2, preliminary: false },
                            { value: 18.59, precision: 2, preliminary: false },
                            { value: 18.61, precision: 2, preliminary: false },
                            { value: 18.70, precision: 2, preliminary: false },
                            { value: 18.78, precision: 2, preliminary: false },
                            { value: 18.93, precision: 2, preliminary: false },
                            { value: 19.14, precision: 2, preliminary: false },
                            { value: 19.20, precision: 2, preliminary: false },
                            { value: 19.21, precision: 2, preliminary: false },
                            { value: 19.39, precision: 2, preliminary: false },
                            { value: 19.60, precision: 2, preliminary: false },
                            { value: 19.73, precision: 2, preliminary: false },
                            { value: 19.87, precision: 2, preliminary: false }
                        ]
                    },
                    {
                        "rowNameGroup": [
                            {
                                "en": "Tampere",
                                "fi": "Tampere",
                                "sv": "Tammerfors",
                            },
                            {
                                "en": "Two-room flat",
                                "fi": "Kaksiot",
                                "sv": "Tvårumslägenhet",
                            },
                        ],
                        "series": [
                            { value: 11.56, precision: 2, preliminary: false },
                            { value: 11.61, precision: 2, preliminary: false },
                            { value: 11.69, precision: 2, preliminary: false },
                            { value: 11.74, precision: 2, preliminary: false },
                            { value: 11.76, precision: 2, preliminary: false },
                            { value: 11.96, precision: 2, preliminary: false },
                            { value: 12.07, precision: 2, preliminary: false },
                            { value: 12.09, precision: 2, preliminary: false },
                            { value: 12.52, precision: 2, preliminary: false },
                            { value: 12.64, precision: 2, preliminary: false },
                            { value: 13.48, precision: 2, preliminary: false },
                            { value: 13.68, precision: 2, preliminary: false },
                            { value: 13.45, precision: 2, preliminary: false },
                            { value: 13.50, precision: 2, preliminary: false },
                            { value: 13.57, precision: 2, preliminary: false },
                            { value: 13.85, precision: 2, preliminary: false },
                            { value: 13.67, precision: 2, preliminary: false },
                            { value: 13.77, precision: 2, preliminary: false },
                            { value: 13.85, precision: 2, preliminary: false },
                            { value: 14.16, precision: 2, preliminary: false },
                            { value: 14.25, precision: 2, preliminary: false },
                            { value: 14.26, precision: 2, preliminary: false },
                            { value: 14.31, precision: 2, preliminary: false },
                            { value: 14.35, precision: 2, preliminary: false },
                            { value: 14.38, precision: 2, preliminary: false },
                            { value: 14.52, precision: 2, preliminary: false },
                            { value: 14.57, precision: 2, preliminary: false },
                            { value: 14.58, precision: 2, preliminary: false },
                            { value: 14.68, precision: 2, preliminary: false },
                            { value: 14.87, precision: 2, preliminary: false },
                            { value: 14.95, precision: 2, preliminary: false },
                            { value: 15.09, precision: 2, preliminary: false }
                        ]
                    },
                    {
                        "rowNameGroup": [
                            {
                                "en": "Tampere",
                                "fi": "Tampere",
                                "sv": "Tammerfors",
                            },
                            {
                                "en": "Three-room flat+",
                                "fi": "Kolmiot+",
                                "sv": "Trerumslägenhet+",
                            }
                        ],
                        "series": [
                            { value: 10.91, precision: 2, preliminary: false },
                            { value: 10.95, precision: 2, preliminary: false },
                            { value: 11.00, precision: 2, preliminary: false },
                            { value: 11.08, precision: 2, preliminary: false },
                            { value: 11.17, precision: 2, preliminary: false },
                            { value: 11.26, precision: 2, preliminary: false },
                            { value: 11.41, precision: 2, preliminary: false },
                            { value: 11.42, precision: 2, preliminary: false },
                            { value: 11.83, precision: 2, preliminary: false },
                            { value: 11.83, precision: 2, preliminary: false },
                            { value: 12.18, precision: 2, preliminary: false },
                            { value: 12.34, precision: 2, preliminary: false },
                            { value: 12.03, precision: 2, preliminary: false },
                            { value: 12.10, precision: 2, preliminary: false },
                            { value: 12.18, precision: 2, preliminary: false },
                            { value: 12.42, precision: 2, preliminary: false },
                            { value: 12.28, precision: 2, preliminary: false },
                            { value: 12.37, precision: 2, preliminary: false },
                            { value: 12.43, precision: 2, preliminary: false },
                            { value: 12.79, precision: 2, preliminary: false },
                            { value: 12.83, precision: 2, preliminary: false },
                            { value: 12.89, precision: 2, preliminary: false },
                            { value: 12.96, precision: 2, preliminary: false },
                            { value: 13.00, precision: 2, preliminary: false },
                            { value: 12.89, precision: 2, preliminary: false },
                            { value: 13.05, precision: 2, preliminary: false },
                            { value: 13.11, precision: 2, preliminary: false },
                            { value: 13.05, precision: 2, preliminary: false },
                            { value: 13.04, precision: 2, preliminary: false },
                            { value: 13.33, precision: 2, preliminary: false },
                            { value: 13.47, precision: 2, preliminary: false },
                            { value: 13.70, precision: 2, preliminary: false }
                        ]
                    }
                ],
                sources: [
                    {
                        "en": "PxVisualizer-en",
                        "fi": "PxVisualizer-fi",
                        "sv": "PxVisualizer-sv",
                    }],
                subheaderValues: [],
                units: [
                    {
                        name: {
                            "en": "Rents per square meter (eur/m2)",
                            "fi": "Neliövuokra (eur/m2)",
                            "sv": "Kvadratmeterspris (eur/m2)",
                        },
                        unit: {
                            "en": "eur / m2",
                            "fi": "eur / m2",
                            "sv": "eur / m2",
                        }
                    }
                ]
        };
        expect(resultView).toEqual(expectedView);
    });

    it('returns a view with multiselectable variable', () => {
        const resultView: View = convertPxGrafResponseToView(LINE_CHART_WITH_MULTISELECTABLE_VARIABLE.pxGraphData, LINE_CHART_WITH_MULTISELECTABLE_VARIABLE.selectedVariableCodes);
        const expectedView: View = {
                tableReferenceName: "table.px",
                seriesType: ESeriesType.Time,
                selectableVarNames: [
                    {
                        "en": "Number of rooms",
                        "fi": "Huoneluku",
                        "sv": "Antal rum",
                    }
                ],
                rowVarNames: [
                    {
                        "en": "Region",
                        "fi": "Alue",
                        "sv": "Område"
                    }
                ],
                colVarNames: [
                    {
                        "en": "Quarter",
                        "fi": "Vuosineljännes",
                        "sv": "Kvartal",
                    },
                ],
                columnNameGroups: [
                    [
                        {
                            "en": "2015Q1",
                            "fi": "2015Q1",
                            "sv": "2015Q1",
                        }
                    ],
                    [
                        {
                            "en": "2015Q2",
                            "fi": "2015Q2",
                            "sv": "2015Q2",
                        }
                    ],
                    [
                        {
                            "en": "2015Q3",
                            "fi": "2015Q3",
                            "sv": "2015Q3",
                        }
                    ],
                    [
                        {

                            "en": "2015Q4",
                            "fi": "2015Q4",
                            "sv": "2015Q4",
                        }
                    ],
                    [
                        {

                            "en": "2016Q1",
                            "fi": "2016Q1",
                            "sv": "2016Q1",
                        }
                    ],
                    [
                        {

                            "en": "2016Q2",
                            "fi": "2016Q2",
                            "sv": "2016Q2",
                        }
                    ],
                    [
                        {
                            "en": "2016Q3",
                            "fi": "2016Q3",
                            "sv": "2016Q3",
                        }
                    ],
                    [
                        {
                            "en": "2016Q4",
                            "fi": "2016Q4",
                            "sv": "2016Q4",
                        }
                    ],
                    [
                        {
                            "en": "2017Q1",
                            "fi": "2017Q1",
                            "sv": "2017Q1",
                        }
                    ],
                    [
                        {
                            "en": "2017Q2",
                            "fi": "2017Q2",
                            "sv": "2017Q2",
                        }
                    ],
                    [
                        {
                            "en": "2017Q3",
                            "fi": "2017Q3",
                            "sv": "2017Q3",
                        }
                    ],
                    [
                        {
                            "en": "2017Q4",
                            "fi": "2017Q4",
                            "sv": "2017Q4",
                        }
                    ],
                    [
                        {
                            "en": "2018Q1",
                            "fi": "2018Q1",
                            "sv": "2018Q1",
                        }
                    ],
                    [
                        {
                            "en": "2018Q2",
                            "fi": "2018Q2",
                            "sv": "2018Q2",
                        }
                    ],
                    [
                        {
                            "en": "2018Q3",
                            "fi": "2018Q3",
                            "sv": "2018Q3",
                        }
                    ],
                    [
                        {
                            "en": "2018Q4",
                            "fi": "2018Q4",
                            "sv": "2018Q4",
                        }
                    ],
                    [
                        {
                            "en": "2019Q1",
                            "fi": "2019Q1",
                            "sv": "2019Q1",
                        }
                    ],
                    [
                        {
                            "en": "2019Q2",
                            "fi": "2019Q2",
                            "sv": "2019Q2",
                        }
                    ],
                    [
                        {
                            "en": "2019Q3",
                            "fi": "2019Q3",
                            "sv": "2019Q3",
                        }
                    ],
                    [
                        {
                            "en": "2019Q4",
                            "fi": "2019Q4",
                            "sv": "2019Q4",
                        }
                    ],
                    [
                        {
                            "en": "2020Q1",
                            "fi": "2020Q1",
                            "sv": "2020Q1",
                        }
                    ],
                    [
                        {
                            "en": "2020Q2",
                            "fi": "2020Q2",
                            "sv": "2020Q2",
                        }
                    ],
                    [
                        {
                            "en": "2020Q3",
                            "fi": "2020Q3",
                            "sv": "2020Q3",
                        }
                    ],
                    [
                        {
                            "en": "2020Q4",
                            "fi": "2020Q4",
                            "sv": "2020Q4",
                        }
                    ],
                    [
                        {
                            "en": "2021Q1",
                            "fi": "2021Q1",
                            "sv": "2021Q1",
                        }
                    ],
                    [
                        {
                            "en": "2021Q2",
                            "fi": "2021Q2",
                            "sv": "2021Q2",
                        }
                    ],
                    [
                        {
                            "en": "2021Q3",
                            "fi": "2021Q3",
                            "sv": "2021Q3",
                        }
                    ],
                    [
                        {
                            "en": "2021Q4",
                            "fi": "2021Q4",
                            "sv": "2021Q4",
                        }
                    ],
                    [
                        {
                            "en": "2022Q1",
                            "fi": "2022Q1",
                            "sv": "2022Q1",
                        }
                    ],
                    [
                        {
                            "en": "2022Q2",
                            "fi": "2022Q2",
                            "sv": "2022Q2",
                        }
                    ],
                    [
                        {
                            "en": "2022Q3",
                            "fi": "2022Q3",
                            "sv": "2022Q3",
                        }
                    ],
                    [
                        {
                            "en": "2022Q4",
                            "fi": "2022Q4",
                            "sv": "2022Q4",
                        }
                    ]
                ],
                header: {
                    "en": "Rents per square meter (eur/m2), Non subsidised 2015Q1-2022Q4 by Region, Number of rooms",
                    "fi": "Neliövuokra (eur/m2), Vapaarahoitteinen 2015Q1-2022Q4 muuttujina Alue, Huoneluku",
                    "sv": "Kvadratmeterspris (eur/m2), Fri finansierad 2015Q1-2022Q4 efter Område, Antal rum",
                },
                series: [
                    {
                        rowNameGroup: [
                            {
                                "en": "One-room flat",
                                "fi": "Yksiöt",
                                "sv": "Enrumslägenhet"
                            },
                            {
                                "en": "Helsinki",
                                "fi": "Helsinki",
                                "sv": "Helsingfors"
                            }
                        ],
                        series: [
                            { value: 22.68, precision: 2, preliminary: false },
                            { value: 22.87, precision: 2, preliminary: false },
                            { value: 23.10, precision: 2, preliminary: false },
                            { value: 23.23, precision: 2, preliminary: false },
                            { value: 23.50, precision: 2, preliminary: false },
                            { value: 23.68, precision: 2, preliminary: false },
                            { value: 23.78, precision: 2, preliminary: false },
                            { value: 23.89, precision: 2, preliminary: false },
                            { value: 24.07, precision: 2, preliminary: false },
                            { value: 24.08, precision: 2, preliminary: false },
                            { value: 24.45, precision: 2, preliminary: false },
                            { value: 24.55, precision: 2, preliminary: false },
                            { value: 24.54, precision: 2, preliminary: false },
                            { value: 24.65, precision: 2, preliminary: false },
                            { value: 24.72, precision: 2, preliminary: false },
                            { value: 25.13, precision: 2, preliminary: false },
                            { value: 25.09, precision: 2, preliminary: false },
                            { value: 25.22, precision: 2, preliminary: false },
                            { value: 25.44, precision: 2, preliminary: false },
                            { value: 25.87, precision: 2, preliminary: false },
                            { value: 26.15, precision: 2, preliminary: false },
                            { value: 26.27, precision: 2, preliminary: false },
                            { value: 26.36, precision: 2, preliminary: false },
                            { value: 26.51, precision: 2, preliminary: false },
                            { value: 26.59, precision: 2, preliminary: false },
                            { value: 26.68, precision: 2, preliminary: false },
                            { value: 26.72, precision: 2, preliminary: false },
                            { value: 26.75, precision: 2, preliminary: false },
                            { value: 26.64, precision: 2, preliminary: false },
                            { value: 26.82, precision: 2, preliminary: false },
                            { value: 26.93, precision: 2, preliminary: false },
                            { value: 26.93, precision: 2, preliminary: false }
                        ]
                    },
                    {
                        rowNameGroup: [
                            {
                                "en": "One-room flat",
                                "fi": "Yksiöt",
                                "sv": "Enrumslägenhet",
                            },
                            {
                                "en": "Turku",
                                "fi": "Turku",
                                "sv": "Åbo",
                            },
                        ],
                        series: [
                            { value: 15.15, precision: 2, preliminary: false },
                            { value: 15.18, precision: 2, preliminary: false },
                            { value: 15.32, precision: 2, preliminary: false },
                            { value: 15.41, precision: 2, preliminary: false },
                            { value: 15.56, precision: 2, preliminary: false },
                            { value: 15.58, precision: 2, preliminary: false },
                            { value: 15.72, precision: 2, preliminary: false },
                            { value: 15.80, precision: 2, preliminary: false },
                            { value: 15.96, precision: 2, preliminary: false },
                            { value: 15.93, precision: 2, preliminary: false },
                            { value: 16.11, precision: 2, preliminary: false },
                            { value: 16.24, precision: 2, preliminary: false },
                            { value: 16.18, precision: 2, preliminary: false },
                            { value: 16.25, precision: 2, preliminary: false },
                            { value: 16.40, precision: 2, preliminary: false },
                            { value: 16.68, precision: 2, preliminary: false },
                            { value: 16.62, precision: 2, preliminary: false },
                            { value: 16.71, precision: 2, preliminary: false },
                            { value: 16.83, precision: 2, preliminary: false },
                            { value: 17.20, precision: 2, preliminary: false },
                            { value: 17.45, precision: 2, preliminary: false },
                            { value: 17.48, precision: 2, preliminary: false },
                            { value: 17.57, precision: 2, preliminary: false },
                            { value: 17.64, precision: 2, preliminary: false },
                            { value: 17.76, precision: 2, preliminary: false },
                            { value: 17.88, precision: 2, preliminary: false },
                            { value: 17.95, precision: 2, preliminary: false },
                            { value: 18.01, precision: 2, preliminary: false },
                            { value: 18.16, precision: 2, preliminary: false },
                            { value: 18.32, precision: 2, preliminary: false },
                            { value: 18.44, precision: 2, preliminary: false },
                            { value: 18.53, precision: 2, preliminary: false }
                        ]
                    },
                    {
                        rowNameGroup: [
                            {
                                "en": "One-room flat",
                                "fi": "Yksiöt",
                                "sv": "Enrumslägenhet",
                            },
                            {
                                "en": "Tampere",
                                "fi": "Tampere",
                                "sv": "Tammerfors",
                            },
                        ],
                        series: [
                            { value: 16.34, precision: 2, preliminary: false },
                            { value: 16.38, precision: 2, preliminary: false },
                            { value: 16.49, precision: 2, preliminary: false },
                            { value: 16.54, precision: 2, preliminary: false },
                            { value: 16.32, precision: 2, preliminary: false },
                            { value: 16.70, precision: 2, preliminary: false },
                            { value: 16.92, precision: 2, preliminary: false },
                            { value: 16.98, precision: 2, preliminary: false },
                            { value: 17.48, precision: 2, preliminary: false },
                            { value: 17.58, precision: 2, preliminary: false },
                            { value: 17.67, precision: 2, preliminary: false },
                            { value: 17.71, precision: 2, preliminary: false },
                            { value: 17.48, precision: 2, preliminary: false },
                            { value: 17.62, precision: 2, preliminary: false },
                            { value: 17.71, precision: 2, preliminary: false },
                            { value: 17.91, precision: 2, preliminary: false },
                            { value: 17.90, precision: 2, preliminary: false },
                            { value: 17.97, precision: 2, preliminary: false },
                            { value: 18.11, precision: 2, preliminary: false },
                            { value: 18.33, precision: 2, preliminary: false },
                            { value: 18.59, precision: 2, preliminary: false },
                            { value: 18.61, precision: 2, preliminary: false },
                            { value: 18.70, precision: 2, preliminary: false },
                            { value: 18.78, precision: 2, preliminary: false },
                            { value: 18.93, precision: 2, preliminary: false },
                            { value: 19.14, precision: 2, preliminary: false },
                            { value: 19.20, precision: 2, preliminary: false },
                            { value: 19.21, precision: 2, preliminary: false },
                            { value: 19.39, precision: 2, preliminary: false },
                            { value: 19.60, precision: 2, preliminary: false },
                            { value: 19.73, precision: 2, preliminary: false },
                            { value: 19.87, precision: 2, preliminary: false }
                        ]
                    },
                    {
                        "rowNameGroup": [
                            {
                                "en": "Two-room flat",
                                "fi": "Kaksiot",
                                "sv": "Tvårumslägenhet",
                            },
                            {
                                "en": "Helsinki",
                                "fi": "Helsinki",
                                "sv": "Helsingfors",
                            },
                        ],
                        "series": [
                            { value: 15.77, precision: 2, preliminary: false },
                            { value: 15.95, precision: 2, preliminary: false },
                            { value: 16.12, precision: 2, preliminary: false },
                            { value: 16.04, precision: 2, preliminary: false },
                            { value: 16.40, precision: 2, preliminary: false },
                            { value: 16.71, precision: 2, preliminary: false },
                            { value: 16.85, precision: 2, preliminary: false },
                            { value: 16.82, precision: 2, preliminary: false },
                            { value: 17.14, precision: 2, preliminary: false },
                            { value: 17.30, precision: 2, preliminary: false },
                            { value: 18.63, precision: 2, preliminary: false },
                            { value: 18.93, precision: 2, preliminary: false },
                            { value: 18.68, precision: 2, preliminary: false },
                            { value: 18.71, precision: 2, preliminary: false },
                            { value: 18.83, precision: 2, preliminary: false },
                            { value: 19.11, precision: 2, preliminary: false },
                            { value: 18.90, precision: 2, preliminary: false },
                            { value: 19.02, precision: 2, preliminary: false },
                            { value: 19.21, precision: 2, preliminary: false },
                            { value: 19.72, precision: 2, preliminary: false },
                            { value: 19.85, precision: 2, preliminary: false },
                            { value: 19.92, precision: 2, preliminary: false },
                            { value: 20.02, precision: 2, preliminary: false },
                            { value: 20.10, precision: 2, preliminary: false },
                            { value: 20.01, precision: 2, preliminary: false },
                            { value: 20.14, precision: 2, preliminary: false },
                            { value: 20.21, precision: 2, preliminary: false },
                            { value: 20.19, precision: 2, preliminary: false },
                            { value: 20.22, precision: 2, preliminary: false },
                            { value: 20.45, precision: 2, preliminary: false },
                            { value: 20.59, precision: 2, preliminary: false },
                            { value: 20.66, precision: 2, preliminary: false }
                        ]
                    },
                    {
                        "rowNameGroup": [
                            {
                                "en": "Two-room flat",
                                "fi": "Kaksiot",
                                "sv": "Tvårumslägenhet",
                            },
                            {
                                "en": "Turku",
                                "fi": "Turku",
                                "sv": "Åbo",
                            },
                        ],
                        "series": [
                            { value: 10.50, precision: 2, preliminary: false },
                            { value: 10.57, precision: 2, preliminary: false },
                            { value: 10.65, precision: 2, preliminary: false },
                            { value: 10.64, precision: 2, preliminary: false },
                            { value: 10.85, precision: 2, preliminary: false },
                            { value: 11.10, precision: 2, preliminary: false },
                            { value: 11.23, precision: 2, preliminary: false },
                            { value: 11.24, precision: 2, preliminary: false },
                            { value: 11.42, precision: 2, preliminary: false },
                            { value: 11.44, precision: 2, preliminary: false },
                            { value: 12.53, precision: 2, preliminary: false },
                            { value: 12.83, precision: 2, preliminary: false },
                            { value: 12.67, precision: 2, preliminary: false },
                            { value: 12.74, precision: 2, preliminary: false },
                            { value: 12.79, precision: 2, preliminary: false },
                            { value: 13.12, precision: 2, preliminary: false },
                            { value: 12.93, precision: 2, preliminary: false },
                            { value: 13.00, precision: 2, preliminary: false },
                            { value: 13.11, precision: 2, preliminary: false },
                            { value: 13.52, precision: 2, preliminary: false },
                            { value: 13.57, precision: 2, preliminary: false },
                            { value: 13.61, precision: 2, preliminary: false },
                            { value: 13.65, precision: 2, preliminary: false },
                            { value: 13.73, precision: 2, preliminary: false },
                            { value: 13.76, precision: 2, preliminary: false },
                            { value: 13.88, precision: 2, preliminary: false },
                            { value: 13.93, precision: 2, preliminary: false },
                            { value: 13.98, precision: 2, preliminary: false },
                            { value: 14.07, precision: 2, preliminary: false },
                            { value: 14.27, precision: 2, preliminary: false },
                            { value: 14.37, precision: 2, preliminary: false },
                            { value: 14.48, precision: 2, preliminary: false }
                        ]
                    },
                    {
                        "rowNameGroup": [
                            {
                                "en": "Two-room flat",
                                "fi": "Kaksiot",
                                "sv": "Tvårumslägenhet",
                            },
                            {
                                "en": "Tampere",
                                "fi": "Tampere",
                                "sv": "Tammerfors",
                            },
                        ],
                        "series": [
                            { value: 11.56, precision: 2, preliminary: false },
                            { value: 11.61, precision: 2, preliminary: false },
                            { value: 11.69, precision: 2, preliminary: false },
                            { value: 11.74, precision: 2, preliminary: false },
                            { value: 11.76, precision: 2, preliminary: false },
                            { value: 11.96, precision: 2, preliminary: false },
                            { value: 12.07, precision: 2, preliminary: false },
                            { value: 12.09, precision: 2, preliminary: false },
                            { value: 12.52, precision: 2, preliminary: false },
                            { value: 12.64, precision: 2, preliminary: false },
                            { value: 13.48, precision: 2, preliminary: false },
                            { value: 13.68, precision: 2, preliminary: false },
                            { value: 13.45, precision: 2, preliminary: false },
                            { value: 13.50, precision: 2, preliminary: false },
                            { value: 13.57, precision: 2, preliminary: false },
                            { value: 13.85, precision: 2, preliminary: false },
                            { value: 13.67, precision: 2, preliminary: false },
                            { value: 13.77, precision: 2, preliminary: false },
                            { value: 13.85, precision: 2, preliminary: false },
                            { value: 14.16, precision: 2, preliminary: false },
                            { value: 14.25, precision: 2, preliminary: false },
                            { value: 14.26, precision: 2, preliminary: false },
                            { value: 14.31, precision: 2, preliminary: false },
                            { value: 14.35, precision: 2, preliminary: false },
                            { value: 14.38, precision: 2, preliminary: false },
                            { value: 14.52, precision: 2, preliminary: false },
                            { value: 14.57, precision: 2, preliminary: false },
                            { value: 14.58, precision: 2, preliminary: false },
                            { value: 14.68, precision: 2, preliminary: false },
                            { value: 14.87, precision: 2, preliminary: false },
                            { value: 14.95, precision: 2, preliminary: false },
                            { value: 15.09, precision: 2, preliminary: false }
                        ]
                    }
                ],
                sources: [
                    {
                        "en": "PxVisualizer-en",
                        "fi": "PxVisualizer-fi",
                        "sv": "PxVisualizer-sv"
                    }
                ],
                subheaderValues: [],
                units: [
                    {
                        name: {
                            "en": "Rents per square meter (eur/m2)",
                            "fi": "Neliövuokra (eur/m2)",
                            "sv": "Kvadratmeterspris (eur/m2)",
                        },
                        unit: {
                            "en": "eur / m2",
                            "fi": "eur / m2",
                            "sv": "eur / m2"
                        }
                    }
                ],
                visualizationSettings: {
                    "cutValueAxis": false,
                    "multiselectableVariableCode": "Huoneluku",
                    "timeSeriesStartingPoint": "2015-01-01T00:00:00",
                    timeVariableIntervals: ETimeVariableInterval.Quarter,
                    visualizationType: EVisualizationType.LineChart,
                },
        };
        expect(resultView).toEqual(expectedView);
    });
});

describe('percent vertical bar chart conversion', () => {
    it('retuns a view converted to relative values', () => {
        const view = convertPxGrafResponseToView(PERCENT_VERTICAL_BAR_CHART.pxGraphData, {});
        expect(view).toEqual(PERCENT_VERTICAL_BAR_CHART_VIEW);
    });

    it('retuns a selected view converted to relative values', () => {
        const view = convertPxGrafResponseToView(PERCENT_VERTICAL_BAR_CHART_WITH_SELECTABLES.pxGraphData,
            PERCENT_VERTICAL_BAR_CHART_WITH_SELECTABLES.selectedVariableCodes);
        expect(view).toEqual(PERCENT_VERTICAL_BAR_CHART_WITH_SELECTABLES_VIEW);
    });

    it('retuns pivoted and selected view converted to relative values', () => {
        const view = convertPxGrafResponseToView(PERCENT_VERTICAL_BAR_CHART_PIVOTED_WITH_SELECTABLES.pxGraphData,
            PERCENT_VERTICAL_BAR_CHART_PIVOTED_WITH_SELECTABLES.selectedVariableCodes);
        expect(view).toEqual(PERCENT_VERTICAL_BAR_CHART_PIVOTED_WITH_SELECTABLES_VIEW);
    });
});

describe('percent horizontal bar chart conversion', () => {
    it('retuns a view converted to relative values', () => {
        const view = convertPxGrafResponseToView(PERCENT_HORIZONTAL_BAR_CHART.pxGraphData, {});
        expect(view).toEqual(PERCENT_HORIZONTAL_BAR_CHART_VIEW);
    });

    it('retuns a selected view converted to relative values', () => {
        const view = convertPxGrafResponseToView(PERCENT_HORIZONTAL_BAR_CHART_WITH_SELECTABLES.pxGraphData,
            PERCENT_HORIZONTAL_BAR_CHART_WITH_SELECTABLES.selectedVariableCodes);
        expect(view).toEqual(PERCENT_HORIZONTAL_BAR_CHART_WITH_SELECTABLES_VIEW);
    });
});

describe('Relative data conversion', () => {
    it('returns converted data for multiseries view without missing data', () => {
        const inputView: View = {
            tableReferenceName: "table.px",
            seriesType: ESeriesType.Time,
            selectableVarNames: [],
            rowVarNames: [
                {
                    "en": "Region",
                    "fi": "Alue",
                    "sv": "Område"
                }
            ],
            colVarNames: [
                {
                    "en": "Quarter",
                    "fi": "Vuosineljännes",
                    "sv": "Kvartal",
                },
            ],
            columnNameGroups: [
                [
                    {
                        "en": "2020Q1",
                        "fi": "2020Q1",
                        "sv": "2020Q1",
                    }
                ],
                [
                    {
                        "en": "2020Q2",
                        "fi": "2020Q2",
                        "sv": "2020Q2",
                    }
                ],
                [
                    {
                        "en": "2020Q3",
                        "fi": "2020Q3",
                        "sv": "2020Q3",
                    }
                ],
                [
                    {
                        "en": "2020Q4",
                        "fi": "2020Q4",
                        "sv": "2020Q4",
                    }
                ]
            ],
            header: {
                "en": "Foo.en",
                "fi": "Foo.fi",
                "sv": "Foo.sv",
            },
            series: [
                {
                    rowNameGroup: [
                        {
                            "en": "Helsinki",
                            "fi": "Helsinki",
                            "sv": "Helsingfors"
                        }
                    ],
                    series: [
                        { value: 22.68, precision: 2, preliminary: false },
                        { value: 22.87, precision: 2, preliminary: false },
                        { value: 23.10, precision: 2, preliminary: false },
                        { value: 23.23, precision: 2, preliminary: false }
                    ]
                },
                {
                    rowNameGroup: [
                        {
                            "en": "Turku",
                            "fi": "Turku",
                            "sv": "Åbo",
                        }
                    ],
                    series: [
                        { value: 15.15, precision: 2, preliminary: false },
                        { value: 15.18, precision: 2, preliminary: false },
                        { value: 15.32, precision: 2, preliminary: false },
                        { value: 15.41, precision: 2, preliminary: false }
                    ]
                },
                {
                    rowNameGroup: [
                        {
                            "en": "Tampere",
                            "fi": "Tampere",
                            "sv": "Tammerfors",
                        }
                    ],
                    series: [
                        { value: 16.34, precision: 2, preliminary: false },
                        { value: 16.38, precision: 2, preliminary: false },
                        { value: 16.49, precision: 2, preliminary: false },
                        { value: 16.54, precision: 2, preliminary: false }
                    ]
                }
            ],
            sources: [
                {
                    "en": "PxVisualizer-en",
                    "fi": "PxVisualizer-fi",
                    "sv": "PxVisualizer-sv"
                }
            ],
            subheaderValues: [],
            units: [
                {
                    name: {
                        "en": "Rents per square meter (eur/m2)",
                        "fi": "Neliövuokra (eur/m2)",
                        "sv": "Kvadratmeterspris (eur/m2)",
                    },
                    unit: {
                        "en": "eur / m2",
                        "fi": "eur / m2",
                        "sv": "eur / m2"
                    }
                }
            ],
            visualizationSettings: {
                cutValueAxis: false,
                timeSeriesStartingPoint: "2020-01-01T00:00:00",
                timeVariableIntervals: ETimeVariableInterval.Quarter,
                visualizationType: EVisualizationType.PercentVerticalBarChart,
            },
        }

        const outputView: View = {
            tableReferenceName: "table.px",
            seriesType: ESeriesType.Time,
            selectableVarNames: [],
            rowVarNames: [
                {
                    "en": "Region",
                    "fi": "Alue",
                    "sv": "Område"
                }
            ],
            colVarNames: [
                {
                    "en": "Quarter",
                    "fi": "Vuosineljännes",
                    "sv": "Kvartal",
                },
            ],
            columnNameGroups: [
                [
                    {
                        "en": "2020Q1",
                        "fi": "2020Q1",
                        "sv": "2020Q1",
                    }
                ],
                [
                    {
                        "en": "2020Q2",
                        "fi": "2020Q2",
                        "sv": "2020Q2",
                    }
                ],
                [
                    {
                        "en": "2020Q3",
                        "fi": "2020Q3",
                        "sv": "2020Q3",
                    }
                ],
                [
                    {
                        "en": "2020Q4",
                        "fi": "2020Q4",
                        "sv": "2020Q4",
                    }
                ]
            ],
            header: {
                "en": "Foo.en",
                "fi": "Foo.fi",
                "sv": "Foo.sv",
            },
            series: [
                {
                    rowNameGroup: [
                        {
                            "en": "Helsinki",
                            "fi": "Helsinki",
                            "sv": "Helsingfors"
                        }
                    ],
                    series: [
                        { value: 41.9, precision: 1, preliminary: false },
                        { value: 42.0, precision: 1, preliminary: false },
                        { value: 42.1, precision: 1, preliminary: false },
                        { value: 42.1, precision: 1, preliminary: false }
                    ]
                },
                {
                    rowNameGroup: [
                        {
                            "en": "Turku",
                            "fi": "Turku",
                            "sv": "Åbo",
                        }
                    ],
                    series: [
                        { value: 28.0, precision: 1, preliminary: false },
                        { value: 27.9, precision: 1, preliminary: false },
                        { value: 27.9, precision: 1, preliminary: false },
                        { value: 27.9, precision: 1, preliminary: false }
                    ]
                },
                {
                    rowNameGroup: [
                        {
                            "en": "Tampere",
                            "fi": "Tampere",
                            "sv": "Tammerfors",
                        }
                    ],
                    series: [
                        { value: 30.2, precision: 1, preliminary: false },
                        { value: 30.1, precision: 1, preliminary: false },
                        { value: 30.0, precision: 1, preliminary: false },
                        { value: 30.0, precision: 1, preliminary: false }
                    ]
                }
            ],
            sources: [
                {
                    "en": "PxVisualizer-en",
                    "fi": "PxVisualizer-fi",
                    "sv": "PxVisualizer-sv"
                }
            ],
            subheaderValues: [],
            units: [
                {
                    name: {
                        "en": "Rents per square meter (eur/m2)",
                        "fi": "Neliövuokra (eur/m2)",
                        "sv": "Kvadratmeterspris (eur/m2)",
                    },
                    unit: {
                        "en": "%",
                        "fi": "%",
                        "sv": "%"
                    }
                }
            ],
            visualizationSettings: {
                cutValueAxis: false,
                timeSeriesStartingPoint: "2020-01-01T00:00:00",
                timeVariableIntervals: ETimeVariableInterval.Quarter,
                visualizationType: EVisualizationType.PercentVerticalBarChart,
            },
        };
        expect(convertToRelative(inputView)).toEqual(outputView);
    });

    it('returns converted data for multiseries view with missing data', () => {
        const inputView: View = {
            tableReferenceName: "table.px",
            seriesType: ESeriesType.Time,
            selectableVarNames: [],
            rowVarNames: [
                {
                    "en": "Region",
                    "fi": "Alue",
                    "sv": "Område"
                }
            ],
            colVarNames: [
                {
                    "en": "Quarter",
                    "fi": "Vuosineljännes",
                    "sv": "Kvartal",
                },
            ],
            columnNameGroups: [
                [
                    {
                        "en": "2020Q1",
                        "fi": "2020Q1",
                        "sv": "2020Q1",
                    }
                ],
                [
                    {
                        "en": "2020Q2",
                        "fi": "2020Q2",
                        "sv": "2020Q2",
                    }
                ],
                [
                    {
                        "en": "2020Q3",
                        "fi": "2020Q3",
                        "sv": "2020Q3",
                    }
                ],
                [
                    {
                        "en": "2020Q4",
                        "fi": "2020Q4",
                        "sv": "2020Q4",
                    }
                ]
            ],
            header: {
                "en": "Foo.en",
                "fi": "Foo.fi",
                "sv": "Foo.sv",
            },
            series: [
                {
                    rowNameGroup: [
                        {
                            "en": "Helsinki",
                            "fi": "Helsinki",
                            "sv": "Helsingfors"
                        }
                    ],
                    series: [
                        { value: null, precision: 1, preliminary: false, missingCode: 1 },
                        { value: null, precision: 1, preliminary: false, missingCode: 1 },
                        { value: null, precision: 1, preliminary: false, missingCode: 1 },
                        { value: 50.0, precision: 1, preliminary: false }
                    ]
                },
                {
                    rowNameGroup: [
                        {
                            "en": "Turku",
                            "fi": "Turku",
                            "sv": "Åbo",
                        }
                    ],
                    series: [
                        { value: null, precision: 1, preliminary: false, missingCode: 1 },
                        { value: null, precision: 1, preliminary: false, missingCode: 1 },
                        { value: 50.0, precision: 1, preliminary: false },
                        { value: 50.0, precision: 1, preliminary: false }
                    ]
                },
                {
                    rowNameGroup: [
                        {
                            "en": "Tampere",
                            "fi": "Tampere",
                            "sv": "Tammerfors",
                        }
                    ],
                    series: [
                        { value: null, precision: 1, preliminary: false, missingCode: 1 },
                        { value: 50.0, precision: 1, preliminary: false },
                        { value: 50.0, precision: 1, preliminary: false },
                        { value: 50.0, precision: 1, preliminary: false }
                    ]
                }
            ],
            sources: [
                {
                    "en": "PxVisualizer-en",
                    "fi": "PxVisualizer-fi",
                    "sv": "PxVisualizer-sv"
                }
            ],
            subheaderValues: [],
            units: [
                {
                    name: {
                        "en": "Rents per square meter (eur/m2)",
                        "fi": "Neliövuokra (eur/m2)",
                        "sv": "Kvadratmeterspris (eur/m2)",
                    },
                    unit: {
                        "en": "eur / m2",
                        "fi": "eur / m2",
                        "sv": "eur / m2"
                    }
                }
            ],
            visualizationSettings: {
                cutValueAxis: false,
                timeSeriesStartingPoint: "2020-01-01T00:00:00",
                timeVariableIntervals: ETimeVariableInterval.Quarter,
                visualizationType: EVisualizationType.PercentVerticalBarChart,
            },
        };

        const outputView: View = {
            tableReferenceName: "table.px",
            seriesType: ESeriesType.Time,
            selectableVarNames: [],
            rowVarNames: [
                {
                    "en": "Region",
                    "fi": "Alue",
                    "sv": "Område"
                }
            ],
            colVarNames: [
                {
                    "en": "Quarter",
                    "fi": "Vuosineljännes",
                    "sv": "Kvartal",
                },
            ],
            columnNameGroups: [
                [
                    {
                        "en": "2020Q1",
                        "fi": "2020Q1",
                        "sv": "2020Q1",
                    }
                ],
                [
                    {
                        "en": "2020Q2",
                        "fi": "2020Q2",
                        "sv": "2020Q2",
                    }
                ],
                [
                    {
                        "en": "2020Q3",
                        "fi": "2020Q3",
                        "sv": "2020Q3",
                    }
                ],
                [
                    {
                        "en": "2020Q4",
                        "fi": "2020Q4",
                        "sv": "2020Q4",
                    }
                ]
            ],
            header: {
                "en": "Foo.en",
                "fi": "Foo.fi",
                "sv": "Foo.sv",
            },
            series: [
                {
                    rowNameGroup: [
                        {
                            "en": "Helsinki",
                            "fi": "Helsinki",
                            "sv": "Helsingfors"
                        }
                    ],
                    series: [
                        { value: null, precision: 1, preliminary: false, missingCode: 1 },
                        { value: 0, precision: 1, preliminary: false },
                        { value: 0, precision: 1, preliminary: false },
                        { value: 33.3, precision: 1, preliminary: false }
                    ]
                },
                {
                    rowNameGroup: [
                        {
                            "en": "Turku",
                            "fi": "Turku",
                            "sv": "Åbo",
                        }
                    ],
                    series: [
                        { value: null, precision: 1, preliminary: false, missingCode: 1 },
                        { value: 0, precision: 1, preliminary: false },
                        { value: 50, precision: 1, preliminary: false },
                        { value: 33.3, precision: 1, preliminary: false }
                    ]
                },
                {
                    rowNameGroup: [
                        {
                            "en": "Tampere",
                            "fi": "Tampere",
                            "sv": "Tammerfors",
                        }
                    ],
                    series: [
                        { value: null, precision: 1, preliminary: false, missingCode: 1 },
                        { value: 100, precision: 1, preliminary: false },
                        { value: 50, precision: 1, preliminary: false },
                        { value: 33.3, precision: 1, preliminary: false }
                    ]
                }
            ],
            sources: [
                {
                    "en": "PxVisualizer-en",
                    "fi": "PxVisualizer-fi",
                    "sv": "PxVisualizer-sv"
                }
            ],
            subheaderValues: [],
            units: [
                {
                    name: {
                        "en": "Rents per square meter (eur/m2)",
                        "fi": "Neliövuokra (eur/m2)",
                        "sv": "Kvadratmeterspris (eur/m2)",
                    },
                    unit: {
                        "en": "%",
                        "fi": "%",
                        "sv": "%"
                    }
                }
            ],
            visualizationSettings: {
                cutValueAxis: false,
                timeSeriesStartingPoint: "2020-01-01T00:00:00",
                timeVariableIntervals: ETimeVariableInterval.Quarter,
                visualizationType: EVisualizationType.PercentVerticalBarChart,
            },
        };
        expect(convertToRelative(inputView)).toEqual(outputView);
    });
});

describe('table conversion', () => {
    it('throws an error when the provided selectable codes dont match with the metadata', () => {
        expect(() => convertPxGrafResponseToView(SELECTABLE_TABLE_WITH_MISSING_DATA, {
            "Talotyyppi": ["foo"],
            "Huoneluku": ["bar"]
        })).toThrow("Provided selected value code can not be found from the metadata");
    });
});
