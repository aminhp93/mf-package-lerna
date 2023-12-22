import React, { ReactNode } from "react";
import { Direction } from "@mui/material";
import { Skin, Mode, AppBar, Footer, ThemeColor, ContentWidth, VerticalNavToggle } from "../layouts/types";
export type Settings = {
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
export type PageSpecificSettings = {
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
export type SettingsContextValue = {
    settings: Settings;
    saveSettings: (updatedSettings: Settings) => void;
};
interface SettingsProviderProps {
    children: ReactNode;
    pageSettings?: PageSpecificSettings | void;
}
export declare const SettingsContext: React.Context<SettingsContextValue>;
export declare const SettingsProvider: ({ children, pageSettings }: SettingsProviderProps) => React.JSX.Element;
export declare const SettingsConsumer: any;
export {};
