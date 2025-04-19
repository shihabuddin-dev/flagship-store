import React from 'react';
import Navbar from '../components/Navbar';
import { useNavigate, useRouteError } from 'react-router';
import Button from '../components/ui/Button';

const Error = () => {
    const error = useRouteError()
    const navigate = useNavigate()
    return (
        <div >
            <Navbar />
            <div className='container mx-auto px-8 md:px-12 lg:px-16 xl:px-24 pt-6'>

                <div className="flex flex-col items-center justify-center  text-gray-800 p-6">
                    <div className="text-center w-full max-w-lg">

                        <h3 className="text-4xl md:text-6xl font-bold text-red-600 mb-4">
                            {error.status || '404'}

                        </h3>
                        <p>{error.statusText}</p>
                        <p className="text-lg md:text-xl text-gray-600 mb-8 px-4">
                            {error.data || 'Page Not Found'}
                        </p>
                        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
                            <Button onClick={() => navigate(-1)} label='Back' />
                            <Button onClick={() => navigate('/')} label='HomePage' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Error;