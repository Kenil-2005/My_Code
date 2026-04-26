import React from "react";
import { useTransition } from "react";
import { useState } from "react";

const ExpensiveCalculation = () => {
    const [input, setInput] = useState("");
    const [results, setResults] = useState([]);

    //  Allows marking a state update as a "transition", which helps keep the UI responsive during potentially slow rendering processes.
    const [isPending, startTransition] = useTransition();

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

        startTransition(() => {
            const calculatedResults = runExpensiveCalculation(newValue);
            setResults(calculatedResults);
        });
    };

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

            <h3>Result</h3>
            {isPending ?
                (<p>Loading...</p>) :
                (<div>
                    <ul>
                        {results.map((result, index) => (
                            <li key={index} >
                                {index * 1000} x {input} = {result}
                            </li>
                        ))}
                    </ul>
                </div>)
            }

        </div>
    );
};

export default ExpensiveCalculation;
