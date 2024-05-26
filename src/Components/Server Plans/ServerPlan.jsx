import React from 'react'
//import './ServerPlan.css';
import  { useState, useEffect, useRef } from 'react';
import { scroll_page_down, scroll_page_up, calculate_horizontal_position } from './ServerPlanFunctions.js';
import { SelectionBar, SelecionBar_Storage } from "../SelectionBar_CustomBuild/SelectionBARS.jsx";



const Dropdown = () => {
        const [isOpen,setIsOpen] = useState(false);


        useEffect(() => {
            if (isOpen)
                scroll_page_down()
            else 
                scroll_page_up()
        })


        const toggleDropdown = () => {
            setIsOpen(!isOpen);
        }
        return (
            <div className="relative">
                            <div className={`Dropdown mt-8 text-white rounded-md shadow-md transition-all duration-700 ease-out ${ isOpen ? 'opacity-100 h-full' : 'opacity-0 h-0'}`}>
                                <h2 className='dropdown_custom_title font-bold text-center text-2xl'>Customize your configuration</h2>
                                <div className='configuration_main_container flex mt-m mx-x3l transition-all duration-700' style={{ maxHeight: isOpen ? '100%' : '0', overflow : 'hidden'}}>
                                    <div className=' configuration_options justify-center w-full items-center flex-2 mr-x3l'>
                                        <SelectionBar title = "CPUs: " type = 'cpu'/>
                                        <SelectionBar title = "RAM Memory:" type = 'ram'/>
                                        <SelecionBar_Storage/>
                                        <SelectionBar title = "Network Speed: "/>
                                        <div className='my-4'>Operating System:</div>
                                        <div className='my-4'>IP Address Type:</div>
                                    </div>
                                    <div className='flex-1 final_configuration justify-center w-full'>
                                        asd
                                    </div>
                                </div>
                            </div> 
                    <div className='CustomPlan_button_container flex mx-x3l mt-s pb-s items-center justify-center text-white'>
                        <button style={{
                            borderTopLeftRadius: '1rem',
                            borderTopRightRadius: '1rem',
                            borderBottomRightRadius: '2rem',
                            borderBottomLeftRadius: '2rem' }} 
                            className='flex bg-background_buttons_color px-s py-1'
                            onClick={toggleDropdown}
                        > { isOpen ? <> &uarr; </> : <>Custom Plan &darr;</> }</button>
                    </div>   
            </div>
        )
}

const ServerPlan = () => {
    const [opacity,setOpacity] = useState(0);
    const [plansOpacity, setPlansOpacity] = useState([0,0,0]);

    useEffect(() => {
        setOpacity(1);
    },[])

    useEffect(() => {
        const timer_silver = setTimeout(() => {
            setPlansOpacity([100,0,0])
        }, 1000)
        return () => clearTimeout(timer_silver);
    },[])

    useEffect(() => {
        const timer_silver = setTimeout(() => {
            setPlansOpacity([100,100,0])
        }, 1500)
        return () => clearTimeout(timer_silver);
    },[])

    useEffect(() => {
        const timer_gold = setTimeout(() => {
            setPlansOpacity([100,100,100])
        }, 1900)
        return () => clearTimeout(timer_gold);
    },[])

  return (
    <div className={`ServerPlan_main_container font-extralight`}> 
        <div className='ServerPlan_title_container items-center justify-center mt-xl mb-xl'>
            <h2 className={`text-center font-bold text-2xl text-white  opacity-${opacity}`} style={{transition: 'opacity 2s'}}>Server Plans</h2>
        </div>
        <div className="ServerPlans flex space-x-xl items-center justify-center">
            <div className={`bronze_plan text-bronze_color border-2 border-transparent hover:border-bronze_color 
            transition duration-300 ease-in-out p-s rounded-lg
            opacity-${plansOpacity[0]}`} style = {{transition: 'opacity 1.5s'}}>
                <div className='title_plan text-center mb-s'> Bronze Plan</div>
                <div className='configuration space-y-6 px-6 rounded-md border-y border-bronze_color pb-8 pt-s'>
                    <div className='cpu'>vCPU: x1</div>
                    <div className='memory'>Memory: 1 GB</div>
                    <div className='storage'>Storage: NVMe - SSD 256 GB</div>
                    <div className='network'>Network Speed: 100 Mbps</div>
                    <div className='os'>OS: Ubuntu (last version)</div>
                </div>
                <div className='pl-s pt-6 text-center mt-6'> <p>Price: <b className='font-bold text-2'>4.99$ / month</b></p></div>
            </div>
            <div className='line_separator'></div>
            <div className={`silver_plan text-silver_color border-2 border-transparent hover:border-silver_color 
            transition duration-300 ease-in-out p-s rounded-lg
            opacity-${plansOpacity[1]}`} style = {{transition: 'opacity 1.5s'}}>
                <div className='title_plan text-center mb-s'> Silver Plan</div>
                <div className='configuration space-y-6 px-6 rounded-md border-y border-silver_color pb-8 pt-s '>
                    <div className='cpu'>vCPU: x2</div>
                    <div className='memory'>Memory: 4 GB</div>
                    <div className='storage'>Storage: NVMe - SSD 500 GB</div>
                    <div className='network'>Network Speed: 1 Gbps</div>
                    <div className='os'>OS: Ubuntu (last version)</div>
                </div>
                <div className='pl-s pt-6 text-center mt-6'> <p>Price: <b className='font-bold'>49.99$ / month</b></p></div>
            </div>
            <div className='line_separator'></div>
            <div className={`gold_plan text-gold_color border-2 border-transparent hover:border-gold_color 
            transition duration-300 ease-in-out p-s rounded-lg
            opacity-${plansOpacity[2]}`} style = {{transition: 'opacity 1.5s'}}>
                <div className='title_plan text-center mb-s'> Gold Plan</div>
                <div className='configuration space-y-6 px-6 rounded-md border-y border-gold_color pb-8 pt-s'>
                    <div className='cpu'>vCPU: x4</div>
                    <div className='memory'>Memory: 8 GB</div>
                    <div className='storage'>Storage: NVMe - SSD 1 TB</div>
                    <div className='network'>Network Speed: 5 Gbps</div>
                    <div className='os'>OS: Ubuntu (last version)</div>
                </div>
                <div className='pl-s pt-6 text-center mt-6'> <p>Price: <b className='font-bold text-2'>199.99$ / month</b></p></div>
            </div>
        </div>
        <Dropdown/>
    </div>
  )
}

export default ServerPlan;