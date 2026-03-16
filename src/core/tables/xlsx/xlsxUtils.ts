export function escapeXmlFunctionChars(input: string): string {
    const xmlCharMap: { [key: string]: string } = {
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&apos;'
    };
    return input.replaceAll(/[&<>"']/g, char => xmlCharMap[char]);
}