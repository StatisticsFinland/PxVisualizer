export const cartesianProduct = <T>(allEntries: T[][]): T[][] => {
    return allEntries.reduce<T[][]>(
        (results, entries) =>
            results
                .map(result => entries.map(entry => result.concat([entry])))
                .reduce((subResults, result) => subResults.concat(result), []),
        [[]]
    )
}

type TNestedScalarArray = TNestedScalarArray[] | string[] | number[];

export const compareScalarArrays = (a: TNestedScalarArray, b: TNestedScalarArray): boolean => {
    if(a.length !== b.length) return false;

    for(let i = 0; i < a.length; i++) {
        if(Array.isArray(a[i]) && Array.isArray(b[i])) {
            if(!compareScalarArrays(a[i] as TNestedScalarArray, b[i] as TNestedScalarArray)) return false;
        } else if (a[i] !== b[i]) return false;
    }
    return true;
}

export function onlyUnique<T>(value: T, index: number, array: T[]) {
    return array.findIndex(t => JSON.stringify(t) === JSON.stringify(value)) === index;
};