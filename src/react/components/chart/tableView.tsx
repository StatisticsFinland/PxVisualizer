import React, { useMemo } from "react";
import { View } from "../../../core/types/view";
import { IChartOptions } from "../../../core/types/chartOptions";
import { v4 as uuidv4 } from 'uuid';
import { renderHtmlTable } from "../../../core/tables/htmlTable";

export interface ITableViewProps {
    view: View;
    locale: string;
    options: IChartOptions;
    footnote?: string;
}

export const TableView: React.FC<ITableViewProps> = ({ view, locale, options, footnote }) => {
    const uuid = useMemo(() => uuidv4(), [view, locale]);

    React.useEffect(() => {
        document.getElementById(uuid)?.replaceChildren();
        renderHtmlTable(view, locale, options, uuid, footnote);
    }, [view, locale, options, footnote]);

    return <div className={'tableChart'} id={uuid} />;
}