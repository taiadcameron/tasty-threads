import React from "react";
import { LoginNavBar } from "../components/nav";
import { LoginForm, CreateForm } from "../components/forms";
import { CreateButton } from "../components/button";
import CookingIcons from "../components/cooking-icons";
function LoginPage() {
  return (
    <div className="pt-4 h-screen flex flex-col bg-gradient-to-t from-orange via-primary ">
      <LoginNavBar />

      <div className="  flex h-full w-full p-24 pt-12 pb-0 ">
        <div className=" w-full  flex flex-col gap-12 mr-12">
          <div className=" select-none flex flex-col gap-4">
            <h1 className="font-Pacifico font-medium text-9xl -ml-4 p-0 indent-0	">
              Welcome!
            </h1>
            <h2 className="font-Pacifico  text-4xl">To Tasty Threads</h2>
            <p className="max-w-48 ">
              Login and Explore Dishes Around the World
            </p>
          </div>
          <div className="flex flex-col gap-12">
            <LoginForm />
            <CreateButton />
          </div>
        </div>
        <div className=" w-full h-max">
          <CookingIcons />
        </div>
      </div>
    </div>
  );
}

export { LoginPage };
