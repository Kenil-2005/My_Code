const ImageCardContain = ({ data }) => {

    const { index, img, intro, tag, color } = data;

    return (
        <>
            <div className="h-full p-8 flex flex-col justify-between">
                <div>
                    <span className=" rounded-full bg-white text-black text-2xl text-center px-4 py-2">{index}</span>
                </div>
                <div className="text-white">
                    <p className="pb-14 text-lg">
                        {intro}
                    </p>
                    <div className="flex items-center justify-between">
                        <button style={{ backgroundColor: color }} className="bg-blue-600 py-2 px-4 rounded-full text-lg">{tag}</button>
                        <button style={{ backgroundColor: color }} className="py-2 px-4 rounded-full text-lg">&rarr;</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ImageCardContain;