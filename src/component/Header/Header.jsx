import React from 'react'
import './Header.css'
import { assets } from '../../assets/assets'
const Header = () => {
  return (
    <div className='header'>
        <img className='header_img' src={assets.header_img} alt='header_img'/>
            <div className='header-contents'>
               <h2>Order Your Favourite Food Here</h2>
               <p>Choose from a diverse menu feature a delectablearray of dish</p>
               <button>View Menu</button>
            </div>
    </div>
  )
}

export default Header