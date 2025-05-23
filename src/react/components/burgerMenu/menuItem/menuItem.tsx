import React, { forwardRef } from "react";
import styled from "styled-components";
import { TIcon, allIcons } from "../../../../core/types/icon";
import { Icon } from "../../icon/icon";
import { Translations } from "../../../../core/conversion/translations";

interface IListItemProps {
    $isFirst?: boolean;
    $isLast?: boolean;
    $separator?: boolean;
}

interface ITextWrapperProps {
    $hasPrefixIcon?: boolean;
    $hasSuffixIcon?: boolean;
}
const Button = styled(forwardRef<HTMLButtonElement, React.ComponentPropsWithoutRef<'button'>>((props, ref) => (<button ref={ref} {...props} />)))`
    background-color: transparent;
    text-align: left;
    border: none;
    margin: 0;
    padding: 0.5rem 0.7rem 0.5rem 0.7rem;
    cursor: pointer;
    display: inline;
    font-family: "Barlow Semi Condensed", Verdana, sans-serif;
    min-width: 14rem;
    color: #1a3061;
    min-height: 3rem;
    font-size: 0.75rem;
    :hover {
        text-decoration: underline;
    }
`;

const StyledLink = styled(forwardRef<HTMLAnchorElement, React.ComponentPropsWithoutRef<'a'>>((props, ref) => (<a ref={ref} {...props} title={props.children ? props.children.toString() : ''} />)))`
    text-decoration: none;
    display: flex;
    align-items: center;
    padding: 0.5rem 0.7rem;
    min-width: 14rem;
    font-family: "Barlow Semi Condensed", Verdana, sans-serif;
    color: #1a3061;
    min-height: 3rem;
    font-size: 0.75rem;
    :hover {
        text-decoration: underline;
    }
`;

const ListItem = styled.li<IListItemProps>`
    border-top-right-radius: ${p => p.$isFirst ? '18px' : '0px'};
    border-top-left-radius: ${p => p.$isFirst ? '18px' : '0px'};
    border-bottom-right-radius: ${p => p.$isLast ? '18px' : '0px'};
    border-bottom-left-radius: ${p => p.$isLast ? '18px' : '0px'};
    border-bottom: ${p => p.$separator ? '1px solid #bdbdbd' : '0px'};
    :hover {
        background-color: #f2f2f2;
    }
`;

const ContentWrapper = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: row;
    align-content: center;
    justify-content: left;
    align-items: center;
    justify-items: center;
`;

const IconWrapper = styled.div`
    height: 1rem;
    width: 1rem;
    svg {
        height: 1rem;
        width: 1rem;
        fill: #1a3061;
    }
`;

const TextWrapper = styled.span<ITextWrapperProps>`
    margin-left: ${p => p.$hasPrefixIcon ? '0.5rem' : '0px'};
    margin-right: ${p => p.$hasSuffixIcon ? '0.5rem' : '0px'};
`;

const ScreenreaderText = styled.span`
    clip: rect(0 0 0 0);
    clip-path: inset(50%);
    height: 1px;
    overflow: hidden;
    position: absolute;
    white-space: nowrap;
    width: 1px;
`;

export interface IMenuItemProps {
    text: string;
    onClick?: () => void;
    url?: string;
    openNewTab?: boolean;
    isExternal?: boolean;
    prefixIcon?: TIcon | Exclude<React.ReactNode, string>;
    suffixIcon?: TIcon | Exclude<React.ReactNode, string>;
    locale: string;
    bottomSeparator?: boolean;
    isFirst?: boolean;
    isLast?: boolean;
    tabIndex?: number;
    index?: number;
    idPrefix: string;
}

export const MenuItem = forwardRef<HTMLAnchorElement | HTMLButtonElement, IMenuItemProps>(({ text, onClick, url, openNewTab, isExternal, prefixIcon, suffixIcon, locale, idPrefix, bottomSeparator = false, isFirst = false, isLast = false, tabIndex = -1, index = -1 }, ref) => {

    let prefixIconContent: React.ReactNode;
    if (prefixIcon) {
        prefixIconContent = (typeof prefixIcon === 'string' && allIcons.includes(prefixIcon as TIcon)) ? <Icon inheritColor={true} icon={prefixIcon as TIcon} /> : prefixIcon;
    }

    let suffixIconContent: React.ReactNode;
    if (suffixIcon) {
        suffixIconContent = (typeof suffixIcon === 'string' && allIcons.includes(suffixIcon as TIcon)) ? <Icon inheritColor={true} icon={suffixIcon as TIcon} /> : prefixIcon;
    }

    const handleKeyDown = (e: React.KeyboardEvent<HTMLAnchorElement>) => {
        if (e.key === ' ') {
            e.preventDefault();
            (e.target as HTMLAnchorElement).click();
        }
    };

    const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
        if (onClick) {
            onClick();
        }
    };

    const content = (
        <ContentWrapper>
            {
                prefixIconContent && <IconWrapper>{prefixIconContent}</IconWrapper>
            }
            <TextWrapper $hasPrefixIcon={!!prefixIcon} $hasSuffixIcon={!!suffixIcon || isExternal}>{text}</TextWrapper>
            {
                suffixIcon && <IconWrapper>{suffixIconContent}</IconWrapper>
            }
            {
                isExternal && <><ScreenreaderText>{Translations.externalLink[locale]}</ScreenreaderText><IconWrapper><Icon inheritColor={true} icon={'ExternalLink'} /></IconWrapper></>
            }
        </ContentWrapper>
    )

    if (url) {
        return (
            <ListItem $isFirst={isFirst} $isLast={isLast} $separator={bottomSeparator}>
                <StyledLink role="menuitem" id={`${idPrefix}-menuitem-${index}`} ref={ref as React.Ref<HTMLAnchorElement>} href={url} target={openNewTab ? '_blank' : undefined} onKeyDown={handleKeyDown} onClick={handleClick} tabIndex={tabIndex}>
                    {content}
                </StyledLink>
            </ListItem>
        );
    }

    if (onClick) {
        return (<ListItem $isFirst={isFirst} $isLast={isLast} $separator={bottomSeparator}>
            <Button role="menuitem" id={`${idPrefix}-menuitem-${index}`} ref={ref as React.Ref<HTMLButtonElement>} onClick={onClick} tabIndex={tabIndex}>
                {content}
                </Button>
            </ListItem>)
    }
    return (<></>);
});