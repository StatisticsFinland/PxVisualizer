import { act, render, screen, waitFor, fireEvent } from "@testing-library/react";
import { BurgerMenu, calculateExportDimensions } from "./burgerMenu";
import { HORIZONTAL_BAR_CHART_ASCENDING } from "../../../core/conversion/fixtures/horizontalBarChart";
import { convertPxGrafResponseToView } from "../../../core/conversion/viewUtils";
import React from "react";
import 'jest-styled-components';
import { HighchartsReactRefObject } from "highcharts-react-official";
import { View } from "../../../core/types/view";
import { Translations } from "../../../core/conversion/translations";
import { generateFilename } from "../../../core/tables/exportingUtils";

describe('burgerMenu, rendering tests', () => {
    it('Should render', () => {
        const view = convertPxGrafResponseToView(HORIZONTAL_BAR_CHART_ASCENDING, {});
        const { asFragment } = render(<BurgerMenu locale="fi" viewData={view} />);
        expect(asFragment()).toMatchSnapshot();
    });
});

const viewData = { tableReference: "testTable" } as unknown as View;
const mockExportChartLocal = jest.fn();
beforeEach(() => {
    mockExportChartLocal.mockClear();
});

const mockTableToggle = {
    toggleHandler: jest.fn(),
    tableMode: false
}

