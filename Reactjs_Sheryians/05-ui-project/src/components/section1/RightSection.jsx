import ImageCard from "./ImageCard";

const RightSection = ({ users }) => {
    return (
        <>
            <div className="h-full flex justify-center flex-nowrap gap-5 w-7/10">
                {users.map((curElem, idx) => {
                    return (
                        <ImageCard key={idx} data={curElem} />
                    )
                })}
            </div>
        </>
    )
}

export default RightSection;