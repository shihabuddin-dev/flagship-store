import React, { useState } from 'react';
import bannerImg from '../assets/images/banner.png'
import Button from './ui/Button';

const Hero = ({ handleSearch }) => {
    const [searchText, setSearchText] = useState('')
    return (
        <div className='py-8 md:py-12'>
            <img src={bannerImg} alt="" className='w-full mx-auto md:max-w-md' />
            <div className='text-center space-y-4 '>
                <h1 className='text-5xl md:text-7xl font-thin text-gray-900'>Browse, Search, View, Buy</h1>
                <p className='text-gray-500 mx-auto md:w-3/6'>Best place to browse, search, view details and purchase of top flagship phones
                    of the current time - FlagshipFaceOff</p>
                <form
                    onSubmit={(e) => handleSearch(e, searchText)}
                    className='flex flex-col md:flex-row justify-center items-center mb-4 md:px-24'>
                    <input value={searchText}
                        onChange={e => setSearchText(e.target.value)}
                        type="text" placeholder='Search Phone by Name' className='bg-white border border-gray-300 rounded shadow-md w-3/3 md:w-2/3 h-12 p-2 mb-3 focus:outline-none focus:shadow-outline md:mr-2 md:mb-0' />
                    <Button type='submit' label='Search' />
                </form>
            </div>
        </div>
    );
};

export default Hero;