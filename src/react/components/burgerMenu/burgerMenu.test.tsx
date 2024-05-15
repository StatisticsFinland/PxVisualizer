import { act, render, screen, waitFor } from "@testing-library/react";
import { BurgerMenu, calculateExportDimensions } from "./burgerMenu";
import { HORIZONTAL_BAR_CHART_ASCENDING } from "../../../core/conversion/TestFixtures/horizontalBarChart";
import { convertPxGrafResponseToView } from "../../../core/conversion/viewUtils";
import React from "react";
import 'jest-styled-components';

describe('burgerMenu, rendering tests', () => {
    it('Should render', () => {
        const view = convertPxGrafResponseToView(HORIZONTAL_BAR_CHART_ASCENDING, {});
        const { asFragment } = render(<BurgerMenu locale="fi" viewData={view} />);
        expect(asFragment()).toMatchSnapshot();
    });
});

describe('burgerMenu, functional tests', () => {
    it('Should open the menu with correct menu elements', async() => {
        const view = convertPxGrafResponseToView(HORIZONTAL_BAR_CHART_ASCENDING, {});
        render(<BurgerMenu locale="fi" viewData={view} />);
        act(() => {
            screen.getByRole('button').click();
        });
        await waitFor(() => {
            expect(screen.getAllByRole('button').length).toEqual(3);
            expect(screen.getByText('Lataa taulukko (csv)')).toBeTruthy();
            expect(screen.getByText('Lataa taulukko (xlsx)')).toBeTruthy();
        });
    });

    it('Should open the menu with correct custom elements', async() => {
        const view = convertPxGrafResponseToView(HORIZONTAL_BAR_CHART_ASCENDING, {});
        render(<BurgerMenu locale="fi" viewData={view} menuItemDefinitions={[{text: 'Foo', onClick: jest.fn()}, {text: 'Bar', onClick: jest.fn()}, {text: 'Baz', url: 'foobar.com', isExternal: true}, {text: 'Baz2', url: 'foobar2.com', isExternal: false}]} />);
        act(() => {
            screen.getByRole('button').click();
        });
        await waitFor(() => {
            expect(screen.getAllByRole('button').length).toEqual(7);
            expect(screen.getByText('Lataa taulukko (csv)')).toBeTruthy();
            expect(screen.getByText('Lataa taulukko (xlsx)')).toBeTruthy();
            expect(screen.getByText('Foo')).toBeTruthy();
            expect(screen.getByText('Bar')).toBeTruthy();
            expect(screen.getByText('Baz')).toBeTruthy();
            expect(screen.getByText('Ulkoinen linkki')).toBeTruthy();
            expect(screen.getByText('Baz2')).toBeTruthy();
            expect(screen.getAllByRole('link').length).toBe(2);
        });
    });

    it('Should invoke the custom function when clicked', async() => {
        const view = convertPxGrafResponseToView(HORIZONTAL_BAR_CHART_ASCENDING, {});
        const mockFunction = jest.fn();
        const btnText = 'Foo';
        render(<BurgerMenu locale="fi" viewData={view} menuItemDefinitions={[{text: btnText, onClick: mockFunction}]} />);
        act(() => {
            screen.getByRole('button').click();
        });
        await waitFor(() => {
            screen.getByText(btnText).click();
            expect(mockFunction).toBeCalledTimes(1);
        });
    });

    it('Should calculate correct export dimensions for compliant input size', () => {
        const { finalWidth, finalHeight } = calculateExportDimensions(1200, 800);
        expect(finalWidth).toEqual(1200);
        expect(finalHeight).toEqual(800);
    });

    it('Should calculate correct export dimensions when aspect ratio is too low', () => {
        const { finalWidth, finalHeight } = calculateExportDimensions(2000, 600);
        expect(finalWidth).toEqual(2000);
        expect(finalHeight).toEqual(1000);
    });

    it('Should calculate correct export dimensions when aspect ratio is too large', () => {
        const { finalWidth, finalHeight } = calculateExportDimensions(600, 2000);
        expect(finalWidth).toEqual(1000);
        expect(finalHeight).toEqual(2000);
    });

    it('Should calculate correct export dimensions when width is too low', () => {
        const { finalWidth, finalHeight } = calculateExportDimensions(400, 800);
        expect(finalWidth).toEqual(600);
        expect(finalHeight).toEqual(1200);
    });

    it('Should calculate correct export dimensions when width is too large', () => {
        const { finalWidth, finalHeight } = calculateExportDimensions(4000, 2000);
        expect(finalWidth).toEqual(3000);
        expect(finalHeight).toEqual(1500);
    });

    it('Should calculate correct export dimensions when height is too low', () => {
        const { finalWidth, finalHeight } = calculateExportDimensions(800, 400);
        expect(finalWidth).toEqual(1200);
        expect(finalHeight).toEqual(600);
    });

    it('Should calculate correct export dimensions when height is too large', () => {
        const { finalWidth, finalHeight } = calculateExportDimensions(2000, 4000);
        expect(finalWidth).toEqual(1500);
        expect(finalHeight).toEqual(3000);
    });

    it('Should calculate correct export dimensions width and height are not provided', () => {
        const { finalWidth, finalHeight } = calculateExportDimensions(undefined, undefined);
        expect(finalWidth).toEqual(600);
        expect(finalHeight).toEqual(600);
    });
});