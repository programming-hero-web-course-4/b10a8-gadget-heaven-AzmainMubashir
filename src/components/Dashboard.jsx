import { useEffect } from "react";

const Dashboard = () => {
    useEffect(()=> {
        document.title ="Dashboard | Gadget Heaven"
    })
    return (
        <div>
            <div className="bg-purple-600 text-center place-content-start py-8">
            <h3 className="text-3xl font-bold text-white mb-4">Dashboard</h3>    
            <p className="mb-8 text-white max-w-[48rem] mx-auto font-light text-base">Explore the latest gadgets that will take your experience to the next level. From smart 
                devices to the coolest accessories, we have it all!</p>
                <div className="space-x-6">
                <button className="btn rounded-r-full rounded-l-full px-14 text-lg text-white font-medium bg-purple-600 hover:bg-white hover:text-purple-600 hover:font-extrabold">Cart</button>
                <button className="btn rounded-r-full rounded-l-full px-14 text-lg bg-white font-extrabold text-purple-600">Wishlist</button>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;