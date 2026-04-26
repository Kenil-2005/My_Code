const App = () => {
    const pageScrolling = (val) => {
        console.log("speed: ", val)
        if (val > 0) {
            console.log("seedha scrolling...");
        } else {
            console.log("ulta scrolling...");
        }
    }

    return (
        <div onWheel={(elem) => {
            pageScrolling(elem.deltaY);
        }}>
            <div id="page1">page1</div>
            <div id="page2">page2</div>
            <div id="page3">page3</div>
        </div>
    )
}


export default App;