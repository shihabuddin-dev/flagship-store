import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router';
import { MdShoppingCart, MdBookmarkAdd } from "react-icons/md";
import logo from '../assets/images/logo.png'
import { CartContext } from '../provider/Context';

const Navbar = () => {
    const {cart}=useContext(CartContext)
    return (
        <div className="navbar p-0 bg-base-100 shadow-sm className='container mx-auto px-8 md:px-12 lg:px-16 xl:px-24'">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="cursor-pointer mr-2 lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        <li>
                            <NavLink to='/'>Home</NavLink>
                        </li>
                        <li>
                            <NavLink to='/about'>About</NavLink>
                        </li>
                        <li>
                            <NavLink to='/cart'><MdShoppingCart size={20} /></NavLink>
                     
                        </li>
                        <li>
                            <NavLink to='/favorites'><MdBookmarkAdd size={20} /></NavLink>
                        </li>
                    </ul>
                </div>
                <Link to='/' className="font-bold text-2xl flex items-center">
                    <img className='w-10' src={logo} alt="logo" /> Store</Link>
            </div>
            <div className="navbar-end  hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li>
                        <NavLink to='/'>Home</NavLink>
                    </li>
                    <li>
                        <NavLink to='/about'>About</NavLink>
                    </li>
                    <li className='relative'>
                        <NavLink to='/cart'><MdShoppingCart size={20} /></NavLink>
                        <p className='absolute'> {cart.length}</p>
                    </li>
                    <li>
                        <NavLink to='/favorites'><MdBookmarkAdd size={20} /></NavLink>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;