import { useEffect, useState } from "react";
import { RiEqualizerLine } from "react-icons/ri";
import {
  addToCart,
  allCart,
  allWishlist,
  clearLSCD,
  removeCart,
  removeWishlist,
} from "./Function";
import { RiDeleteBin6Fill } from "react-icons/ri";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";

const Dashboard = () => {
  useEffect(() => {
    document.title = "Dashboard | Gadget Heaven";
  });
  const [wishlist, setWishlist] = useState([]);
  useEffect(() => {
    const wishData = allWishlist();
    setWishlist(wishData);
  }, []);

  const [cart, setCart] = useState([]);
  useEffect(() => {
    const cartData = allCart();
    setCart(cartData);
  }, []);

  const [handleBtn, setHandleBtn] = useState(false);
  const handleTogBtn = (data) => {
    if (data === "cart") {
      setHandleBtn(false);
    } else if (data === "wishlist") {
      setHandleBtn(true);
    }
  };

  const handleRemoveWish = (id) => {
    removeWishlist(id);
    const wishData = allWishlist();
    setWishlist(wishData);
  };

  const handleRemoveCart = (id) => {
    removeCart(id);
    const cartData = allCart();
    setCart(cartData);
  };

  const handleAddToCart = (id) => {
    const cartData = allCart();
    const isStockOut = id.availability === false;
    if (isStockOut) return toast.error("Product Not Available!");
    const isExist = cartData.find((data) => data.productId === id.productId);
    if (isExist) return toast.error("Already in your Cart!");

    addToCart(id);
    handleRemoveWish(id.productId);
    const wishData = allWishlist();
    setWishlist(wishData);
  };
  
  const [price, setPrice] = useState(0);
  useEffect(() => {
    const cartData = allCart();
    const price = cartData.map((data) => data.price);
    const sum = price.reduce((a, c) => a + c, 0);
    setPrice(sum);
  });
  
  const handleSort = () => {
    const cartData = allCart();
    const sortedCartData = [...cartData].sort((a, b) => b.price - a.price);
    setCart(sortedCartData);
  };
  const [lastPrice, setLastPrice] =useState(0)
  
  
  const handlePurchase = () => {
    clearLSCD()
    setLastPrice(price)
    document.getElementById("purchaseModal").showModal();
    const cartData = allCart();
    setCart(cartData);

}

  return (
    <div>
      <div className="bg-purple-600 text-center place-content-start py-8">
        <h3 className="text-3xl font-bold text-white mb-4">Dashboard</h3>
        <p className="mb-8 text-white px-8 lg:px-0 w-[48rem] mx-auto font-light text-base">
          Explore the latest gadgets that will take your experience to the next
          level. From smart devices to the coolest accessories, we have it all!
        </p>
        <div className="space-x-6">
          <button
            onClick={() => handleTogBtn("cart")}
            className={`${
              !handleBtn
                ? "bg-white font-extrabold text-purple-600"
                : "bg-purple-600 text-white font-medium"
            } btn rounded-r-full rounded-l-full px-14 text-lg`}
          >
            Cart
          </button>
          <button
            onClick={() => handleTogBtn("wishlist")}
            className={`${
              handleBtn
                ? "bg-white font-extrabold text-purple-600"
                : "bg-purple-600 text-white font-medium"
            } btn rounded-r-full rounded-l-full px-14 text-lg`}
          >
            Wishlist
          </button>
        </div>
      </div>

      <div className="pb-48">
        {/* ---Cart--- */}

        <div className={`${!handleBtn ? "" : "hidden"}`}>
          <div className="flex justify-between items-center px-8 lg:px-20 py-10">
            <div className="text-xl lg:text-2xl font-bold">Cart</div>
            <div className="flex flex-row items-center space-x-4">
              <h2 className="text-xl lg:text-2xl font-bold">
                Total Cost: ${price}
              </h2>
              <button
                onClick={() => handleSort()}
                className="btn rounded-r-full rounded-l-full px-6 text-lg font-semibold bg-white text-purple-600 border border-purple-600"
              >
                Sort by Price <RiEqualizerLine className="text-2xl rotate-90" />
              </button>
              <button
                onClick={() => handlePurchase()}
                className={`${price === 0 ? 'btn-disabled' : '' } btn rounded-r-full rounded-l-full px-6 text-lg font-medium bg-purple-600 text-white`}
              >
                Purchase
              </button>
            </div>
          </div>

          <div className="md:w-[40rem] lg:w-[60rem] mx-auto space-y-6">
            {cart.map((carts) => (
              <div className="w-full rounded-2xl bg-white flex space-x-8 p-8 items-center">
                <div className="w-1/5">
                  <img src={carts.productImage} className="w-36 rounded-xl" />
                </div>

                <div className="w-4/5 text-left space-y-3">
                  <div className="flex justify-between">
                    <h2 className="text-2xl font-semibold">
                      {carts.productTitle}
                    </h2>
                    <button onClick={() => handleRemoveCart(carts.productId)}>
                      <RiDeleteBin6Fill className="text-2xl text-red-500" />
                    </button>
                  </div>
                  <p className="text-base font-semibold">
                    Description:{" "}
                    <span className="font-normal opacity-60">
                      {carts.description}
                    </span>
                  </p>
                  <p className="text-lg font-semibold">Price: ${carts.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ---Wishlist--- */}

        <div className={`${handleBtn ? "" : "hidden"}`}>
          <div className="flex items-center px-8 lg:px-20 py-10">
            <h2 className="text-left text-2xl font-bold">Wishlist</h2>
          </div>

          <div className="w-[40rem] lg:w-[60rem] mx-auto space-y-6">
            {wishlist.map((wish) => (
              <div className="w-full rounded-2xl bg-white flex space-x-8 p-8 items-center">
                <div className="w-1/5">
                  <img src={wish.productImage} className="w-36 rounded-xl" />
                </div>

                <div className="w-4/5 text-left space-y-3">
                  <div className="flex justify-between">
                    <h2 className="text-2xl font-semibold">
                      {wish.productTitle}
                    </h2>
                    <button onClick={() => handleRemoveWish(wish.productId)}>
                      <RiDeleteBin6Fill className="text-2xl text-red-500" />
                    </button>
                  </div>
                  <p className="text-base font-semibold">
                    Description:{" "}
                    <span className="font-normal opacity-60">
                      {wish.description}
                    </span>
                  </p>
                  <p className="text-lg font-semibold">Price: ${wish.price}</p>
                  <button
                    onClick={() => handleAddToCart(wish)}
                    className="btn rounded-r-full rounded-l-full bg-purple-600 text-white font-medium text-lg"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div></div>

      <dialog id="purchaseModal" className="modal modal-bottom sm:modal-middle">
        <div className="modal-box place-content-center place-items-center space-y-5">
          <img className="w-16" src="../../assets/Group.png" />
          <h3 className="font-bold text-2xl">Payment Successfully</h3>
          <p className="text-center">
            Thanks for purchasing. <br /> Total: ${lastPrice}
          </p>
          <div className="modal-action">
            <form method="dialog">
              <Link 
              onClick={()=> setLastPrice(0)}                
                to="/"
                className="w-80 font-semibold rounded-r-full rounded-l-full bg-gray-200 btn"
              >
                Close
              </Link>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default Dashboard;
