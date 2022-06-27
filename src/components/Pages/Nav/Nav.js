import React from 'react';
import { Link } from 'react-router-dom';
import CustomLink from '../Shared/CustomLink/CustomLink';

const Nav = () => {
    return (
        <>
            <nav class="navbar navbar-expand-lg bg-light">
                <div class="container">
                    <Link class="navbar-brand" to='/home'>AR PhotoGraphy</Link>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <CustomLink class="nav-link active" aria-current="page" to='/home'>Home</CustomLink>
                            </li>
                            <li class="nav-item">
                                <CustomLink class="nav-link" to='/about'>About Me</CustomLink>
                            </li>
                            <li class="nav-item">
                                <CustomLink class="nav-link" to='/blog'>Blog</CustomLink>
                                </li>
                            <li class="nav-item">
                                <CustomLink class="nav-link" to='/contact'>Contact</CustomLink>
                                </li>
                        </ul>

                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <CustomLink class="nav-link active" aria-current="page" to='/login'>Login</CustomLink>
                            </li>                           
                        </ul>                    
                </div>
            </div>
        </nav>  
        </>
    );
};

export default Nav;