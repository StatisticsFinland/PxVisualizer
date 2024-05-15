import { cartesianProduct, compareScalarArrays } from './utilityFunctions';

describe('cartesian function', () => {
    it('returns the correct Cartesian product', () => {
        const result = cartesianProduct([['a', 'b'], ['1', '2'], ['x', 'y', 'z']]);
        expect(result).toEqual([
            ['a', '1', 'x'], ['a', '1', 'y'], ['a', '1', 'z'],
            ['a', '2', 'x'], ['a', '2', 'y'], ['a', '2', 'z'],
            ['b', '1', 'x'], ['b', '1', 'y'], ['b', '1', 'z'],
            ['b', '2', 'x'], ['b', '2', 'y'], ['b', '2', 'z']
        ]);
    });

    it('returns an empty array for no inputs', () => {
        const result = cartesianProduct([]);
        expect(result).toEqual([[]]);
    });

    it('returns an array of singleton arrays for one input', () => {
        const result = cartesianProduct([[1, 2, 3]]);
        expect(result).toEqual([[1], [2], [3]]);
    });
});

describe('scalar array comparison', () => {
    it('compare two one-dimensional arrays', () => {
        const a: string[] = [];
        const b: string[] = [];
        expect(compareScalarArrays(a,b)).toEqual(true);
    });

    it('compare two one-dimensional arrays', () => {
        const a = ['a', 'b', 'c'];
        const b = ['a', 'b', 'c'];
        expect(compareScalarArrays(a,b)).toEqual(true);
    });

    it('compare two one-dimensional arrays', () => {
        const a = [1, 2, 3];
        const b = [1, 2, 3];
        expect(compareScalarArrays(a,b)).toEqual(true);
    });

    it('compare two one-dimensional arrays', () => {
        const a = [1, 2, 4];
        const b = [1, 2, 3];
        expect(compareScalarArrays(a,b)).toEqual(false);
    });

    it('compare two one-dimensional arrays', () => {
        const a = [['a', 'b', 'c'], ['a', 'b', 'c']];
        const b = [['a', 'b', 'c'], ['a', 'b', 'c']];
        expect(compareScalarArrays(a,b)).toEqual(true);
    });

    it('compare two one-dimensional arrays', () => {
        const a = [[['x', 'y'], ['x', 'y']], [['x', 'y'], ['x', 'y']]];
        const b = [['a', 'b'], ['a', 'b']];
        expect(compareScalarArrays(a,b)).toEqual(false);
    });

    it('compare two one-dimensional arrays', () => {
        const a = [['a', 'b', 'c'], ['a', 'b', 'c']];
        const b = [['a', 'b', 'c'], ['a', 'b', 'c']];
        expect(compareScalarArrays(a,b)).toEqual(true);
    });

    it('compare two one-dimensional arrays', () => {
        const a = ['a', 'b', 'c'];
        const b = ['c', 'b', 'a'];
        expect(compareScalarArrays(a,b)).toEqual(false);
    });

    it('compare two one-dimensional arrays', () => {
        const a = ['a', 'b'];
        const b = ['a', 'b', 'c'];
        expect(compareScalarArrays(a,b)).toEqual(false);
    });
});