import React from "react";
const Button = ({ text, onClick }) => {
  return (
    <button
      className="px-4 py-2 bg-seconary-light rounded-xl w-fit"
      onClick={onClick}
    >
      {text.current}
    </button>
  );
};

function LoginButton() {
  return (
    <button className=" select-none text-xl px-4 py-4 text-white bg-slate-950 rounded-xl w-full ">
      Login
    </button>
  );
}

function CreateButton() {
  return (
    <button
      id="createAccountBtn"
      className=" select-none text-xl px-4 py-4 text-white bg-slate-950 rounded-xl w-full "
    >
      Create Account
    </button>
  );
}

document.addEventListener("DOMContentLoaded", function () {
  const button = document.getElementById("createAccountBtn");
  const form = document.getElementById("createForm");

  button.addEventListener("click", function () {
    button.style.display = "none";
    form.style.display = "block";
  });
});

function CreateFormButton() {
  return (
    <button
      id="createAccount"
      className=" select-none text-xl px-4 py-4 text-white bg-slate-950 rounded-xl w-full "
    >
      Create Account
    </button>
  );
}

export { Button, LoginButton, CreateButton, CreateFormButton };
