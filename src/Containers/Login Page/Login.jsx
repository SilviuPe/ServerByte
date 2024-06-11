import React, { useState, useEffect } from 'react';

import {Header} from '../../Components';
import tick from '../../Assets/Tick.png';
import cross from '../../Assets/cross.png';
import line from '../../Assets/Line.png';

import FacebookIMG from '../../Assets/Facebook.png';
import TwitterIMG from '../../Assets/Twitter.png';
import GithubIMG from '../../Assets/Github.png';
import GoogleIMG from '../../Assets/Google.png';
import Logo from '../../Assets/Logo.png';



import Lottie from 'lottie-react';
import animationData from '../../Assets/Login_animations.json';

const Field = ({title,type}) => {

    return (
        <div className='field mb-6'>
            <div>
                <p className='title text-white'>{title}</p>
                <input id = {`field_for_${title}`} type={type} className='text-white bg-transparent border border-white rounded rounded-xs w-x3l'/>
            </div>
        </div>
    );
}


const Register = () => {
    const [policyAgree, setPolicyAgree] = useState(false);
    const handlePolicyButtonDown = () => {
        setPolicyAgree(!policyAgree)
    }


    return (
    <div className='Login_page'>
        <div className='Login_container flex mx-x2l mt-xl mb-xl rounded rounded-3xl'>
            <div className='Message bg-login_background_color w-full'>
                <img 
                    className = "logo cursor-pointer ml-x mt-x" 
                    src = {Logo}
                    onClick = {() => {
                        window.location.href = '/';
                    }}/>
            

                <div className='grid place-items-center mt-m'>
                    <span className='block font-semibold text-xl text-white pb-4'>Hello!</span> 
                    <span className='block font-base text-xl text-white pb-4'>Welcome to our community!</span> 
                </div>
                <div className='w-full flex justify-center mt-x'>
                    <div className='w-pc7'>
                        <Lottie animationData={animationData} loop={true}/>
                    </div>
                </div>
            </div>
            <div className='Login_field w-full text-sm bg-custom-img-login-page bg-cover pb-s'>
                <h1 className='title font-bold text-3xl text-white mt-xl text-center mb-s'>Sign In</h1>
                <div className='flex flex-box justify-center'>
                    <div>
                        <Field title = "Email address" type = "email"/>
                        <Field title = "Password" type = "password"/>
                    </div>
                </div>
                <div className='continue_button grid place-items-center mt-x p-6'>
                    <button className='flex bg-background_buttons_color text-white py-1 px-s rounded rounded-xs justify-center'>continue</button>
                </div>
                <div className='flex separator_line justify-center items-center mt-x'>
                    <img className = "h-2 w-xl" src = {line}></img>
                    <p className='mx-6 text-lg pb-2' style = {{color: 'rgba(255,255,255,0.5)'}}> or </p>
                    <img className = "h-2 w-xl" src = {line}></img>
                </div>
                <div className='flex justify-center mt-8'>
                    <div className='flex justify-between gap-8'>
                    <img style = {{width:32, height:32, cursor: 'pointer'}} src = {GithubIMG}></img>
                        <img style = {{width:32, height:32, cursor: 'pointer'}} src = {GoogleIMG}></img>
                        <img style = {{width:32, height:32, cursor: 'pointer'}} src = {TwitterIMG}></img>
                        <img style = {{width:32, height:32, cursor: 'pointer'}} src = {FacebookIMG}></img>
                    </div>
                </div>
                <div className='sign_in_button grid place-items-center mt-s text-base text-white'>
                    <p>Don't have an account?</p>
                    <button className='text-sm font-bold mt-8'>Sign Up</button>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Register