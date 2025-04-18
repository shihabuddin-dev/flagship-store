import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Outlet } from 'react-router';

const MailLayout = () => {
    return (
        <>
            <Navbar />
            <div className='min-h-[calc(100vh-116px)]'>
                <div className='container mx-auto px-8 md:px-12 lg:px-16 xl:px-24'>
                    <Outlet />
                </div>
            </div>
            <Footer />
        </>
    );
};

export default MailLayout;