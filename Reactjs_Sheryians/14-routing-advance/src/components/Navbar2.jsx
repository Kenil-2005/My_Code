import { useNavigate } from 'react-router-dom'

const Navbar2 = () => {
    let navigate = useNavigate();

    return (
        <div className='flex justify-end gap-10 items-center bg-cyan-800 py-2 px-6'>
            <button
                onClick={() => {
                    navigate('/');
                }}
                className='py-2 px-4 text-md font-medium bg-amber-400 rounded-xl cursor-pointer active:scale-95'
            >
                Return to Home
            </button>
            <button
                onClick={() => {
                    navigate(-1);
                }}
                className='py-2 px-4 text-md font-medium bg-amber-400 rounded-xl cursor-pointer active:scale-95'
            >
                Back
            </button>
        </div>
    );
};

export default Navbar2;