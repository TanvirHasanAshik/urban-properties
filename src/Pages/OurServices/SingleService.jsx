import React from 'react';
import { Link } from 'react-router-dom';

const SingleService = ({ service }) => {
    const { image, name, description, sub_categories } = service;

    return (
        <div className="card bg-base-100 shadow-xl rounded-sm">
            <figure className='overflow-hidden'>
                <img className='object-cover transition-transform duration-1000 transform hover:scale-125' src={image} />

            </figure>
            <div className="card-body">
                <h2 className="card-title">
                    {name}
                    <div className="badge badge-secondary">NEW</div>
                </h2>
                <p className='text-sm mb-4'>{description.slice(0, 100)}... <span className="tooltip" data-tip="Click here more details">
                    <Link className="badge mt-2">Click here</Link>
                </span></p>
                <div className='flex items-center justify-between border-t pt-4'>
                    <h2 className="font-bold text-accent">We offer:</h2>
                    <div className="card-actions justify-end">
                        <div className="badge badge-accent badge-outline">Retail</div>
                        <div className="badge badge-accent badge-outline">Booking</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleService;