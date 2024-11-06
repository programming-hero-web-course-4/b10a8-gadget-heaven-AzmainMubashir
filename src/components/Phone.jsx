import { useContext } from "react";
import Gadget from "./Gadget";
import { DataContext } from "./Home";
const Phone = () => {
    const data = useContext(DataContext);
    const phoneData = data.filter(phones => phones.category === 'Phone')
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            {
                phoneData.map(gadget => <Gadget 
                    key={gadget.productId} 
                    gadget={gadget}>
                    </Gadget>)
            }
            
        </div>
    );
};

export default Phone;