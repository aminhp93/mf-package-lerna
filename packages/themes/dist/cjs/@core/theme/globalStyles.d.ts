import { Theme } from "@mui/material/styles";
declare const GlobalStyles: (theme: Theme) => {
    'body[style^="padding-right"] .layout-navbar-and-nav-container::after': {
        content: string;
        position: "absolute";
        left: string;
        top: number;
        height: string;
        width: string;
    };
    ".demo-space-x > *": {
        marginTop: string;
        marginRight: string;
        'body[dir="rtl"] &': {
            marginRight: string;
            marginLeft: string;
        };
    };
    ".demo-space-y > *:not(:last-of-type)": {
        marginBottom: string;
    };
    ".MuiGrid-container.match-height .MuiCard-root": {
        height: string;
    };
    ".ps__rail-y": {
        zIndex: number;
        right: string;
        left: string;
        "&:hover, &:focus, &.ps--clicking": {
            backgroundColor: string;
        };
        "& .ps__thumb-y": {
            right: string;
            left: string;
            backgroundColor: string;
        };
        ".layout-vertical-nav &": {
            "& .ps__thumb-y": {
                width: number;
                backgroundColor: string;
            };
            "&:hover, &:focus, &.ps--clicking": {
                backgroundColor: string;
                "& .ps__thumb-y": {
                    width: number;
                };
            };
        };
    };
    "#nprogress": {
        pointerEvents: string;
        "& .bar": {
            left: number;
            top: number;
            height: number;
            width: string;
            zIndex: number;
            position: string;
            backgroundColor: string;
        };
    };
};
export default GlobalStyles;
