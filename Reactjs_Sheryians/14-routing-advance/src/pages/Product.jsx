import { Link, Outlet } from "react-router-dom";

const Product = () => {
    return (
        <>
            <div className="flex justify-center gap-10 items-center py-4 px-15 text-2xl">
                <Link to='/product/men'>Men</Link>
                <Link to='/product/women'>Women</Link>
            </div>
            <div className="h-full flex justify-center items-center text-8xl">
                <h1>Product Page</h1>
            </div>
            <Outlet />
        </>
    )
}

export default Product;