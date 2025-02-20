import { useContext } from "react";
import Gadget from "./Gadget";
import { DataContext } from "./Home";

const Gadgets = () => {
    
    const data = useContext(DataContext);

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            {
                data.map(gadget => <Gadget 
                    key={gadget.productId} 
                    gadget={gadget}>
                    </Gadget>)
            }
            
        </div>
    );
};

export default Gadgets;