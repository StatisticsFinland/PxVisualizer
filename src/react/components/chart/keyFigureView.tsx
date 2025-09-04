import React, { useMemo } from "react";
import { View } from "../../../core/types/view";
import { v4 as uuidv4 } from 'uuid';
import { renderHtmlKeyFigure } from "../../../core/tables/htmlTable";

export interface IKeyFigureViewProps {
    view: View;
    locale: string;
    timeVariableValue: string;
    lastUpdated: string;
}

export const KeyFigureView: React.FC<IKeyFigureViewProps> = ({ view, locale, timeVariableValue, lastUpdated }) => {
    const uuid = useMemo(() => uuidv4(), [view, locale]);

    React.useEffect(() => {
        document.getElementById(uuid)?.replaceChildren();
        renderHtmlKeyFigure(view, locale, uuid);
        // Add time variable, subheader, and last updated info
        const container = document.getElementById(uuid);

        const timeElem = document.createElement('div');
        timeElem.className = 'keyFigure-time';
        timeElem.textContent = timeVariableValue;
        container!.append(timeElem);

        const lastUpdatedElem = document.createElement('div');
        lastUpdatedElem.className = 'keyFigure-lastupdated';
        lastUpdatedElem.textContent = lastUpdated;
        container!.append(lastUpdatedElem);
    }, [view, locale, timeVariableValue, lastUpdated]);

    return <div className={'keyFigureChart'} id={uuid} />;
}