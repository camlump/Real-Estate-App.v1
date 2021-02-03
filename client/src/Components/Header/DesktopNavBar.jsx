import React from 'react'

import logo from '../../images/compass.svg'
import '../../StyleSheet/DesktopNav.css'
import {Link} from 'react-router-dom'




const DesktopNavBar = () => {
    return (
        <div className="desktopNav_container">

            <div className="desktopNavLeft_container">
            <img src={logo} alt="company logo" className="logo"/>
            </div>

            <div className="desktopNavRight_container">
              <Link to="/house-sale" className="links"><h3 className="link">For Sale</h3></Link> 
              <Link to="/house-rent" className="links"><h3 className="link">To Rent</h3></Link> 
             <Link  to="/list-your-property" className="links"><h3 className="link">Sell Your property</h3> </Link> 
             <Link to="/contact-us" className="links"><h3 className="link">Contact Us</h3></Link> 
            </div>
            
        </div>
    )
}

export default DesktopNavBar
