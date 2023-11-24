import '../Footer/FooterStyles.css'
import { FaFacebook, FaGithub, FaLinkedin } from 'react-icons/fa'
import React from 'react'

const Footer = () => {
  return (
    <div className='Footer'>
      <div className="footer-container">

       

        <div className="social-links">
        <div className="social-links-1">
          <h3>Get In Touch</h3>
          <p>Connect with us on social media to stay updated on our latest projects and adventures. We'd love to hear from you!</p>
        </div> 
        <div className="social-links-2">
          <FaFacebook size={30} style={{ color: 'white', marginRight: '20px' }} />
          <FaLinkedin size={30} style={{ color: 'white', marginRight: '20px' }} />
          <FaGithub size={30} style={{ color: 'white', marginRight: '20px' }} />
          </div>
        </div>


   


      </div>
    </div>
  )
}

export default Footer

  