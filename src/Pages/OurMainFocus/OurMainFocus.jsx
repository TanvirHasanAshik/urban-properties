import React, { useEffect, useState } from 'react';
import SingleFocus from './singleFocus';

const OurMainFocus = () => {
    const [allFocus, setAllFocus] = useState([]);
    useEffect(() => {
        fetch('banner.json')
            .then(res => res.json())
            .then(data => setAllFocus(data.features));
    }, []);

    return (
        <div className='my-28'>
            <h1 className='text-center text-4xl font-bold my-10'>Our main focus</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-20 mx-4'>
                {
                    allFocus?.map((focus, idx) => <SingleFocus key={idx} focus={focus} />)
                }
            </div>
        </div>
    );
};

export default OurMainFocus;