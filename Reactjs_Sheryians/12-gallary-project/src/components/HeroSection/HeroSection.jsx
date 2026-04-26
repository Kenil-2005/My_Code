import { useState } from "react";

const HeroSection = ({ userData }) => {
    console.log(userData)

    const [currPage, setCurrPage] = useState(1);
    const totalItem = userData.length;
    const itemPerPage = 12;
    const totalPage = Math.ceil(totalItem / itemPerPage)

    const statIndex = (currPage - 1) * itemPerPage;
    const currData = userData.slice(statIndex, statIndex + itemPerPage)

    let loadData = "";
    let loadPage = '';

    if (currData.length > 0) {
        loadData = currData.map((currElem, idx) => {
            return <div key={idx} className="h-100 w-80">
                <div className="h-80 w-full rounded-2xl overflow-hidden">
                    <img className="h-full w-full object-cover" src={currElem.download_url} />
                </div>
                <h1 className="text-xl font-bold text-center">{currElem.author}</h1>
            </div>
        })
    }

    if (currData.length > 0) {
        loadPage = [...Array(totalPage)].map((_, idx) => {
            const page = idx + 1;
            return (
                <div
                    onClick={() => { setCurrPage(page) }}
                    key={page}
                    className={`h-12 w-12 flex justify-center items-center  text-2xl font-medium rounded-full border-2 transition ${(page === currPage)
                        ? "bg-black text-white"
                        : "bg-white text-gray-500 border-gray-500"
                        }`}
                >
                    {page}
                </div >
            )
        })
    }

    return (
        <>
            <div className="w-9/10  m-auto">
                <div className="flex justify-start gap-7 flex-wrap  py-12">
                    {loadData}
                </div>
                <div className="flex justify-center items-center gap-5 pb-12">
                    {loadPage}
                </div>
            </div>
        </>
    )
}

export default HeroSection;