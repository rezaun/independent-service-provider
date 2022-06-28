import React from 'react';
import { Link } from 'react-router-dom';

const Registration = () => {
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-sm-12 col-xs-12 offset-md-4 col-md-4 my-5">
                        <h2>Register Here !!</h2>
                    <form>
                        <div class="mb-3">
                            <label for="exampleInputEmail1" class="form-label">Name</label>
                            <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Your Name' required />                            
                        </div>
                        <div class="mb-3">
                            <label for="exampleInputEmail1" class="form-label">Email address</label>
                            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Email Address' required />                            
                        </div>
                        <div class="mb-3">
                            <label for="exampleInputPassword1" class="form-label">Password</label>
                            <input type="password" class="form-control" id="exampleInputPassword1" placeholder='Password' required />
                        </div>                      
                        <button type="submit" class="btn btn-primary">Register</button>                        
                    </form>
                        <div class="mb-3 ">
                            Already Register? Please <Link to='/login'>Login</Link> here.
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Registration;