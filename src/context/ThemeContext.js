"use client"

import { createContext, useState } from "react"

export const ThemeContext = createContext();

export const ThemeContextProvider = ({children}) => {

    const [darkMode, setDarkMode] = useState(false);

    const toggleDarkMode = () => {
        setDarkMode(prev => (!prev));
    }

    return (
        <ThemeContext.Provider value={{darkMode, toggleDarkMode}}>
            <div className={`transition-all ease-in-out duration-1000 ${darkMode ? 'dark' : 'light'}`}>
                {children}
            </div>
        </ThemeContext.Provider>
    )
}