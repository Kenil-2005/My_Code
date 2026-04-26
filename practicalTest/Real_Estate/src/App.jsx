import HeroSection from "./components/HeroSection/HeroSection";
import Footer from "./components/Footer/Footer";
import NavBar from "./components/Navbar/NavBar";
import { useEffect, useState } from "react";
import NameDetail from "./components/Contact/NameDetail";
import EmailDetail from "./components/Contact/EmailDetail";
import Thankspage from "./components/Contact/ThanksPage";
import { MapPin } from "lucide-react";

const App = () => {

    const [userData, setUserData] = useState('');

    const getData = async () => {
        const response = await fetch('https://raw.githubusercontent.com/yashnextsavy/few-data-in-json/refs/heads/master/property-data.json');
        const apiData = await response.json();
        setUserData(apiData);
    }

    useEffect(() => {
        getData();
    }, [])


    const properties = userData.properties;
    // console.log(properties);



    const [step, setStep] = useState(0);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: ""
    });

    const contactDetail = () => {
        setStep(1);
        console.log(step)
    }

    const onClose = () => {
        setStep(0);
    }

    return (
        <div className="">
            <div>
                <NavBar contactDetail={contactDetail} />
                <HeroSection contactDetail={contactDetail} userData={userData} />

                {/* <div className='container grid sm:grid-cols-2 lg:grid-cols-3 gap-8'>
                    {properties?.map((currElem) => {
                        return (

                            <div
                                key={currElem.id}
                                className=' rounded w-full flex flex-col justify-between gap-6 py-10'
                            >
                                <div className="imageContainer">
                                    <img className='rounded border w-full h-full'  src={currElem.property_image} alt='' />
                                </div>
                                <div className='flex flex-col gap-6'>
                                    <div>
                                        <h1 className='font-medium '>{currElem.title}</h1>
                                        <div className='flex gap-4 items-center text-[#B0B0B0] font-normal'>
                                            <p>
                                                By {currElem.developer}
                                            </p>
                                        </div>
                                    </div>
                                    <div className='flex gap-4 items-center'>
                                        <MapPin />
                                        <p>{currElem.area}</p>
                                    </div>
                                    <div className='flex gap-y-4 gap-x-2 items-center font-bold text-xl'>
                                        <p>{currElem.currency}</p>
                                        <p>{currElem.property_price}</p>
                                    </div>
                                </div>
                                <button
                                    // onClick={contactDetail}
                                    className='w-full text-lg font-medium border-2 rounded-xl py-2 mx-auto '
                                >
                                    Contact
                                </button>
                            </div>

                        );
                    })}
                </div> */}
                <Footer />
            </div>
            {step !== 0 &&
                <div className="fixed inset-0 z-50 bg-black/50 flex justify-center items-center">
                    {step == 1 && (
                        <NameDetail
                            formData={formData}
                            setFormData={setFormData}
                            onNext={() => setStep(2)}
                            onClose={onClose}
                        />
                    )}

                    {step == 2 && (
                        <EmailDetail
                            formData={formData}
                            setFormData={setFormData}
                            onNext={() => setStep(3)}
                            onClose={onClose}
                            onBack={() => setStep(1)}
                        />
                    )}

                    {step == 3 && (
                        <Thankspage
                            onClose={onClose}
                        />
                    )}
                </div>
            }
        </div>
    )
}

export default App;
