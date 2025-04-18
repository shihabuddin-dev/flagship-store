import React, { useState } from 'react';
import Hero from '../components/Hero';
import PhonesContainer from '../components/PhonesContainer';
import { useLoaderData } from 'react-router';

const Home = () => {
    // data fetch 
    const data = useLoaderData()
    // search data
    const [phones, setPhones] = useState(data)
    const handleSearch = (e, text) => {
        e.preventDefault()
        if (text === '') return setPhones(data)
        const searchPhones = data.filter(phone =>
            phone.name.toLowerCase().split(' ').includes(text.toLowerCase()) || phone.brand.toLowerCase().split(' ').includes(text.toLowerCase()))
        setPhones(searchPhones)
    }
    return (
        <div>
            <Hero handleSearch={handleSearch} />
            <PhonesContainer phones={phones} />
        </div>
    );
};

export default Home;