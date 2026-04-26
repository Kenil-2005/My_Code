import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <>
            <div className="flex justify-between items-center bg-cyan-900 text-white px-16 py-6">
                <h3 className="text-3xl"><Link to='/'>Kenil</Link></h3>
                <div className="flex justify-between items-center gap-10 text-lg">
                    {/* <a href="/">Home</a>
                    <a href="/about">About</a>
                    <a href="/contact">Contact Us</a> */}
                    <Link to='/'>Home</Link>
                    <Link to='/about'>About</Link>
                    <Link to='/contact'>Contact Us</Link>
                </div>
            </div>
        </>
    )
}

export default Navbar;