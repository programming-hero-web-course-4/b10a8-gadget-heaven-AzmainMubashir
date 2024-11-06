import { createContext, useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";
export const DataContext = createContext([]);

const Home = () => {
    useEffect(()=> {
        document.title ="Home | Gadget Heaven"
    })

    const [gadgets, setGadgets] = useState([]);
    useEffect(() => {
        fetch('/gadgetData.json')
        .then(res => res.json())
        .then(data => setGadgets(data))},[])

    return (
        <div className="px-10 mx-auto bg-[#F7F7F7] pb-20">
            <h2 className="text-center text-[2.5rem] font-bold mb-12">Explore Cutting-Edge Gadgets</h2>
            <div className="flex flex-row md:space-x-6">
                <div className="w-1/4 lg:w-1/5 h-[30rem] md:p-3 flex flex-col justify-center items-center space-y-6 bg-white rounded-xl">
                    <Link to="/" className="w-full lg:w-2/3 lg:pl-7 btn rounded-l-full justify-start rounded-r-full bg-purple-600 text-white">All Product</Link>
                    <Link to="/products/laptop" className="w-full lg:w-2/3 lg:pl-7 btn rounded-l-full justify-start rounded-r-full text-opacity-60">Laptop</Link>
                    <Link to="/products/phone" className="w-full lg:w-2/3 lg:pl-7 btn rounded-l-full justify-start rounded-r-full text-opacity-60">Phone</Link>
                    <Link to="/products/smartwatch" className="w-full lg:w-2/3 lg:pl-7 btn rounded-l-full justify-start rounded-r-full text-opacity-60">Smart Watch</Link>
                    <Link to="/products/accessories" className="w-full lg:w-2/3 lg:pl-7 btn rounded-l-full justify-start rounded-r-full text-opacity-60">Accessories</Link>
                    <Link to="/products/cable" className="w-full lg:w-2/3 lg:pl-7 btn rounded-l-full justify-start rounded-r-full text-opacity-60">Cable</Link>
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