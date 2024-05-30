interface IColumn {
    pixelWidth: number
    style: number
}

enum CellType {
    string,
    number
}

interface ICell {
    value: string | number
}