import { useParams } from "react-router-dom";

const CourseDetail = () => {
    // This give parameter that are passed inside URL 
    const params = useParams();

    return (
        <>
            <div className="h-full flex justify-center items-center text-8xl">
                <h1>{params.courseId} Course Detail</h1>
            </div>
        </>
    )
}

export default CourseDetail;