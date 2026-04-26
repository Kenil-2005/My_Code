import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import Product from "./pages/Product";
import Women from "./pages/Women";
import Men from "./pages/men";
import Course from "./pages/Course";
import CourseDetail from "./pages/CourseDetails";
import Navbar2 from "./components/Navbar2";

const App = () => {
    return (
        <>
            <div className="bg-black text-white h-screen flex flex-col justify-between">
                <Navbar />
                <Navbar2 />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/course" element={<Course />} />
                    <Route path="/course/:courseId" element={<CourseDetail />} />


                    {/* **This is nested routing
                    ** in this the parent page is also visible if you go to the chile page*/}
                    {/* <Route path="/product" element={<Product />} >
                        <Route path="men" element={<Men />} />
                        <Route path="women" element={<Women />} />
                    </Route> */}

                    <Route path="/product" element={<Product />} />
                    <Route path="/product/men" element={<Men />} />
                    <Route path="/product/women" element={<Women />} />

                    <Route path="*" element={<NotFound />} />
                </Routes>
                <Footer />
            </div>
        </>
    )
}

export default App;
