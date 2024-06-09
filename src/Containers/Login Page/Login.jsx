import React, { useState, useEffect } from 'react';

import {Header} from '../../Components';
import tick from '../../Assets/Tick.png';
import cross from '../../Assets/cross.png';
import line from '../../Assets/Line.png';

import FacebookIMG from '../../Assets/Facebook.png';
import TwitterIMG from '../../Assets/Twitter.png';
import GithubIMG from '../../Assets/Github.png';
import GoogleIMG from '../../Assets/Google.png';

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


const Login = () => {
    const [policyAgree, setPolicyAgree] = useState(false);
    const handlePolicyButtonDown = () => {
        setPolicyAgree(!policyAgree)
    }
  return (
    <div className='Login_page'>
        <Header/>
        <div className='Login_container flex mx-x2l mt-xl pb-xl'>
            <div className='Message bg-login_background_color p-s w-full'>
                <span className='block font-bold text-lg text-white pb-x'>Hello!</span> 
                <span className='block font-base text-lg text-white pb-4'>We’re glad to see you again</span> 
                <span className='block font-base text-lg text-white'>We will make sure you have the best experience 
                using our services</span> <br/>
            
                <div className='w-full flex justify-center mt-x'>
                    <div className='w-pc7'>
                        <Lottie animationData={animationData} loop={true}/>
                    </div>
                </div>
            </div>
            <div className='Login_field w-full text-sm bg-custom-img-login-page bg-cover pb-s'>
                <h1 className='title font-bold text-3xl text-white mt-x text-center mb-s'>Sign Up</h1>
                <div className='flex flex-box justify-center'>
                    <div>
                        <Field title = "First name" type = "first_name"/>
                        <Field title = "Second name"type = "second_name"/>
                        <Field title = "Email address" type = "email"/>
                        <Field title = "Phone number" type = "phone"/>
                        <Field title = "Password" type = "password"/>
                    </div>
                </div>
                <div className='text-white flex justify-center mt-6'>
                    <div className='policy_button flex w-x3l text-xs'>
                        <div 
                            onClick = {handlePolicyButtonDown}
                            className='flex cursor-pointer items-center'>
                            {   policyAgree
                                ? <div style = {{width:14,height:14}} className='flex justify-end bg-green rounded rounded-3xl p-1 mr-4 transition-all duration-500 ease-in-out'>
                                    <img style = {{transition: 'opacity5s ease-in-out'}}src = {tick}/>
                                </div>

                                : <div style = {{width:14,height:14}} className='flex justify-center items-center bg-red rounded rounded-3xl p-1 mr-4 transition-all duration-500 ease-in-out'>
                                    <img style = {{width:6,height:6, transition: 'opacity5s ease-in-out'}} src = {cross}/>
                                </div>
                            }
                            <p>I Agree to Privacy Policy</p>
                        </div>
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
                    <p>Already have an account?</p>
                    <button className='text-sm font-bold mt-8'>Sign In</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Login