import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'
const Footer = () => {
  return (
    <div className='footer' id='footer'>
        <div className='footer-content'>
            <div className='footer-content-left'>
               <img src={assets.logo} alt=''/>
                 <p>Order Your Favourite Food Here. Choose from a diverse menu featuring a delectable array of dishes.Food provides essential nutrients for overall health and well-being</p>
                 <div className='footer-social-icon'>
                     <img src={assets.facebook_icon} alt=''/>
                     <img src={assets.twitter_icon} alt=''/>
                     <img src={assets.linkedin_icon} alt=''/>

                 </div>
            </div>
            <div className='footer-content-center'>
                <h2>Company</h2>
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Delivery</li>
                    <li>Privacy Policy</li>
                </ul>

            </div>
            <div className='footer-content-right'>
                <h2>Get In Touch</h2>
                <ul>
                    <li>+1-212-456-7890</li>
                    <li>contact@tomato.com</li>
                </ul>
            </div>

        </div>
        <hr/>
        <p className='footer-copyrigth'>Copyrigth 2024  Tomato.com -All Right Reserved</p>
    </div>
  )
}

export default Footer