import { 
    IQueryVisualizationResponse, 
    IVariableMeta, 
    IVariableValueMeta, 
    IContentComponent,
    EVariableType, 
    EVisualizationType, 
    ETimeVariableInterval, 
    TMultiLanguageString, 
    IVisualizationSettings,
    ITableReference 
} from "../types/queryVisualizationResponse";
import { IJsonStat2Dataset } from "../types/jsonStat2";
import { TVariableSelections } from "../types/variableSelections";

export const convertJsonStat2ToPxVisualizerResponse = (
    jsonStatData: IJsonStat2Dataset,
    visualizationType: EVisualizationType,
    selectedVariableCodes?: TVariableSelections
): IQueryVisualizationResponse => {
    const dimensions = Object.keys(jsonStatData.dimension);
    const metaData = convertDimensionsToVariableMeta(jsonStatData, dimensions);
    
    // Build data array based on the JSON-Stat format
    const data = Array.isArray(jsonStatData.value) 
        ? jsonStatData.value 
        : convertObjectValueToArray(jsonStatData.value, jsonStatData.size);

    // Determine row and column variables based on visualization type and dimensions
    const { rowVariableCodes, columnVariableCodes, selectableVariableCodes } = 
        determineVariableLayout(dimensions, visualizationType, selectedVariableCodes);

    // Create table reference
    const tableReference: ITableReference = {
        name: jsonStatData.label || "JSON-Stat Dataset",
        hierarchy: []
    };

    // Create header
    const header: TMultiLanguageString = {
        "fi": jsonStatData.label || "JSON-Stat Dataset",
        "en": jsonStatData.label || "JSON-Stat Dataset"
    };

    // Create visualization settings
    const visualizationSettings: IVisualizationSettings = {
        visualizationType: visualizationType,
        timeVariableIntervals: ETimeVariableInterval.Year, // Default
        defaultSelectableVariableCodes: selectedVariableCodes || null
    };

    return {
        tableReference,
        data: data.map(value => typeof value === 'number' ? value : null),
        dataNotes: {},
        missingDataInfo: {},
        metaData,
        selectableVariableCodes,
        rowVariableCodes,
        columnVariableCodes,
        header,
        visualizationSettings
    };
};

const convertDimensionsToVariableMeta = (
    jsonStatData: IJsonStat2Dataset, 
    dimensions: string[]
): IVariableMeta[] => {
    return dimensions.map(dimensionCode => {
        const dimension = jsonStatData.dimension[dimensionCode];
        const dimensionIndex = jsonStatData.id.indexOf(dimensionCode);
        
        // Determine variable type based on role
        let variableType = EVariableType.OtherClassificatory;
        if (jsonStatData.role?.time?.includes(dimensionCode)) {
            variableType = EVariableType.Time;
        } else if (jsonStatData.role?.geo?.includes(dimensionCode)) {
            variableType = EVariableType.Geological;
        } else if (jsonStatData.role?.metric?.includes(dimensionCode)) {
            variableType = EVariableType.Content;
        }

        // Get category labels
        const categoryLabels = dimension.category.label;
        const categoryIndex = dimension.category.index;
        
        // Get ordered category codes
        let orderedCodes: string[];
        if (Array.isArray(categoryIndex)) {
            orderedCodes = categoryIndex;
        } else if (categoryIndex && typeof categoryIndex === 'object') {
            // Convert object index to ordered array
            orderedCodes = Object.keys(categoryIndex).sort((a, b) => categoryIndex[a] - categoryIndex[b]);
        } else {
            // Use the order from category labels
            orderedCodes = Object.keys(categoryLabels);
        }

        // Create variable values
        const values: IVariableValueMeta[] = orderedCodes.map(code => {
            const contentComponent: IContentComponent | null = 
                variableType === EVariableType.Content && dimension.category.unit?.[code] 
                ? {
                    unit: { "fi": dimension.category.unit[code].label || "", "en": dimension.category.unit[code].label || "" },
                    source: { "fi": "", "en": "" },
                    numberOfDecimals: dimension.category.unit[code].decimals || 0,
                    lastUpdated: jsonStatData.updated || new Date().toISOString()
                } 
                : null;

            return {
                code,
                name: { "fi": categoryLabels[code] || code, "en": categoryLabels[code] || code },
                note: dimension.category.note?.[code] 
                    ? { "fi": dimension.category.note[code].join(" "), "en": dimension.category.note[code].join(" ") }
                    : null,
                isSum: false,
                contentComponent
            };
        });

        return {
            code: dimensionCode,
            name: { "fi": dimension.label || dimensionCode, "en": dimension.label || dimensionCode },
            note: dimension.note 
                ? { "fi": dimension.note.join(" "), "en": dimension.note.join(" ") }
                : null,
            type: variableType,
            values
        };
    });
};

const convertObjectValueToArray = (
    valueObject: { [key: string]: number | null | string }, 
    size: number[]
): (number | null | string)[] => {
    const totalSize = size.reduce((acc, curr) => acc * curr, 1);
    const result: (number | null | string)[] = new Array(totalSize);
    
    Object.keys(valueObject).forEach(key => {
        const index = parseInt(key, 10);
        if (!isNaN(index) && index < totalSize) {
            result[index] = valueObject[key];
        }
    });
    
    return result;
};

const determineVariableLayout = (
    dimensions: string[], 
    visualizationType: EVisualizationType,
    selectedVariableCodes?: TVariableSelections
) => {
    // Default layout based on visualization type
    let rowVariableCodes: string[] = [];
    let columnVariableCodes: string[] = [];
    let selectableVariableCodes: string[] = [];

    if (dimensions.length === 0) {
        return { rowVariableCodes, columnVariableCodes, selectableVariableCodes };
    }

    switch (visualizationType) {
        case EVisualizationType.Table:
            // For tables, use first dimension as row, others as columns
            rowVariableCodes = [dimensions[0]];
            columnVariableCodes = dimensions.slice(1);
            break;
        
        case EVisualizationType.PieChart:
            // Pie charts typically use one dimension
            rowVariableCodes = [dimensions[0]];
            selectableVariableCodes = dimensions.slice(1);
            break;
        
        case EVisualizationType.LineChart:
        case EVisualizationType.ScatterPlot:
            // Line and scatter plots typically use two main dimensions
            if (dimensions.length >= 2) {
                rowVariableCodes = [dimensions[0]];
                columnVariableCodes = [dimensions[1]];
                selectableVariableCodes = dimensions.slice(2);
            } else {
                rowVariableCodes = dimensions;
            }
            break;
        
        default:
            // Bar charts and others
            if (dimensions.length >= 2) {
                rowVariableCodes = [dimensions[0]];
                columnVariableCodes = [dimensions[1]];
                selectableVariableCodes = dimensions.slice(2);
            } else {
                rowVariableCodes = dimensions;
            }
            break;
    }

    return { rowVariableCodes, columnVariableCodes, selectableVariableCodes };
};