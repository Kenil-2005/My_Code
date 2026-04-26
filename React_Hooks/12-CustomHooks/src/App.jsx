import React from 'react'
import { useEffect } from 'react';
import useFetch from './hooks/useFetch';

const App = () => {
    // const [data, setData] = useState([]);

    const fetchPost = () => fetch("https://jsonplaceholder.typicode.com/posts")
        .then((res) => res.json());

    const { data, isErrors, errorMsg, loading, fn } = useFetch(fetchPost);

    // useEffect(() => {
    //     fetch("https://jsonplaceholder.typicode.com/posts")
    //         .then((res) => res.json())
    //         .then((data) => setData(data));
    // }, []);

    useEffect(() => {
        fn();
    }, [fn])

    return (
        <div>
            <h1>Posts</h1>
            {loading ?
                "Loading..." :
                (<ul>
                    {data?.map((post) => (
                        <li key={post.id}>{post.title}</li>
                    ))}
                </ul>)
            }
            {isErrors ? <p>{errorMsg}</p> : ""}
        </div >
    )
}

export default App
