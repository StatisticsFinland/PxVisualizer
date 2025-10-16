import { IJsonStat2Dataset } from "../../core/types/jsonStat2";

export const JSON_STAT2_POPULATION_TIME_SERIES: IJsonStat2Dataset = {
    "version": "2.0",
    "class": "dataset",
    "label": "Population by time and sex",
    "href": "https://jsonstat.org/",
    "updated": "2024-01-15T12:00:00.000Z",
    "source": "Statistics Finland",
    "id": ["sex", "time", "population"],
    "size": [2, 10],
    "role": {
        "time": ["time"],
        "metric": [ "population" ],
    },
    "dimension": {
        "sex": {
            "label": "Sex",
            "category": {
                "index": ["male", "female"],
                "label": {
                    "male": "Males",
                    "female": "Females"
                }
            }
        },
        "time": {
            "label": "Year",
            "category": {
                "index": ["2015", "2016", "2017", "2018", "2019", "2020", "2021", "2022", "2023", "2024"],
                "label": {
                    "2015": "2015",
                    "2016": "2016", 
                    "2017": "2017",
                    "2018": "2018",
                    "2019": "2019",
                    "2020": "2020",
                    "2021": "2021",
                    "2022": "2022",
                    "2023": "2023",
                    "2024": "2024"
                }
            }
        },
        "population": {
            "label": "Population",
            "category": {
                "index": ["total"],
                "label": {
                    "total": "Total population"
                },
                "unit": {
                    "total": {
                        "label": "persons",
                        "decimals": 0,
                        "position": "end"
                    }
                }
            }
        }
    },
    "value": [
        // Males: 2015-2024
        2712327, 2719131, 2723290, 2728262, 2733808, 2743101, 2753477, 2763024, 2772850, 2782000,
        // Females: 2015-2024
        2790970, 2793999, 2794629, 2797030, 2799985, 2805140, 2810493, 2816200, 2822100, 2828300
    ]
};

export const JSON_STAT2_QUARTERLY_RENT_DATA: IJsonStat2Dataset = {
    "version": "2.0",
    "class": "dataset", 
    "label": "Rental prices per square meter",
    "updated": "2024-01-15T12:00:00.000Z",
    "source": "Statistics Finland",
    "id": ["region", "time", "rent"],
    "size": [3, 8],
    "role": {
        "time": ["time"],
        "geo": ["region"],
        "metric": ["rent"]
    },
    "dimension": {
        "region": {
            "label": "Region",
            "category": {
                "index": ["091", "837", "853"],
                "label": {
                    "091": "Helsinki",
                    "837": "Tampere", 
                    "853": "Turku"
                }
            }
        },
        "time": {
            "label": "Quarter",
            "category": {
                "index": ["2023Q4"],
                "label": {
                    "2023Q4": "2023Q4"
                }
            }
        },
        "rent": {
            "label": "Rent per square meter",
            "category": {
                "index": ["average"],
                "label": {
                    "average": "Average rent"
                },
                "unit": {
                    "average": {
                        "label": "euros per square meter",
                        "decimals": 2,
                        "position": "end"
                    }
                }
            }
        }
    },
    "value": [
        // Helsinki: 2022Q1-2023Q4
        26.59,
        // Tampere: 2022Q1-2023Q4
        18.93,
        // Turku: 2022Q1-2023Q4
        17.76
    ]
};