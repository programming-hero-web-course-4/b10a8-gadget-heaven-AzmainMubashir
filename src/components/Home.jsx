import { createContext, useEffect, useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
export const DataContext = createContext([]);

const Home = () => {
  useEffect(() => {
    document.title = "Home | Gadget Heaven";
  });

  const [gadgets, setGadgets] = useState([]);
  useEffect(() => {
    fetch("/gadgetData.json")
      .then((res) => res.json())
      .then((data) => setGadgets(data));
  }, []);

  return (
    <div className="px-10 mx-auto bg-[#F7F7F7] pb-20">
      <h2 className="text-center text-[2.5rem] font-bold mb-12">
        Explore Cutting-Edge Gadgets
      </h2>
      <div className="flex flex-row md:space-x-6">
        <div className="w-1/4 lg:w-1/5 h-[30rem] md:p-3 flex flex-col justify-center items-center space-y-6 bg-white rounded-xl">
          <NavLink
            to="/products/all"
            className={({ isActive }) =>
              isActive
                ? "w-full lg:w-2/3 lg:pl-7 btn rounded-l-full justify-start rounded-r-full bg-purple-600 font-bold text-white"
                : " w-full lg:w-2/3 lg:pl-7 btn rounded-l-full justify-start rounded-r-full text-opacity-60"
            }
          >
            All Product
          </NavLink>
          <NavLink
            to="/products/laptop"
            className={({ isActive }) =>
              isActive
                ? "w-full lg:w-2/3 lg:pl-7 btn rounded-l-full justify-start rounded-r-full bg-purple-600 font-bold text-white"
                : " w-full lg:w-2/3 lg:pl-7 btn rounded-l-full justify-start rounded-r-full text-opacity-60"
            }
          >
            Laptop
          </NavLink>
          <NavLink
            to="/products/phone"
            className={({ isActive }) =>
              isActive
                ? "w-full lg:w-2/3 lg:pl-7 btn rounded-l-full justify-start rounded-r-full bg-purple-600 font-bold text-white"
                : " w-full lg:w-2/3 lg:pl-7 btn rounded-l-full justify-start rounded-r-full text-opacity-60"
            }
          >
            Phone
          </NavLink>
          <NavLink
            to="/products/smartwatch"
            className={({ isActive }) =>
              isActive
                ? "w-full lg:w-2/3 lg:pl-7 btn rounded-l-full justify-start rounded-r-full bg-purple-600 font-bold text-white"
                : " w-full lg:w-2/3 lg:pl-7 btn rounded-l-full justify-start rounded-r-full text-opacity-60"
            }
          >
            Smart Watch
          </NavLink>
          <NavLink
            to="/products/accessories"
            className={({ isActive }) =>
              isActive
                ? "w-full lg:w-2/3 lg:pl-7 btn rounded-l-full justify-start rounded-r-full bg-purple-600 font-bold text-white"
                : " w-full lg:w-2/3 lg:pl-7 btn rounded-l-full justify-start rounded-r-full text-opacity-60"
            }
          >
            Accessories
          </NavLink>
          <NavLink
            to="/products/cable"
            className={({ isActive }) =>
              isActive
                ? "w-full lg:w-2/3 lg:pl-7 btn rounded-l-full justify-start rounded-r-full bg-purple-600 font-bold text-white"
                : " w-full lg:w-2/3 lg:pl-7 btn rounded-l-full justify-start rounded-r-full text-opacity-60"
            }
          >
            Cable
          </NavLink>
        </div>
        <div className="w-3/4 lg:w-4/5">
          <DataContext.Provider value={gadgets}>
            <Outlet></Outlet>
          </DataContext.Provider>
        </div>
      </div>
    </div>
  );
};

export default Home;
