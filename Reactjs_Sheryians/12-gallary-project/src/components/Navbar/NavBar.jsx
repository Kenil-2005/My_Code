const NavBar = () => {
    return (
        <nav className="bg-black text-white m-auto">
            <div className="w-9/10 flex justify-between items-center m-auto py-4">
                <h1 className="uppercase text-gray-400 text-3xl">
                    Gallary.
                </h1>
                <div className="flex gap-8 items-center text-lg ">
                    <h1>Home</h1>
                    <h1>About</h1>
                    <h1>Contact</h1>
                </div>
            </div>
        </nav>
    )
}

export default NavBar;