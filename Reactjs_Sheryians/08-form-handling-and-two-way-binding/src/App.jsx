import { useState } from "react";

const App = () => {

    const [title, setTitle] = useState('');

    const submitHandler = (e) => {
        e.preventDefault();
        console.log("Form Submmited by " + title);
        // console.log(title);
        setTitle('');
    }


    return (
        <>
            <form onSubmit={(e) => {
                submitHandler(e);
            }} >
                <input
                    type="text"
                    value={title}
                    placeholder="Enter your Name "
                    onChange={(e) => {
                        setTitle(e.target.value);
                    }}
                />
                <button>Submit</button>
            </form>
        </>
    )
}

export default App
