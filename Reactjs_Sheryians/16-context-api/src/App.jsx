import { useState } from 'react';
import Navbar from './components/Navbar';
import { useContext } from 'react';
import { ThemeDataContext } from './context/ThemeContext';

const App = () => {

    const [theme, setTheme] = useContext(ThemeDataContext)


    return (
        <div
            className={` h-screen
                ${theme == 'Light'
                    ? "bg-white text-black"
                    : "bg-black text-white"}`}
        >
            <Navbar />
            <h1 >Kenil</h1>
        </div>
    );
};

export default App;