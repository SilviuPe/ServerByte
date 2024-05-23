import React from 'react'
import logo from '../../Assets/Logo.png';

const Header = () => {
  return (
    <div className='Header_body flex'>
        <div className='Header_logo pl-6'>
            <img src = {logo}/>
        </div>
        <div className='Header_links flex items-center space-x-8 pl-8'>
            <div>FAQ</div>
            <div>Support</div>
            <div>Plans</div>
        </div>

        <div className='Header_options flex items-center space-x-4 ml-auto pr-6'>
            <div className='register_option'>
                <button className='Register_button'>Register</button> </div>
            <div className='login_option'>
                <button className='Login_button bg-background_buttons_color px-6 py-0.5 rounded-md'>Login</button> </div>
        </div>
    </div>
  )
}

export default Header;