import React, { useContext } from "react";
import ThemeContext from "../theme-context";

const ThemeSwitcher = () => {
    const { isDarkMode, toggleDark } = useContext(ThemeContext); // allowing components to access shared data throughout the component tree without prop drilling.

    return <button onClick={toggleDark}>Switch to {isDarkMode ? "Dark" : "Light"} Mode</button>;
};

export default ThemeSwitcher;
