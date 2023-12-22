import { Theme } from "@mui/material/styles";
declare const Button: (theme: Theme) => {
    MuiButton: {
        styleOverrides: {
            root: {
                fontWeight: number;
                borderRadius: number;
                lineHeight: number;
                letterSpacing: string;
                padding: string;
            };
            contained: {
                boxShadow: string;
                padding: string;
            };
            outlined: {
                padding: string;
            };
            sizeSmall: {
                padding: string;
                "&.MuiButton-contained": {
                    padding: string;
                };
                "&.MuiButton-outlined": {
                    padding: string;
                };
            };
            sizeLarge: {
                padding: string;
                "&.MuiButton-contained": {
                    padding: string;
                };
                "&.MuiButton-outlined": {
                    padding: string;
                };
            };
        };
    };
    MuiButtonBase: {
        defaultProps: {
            disableRipple: boolean;
        };
    };
};
export default Button;
