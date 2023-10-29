import { createContext } from "react";

export type ButtonContextType = {
    buttonBgColor: string;
    setButtonBgColor: (color: string) => void;
    buttonTextColor: string;
    setButtonTextColor: (color: string) => void;
    buttonBorderRadius: string;
    setButtonBorderRadius: (radius: string) => void;
    buttonBorder: string;
    buttonPadding: string;
    buttonMargin: string;
    buttonFontSize: string;
    buttonFontWeight: string;
};

export const ButtonContext = createContext<ButtonContextType>({
    buttonBgColor: "red",
    setButtonBgColor: (color: string) => {},
    buttonTextColor: "white",
    setButtonTextColor: (color: string) => {},
    buttonBorderRadius: "rounded-md",
    setButtonBorderRadius: (radius: string) => {},
    buttonBorder: "border-none",
    buttonPadding: "p-2",
    buttonMargin: "m-2",
    buttonFontSize: "text-lg",
    buttonFontWeight: "font-bold",
});
