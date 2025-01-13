import { EVisualizationType } from "../types";

export const generateFilename = (tableReference: string): string => {
    const trimmedTableReference = tableReference ? tableReference.split('.')[0] : '';

    const date = new Date();

    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const day = date.getDate().toString().padStart(2, '0');
    const hours = date.getHours().toString().padStart(2, '0');
    const minutes = date.getMinutes().toString().padStart(2, '0');
    const seconds = date.getSeconds().toString().padStart(2, '0');

    return `${trimmedTableReference}_${year}${month}${day}_${hours}${minutes}${seconds}`;
}

export const getRelativePrecision = (visualizationType: EVisualizationType): number | null => {
    return visualizationType == EVisualizationType.PercentHorizontalBarChart || visualizationType == EVisualizationType.PercentVerticalBarChart ?
        1 : null;
}
