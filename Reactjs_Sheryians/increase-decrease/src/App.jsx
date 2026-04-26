import { useState } from "react";

const App = () => {

    const [num, setNum] = useState(0);

    const increaseNum = () => {
        setNum(num + 1);
    }

    const decreseNum = () => {
        setNum(num - 1);
    }

    return (
        <div>
            <h1>The number is  {num}</h1>
            <button onClick={increaseNum}>Increase number</button>
            <button onClick={decreseNum}>Decrese number</button>
        </div>
    )
}

export default App;