import React, { useState, useEffect } from 'react'
import Lottie from 'lottie-react';
import animationData from '../../Assets/Animation.json';


const OurMission = () => {

    const [opacity,setOpacity] = useState([0,0]);

    useEffect(() => {
        const timer = setTimeout(() => {
            setOpacity([100,100])
        }, 300)
        return () => clearTimeout(timer);
    }, [])

    return (
    <div className={`OurMission bg-contect_bg_color text-white pt-l px-x3l flex pb-m 
                    smPhone:px-x`}>
        <div className={`relative flex-1 flex items-center justify-center transition-all duration-1000 ease-in-out transform opacity-${opacity[0]} ${opacity[0] ? 'left-0' : 'left-[-200px]'}`}>
            <div>
                <div className='title'>
                    <h1 className='text-8xl font-bold 
                                    smPhone:text-2xl smPhone:text-center'>
                        <span>Affordable</span> <br/>
                        <span> VPS hosting</span> <br/>
                        <span> provider</span></h1>
                </div>
                <div className='description mt-s
                                smPhone: text-center'>
                    <p>ServerByte provide you the best virtual private servers in terms of quality-price ratio and many useful features like custom build and mobile access to the server.</p>
                </div>
            </div>
        </div>
        <div className={`relative animation flex-1 items-center justify-center transition-all duration-1000 ease-in-out opacity-${opacity[1]} ${opacity[1] ? 'top-0' : 'top-[-200px]'}
                        smPhone:hidden`}>
            <Lottie animationData={animationData} loop={true}/>
        </div>
    </div>
    )
}

export default OurMission