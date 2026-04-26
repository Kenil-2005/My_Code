import { useState } from "react";
import AddNote from "./components/AddNote";
import { X } from "lucide-react"

const App = () => {

    const [title, setTitle] = useState("");
    const [details, setDetails] = useState("");
    const [task, setTask] = useState([]);

    const submitHandler = (e) => {
        e.preventDefault();

        const copyTask = [...task];
        copyTask.push({ title, details });
        setTask(copyTask);
        console.log(task);

        setTitle('');
        setDetails('');
    }


    const deleteNote = (idx) => {
        const copyTask = [...task];
        copyTask.splice(idx,1);
        setTask(copyTask);
    }

    let datas = { title, details };



    return (
        <div className="h-screen lg:flex bg-black text-white">
            <form
                onSubmit={(e) => {
                    submitHandler(e);
                }}
                className="flex flex-col items-start p-10 lg:w-1/2 gap-4"
            >

                <h1 className="text-5xl font-extrabold">
                    Your Notes
                </h1>

                <input
                    type="text"
                    value={title}
                    placeholder="Enter Note Heading"
                    className="w-full text-lg px-5 py-2 border-2 rounded outline-none"
                    onChange={(e) => {
                        setTitle(e.target.value);
                    }}
                />

                <textarea
                    type="text"
                    value={details}
                    placeholder="Enter details"
                    className="w-full text-lg h-35 px-5 py-2 border-2 rounded outline-none"
                    onChange={(e) => {
                        setDetails(e.target.value);
                    }}
                />

                <button
                    className="w-full active:scale-x-95 text-lg font-bold bg-white text-black px-5 py-2 rounded outline-none"
                >
                    Add Note
                </button>

            </form >

            <div className="py-10 px-9 lg:w-1/2 lg:border-l-2">

                <h1 className="text-5xl font-extrabold">
                    Your Notes
                </h1>

                <div id="cards" className="flex flex-wrap gap-3 py-8 justify-center items-start h-full overflow-auto">

                    {task.map((elem, idx) => {

                        return <div key={idx} className="flex flex-col justify-between h-85 w-54 bg-white rounded-2xl text-black p-2">

                            <div id="detailNote" className="overflow-auto">
                                <h3 className="font-bold leading-tight text-xl">{elem.title}</h3>
                                <p className=" mt-2 leading-tight font-small text-gray-500" >{elem.details}</p>
                            </div>

                            <button onClick={()=>{
                                deleteNote(idx);
                            }} className="text-sm py-1 px-2 rounded-full bg-red-500 text-white cursor-pointer active:scale-x-95">Delete Note</button>


                        </div>

                    })}
                </div>
            </div>

        </div >
    );
}

export default App;
