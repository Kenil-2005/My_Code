import Card from './components/Card'

function App() {
    return (
        <>
            <div className="parent">
                <Card user='Neel' age={20} image='images/image1.png' />
                <Card user='Dhruv' age={21} image='images/image2.png' />
                <Card user='Dhaval' age={24} image='images/image3.png' />
                <Card user='Fenil' age={30} image='images/image4.png' />
                <Card user='Raj' age={15} image='images/image5.png' />
            </div>
        </>
    )
}

export default App
