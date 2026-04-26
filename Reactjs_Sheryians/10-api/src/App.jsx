import axios from 'axios'

const App = () => {

    // // Using fetch technique for calling API
    // const getData = async () => {
    //     const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
    //     const data = await response.json();
    //     console.log(response)
    //     console.log(data)
    // }

    // // Using axios thired party library for calling API 
    // const getData = async () => {
    //     const response = await axios.get('https://jsonplaceholder.typicode.com/todos/1');
    //     console.log(response);
    //     console.log(response.data);
    // }

    const getData = async () => {
        const response = await axios.get('https://picsum.photos/v2/list');
        // console.log(response);
        console.log(response.data);
    }

    return (
        <>
            <button onClick={getData}>Get Data</button>
        </>
    )
}

export default App
