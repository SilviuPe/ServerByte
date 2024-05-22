import React from 'react'
import logo from '../../Assets/Logo.png';
import './Header.css';
const Header = () => {
  return (
    <div className='Header_body'>
        <div className='Header_logo'>
            <img src = {logo}/>
        </div>
        <div className='Header_links'>
            <div>FAQ</div>
            <div>Support</div>
            <div>Plans</div>
        </div>

        <div className='Header_options'>
            <div className='register_option'>
                <button className='Register_button'>Register</button> </div>
            <div className='login_option'>
                <button className='Login_button'>Login</button> </div>
        </div>
    </div>
  )
}

export default Header;