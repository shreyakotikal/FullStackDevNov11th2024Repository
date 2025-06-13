import React from 'react'
import { Link } from 'react-router-dom';

const ForgotPassword = () => {
    return (
        <div className="forgot-password-page d-flex align-items-center justify-content-center vh-100">
            <div className="forgot-password-container p-4 shadow rounded">
                <h3 className="text-center mb-3">Forgot Password</h3>
                <p className="text-center">Enter your email to receive a password reset link.</p>
                <form>
                    <div className="mb-3">
                        <label for="email" className="form-label">Email Address</label>
                        <input type="email" className="form-control" id="email" placeholder="Enter your email" required />
                    </div>
                    <div className="d-grid">
                        <button type="submit" className="btn btn-primary">Reset Password</button>
                    </div>
                    <p className="text-center mt-3">
                        <Link to="/">Go Back to Login</Link>
                    </p>
                </form>
            </div>
        </div>
    )
}

export default ForgotPassword