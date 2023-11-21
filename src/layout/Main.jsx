import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../pages/Home/Shared/Navbar/Navbar";
import Footer from "../pages/Home/Shared/Footer/Footer";

const Main = () => {
    const location = useLocation()
    // console.log(location)
    const noHeaderFooter = location.pathname.includes('login') || location.pathname.includes('register')
    return (
        <div>
            {noHeaderFooter || <Navbar />}
            <Outlet />
            {noHeaderFooter || <Footer />}

        </div>
    );
};

export default Main;