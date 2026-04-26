import React, { useEffect } from "react";

const HookExample = () => {

    // and also return attribute which return value at the the component is unmount.
    useEffect(() => {
        console.log("rerendered");

        return () => {
            console.log("unMount");
        };
    }, []);

    return (
        <div>HookExample</div>
    );
};

export default HookExample;
