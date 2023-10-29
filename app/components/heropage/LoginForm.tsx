import Button from "../ui/Button";
import { useState, useContext } from "react";

const LoginForm: React.FC = () => {
  return (
    <form className="flex flex-col border-black border-2 p-4">
      <div className="flex flex-col">
        <label
          className="text-xl text-slate-800 mb-2  text-left"
          htmlFor="username"
        >
          Username:
        </label>
        <input
          className="p-1 text-lg required text-slate-600 rounded-md"
          type="text"
          name="username"
          id="username"
        />
      </div>
      <div className="flex flex-col mt-3">
        <label
          className="text-xl text-slate-800 mb-2 text-left"
          htmlFor="password"
        >
          Password:
        </label>
        <input
          className="p-1 text-lg required text-slate-600 rounded-md"
          type="password"
          name="password"
          id="password"
        />
      </div>

      <Button text="Login" />
    </form>
  );
};

export default LoginForm;
