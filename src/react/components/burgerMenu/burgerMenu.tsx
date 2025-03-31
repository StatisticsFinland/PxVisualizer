import React, { useEffect } from "react";
import styled from "styled-components";
import { MenuItem } from "./menuItem/menuItem";
import HighchartsReact, { HighchartsReactRefObject } from "highcharts-react-official";
import { View } from "../../../core/types/view";
import { Translations } from "../../../core/conversion/translations";
import { Icon } from "../icon/icon";
import { viewToDownloadCSVOption } from "../../../core/tables/csvTable";
import { generateFilename } from "../../../core/tables/exportingUtils";
import { TIcon } from "../../../core/types/icon";
import { viewToDownloadXLSOption } from "../../../core/tables/xlsx/xlsxBuilder";
import { EVisualizationType } from "../../../core";

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
    toggleAccessibilityMode?: () => void;
    accessibilityMode?: boolean;
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

export function calculateExportDimensions(chartRef: HighchartsReactRefObject): { finalWidth: number, finalHeight: number } {
    const MIN_EXPORT_ASPECT_RATIO: number = 0.5;
    const MAX_EXPORT_ASPECT_RATIO: number = 2;
    const MIN_EXPORT_DIMENSION: number = 600;
    const MAX_EXPORT_DIMENSION: number = 3000;

    const inputWidth: number = chartRef.chart.chartWidth;
    const inputHeight: number = chartRef.chart.chartHeight;

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

const getTabIndex = (index: number, selectedIndex: number) => {
    return selectedIndex != -1 && selectedIndex === index ? 0 : -1;
};

export const BurgerMenu: React.FC<IBurgerMenuProps> = ({ viewData, currentChartRef, tableToggle, menuItemDefinitions, locale, menuIconInheritColor = false, toggleAccessibilityMode, accessibilityMode }) => {
    const [isOpen, setIsOpen] = React.useState(false);
    const [selectedIndex, setSelectedIndex] = React.useState(-1);

    const menuItems = React.useRef(new Map<number, HTMLButtonElement | HTMLAnchorElement | null>());
    const menuRef = React.useRef<any>(null);
    const closeMenu = (e: Event) => {
        if (menuRef.current && isOpen && !menuRef.current.contains(e.target)) {
            toggleMenuOpen(false);
        }
    }

    React.useEffect(() => {
        setFocusToMenuItem();
    }, [selectedIndex]);

    document.addEventListener('mousedown', closeMenu);
    const exportCSV = viewToDownloadCSVOption(viewData, locale);
    const exportXLSX = viewToDownloadXLSOption(viewData, locale);
    const customMenuItemArray = menuItemDefinitions?.map((menuItemDefinition, index) => {
        if ('onClick' in menuItemDefinition) {
            return <MenuItem
                tabIndex={getTabIndex(index, selectedIndex)}
                isFirst={index === 0}
                index={index}
                bottomSeparator={index + 1 === menuItemDefinitions.length}
                locale={locale}
                prefixIcon={menuItemDefinition.prefixIcon}
                suffixIcon={menuItemDefinition.suffixIcon}
                key={`customfmenuitem-${index}`}
                text={menuItemDefinition.text}
                onClick={() => handleMenuItemClick(menuItemDefinition.onClick)}
                ref={(el) => menuItems.current.set(index, el)}
            />; // NOSONAR
        }

        if ('url' in menuItemDefinition) {
            return <MenuItem
                tabIndex={getTabIndex(index, selectedIndex)}
                isFirst={index === 0}
                index={index}
                bottomSeparator={index + 1 === menuItemDefinitions.length}
                locale={locale}
                prefixIcon={menuItemDefinition.prefixIcon}
                suffixIcon={menuItemDefinition.suffixIcon}
                isExternal={menuItemDefinition.isExternal}
                key={`customlmenuitem-${index}`}
                text={`${menuItemDefinition.text}`}
                url={menuItemDefinition.url}
                openNewTab={menuItemDefinition.openNewTab}
                onClick={() => handleMenuItemClick()}
                ref={(el) => menuItems.current.set(index, el)}
            />; // NOSONAR
        }
    });

    useEffect(() => {
        setSelectedIndex(isOpen ? 0 : -1);
        document.addEventListener('mousedown', closeMenu);
        document.addEventListener('keydown', handleKeyDown);
        return () => {
            document.removeEventListener('mousedown', closeMenu);
            document.removeEventListener('keydown', handleKeyDown);
        }
    }, [isOpen]);

    const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'Escape' ||
        (e.key === 'Tab' && isOpen)) {
            toggleMenuOpen(false);
        }
        if (e.key === 'ArrowDown' && isOpen) {
            e.preventDefault();
            setSelectedIndex((prevIndex) => {
                const nextIndex = prevIndex + 1;
                const maxIndex = menuItemDefinitions ? menuItemDefinitions.length + 5 : 5;
                return nextIndex > maxIndex ? 0 : nextIndex;
            });
        }
        if (e.key === 'ArrowUp' && isOpen) {
            e.preventDefault();
            setSelectedIndex((prevIndex) => {
                const nextIndex = prevIndex - 1;
                const maxIndex = menuItemDefinitions ? menuItemDefinitions.length + 5 : 5;
                return nextIndex < 0 ? maxIndex : nextIndex;
            });
        }
    }

    const buttonRef = React.useRef<HTMLButtonElement>(null);
    const handleMenuItemClick = (onClick?: () => void) => {
        toggleMenuOpen(false);
        if (onClick) onClick();
    }

    const toggleMenuOpen = (open: boolean) => {
        setIsOpen(open);
    }

    const setFocusToMenuItem = () => {
        if (selectedIndex === -1) {
            return;
        }
        if (menuItems.current.has(selectedIndex)) {
            menuItems.current.get(selectedIndex)?.focus();
        }
    }

    const showAccessibilityModeToggle: boolean =
        !!tableToggle &&
        !tableToggle.tableMode &&
        viewData.visualizationSettings.visualizationType != EVisualizationType.ScatterPlot;

    return (
        <BurgerWrapper ref={menuRef}>
            <Hamburger ref={buttonRef} aria-label={`${Translations.chartMenuLabel[locale]}`} aria-expanded={isOpen} onClick={() => { toggleMenuOpen(!isOpen) }} aria-haspopup="menu" aria-controls="menu">
                <Icon inheritColor={menuIconInheritColor} icon={isOpen ? 'Times' : 'Bars'} />
            </Hamburger>
            <MenuAnchor>
                {
                    isOpen &&
                    <MenuWrapper>
                            <List id="menu" role="menu" aria-label={`${Translations.chartMenuLabel[locale]}`} aria-orientation="vertical" aria-activedescendant={`menuitem-${selectedIndex}`} tabIndex={isOpen ? 0 : -1}>
                            {menuItemDefinitions && customMenuItemArray}
                            <MenuItem
                                index={menuItemDefinitions ? menuItemDefinitions.length : 0}
                                isFirst={!menuItemDefinitions}
                                locale={locale}
                                prefixIcon={'Download'}
                                text={exportXLSX.text}
                                onClick={() => handleMenuItemClick(exportXLSX.onClick)}
                                tabIndex={getTabIndex(menuItemDefinitions ? menuItemDefinitions.length : 0, selectedIndex)}
                                ref={(el) => menuItems.current.set(menuItemDefinitions ? menuItemDefinitions.length : 0, el)}
                            />
                            <MenuItem
                                index={menuItemDefinitions ? menuItemDefinitions.length + 1 : 1}
                                isLast={!currentChartRef}
                                bottomSeparator={!!currentChartRef}
                                locale={locale}
                                prefixIcon={'Download'}
                                text={exportCSV.text}
                                onClick={() => handleMenuItemClick(exportCSV.onClick)}
                                tabIndex={getTabIndex(menuItemDefinitions ? menuItemDefinitions.length + 1 : 1, selectedIndex)}
                                ref={(el) => menuItems.current.set(menuItemDefinitions ? menuItemDefinitions.length + 1 : 1, el)}
                                />
                            {
                                currentChartRef &&
                                <>
                                    <MenuItem
                                        index={menuItemDefinitions ? menuItemDefinitions.length + 2 : 2}
                                        locale={locale}
                                        prefixIcon={'Download'}
                                        text={Translations.downloadSVG[locale]}
                                        onClick={() => handleMenuItemClick(() =>
                                            currentChartRef.chart.exportChartLocal({
                                                filename: `${generateFilename(viewData.tableReferenceName)}`,
                                                type: "image/svg+xml",
                                                sourceWidth: calculateExportDimensions(currentChartRef).finalWidth,
                                                sourceHeight: calculateExportDimensions(currentChartRef).finalHeight,
                                                scale: 1
                                            }, {}))
                                        }
                                        tabIndex={getTabIndex(menuItemDefinitions ? menuItemDefinitions.length + 2 : 2, selectedIndex)}
                                        ref={(el) => menuItems.current.set(menuItemDefinitions ? menuItemDefinitions.length + 2 : 2, el)}
                                    />
                                    <MenuItem
                                        index={menuItemDefinitions ? menuItemDefinitions.length + 3 : 3}
                                        isLast={!tableToggle}
                                        bottomSeparator={!!tableToggle}
                                        locale={locale}
                                        prefixIcon={'Download'}
                                        text={Translations.downloadPNG[locale]}
                                        onClick={() => handleMenuItemClick(() =>
                                            currentChartRef.chart.exportChartLocal({
                                                filename: `${generateFilename(viewData.tableReferenceName)}`,
                                                sourceWidth: calculateExportDimensions(currentChartRef).finalWidth,
                                                sourceHeight: calculateExportDimensions(currentChartRef).finalHeight,
                                                scale: 1
                                            }, {}))
                                        }
                                        tabIndex={getTabIndex(menuItemDefinitions ? menuItemDefinitions.length + 3 : 3, selectedIndex)}
                                        ref={(el) => menuItems.current.set(menuItemDefinitions ? menuItemDefinitions.length + 3 : 3, el)}
                                        />
                                </>
                            }
                            {
                                showAccessibilityModeToggle &&
                                <MenuItem
                                    index={menuItemDefinitions ? menuItemDefinitions.length + 4 : 4}
                                    isFirst={false}
                                    locale={locale}
                                    text={accessibilityMode ? Translations.toggleAccessibilityModeOff[locale] : Translations.toggleAccessibilityModeOn[locale]}
                                    onClick={() => handleMenuItemClick(toggleAccessibilityMode)}
                                    tabIndex={getTabIndex(menuItemDefinitions ? menuItemDefinitions.length + 4 : 4, selectedIndex)}
                                    ref={(el) => menuItems.current.set(menuItemDefinitions ? menuItemDefinitions.length + 4 : 4, el)}
                                    />
                            }
                            {
                                tableToggle &&
                                <MenuItem
                                    index={menuItemDefinitions ? menuItemDefinitions.length + 5 : 5}
                                    isLast={true}
                                    locale={locale}
                                    text={tableToggle.tableMode ? Translations.toggleTableModeOffText[locale] : Translations.toggleTableModeOnText[locale]}
                                    onClick={() => handleMenuItemClick(tableToggle.toggleHandler)}
                                    tabIndex={getTabIndex(menuItemDefinitions ? menuItemDefinitions.length + 5 : 5, selectedIndex)}
                                    ref={(el) => menuItems.current.set(menuItemDefinitions ? menuItemDefinitions.length + 5 : 5, el)}
                                    />
                            }
                        </List>
                    </MenuWrapper>
                }
            </MenuAnchor>
        </BurgerWrapper>
    );
}