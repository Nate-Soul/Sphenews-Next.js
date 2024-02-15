"use client";

import { useTheme } from "next-themes";

const ThemeModeToggler = () => {
  const { theme, setTheme } = useTheme();

  return (
    <>
    { theme === "dark" ? (
    <button
      onClick={() => setTheme('light')}
      className="w-8 h-8 z-80 inline-flex justify-center border-2 border-transparent items-center rounded-lg bg-main-700 text-white bottom-8 right-8 fixed transition-colors duration-500 hover:bg-main-500 hover:border-main-700"
    >
      <span className="bi-sun"></span>
    </button> ) : (
    <button
      onClick={() => setTheme('dark')}
      className="w-8 h-8 z-80 inline-flex justify-center border-2 border-transparent items-center rounded-lg bg-main-700 text-white bottom-8 right-8 fixed transition-colors duration-500 hover:bg-main-500 hover:border-main-700"
    >
      <span className="bi-moon"></span>
    </button> )
    }
    </>
  );
};

export default ThemeModeToggler;