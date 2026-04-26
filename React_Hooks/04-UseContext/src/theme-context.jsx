import { createContext, useEffect, useState } from "react";

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    const toggleDark = () => setIsDarkMode((prev) => !prev);

    useEffect(() => {
        document.documentElement.setAttribute("data-theme", isDarkMode ? "light" : "dark");
    }, [isDarkMode]);

    return <ThemeContext.Provider value={{ isDarkMode, toggleDark }}>{children}</ThemeContext.Provider>;
};

export default ThemeContext;