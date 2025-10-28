import { DataLabelsOptions, Point, Tooltip } from "highcharts";
import { formatLocale, getDataFormattedForChartType, getDataLabelFormatterFunction, getLineChartToolTipFormatterFunction, getToolTipFormatterFunction, parseScreenReaderFriendlyTimePeriods, shortenStringValue, getFormattedLastUpdatedText } from "./formatters";
import { combinationValuesLinechartViewFixture, multiselectableLineChartViewFixture, simpleQuarterLinechartViewFixture } from "./fixtures/linechartViews";
import { simpleHorizontalBarchartViewFixture } from "./fixtures/horizontalbarchartViews";
import { simpleGroupHorizontalBarchartViewFixture } from "./fixtures/grouphorizontalbarchartViews";
import { View } from "../../types/view";

describe('formatLocale tests', () => {
    it('should return fi if not allowed locale', () => {
        const result = formatLocale('foobar');
        expect(result).toEqual('fi');
    });
    it('should return sv if locale is sv', () => {
        const result = formatLocale('sv');
        expect(result).toEqual('sv');
    });
    it('should return en if locale is misstyped en', () => {
        const result = formatLocale('  EN    ');
        expect(result).toEqual('en');
    });
});

describe('shortenStringValue tests', () => {
    it('Should return the default value if its under 50 characters', () => {
        const testValue = 'foobar';
        const result = shortenStringValue(testValue);
        expect(result).toBe('foobar');
    });

    it('Should return the default value if its under 50 characters and is a number', () => {
        const testValue = 50;
        const result = shortenStringValue(testValue);
        expect(result).toBe('50');
    });

    it('Should return the shortened value if its over 50 characters', () => {
        const testValue = 'foobarfoobarFoobarFoobarFoobarFoobarFoobarFoobarFoobar';
        const result = shortenStringValue(testValue);
        expect(result).toBe('foobarfoobarFoobarFoobarFoobarFoobarFoobarFoobarFo...');
    });

    it('Should return the shortened value with custom limit', () => {
        const testValue = 1001000;
        const testLength = 6;
        const result = shortenStringValue(testValue, testLength);
        expect(result).toBe('100100...');
    });

    it('Should return default value with custom limit if the length is exact', () => {
        const testValue = 'foobar';
        const testLength = 6;
        const result = shortenStringValue(testValue, testLength);
        expect(result).toBe('foobar');
    });

});

describe('parseScreenReaderFriendlyTimePeriods', () => {
    it('Should return parsed month string', () => {
        const testValue = '2000M1';
        const result = parseScreenReaderFriendlyTimePeriods(testValue, 'fi');
        const expected = '2000 tammikuu';
        expect(result).toEqual(expected);
    });

    it('Should return parsed month string localized', () => {
        const testValue = '2000M1';
        const result = parseScreenReaderFriendlyTimePeriods(testValue, 'en');
        const expected = '2000 January';
        expect(result).toEqual(expected);
    });

    it('Should return parsed quarter string', () => {
        const testValue = '2000Q1';
        const result = parseScreenReaderFriendlyTimePeriods(testValue, 'fi');
        const expected = '2000 1. vuosineljännes';
        expect(result).toEqual(expected);
    });

    it('Should return parsed quarter string localized en first', () => {
        const testValue = '2000Q1';
        const result = parseScreenReaderFriendlyTimePeriods(testValue, 'en');
        const expected = '2000 1st. quarter';
        expect(result).toEqual(expected);
    });
    it('Should return parsed quarter string localized en second', () => {
        const testValue = '2000Q2';
        const result = parseScreenReaderFriendlyTimePeriods(testValue, 'en');
        const expected = '2000 2nd. quarter';
        expect(result).toEqual(expected);
    });
    it('Should return parsed quarter string localized en third', () => {
        const testValue = '2000Q3';
        const result = parseScreenReaderFriendlyTimePeriods(testValue, 'en');
        const expected = '2000 3rd. quarter';
        expect(result).toEqual(expected);
    });
    it('Should return parsed quarter string localized en fourth', () => {
        const testValue = '2000Q4';
        const result = parseScreenReaderFriendlyTimePeriods(testValue, 'en');
        const expected = '2000 4th. quarter';
        expect(result).toEqual(expected);
    });
    it('Should not parse if value doesnt match', () => {
        const testValue = 'foobar';
        const result = parseScreenReaderFriendlyTimePeriods(testValue, 'fi');
        const expected = 'foobar';
        expect(result).toEqual(expected);
    });
    it('Should return parsed preliminary quarter string', () => {
        const testValue = '2000Q2*';
        const result = parseScreenReaderFriendlyTimePeriods(testValue, 'en');
        const expected = '2000 2nd. quarter';
        expect(result).toEqual(expected);
    });
    it('Should return parsed preliminary month string', () => {
        const testValue = '2000M2*';
        const result = parseScreenReaderFriendlyTimePeriods(testValue, 'en');
        const expected = '2000 February';
        expect(result).toEqual(expected);
    });
});

