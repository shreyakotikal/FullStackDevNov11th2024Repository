import React from 'react'
import '@fortawesome/fontawesome-free/css/all.min.css';
import { Link } from 'react-router-dom';


const LoginPage = () => {
    return (
        <div className="signup-page">
        <div className="container">
            <div className="login-container">
                <h3 className="text-center mb-4">Welcome Back</h3>
                <h1 className="text-center" style={{ fontSize: 15 }}>please enter your credentials here</h1>
                <br />
                <form>
                
                    <div className="custom-input-container mb-3">
                       
                        <input type="email" className="custom-input" id="email" placeholder=" " required />
                        <label htmlFor="email" className="custom-label">Email address</label>
                    </div>
                    <div className="custom-input-container mb-3">
                       
                        <input type="password" className="custom-input" id="password" placeholder=" " required />
                        <label htmlFor="password" className="custom-label">Password</label>
                    </div>
                    <div className="d-grid">
                       <Link to="/homepage" className="btn btn-primary">Login</Link>
                    </div>
                    <p className="text-center mt-3">
                    <Link to="/forgotpassword"> Forgot Password</Link> |<Link to="/signup"> Sign Up</Link>

                    </p>
                    <p className='text-center'>----------------OR---------------</p>
                    {/* Facebook Login Button */}
                    <div className="d-grid mt-3">
                        <a href="#" className="btn btn-outline-primary">
                            <i className="fab fa-facebook me-2"></i> Login with Facebook
                        </a>
                        <br/>
                        <a href="#" className="btn btn-outline-danger">
                            <i className="fab fa-google me-2"></i> Login with Google
                        </a>
                    </div>
                </form>
                </div>
            </div>
        </div>
    )
}

export default LoginPage