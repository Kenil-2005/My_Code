import LeftSection from "./LeftSection";
import RightSection from "./RightSection";

const MainContainer = ({ users }) => {
    return (
        <>
            <div className="flex justify-between py-4">
                <LeftSection />
                <RightSection users={users} />
            </div>
        </>
    )
}


export default MainContainer;
