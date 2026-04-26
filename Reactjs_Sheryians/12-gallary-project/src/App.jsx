import axios from "axios";
import NavBar from "./components/Navbar/NavBar";
import { useEffect, useState } from "react";
import Footer from "./components/Footer/Footer";
import HeroSection from "./components/HeroSection/HeroSection";

const App = () => {

    const [userData, setUserData] = useState('');

    

    const getData = async () => {
        const response = await axios.get('https://picsum.photos/v2/list?page=3&limit=90');
        setUserData(response.data);
        // console.log(response.data);
    }

    useEffect(() => {
        getData();
    }, [])

   


    return (
        <>
            <div className="min-h-screen ">
                <NavBar />
                <HeroSection userData={userData} />
                <Footer />
            </div >
        </>
    )
}

export default App;