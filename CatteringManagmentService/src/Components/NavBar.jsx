import React from 'react'
import { Link } from 'react-router-dom';
import logo from '../assets/CoverImages/bhojan.png';


const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
    <div className="container-fluid" style={{ backgroundColor: 'wheat', display: 'flex', alignItems: 'center' }}>
      <Link className="navbar-brand d-flex align-items-center" to="/" style={{ gap: '15px', textDecoration: 'none', color: 'inherit' }}>
        
        {/* Logo */}
        <img src={logo} alt="Logo" width="100" height="80" className="d-inline-block align-text-top" />

        {/* Text beside the logo */}
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <b style={{ textShadow: '5px 5px 10px gray', fontFamily: "'Times New Roman', Times, serif", fontWeight: 'bold', fontSize: 'xx-large' }}>
          BHOJANALAYA
          </b>
          <span style={{ fontSize: 'medium', fontFamily: 'Delius, serif', fontWeight: 'normal', color: '#555' }}>
            Foodies welcome here
          </span>
        </div>
      </Link>

      {/* Navbar Links */}
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ms-auto">
        
          <li className="nav-item">
            <Link className="nav-link active fw-bold" to="/">Home | </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link fw-bold" to="/about">About Us  |</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link fw-bold" to="/viewmenupage">Menu  |</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link fw-bold" to="/viewmenupage">Your Own Menu  |</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link fw-bold" to="/services">Services  |</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link fw-bold" to="/contact">Contact Us  |</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link fw-bold text-danger" to="/">Log In  |</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link fw-bold text-danger" to="/logout">Log Out  |</Link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  )
}

export default NavBar