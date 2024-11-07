import { useEffect } from "react";

const Statistics = () => {
    useEffect(() => {
        document.title ="Statistics | Gadget Heaven"
    })
    return (
        <div>
            <div className="bg-purple-600 text-center place-content-start py-8">
            <h3 className="text-3xl font-bold text-white mb-4">Statistics</h3>    
            <p className="mb-8 text-white px-8 lg:px-0 max-w-[48rem] mx-auto font-light text-base">Explore the latest gadgets that will take your experience to the next level. From smart 
                devices to the coolest accessories, we have it all!</p>
            </div>
        </div>
    );
};

export default Statistics;