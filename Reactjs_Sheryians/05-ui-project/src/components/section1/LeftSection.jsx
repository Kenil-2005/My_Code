import { MoveUpRight } from "lucide-react"
import HeroText from "./HeroText";

const LeftSection = () => {
    return (
        <>
            <div className="flex flex-col justify-between w-2/10">
                <HeroText />
                <MoveUpRight />
            </div>
        </>

    )
}

export default LeftSection;