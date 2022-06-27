import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Services = () => {
    const [service, setServices] = useState([]);

    useEffect(() => {
        fetch('product.json')
            .then(res => res.json())
            .then(data => setServices(data));
    }, [])
    return (
        <>
        <div className="row">        
            {
                service.map(service => (
                    <div className="col col-md-3 my-3">
                        <div className="card">
                            <img src={service.picture} class="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">{service.name}</h5>
                                <h6>Price: ${service.price}</h6>
                                <p>Phone: <span className='text-primary'>{service.phone}</span></p>
                                <p className="card-text">{service.description.slice(0,120)}</p>
                                <button className='btn btn-primary'>Checkout</button>
                            </div>
                           
                        </div>
                    </div>
                ))}
                </div>
        </>
    );
};

export default Services;