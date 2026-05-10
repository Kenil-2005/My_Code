'use client'

import Link from "next/link";
import { use } from "react";


const Post = ({ promise }) => {

    console.log(promise);

    const posts = use(promise);

    return (
        <>
            <div className='flex flex-wrap justify-between items-center gap-4'>
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
            </div>
        </>
    )
}

export default Post