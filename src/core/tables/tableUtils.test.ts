import { IDataCell } from "../types/view";
import { formatMissingData, formatNumericValue } from "./tableUtils";

describe('formatNumericValue', () => {
    it('should return a correctly formatted number with two decimals and a finnish decimal separator ","', () => {
        const input: IDataCell = {
            value: 123.12345,
            precision: 2,
            preliminary: false
        } 
        expect(formatNumericValue(input, 'fi')).toEqual('123,12');
    });

    it('should return a correctly formatted number with two decimals and a swedish decimal separator ","', () => {
        const input: IDataCell = {
            value: 123.12345,
            precision: 2,
            preliminary: false
        }
        expect(formatNumericValue(input, 'sv')).toEqual('123,12');
    });

    it('should return a correctly formatted number with two decimals and a default decimal separator "."', () => {
        const input: IDataCell = {
            value: 123.12345,
            precision: 2,
            preliminary: false
        }
        expect(formatNumericValue(input, 'en')).toEqual('123.12');
    });

    it('should return a correctly formatted number with a 0 added to decimals to match the precision', () => {
        const input: IDataCell = {
            value: 123.1,
            precision: 2,
            preliminary: false
        }
        expect(formatNumericValue(input, 'en')).toEqual('123.10');
    });

    it('should return a correctly formatted number with two Finnish thousand separators " "', () => {
        const input: IDataCell = {
            value: 123123123,
            precision: 0,
            preliminary: false
        }
        // Intl.NumberFormat uses a non-breaking space "\xa0" as a thousand separator
        expect(formatNumericValue(input, 'fi', true)).toEqual("123\xa0123\xa0123");
    });

    it('should return a correctly formatted number with two default thousand separators ","', () => {
        const input: IDataCell = {
            value: 123123123,
            precision: 0,
            preliminary: false
        }
        expect(formatNumericValue(input, 'en', true)).toEqual('123,123,123');
    });

    it('should return a correctly formatted number with a Swedish thousand separator " " and decimal separator with two decimals', () => {
        const input: IDataCell = {
            value: 1234.567,
            precision: 2,
            preliminary: false
        }
        // Intl.NumberFormat uses a non-breaking space "\xa0" as a thousand separator
        expect(formatNumericValue(input, 'sv', true)).toEqual("1\xa0234,57");
    });
});

describe('formatMissingData', () => {
    it('should return one "." when the missing code is 1 and no html formatting is requested', () => {
        const input: IDataCell = {
            value: null,
            precision: 2,
            preliminary: false,
            missingCode: 1
        }
        expect(formatMissingData(input.missingCode, 'fi', false)).toEqual('.');
    });

    it('should return ".." when the missing code is 2 and no html formatting is requested', () => {
        const input: IDataCell = {
            value: null,
            precision: 2,
            preliminary: false,
            missingCode: 2
        }
        expect(formatMissingData(input.missingCode, 'fi', false)).toEqual('..');
    });

    it('should return "..." when the missing code is 3 and no html formatting is requested', () => {
        const input: IDataCell = {
            value: null,
            precision: 2,
            preliminary: false,
            missingCode: 3
        }
        expect(formatMissingData(input.missingCode, 'fi', false)).toEqual('...');
    });

    it('should return one "...." when the missing code is 4 and no html formatting is requested', () => {
        const input: IDataCell = {
            value: null,
            precision: 2,
            preliminary: false,
            missingCode: 4
        }
        expect(formatMissingData(input.missingCode, 'fi', false)).toEqual('....');
    });

    it('should return one "....." when the missing code is 5 and no html formatting is requested', () => {
        const input: IDataCell = {
            value: null,
            precision: 2,
            preliminary: false,
            missingCode: 5
        }
        expect(formatMissingData(input.missingCode, 'fi', false)).toEqual('.....');
    });

    it('should return one "Tieto on puuttuva" when the missing code is 1 and html formatting is requested', () => {
        const input: IDataCell = {
            value: null,
            precision: 2,
            preliminary: false,
            missingCode: 1
        }
        expect(formatMissingData(input.missingCode, 'fi', true)).toEqual('Tieto on puuttuva');
    });

    it('should return one "Tieto on puuttuva" when the missing code is 5 and html formatting is requested', () => {
        const input: IDataCell = {
            value: null,
            precision: 2,
            preliminary: false,
            missingCode: 5
        }
        expect(formatMissingData(input.missingCode, 'fi', true)).toEqual('Tieto on puuttuva');
    });
});