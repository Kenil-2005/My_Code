import React, { useEffect, useLayoutEffect, useState } from "react";
import HookExample from "./components/HookExample";

const App = () => {

    const [count, setCount] = useState(0);
    const [inputValue, setInputValue] = useState("");
    const [toggle, setToggle] = useState(true);


    // useEffect use to performs side effects like data fetching, manual DOM updating etc
    // it use callback funtion and dependence.
    useEffect(() => {
        console.log("rerendered");
    }, [count]);

    useLayoutEffect(() => {
        console.log("useLayoutEffect");
    }, []); // runs after the first render but before browser paints.


    return (
        <div>
            <input
                type='text'
                placeholder='Type Something...'
                value={inputValue}
                onChange={(e) => { setInputValue(e.target.value); }}
            />
            <p>
                You Typed: <strong>{inputValue}</strong>
            </p>

            <hr />
            <p>
                Count: {count}
            </p>

            <button onClick={() => { setCount(count + 1); }}>Clik Me</button>

            <hr />

            {toggle && <HookExample />}
            <button onClick={() => { setToggle(!toggle); }}>Toggle</button>


        </div>
    );
};

export default App;
