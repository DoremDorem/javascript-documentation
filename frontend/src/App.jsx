import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import DarkModeToggle from "./components/DarkModeToggle";
import Introduction from "./pages/Introduction";
import Variables from "./pages/Variables";
import Functions from "./pages/Functions";
import Objects from "./pages/Objects";
import ES6Features from "./pages/ES6Features";
import Arrays from "./pages/Arrays";


export default function App() {
  return (
    <Router>
      <Sidebar />
      <main className="main-content">
        <div className="flex justify-end mb-4">
          <DarkModeToggle />
        </div>
        <Routes>
          <Route path="/" element={<Introduction />} />
          <Route path="/variables" element={<Variables />} />
          <Route path="/functions" element={<Functions />} />
          <Route path="/arrays" element={<Arrays />} />
          <Route path="/objects" element={<Objects />} />
          <Route path="/es6" element={<ES6Features />} />
        </Routes>
      </main>
    </Router>
  );
}
