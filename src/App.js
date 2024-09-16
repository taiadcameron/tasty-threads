import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import React from "react";
import Navbar from "./components/nav";
import SideNav from "./components/sidenav";

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <div className="flex flex-1">
          <SideNav />
          <main className="flex-1 ml-64 p-4 mt-16"></main>
        </div>
      </div>
    </Router>
  );
}

export default App;
