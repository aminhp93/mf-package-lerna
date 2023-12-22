import React, { ReactNode } from 'react';
import { PaletteMode, Direction } from '@mui/material';
export { Theme, styled, useTheme } from '@mui/material/styles';

declare const ThemeToggleButton$1: () => React.JSX.Element;

declare const ThemeToggleButton: () => React.JSX.Element;

type Skin = "default" | "bordered";
type Mode = PaletteMode | "semi-dark";
type ContentWidth = "full" | "boxed";
type AppBar = "fixed" | "static" | "hidden";
type Footer = "fixed" | "static" | "hidden";
type ThemeColor = "primary" | "secondary" | "error" | "warning" | "info" | "success";
type VerticalNavToggle = "accordion" | "collapse";

type Settings = {
    skin: Skin;
    mode: Mode;
    appBar?: AppBar;
    footer?: Footer;
    navHidden?: boolean;
    appBarBlur: boolean;
    direction: Direction;
    navCollapsed: boolean;
    themeColor: ThemeColor;
    contentWidth: ContentWidth;
    layout?: "vertical" | "horizontal";
    lastLayout?: "vertical" | "horizontal";
    verticalNavToggleType: VerticalNavToggle;
    toastPosition?: "top-left" | "top-center" | "top-right" | "bottom-left" | "bottom-center" | "bottom-right";
};
type PageSpecificSettings = {
    skin?: Skin;
    mode?: Mode;
    appBar?: AppBar;
    footer?: Footer;
    navHidden?: boolean;
    appBarBlur?: boolean;
    direction?: Direction;
    navCollapsed?: boolean;
    themeColor?: ThemeColor;
    contentWidth?: ContentWidth;
    layout?: "vertical" | "horizontal";
    lastLayout?: "vertical" | "horizontal";
    verticalNavToggleType?: VerticalNavToggle;
    toastPosition?: "top-left" | "top-center" | "top-right" | "bottom-left" | "bottom-center" | "bottom-right";
};
type SettingsContextValue = {
    settings: Settings;
    saveSettings: (updatedSettings: Settings) => void;
};
interface SettingsProviderProps {
    children: ReactNode;
    pageSettings?: PageSpecificSettings | void;
}
declare const SettingsProvider: ({ children, pageSettings }: SettingsProviderProps) => React.JSX.Element;
declare const SettingsConsumer: any;

interface Props {
    settings: Settings;
    children: ReactNode;
}
declare const ThemeComponent: (props: Props) => React.JSX.Element;

declare const useSettings: () => SettingsContextValue;

declare const log: () => string;

declare const capitalizeText: (text: string) => string;

export { ThemeToggleButton$1 as Button, SettingsConsumer, SettingsProvider, ThemeComponent, ThemeToggleButton, capitalizeText, log, useSettings };
