import React, { useContext } from "react";
import { Routes, Route } from "react-router-dom"; // React Router for page navigation
import Header from "./components/Header"; // Header component
import SideBar from "./components/SideBar"; // Sidebar component (used conditionally based on theme)
import Home from "./pages/Home"; // Home page
import About from "./pages/About"; // About page
import Contact from "./pages/Contact"; // Contact page
import { ThemeContext } from "./context/ThemeContext"; // Theme context for switching themes
import "./App.css"; // Global CSS styles

export default function App() {
  // Destructure theme value from ThemeContext
  const { theme } = useContext(ThemeContext);

  // Function to determine layout styles based on selected theme
  const getLayoutClasses = () => {
    switch (theme) {
      case 'theme1':
        // Light theme
        return 'bg-white text-black font-sans';
      case 'theme2':
        // Dark theme (Sidebar layout)
        return 'bg-gray-900 text-black font-serif';
      case 'theme3':
        // Gradient theme with custom font
        return 'bg-gradient-to-br from-pink-300 via-purple-300 to-indigo-400 text-pink-700 font-[Pacifico]';
      default:
        // Default fallback theme
        return 'bg-white text-black';
    }
  };

  return (
    // Root div with dynamic theme classes and transition effects
    <div className={`${getLayoutClasses()} min-h-screen transition-all duration-300`}>
      
      {/* Conditionally render Header or Sidebar based on theme */}
      {theme !== 'theme2' ? <Header /> : <SideBar />}

      {/* Main content area; add left margin if Sidebar is shown (theme2) */}
      <div className={`flex-1 transition-all duration-300 ${theme === 'theme2' ? 'ml-64' : ''}`}>
        
        {/* Define application routes */}
        <Routes>
          <Route path="/" element={<Home theme={theme} />} />
          <Route path="/about" element={<About theme={theme} />} />
          <Route path="/contact" element={<Contact theme={theme} />} />
        </Routes>
      </div>
    </div>
  );
}
