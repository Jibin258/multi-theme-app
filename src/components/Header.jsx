import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { Link } from "react-router-dom";

export default function Header() {
  const { theme, switchTheme } = useContext(ThemeContext);

  return (
    <header className="fixed top-0 w-full bg-white dark:bg-gray-900 shadow-md p-4 flex flex-wrap md:flex-nowrap justify-between items-center z-50 gap-4">
      <div className="flex items-center w-full md:w-auto justify-between">
        <img
          alt="DummyLogo"
          src="images/dummy_logo.png"
          className="h-12 w-20 object-cover"
          loading="lazy"
        />
      </div>

      <nav className="flex flex-wrap justify-center md:justify-start gap-4 w-full md:w-auto">
        <Link to="/" className="hover:underline">Home</Link>
        <Link to="/about" className="hover:underline">About</Link>
        <Link to="/contact" className="hover:underline">Contact</Link>
      </nav>

      <div className="w-full md:w-auto flex justify-center md:justify-end">
        <select
          className="border px-2 py-1 rounded w-full md:w-auto"
          value={theme}
          onChange={(e) => switchTheme(e.target.value)}
        >
          <option value="theme1">Theme 1</option>
          <option value="theme2">Theme 2</option>
          <option value="theme3">Theme 3</option>
        </select>
      </div>
    </header>
  );
}