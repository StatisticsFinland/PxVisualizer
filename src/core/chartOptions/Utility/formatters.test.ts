import { Tooltip, TooltipFormatterContextObject } from "highcharts";
import { formatLocale, getToolTipFormatterFunction, parseScreenReaderFriendlyTimePeriods, shortenStringValue } from "./formatters";
import { simpleQuarterLinechartViewFixture } from "./testFixtures/linechartViews";
import { simpleHorizontalBarchartViewFixture } from "./testFixtures/horizontalbarchartViews";
import { simpleGroupHorizontalBarchartViewFixture } from "./testFixtures/grouphorizontalbarchartViews";

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
            series: {
                name: 'testSeriesName'
            },
            point: {
                name: 'testPointName',
                options: {
                    custom: {
                        "preliminary": true
                    }
                }
            }
        } as unknown as TooltipFormatterContextObject;

        const formatter = getToolTipFormatterFunction(simpleQuarterLinechartViewFixture, 'fi');
        const expectedtooltipString = "Vuosineljännes: testPointName<br/><br/>Ennakko";
        expect(formatter.apply(mockContextObject, [mockTooltip])).toEqual(expectedtooltipString);
    });

    it('The returned formatter function should return tooltip test without preliminary indicator', () => {

        const mockTooltip: Tooltip = {} as unknown as Tooltip;
        const mockContextObject = {
            series: {
                name: 'testSeriesName'
            },
            point: {
                name: 'testPointName',
                options: {
                    custom: {
                        "preliminary": false
                    }
                }
            }
        } as unknown as TooltipFormatterContextObject;

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
            point: {
                name: 'testPointName',
                options: {
                    custom: {
                        "preliminary": false
                    }
                }
            }
        } as unknown as TooltipFormatterContextObject;

        const formatter = getToolTipFormatterFunction(simpleHorizontalBarchartViewFixture, 'fi');
        const expectedtooltipString = "Alue: testPointName<br/>";
        expect(formatter.apply(mockContextObject, [mockTooltip])).toEqual(expectedtooltipString);
    });

    it('The returned formatter function for horizontal barchart view should return tooltip test without preliminary indicator', () => {

        const mockTooltip: Tooltip = {} as unknown as Tooltip;
        const mockContextObject = {
            series: {
                name: 'testSeriesName'
            },
            point: {
                name: 'testPointName',
                options: {
                    custom: {
                        "preliminary": false
                    }
                }
            }
        } as unknown as TooltipFormatterContextObject;

        const formatter = getToolTipFormatterFunction(simpleGroupHorizontalBarchartViewFixture, 'fi');
        const expectedtooltipString = "Vuosineljännes: testSeriesName<br/>Rahoitusmuoto: testPointName<br/>";
        expect(formatter.apply(mockContextObject, [mockTooltip])).toEqual(expectedtooltipString);
    });
});