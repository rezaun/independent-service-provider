import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Photographer = () => {
    const [service, setServices] = useState([]);

    useEffect(() => {
        fetch('product.json')
            .then(res => res.json())
            .then(data => setServices(data));
    }, [])
    return (
        <>
        <div className="row">    
        <h2 className='text-center text-primary py-4'>Our Team</h2>    
            {
                service.map(service => (
                    <div className="col-xs-12 col-sm-12 col-md-3 my-3">
                        <div className="card">
                            <img src={service.picture} class="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">{service.name}</h5>
                                <h6>Price: ${service.price}/hr</h6>
                                <p>Rating: {service.rating}/10</p>
                                <p>Phone: <span className='text-primary'>{service.phone}</span></p>
                                <p className="card-text">{service.description.slice(0,120)}</p>
                                <Link className='btn btn-success' to='/checkout'>Hire Me</Link>
                            </div>
                           
                        </div>
                    </div>
                ))}
                </div>
        </>
    );
};

export default Photographer;