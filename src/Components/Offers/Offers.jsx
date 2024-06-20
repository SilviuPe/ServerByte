import React, { useState, useEffect } from 'react';

import CustomIMG from '../../Assets/Customize.png';
import SupportIMG from '../../Assets/SupportTeam.png';
import MobileIMG from '../../Assets/MobileSSH.png';
import UnlimitedTrafficIMG from '../../Assets/UnlimitedNetwork.png';
import BestPricesIMG from '../../Assets/UnbeatablePrices.png';
import Lottie from 'lottie-react';


import supportAnimationData from '../../Assets/supportAnimation.json';
import mobileAnimationData from '../../Assets/mobileAnimation.json';
import customAnimationData from '../../Assets/customAnimation.json';
import affordableAnimationData from '../../Assets/affordableAnimation.json';
import trafficAnimationData from '../../Assets/trafficAnimation.json';

const InfoField = ({description_side, animation, description}) => {

    const components = [
      <div className={`Animation flex-1 w-full flex justify-center ${ description_side === 'r' ? 'pr-x2l' : 'pl-x2l'}`}>
        <Lottie style = {{width: 300}} animationData={animation} loop={true}/>
      </div>,

      <div className={`Description flex-1 w-full flex justify-center text-2xl ${ description_side === 'r' ? 'pl-x2l' : 'pr-x2l'}`}>
        <p className='px-l text-center'>{description}</p>
      </div>
    ];

    return (
      <>
          <div className='InfoField flex items-center justify-center mt-x2l'>
              { description_side === 'l' ? components : components.reverse()}
          </div>
      </>
    )
}

function Mission() {

    const [opacity, setOpacity] = useState(0); 

    useEffect(() => {
      const timer = setTimeout(() => {
        setOpacity(100);
      }, 1000 )
      return () => clearTimeout(timer);
    },[])

    return (
    <div className={`Mission_content relative px-m mt-l text-white pt-xl bg-contect_bg_color transition-all duration-1000 ease-in-out transform opacity-${opacity} ${opacity ? 'bottom-0' : 'bottom-[-200px]'}`}>
      <div className='title mb-l'>
        <h2 className='font-semibold text-5xl text-center'>Explore Our Services</h2>
      </div>
      <InfoField description_side = 'r' animation = {supportAnimationData} description = "Server Byte offers exceptional customer support, available around the clock. Our team is ready to assist you 24/7 with configuration choices, server management, and billing inquiries. You can reach us via phone, email, or our live chat platform."/>
      
      <InfoField description_side = 'l' animation = {mobileAnimationData} description = "With ServerByte, you can securely connect to your servers using SSH directly from your mobile device. This feature ensures that you have the flexibility to perform critical tasks and manage your infrastructure on the go."/>
      
      <InfoField description_side = 'r' animation = {customAnimationData} description = "Server Byte provides you with the opportunity to select a custom build at an affordable price. With just a few clicks, you can configure your environment to meet your specific needs."/>

      <InfoField description_side = 'l' animation = {affordableAnimationData} description = "At ServerByte, we believe that cutting-edge technology should be accessible to everyone. Our pricing model is designed to offer exceptional value, making high-quality server management tools affordable without compromising on performance or security. "/>
    
      <InfoField description_side = 'r' animation = {trafficAnimationData} description = "Our servers come with unlimited traffic capabilities, allowing you to transfer data without any restrictions. This ensures you can handle as much data as necessary for your operations."/>
    </div>
    );
}

export default Mission;