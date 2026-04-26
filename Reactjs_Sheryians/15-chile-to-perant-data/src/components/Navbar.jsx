const Navbar = ({ theme, setTheme }) => {

    const buttonClicked = () => {
        if (theme == 'Light') {
            setTheme('Dark')
        } else {
            setTheme('Light');
        }
    }

    return (
        <div>
            <button
                onClick={buttonClicked}
                className="bg-blue-600 py-4 px-6 rounded-2xl font-medium"
            >
                Change Theme
            </button>
        </div>
    );
};

export default Navbar;