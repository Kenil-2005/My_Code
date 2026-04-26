import { useReducer } from "react";

const App = () => {

    const initialState = 0;

    function countReducer(state, action) {
        switch (action.type) {
            case "INCREMENT":
                return state + action.value;
            case "DECREMENT":
                return state - 1;
            case "RESET":
                return 0;

            default:
                return state;
        }
    }

    const [count, dispatch] = useReducer(countReducer, initialState);  // An alternative to useState for managing complex state logic with a reducer function.

    return (
        <div>
            <h2>Count: {count}</h2>
            <button onClick={() => { dispatch({ type: "INCREMENT", value: 2 }); }}>+</button> {/* we can pass many thing ii value  */}
            <button onClick={() => { dispatch({ type: "DECREMENT" }); }}>-</button>
            <button onClick={() => { dispatch({ type: "RESET" }); }}>Reset</button>
        </div>
    );
};

export default App;