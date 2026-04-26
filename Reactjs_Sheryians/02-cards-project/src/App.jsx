import Card from "./components/Card";
import companyData from "./api/companyData.json";

const App = () => {

    return (
        <>
            <div className="parent">
                {companyData.map((curElem, idx) => {
                    return <div key={idx}>
                        <Card data={curElem} />
                    </div>
                })}
            </div>
        </>
    )
}

export default App;