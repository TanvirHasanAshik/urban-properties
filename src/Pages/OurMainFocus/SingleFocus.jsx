import React from 'react';

const SingleFocus = ({ focus }) => {
    const { title, image, description } = focus;
    return (
        <div className="card cursor-pointer bg-base-100 shadow-xl transition-colors duration-700 hover:bg-purple-900 hover:text-white">
            <div className="card-body">
                <img className="w-16 my-5 rounded-full" src={image} alt="" />
                <h2 className="card-title">{title}</h2>
                <p className="text-sm mt-4 transition-transform duration-500 transform hover:scale-110">{description}</p>
            </div>
        </div>
    );
};

export default SingleFocus;