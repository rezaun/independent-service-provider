import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import {Link} from 'react-router-dom'
import '../../../../assets/Css/Style.css';
import { FaFacebookSquare, FaInstagramSquare, FaLinkedin, FaTwitterSquare, FaYoutube } from 'react-icons/fa';

const Footer = () => {
    return (
        <>
        <footer className='footerContainer'>
            <div className="container">
                <div className="row">
                    <div className="col-sm-6 col-md-6 col-xs-12">
                        <p className='text-center p-1'>Copyright 2005 - 2022 |  All Rights Reserved | Powered by &copy; <Link to='/home'>Kabir</Link></p>    
                    </div>
                    <div className="col-sm-6 col-md-6 col-xs-12 text-end px-5 socialBox">                         
                        <a className='px-1' href='https://www.facebook.com/rezaunkabir' target="_blank"><FaFacebookSquare/></a>                          
                        <a className='px-1' href='https://www.twitter.com/rezaunkabir' target="_blank"><FaTwitterSquare/></a>                          
                        <a className='px-1' href='https://www.instagram.com/rezaunkabir/' target="_blank"><FaInstagramSquare/></a>                          
                        <a className='px-1' href='https://www.youtube.com/user/rezaun' target="_blank"><FaYoutube/></a>                          
                        <a className='px-1' href='https://www.linkedin.com/in/rezaunkabir/' target="_blank"><FaLinkedin/></a>                          
                              
                    </div>
                </div>
            
              
            </div>
        </footer>
            
        </>
    );
};

export default Footer;