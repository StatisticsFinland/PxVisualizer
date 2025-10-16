export interface IJsonStat2Dataset {
    version: "2.0";
    class: "dataset";
    label?: string;
    note?: string[];
    href?: string;
    updated?: string;
    source?: string;
    id: string[];
    size: number[];
    role?: {
        time?: string[];
        geo?: string[];
        metric?: string[];
    };
    dimension: {
        [key: string]: IJsonStat2Dimension;
    };
    value: (number | null | string)[] | { [key: string]: number | null | string };
    status?: string | string[] | { [key: string]: string };
}

export interface IJsonStat2Dimension {
    label?: string;
    note?: string[];
    category: IJsonStat2Category;
}

export interface IJsonStat2Category {
    index?: string[] | { [key: string]: number };
    label: { [key: string]: string };
    note?: { [key: string]: string[] };
    unit?: { [key: string]: IJsonStat2Unit };
}

export interface IJsonStat2Unit {
    label?: string;
    decimals?: number;
    position?: "start" | "end";
}