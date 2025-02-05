import { ETimeVariableInterval, EVisualizationType, IQueryVisualizationResponse } from "../../types";

export const EMPTY_VISUALIZATION_RESPONSE: IQueryVisualizationResponse = {
    tableReference: { name: "", hierarchy: [] },
    data: [],
    missingDataInfo: {},
    dataNotes: {},
    metaData: [],
    selectableVariableCodes: [],
    rowVariableCodes: [],
    columnVariableCodes: [],
    header: {},
    visualizationSettings: {
        visualizationType: EVisualizationType.Table,
        timeVariableIntervals: ETimeVariableInterval.Irregular,
    }
};
