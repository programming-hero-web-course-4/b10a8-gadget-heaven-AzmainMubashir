import { useContext } from "react";
import Gadget from "./Gadget";
import { DataContext } from "./Home";
const Laptop = () => {
    const data = useContext(DataContext);
    const laptopData = data.filter(laptops => laptops.category === 'Laptop')
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            {
                laptopData.map(gadget => <Gadget 
                    key={gadget.productId} 
                    gadget={gadget}>
                    </Gadget>)
            }
            
        </div>
    );
};

export default Laptop;