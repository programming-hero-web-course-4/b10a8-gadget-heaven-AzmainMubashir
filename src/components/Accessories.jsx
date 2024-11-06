import { useContext } from "react";
import Gadget from "./Gadget";
import { DataContext } from "./Home";
const Accessories = () => {
    const data = useContext(DataContext);
    const accessoriesData = data.filter(accessories => accessories.category === 'Accessory')
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            {
                accessoriesData.map(gadget => <Gadget 
                    key={gadget.productId} 
                    gadget={gadget}>
                    </Gadget>)
            }
            
        </div>
    );
};

export default Accessories;