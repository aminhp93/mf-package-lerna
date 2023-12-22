/**
 * Config
 * -------------------------------------------------------------------------------------
 * ! IMPORTANT: Make sure you clear the browser local storage in order to see the config changes in the template.
 * ! To clear local storage, you may refer https://www.leadshook.com/help/how-to-clear-local-storage-in-google-chrome-browser/.
 */
import { Direction } from "@mui/material";
import { Skin, Mode, AppBar, Footer, ContentWidth, VerticalNavToggle, HorizontalMenuToggle } from "../layouts/types";
type ThemeConfig = {
    skin: Skin;
    mode: Mode;
    appBar: AppBar;
    footer: Footer;
    navHidden: boolean;
    appBarBlur: boolean;
    direction: Direction;
    templateName: string;
    navCollapsed: boolean;
    routingLoader: boolean;
    disableRipple: boolean;
    navigationSize: number;
    navSubItemIcon: string;
    menuTextTruncate: boolean;
    contentWidth: ContentWidth;
    disableCustomizer: boolean;
    responsiveFontSizes: boolean;
    collapsedNavigationSize: number;
    horizontalMenuAnimation: boolean;
    layout: "vertical" | "horizontal";
    verticalNavToggleType: VerticalNavToggle;
    horizontalMenuToggle: HorizontalMenuToggle;
    afterVerticalNavMenuContentPosition: "fixed" | "static";
    beforeVerticalNavMenuContentPosition: "fixed" | "static";
    toastPosition: "top-left" | "top-center" | "top-right" | "bottom-left" | "bottom-center" | "bottom-right";
};
declare const themeConfig: ThemeConfig;
export default themeConfig;
