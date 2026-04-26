import React, { useImperativeHandle, useRef, useState } from "react";

const FancyInput = ({ ref }) => {

    const [inputValue, setInputVlaue] = useState("");
    const inputRef = useRef(null);

    useImperativeHandle(ref, () => ({   // use to pass value to the parent from child
        focus: () => {
            inputRef.current.focus();
        },
        clear: () => {
            inputRef.current.value = "";
        },
    }));

    return (
        <div>
            <input
                type="text"
                placeholder='Type Something...'
                value={inputValue}
                onChange={(e) => { setInputVlaue(e.target.value); }}
                ref={inputRef}
            />

            <p>You Typed: <strong>{inputValue}</strong></p>
        </div>
    );
};

export default FancyInput;