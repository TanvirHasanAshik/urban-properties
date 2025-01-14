import React, { useEffect, useState } from 'react';
import Marquee from "react-fast-marquee";
const ClientFeedback = () => {
    const [clientsFeedback, setClientsFeedback] = useState([]);
    useEffect(() => {
        fetch('feedback.json')
            .then(res => res.json())
            .then(data => setClientsFeedback(data?.clientFeedback))
    }, []);


    return (
        <>
            <h2 className="text-4xl font-bold text-center my-20">Our happy client</h2>
            <Marquee pauseOnHover={true} speed={40}>
                <div className="flex mb-40">
                    {
                        clientsFeedback.map((feedback, idx) => <div
                            key={idx}
                            className="card bg-base-100 shadow-md mx-4">
                            <div className="card-body w-96">
                                <h2 className="card-title mx-auto">{feedback?.name}</h2>
                                <img className='w-20 mx-auto' src={feedback.image} alt="" />
                                <h2 className='text-center text-md font-semibold'>From: <span className="text-accent">{feedback.city}</span></h2>
                                <p className='text-sm'>{feedback.feedback}</p>
                            </div>
                        </div>)
                    }
                </div>
            </Marquee>
        </>
    );
};

export default ClientFeedback;