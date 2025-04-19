import React from 'react';
import { Link } from 'react-router';
import { MdDeleteForever } from "react-icons/md";

const PhoneCard = ({ phone, deleteAble ,handleDelete}) => {
    const { name, image, description, id } = phone || {}
    return (

        <div className="card bg-base-100 shadow-sm">
            <figure>
                <img
                    src={image}
                    alt="phone" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>{description}</p>
                <div className="card-actions justify-end">
                    <Link to={`phone-details/${id}`} ><button className="relative inline-block px-4 py-2 font-medium group cursor-pointer">
                        <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-black group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
                        <span className="absolute inset-0 w-full h-full bg-white border-2 border-black group-hover:bg-black"></span>
                        <span className="relative text-black group-hover:text-white">View more</span>
                    </button></Link>
                </div>
            </div>
            {
                deleteAble && <div onClick={()=>handleDelete(id)} className='absolute -top-2 -right-2 bg-gray-900 rounded-full hover:bg-gray-300 cursor-pointer p-3 ml-2 group  hover:scale-105'><MdDeleteForever size={20} className='text-gray-100 group-hover:text-gray-900'/></div>
            }

        </div>

    );
};

export default PhoneCard;