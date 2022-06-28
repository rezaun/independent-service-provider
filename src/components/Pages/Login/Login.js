import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-sm-12 col-xs-12 offset-md-4 col-md-4 my-5">
                        <h2>Login Here</h2>
                    <form>
                        <div class="mb-3">
                            <label for="exampleInputEmail1" class="form-label">Email address</label>
                            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Email Address' required />
                            
                        </div>
                        <div class="mb-3">
                            <label for="exampleInputPassword1" class="form-label">Password</label>
                            <input type="password" class="form-control" id="exampleInputPassword1" placeholder='Password' required />
                        </div>
                       
                        <button type="submit" class="btn btn-primary">Login</button>
                    </form>
                    <div class="mb-3 ">
                            New Here? Please <Link to='/registration'>Register</Link> Here.
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Login;