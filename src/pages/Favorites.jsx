import React, { useEffect, useState } from 'react';
import PhoneCard from '../components/PhoneCard';
import { getFavorites } from '../utils';

const Favorites = () => {
    const [displayPhones, setDisplayPhones] = useState([])
    useEffect(() => {
        const savedPhones = getFavorites()
        setDisplayPhones(savedPhones)
    }, [])
    return (
        <div className='py-12'>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8'>
                {
                    displayPhones.map(phone => <PhoneCard key={phone.id} phone={phone} />)
                }
            </div>

        </div>
    );
};

export default Favorites;