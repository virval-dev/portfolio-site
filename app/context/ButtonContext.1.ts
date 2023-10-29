import { createContext } from "react";


export const ButtonContext = createContext<ButtonContextType>({
    buttonBgColor: "red",
    buttonTextColor: "white",
    buttonBorderRadius: "rounded-md",
    buttonBorder: "border-none",
    buttonPadding: "p-2",
    buttonMargin: "m-2",
    buttonFontSize: "text-lg",
    buttonFontWeight: "font-bold",
});
