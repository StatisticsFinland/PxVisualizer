import React from "react";
import styled from "styled-components";
import MenuItem from "./menuItem/menuItem";
import HighchartsReact from "highcharts-react-official";
import { View } from "../../../core/types/view";
import Translations from "../../../core/conversion/translations";
import Icon from "../icon/icon";
import { viewToDownloadCSVOption } from "../../../core/tables/csvTable";
import { generateFilename } from "../../../core/tables/exportingUtils";
import { TIcon } from "../../../core/types/icon";
import { viewToDownloadXLSOption } from "../../../core/tables/xlsx/xlsxBuilder";

const BurgerWrapper = styled.div`
    width: 2.5rem;
    height: 2.5rem;
`;

const Hamburger = styled.button`
    width: 100%;
    height: 100%;
    svg {
        height: 1.5rem;
        width: 1.5rem;
    }
    background-color: transparent;
    border: none;
    cursor: pointer;
`;

const MenuAnchor = styled.div`
    width: 100%;
    height: 0;
    position: relative;
`;

const MenuWrapper = styled.div`
    display: flex;
    flex-flow: column;
    position: absolute;
    background-color: #fff;
    border-radius: 18px;
    top: 0.2rem;
    right: 0.2rem;
    border: 1px solid #bdbdbd;
`
const List = styled.ul`
    list-style-type: none;
    margin: 0;
    padding: 0;
`;

export interface IBurgerMenuProps {
    viewData: View;
    currentChartRef?: HighchartsReact.RefObject | null;
    locale: string;
    tableToggle?: {
        toggleHandler: () => void;
        tableMode: boolean;
    };
    menuItemDefinitions?: (IFunctionalMenuItem | ILinkMenuItem)[];
    menuIconInheritColor?: boolean;
    exportWidth?: number;
    exportHeight?: number,
}

interface IBaseMenuItem {
    text: string;
    prefixIcon?: TIcon | Exclude<React.ReactNode, string>;
    suffixIcon?: TIcon | Exclude<React.ReactNode, string>;
}

export interface IFunctionalMenuItem extends IBaseMenuItem {
    onClick: () => void;
}

export interface ILinkMenuItem extends IBaseMenuItem {
    url: string;
    isExternal?: boolean;
    openNewTab?: boolean;
}

export function calculateExportDimensions(inputWidth: number | undefined, inputHeight: number | undefined): { finalWidth: number, finalHeight: number } {
    const MIN_EXPORT_ASPECT_RATIO: number = 0.5;
    const MAX_EXPORT_ASPECT_RATIO: number = 2;
    const MIN_EXPORT_DIMENSION: number = 600;
    const MAX_EXPORT_DIMENSION: number = 3000;

    inputWidth = inputWidth ?? MIN_EXPORT_DIMENSION;
    inputHeight = inputHeight ?? MIN_EXPORT_DIMENSION;

    // Aspect ratio is the ratio of width to height clamped between MIN_EXPORT_ASPECT_RATIO and MAX_EXPORT_ASPECT_RATIO.
    let aspectRatio: number = Math.max(
        MIN_EXPORT_ASPECT_RATIO,
        Math.min(
            MAX_EXPORT_ASPECT_RATIO,
            inputWidth / inputHeight
        )
    );

    let finalWidth: number;
    let finalHeight: number;

    // If aspect ratio is less than 1, then height is greater than width.
    if (aspectRatio < 1) {
        finalHeight = Math.max(MIN_EXPORT_DIMENSION, Math.min(MAX_EXPORT_DIMENSION, inputHeight));
        finalWidth = finalHeight * aspectRatio;
        if (finalWidth < MIN_EXPORT_DIMENSION) {
            finalWidth = MIN_EXPORT_DIMENSION;
            finalHeight = finalWidth / aspectRatio;
        }
    } else {
        finalWidth = Math.max(MIN_EXPORT_DIMENSION, Math.min(MAX_EXPORT_DIMENSION, inputWidth));
        finalHeight = finalWidth / aspectRatio;
        if (finalHeight < MIN_EXPORT_DIMENSION) {
            finalHeight = MIN_EXPORT_DIMENSION;
            finalWidth = finalHeight * aspectRatio;
        }
    }

    return { finalWidth, finalHeight };
}

