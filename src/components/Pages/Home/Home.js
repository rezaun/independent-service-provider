import React from 'react';
import Banner from '../Banner/Banner';
import Photographer from '../Photographer/Photographer';
import Service from '../Service/Service';

const Home = () => {
    return (
        <>
            <Banner/>
            <div className="container mb-5"> 
            <Service/>            
            <Photographer/>
            </div>
        </>
    );
};

export default Home;