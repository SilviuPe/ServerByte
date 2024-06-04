import React from 'react'

const Footer = () => {
  return (
    <div className='Footer flex px-m text-white pb-m'>
        <div className='contact_us w-full'>
            <h2 className='title text-center mb-s'> Contact Us</h2>
            <div className='flex justify-evenly h-full'>
                <div className='Address h-full'>
                    <h2 className='title text-center mb-x'> Address </h2>
                    <div classname = 'items-center'>
                        <div className='flex'>
                            <img></img>
                            <p>Romania</p>
                        </div>
                        <div className='flex'>
                            <img></img>
                            <p>Galati, Sendreni</p>
                        </div>
                        <div className='flex'>
                            <img></img>
                            <p>Str. Comertului Nr.23</p>
                        </div>
                    </div>
                </div>
                <div className='Contacts h-full'>
                    <h2 className='title text-center mb-x'> Contacts </h2>
                    <div className='items-center'>
                        <div className='flex'>
                            <img></img>
                            <p>Romania</p>
                        </div>
                        <div className='flex'>
                            <img></img>
                            <p>Galati, Sendreni</p>
                        </div>
                   </div>
                </div>
            </div>
        </div>
        <div className='direct_links w-full'>
            
        </div>
    </div> 
  )
}

export default Footer;