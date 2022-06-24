import React from 'react';

const Nav = () => {
    return (
        <>
            <nav class="navbar navbar-expand-lg bg-light">
                <div class="container">
                    <a class="navbar-brand" href="#">AR PhotoGraphy</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item"><a class="nav-link active" aria-current="page" href="#">Home</a></li>
                            <li class="nav-item"><a class="nav-link" href="#">About Me</a></li>
                            <li class="nav-item"><a class="nav-link" href="#">Blog</a></li>
                            <li class="nav-item"><a class="nav-link" href="#">Contact</a></li>
                        </ul>

                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item"><a class="nav-link active" aria-current="page" href="#">Login</a></li>                           
                        </ul>                    
                </div>
            </div>
        </nav>  
        </>
    );
};

export default Nav;