import React from 'react'

const page = async ({ params }) => {

    const { id } = await params;

    return (
        <div>Sigle page article: {id}</div>
    )
}

export default page