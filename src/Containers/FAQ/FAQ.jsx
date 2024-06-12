import React from 'react'

import { Header, Question } from '../../Components';

import Lottie from 'lottie-react';
import animationData from '../../Assets/FAQ_animation.json';


const FAQ = () => {
    return (
        <div className='Frequently_Asked_Questions_page'>
            <Header/>
            <div className='faq-section flex mx-x2l mt-xl mb-xl rounded rounded-3xl text-white'>
                <div className='introduction_container bg-split_screen_layout_background_color w-full p-s'>
                    <div className='introduction_text'>
                        <h1 className='font-semibold text-xl'>Have any questions?</h1>
                        <p className='text-sm mt-6'>Now, you can search in our FAQ section for answers.</p>
                    </div>
                    <div className='introduction_image flex justify-center items-center my-xl'>
                        <Lottie animationData={animationData} loop = {true} style={{width:300}}/>
                    </div>
                </div>
                <div className='bg-custom-img-split-screen-page bg-cover w-full'>
                    <div className='title mt-s'> 
                        <h1 className='font-bold text-2xl text-center'>Frequently Asked Question</h1>
                    </div>
                    <div className='questions_list mt-m grid place-items-center'>
                        <Question question = 'What is a VPS?' answer = "What is a virtual private server (VPS)? A virtual private server is an isolated environment created on a physical server using virtualisation technology. This solution offers all the advantages of a standard server, with allocated resources and full admin access."/>
                        <Question question = 'How to access mobile SSH?'/>
                        <Question question = 'How do we make custom builds?'/>
                        <Question question = 'How can I contact the support team?'/>
                        <Question question = 'What payments method do we have?'/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FAQ