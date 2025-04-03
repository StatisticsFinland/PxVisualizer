import { render, screen, fireEvent } from "@testing-library/react";
import { MenuItem } from "./menuItem";
import React, { act } from "react";
import 'jest-styled-components';

const mockFunction = jest.fn();

const mockImg = (
    <img src={'https://www.google.fi/favicon.ico'} />
);

describe('MenuItem, rendering tests', () => {
    it('should render', () => {
        const { asFragment } = render(<MenuItem locale={'fi'} text={'NAPPI'} onClick={mockFunction} idPrefix='foo' />);
        expect(asFragment()).toMatchSnapshot();
    });
    it('should render with correct prefix icon', () => {
        const { asFragment } = render(<MenuItem prefixIcon={'Download'} locale={'fi'} text={'NAPPI'} onClick={mockFunction} idPrefix='foo' />);
        expect(asFragment()).toMatchSnapshot();
    });
    it('should render with correct suffix icon', () => {
        const { asFragment } = render(<MenuItem suffixIcon={'Download'} locale={'fi'} text={'NAPPI'} onClick={mockFunction} idPrefix='foo' />);
        expect(asFragment()).toMatchSnapshot();
    });
    it('should render with correct external icon', () => {
        const { asFragment } = render(<MenuItem isExternal={true} locale={'fi'} text={'NAPPI'} url={'foobar'} idPrefix='foo' />);
        expect(asFragment()).toMatchSnapshot();
    });
    it('should render with correct custom suffix icon', () => {
        const { asFragment } = render(<MenuItem suffixIcon={mockImg} locale={'fi'} text={'NAPPI'} onClick={mockFunction} idPrefix='foo' />);
        expect(asFragment()).toMatchSnapshot();
    });
});

describe('MenuItem, functional tests', () => {
    beforeEach(() => {
        mockFunction.mockClear();
    });

    it('should call onclick function when clicked', () => {
        const btnText = 'PRESSME';
        render(<MenuItem locale={'fi'} text={btnText} onClick={mockFunction} idPrefix='foo' />);
        screen.getByText(btnText).click();
        expect(mockFunction).toHaveBeenCalledTimes(1);
        screen.getByText(btnText).click();
        expect(mockFunction).toHaveBeenCalledTimes(2);
    });

    it('should render a link that calls onclick function when clicked', () => {
        const btnText = 'PRESSME';
        render(<MenuItem locale={'fi'} text={btnText} url={'foobar.fi'} openNewTab={true} onClick={mockFunction} idPrefix='foo' />);
        expect(screen.getAllByRole('menuitem').length).toBe(1);
        screen.getByText(btnText).click();
        expect(mockFunction).toHaveBeenCalledTimes(1);
    });

    it('should call onclick function when spacebar is pressed', () => {
        const btnText = 'PRESSME';
        render(<MenuItem locale={'fi'} text={btnText} url={'foobar.fi'} openNewTab={true} onClick={mockFunction} idPrefix='foo' />);
        screen.getByText(btnText).focus();
        act(() => {
            fireEvent.keyDown(screen.getByText(btnText), { key: ' ' });
        });
        expect(mockFunction).toHaveBeenCalledTimes(1);
    });

    it('should render nothing if functionality is not declared', () => {
        const btnText = 'PRESSME';
        render(<MenuItem locale={'fi'} text={btnText} idPrefix='foo' />);
        expect(screen.queryByText(btnText)).toBeNull();
    });
});