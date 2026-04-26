import { useEffect, useState } from 'react';
import data1 from '../../assets/api/property-list-data.json'
import { MapPin, RefreshCcw } from 'lucide-react';
import axios from 'axios'

const HeroMain = ({ developer, type, onReset, userData }) => {

    const [data, setData] = useState('');

    const getData = async () => {
        const response = await axios.get('https://raw.githubusercontent.com/yashnextsavy/few-data-in-json/refs/heads/master/property-data.json')
        // console.log(response.data);
        setData(response.data);
    }

    // const getData = async () => {
    //     const response = await fetch('https://raw.githubusercontent.com/yashnextsavy/few-data-in-json/refs/heads/master/property-data.json');
    //     const apiData = await response.json();
    //     setData(apiData);
    // }

    useEffect(() => {
        getData();
    }, [])

    const [propertie,setPropertie] =useState();
    const [currPage, setCurrPage] = useState(1);
    const [totalPage, setTotalPage] = useState();
    const [startIndex, setStartIndex] = useState();
    const [currData, setCurrData] = useState();


    let loadData = "";

    if (data.length > 0) {

        const itemPerPage = 9;

        // const properties = userData.properties;
        setProperties(data1.properties);

        const filteredData = properties.filter((item) => {
            return (
                (developer === "All" || item.developer === developer) &&
                (type === "All" || item.property_type === type)
            );
        });

        useEffect(() => {
            setCurrPage(1);
        }, [developer, type]);

        setTotalPage(Math.ceil(filteredData.length / itemPerPage))
        // console.log(totalPage);

        setStartIndex((currPage - 1) * itemPerPage);
        setCurrData(filteredData.slice(startIndex, startIndex + itemPerPage));

        loadData = "";
    }

    // console.log(data)

    // const [currPage, setCurrPage] = useState(1);
    // const itemPerPage = 9;

    // // const properties = userData.properties;
    // const properties = data1 .properties;

    // const filteredData = properties.filter((item) => {
    //     return (
    //         (developer === "All" || item.developer === developer) &&
    //         (type === "All" || item.property_type === type)
    //     );
    // });

    // console.log(developer, type);

    // useEffect(() => {
    //     setCurrPage(1);
    // }, [developer, type]);

    // const totalPage = Math.ceil(filteredData.length / itemPerPage)
    // // console.log(totalPage);

    // const startIndex = (currPage - 1) * itemPerPage;
    // const currData = filteredData.slice(startIndex, startIndex + itemPerPage);

    return (
        <>
            <div className='flex justify-between items-start  text-sm font-bold'>
                <h1>{filteredData.length} properties Found</h1>
                <button
                    onClick={onReset}
                    className='flex gap-2 items-center'
                >
                    <RefreshCcw size={16} />
                    Reset All Filters
                </button>
            </div>
            <div className='border my-8'></div>

            <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-8'>
                {currData.map((currElem) => {
                    return (

                        <div
                            key={currElem.id}
                            className='rounded w-full flex flex-col justify-between gap-6'
                        >
                            <img className='rounded border h-fit w-full' src={currElem.property_image} alt='' />
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
            </div>

            <div className="flex justify-center items-center gap-3 pt-16">
                {[...Array(totalPage)].map((_, idx) => {
                    const page = idx + 1;
                    return (

                        <div
                            key={page}
                            onClick={() => setCurrPage(page)}
                            className={`h-12 w-12 flex justify-center items-center rounded-full font-semibold transition 
                            ${page === currPage
                                    ? "bg-black text-white border-black"
                                    : "text-gray-400 border border-gray-400"
                                }`}
                        >
                            {page}
                        </div>
                    );
                })}
            </div>
        </>
    )
}

export default HeroMain;