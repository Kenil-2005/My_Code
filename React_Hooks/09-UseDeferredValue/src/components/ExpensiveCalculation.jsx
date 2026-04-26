import { useDeferredValue, useState } from "react";

const ExpensiveCalculation = () => {
    const [input, setInput] = useState("1");

    const runExpensiveCalculation = (value) => {
        if (!value) return [];

        const calculationResults = [];

        for (let i = 0; i < 20000; i++) {
            const result = i * parseInt(value || "0", 10);
            if (i % 1000 === 0) {
                calculationResults.push(result);
            }
        }

        return calculationResults;
    };

    const handleInputChange = (e) => {
        const newValue = e.target.value;
        setInput(newValue);
    };

    // Defers updating a non-urgent part of the UI, improving performance and responsiveness for large updates.
    // it shows the last value untill the new one is responding.
    const defferedInput = useDeferredValue(input);
    const Results = runExpensiveCalculation(defferedInput);

    const isStale = defferedInput !== input;

    return (
        <div>
            <h2>useTransition</h2>

            <input
                type='number'
                placeholder='Enter any positive number'
                value={input}
                name='number'
                onChange={handleInputChange}
            />

            <div>
                {isStale && <div>Showing previous results whilw calculating...</div>}
                <h3>Result</h3>
                <ul>
                    {Results.map((result, index) => (
                        <li key={index} >
                            {index * 1000} x {input} = {result}
                        </li>
                    ))}
                </ul>
            </div>

        </div>
    );
};

export default ExpensiveCalculation;
