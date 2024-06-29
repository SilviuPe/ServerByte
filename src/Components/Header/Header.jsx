import React from 'react'
import logo from '../../Assets/Logo.png';
import Header_Functions from './Header';

const Header = () => {

    const functions = Header_Functions('HEADER');

    return (
        <div className='Header_body flex text-white bg-background_color px-s pt-3 smPhone:px-4 smPhone:pt-4 smPhone:text-xs' id = 'HEADER'>
            <div className='Header_logo pl-s smPhone:px-0 smPhone:py-4 smPhone:w-auto smPhone:h-auto'>
                <img
                    src = {logo}
                    alt='Server Byte'
                    onClick = {() => {
                        window.location.href = '/';
                    }}
                />
            </div>
            <div className='Header_links flex items-center space-x-s pl-s smPhone:w-auto smPhone:space-x-4 smPhone:pl-0'>
                <div><span className='cursor-pointer'onClick={functions.go_to_FAQ_page}>FAQ</span></div>
                <div><span className='cursor-pointer'>Support</span></div>
                <div><span className='cursor-pointer' onClick={functions.go_to_PLAN_page}>Plans</span></div>
            </div>

            <div className='Header_options flex items-center space-x-8 ml-auto pr-s smPhone:pr-0 smPhone:w-auto'>
                <div className='register_option'>
                    <button onClick = {() => {
                        window.location.href = '/register'
                    }} className='Register_button'>Register</button> </div>
                <div className='login_option text-black'>
                    <button onClick = {() => {
                        window.location.href = '/login'
                    }} 
                    className='Login_button bg-background_button_color text-white px-x py-2 rounded-lg smPhone:px-6 smPhone:py-2'>Login</button> </div>
            </div>
        </div>
    )
}

export default Header;