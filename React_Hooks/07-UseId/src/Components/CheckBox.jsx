import React from "react";
import { useId } from "react";

const CheckBox = () => {

    // this will create random id at the time of rendering each time it create new one
    // it help us to be safe at collitionof id
    // and it should not be use to genrate keys in the list
    const id = useId();

    return (
        <div>
            <input type="checkbox" id={id} />
            <label htmlFor={id}>Accept Terms </label>
        </div>
    );
};

export default CheckBox;
