import React, { createContext, useState, useEffect } from "react";

// Create a context for the theme
export const ThemeContext = createContext();

// Create a provider component
export const ThemeProvider = ({ children }) => {
  // Initialize theme state with value from localStorage or default to 'retro'
  const [theme, setTheme] = useState(
    () => localStorage.getItem("theme") || "night"
  );

  // Effect to update localStorage whenever theme changes
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  // Function to toggle the theme between retro and night
  const toggleTheme = () => {
    // setTheme((prevTheme) => (prevTheme === "retro" ? "night" : "retro"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
