import React, { useState, useEffect, useRef } from "react";

const App = () => {

  const [inputValue, setInputValue] = useState("");

  const inputRef = useRef(null); // it use to take the refrence of the element and use the property of the element to manupilate the DOM 
  // Workes only at the rendering time

  useEffect(() => {
    inputRef.current && inputRef.current.focus();
  }, []);

  return (
    <div>
      <input
        type='text'
        placeholder='Type Something...'
        value={inputValue}
        onChange={(e) => { setInputValue(e.target.value); }}
        ref={inputRef}
      />
      <p>
        You Typed: <strong>{inputValue}</strong>
      </p>

    </div>
  );
};

export default App;
