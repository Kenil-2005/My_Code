import Section1 from "./components/section1/Section1";
import image1 from './assets/image1.png'
import image2 from './assets/image2.png'
import image3 from './assets/image3.png'


const App = () => {

    const users = [
        {
            index:'1',
            img: image1,
            intro: 'Prime customers that have access to bank credit and are satisfield with the current product',
            tag: 'Satisfied',
            color:'royalblue'
        },
        {
            index:'2',
            img: image2,
            intro: 'Prime customers that have access to bank credit and are not satisfield with the current service',
            tag: 'Underserved',
            color:'lightseagreen'
        },
        {
            index:'3',
            img: image3,
            intro: 'Customers from near-prime and sub-prime segments with no acces to bank credit',
            tag: 'Underbanking',
            color:'pink'
        },
    ]

    return (
        <>
            <div className="p-8 bg-red-900">
                <Section1 users={users} />
            </div>
        </>
    )
}

export default App;