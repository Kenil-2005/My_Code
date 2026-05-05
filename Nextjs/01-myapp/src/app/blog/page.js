import Link from 'next/link'

const blog = async () => {

    const data = await fetch('https://jsonplaceholder.typicode.com/posts');
    const posts = await data.json();

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
    return (
        <>
            <h1 className='text-2xl mb-4'>Blog page</h1>

            <div className='flex flex-wrap justify-between items-center gap-4'>
                {
                    posts.map((post) => {
                        return (
                            <div key={post.id} className='mb-2 w-[24%] text-center'>
                                <Link href={`/blog/${post.id}`}>
                                    <h2>Title: {post.title}</h2>
                                </Link>
                                <p>{post.body}</p>
                            </div>
                        )
                    })
                }
            </div>
        </>
    )
}

export default blog;