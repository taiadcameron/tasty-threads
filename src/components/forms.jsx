import React from "react";
import { LoginButton, CreateFormButton } from "./button";
import { X } from "lucide-react";

function LoginForm() {
  return (
    <form className=" select-none flex flex-col gap-4  p-6 bg-seconary-light shadow-card-shadow rounded-3xl">
      <input
        type="email"
        id="email"
        className="w-full px-3 py-4 text-sm leading-tight text-gray-700 border rounded-lg appearance-none focus:outline-none focus:shadow-outline"
        placeholder="Email or Username"
      />

      <input
        type="password"
        id="password"
        className="w-full px-3 py-4 text-sm leading-tight text-gray-700 border rounded-lg appearance-none focus:outline-none focus:shadow-outline"
        placeholder="Password"
      />

      <LoginButton />
    </form>
  );
}

function CreateForm() {
  return (
    <div id="createForm" className="hidden">
      <form className="  select-none flex flex-col gap-4  p-6 bg-seconary-light shadow-card-shadow rounded-3xl">
        <div className="w-full flex justify-end">
          <X />
        </div>
        <input
          type="email"
          id="email"
          className="w-full px-3 py-4 text-sm leading-tight text-gray-700 border rounded-lg appearance-none focus:outline-none focus:shadow-outline"
          placeholder="Username"
        />
        <input
          type="email"
          id="email"
          className="w-full px-3 py-4 text-sm leading-tight text-gray-700 border rounded-lg appearance-none focus:outline-none focus:shadow-outline"
          placeholder="Email "
        />
        <input
          type="password"
          id="password"
          className="w-full px-3 py-4 text-sm leading-tight text-gray-700 border rounded-lg appearance-none focus:outline-none focus:shadow-outline"
          placeholder="Password"
        />
        <input
          type="password"
          id="password"
          className="w-full px-3 py-4 text-sm leading-tight text-gray-700 border rounded-lg appearance-none focus:outline-none focus:shadow-outline"
          placeholder="Repeat Password"
        />

        <CreateFormButton />
      </form>
    </div>
  );
}

export { CreateForm, LoginForm };
