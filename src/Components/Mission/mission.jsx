import React from 'react'
import Lottie from 'lottie-react';
import animationData from '../../Assets/Animation.json';


const OurMission = () => {
  return (
    <div className='OurMission bg-contect_bg_color text-white pt-l px-x3l flex pb-m'>
        <div className='flex-1 flex items-center justify-center'>
            <div>
                <div className='title'>
                    <h1 className='text-8xl font-bold'>
                        <span>Affordable</span> <br/>
                        <span> VPS hosting</span> <br/>
                        <span> provider</span></h1>
                </div>
                <div className='description mt-s'>
                    <p>ServerByte provide you the best virtual private servers in terms of quality-price ratio and many useful features like custom build and mobile access to the server.</p>
                </div>
            </div>
        </div>
        <div className='animation flex-1 items-center justify-center'>
            <Lottie animationData={animationData} loop={true}/>
        </div>
    </div>
  )
}

export default OurMission