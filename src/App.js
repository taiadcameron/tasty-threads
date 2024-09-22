import "./App.css";
import React from "react";
import { Navbar } from "./components/nav";
import SideNav from "./components/sidenav";
import Content from "./components/content";

function App() {
  return (
    <div className="flex flex-col min-h-screen ">
      <Navbar />
      <div className="flex flex-1">
        <SideNav />
        <main className="flex-1 ml-64 p-4 mt-16"></main>
      </div>
      <div className="h-screen ml-1/5 pt-20 pl-32 pr-24  ">
        <Content />
      </div>
    </div>
  );
}

export default App;
