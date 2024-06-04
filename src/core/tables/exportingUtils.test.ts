import { generateFilename } from "./exportingUtils";

describe('filenme tests', () => {
    it('should return expected filename', () => {
        const tableName = 'foobar.px';
        const filename = generateFilename(tableName);
        expect(filename.slice(0, 7)).toBe('foobar_');
    });
});
