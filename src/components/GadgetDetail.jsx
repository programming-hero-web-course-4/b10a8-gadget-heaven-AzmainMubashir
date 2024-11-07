import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import { TbShoppingCart } from "react-icons/tb";
import { FaRegHeart } from "react-icons/fa";
import ReactStars from "react-rating-stars-component";
import { addToCart, addToWishlist, allWishlist } from "./Function";

const GadgetDetail = () => {
    useEffect(() => {
        document.title = "Product Details | Gadget Heaven"
    })
    const { productId } = useParams();
    const Id = parseInt(productId);
    const data = useLoaderData();
    const gadget = data.find(gadgets => gadgets.productId === Id)
    const { productImage, productTitle, price, Specification, availability, rating, description } = gadget;
    const gadgetRating = {
        size: 30,
        value: `${Math.round(rating)}`,
        edit: false
    };

    const [disable, setDisable] = useState(false)

    const handleAddToWishlist = (data) => {
        addToWishlist(data)
        const wishData = allWishlist();
        const isExist = wishData.find(wData => wData.productId === data.productId)
        if (isExist) {
            setDisable(true)
        } else {
            setDisable(false)
        }
    }

    useEffect(() => {
        const wishData = allWishlist();
        const isExist = wishData.find(wData => wData.productId === gadget.productId)
        if (isExist) {
            setDisable(true)
        } else {
            setDisable(false)
        }
    }, [gadget])

    return (
        <div className='pb-96'>
            <div className="h-96 bg-purple-600 text-center place-content-start py-8">
                <h3 className="text-3xl font-bold text-white mb-4">Product Details</h3>
                <p className="pb-8 text-white w-[30rem] lg:w-[48rem] mx-auto font-light text-base">Explore the latest gadgets that will take your experience to the next level. From smart
                    devices to the coolest accessories, we have it all!</p>

                <div className="relative md:w-[45rem] md:h-[30rem] mx-auto lg:w-[70rem] lg:h-[35rem] flex flex-col md:flex-row justify-between items-center bg-white p-8 rounded-3xl">
                    <div className='w-1/3'><img
                        src={productImage}
                        alt={productTitle}
                        className='w-96' /></div>

                    <div className='w-2/3 text-left'>
                        <h3 className='text-2xl lg:text-3xl font-semibold'>{productTitle}</h3>
                        <p className='pt-2 pb-2 text-lg lg:text-xl font-semibold'>Price: ${price}</p>
                        <div className={`badge bg-opacity-10 text-sm font-medium badge-outline ${availability ? 'border-[#309C08] text-[#309C08] bg-[#309C08]' : 'border-red-700 text-red-700 bg-red-700'}`}>{availability ? 'In Stock' : 'Stock Out'}</div>
                        <p className='text-base lg:text-lg opacity-60 py-3'>{description}</p>
                        <div>
                            <p className='text-base lg:text-lg font-bold'>Specification:</p>
                            <ul className='list-disc opacity-60 mt-2 ml-5'>
                                {
                                    Specification.map((spec, idx) => <li key={idx}>{spec}</li>)
                                }
                            </ul>
                        </div>
                        <div>
                            <p className='pt-2 text-base lg:text-lg font-bold'>Rating</p>
                            <div className='flex items-center space-x-4'>
                                <ReactStars {...gadgetRating} />
                                <div className="badge badge-ghost">{rating}</div>
                            </div>
                        </div>
                        <div className='flex items-center mt-2 space-x-4'>
                            <button onClick={() => addToCart(gadget)} className='btn px-3 rounded-r-full rounded-l-full text-white font-bold text-base lg:text-lg bg-purple-600'>Add to Cart <TbShoppingCart className='text-xl lg:text-2xl' /></button>
                            <button onClick={() => handleAddToWishlist(gadget)} className={`${disable ? 'btn-disabled' : ''} btn btn-ghost border border-black border-opacity-15 btn-circle`}><FaRegHeart className='text-lg' /></button>
                        </div>

                    </div>
                </div>

            </div>
        </div>
    );
};

export default GadgetDetail;