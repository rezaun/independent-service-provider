import React from 'react';
import weeding from '../../../assets/Images/Services/weeding.jpg'
import maternity from '../../../assets/Images/Services/maternity.jpg'
import product from '../../../assets/Images/Services/product.jpg'
import food from '../../../assets/Images/Services/food.jpg'

const Service = () => {
    return (
        <>
            <div className="row">
            <h2 className='text-center text-primary py-4'>Our Package</h2>
                <div className="col-md-6 col-xs-12 col-sm-12 my-3">
                    <div className="card">
                        <img src={weeding} class="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Wedding Photography</h5>
                            <h6>Price: $1500/Full Day</h6>
                            <p>Phone: <span className='text-primary'>+8801719-420-140</span></p>
                            <p className="card-text">
                                <ul>
                                    <li> Six hours photography</li>
                                    <li> After event editing process</li>
                                    <li> Online gallery with 60 days hosting</li>
                                    <li> Complimentary engagement session</li>
                                    <li> Hardcover wedding albums</li>
                                </ul></p>
                            <button className='btn btn-primary'>Book</button>
                        </div>

                    </div>
                </div>{/* End single card */}
                <div className="col-xs-12 col-sm-12 col-md-6 my-3">
                    <div className="card">
                        <img src={maternity} class="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Maternity Photography</h5>
                            <h6>Price: $900/Full Day</h6>
                            <p>Phone: <span className='text-primary'>+8801719-420-140</span></p>
                            <p className="card-text">
                                <ul>
                                    <li> Eight hours photography</li>
                                    <li> After event editing process</li>
                                    <li> Online gallery with 60 days hosting</li>
                                    <li> Complimentary engagement session</li>
                                    <li> Hardcover wedding albums</li>
                                </ul></p>
                            <button className='btn btn-primary'>Book</button>
                        </div>

                    </div>
                </div>{/* End single card */}
                <div className="col-xs-12 col-sm-12 col-md-6 my-3">
                    <div className="card">
                        <img src={product} class="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Product Photography</h5>
                            <h6>Price: $1100/Full Day</h6>
                            <p>Phone: <span className='text-primary'>+8801719-420-140</span></p>
                            <p className="card-text">
                                <ul>
                                    <li> Nine hours photography</li>
                                    <li> After event editing process</li>
                                    <li> Online gallery with 60 days hosting</li>
                                    <li> Complimentary engagement session</li>
                                    <li> Hardcover wedding albums</li>
                                </ul></p>
                            <button className='btn btn-primary'>Book</button>
                        </div>

                    </div>
                </div>{/* End single card */}
                <div className="col-xs-12 col-sm-12 col-md-6 my-3">
                    <div className="card">
                        <img src={food} class="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Food Photography</h5>
                            <h6>Price: $1200/Full Day</h6>
                            <p>Phone: <span className='text-primary'>+8801719-420-140</span></p>
                            <p className="card-text">
                                <ul>
                                    <li> Ten hours photography</li>
                                    <li> After event editing process</li>
                                    <li> Online gallery with 60 days hosting</li>
                                    <li> Complimentary engagement session</li>
                                    <li> Hardcover wedding albums</li>
                                </ul></p>
                            <button className='btn btn-primary'>Book</button>
                        </div>

                    </div>
                </div>{/* End single card */}
            </div>
        </>
    );
};

export default Service;