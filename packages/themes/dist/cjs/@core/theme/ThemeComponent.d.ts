import React, { ReactNode } from "react";
import { Settings } from "../context/settingsContext";
interface Props {
    settings: Settings;
    children: ReactNode;
}
declare const ThemeComponent: (props: Props) => React.JSX.Element;
export default ThemeComponent;
