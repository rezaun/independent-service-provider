import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import { auth } from '../../../firebase.init';
import CustomLink from '../Shared/CustomLink/CustomLink';

const Nav = () => {
    const [user] = useAuthState(auth);
    return (
        <>
            <nav class="navbar navbar-expand-lg fixed-top bg-light">
                <div class="container">
                    <Link class="navbar-brand" to='/'>AR PhotoGraphy</Link>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <CustomLink class="nav-link active" aria-current="page" to='/home'>Home</CustomLink>
                            </li>
                            <li class="nav-item">
                                <CustomLink class="nav-link" to='/aboutMe'>About Me</CustomLink>
                            </li>
                            <li class="nav-item">
                                <CustomLink class="nav-link" to='/blog'>Blog</CustomLink>
                                </li>
                            <li class="nav-item">
                                <CustomLink class="nav-link" to='/contact'>Contact</CustomLink>
                                </li>
                        </ul>

                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className='loginUser px-2'>{user?.email}</li>
                            <li class="nav-item">
                                {user ? (
                                    <button onClick={() => signOut(auth)}>Logout</button>
                                ) : (
                                     <CustomLink class="nav-link active" aria-current="page" to='/login'>Login</CustomLink>
                                )}
                               
                            </li>
                                                   
                        </ul>                    
                </div>
            </div>
        </nav>  
        </>
    );
};

export default Nav;