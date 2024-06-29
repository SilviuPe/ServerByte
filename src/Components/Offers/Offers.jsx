import React, { useState, useEffect } from 'react';

import CustomIMG from '../../Assets/Customize.png';
import SupportIMG from '../../Assets/SupportTeam.png';
import MobileIMG from '../../Assets/MobileSSH.png';
import UnlimitedTrafficIMG from '../../Assets/UnlimitedNetwork.png';
import BestPricesIMG from '../../Assets/UnbeatablePrices.png';
import Lottie from 'lottie-react';


import HomePageIMG from '../../Assets/HomepageVPS.png';


function Mission() {

    const [opacity, setOpacity] = useState(0); 

    useEffect(() => {
      const timer = setTimeout(() => {
        setOpacity(100);
      }, 1000 )
      return () => clearTimeout(timer);
    },[])

    return (
      <div className='Services flex flex-col justify-center items-center text-white mt-xl
                      smPhone:max-lgPhone:mt-x'>
        <h1 className='Title text-3xl font-semibold mt-xl mb-xl
                        smPhone:max-lgPhone:text-xl smPhone:max-lgPhone:mb-x smPhone:max-lgPhone:mt-x'>Explore Our Services</h1>
        <div className='Support flex flex-col justify-center items-center mt-xl text-2xl font-extralight mx-xl
                        smPhone:max-lgPhone:text-base smPhone:max-lgPhone:mx-x'>
          <div className='Support Points'>
            <p className='longTitle text-center'><span className='font-normal'>ServerByte</span> offers 24/7 support to ensure continuous acces to professinal assistance, convering 
            a wide range of tehnical support and operational needs.</p>
            <div className='ml-m
                            smPhone:max-lgPhone:ml-0'>
              <h1 className='Subtitle font-semibold mt-xl'>Tehnical Assistance:</h1>
              <ul className='SupportList list-disc text-xl ml-m mt-s space-y-6
                              smPhone:max-lgPhone:text-base smPhone:max-lgPhone:ml-x'>
                <li><span className='font-semibold'>Troubleshooting:</span> Help with performance, connectivity and configuration issues.</li>
                <li><span className='font-semibold'>Expert solutions:</span> Well-trained professionals in VPS hosting.</li>
                <li><span className='font-semibold'>Multiple Options:</span> Support via email and phone, catering to user preferences.</li>
              </ul>
            </div>
          </div>
        </div>
        <div className='Mobile_Access flex flex-col justify-center items-center mt-xl text-2xl font-extralight mx-xl
                        smPhone:max-lgPhone:mt-l text-base smPhone:max-lgPhone:mx-x'>
          <div className='Mobile_Access Points'>
            <p className='longTitle text-center'><span className='font-normal'>ServerByte</span> offers secure mobile SSH access, allowing you to connect to your servers directly
                            from your mobile device. This feature provides flexibility for system administrators 
                            and developers to manage infrastructure tasks on the go.</p>
            <div className='ml-m
                            smPhone:max-lgPhone:ml-0'>
              <h1 className='Subtitle font-semibold mt-xl'>Mobile SSH Access:</h1>
              <ul className='SupportList list-disc text-xl ml-m mt-s space-y-6
                              smPhone:max-lgPhone:text-base smPhone:max-lgPhone:ml-x'>
                <li><span className='font-semibold'>Secure Connectivity:</span> Connect to your VPS securely from anywhere, ensuring data protection with robust encryption protocols.</li>
                <li><span className='font-semibold'>Flexibility and Convenience:</span> Manage server infrastructure without being tied to a desktop, ideal for travel or remote work.</li>
                <li><span className='font-semibold'>Critical Task Management:</span> Execute commands, monitor performance, and troubleshoot issues in real-time to maintain service reliability.</li>
                <li><span className='font-semibold'>User-Friendly Interface:</span> Intuitive design for easy navigation of command-line interfaces, simplifying remote management.</li>
              </ul>
            </div>
          </div>
        </div>
        <div className='Separator-line w-pc8 pb-l' style = {{borderBottom: '2px solid white'}}></div>
        <div className='Custom-vps text-2xl font-extralight mx-x2l flex flex-col justify-center items-center mt-x2l
                        smPhone:max-lgPhone:mx-x mt-xl text-base'>
          <p className='text-center'><span className='font-semibold'>ServerByte</span> offers customizable VPS builds at affordable prices. Tailor your environment with ease
          to meet specific requirements, ensuring your setup aligns perfectly with your needs.</p>
        </div>
        <div className='grid grid-cols-3 grid-rows-3 gap-8 mt-xl place-items-center text-2xl font-extralight 
                        smPhone:max-lgPhone:text-base smPhone:max-lgPhone:flex smPhone:max-lgPhone:flex-col smPhone:max-lgPhone:mx-x'>
          <div className='col-start-1 col-end-2 row-start-1 row-span-1'>
            <p><span className='font-semibold'>High-Performance CPUs:</span> Featuring
                Intel Xeon v4 processors for
                superior performance.</p>
          </div>
          <div className='col-start-1 col-end-2 row-start-3 row-span-1'>
            <p><span className='font-bold'>Ample RAM:</span> Options for
                various RAM capacities
                to match your workload demands.</p>
          </div>
          <div className='col-start-2 col-end-3 row-start-2 row-span-1
                          smPhone:max-lgPhone:hidden'>
            <img src = {HomePageIMG} style= {{width:400}}/>
          </div>
          <div className='col-start-3 col-span-1 row-start-1 row-span-1'>
            <p><span className='font-bold'>Quality Internet Connectivity:</span> High-speed and stable internet connections to 
            ensure seamless operations.</p>
          </div>
          <div className='col-start-3 col-span-1 row-start-3 row-span-1'>
            <p><span className='font-bold'>Flexible Storage Solutions:</span> SSD 
            storage options for fast and reliable data access.</p>
          </div>
        </div>
        <div className='Separator-line w-pc7 pb-m' style = {{borderBottom: '2px solid white'}}></div>
        <div className='Conclusion mx-x2l mt-x2l
                        smPhone:max-lgPhone:mx-x smPhone:max-lgPhone:mt-s'>
          <p className='text-2xl font-extralight text-center
                          smPhone:max-lgPhone:text-base'> At <span className='font-semibold'>ServerByte</span>, our mission is to democratize access to advanced technology for all. We prioritize 
                delivering exceptional value through our carefully crafted pricing model, ensuring high-quality server
                management tools without compromising on performance or security. Transparency is at the heart of
                our approach, allowing our customers to plan with confidence and avoid unexpected costs.</p>
        </div>
      </div>
    );
}

export default Mission;