import React from "react";
import { ErrorInfo } from "./ErrorInfo";
import { render } from "@testing-library/react";

describe('Rendering test', () => {

    it('renders correctly', () => {
        const { asFragment } = render(
            <ErrorInfo locale={'fi'} />
        );
        expect(asFragment()).toMatchSnapshot();
    });
});