export const BurgerMenu: React.FC<IBurgerMenuProps> = ({viewData, currentChartRef, tableToggle, menuItemDefinitions, locale, menuIconInheritColor = false, exportWidth, exportHeight}) => {
    const [isOpen, setIsOpen] = React.useState(false);

    const menuRef = React.useRef<any>(null);
    const closeMenu = (e: Event) => {
        if(menuRef.current && isOpen && !menuRef.current.contains(e.target)) {
            setIsOpen(false);
          }
    }

    document.addEventListener('mousedown', closeMenu);
    const exportCSV = viewToDownloadCSVOption(viewData, locale);
    const exportXLSX = viewToDownloadXLSOption(viewData, locale);
    const customMenuItemArray = menuItemDefinitions?.map((menuItemDefinition, index) => {
        if ('onClick' in menuItemDefinition) {
            return <MenuItem isFirst={index === 0} bottomSeparator={index + 1 === menuItemDefinitions.length} locale={locale} prefixIcon={menuItemDefinition.prefixIcon} suffixIcon={menuItemDefinition.suffixIcon} key={`customfmenuitem-${index}`} text={menuItemDefinition.text} onClick={menuItemDefinition.onClick} />; // NOSONAR
        }

        if ('url' in menuItemDefinition) {
            return <MenuItem isFirst={index === 0} bottomSeparator={index + 1 === menuItemDefinitions.length} locale={locale} prefixIcon={menuItemDefinition.prefixIcon} suffixIcon={menuItemDefinition.suffixIcon} isExternal={menuItemDefinition.isExternal} key={`customlmenuitem-${index}`} text={`${menuItemDefinition.text}`} url={menuItemDefinition.url} openNewTab={menuItemDefinition.openNewTab} />; // NOSONAR
        }
    });

    return (
        <BurgerWrapper ref={menuRef}>
            <Hamburger aria-label={`${Translations.chartMenuLabel[locale]}`} aria-expanded={isOpen} onClick={() => {setIsOpen(!isOpen)}}>
                <Icon inheritColor={menuIconInheritColor} icon={isOpen ? 'Times' : 'Bars'} />
            </Hamburger>
            <MenuAnchor>
                {
                    isOpen &&
                    <MenuWrapper>
                        <List>
                            {menuItemDefinitions && customMenuItemArray}
                            <MenuItem isFirst={!menuItemDefinitions} locale={locale} prefixIcon={'Download'} text={exportXLSX.text} onClick={() => exportXLSX.onClick()} />
                            <MenuItem isLast={!currentChartRef} bottomSeparator={!!currentChartRef} locale={locale} prefixIcon={'Download'} text={exportCSV.text} onClick={() => exportCSV.onClick()} />
                            {
                                    currentChartRef &&
                                    <>
                                        <MenuItem
                                            locale={locale}
                                            prefixIcon={'Download'}
                                            text={Translations.downloadSVG[locale]}
                                            onClick={() =>
                                                currentChartRef.chart.exportChartLocal({
                                                    filename: `${generateFilename(viewData.tableReferenceName)}`,
                                                    type: "image/svg+xml",
                                                    sourceWidth: calculateExportDimensions(currentChartRef.chart.chartWidth, currentChartRef.chart.chartHeight).finalWidth,
                                                    sourceHeight: calculateExportDimensions(currentChartRef.chart.chartWidth, currentChartRef.chart.chartHeight).finalHeight,
                                                    scale: 1
                                                }, {})
                                            } />
                                        <MenuItem
                                            isLast={!tableToggle}
                                            bottomSeparator={!!tableToggle}
                                            locale={locale}
                                            prefixIcon={'Download'}
                                            text={Translations.downloadPNG[locale]}
                                            onClick={() =>
                                                currentChartRef.chart.exportChartLocal({
                                                    filename: `${generateFilename(viewData.tableReferenceName)}`,
                                                    sourceWidth: calculateExportDimensions(currentChartRef.chart.chartWidth, currentChartRef.chart.chartHeight).finalWidth,
                                                    sourceHeight: calculateExportDimensions(currentChartRef.chart.chartWidth, currentChartRef.chart.chartHeight).finalHeight,
                                                    scale: 1
                                                }, {})
                                            } />
                                    </>
                                }
                                {
                                    tableToggle &&
                                    <MenuItem isLast={true} locale={locale} text={tableToggle.tableMode ? Translations.toggleTableModeOffText[locale] : Translations.toggleTableModeOnText[locale]} onClick={() => tableToggle.toggleHandler()} />
                                }
                            </List>
                    </MenuWrapper>
                }
            </MenuAnchor>
        </BurgerWrapper>
    );
}

export default BurgerMenu;