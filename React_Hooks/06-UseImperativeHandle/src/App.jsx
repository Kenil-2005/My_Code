import React, { useRef } from "react";
import FancyInput from "./components/FancyInput";

const App = () => {

    const fancyInputRef = useRef(null);

    return (
        <div>
            <FancyInput ref={fancyInputRef} />

            <button onClick={() => { fancyInputRef.current.focus(); }}>Focus</button>
            <button onClick={() => { fancyInputRef.current.clear(); }}>clear</button>
        </div>
    );
};

export default App;
