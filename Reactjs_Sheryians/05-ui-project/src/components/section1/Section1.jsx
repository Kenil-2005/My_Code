import ImageContainer from "./RightSection";
import LeftText from "./LeftSection";
import MainContainer from "./MainContainer";
import Navbar from "./Navbar";

const Section1 = ({ users }) => {
    return (
        <>
            <div className="bg-white py-6 px-12 rounded-xl mx-18 my-12">
                <Navbar />
                <MainContainer users={users} />
            </div>
        </>
    )
}

export default Section1;