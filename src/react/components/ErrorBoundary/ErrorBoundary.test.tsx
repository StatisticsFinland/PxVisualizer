import React from 'react';
import ErrorBoundary from "./ErrorBoundary";
import { render } from '@testing-library/react';

const TestComponent = () => {
    throw new Error('Test Error');
}

describe('ErrorBoundary', () => {
    it('should render the fallback component when an error is thrown', () => {
        const { getByTestId } = render(
            <ErrorBoundary fallback={<div data-testid='fallback'>Error</div>}>
                <TestComponent />
            </ErrorBoundary>
        );
        const fallback = getByTestId('fallback');
        expect(fallback).toBeTruthy();
    });

    it('should render the children when no error is thrown', () => {
        const { getByTestId } = render(
            <ErrorBoundary fallback={<div data-testid='fallback'>Error</div>}>
                <div data-testid='children'>Children</div>
            </ErrorBoundary>
        );

        expect(() => getByTestId('fallback')).toThrow('Unable to find an element by: [data-testid="fallback"]');
        expect(getByTestId('children')).toBeTruthy();
    });
});