describe('getToolTipFormatterFunction tests', () => {

    it('The returned formatter function should return tooltip test with preliminary indicator', () => {

        const mockTooltip: Tooltip = {} as unknown as Tooltip;
        const mockContextObject = {
            name: 'testPointName',
            options: {
                custom: {
                    "preliminary": true
                }
            }
        } as unknown as Point;

        const formatter = getToolTipFormatterFunction(simpleQuarterLinechartViewFixture, 'fi');
        const expectedtooltipString = "Vuosineljännes: testPointName<br/><br/>Ennakko";
        expect(formatter.apply(mockContextObject, [mockTooltip])).toEqual(expectedtooltipString);
    });

    it('The returned formatter function should return tooltip test without preliminary indicator', () => {
        const mockTooltip: Tooltip = {} as unknown as Tooltip;
        const mockContextObject = {
            name: 'testPointName',
            options: {
                custom: {
                    "preliminary": false
                }
            },
            series: {
                name: 'testSeriesName'
            },
        } as unknown as Point;

        const formatter = getToolTipFormatterFunction(simpleQuarterLinechartViewFixture, 'fi');
        const expectedtooltipString = "Vuosineljännes: testPointName<br/>";
        expect(formatter.apply(mockContextObject, [mockTooltip])).toEqual(expectedtooltipString);
    });

    it('The returned formatter function for horizontal barchart view should return tooltip test without preliminary indicator', () => {

        const mockTooltip: Tooltip = {} as unknown as Tooltip;
        const mockContextObject = {
            series: {
                name: 'testSeriesName'
            },
            name: 'testPointName',
            options: {
                custom: {
                    "preliminary": false
                }
            }
        } as unknown as Point;

        const formatter = getToolTipFormatterFunction(simpleHorizontalBarchartViewFixture, 'fi');
        const expectedtooltipString = "Alue: testPointName<br/>";
        expect(formatter.apply(mockContextObject, [mockTooltip])).toEqual(expectedtooltipString);
    });

    it('The returned formatter function for horizontal barchart view should return tooltip test without preliminary indicator', () => {
        const mockTooltip: Tooltip = {} as unknown as Tooltip;
        const mockPoint = {
            series: {
                name: 'testSeriesName'
            },
            name: 'testPointName',
            options: {
                custom: {
                    "preliminary": false
                }
            }
        } as unknown as Point;

        const formatter = getToolTipFormatterFunction(simpleGroupHorizontalBarchartViewFixture, 'fi');
        const expectedtooltipString = "Vuosineljännes: testSeriesName<br/>Rahoitusmuoto: testPointName<br/>";
        expect(formatter.apply(mockPoint, [mockTooltip])).toEqual(expectedtooltipString);
    });

    it('Returns correctly formatted data label based on fi locale and precision', () => {
        const mockDataLabelObject = {} as unknown as DataLabelsOptions;
        const mockPoint = {
            key: 'y',
            series: {
                userOptions: {
                    data: [mockDataLabelObject]
                }
            },
            y: 1234.567,
            options: {
                custom: {
                    "precision": 2
                }
            }
        } as unknown as Point;
        const formatter = getDataLabelFormatterFunction('fi');
        const result = formatter.apply(mockPoint, [mockDataLabelObject]);
        // Intl.NumberFormat uses a non-breaking space "\xa0" as a thousand separator
        expect(result).toBe('1\xa0234,57');
    });

    it('Returns correctly formatted data label based on en locale and precision', () => {
        const mockDataLabelObject = {} as unknown as DataLabelsOptions;
        const mockPoint = {
            y: 1234.567,
            options: {
                custom: {
                    "precision": 2
                }
            },
            key: 'y'
        } as unknown as Point;
        const formatter = getDataLabelFormatterFunction('en');
        const result = formatter.apply(mockPoint, [mockDataLabelObject]);
        expect(result).toBe('1,234.57');
    });
});

