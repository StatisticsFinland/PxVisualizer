import { render } from "@testing-library/react";
import { TableView } from "./tableView";
import { convertPxGrafResponseToView } from "../../../core/conversion/viewUtils";
import React from "react";
import { TABLE_WITH_ROW_AND_COLUMN_VARIABLES } from "../../../core/conversion/fixtures/tableChart";

jest.mock('uuid', () => ({
    v4: () => 'foobar'
}));

describe('TableView render tests', () => {
    it('Should render correctly', () => {
        const { asFragment } = render(<TableView view={convertPxGrafResponseToView(TABLE_WITH_ROW_AND_COLUMN_VARIABLES.pxGraphData, TABLE_WITH_ROW_AND_COLUMN_VARIABLES.selectedVariableCodes)} locale={'fi'} />);
        expect(asFragment()).toMatchSnapshot();
    });
});