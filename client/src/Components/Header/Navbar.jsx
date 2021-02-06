import React from "react";
import { Link } from 'react-router-dom'
import logo from '../../images/bluenest1.png'


import './Navbar.css'



const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
           <Link to="/"><img className="logo" src={logo} alt=""/></Link> 
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
              <Link to="/house-sale" className="nav-link"><a>For Sale</a></Link> 
              </li>
              <li className="nav-item">
              <Link to="/house-rent" className="nav-link"><a>To Rent</a></Link> 
              </li>
              <li>
              <Link  to="/list-your-property" className="nav-link"><a >Sell </a> </Link> 
              </li>
              <li className="nav-item">
              <Link to="/contact-us" className="nav-link"><a>Contact Us</a></Link>
              </li>
              
            </ul>
          </div>
        </div>
      </nav>
    </div>

);
};

{/* <Link to="/house-sale" className="links"><a className="link">For Sale</a></Link> 
              <Link to="/house-rent" className="links"><h3 className="link">To Rent</h3></Link> 
             <Link  to="/list-your-property" className="links"><h3 className="link">Sell Your property</h3> </Link> 
             <Link to="/contact-us" className="links"><h3 className="link">Contact Us</h3></Link>  */}

export default Navbar;