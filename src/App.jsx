import React, { useContext } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import SideBar from "./components/SideBar";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import { ThemeContext } from "./context/ThemeContext";
import "./App.css";

export default function App() {
  const { theme } = useContext(ThemeContext);

  const getLayoutClasses = () => {
    switch (theme) {
      case 'theme1':
        return 'bg-white text-black font-sans';
      case 'theme2':
        return 'bg-gray-900 text-black font-serif';
      case 'theme3':
        return 'bg-gradient-to-br from-pink-300 via-purple-300 to-indigo-400 text-pink-700 font-[Pacifico]';
      default:
        return 'bg-white text-black';
    }
  };

  return (
    <div className={`${getLayoutClasses()} min-h-screen transition-all duration-300`}>
      {theme !== 'theme2' ? <Header /> : <SideBar />}

      <div className={`flex-1 transition-all duration-300 ${theme === 'theme2' ? 'ml-64' : ''}`}>
        <Routes>
          <Route path="/" element={<Home theme={theme} />} />
          <Route path="/about" element={<About theme={theme} />} />
          <Route path="/contact" element={<Contact theme={theme} />} />
        </Routes>
      </div>
    </div>
  );
}