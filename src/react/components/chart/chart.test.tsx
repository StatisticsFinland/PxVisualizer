import React from "react";
import { Chart } from "./chart";
import { TOTALLY_BROKEN_CHART_FIXTURE, GROUP_VERTICAL_BAR_CHART_CHART_FIXTURE, TABLE_WITH_ROW_AND_COLUMN_VARIABLES_CHART_FIXTURE } from "./testFixtures/pxGrafResponses";
import { render } from "@testing-library/react";

function componentMocker(name: string): React.FC<any> {
    const reactFC = (props: any, ref: any) => <div/>;
    return React.forwardRef(reactFC);
}

jest.mock('uuid', () => ({
    ...jest.requireActual('uuid'),
    v4: () => 'foobar'
}));

jest.mock('highcharts-react-official', () => {
    const lib = jest.requireActual("highcharts-react-official");
    return {
        ...lib,
        HighchartsReact: componentMocker('HighchartsReact')
    }
});

describe('Rendering test', () => {

    it('renders chart data correctly', () => {
        const { asFragment } = render(
            <Chart
                pxGraphData={GROUP_VERTICAL_BAR_CHART_CHART_FIXTURE}
                locale={'fi'}
            />);
        expect(asFragment()).toMatchSnapshot();
    });

    it('renders chart data correctly with hidden title', () => {
        const { asFragment } = render(
            <Chart
                pxGraphData={GROUP_VERTICAL_BAR_CHART_CHART_FIXTURE}
                locale={'fi'}
                showTitles={false}
                
            />);
        expect(asFragment()).toMatchSnapshot();
    });

    it('renders table data correctly', () => {
        const { asFragment } = render(
            <Chart
                pxGraphData={TABLE_WITH_ROW_AND_COLUMN_VARIABLES_CHART_FIXTURE}
                locale={'fi'}
            />);
        expect(asFragment()).toMatchSnapshot();
    });

    it('renders table data correctly when titles are forced on', () => {
        const { asFragment } = render(
            <Chart
                pxGraphData={TABLE_WITH_ROW_AND_COLUMN_VARIABLES_CHART_FIXTURE}
                locale={'fi'}
                showTitles={true}
            />);
        expect(asFragment()).toMatchSnapshot();
    });

    it('renders table data correctly when units and footnote are on', () => {
        const { asFragment } = render(
            <Chart
                pxGraphData={TABLE_WITH_ROW_AND_COLUMN_VARIABLES_CHART_FIXTURE}
                locale={'fi'}
                showTableUnits={true}
                footnote='Test footnote'
            />);
        expect(asFragment()).toMatchSnapshot();
    });

    it('renders table data correctly when sources are on', () => {
        const { asFragment } = render(
            <Chart
                pxGraphData={TABLE_WITH_ROW_AND_COLUMN_VARIABLES_CHART_FIXTURE}
                locale={'fi'}
                showTableSources={true}
            />);
        expect(asFragment()).toMatchSnapshot();
    });

    it('renders table data correctly when given footnote', () => {
        const { asFragment } = render(
            <Chart
                pxGraphData={TABLE_WITH_ROW_AND_COLUMN_VARIABLES_CHART_FIXTURE}
                locale={'fi'}
                footnote='Test footnote'
            />);
        expect(asFragment()).toMatchSnapshot();
    });

    it('renders error component on broken data', () => {
        const spy = jest.spyOn(console, "error");
        spy.mockImplementation(() => { });

        const { asFragment } = render(
            <Chart
                pxGraphData={TOTALLY_BROKEN_CHART_FIXTURE}
                locale={'fi'}
            />);
        expect(asFragment()).toMatchSnapshot();

        spy.mockRestore();
    });
});