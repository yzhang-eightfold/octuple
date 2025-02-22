import React from 'react';
import { MenuSize, MenuVariant } from '../Menu.types';
import { OcBaseProps } from '../../OcBase';
import { IconProps } from '../../Icon';
import { LinkProps } from '../../Link';

export enum MenuItemType {
    button = 'button',
    custom = 'custom',
    link = 'link',
    subHeader = 'subHeader',
}

export interface MenuItemProps {
    /**
     * Value of the menu item
     */
    value: any;
    /**
     * Variant of the menu item
     * @default MenuVariant.neutral
     */
    variant?: MenuVariant;
    /**
     * Type of the menu
     * @default MenuType.button
     */
    type?: MenuItemType;
    /**
     * Size of the menu
     * @default MenuSize.Medium
     */
    size?: MenuSize;
}

export interface MenuItemButtonProps
    extends MenuItemProps,
        OcBaseProps<Omit<HTMLButtonElement, 'children'>> {
    /**
     * Menu item icon props
     */
    iconProps?: IconProps;
    /**
     * Display label of the menu item
     */
    text?: string;
    /**
     * If menu item is disabled or not
     */
    disabled?: boolean;
    /**
     * On Click handler of the menu item
     * @param value
     */
    onClick?: (value: any) => void;
    /**
     * The counter string.
     */
    counter?: string;
    /**
     * If the menu item is active or not
     * @default false
     */
    active?: boolean;
}

export interface MenuItemLinkProps
    extends MenuItemProps,
        Omit<LinkProps, 'variant' | 'type'> {
    /**
     * Menu item icon props
     */
    iconProps?: IconProps;
    /**
     * Display label of the menu item
     */
    text?: string;
    /**
     * If menu item is disabled or not
     */
    disabled?: boolean;
    /**
     * The counter string.
     */
    counter?: string;
    /**
     * If the menu item is active or not
     * @default false
     */
    active?: boolean;
}

export interface MenuItemSubHeaderProps
    extends MenuItemProps,
        OcBaseProps<HTMLSpanElement> {
    /**
     * Text of the sub header
     */
    text?: string;
}

export interface IMenuItemRender {
    value: any;
    index: number;
    onChange: (value: any) => void;
}

export interface MenuItemCustomProps
    extends MenuItemProps,
        OcBaseProps<HTMLDivElement> {
    /**
     * Index of the sub item
     */
    index?: number;
    /**
     * Method to render custom menu item
     */
    render?: (menuItemRender: IMenuItemRender) => React.ReactNode;
}
