import React from 'react'
import './Footer.css'
import footer_logo from '../Assets/logo_big.png'
import instagram_icon from '../Assets/instagram_icon.png'
import pintester_icon from '../Assets/pintester_icon.png'
import whatsapp_icon from '../Assets/whatsapp_icon.png'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-logo">
          <img src={footer_logo} alt="Style Hub logo" />
          <p>STYLE HUB</p>
        </div>

        <ul className="footer-links">
          <li>Company</li>
          <li>Products</li>
          <li>Offices</li>
          <li>About</li>
          <li>Contact</li>
        </ul>

        <div className="footer-social-icon">
          <a className="footer-icons-container" href="#">
            <img src={instagram_icon} alt="Instagram" />
          </a>
          <a className="footer-icons-container" href="#">
            <img src={pintester_icon} alt="Pinterest" />
          </a>
          <a className="footer-icons-container" href="#">
            <img src={whatsapp_icon} alt="WhatsApp" />
          </a>
        </div>
      </div>

      <div className="footer-bottom">
        <hr />
        <p>© 2023 Style Hub. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer
