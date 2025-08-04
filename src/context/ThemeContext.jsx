import React, { createContext, useState, useEffect } from "react";

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const storedTheme = localStorage.getItem("theme") || "theme1";
  const [theme, setTheme] = useState(storedTheme);

  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  const getLayoutClasses = () => {
    switch (theme) {
      case 'theme1':
        return 'bg-white text-black font-sans';
      case 'theme2':
        return 'bg-gray-900 text-black font-serif';
      case 'theme3':
        return 'bg-gradient-to-br from-pink-300 via-purple-300 to-indigo-400 text-white font-[Pacifico]';
      default:
        return 'bg-white text-black';
    }
  };

  const switchTheme = (newTheme) => setTheme(newTheme);

  return (
    <ThemeContext.Provider value={{ theme, switchTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};