describe('getLineChartToolTipFormatterFunction tests', () => {

    it('The returned formatter function should return tooltip test with preliminary indicator', () => {
        const mockTooltip: Tooltip = {} as unknown as Tooltip;
        const mockPoint = {
            series: {
                name: 'testSeriesName'
            },
            name: 'testPointName',
            options: {
                custom: {
                    "preliminary": true
                }
            }
        } as unknown as Point;

        const formatter = getLineChartToolTipFormatterFunction(simpleQuarterLinechartViewFixture, 'fi');
        const expectedtooltipString = "Vuosineljännes: testPointName<br/><br/>Ennakko";
        expect(formatter.apply(mockPoint, [mockTooltip])).toEqual(expectedtooltipString);
    });

    it('The returned formatter function should return tooltip test without preliminary indicator', () => {
        const mockTooltip: Tooltip = {} as unknown as Tooltip;
        const mockPoint = {
            series: {
                name: 'testSeriesName'
            },
            name: 'testPointName',
            options: {
                custom: {
                    "preliminary": false
                }
            }
        } as unknown as Point;

        const formatter = getLineChartToolTipFormatterFunction(simpleQuarterLinechartViewFixture, 'fi');
        const expectedtooltipString = "Vuosineljännes: testPointName<br/>";
        expect(formatter.apply(mockPoint, [mockTooltip])).toEqual(expectedtooltipString);
    });

    it('The returned formatter function should return tooltip where each variable value pair is on its own line', () => {
        const mockTooltip: Tooltip = {} as unknown as Tooltip;
        const mockPoint = {
            series: {
                name: 'testSeriesName',
                index: 1
            },
            name: 'testPointName',
            options: {
                custom: {
                    "preliminary": false
                }
            }
        } as unknown as Point;

        const formatter = getLineChartToolTipFormatterFunction(combinationValuesLinechartViewFixture, 'fi');
        const expectedtooltipString = "Alue: Helsinki<br/>Huoneluku: Kaksiot<br/>Vuosineljännes: testPointName<br/>";
        expect(formatter.apply(mockPoint, [mockTooltip])).toEqual(expectedtooltipString);
    });

    it('The returned formatter function should return tooltip with names of multiselected selectable values', () => {
        const mockTooltip: Tooltip = {} as unknown as Tooltip;
        const mockPoint = {
            series: {
                name: 'testSeriesName',
                index: 1
            },
            name: 'testPointName',
            options: {
                custom: {
                    "preliminary": false
                }
            }
        } as unknown as Point;
        const formatter = getLineChartToolTipFormatterFunction(multiselectableLineChartViewFixture, 'fi');
        const expectedtooltipString = "Huoneluku: Yksiöt<br/>Alue: Turku<br/>Vuosineljännes: testPointName<br/>";
        expect(formatter.apply(mockPoint, [mockTooltip])).toEqual(expectedtooltipString);
    });
});

