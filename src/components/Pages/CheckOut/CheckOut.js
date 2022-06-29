import React from 'react';
import product from '../../../assets/Images/Services/product.jpg'

const CheckOut = () => {
    return (
        <>
            <div className="container">
                <div className="row mt-5">                    
                        <h2 className='my-5 text-center text-primary'>Shopping Cart</h2>
                        <div className="col-md-9 col-sm-9 col-xs-12">
                            <table class="table table-bordered">
                                <thead>
                                    <tr>
                                        <th scope="col">Product</th>
                                        <th scope="col">Size</th>
                                        <th scope="col">Quantity</th>
                                        <th scope="col">Total Price</th>
                                        <th scope="col">Remove</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th scope="row"><img style={{width:'50px'}} src={product} alt="" /></th>
                                        <td>35L</td>
                                        <td>- 2 +</td>
                                        <td>$1550</td>
                                        <td>x</td>
                                    </tr>
                                    <tr>
                                        <th scope="row"><img style={{width:'50px'}} src={product} alt="" /></th>
                                        <td>35L</td>
                                        <td>- 2 +</td>
                                        <td>$1550</td>
                                        <td>x</td>
                                    </tr>
                                    <tr>
                                        <th scope="row"><img style={{width:'50px'}} src={product} alt="" /></th>
                                        <td>35L</td>
                                        <td>- 2 +</td>
                                        <td>$1550</td>
                                        <td>x</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="col-sm-3 col-md-3">
                            <div className="cartWrapper pb-5">
                                <h4 className='text-center py-3'>Cart</h4>
                                <table class="table">                               
                                <tbody>
                                    <tr>
                                        <th scope="row"><img style={{width:'50px'}} src={product} alt="" /></th>
                                        <td></td>
                                        <td></td>
                                        <td>$1550</td>
                                        <td>x</td>
                                    </tr>
                                    <tr>
                                        <th scope="row"><img style={{width:'50px'}} src={product} alt="" /></th>
                                        <td></td>
                                        <td></td>
                                        <td>$1550</td>
                                        <td>x</td>
                                    </tr>
                                    <tr>
                                        <th scope="row"><img style={{width:'50px'}} src={product} alt="" /></th>
                                        <td></td>
                                        <td></td>
                                        <td>$1550</td>
                                        <td>x</td>
                                    </tr>
                                    <tr>
                                        <th scope="row"><h4>Total</h4></th>
                                        <td></td>
                                        <td></td>
                                        <td>$4550</td>
                                        <td></td>
                                    </tr>
                                </tbody>
                                </table>                               
                            </div>
                            
                        </div>
                    
                </div>
            </div>
        </>
    );
};

export default CheckOut;