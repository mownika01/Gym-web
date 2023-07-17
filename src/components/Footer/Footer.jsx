import React from 'react'
import './footer.css'
import img1 from '../../assets/github.png'
import img2 from '../../assets/instagram.png'
import img3 from '../../assets/linkedin.png'
import logo from '../../assets/logo.png'

const Footer = () => {
  return (
    <div className="footer-container" id='footer'>
        <hr />
        <div className="footer">
            <div className='social-icons'>
                <img src={img1} />
                <img src={img2} />
                <img src={img3} />
            </div>
            <div className="logo-f">
                <img src={logo} />
            </div>
        </div>
        <div className='blur f-blur-1'></div>
        <div className='blur f-blur-2'></div>
    </div>
  )
}

export default Footer;