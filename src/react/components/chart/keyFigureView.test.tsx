import { render } from "@testing-library/react";
import { convertPxGrafResponseToView } from "../../../core/conversion/viewUtils";
import React from "react";
import { TABLE_WITH_ONE_CELL } from "../../../stories/fixtures/table";
import { KeyFigureView } from "./keyFigureView";

jest.mock('uuid', () => ({
    ...jest.requireActual('uuid'),
    v4: () => 'foobar'
}));

describe('KeyFigure render tests', () => {
    it('Should render correctly', () => {
        const timeVarValName: string = "2022 Q4";
        const lastUpdated: string = "2023-10-01T12:00:00Z";
        const { asFragment } = render(<KeyFigureView view={convertPxGrafResponseToView(TABLE_WITH_ONE_CELL.pxGraphData, {})} locale={'fi'} timeVariableValue={timeVarValName} lastUpdated={lastUpdated} />);
        expect(asFragment()).toMatchSnapshot();
    });
});