import React, { createContext, useState, useEffect } from "react";

// Create the ThemeContext to share theme data across the app
export const ThemeContext = createContext();

// ThemeProvider component to wrap the application and provide theme state
export const ThemeProvider = ({ children }) => {
  // Retrieve theme from localStorage if available; otherwise, default to 'theme1'
  const storedTheme = localStorage.getItem("theme") || "theme1";

  // State to hold the current theme
  const [theme, setTheme] = useState(storedTheme);

  // Update localStorage whenever the theme changes
  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  // Optional utility function to get class names based on theme (currently unused here)
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

  // Function to switch the theme
  const switchTheme = (newTheme) => setTheme(newTheme);

  return (
    // Provide theme and switchTheme function to children components
    <ThemeContext.Provider value={{ theme, switchTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
