import { prettyDOM } from "@testing-library/dom";
import { TABLE_WITH_ONE_CELL, TABLE_WITH_ONLY_ROW_VARIABLES, TABLE_WITH_ROW_AND_COLUMN_VARIABLES } from "../../stories/fixtures/table";
import { SELECTABLE_TABLE_WITH_MISSING_DATA, TABLE_WITH_ONLY_COLUMN_VARIABLES } from "../conversion/fixtures/tableChart";
import { extractSelectableVariableValues } from "../conversion/helpers";
import { convertPxGrafResponseToView } from "../conversion/viewUtils";
import { renderHtmlTable } from "./htmlTable";
import { SELECTABLE_TABLE_WITH_INVALID_MISSING_DATA } from "./fixtures/pxGrafResponses";
import { IChartOptions } from "../types/chartOptions";

describe('Html table render tests', () => {
    it('should match snapshot: Table with column variables only', () => {
        const mockVarSelections = extractSelectableVariableValues(
            TABLE_WITH_ONLY_COLUMN_VARIABLES.pxGraphData.selectableVariableCodes,
            TABLE_WITH_ONLY_COLUMN_VARIABLES.pxGraphData.metaData,
            TABLE_WITH_ONLY_COLUMN_VARIABLES.pxGraphData.visualizationSettings.defaultSelectableVariableCodes,
            TABLE_WITH_ONLY_COLUMN_VARIABLES.selectedVariableCodes);
        const mockView = convertPxGrafResponseToView(TABLE_WITH_ONLY_COLUMN_VARIABLES.pxGraphData, mockVarSelections);
        const locale = 'fi';

        const testId = 'test-49857934857938475938475';

        const div = document.createElement('div');
        div.id = testId;
        document.body.appendChild(div);

        const settings: IChartOptions = {
            showTitle: true,
            showUnits: true,
            showSources: true,
            showLastUpdated: false
        };

        renderHtmlTable(mockView, locale, settings, testId);

        const renderedOutput = prettyDOM(div);
        expect(renderedOutput).toMatchSnapshot();

        document.body.removeChild(div);
    });

    it('should match snapshot: Table with row variables only', () => {
        const mockVarSelections = extractSelectableVariableValues(
            TABLE_WITH_ONLY_ROW_VARIABLES.pxGraphData.selectableVariableCodes,
            TABLE_WITH_ONLY_ROW_VARIABLES.pxGraphData.metaData,
            TABLE_WITH_ONLY_ROW_VARIABLES.pxGraphData.visualizationSettings.defaultSelectableVariableCodes,
            TABLE_WITH_ONLY_ROW_VARIABLES.selectedVariableCodes);
        const mockView = convertPxGrafResponseToView(TABLE_WITH_ONLY_ROW_VARIABLES.pxGraphData, mockVarSelections);
        const locale = 'fi';

        const testId = 'test-9483567287648723649867';

        const div = document.createElement('div');
        div.id = testId;
        document.body.appendChild(div);

        const settings: IChartOptions = {
            showTitle: true,
            showUnits: true,
            showSources: true,
            showLastUpdated: false
        };

        renderHtmlTable(mockView, locale, settings, testId);

        const renderedOutput = prettyDOM(div);
        expect(renderedOutput).toMatchSnapshot();

        document.body.removeChild(div);
    });

    it('should match snapshot: Table with row and column variables', () => {
        const mockVarSelections = extractSelectableVariableValues(
            TABLE_WITH_ROW_AND_COLUMN_VARIABLES.pxGraphData.selectableVariableCodes,
            TABLE_WITH_ROW_AND_COLUMN_VARIABLES.pxGraphData.metaData,
            TABLE_WITH_ROW_AND_COLUMN_VARIABLES.pxGraphData.visualizationSettings.defaultSelectableVariableCodes,
            TABLE_WITH_ROW_AND_COLUMN_VARIABLES.selectedVariableCodes);
        const mockView = convertPxGrafResponseToView(TABLE_WITH_ROW_AND_COLUMN_VARIABLES.pxGraphData, mockVarSelections);
        const locale = 'fi';

        const testId = 'test-4329874982374983798';

        const div = document.createElement('div');
        div.id = testId;
        document.body.appendChild(div);

        const settings: IChartOptions = {
            showTitle: true,
            showUnits: true,
            showSources: true,
            showLastUpdated: false
        };

        renderHtmlTable(mockView, locale, settings, testId);

        const renderedOutput = prettyDOM(div);
        expect(renderedOutput).toMatchSnapshot();

        document.body.removeChild(div);
    });

    it('should match snapshot: Table with row and column variables and title disabled', () => {
        const mockVarSelections = extractSelectableVariableValues(
            TABLE_WITH_ROW_AND_COLUMN_VARIABLES.pxGraphData.selectableVariableCodes,
            TABLE_WITH_ROW_AND_COLUMN_VARIABLES.pxGraphData.metaData,
            TABLE_WITH_ROW_AND_COLUMN_VARIABLES.pxGraphData.visualizationSettings.defaultSelectableVariableCodes,
            TABLE_WITH_ROW_AND_COLUMN_VARIABLES.selectedVariableCodes);
        const mockView = convertPxGrafResponseToView(TABLE_WITH_ROW_AND_COLUMN_VARIABLES.pxGraphData, mockVarSelections);
        const locale = 'fi';

        const testId = 'test-4329874982374983798';

        const div = document.createElement('div');
        div.id = testId;
        document.body.appendChild(div);

        const settings: IChartOptions = {
            showTitle: false,
            showUnits: true,
            showSources: true,
            showLastUpdated: false
        };

        renderHtmlTable(mockView, locale, settings, testId);

        const renderedOutput = prettyDOM(div);
        expect(renderedOutput).toMatchSnapshot();

        document.body.removeChild(div);
    });

    it('should match snapshot: Table with row and column variables and units and sources disabled', () => {
        const mockVarSelections = extractSelectableVariableValues(
            TABLE_WITH_ROW_AND_COLUMN_VARIABLES.pxGraphData.selectableVariableCodes,
            TABLE_WITH_ROW_AND_COLUMN_VARIABLES.pxGraphData.metaData,
            TABLE_WITH_ROW_AND_COLUMN_VARIABLES.pxGraphData.visualizationSettings.defaultSelectableVariableCodes,
            TABLE_WITH_ROW_AND_COLUMN_VARIABLES.selectedVariableCodes);
        const mockView = convertPxGrafResponseToView(TABLE_WITH_ROW_AND_COLUMN_VARIABLES.pxGraphData, mockVarSelections);
        const locale = 'fi';

        const testId = 'test-4329874982374983798';

        const div = document.createElement('div');
        div.id = testId;
        document.body.appendChild(div);

        const settings: IChartOptions = {
            showTitle: true,
            showUnits: false,
            showSources: false,
            showLastUpdated: false
        };

        renderHtmlTable(mockView, locale, settings, testId);

        const renderedOutput = prettyDOM(div);
        expect(renderedOutput).toMatchSnapshot();

        document.body.removeChild(div);
    });

    it('should match snapshot: Table with row and column variables and footnote when given', () => {
        const mockVarSelections = extractSelectableVariableValues(
            TABLE_WITH_ROW_AND_COLUMN_VARIABLES.pxGraphData.selectableVariableCodes,
            TABLE_WITH_ROW_AND_COLUMN_VARIABLES.pxGraphData.metaData,
            TABLE_WITH_ROW_AND_COLUMN_VARIABLES.pxGraphData.visualizationSettings.defaultSelectableVariableCodes,
            TABLE_WITH_ROW_AND_COLUMN_VARIABLES.selectedVariableCodes);
        const mockView = convertPxGrafResponseToView(TABLE_WITH_ROW_AND_COLUMN_VARIABLES.pxGraphData, mockVarSelections);
        const locale = 'fi';

        const testId = 'test-4329874982374983798';

        const div = document.createElement('div');
        div.id = testId;
        document.body.appendChild(div);

        const settings: IChartOptions = {
            showTitle: true,
            showUnits: false,
            showSources: false,
            showLastUpdated: false
        };

        renderHtmlTable(mockView, locale, settings, testId, 'Test footnote');

        const renderedOutput = prettyDOM(div);
        expect(renderedOutput).toMatchSnapshot();

        document.body.removeChild(div);
    });

    it('should match snapshot: Table with only one cell', () => {
        const mockVarSelections = extractSelectableVariableValues(
            TABLE_WITH_ONE_CELL.pxGraphData.selectableVariableCodes,
            TABLE_WITH_ONE_CELL.pxGraphData.metaData,
            TABLE_WITH_ONE_CELL.pxGraphData.visualizationSettings.defaultSelectableVariableCodes,
            TABLE_WITH_ONE_CELL.selectedVariableCodes);
        const mockView = convertPxGrafResponseToView(TABLE_WITH_ONE_CELL.pxGraphData, mockVarSelections);
        const locale = 'fi';

        const testId = 'test-6895638450983059889';

        const div = document.createElement('div');
        div.id = testId;
        document.body.appendChild(div);

        const settings: IChartOptions = {
            showTitle: true,
            showUnits: true,
            showSources: true,
            showLastUpdated: false
        };

        renderHtmlTable(mockView, locale, settings, testId);

        const renderedOutput = prettyDOM(div);
        expect(renderedOutput).toMatchSnapshot();

        document.body.removeChild(div);
    });

    it('should match snapshot: Table with source and footnote', () => {
        const mockVarSelections = extractSelectableVariableValues(
            TABLE_WITH_ONE_CELL.pxGraphData.selectableVariableCodes,
            TABLE_WITH_ONE_CELL.pxGraphData.metaData,
            TABLE_WITH_ONE_CELL.pxGraphData.visualizationSettings.defaultSelectableVariableCodes,
            TABLE_WITH_ONE_CELL.selectedVariableCodes);
        const mockView = convertPxGrafResponseToView(TABLE_WITH_ONE_CELL.pxGraphData, mockVarSelections);
        const locale = 'fi';

        const testId = 'test-6895638450983059889';

        const div = document.createElement('div');
        div.id = testId;
        document.body.appendChild(div);

        const settings: IChartOptions = {
            showTitle: true,
            showUnits: true,
            showSources: true,
            showLastUpdated: false
        };

        renderHtmlTable(mockView, locale, settings, testId, 'Test footnote');

        const renderedOutput = prettyDOM(div);
        expect(renderedOutput).toMatchSnapshot();

        document.body.removeChild(div);
    });

    it('should match snapshot: Table with missing data and selectable values', () => {
        const mockVarSelections = extractSelectableVariableValues(
            SELECTABLE_TABLE_WITH_MISSING_DATA.selectableVariableCodes,
            SELECTABLE_TABLE_WITH_MISSING_DATA.metaData,
            SELECTABLE_TABLE_WITH_MISSING_DATA.visualizationSettings.defaultSelectableVariableCodes,
            {
                "Talotyyppi": ["1"],
                "Huoneluku": ["02"]
            });
        const mockView = convertPxGrafResponseToView(SELECTABLE_TABLE_WITH_MISSING_DATA, mockVarSelections);
        const locale = 'fi';

        const testId = 'test-84957394875983745';

        const div = document.createElement('div');
        div.id = testId;
        document.body.appendChild(div);

        const settings: IChartOptions = {
            showTitle: true,
            showUnits: true,
            showSources: true,
            showLastUpdated: false
        };

        renderHtmlTable(mockView, locale, settings, testId);

        const renderedOutput = prettyDOM(div);
        expect(renderedOutput).toMatchSnapshot();

        document.body.removeChild(div);
    });

    it('should match snapshot: Table with invalid missing data should render error message', () => {
        const mockVarSelections = extractSelectableVariableValues(
            SELECTABLE_TABLE_WITH_INVALID_MISSING_DATA.selectableVariableCodes,
            SELECTABLE_TABLE_WITH_INVALID_MISSING_DATA.metaData,
            SELECTABLE_TABLE_WITH_INVALID_MISSING_DATA.visualizationSettings.defaultSelectableVariableCodes,
            {
                "Huoneluku": ["02"]
            });
        const mockView = convertPxGrafResponseToView(SELECTABLE_TABLE_WITH_INVALID_MISSING_DATA, mockVarSelections);
        const locale = 'fi';

        const testId = 'test-84957394875983745';

        const spy = jest.spyOn(console, "error");
        spy.mockImplementation(() => { });

        const div = document.createElement('div');
        div.id = testId;
        document.body.appendChild(div);

        const settings: IChartOptions = {
            showTitle: true,
            showUnits: true,
            showSources: true,
            showLastUpdated: false
        };

        renderHtmlTable(mockView, locale, settings, testId);

        const renderedOutput = prettyDOM(div);
        expect(renderedOutput).toMatchSnapshot();

        document.body.removeChild(div);

        spy.mockRestore();
    });
});