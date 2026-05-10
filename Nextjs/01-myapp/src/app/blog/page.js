import Link from 'next/link'
import Post from './components/Post';
import { Suspense } from 'react';

const blog = async () => {
    // const posts = [
    //     {
    //         id: 1,
    //         title: 'post-1',
    //         body: 'post-1 body'
    //     },
    //     {
    //         id: 2,
    //         title: 'post-2',
    //         body: 'post-2 body'
    //     },
    //     {
    //         id: 3,
    //         title: 'post-3',
    //         body: 'post-3 body'
    //     }
    // ]

    // Server side API
    // const data = await fetch('https://jsonplaceholder.typicode.com/posts');
    // const posts = await data.json();

    // Client Side Api
    const promise = fetch('https://jsonplaceholder.typicode.com/posts').then((res) => res.json());

    return (
        <>
            <h1 className='text-2xl mt-4 mb-8 text-center'>Blog page</h1>


            {/* Server side Api use  */}
            {/* <div className='flex flex-wrap justify-between items-center gap-4'>
                {
                    posts.map((post) => {
                        return (
                            <div key={post.id} className='h-91 aspect-square border-2 p-4 border-white rounded-2xl'>
                                <p className='text-2xl font-bold text-yellow-400 mb-2'>{post.id}</p>
                                <Link href={`/blog/${post.id}`}>
                                    <h2 className='text-red-700 mb-2'><span className='text-green-600'>Title: </span>{post.title}</h2>
                                </Link>
                                <p className='text-justify'><span className='text-green-600'>Body: </span>{post.body}</p>
                            </div>
                        )
                    })
                }
            </div> */}

            {/* Client Side Api use  */}
            <Suspense fallback={<p>Loading...</p>}>
                <Post promise={promise} />
            </Suspense>
        </>
    )
}

export default blog;