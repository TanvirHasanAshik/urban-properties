import React, { useEffect, useState } from 'react';

const Header = () => {
    const [banner, setBanner] = useState({});
    const { title, description, purpose, features } = banner;
    useEffect(() => {
        fetch('banner.json')
            .then(res => res.json())
            .then(data => setBanner(data))
    }, []);


    return (

        <div className='relative bg-[url("https://fnst.axflare.com/developer/poster/JPEG/oarEXbIgeF.jpeg")] bg-cover bg-center h-full lg:min-h-[500px] rounded flex items-center my-10'>
            <div className='absolute inset-0 rounded bg-black bg-opacity-45'></div>
            <div className='w-3/4 opacity-95 h-full lg:h-96 mx-auto text-center'>
                <h2 className='text-5xl font-semibold text-warning'>{title}</h2>
                <p className='py-8 text-white text-xl'>{description}</p>
                <div className='grid grid-cols-1 md:grid-cols-3 gap-4 mt-8'>
                    {
                        features?.map((feature, idx) => <p
                            key={idx}
                            className=" bg-green-700 mr-2 rounded-md btn btn-outline btn-warning p-4 text-md "
                        >{feature?.title}</p>)
                    }
                </div>
                <button className="btn btn-outline btn-warning text-black my-5">Explore more</button>
            </div>
        </div>
    );
};

export default Header;