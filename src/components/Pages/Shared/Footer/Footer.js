import React from 'react';
import {Link} from 'react-router-dom'
import '../../../../assets/Css/Style.css';

const Footer = () => {
    return (
        <>
        <footer className='footerContainer'>
            <div className="container">
            <p className='text-center p-1'>Powered By &copy; <Link to='/home'>Kabir</Link></p>
            </div>
        </footer>
            
        </>
    );
};

export default Footer;