import React from 'react'

import  { useState, useEffect, useRef } from 'react';
import { scroll_page_down, scroll_page_up } from './ServerPlanFunctions.js';
import { SelectionBar } from "../SelectionBar_CustomBuild/SelectionBARS.jsx";


import OS_Selection from '../OS_Selection/OS_selection.jsx';
import Network_selection_bar from '../NetworkSelectionBar/NetworkSelectionBar.jsx';
import IP_addresses from '../IP_address_options/IP_address_options.jsx';
import SelecionBar_Storage from '../Storage_selection/Storage_selection.jsx';
import  Price_calculator  from './Price_calculator.jsx';


const Dropdown = () => {
        const [isOpen,setIsOpen] = useState(false);

        const priceRef = useRef(null); // Refference for final conrigutation plan section

        // The configuration state
        const [configuration,setConfiguration] = useState({
            cpu: 1,
            ram: 1,
            storage: {
                type: 'hdd',
                memory: 128
            },
            network: '100MB',
            ip: 4,
            os: 'windows'
        })


        // useEffect hook for every render for the dropdown
        useEffect(() => {
            if (isOpen)
                scroll_page_down('CUSTOM_CONFIG_DROPDOWN')
            else 
                scroll_page_up('ServerPlan_CONTAINER')
        })

        // When the dropdown button (Custom Plan) is clicked this function is called 
        const toggleDropdown = () => {
            setIsOpen(!isOpen);
        }

        // CALLBACK function for every option in configuration. 
        // This is called when the configuration is modified, so the FINAL CONFIGURATION PRICE is updated.
        const updateConfiguration = (type, details) => {
            priceRef.current.updateConfiguration(type,details); // Access the function from final configuration section which update the configuration
    
        }

        return (
            <div className="relative pt-x" id = 'CUSTOM_CONFIG_DROPDOWN'>
                            <div className={`Dropdown mt-x text-white rounded-md shadow-md transition-all duration-700 ease-out ${ isOpen ? 'opacity-100 h-full' : 'opacity-0 h-0'}`}>
                                <h2 className='dropdown_custom_title font-bold text-center text-2xl'>Customize your configuration</h2>
                                <div className='configuration_main_container flex mt-s ml-x2l mr-xl transition-all duration-700' style={{ maxHeight: isOpen ? '100%' : '0', overflow : 'hidden'}}>
                                    <div className=' configuration_options flex flex-col justify-center w-full flex-1 pr-x'>
                                        <div>
                                            <SelectionBar title = "CPUs: " type = 'cpu' callback = {updateConfiguration}/>
                                            <SelectionBar title = "RAM Memory:" type = 'ram' callback = {updateConfiguration}/>
                                            <SelecionBar_Storage callback = {updateConfiguration}/>
                                            <Network_selection_bar callback = {updateConfiguration}/>
                                            <IP_addresses callback = {updateConfiguration}/>
                                            <OS_Selection callback = {updateConfiguration}/>
                                        </div>
                                    </div>
                                    <div className='flex-1 final_configuration justify-center w-full flex-2'>
                                        <Price_calculator ref={priceRef}/>
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
    const [plansOpacity, setPlansOpacity] = useState([0,0,0]); // Plans copacity. Every element refers to a plan opacity in the logical order



    useEffect(() => {
        setOpacity(1);
    },[])



    // Update the plan opacity => smooth transition 

    // Opacity for bronze plan
    useEffect(() => {
        const timer_silver = setTimeout(() => {
            setPlansOpacity([100,0,0])
        }, 1000)
        return () => clearTimeout(timer_silver);
    },[])

     // Opacity for silver plan
    useEffect(() => {
        const timer_silver = setTimeout(() => {
            setPlansOpacity([100,100,0])
        }, 1500)
        return () => clearTimeout(timer_silver);
    },[])

     // Opacity for gold plan
    useEffect(() => {
        const timer_gold = setTimeout(() => {
            setPlansOpacity([100,100,100])
        }, 1900)
        return () => clearTimeout(timer_gold);
    },[])



  return (
    <div className="ServerPlan_main_container font-extralight flex-1 pt-x" id = "ServerPlan_CONTAINER"> 
        <div className='ServerPlan_title_container items-center justify-center mt-xl mb-xl'>
            <h2 className={`text-center font-bold text-2xl text-white  opacity-${opacity}`} style={{transition: 'opacity 2s'}}>Standard Server Plans</h2>
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
                    <div className='network'>Network Bandwidth: 100 Mbps</div>
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
                    <div className='network'>Network Bandwidth: 1 Gbps</div>
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
                    <div className='network'>Network Bandwidth: 5 Gbps</div>
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