import React, { useMemo } from "react";
import { View } from "../../../core/types/view";
import { v4 as uuidv4 } from 'uuid';
import { renderHtmlTable } from "../../../core/tables/htmlTable";

export interface ITableViewProps {
    view: View;
    locale: string;
    showTitles?: boolean;
    showUnits?: boolean;
    showSources?: boolean;
    footnote?: string;
}

export const TableView: React.FC<ITableViewProps> = ({ view, locale, footnote, showTitles = true, showUnits = true, showSources = true }) => {
    const uuid = useMemo(() => uuidv4(), [view, locale]);

    React.useEffect(() => {
        document.getElementById(uuid)?.replaceChildren();
        renderHtmlTable(view, locale, showTitles, showUnits, showSources, uuid, footnote);
    }, [view, locale, showTitles, showUnits, showSources, footnote]);

    return <div className={'tableChart'} id={uuid} />;
}