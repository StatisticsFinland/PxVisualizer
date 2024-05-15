import { render, screen } from "@testing-library/react";
import MenuItem from "./menuItem";
import React from "react";
import 'jest-styled-components';

const mockFunction = jest.fn();

const mockImg = (
    <img src={'https://www.google.fi/favicon.ico'} />
);

describe('MenuItem, rendering tests', () => {
    it('should render', () => {
        const {asFragment} = render(<MenuItem locale={'fi'} text={'NAPPI'} onClick={mockFunction} />);
        expect(asFragment()).toMatchSnapshot();
    });
    it('should render with correct prefix icon', () => {
        const {asFragment} = render(<MenuItem prefixIcon={'Download'} locale={'fi'} text={'NAPPI'} onClick={mockFunction} />);
        expect(asFragment()).toMatchSnapshot();
    });
    it('should render with correct suffix icon', () => {
        const {asFragment} = render(<MenuItem suffixIcon={'Download'} locale={'fi'} text={'NAPPI'} onClick={mockFunction} />);
        expect(asFragment()).toMatchSnapshot();
    });
    it('should render with correct external icon', () => {
        const {asFragment} = render(<MenuItem isExternal={true} locale={'fi'} text={'NAPPI'} url={'foobar'} />);
        expect(asFragment()).toMatchSnapshot();
    });
    it('should render with correct custom suffix icon', () => {
        const {asFragment} = render(<MenuItem suffixIcon={mockImg} locale={'fi'} text={'NAPPI'} onClick={mockFunction} />);
        expect(asFragment()).toMatchSnapshot();
    });
});

describe('MenuItem, functional tests', () => {
    it('should call onclick function when clicked', () => {
        const btnText = 'PRESSME';
        render(<MenuItem locale={'fi'} text={btnText} onClick={mockFunction} />);
        screen.getByText(btnText).click();
        expect(mockFunction).toBeCalledTimes(1);
        screen.getByText(btnText).click();
        expect(mockFunction).toBeCalledTimes(2);
    });

    it('should render a link', () => {
        const btnText = 'PRESSME';
        render(<MenuItem locale={'fi'} text={btnText} url={'foobar.fi'} openNewTab={true} />);
        expect(screen.getAllByRole('link').length).toBe(1);
    });

    it('should render nothing if functionality is not declared', () => {
        const btnText = 'PRESSME';
        render(<MenuItem locale={'fi'} text={btnText} />);
        expect(screen.queryByText(btnText)).toBeNull();
    });
});