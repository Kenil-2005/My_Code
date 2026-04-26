import { useState } from "react";

const App = () => {

    // const [num, setNum] = useState(0);
    // const [userName, setUserName] = useState("kenil");

    // const changeNum = () => {
    //     let val = num;
    //     val++;
    //     setNum(val);
    //     setUserName('Pansara Kenil');
    // }

    const [num, setNum] = useState(10);

    const increaseNum = () => {
        // // This function can't increse by three because num is not identify properly by setNum
        // setNum(num+1)
        // setNum(num+1)
        // setNum(num+1)

        // // So we use prev, by this the setNum run all time and update value each time
        setNum(prev => prev + 1);
        setNum(prev => prev + 1);
        setNum(prev => prev + 1);
    }

    return (
        <div>
            {/* <h1>
                The userName is {userName}
                <br />

                The value of num  is {num}
            </h1>
            <button onClick={changeNum}>click to increase</button> */}

            <h1>the number is  {num}</h1>
            <button onClick={increaseNum}>Click for Increase number</button>

        </div>
    )
}

export default App;