describe('burgerMenu, functional tests', () => {
    it('Should open the menu with correct menu elements', async () => {
        const view = convertPxGrafResponseToView(HORIZONTAL_BAR_CHART_ASCENDING, {});
        render(<BurgerMenu locale="fi" viewData={view} tableToggle={mockTableToggle} accessibilityMode={false} toggleAccessibilityMode={jest.fn()} />);
        act(() => {
            screen.getByRole('button').click();
        });
        await waitFor(() => {
            expect(screen.getAllByRole('button').length).toEqual(5);
            expect(screen.getByText('Lataa taulukko (csv)')).toBeTruthy();
            expect(screen.getByText('Lataa taulukko (xlsx)')).toBeTruthy();
            expect(screen.getByText("N\u00E4yt\u00E4 taulukko")).toBeTruthy();
            expect(screen.getByText("N\u00E4yt\u00E4 kuviossa symbolit")).toBeTruthy();
        });
    });

    it('Should open the menu with correct custom elements', async () => {
        const view = convertPxGrafResponseToView(HORIZONTAL_BAR_CHART_ASCENDING, {});
        render(<BurgerMenu locale="fi" viewData={view} menuItemDefinitions={[{ text: 'Foo', onClick: jest.fn() }, { text: 'Bar', onClick: jest.fn() }, { text: 'Baz', url: 'foobar.com', isExternal: true }, { text: 'Baz2', url: 'foobar2.com', isExternal: false }]} accessibilityMode={false} toggleAccessibilityMode={jest.fn()} tableToggle={mockTableToggle} />);
        act(() => {
            screen.getByRole('button').click();
        });
        await waitFor(() => {
            expect(screen.getAllByRole('button').length).toEqual(7);
            expect(screen.getAllByRole('link').length).toEqual(2);
            expect(screen.getByText('Lataa taulukko (csv)')).toBeTruthy();
            expect(screen.getByText('Lataa taulukko (xlsx)')).toBeTruthy();
            expect(screen.getByText('Foo')).toBeTruthy();
            expect(screen.getByText('Bar')).toBeTruthy();
            expect(screen.getByText('Baz')).toBeTruthy();
            expect(screen.getByText('Ulkoinen linkki')).toBeTruthy();
            expect(screen.getByText('Baz2')).toBeTruthy();
            expect(screen.getAllByRole('link').length).toBe(2);
            expect(screen.getByText("N\u00E4yt\u00E4 taulukko")).toBeTruthy();
            expect(screen.getByText("N\u00E4yt\u00E4 kuviossa symbolit")).toBeTruthy();
        });
    });

    it('Should trigger the accessibilityMode function when the menu item is clicked', async () => {
        const view = convertPxGrafResponseToView(HORIZONTAL_BAR_CHART_ASCENDING, {});
        const mockToggleAccessibilityModeFunction = jest.fn();
        const mockTableToggle = {
            toggleHandler: jest.fn(),
            tableMode: false
        };
        render(
            <BurgerMenu
                locale="fi"
                viewData={view}
                tableToggle={mockTableToggle}
                accessibilityMode={false}
                toggleAccessibilityMode={mockToggleAccessibilityModeFunction}
            />
        );
        act(() => {
            screen.getByRole('button').click();
        });
        await waitFor(() => {
            const menuItem = screen.getByText(Translations.toggleAccessibilityModeOn["fi"]);
            fireEvent.click(menuItem);
            expect(mockToggleAccessibilityModeFunction).toHaveBeenCalledTimes(1);
        });
    });

    it('Should invoke the custom function and close the menu when button is clicked', async () => {
        const view = convertPxGrafResponseToView(HORIZONTAL_BAR_CHART_ASCENDING, {});
        const mockFunction = jest.fn();
        const btnText = 'Foo';
        render(<BurgerMenu locale="fi" viewData={view} menuItemDefinitions={[{ text: btnText, onClick: mockFunction }]} />);
        act(() => {
            screen.getByRole('button').click();
        });
        await waitFor(() => {
            screen.getByText(btnText).click();
            expect(mockFunction).toBeCalledTimes(1);
        });
        await waitFor(() => {
            expect(screen.queryByText(btnText)).toBeNull();
            expect(screen.queryByLabelText('Kuvion valikko')).not.toBeNull();
        });
    });

    it('Should invoke the custom function and close the menu when link is clicked', async () => {
        const view = convertPxGrafResponseToView(HORIZONTAL_BAR_CHART_ASCENDING, {});
        const mockFunction = jest.fn();
        const btnText = 'Foo';
        render(<BurgerMenu locale="fi" viewData={view} menuItemDefinitions={[{ text: btnText, url: 'foobar.fi', isExternal: false, onClick: mockFunction }]} />);
        act(() => {
            screen.getByRole('button').click();
        });
        await waitFor(() => {
            screen.getByText(btnText).click();
            expect(mockFunction).toBeCalledTimes(1);
        });
        await waitFor(() => {
            expect(screen.queryByText(btnText)).toBeNull();
            expect(screen.queryByLabelText('Kuvion valikko')).not.toBeNull();
        });
    });

    it('Should close the menu when ESC is pressed', async () => {
        const view = convertPxGrafResponseToView(HORIZONTAL_BAR_CHART_ASCENDING, {});
        render(<BurgerMenu locale="fi" viewData={view} />);
        act(() => {
            screen.getByRole('button').click();
        });
        await waitFor(() => {
            window.dispatchEvent(new KeyboardEvent('keydown', { key: 'Escape' }));
        });
        await waitFor(() => {
            expect(screen.queryByLabelText('Kuvion valikko')).not.toBeNull();
        });
    });

    it('Should calculate correct export dimensions when aspect ratio is too low', () => {
        const mockRef = {
            chart: {
                chartWidth: 2000,
                chartHeight: 600
            }
        } as HighchartsReactRefObject;

        const { finalWidth, finalHeight } = calculateExportDimensions(mockRef);
        expect(finalWidth).toEqual(2000);
        expect(finalHeight).toEqual(1000);
    });

    it('Should calculate correct export dimensions when aspect ratio is too large', () => {
        const mockRef = {
            chart: {
                chartWidth: 600,
                chartHeight: 2000
            }
        } as HighchartsReactRefObject;

        const { finalWidth, finalHeight } = calculateExportDimensions(mockRef);
        expect(finalWidth).toEqual(1000);
        expect(finalHeight).toEqual(2000);
    });

    it('Should calculate correct export dimensions when width is too low', () => {
        const mockRef = {
            chart: {
                chartWidth: 400,
                chartHeight: 800
            }
        } as HighchartsReactRefObject;

        const { finalWidth, finalHeight } = calculateExportDimensions(mockRef);
        expect(finalWidth).toEqual(600);
        expect(finalHeight).toEqual(1200);
    });

    it('Should calculate correct export dimensions when width is too large', () => {
        const mockRef = {
            chart: {
                chartWidth: 4000,
                chartHeight: 2000
            }
        } as HighchartsReactRefObject;
        const { finalWidth, finalHeight } = calculateExportDimensions(mockRef);
        expect(finalWidth).toEqual(3000);
        expect(finalHeight).toEqual(1500);
    });

    it('Should calculate correct export dimensions when height is too low', () => {
        const mockRef = {
            chart: {
                chartWidth: 800,
                chartHeight: 400
            }
        } as HighchartsReactRefObject;
        const { finalWidth, finalHeight } = calculateExportDimensions(mockRef);
        expect(finalWidth).toEqual(1200);
        expect(finalHeight).toEqual(600);
    });

    it('Should calculate correct export dimensions when height is too large', () => {
        const mockRef = {
            chart: {
                chartWidth: 2000,
                chartHeight: 4000
            }
        } as HighchartsReactRefObject;
        const { finalWidth, finalHeight } = calculateExportDimensions(mockRef);
        expect(finalWidth).toEqual(1500);
        expect(finalHeight).toEqual(3000);
    });

    it('should call exportChartLocal with correct parameters for SVG export', () => {
        const mockRef = {
            chart: {
                exportChartLocal: mockExportChartLocal,
                chartWidth: 800,
                chartHeight: 400
            }
        } as unknown as HighchartsReactRefObject;

        render(<BurgerMenu viewData={viewData} currentChartRef={mockRef} locale={"fi"} />);
        fireEvent.click(screen.getByLabelText(`${Translations.chartMenuLabel["fi"]}`));
        fireEvent.click(screen.getByText(Translations.downloadSVG["fi"]));

        const { finalWidth, finalHeight } = calculateExportDimensions(mockRef);
        expect(mockExportChartLocal).toHaveBeenCalledWith({
            filename: generateFilename(viewData.tableReferenceName),
            type: "image/svg+xml",
            sourceWidth: finalWidth,
            sourceHeight: finalHeight,
            scale: 1
        }, {});
    });

    it('should call exportChartLocal with correct parameters for PNG export', () => {
        const mockRef = {
            chart: {
                exportChartLocal: mockExportChartLocal,
                chartWidth: 800,
                chartHeight: 400
            }
        } as unknown as HighchartsReactRefObject;

        render(<BurgerMenu viewData={viewData} currentChartRef={mockRef} locale={"fi"} />);
        fireEvent.click(screen.getByLabelText(`${Translations.chartMenuLabel["fi"]}`));
        fireEvent.click(screen.getByText(Translations.downloadPNG["fi"]));

        const { finalWidth, finalHeight } = calculateExportDimensions(mockRef);
        expect(mockExportChartLocal).toHaveBeenCalledWith({
            filename: generateFilename(viewData.tableReferenceName),
            sourceWidth: finalWidth,
            sourceHeight: finalHeight,
            scale: 1
        }, {});
    });
});