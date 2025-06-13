import React from 'react'
import { Link } from 'react-router-dom';
import { useState } from "react";

const SignupPage = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [error, setError] = useState("");
    const [phone, setPhone] = useState("");


    const handleSubmit = (e) => {
        e.preventDefault(); // Prevent form submission

        // Email pattern validation
        const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (!emailPattern.test(email)) {
            setError("Please enter a valid email address.");
            return;
        }

        // Password match validation
        if (password !== confirmPassword) {
            setError("Passwords do not match!");
            return;
        }

        //Phone number
        if (!/^\d{10}$/.test(phone)) {
            setError("Please enter a valid 10-digit phone number.");
            return;
        }


        setError(""); // Clear error if valid
        alert("Signup successful!"); // Replace with API call
    };


    return (
        <div className="signup-page">
            <div className="container">
                <div className="signup-container">
                    <h4 className="text-center mb-4">Welcome<br /> to <br /> BHOJANALAYA</h4>
                    <h1 className="text-center" style={{ fontSize: 15 }}>please enter your credentials here</h1>
                    <br />
                    <form onSubmit={handleSubmit}>

                        <div className="custom-input-container mb-3">
                            <input type="text" className="custom-input" id="name" placeholder=" " required />
                            <label htmlFor="name" className="custom-label">Full Name</label>
                        </div>


                        <div className="custom-input-container mb-3">
                            <input type="s" className="custom-input" id="email" placeholder=" " required value={email}
                                onChange={(e) => setEmail(e.target.value)} />
                            <label htmlFor="email" className="custom-label">Email Address</label>
                        </div>

                        <div className="custom-input-container mb-3">
                            <input
                                type="tel"
                                className="custom-input"
                                id="phone"
                                placeholder=" "
                                required
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                                pattern="[0-9]{10}"
                                title="Enter a 10-digit phone number"
                            />
                            <label htmlFor="phone" className="custom-label">Phone Number</label>
                        </div>


                        <div className="custom-input-container mb-3">

                            <input type="password" className="custom-input" id="password" placeholder=" " required value={password}
                                onChange={(e) => setPassword(e.target.value)} />
                            <label htmlFor="password" className="custom-label">Password</label>
                        </div>


                        <div className="custom-input-container mb-3">

                            <input type="password" className="custom-input" id="confirm-password" placeholder=" " required value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)} />
                            <label htmlFor="confirm-password" className="custom-label">Confirm Password</label>
                        </div>

                        {/* Show error message  */}
                        {error && <p className="text-danger text-center">{error}</p>}

                        <div className="d-grid">
                            <button type="submit" className="btn btn-primary">Sign Up</button>
                        </div>

                        <p className="text-center mt-3">
                            Already have an account? <Link to="/">Login</Link>
                        </p>

                        <div className="d-flex justify-content-center gap-3 mt-3">
                            <button className="btn btn-outline-primary rounded-circle social-btn">
                                <i className="fab fa-facebook-f"></i>
                            </button>

                            <button className="btn btn-outline-danger rounded-circle social-btn">
                                <i className="fab fa-google"></i>
                            </button>
                        </div>

                    </form>
                </div>
            </div>
        </div>
    )
}

export default SignupPage