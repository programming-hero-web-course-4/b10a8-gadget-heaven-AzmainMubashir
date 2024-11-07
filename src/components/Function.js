import toast from "react-hot-toast"

const allWishlist = () => {
    const all = localStorage.getItem('wishData')
    if (all) {
        const wishData = JSON.parse(all)
        return wishData
    }
    else {
        return []
    }
}

const addToWishlist = (wishListData) => {
    const wishData = allWishlist();
    const isExist = wishData.find(data => data.productId === wishListData.productId)
    if (isExist) return toast.error('Already in your Wishlist!');
    wishData.push(wishListData)
    localStorage.setItem('wishData', JSON.stringify(wishData))
    toast.success('Product added to Wishlist!');
}

const removeWishlist = (id) => {
    const wishData = allWishlist();
    const remaining = wishData.filter(wish => wish.productId != id)
    localStorage.setItem('wishData', JSON.stringify(remaining))
    toast.success('Product removed from Wishlist!');
}

const allCart = () => {
    const all = localStorage.getItem('cartData')
    if (all) {
        const cartData = JSON.parse(all)
        return cartData
    }
    else {
        return []
    }
}

const addToCart = (cart) => {
    const cartData = allCart();
    const isStockOut = cart.availability === false;
    if (isStockOut) return toast.error('Product Not Available!');
    const isExist = cartData.find(data => data.productId === cart.productId)
    if (isExist) return toast.error('Already in your Cart!');
    cartData.push(cart)
    localStorage.setItem('cartData', JSON.stringify(cartData))
    toast.success('Product added to Cart!');
}

const removeCart = (id) => {
    const cartData = allCart();
    const remaining = cartData.filter(cart => cart.productId != id)
    localStorage.setItem('cartData', JSON.stringify(remaining))
    toast.success('Product removed from Cart!');
}

const updatePrice = () => {
    const cartData = allCart();
    const price = cartData.map(data=> data.price);
    const sum = price.reduce((a,c) => a+c ,0)
    return sum; 
    console.log(cartData)
    console.log(price)
    console.log(sum)
}

export { addToWishlist, allWishlist, removeWishlist,addToCart,allCart,removeCart,updatePrice }