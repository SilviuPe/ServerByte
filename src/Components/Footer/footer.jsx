import React from 'react'



import GlobeIMG from '../../Assets/Globe.png';
import CheckpointIMG from '../../Assets/Checkpoint.png';
import MapIMG from '../../Assets/Map.png';
import EmailIMG from '../../Assets/Mail.png';
import PhoneIMG from '../../Assets/Telephone.png';
import CustomIMG from '../../Assets/Customize.png';
import CloudIMG from '../../Assets/CloudDB.png';
import PolicyIMG from '../../Assets/Policy.png';
import SupportIMG from '../../Assets/SupportTeam.png';
import FQAIMG from '../../Assets/FAQHelp.png';
import MobileAPPIMG from '../../Assets/MobileSSH.png';


import {footer_functions} from './footer.js';


const Footer = () => {

    const functions = footer_functions();
    return (
    <div className='Footer flex px-m text-white pb-m mt-x2l
                    smPhone:max-lgPhone:px-2 smPhone:flex-col'>
        <div className='contact_us w-full
                        smPhone:max-lgPhone:mx-4'>
            <h2 className='title text-center mb-s text-lg
                            smPhone:max-lgPhone:text-sm'> Contact Us</h2>
            <div className='flex justify-evenly h-full
                                smPhone:max-lgPhone:flex-col smPhone:max-lgPhone:justify-between' style = {{color: 'rgba(255,255,255,0.7)'}}>
                <div className='Address h-full'>
                    <h2 className='title text-center mb-x
                                    smPhone:max-lgPhone:text-sm'> Address </h2>
                    <div classname = 'items-center'>
                        <div className='flex mt-pc1 items-center hover:text-white cursor-pointer'>
                            <img style = {{width:'16px', height:'16px'}} src = {GlobeIMG}></img>
                            <p className = "ml-5 text-sm">Romania</p>
                        </div>
                        <div className='flex mt-pc1 items-center hover:text-white cursor-pointer'>
                            <img style = {{width:'16px', height:'16px'}} src = {CheckpointIMG}></img>
                            <p className = "ml-5 text-sm">Galati, Sendreni</p>
                        </div>
                        <div className='flex mt-pc1 items-center hover:text-white cursor-pointer'>
                            <img style = {{width:'16px', height:'16px'}} src = {MapIMG}></img>
                            <p className = "ml-5 text-sm">Str. Comertului Nr.23</p>
                        </div>
                    </div>
                </div>
                <div className='Contacts h-full'>
                    <h2 className='title text-center mb-x
                                    smPhone:max-lgPhone:text-sm smPhone:max-lgPhone:mt-x'> Contacts </h2>
                    <div className='items-center'>
                        <div className='flex mt-pc1 hover:text-white cursor-pointer'>
                            <img style = {{width:'16px', height:'16px'}} src = {EmailIMG}></img>
                            <p className = "ml-5 text-sm">serverbyte@gmail.com</p>
                        </div>
                        <div className='flex mt-pc1 hover:text-white cursor-pointer'>
                            <img style = {{width:'16px', height:'16px'}} src = {PhoneIMG}></img>
                            <p className = "ml-5 text-sm">(+40) 743927416</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>




        <div className='direct_links w-full
                         smPhone:max-lgPhone:mx-4 smPhone:mt-m'>
            <h2 className='title text-center mb-s text-lg
                            smPhone:max-lgPhone:text-sm'> Direct Links</h2>
            <div className='flex justify-evenly h-full
                            smPhone:max-lgPhone:flex-col' style = {{color: 'rgba(255,255,255,0.7)'}}>
                <div className='Serverbyte h-full'>
                    <h2 className='title text-center mb-x
                                    smPhone:max-lgPhone:text-sm'> ServerByte </h2>
                    <div classname = 'items-center'>
                        <div className='flex mt-pc1 items-center hover:text-white cursor-pointer'>
                            <img style = {{width:'16px', height:'16px'}} src = {CustomIMG}></img>
                            <p className = "ml-5 text-sm">Custom VPS </p>
                        </div>
                        <div className='flex mt-pc1 items-center hover:text-white cursor-pointer' onClick = {functions.go_to_PLANS}>
                            <img style = {{width:'16px', height:'16px'}} src = {CloudIMG}></img>
                            <p className = "ml-5 text-sm">VPS Plans</p>
                        </div>
                        <div className='flex mt-pc1 items-center hover:text-white cursor-pointer'>
                            <img style = {{width:'16px', height:'16px'}} src = {PolicyIMG}></img>
                            <p className = "ml-5 text-sm">ServerByte Policy</p>
                        </div>
                        <div className='flex mt-pc1 items-center hover:text-white cursor-pointer'>
                            <img style = {{width:'16px', height:'16px'}} src = {MobileAPPIMG}></img>
                            <p className = "ml-5 text-sm">Mobile APP</p>
                        </div>
                    </div>
                </div>
                <div className='Customer-care h-full'>
                    <h2 className='title text-center mb-x
                                    smPhone:max-lgPhone:text-sm smPhone:max-lgPhone:mt-x'> Customer Care </h2>
                    <div className='items-center'>
                        <div className='flex mt-pc1 hover:text-white cursor-pointer'>
                            <img style = {{width:'16px', height:'16px'}} src = {SupportIMG}></img>
                            <p className = "ml-5 text-sm">Support Team</p>
                        </div>
                        <div className='flex mt-pc1 hover:text-white cursor-pointer' onClick={functions.go_to_FAQ_page}>
                            <img style = {{width:'16px', height:'16px'}} src = {FQAIMG}></img>
                            <p className = "ml-5 text-sm">FAQ Page</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div> 
    )
}

export default Footer;