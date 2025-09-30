import React, { useMemo } from "react";
import { View } from "../../../core/types/view";
import { v4 as uuidv4 } from 'uuid';
import { renderHtmlKeyFigure } from "../../../core/tables/htmlTable";

export interface IKeyFigureViewProps {
    view: View;
    locale: string;
    timeVariableValue: string;
    lastUpdated: string;
    className?: string;
}

export const KeyFigureView: React.FC<IKeyFigureViewProps> = ({ 
    view, 
    locale, 
    timeVariableValue, 
    lastUpdated,
    className 
}) => {
    const uuid = useMemo(() => uuidv4(), [view, locale]);

    const combinedClassName = className
        ? `keyFigureChart ${className}`
        : 'keyFigureChart';

    React.useEffect(() => {
        document.getElementById(uuid)?.replaceChildren();
        renderHtmlKeyFigure(view, locale, uuid, timeVariableValue, lastUpdated, className);
    }, [view, locale, timeVariableValue, lastUpdated, className]);

    return <div className={combinedClassName} id={uuid} />;
}