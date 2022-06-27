import React from 'react';
import {Link} from 'react-router-dom'
import '../../../../assets/Css/Style.css';

const Footer = () => {
    return (
        <>
        <footer className='footerContainer'>
            <div className="container">
            <p className='text-center p-1'>Copyright 2005 - 2022 |  All Rights Reserved | Powered by &copy; <Link to='/home'>Kabir</Link></p>          
            </div>
        </footer>
            
        </>
    );
};

export default Footer;