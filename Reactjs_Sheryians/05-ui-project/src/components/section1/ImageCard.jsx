import ImageCardContain from "./imageCardContain"

const ImageCard = ({ data }) => {
    return (
        <>
            <div className="w-70 h-150 rounded-3xl bg-cover shrink-0 overflow-hidden" style={{ backgroundImage: `url(${data.img})` }} >
                <ImageCardContain data={data} />
            </div>
        </>
    )
}

export default ImageCard