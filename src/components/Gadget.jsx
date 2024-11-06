import { Link } from "react-router-dom";

const Gadget = ({gadget}) => {

    const {productId, productTitle, productImage, price} = gadget;

    return (
    <div className="card bg-base-100 border">
    <figure className="p-5">
        <img
        src={productImage}
        alt="Shoes"
        className="w-48 h-48 rounded-xl" />
    </figure>
    <div className="card-body text-center">
        <h2 className="text-left text-2xl font-semibold">{productTitle}</h2>
        <p className="text-left">Price: ${price}</p>
        <div className="card-actions">
        <Link to={`/gadget/${productId}`} className="btn font-semibold rounded-l-full  outline outline-1 outline-fuchsia-600 rounded-r-full bg-white text-purple-600 hover:bg-purple-600 hover:text-white">View Details</Link>
        </div>
    </div>
    </div>
    );
};
export default Gadget;