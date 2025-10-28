import { render } from "@testing-library/react";
import { TableView } from "./tableView";
import { convertPxGrafResponseToView } from "../../../core/conversion/viewUtils";
import React from "react";
import { TABLE_WITH_ROW_AND_COLUMN_VARIABLES } from "../../../core/conversion/fixtures/tableChart";
import { ITableOptions } from "../../../core/types/tableOptions";

jest.mock('uuid', () => ({
    v4: () => 'foobar'
}));

describe('TableView render tests', () => {
    it('Should render correctly', () => {
        const options: ITableOptions = {
            showTitles: true,
            showUnits: true,
            showSources: true,
            showLastUpdated: false
        };
        const { asFragment } = render(<TableView view={convertPxGrafResponseToView(TABLE_WITH_ROW_AND_COLUMN_VARIABLES.pxGraphData, TABLE_WITH_ROW_AND_COLUMN_VARIABLES.selectedVariableCodes)} locale={'fi'} options={options} />);
        expect(asFragment()).toMatchSnapshot();
    });
});