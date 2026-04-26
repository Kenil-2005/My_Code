import Navbar2 from './navbar2';

const Navbar = () => {
    return (
        <div className='text-white flex items-center justify-between py-4 px-14 bg-cyan-900'>
            <h1 className='text-3xl font-bold'>Kenil</h1>
            <Navbar2 />
        </div>
    );
};

export default Navbar;