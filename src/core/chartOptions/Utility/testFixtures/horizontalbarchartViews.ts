import { ETimeVariableInterval, EVisualizationType } from "../../../types";
import { View } from "../../../types/view";

export const simpleHorizontalBarchartViewFixture: View = {
    "header": {
        "fi": "Neliövuokra (eur/m2) 2022Q4 muuttujana Alue",
        "sv": "Kvadratmeterspris (eur/m2) 2022Q4 efter Område",
        "en": "Rents per square meter (eur/m2) 2022Q4 by Region"
    },
    "tableReferenceName": "table.px",
    "subheaderValues": [],
    "units": [
        {
            "name": {
                "fi": "Neliövuokra (eur/m2)",
                "sv": "Kvadratmeterspris (eur/m2)",
                "en": "Rents per square meter (eur/m2)"
            },
            "unit": {
                "fi": "eur / m2",
                "sv": "eur / m2",
                "en": "eur / m2"
            }
        }
    ],
    "sources": [
        {
            "fi": "PxVisualizer-fi",
            "sv": "PxVisualizer-sv",
            "en": "PxVisualizer-en"
        }
    ],
    "columnNameGroups": [
        [
            {
                "fi": "Oulu",
                "sv": "Uleåborg",
                "en": "Oulu"
            }
        ],
        [
            {
                "fi": "Jyväskylä",
                "sv": "Jyväskylä",
                "en": "Jyväskylä"
            }
        ],
        [
            {
                "fi": "Turku",
                "sv": "Åbo",
                "en": "Turku"
            }
        ],
        [
            {
                "fi": "Tampere",
                "sv": "Tammerfors",
                "en": "Tampere"
            }
        ],
        [
            {
                "fi": "Helsinki",
                "sv": "Helsingfors",
                "en": "Helsinki"
            }
        ]
    ],
    "series": [
        {
            "rowNameGroup": [],
            "series": [
                {
                    "value": 13.23,
                    "precision": 2,
                    "preliminary": false
                },
                {
                    "value": 13.88,
                    "precision": 2,
                    "preliminary": false
                },
                {
                    "value": 14.41,
                    "precision": 2,
                    "preliminary": false
                },
                {
                    "value": 15.38,
                    "precision": 2,
                    "preliminary": false
                },
                {
                    "value": 18.88,
                    "precision": 2,
                    "preliminary": false
                }
            ]
        }
    ],
    "colVarNames": [
        {
            "fi": "Alue",
            "sv": "Område",
            "en": "Region"
        }
    ],
    "rowVarNames": [],
    "selectableVarNames": [],
    "visualizationSettings": {
        "sorting": "ascending",
        "timeVariableIntervals": ETimeVariableInterval.Quarter,
        "visualizationType": EVisualizationType.HorizontalBarChart,
        "defaultSelectableVariableCodes": null,
        "showDataPoints": true
    },
    "seriesType": 2
};