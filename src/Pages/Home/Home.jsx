import React from 'react';
import Header from '../Header/Header';
import OurMainFocus from '../OurMainFocus/OurMainFocus';
import OurServices from '../OurServices/OurServices';
import ClientFeedback from '../ClientFeedback/ClientFeedback';

const Home = () => {
    return (
        <div>
            <Header />
            <OurMainFocus />
            <OurServices />
            <ClientFeedback />
        </div>
    );
};

export default Home;