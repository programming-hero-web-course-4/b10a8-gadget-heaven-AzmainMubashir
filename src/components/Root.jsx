import { Outlet, useLocation } from "react-router-dom";
import Footer from "./Footer";
import NavBar from "./NavBar";
import HomeNavBar from "./HomeNavBar";

const Root = () => {
    const location = useLocation();
    console.log(location)
    return (
        <div>
            { location.pathname === '/' ?
            <HomeNavBar></HomeNavBar> : <NavBar></NavBar>
            }
            <Outlet></Outlet>
            <Footer></Footer>
            
        </div>
    );
};

export default Root;