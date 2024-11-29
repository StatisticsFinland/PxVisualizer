import React from "react";
import styled from "styled-components";
import { Translations } from "../../../core/conversion/translations";

const ErrorSection = styled.div`
    width: 100%;
    position: relative;
    font-family: 'Barlow Semi Condensed';
`;

export interface IErrorInfoProps {
    locale: string;
}

export const ErrorInfo: React.FC<IErrorInfoProps> = ({ locale }) => {
    return (
        <ErrorSection>
            <h1>{Translations.graphCreationError[locale]}</h1>
        </ErrorSection>
    );
};