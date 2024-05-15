export enum BlobDataType {
    Csv,
    Excel
}

export const generateBlob = (data: string, type: BlobDataType): Blob => {
    if (type === BlobDataType.Csv) {
        const BOM = '\uFEFF';
        return new Blob([BOM, data], { type: 'text/csv;charset=utf-8;' });
    } else {
        return new Blob([stringToArrayBuffer(data)], { type: 'application/octet-stream' });
    }
}

const stringToArrayBuffer = (str: string) => {
    const buffer = new ArrayBuffer(str.length);
    let view = new Uint8Array(buffer);
    for (let i = 0; i < str.length; i++) view[i] = str.charCodeAt(i) & 0xFF;
    return buffer;
}

export const generateFilename = (tableReference: string): string => {
    const trimmedTableReference = tableReference ? tableReference.split('.')[0] : '';

    const date = new Date();

    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const day = date.getDate().toString().padStart(2, '0');
    const hours = date.getHours().toString().padStart(2, '0');
    const minutes = date.getMinutes().toString().padStart(2, '0');
    const seconds = date.getSeconds().toString().padStart(2, '0');

    return `${trimmedTableReference}_${year}${month}${day}_${hours}${minutes}${seconds}`;
}
