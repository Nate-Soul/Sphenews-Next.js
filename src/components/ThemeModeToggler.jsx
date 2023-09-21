"use client";

import { useContext } from "react";
import { ThemeContext } from "@/context/ThemeContext";

const ThemeModeToggler = () => {
  const { darkMode, toggleDarkMode } = useContext(ThemeContext);

  return (
    <button
      onClick={toggleDarkMode}
      className="w-8 h-8 z-80 inline-flex justify-center border-2 border-transparent items-center rounded-lg bg-main-700 text-white bottom-8 right-8 fixed transition-colors duration-500 hover:bg-main-500 hover:border-main-700"
    >
      {darkMode ? (
        <span className="bi-moon"></span>
      ) : (
        <span className="bi-sun"></span>
      )}
    </button>
  );
};

export default ThemeModeToggler;
