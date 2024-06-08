import React from 'react';

import CustomIMG from '../../Assets/Customize.png';
import SupportIMG from '../../Assets/SupportTeam.png';
import MobileIMG from '../../Assets/MobileSSH.png';
import UnlimitedTrafficIMG from '../../Assets/UnlimitedNetwork.png';
import BestPricesIMG from '../../Assets/UnbeatablePrices.png';


function Mission() {
  return (
      <div className='Mission_content px-m text-white pt-xl bg-contect_bg_color'>
        <div className='title mb-l'>
          <h2 className='font-semibold text-4xl text-center'>Explore Our Services</h2>
        </div>
        <div className='services flex px-x2l justify-between'>
          <div className='custom_build w-pc3 px-x bg-content_bg_darker_color shadow-2xl-colored-fade py-x rounded-xl mx-s transition-all transition-700 hover:shadow-2xl-colored-bright'>
            <div className='flex'>
                <img style = {{width:'20px', height:'20px'}} src = {CustomIMG}/>
                <h3 style = {{fontWeight: 500, paddingLeft: '5%'}}><span className = "cursor-pointer no-underline hover:underline">Custom Build</span></h3>
              </div>
            <div className='description mt-x'>
              <p className='text-lg'>Server Byte provides you with the opportunity to select a custom build at an affordable price. 
                With just a few clicks, you can configure your environment to meet your specific needs.
              </p>
            </div>
          </div>
          <div className='support w-pc3 px-x bg-content_bg_darker_color shadow-2xl-colored-fade py-x rounded-xl mx-s transition-all transition-700 hover:shadow-2xl-colored-bright'>
            <div className='flex'>
              <img style = {{width:'20px', height:'20px'}} src = {SupportIMG}/>
              <h3 style = {{fontWeight: 500, paddingLeft: '5%'}}><span className = "cursor-pointer no-underline hover:underline">Support 24/7</span></h3>
            </div>
            <div className='description mt-x'>
              <p className='text-lg'> Server Byte offers exceptional customer support, available around the clock. 
                Our team is ready to assist you 24/7 with configuration choices, server management, 
                and billing inquiries. You can reach us via phone, email, or our live chat platform.
              </p>
            
            </div>
          </div>
          <div className='unlimited traffic w-pc3 px-x bg-content_bg_darker_color shadow-2xl-colored-fade py-x rounded-xl mx-s transition-all transition-700 hover:shadow-2xl-colored-bright'>
            <div className='flex'>
                <img style = {{width:'20px', height:'20px'}} src = {UnlimitedTrafficIMG}/>
                <h3 style = {{fontWeight: 500, paddingLeft: '5%'}}><span className = "cursor-pointer no-underline hover:underline">Unlimited Traffic</span></h3>
            </div>
            <div className='description mt-x'>
              <p className='text-lg'>Our servers come with unlimited traffic capabilities, allowing you to transfer data without any restrictions. 
                This ensures you can handle as much data as necessary for your operations.
              </p>
            </div>
          </div>
        </div>
        <div className='services_row_2 flex px-x3l justify-center mt-m'>
          <div className='mobile_ssh w-pc3 px-x bg-content_bg_darker_color shadow-2xl-colored-fade py-x rounded-xl mx-s transition-all transition-700 hover:shadow-2xl-colored-bright'>
            <div className='flex'>
              <img style = {{width:'20px', height:'20px'}} src = {MobileIMG}/>
              <h3 style = {{fontWeight: 500, paddingLeft: '5%'}}><span className = "cursor-pointer no-underline hover:underline">Mobile SSH</span></h3>
            </div>
            <div className='description mt-x'>
              <p className='text-lg'>With ServerByte, you can securely connect to your servers using SSH directly from your mobile device. 
              This feature ensures that you have the flexibility to perform critical 
              tasks and manage your infrastructure on the go.
              </p>
            </div>
          </div>
          <div className='affordability w-pc3 px-x bg-content_bg_darker_color shadow-2xl-colored-fade py-x rounded-xl mx-xl transition-all transition-700 hover:shadow-2xl-colored-bright'>
            <div className='flex'>
              <img style = {{width:'20px', height:'20px'}} src = {BestPricesIMG}/>
              <h3 style = {{fontWeight: 500, paddingLeft: '5%'}}><span className = "cursor-pointer no-underline hover:underline">Unbeatable Affordability</span></h3>
            </div>
            <div className='description mt-x'>
              <p className='text-lg'> At ServerByte, we believe that cutting-edge technology should be accessible to everyone. 
              Our pricing model is designed to offer exceptional value, 
              making high-quality server management tools affordable without compromising on performance or security. 
              </p>
            </div>
          </div>
        </div>
      </div>
  );
}

export default Mission;