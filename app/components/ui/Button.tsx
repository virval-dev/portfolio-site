import { useContext, useReducer } from "react";
import { ButtonContext } from "@/app/context/ButtonContext.1";

interface ButtonState {
  buttonBgColor: string;
  buttonTextColor: string;
  buttonBorderRadius: string;
  buttonBorder: string;
  buttonPadding: string;
  buttonMargin: string;
  buttonFontSize: string;
  buttonFontWeight: string;
}

// Define the type for the actions
interface ButtonAction {
  type: ActionType;
  payload: string;
}

const buttonReducer = (state: ButtonState, action: ButtonAction) => {
  switch (action.type) {
    case "CHANGE_BUTTON_BG_COLOR":
      return { ...state, buttonBgColor: action.payload };
    case "CHANGE_BG_COLOR":
      return { ...state, buttonTextColor: action.payload };
    case "CHANGE_FONT_SIZE":
      return { ...state, buttonFontSize: action.payload };
    case "CHANGE_FONT_WEIGHT":
      return { ...state, buttonFontWeight: action.payload };
    case "BACKGROUND_COLOR":
      return { ...state };
    case "CHANGE_PADDING":
      return { ...state, buttonPadding: action.payload };
    case "CHANGE_MARGIN":
      return { ...state, buttonMargin: action.payload };
    case "CHANGE_BORDER":
      return { ...state, buttonBorder: action.payload };
    case "CHANGE_BORDER_RADIUES":
      return { ...state, buttonBorderRadius: action.payload };
    default:
      return state;
  }
};

const initialButtonState: ButtonState = {
  buttonBgColor: "blue-500",
  buttonTextColor: "white",
  buttonBorderRadius: "p-2",
};

import { ActionType } from "@/app/context/ButtonContext";
export type ActionType = "CHANGE_PADDING" | "CHANGE_COLOR" | "CHANGE_FONT_SIZE";

const Button = ({ text }: ButtonProps) => {
  const [buttonState, dispatch] = useReducer(buttonReducer, initialButtonState);

  return (
    <ButtonContext.Provider>
      <button
        style={{
          backgroundColor: buttonContext.buttonBgColor,
          color: buttonContext.buttonTextColor,
          borderRadius: buttonContext.buttonBorderRadius,
          border: buttonContext.buttonBorder,
          padding: buttonContext.buttonPadding,
          margin: buttonContext.buttonMargin,
          fontSize: buttonContext.buttonFontSize,
          fontWeight: buttonContext.buttonFontWeight,
        }}
      >
        {text}
      </button>
    </ButtonContext.Provider>
  );
};

export default Button;
