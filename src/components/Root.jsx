import { Outlet, useLocation } from "react-router-dom";
import Footer from "./Footer";
import NavBar from "./NavBar";
import HomeNavBar from "./HomeNavBar";
import toast, { Toaster } from "react-hot-toast";

const Root = () => {
  const location = useLocation();
  console.log(location);

  return (
    <div>
      {location.pathname.includes("dashboard") ||
      location.pathname.includes("blog") ||
      location.pathname.includes("statistics") ||
      location.pathname.includes("gadget") ? (
        <NavBar></NavBar>
      ) : (
        <HomeNavBar></HomeNavBar>
      )}
      <Outlet></Outlet>
      <Footer></Footer>
      <Toaster />
    </div>
  );
};

export default Root;
