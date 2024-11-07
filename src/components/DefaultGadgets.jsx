import { useContext } from "react";
import Gadget from "./Gadget";
import { DataContext } from "./Home";

const DefaultGadgets = () => {
    const data = useContext(DataContext);
    const defaultData = data.slice(0 - 6)
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            
        {
            defaultData.map(gadget => <Gadget 
                key={gadget.productId} 
                gadget={gadget}>
                </Gadget>)
        }
        
    </div>
    );
};

export default DefaultGadgets;