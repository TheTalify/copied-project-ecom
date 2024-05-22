import React from 'react'
import './Footer.css'
import footer_logo from '../../assest/banner/logo.png'
import instagram_icon from '../../assest/banner/instagram.png'
import pinterest_icon from '../../assest/banner/pinterest.png'
import whatsapp_icon from '../../assest/banner/whatsapp.png'
const Footer = () => {
  return (
    <div className='footer'>
        <div className="footer-logo">
            <img src={footer_logo} alt="" style={{ width: '100px', height: 'auto'}}/>
            <p>PakZone</p>
        </div>
        <ul className="footer-links">
            <li>Company</li>
            <li>Products</li>
            <li>Offices</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
        <div className="footer-social-icons">
            <div className="footer-icons-container">
                <img src={instagram_icon} alt="" className="social-icon instagram-icon" />
            </div>
            <div className="footer-icons-container">
                <img src={pinterest_icon} alt="" className="social-icon" />
            </div>
            <div className="footer-icons-container">
                <img src={whatsapp_icon} alt="" className="social-icon" />
            </div>
        </div>
        <div className="footer-copyright">
            <hr />
            <p>Copyright @ 2024 - All Rights Reserved </p>
        </div>
    </div>
  )
}
export default Footer