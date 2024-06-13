import React from 'react'
import "./Footer.css"
import footerLogo from "../Assets/logo_big.png"
import Insta from "../Assets/instagram_icon.png"
import pintrest from "../Assets/pintester_icon.png"
import wp from "../Assets/whatsapp_icon.png"

function Footer() {
  return (
    <div className='footer'>    
        <div className='footer-logo'>
            <img src={footerLogo} />
            <p>SHOPPER</p>
        </div>
        <ul className="footer-link">
            <li>Company</li>
            <li>Product</li>
            <li>Offices</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
        <div className="footer-social-icon">
            <div className="footer-icon-container">
                <img src={Insta}  />
            </div>
            <div className="footer-icon-container">
                <img src={pintrest}  />
            </div>
            <div className="footer-icon-container">
                <img src={wp}  />
            </div>
            
        </div>
        <div className="footer-copy-write">
                <hr />
                <p>Copyright at 2023 - All Right Reserved</p>
            </div>
    </div>
  )
}

export default Footer