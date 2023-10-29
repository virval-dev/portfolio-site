import { useContext, useState } from "react";
import { ButtonContext } from "@/app/context/ButtonContext";


export default function Button({ text }: ButtonAttributes) {
  const [buttonAttributes, setButtonAttributes] = useState({
    text: "Login",
  });

  const onSubmit = () => {
    console.log("Button clicked");
  };

  return (
      <button
          style={
              color = ButtonContext.color,
          }
          className="p-1 text-lg required text-slate-600 rounded-md">
      {buttonAttributes.text}
    </button>
  );
}
