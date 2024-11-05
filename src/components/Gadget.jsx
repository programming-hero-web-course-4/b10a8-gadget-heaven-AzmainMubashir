const Gadget = ({gadget}) => {

    const {productTitle, productImage, price, description} = gadget;

    return (
    <div className="card bg-base-100 border">
    <figure className="p-5">
        <img
        src={productImage}
        alt="Shoes"
        className="w-48 h-48 rounded-xl" />
    </figure>
    <div className="card-body text-center">
        <h2 className="card-title">{productTitle}</h2>
        <p className="text-left">{price}</p>
        <div className="card-actions">
        <button className="btn font-semibold rounded-l-full  outline outline-1 outline-fuchsia-600 rounded-r-full bg-white text-purple-600 hover:bg-purple-600 hover:text-white">View Details</button>
        </div>
    </div>
    </div>
    );
};
export default Gadget;