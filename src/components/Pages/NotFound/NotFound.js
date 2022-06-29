import React from 'react';
import { Link } from 'react-router-dom';
import notfound from '../../../assets/Images/NotFound/notFound.png';

const NotFound = () => {
    return (
        <>
        <div className="container-fluid pt-5 notFoundWrapper">
            <div className="row">
                <div className="col-md-12 col-sm-12 col-xs-12 text-center py-5 my-5 ">
                    <h1>OPPS 
                        <span> 404 </span>NOT FOUND !!! </h1>
                    <p>Back to <Link to='/home'>Home</Link></p>

                </div>
            </div>
        </div>
            
        </>
    );
};

export default NotFound;