describe('getDataFormattedForChartType tests', () => {
    it('should return formatted data for linechart', () => {
        const point: Point = {
            y: 1234.567
        } as unknown as Point;
        const view: View =
            {
                visualizationSettings:
                {
                    visualizationType: 'LineChart'
                }
            } as unknown as View;
        const result: string = getDataFormattedForChartType(view, point, 'fi', 2);
        expect(result).toBe('1\xa0234,57');
    });

    it('should return empty data for undefined point.y', () => {
        const point: Point = {
            y: undefined
        } as unknown as Point;
        const view: View =
        {
            visualizationSettings:
            {
                visualizationType: 'LineChart'
            }
        } as unknown as View;
        const result: string = getDataFormattedForChartType(view, point, 'fi', 2);
        expect(result).toBe('');
    });

    it('should return empty data for null point.y', () => {
        const point: Point = {
            y: null
        } as unknown as Point;
        const view: View =
            {
                visualizationSettings:
                {
                    visualizationType: 'LineChart'
                }
            } as unknown as View;
        const result: string = getDataFormattedForChartType(view, point, 'fi', 2);
        expect(result).toBe('');
    });

    it('should return absolute value of point.y for pyramid chart in english locale', () => {
        const point: Point = {
            y: -1234.567
        } as unknown as Point;
        const view: View =
        {
            visualizationSettings:
            {
                visualizationType: 'PyramidChart'
            }
        } as unknown as View;
        const result: string = getDataFormattedForChartType(view, point, 'en', 2);
        expect(result).toBe('1,234.57');
    });

    it('should return relative percentage value of point.y for percent vertical bar chart', () => {
        const point: Point = {
            percentage: 12.345,
            y: 123.456
        } as unknown as Point;
        const view: View =
        {
            units: [
                {
                    name: { fi: 'kg', en: 'kg' },
                    unit: { fi: 'kg', en: 'kg' }
                },
            ],
            visualizationSettings:
            {
                visualizationType: 'PercentVerticalBarChart'
            }
        } as unknown as View;
        const result: string = getDataFormattedForChartType(view, point, 'fi', 2);
        expect(result).toBe('12,3% (123,46 kg)');
    });

    it('should return relative percentage value of point.y for percent horizontal bar chart converted to english locale', () => {
        const point: Point = {
            percentage: 12,
            y: 123.456
        } as unknown as Point;
        const view: View =
            {
            units: [
                {
                    name: { fi: 'kg', en: 'kg' },
                    unit: { fi: 'kg', en: 'kg' }
                },
            ],
            visualizationSettings:
            {
                visualizationType: 'PercentHorizontalBarChart'
            }
        } as unknown as View;
        const result: string = getDataFormattedForChartType(view, point, 'en', 2);
        expect(result).toBe('12.0% (123.46 kg)');
    });
});

describe('getFormattedLastUpdatedText tests', () => {
    it('should format last updated text correctly for Finnish locale', () => {
      const result = getFormattedLastUpdatedText('2025-09-23', 'fi');
   expect(result).toBe('Päivitetty: 23.9.2025');
    });

    it('should format last updated text correctly for Swedish locale', () => {
        const result = getFormattedLastUpdatedText('2025-09-23', 'sv');
     expect(result).toBe('Uppdaterad: 2025-09-23');
    });

    it('should format last updated text correctly for English locale to British English', () => {
        const result = getFormattedLastUpdatedText('2025-09-23', 'en');
        expect(result).toBe('Updated: 23/09/2025');
    });

    it('should return undefined for undefined input', () => {
        const result = getFormattedLastUpdatedText(undefined, 'fi');
        expect(result).toBeUndefined();
    });

    it('should return undefined for invalid date', () => {
        const result = getFormattedLastUpdatedText('invalid-date', 'fi');
      expect(result).toBeUndefined();
    });
});