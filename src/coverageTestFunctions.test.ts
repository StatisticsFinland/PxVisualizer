import { coveredTestFunction } from './coverageTestFunctions';

describe('coveredTestFunction test', () => {
    it('should return the input multiplied by 2', () => {
        expect(coveredTestFunction(3)).toBe(6);
    });
});