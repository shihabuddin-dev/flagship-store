import React from 'react';
import Button from './Button';
import { Link, useNavigate } from 'react-router';

const EmptyState = () => {
    const navigate = useNavigate()
    return (
        <div className='text-center pt-6 md:pt-16 space-y-2'>
            <h3 className='text-5xl font-thin'>No Data Found!</h3>
            <p className='text-lg'>Browse, Search phones,Add to Cart, Favorites.
            </p>
           <div className='space-x-2'>
           <Button onClick={() => navigate(-1)} label='Back' />
            <Link to='/'>
                <Button label='Home' /></Link>
           </div>
        </div>
    );
};

export default EmptyState;