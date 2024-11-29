import React, { useMemo } from "react";
import styled from "styled-components";
import { convertPxGraphDataToChartOptions, EVisualizationType, IQueryVisualizationResponse, defaultTheme } from "../../../core";

import Highcharts from 'highcharts';
// Named import HighchartsReact was added to get pxvisualiser to work in pxgraf-creator.
// Could be something to be resolved with microbundle (non-)configuration too?
import HighchartsReactOfficial, { HighchartsReact } from 'highcharts-react-official';
import highchartsAccessibility from "highcharts/modules/accessibility.js";
import highchartsExporting from 'highcharts/modules/exporting.js';
import highchartsExportData from 'highcharts/modules/export-data.js';
import highchartsOfflineExporting from 'highcharts/modules/offline-exporting.js';
import { BurgerMenu, IFunctionalMenuItem, ILinkMenuItem } from "../burgerMenu/burgerMenu";
import { extractSelectableVariableValues } from "../../../core/conversion/helpers";
import { convertPxGrafResponseToView } from "../../../core/conversion/viewUtils";
import { formatLocale } from "../../../core/chartOptions/Utility/formatters"; 
import { TableView } from "./tableView";
import { GlobalStyle } from "../globalStyle";
import { View } from "../../../core/types/view";
import { ErrorInfo } from "./ErrorInfo";
import { ErrorBoundary } from "../ErrorBoundary/ErrorBoundary";

const initializeHighcharts = (locale: string) => {
    if (typeof Highcharts === 'object') {
        Highcharts.wrap(Highcharts.SVGRenderer.prototype, 'init', function(this: any, proceed) { // https://stackoverflow.com/questions/53820683/customize-highcharts-desc-tag
            proceed.apply(this, Array.prototype.slice.call(arguments, 1));
            const descRegex = /Created with Highcharts/;
            if (this.box.children[0] && descRegex.test(this.box.children[0].innerHTML)) {
                this.box.children[0].remove(); // remove hardcoded "<desc>Created with Highcharts {version number}</desc> from the code"
            }
        });
        highchartsAccessibility(Highcharts);
        highchartsExporting(Highcharts);
        highchartsExportData(Highcharts);
        highchartsOfflineExporting(Highcharts);
        Highcharts.setOptions(defaultTheme(locale));
    }
}

const ChartWrapper = styled.div`
    width: 100%;
    position: relative;
`;

const MenuContainer = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    z-index: 1;
`;

interface IChartContainerProps {
    $tableMode: boolean;
}

interface ITableContainerProps {
    $tableMode: boolean;
}

const ChartContainer = styled.div<IChartContainerProps>`
    display: ${p => p.$tableMode ? 'none' : 'block'};
`;

const TableContainer = styled.div<ITableContainerProps>`
    display: ${p => p.$tableMode ? 'block' : 'none'};
`;

export interface IChartProps {
    pxGraphData: IQueryVisualizationResponse;
    locale: string;
    selectedVariableCodes?: { [key: string]: string[] };
    showContextMenu?: boolean;
    menuItemDefinitions?: (IFunctionalMenuItem | ILinkMenuItem)[];
    menuIconInheritColor?: boolean;
    showTableTitles?: boolean;
    showTableUnits?: boolean;
    showTableSources?: boolean;
    footnote?: string;
}

const ReactChart: React.FC<IChartProps> = ({ pxGraphData, footnote, locale, menuItemDefinitions, selectedVariableCodes = null, showContextMenu = true, menuIconInheritColor = false, showTableTitles, showTableUnits, showTableSources}) => {
    const validLocale = formatLocale(locale);
    initializeHighcharts(validLocale);

    const chartRef: React.MutableRefObject<HighchartsReactOfficial.RefObject | null> = React.useRef(null);

    const [currentChartRef, setCurrentChartRef] = React.useState(chartRef.current);
    const [tableMode, setTableMode] = React.useState(false);
    const [width, setWidth] = React.useState(0);

    const variableSelections = useMemo(() => {
        try  {
            return extractSelectableVariableValues(pxGraphData.selectableVariableCodes, pxGraphData.metaData, pxGraphData.visualizationSettings.defaultSelectableVariableCodes, selectedVariableCodes);
        }
        catch (error: any) {
            console.error(error);
            return {};
        }
    }, [selectedVariableCodes, pxGraphData]);

    const view: View | null = useMemo(() => {
        try {
            return convertPxGrafResponseToView(pxGraphData, variableSelections);
        }
        catch (error: any) {
            console.error(error);
            return null;
        }
    }, [variableSelections, pxGraphData]);

    // Force rerender on window resize events, so that scaling and scrollboxes work correctly. Feel free to refactor to a more performant or better solution
    let renderTimeOut: NodeJS.Timeout;
    function rerender() {
        if (width !== window.innerWidth) {
            setWidth(window.innerWidth);
        }
    }

    function redrawChart() {
        clearTimeout(renderTimeOut);
        renderTimeOut = setTimeout(rerender, 100);
    }

    if (window) {
        window.addEventListener('resize', redrawChart);
    }

    const toggleTableMode = () => {
        setTableMode(!tableMode);
    }

    React.useEffect(() => {
        if (chartRef.current) {
            setCurrentChartRef(chartRef.current);
        }
    }, [chartRef.current]);

    try {
        // Chart
        if (view && pxGraphData.visualizationSettings.visualizationType !== EVisualizationType.Table) {
            const highChartOptions = convertPxGraphDataToChartOptions(validLocale, view);
            return (
                <ChartWrapper>
                    {
                        showContextMenu &&
                        <MenuContainer>
                            <BurgerMenu menuItemDefinitions={menuItemDefinitions} viewData={view} currentChartRef={currentChartRef} locale={validLocale} tableToggle={{ tableMode: tableMode, toggleHandler: toggleTableMode }} menuIconInheritColor={menuIconInheritColor} />
                        </MenuContainer>
                    }
                    <ChartContainer $tableMode={tableMode}>
                        <HighchartsReact
                            ref={chartRef}
                            immutable={true}
                            highcharts={Highcharts}
                            options={highChartOptions}/>
                    </ChartContainer>
                    <TableContainer $tableMode={tableMode}>
                        <TableView showTitles={showTableTitles ?? true} footnote={footnote} showUnits={!!showTableUnits} showSources={!!showTableSources} view={view} locale={validLocale} />
                    </TableContainer>
                </ChartWrapper>
            );
        }

        // Table
        if (view && pxGraphData.visualizationSettings.visualizationType === EVisualizationType.Table) {
            return (
                <ChartWrapper>
                    {
                        showContextMenu &&
                        <MenuContainer>
                            <BurgerMenu menuItemDefinitions={menuItemDefinitions} viewData={view} locale={validLocale} menuIconInheritColor={menuIconInheritColor} />
                        </MenuContainer>
                    }
                    <TableView showTitles={showTableTitles ?? false} footnote={footnote} showUnits={!!showTableUnits} showSources={!!showTableSources} view={view} locale={validLocale} />
                </ChartWrapper>
            );
        }
    } catch (error: any) {
        console.error(error);
        return <ErrorInfo locale={validLocale} />;
    }

    // Error
    return <ErrorInfo locale={validLocale} />;
};

export const Chart: React.FC<IChartProps> = (props) => {
    const validLocale = formatLocale(props.locale);
    return (
        <ErrorBoundary fallback={<ErrorInfo locale={validLocale} />}>
            <GlobalStyle />
            <ReactChart {...props} />
        </ErrorBoundary>
    );
};