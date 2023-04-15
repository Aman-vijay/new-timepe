import PropTypes from 'prop-types';
import React from 'react';
import './Navbar.css';
import './Signup';
import { useNavigate } from 'react-router-dom';



export default function Navbar() {


  const navigate = useNavigate();

  const handleSignup = () => {
    // Direct to signup page
    navigate('/Signup');
  };
  return (
    <header class=" navhead p-3 bg text">
      <div class="container">
        <div class="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
          <a href="/" class="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none">
            <svg class="bi me-2" width="40" height="32" role="img" aria-label="Bootstrap"></svg>
          </a>

          <ul class="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
            
            <li><a href="/" class="nav-link px-2 text" >Features</a></li>
            <li><a href="/" class="nav-link px-2 text">Marketplace</a></li>
            <li><a href="/" class="nav-link px-2 text">About us</a></li>
            <li><a href="/" class="nav-link px-2 text">Become a Seller</a></li>
          </ul>

          <form class="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3">
            <input type="search" class="form-control form-control-white" placeholder="Search..." aria-label="Search"/>
          </form>

          <div class="text-end">
            <button type="button" class="btn btn-outline-light me-2">Login</button>
            <button type="button" onClick={handleSignup} class="btn btn-outline-light"></button>
          </div>
        </div>
      </div>
    </header>
  );
}

Navbar.propTypes = {
  link1: PropTypes.string,
  link2: PropTypes.string,
  link3: PropTypes.string,
  link4: PropTypes.string,
  link5: PropTypes.string,
  button1: PropTypes.string,
  button2: PropTypes.string
};

Navbar.defaultProps = {
  link1: 'Home',
  link2: 'Features',
  link3: 'Pricing',
  link4: 'FAQs',
  link5: 'About',
  button1: 'Login',
  button2: 'Sign-up'
};
