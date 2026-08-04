import { describe, expect, it, jest } from "@jest/globals";
import { TABLE_WITH_ONE_CELL, TABLE_WITH_ONLY_ROW_VARIABLES, TABLE_WITH_ROW_AND_COLUMN_VARIABLES } from "../../stories/fixtures/table";
import { SELECTABLE_TABLE_WITH_MISSING_DATA, TABLE_WITH_ONLY_COLUMN_VARIABLES } from "../conversion/fixtures/tableChart";
import { extractSelectableVariableValues } from "../conversion/helpers";
import { convertPxGrafResponseToView } from "../conversion/viewUtils";
import { renderHtmlTable } from "./htmlTable";
import { SELECTABLE_TABLE_WITH_INVALID_MISSING_DATA } from "./fixtures/pxGrafResponses";
import type { IChartOptions, IQueryVisualizationResponse } from "../types";
import type { TVariableSelections } from "../types/variableSelections";

const defaultSettings: IChartOptions = {
    showTitles: true,
    showUnits: true,
    showSources: true,
    showLastUpdated: false
};

interface IHtmlTableTestCase {
    title: string;
    response: IQueryVisualizationResponse;
    selectedValueCodes?: TVariableSelections;
    testId: string;
    settings?: IChartOptions;
    footnote?: string;
}

const renderTestTable = ({ response, selectedValueCodes, testId, settings = defaultSettings, footnote }: IHtmlTableTestCase) => {
    const variableSelections = extractSelectableVariableValues(
        response.selectableVariableCodes,
        response.metaData,
        response.visualizationSettings.defaultSelectableVariableCodes,
        selectedValueCodes);
    const view = convertPxGrafResponseToView(response, variableSelections);
    const container = document.createElement('div');
    container.id = testId;
    document.body.appendChild(container);
    renderHtmlTable(view, 'fi', settings, testId, footnote);
    return container;
};

const testCases: IHtmlTableTestCase[] = [
    {
        title: 'Table with column variables only',
        response: TABLE_WITH_ONLY_COLUMN_VARIABLES.pxGraphData,
        selectedValueCodes: TABLE_WITH_ONLY_COLUMN_VARIABLES.selectedVariableCodes,
        testId: 'test-49857934857938475938475'
    },
    {
        title: 'Table with row variables only',
        response: TABLE_WITH_ONLY_ROW_VARIABLES.pxGraphData,
        selectedValueCodes: TABLE_WITH_ONLY_ROW_VARIABLES.selectedVariableCodes,
        testId: 'test-9483567287648723649867'
    },
    {
        title: 'Table with row and column variables',
        response: TABLE_WITH_ROW_AND_COLUMN_VARIABLES.pxGraphData,
        selectedValueCodes: TABLE_WITH_ROW_AND_COLUMN_VARIABLES.selectedVariableCodes,
        testId: 'test-4329874982374983798'
    },
    {
        title: 'Table with row and column variables and title disabled',
        response: TABLE_WITH_ROW_AND_COLUMN_VARIABLES.pxGraphData,
        selectedValueCodes: TABLE_WITH_ROW_AND_COLUMN_VARIABLES.selectedVariableCodes,
        testId: 'test-4329874982374983798',
        settings: { ...defaultSettings, showTitles: false }
    },
    {
        title: 'Table with row and column variables and units and sources disabled',
        response: TABLE_WITH_ROW_AND_COLUMN_VARIABLES.pxGraphData,
        selectedValueCodes: TABLE_WITH_ROW_AND_COLUMN_VARIABLES.selectedVariableCodes,
        testId: 'test-4329874982374983798',
        settings: { ...defaultSettings, showUnits: false, showSources: false }
    },
    {
        title: 'Table with row and column variables and footnote when given',
        response: TABLE_WITH_ROW_AND_COLUMN_VARIABLES.pxGraphData,
        selectedValueCodes: TABLE_WITH_ROW_AND_COLUMN_VARIABLES.selectedVariableCodes,
        testId: 'test-4329874982374983798',
        settings: { ...defaultSettings, showUnits: false, showSources: false },
        footnote: 'Test footnote'
    },
    {
        title: 'Table with only one cell',
        response: TABLE_WITH_ONE_CELL.pxGraphData,
        selectedValueCodes: TABLE_WITH_ONE_CELL.selectedVariableCodes,
        testId: 'test-6895638450983059889'
    },
    {
        title: 'Table with source and footnote',
        response: TABLE_WITH_ONE_CELL.pxGraphData,
        selectedValueCodes: TABLE_WITH_ONE_CELL.selectedVariableCodes,
        testId: 'test-6895638450983059889',
        footnote: 'Test footnote'
    },
    {
        title: 'Table with missing data and selectable values',
        response: SELECTABLE_TABLE_WITH_MISSING_DATA,
        selectedValueCodes: {
            "Talotyyppi": ["1"],
            "Huoneluku": ["02"]
        },
        testId: 'test-84957394875983745'
    }
];

describe('Html table render tests', () => {
    it.each(testCases)('should match snapshot: $title', (testCase) => {
        const container = renderTestTable(testCase);
        try {
            expect(container).toMatchSnapshot();
        } finally {
            container.remove();
        }
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
        const testId = 'test-84957394875983745';
        const errorSpy = jest.spyOn(console, "error").mockImplementation(() => undefined);
        const div = document.createElement('div');
        div.id = testId;
        document.body.appendChild(div);
        try {
            renderHtmlTable(mockView, 'fi', defaultSettings, testId);
            expect(div).toMatchSnapshot();
        } finally {
            div.remove();
            errorSpy.mockRestore();
        }
    });
});