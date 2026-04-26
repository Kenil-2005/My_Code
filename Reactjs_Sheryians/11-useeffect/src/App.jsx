import { useEffect, useState } from "react";

export default function App() {

    const [a, setA] = useState(0);
    const [b, setB] = useState(0);

    const aChanging = ()=>{
        console.log("A ki value change ho gyi");
    }

    const bChanging = ()=>{
        console.log("B ki value change ho gyi");
    }

    useEffect(()=>{
        aChanging();
    },[a]);

    useEffect(()=>{
        bChanging();
    },[b]);

    return (
        <>
            <h1>A is {a}</h1>
            <h1>B is {b}</h1>

            <button 
            onClick={()=>{
                setA(a+1)
            }}
            >
                Change A
            </button>

            <button 
            onClick={()=>{
                setB(b-1)
            }}
            >
                Change B
            </button>
        </>
    );
}
