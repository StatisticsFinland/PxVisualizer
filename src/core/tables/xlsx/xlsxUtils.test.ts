import { escapeXmlFunctionChars } from "./xlsxUtils";

describe('assertion tests', () => {
    it('should escape xlsx syntax related special characters correctly', () => {
        const input: string = 'foo & bar < baz > qux " quux \' corge';
        const expected: string = 'foo &amp; bar &lt; baz &gt; qux &quot; quux &apos; corge';
        const result: string = escapeXmlFunctionChars(input);
        expect(result).toBe(expected);
    });
});