import { useContext } from "react";
import { ThemeDataContext } from "../context/ThemeContext";

const Navbar2 = () => {

    const [theme, setTheme] = useContext(ThemeDataContext);

    return (
        <div className="flex gap-10 text-lg">
            <h1>Home</h1>
            <h1>About</h1>
            <h1>Contact Us</h1>
            <button
                onClick={() => {
                    theme == 'Light' ? setTheme('Dark') : setTheme('Light')
                }
                }
            >
                {theme}
            </button>
        </div>
    );
};

export default Navbar2;