import React from 'react'
import logo from '../../Assets/Logo.png';
import Header_Functions from './Header';
import { useHistory } from 'react-router-dom';
const Header = () => {

    const functions = Header_Functions('HEADER');

    const handlePlanMouseDown = () => {
        functions.scroll_to_specific_component('ServerPlan_CONTAINER');
    }

    return (
    <div className='Header_body flex text-white bg-contect_bg_color px-s pt-3' id = 'HEADER'>
        <div className='Header_logo pl-s' style = {{paddingTop: 30, paddingBottom: 30,paddingRight:10, paddingLeft:30,}}>
            <img src = {logo} style={{width: 165, height: 55, cursor: 'pointer'}}
            onClick = {() => {
                window.location.href = '/';
            }}
            />
        </div>
        <div className='Header_links flex items-center space-x-s pl-s'>
            <div><span className='cursor-pointer'>FAQ</span></div>
            <div><span className='cursor-pointer'>Support</span></div>
            <div><span className='cursor-pointer' onClick={handlePlanMouseDown}>Plans</span></div>
        </div>

        <div className='Header_options flex items-center space-x-8 ml-auto pr-s'>
            <div className='register_option'>
                <button className='Register_button'>Register</button> </div>
            <div className='login_option text-black'>
                <button className='Login_button bg-background_buttons_color text-white px-x py-2 rounded-lg'>Login</button> </div>
        </div>
    </div>
    )
}

export default Header;