import { useState } from "react";
import Navbar from "./components/Navbar";

const App = () => {

    const [theme, setTheme] = useState('Light');

    return (
        <div className={`p-12 h-screen flex flex-col justify-center gap-10 items-center 
            ${theme === 'Light'
                ? "bg-light text-black"
                : "bg-black text-white"
            }`}>
            <h1 className="text-2xl">Theme is {theme}</h1>
            {/* pass both value and setvalue as child */}
            <Navbar theme={theme} setTheme={setTheme} />
        </div>
    );
};

export default App;