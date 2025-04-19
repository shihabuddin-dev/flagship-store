import React, { useEffect, useState } from 'react';
import { CartContext } from './Context';
import { getCart } from '../utils';

const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([])
    useEffect(() => {
        // get data from local storage 
        setCart(getCart())
    }, [])

    return <CartContext.Provider value={{ cart, setCart }}>
        {children}
    </CartContext.Provider>
};

export default CartProvider;