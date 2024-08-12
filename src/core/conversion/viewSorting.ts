import { IDataCell, IDataSeries, View } from "../types/view";

export const ASCENDING = 'ascending';
export const DESCENDING = 'descending';
export const SUM = 'sum';
export const NO_SORTING = 'no_sorting';
export const REVERSED = 'reversed';

export const ASCENDING_SORTING_FUNC = (a : IDataCell, b: IDataCell) => (a.value ?? 0) - (b.value ?? 0);
export const DESCENDING_SORTING_FUNC = (a: IDataCell, b: IDataCell) => (b.value ?? 0) - (a.value ?? 0);

export function sortViewBasedOnSeries(view: View, referenceSeriesIndex: number, sortingFunc: (a: IDataCell, b: IDataCell) => number) : View {
    const sortedView = reorderView(view, view.series[referenceSeriesIndex].series, sortingFunc);
    return raiseReferenceSeriesToFirst(sortedView, referenceSeriesIndex);
}

export function sortViewBasedOnSeriesRelative(originalWiew: View, relativeView: View, referenceSeriesIndex: number, sortingFunc: (a: IDataCell, b: IDataCell) => number) : View {
    const sortedView = reorderView(originalWiew, relativeView.series[referenceSeriesIndex].series, sortingFunc);
    return raiseReferenceSeriesToFirst(sortedView, referenceSeriesIndex);
}

export function sortViewBasedOnSum(view: View, sortingFunc: (a: IDataCell, b: IDataCell) => number) {
    const sumArray: IDataCell[] = view.columnNameGroups
        .map((_, i) => {
            return {
                value: view.series
                    .map(s => s.series[i])
                    .reduce((accum: number, item: IDataCell) => accum + (item.value ?? 0), 0),
                // these are just to complete the type, they are not used
                precision: 0,
                preliminary: false
            };
        });
    return reorderView(view, sumArray, sortingFunc);
}

export function reverseViewOrder(view: View) {
    const reversedSeries = [...view.series].reverse().map(s => ({
        ...s,
        series: [...s.series].reverse(),
        rowNameGroup: [...s.rowNameGroup].reverse()
    }));

    return {
        ...view,
        series: reversedSeries,
        columnNameGroups: [...view.columnNameGroups].reverse()
    };
}

function get1DSortingIndexBuffer(series: IDataCell[], sortingFunc: (a: IDataCell, b: IDataCell) => number): number[] {
    const indices = [...Array(series.length).keys()];
    indices.sort((a, b) => sortingFunc(series[a], series[b]));
    return indices;
}

function reorderSeriesBasedOnIndexBuffer(series: IDataSeries, indexBuffer: number[]) : IDataSeries {
    return {
        ...series,
        series: indexBuffer.map(i => series.series[i])
    };
}

function reorderView(view: View, sortingSeries: IDataCell[], sortingFunc: (a: IDataCell, b: IDataCell) => number) : View {
    const sortingIndices = get1DSortingIndexBuffer(sortingSeries, sortingFunc);
    const columnNameGroups = sortingIndices.map(i => view.columnNameGroups[i]);
    const series = view.series.map(s => reorderSeriesBasedOnIndexBuffer(s, sortingIndices));

    return {
        ...view,
        columnNameGroups,
        series
    };
}

function raiseReferenceSeriesToFirst(view: View, referenceSeriesIndex: number) : View
{
    const reorderedSeriesArray = [];
    reorderedSeriesArray.push(view.series[referenceSeriesIndex]);
    view.series.forEach((series, index) => {
        if(index !== referenceSeriesIndex) reorderedSeriesArray.push(series)
    });
    return {...view, series: reorderedSeriesArray };
}
