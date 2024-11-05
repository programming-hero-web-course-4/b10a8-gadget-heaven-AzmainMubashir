import Gadgets from "./Gadgets";

const Home = () => {
    return (
        <div className="w-11/12 mx-auto bg-[#F7F7F7] mb-20">
            <h2 className="text-center text-[2.5rem] font-bold mb-12">Explore Cutting-Edge Gadgets</h2>
            <div className="flex flex-row md:space-x-6">
                <div className="w-1/4 lg:w-1/5 h-[24rem] md:p-3 flex flex-col justify-center items-center space-y-6 bg-white rounded-xl">
                    <button className="w-full lg:w-2/3 lg:pl-7 btn rounded-l-full justify-start rounded-r-full bg-purple-600 text-white">All Product</button>
                    <button className="w-full lg:w-2/3 lg:pl-7 btn rounded-l-full justify-start rounded-r-full text-opacity-60">Laptop</button>
                    <button className="w-full lg:w-2/3 lg:pl-7 btn rounded-l-full justify-start rounded-r-full text-opacity-60">Phone</button>
                    <button className="w-full lg:w-2/3 lg:pl-7 btn rounded-l-full justify-start rounded-r-full text-opacity-60">Smart Watch</button>
                    <button className="w-full lg:w-2/3 lg:pl-7 btn rounded-l-full justify-start rounded-r-full text-opacity-60">Accessories</button>
                </div>
                <div className="w-3/4 lg:w-4/5">
                <Gadgets></Gadgets>
                </div>
            </div>
        </div>
    );
};

export default Home;