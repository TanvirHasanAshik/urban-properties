import React, { useEffect, useState } from 'react';
import SingleService from './SingleService';

const OurServices = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('property.json')
            .then(res => res.json())
            .then(data => setServices(data?.website?.categories));
    }, []);

    // console.log(services);
    return (
        <div className='mb-28'>
            <h2 className='text-3xl font-bold text-center mb-28'>Our Services</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mx-5'>
                {
                    services.map((service, idx) => <SingleService key={idx} service={service} />)
                }
            </div>
        </div>
    );
};

export default OurServices;