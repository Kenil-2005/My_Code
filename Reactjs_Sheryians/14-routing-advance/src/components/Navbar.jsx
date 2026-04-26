import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className="flex justify-between items-center bg-cyan-900 text-white px-16 py-4">
        <h3 className="text-3xl font-bold"><Link to='/'>Kenil</Link></h3>
        <div className="flex justify-between items-center gap-10 text-lg">
          <Link to='/'>Home</Link>
          <Link to='/about'>About</Link>
          <Link to='/course'>Course</Link>
          <Link to='/product'>Product</Link>
        </div>
      </div>
    </>
  )
}

export default Navbar;