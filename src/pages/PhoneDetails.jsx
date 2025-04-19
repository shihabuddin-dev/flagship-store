import React, { useContext } from 'react';
import { useLoaderData, useParams } from 'react-router';
import Button from '../components/ui/Button';
import { MdBookmarkAdd, MdOutlineShoppingCartCheckout } from "react-icons/md";
import { addFavorite, addToCart, getCart } from '../utils';
import { CartContext } from '../provider/Context';

const PhoneDetails = () => {
    const { setCart } = useContext(CartContext)
    const data = useLoaderData()
    const { id } = useParams()
    const singlePhone = data.find(phone => phone.id === parseInt(id))
    const { name, image, brand, model, description, storage, camera_info } = singlePhone || {}
    const handleFavorite = () => {
        addFavorite(singlePhone)
    }
    const handleCart= () => {
        //save to local storage
        addToCart(singlePhone)
        // update card to local storage
        setCart(getCart())
    }
    return (
        <div className='w-full py-12'>
            <img src={image} alt="" className='w-full mx-auto md:w-auto mb-8' />
            {/* title and buttons  */}
            <div className="flex justify-between items-center">
                <h2 className='text-6xl font-thin mb-8'>{name}</h2>
                <div className='space-x-4'>
                    <Button onClick={handleCart} label={<MdOutlineShoppingCartCheckout />} />
                    <Button onClick={handleFavorite} label={<MdBookmarkAdd />} />
                </div>
            </div>
            {/* details  */}
            <div className='space-y-2'>
                <h3 className='text-4xl font-thin'>Details:</h3>
                <p className='text-lg md:text-xl '><span className='font-semibold'>Brand:</span> {brand}</p>
                <p className='text-lg md:text-xl '><span className='font-semibold'>Model:</span> {model}</p>
                <p className='text-lg md:text-xl '><span className='font-semibold'>Storage:</span> {storage}</p>
                <p className='text-lg md:text-xl '><span className='font-semibold'>Camera Info:</span> {camera_info}</p>
                <p className='text-lg md:text-xl '><span className='font-semibold'>Description:</span> {description}</p>
            </div>

        </div>
    );
};

export default PhoneDetails;