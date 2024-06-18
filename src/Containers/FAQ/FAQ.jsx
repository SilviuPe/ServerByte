import React from 'react'

import { Header, Question } from '../../Components';

import Lottie from 'lottie-react';
import animationData from '../../Assets/FAQ_animation.json';

import question_data from './Questions.json';


const FAQ = () => {
    return (
        <div className='Frequently_Asked_Questions_page'>
            <Header/>
            <div className='faq-section flex mx-xl mt-xl h-pc6 rounded rounded-3xl text-white'>
                <div className='introduction_container bg-gradient-to-b from-[#0B0038] to-[#413B58] w-full p-s h-pc6' style = {{height:600}}>
                    <div className='introduction_text'>
                        <h1 className='font-semibold text-xl'>Have any questions?</h1>
                        <p className='text-sm mt-6'>Now, you can search in our FAQ section for answers.</p>
                    </div>
                    <div className='introduction_image flex justify-center items-center my-xl'>
                        <Lottie animationData={animationData} loop = {true} style={{width:200}}/>
                    </div>
                </div>
                <div className='bg-custom-img-split-screen-faq-page bg-cover w-full' style = {{height:600}}>
                    <div className='title mt-s'> 
                        <h1 className='font-bold text-2xl text-center'>Frequently Asked Question</h1>
                    </div>
                    <div className='questions_list mt-m flex justify-center' style = {{height:400}}>
                        <div className='w-pc8 overflow-y-scroll'>
                        {
                            question_data.map((q) => (
                                <Question question = {q.question} answer = {q.answer} id = {q.id}/>
                            ))
                        }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FAQ