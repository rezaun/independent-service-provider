import React from 'react';
import Banner from '../Banner/Banner';
import Services from '../Services/Services';

const Home = () => {
    return (
        <>
            <Banner/>
           <div className="container">
            
            <h2 className='text-center text-primary py-4'>Services</h2>
            <Services/>
           </div>
        </>
    );
};

export default Home;