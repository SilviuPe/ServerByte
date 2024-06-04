import React from 'react'
import logo from '../../Assets/Logo.png';
import Header_Functions from './Header';
const Header = () => {

    const functions = Header_Functions('HEADER');


    return (
    <div className='Header_body flex text-white' id = 'HEADER'>
        <div className='Header_logo pl-s'>
            <img src = {logo}/>
        </div>
        <div className='Header_links flex items-center space-x-s pl-s'>
            <div>FAQ</div>
            <div>Support</div>
            <div>Plans</div>
        </div>

        <div className='Header_options flex items-center space-x-8 ml-auto pr-s'>
            <div className='register_option'>
                <button className='Register_button'>Register</button> </div>
            <div className='login_option'>
                <button className='Login_button bg-background_buttons_color px-x py-2 rounded-s'>Login</button> </div>
        </div>
    </div>
    )
}

export default Header;