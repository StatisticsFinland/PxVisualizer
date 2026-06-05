import React from "react";
import { ErrorInfo } from "./ErrorInfo";
import { render } from "@testing-library/react";
import "jest-styled-components";

describe('Rendering test', () => {

    it('renders correctly', () => {
        const { asFragment } = render(
            <ErrorInfo locale={'fi'} />
        );
        expect(asFragment()).toMatchSnapshot();
    });
});