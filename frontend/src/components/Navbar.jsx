import React from "react";
import DarkModeToggle from "./DarkModeToggle";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-800 text-white flex items-center justify-between px-6 py-3 shadow-md">
      <Link to="/" className="font-bold text-xl text-cyan-400">
        JS Docs
      </Link>
      <div className="flex gap-6 items-center">
        <Link to="/" className="hover:text-cyan-400 transition">Home</Link>
        <Link to="/variables" className="hover:text-cyan-400 transition">Variables</Link>
        <Link to="/functions" className="hover:text-cyan-400 transition">Functions</Link>
        <Link to="/arrays" className="hover:text-cyan-400 transition">Arrays</Link>
        <Link to="/objects" className="hover:text-cyan-400 transition">Objects</Link>
        <Link to="/es6" className="hover:text-cyan-400 transition">ES6</Link>
        <DarkModeToggle />
      </div>
    </nav>
  );
};

export default Navbar;
