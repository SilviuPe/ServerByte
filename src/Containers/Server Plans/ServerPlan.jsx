import React from 'react';

import  { useState, useEffect, useRef } from 'react';
import { Plans_functions, scroll_page_down, scroll_page_up } from './ServerPlanFunctions.js';
import { SelectionBar } from "../../Components/SelectionBar_CustomBuild/SelectionBARS.jsx";
import { Header } from '../../Components';

import OS_Selection from '../../Components/OS_Selection/OS_selection.jsx';
import Network_selection_bar from '../../Components/NetworkSelectionBar/NetworkSelectionBar.jsx';
import IP_addresses from '../../Components/IP_address_options/IP_address_options.jsx';
import SelecionBar_Storage from '../../Components/Storage_selection/Storage_selection.jsx';
import Price_calculator from './Price_calculator.jsx';

const Dropdown = () => {
        const [isOpen,setIsOpen] = useState(false);
        const priceRef = useRef(null); // Refference for final conrigutation plan section
        const firstRender = useRef(true);
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
            if (firstRender.current === true) {
                firstRender.current = false;
                console.log("FIRST RENDER");
                return;
            }
            if (isOpen)
                scroll_page_down('CUSTOM_CONFIG_DROPDOWN')
            else 
                scroll_page_up('ServerPlan_CONTAINER')
        }, [isOpen])

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
            <div className="relative pt-x text-sm " id = 'CUSTOM_CONFIG_DROPDOWN'>
                            <div className={`Dropdown mt-x text-white rounded-md transition-all duration-700 ease-out ${ isOpen ? 'opacity-100 h-full' : 'opacity-0 h-0'}`}>
                                <h2 className='dropdown_custom_title font-bold text-center text-2xl'>Customize your configuration</h2>
                                <div className='configuration_main_container flex mt-s ml-lx mr-xl transition-all duration-700' style={{ maxHeight: isOpen ? '100%' : '0', overflow : 'hidden'}}>
                                    <div className=' configuration_options flex flex-col justify-center w-full flex-1'>
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
                    <div className='CustomPlan_button_container flex mx-x3l mt-s pb-s items-center justify-center text-white text-base'>
                        <button style={{
                            borderBottomRightRadius: '2rem',
                            borderBottomLeftRadius: '2rem' }} 
                            className='flex bg-gradient-to-b from-from_custom_plan_button_color to-to_custom_plan_button_color px-s py-2'
                            onClick={toggleDropdown}
                        > { isOpen ? <> &uarr; </> : <>Custom Plan &darr;</> }</button>
                    </div>   
            </div>
        )
}

const ServerPlan = () => {
    const [opacity,setOpacity] = useState(0);
    const [plansOpacity, setPlansOpacity] = useState([0,0,0,0,0]); // Plans copacity. Every element refers to a plan opacity in the logical order
    const [selectedPlan,setSelectedPlan] = useState({
        entry : false,
        standard : false,
        premium : true,
        platinum : false,
        diamond : false
    });
    const [minimumHeight, setMinimumHeight] = useState(0);
    const plan_functions = Plans_functions();
    useEffect(() => {
        setOpacity(1);
    },[])



    // Update the plan opacity => smooth transition 

    // Opacity for bronze plan
    useEffect(() => {
        const timer_silver = setTimeout(() => {
            setPlansOpacity([100,0,0,0,0])
        }, 500)
        return () => clearTimeout(timer_silver);
    },[])

     // Opacity for silver plan
    useEffect(() => {
        const timer_silver = setTimeout(() => {
            setPlansOpacity([100,100,0,0,0])
        }, 900)
        return () => clearTimeout(timer_silver);
    },[])

     // Opacity for gold plan
    useEffect(() => {
        const timer_gold = setTimeout(() => {
            setPlansOpacity([100,100,100,0,0])
        }, 1200)
        return () => clearTimeout(timer_gold);
    },[])
    useEffect(() => {
        const timer_gold = setTimeout(() => {
            setPlansOpacity([100,100,100,100,0])
        }, 1600)
        return () => clearTimeout(timer_gold);
    },[])
    useEffect(() => {
        const timer_gold = setTimeout(() => {
            setPlansOpacity([100,100,100,100,100])
        }, 2000)
        return () => clearTimeout(timer_gold);
    },[])


    useEffect(() => {
        plan_functions.calculate_min_height_of_box(selectedPlan, setMinimumHeight);
    }, [minimumHeight])


    return (
        <>
            <Header/>        
            <div className="ServerPlan_main_container font-normal text-xl flex-1 mt-s pt-x bg-contect_bg_color" id = "ServerPlan_CONTAINER"> 
                <div className='ServerPlan_title_container items-center justify-center  mb-l'>
                    <h2 className={`text-center font-bold text-4xl text-white  opacity-${opacity}`} style={{transition: 'opacity 2s'}}>VPS Hosting Plans</h2>
                </div>
                <div className="ServerPlans flex space-x-x items-center justify-center px-s mb-m"
                        style = {{minHeight: `${minimumHeight}px`}}>
                    <div 
                        id = "entry_plan"
                        className={`cursor-pointer text-base bg-gradient-to-b to-to_plan_color from-from_plan_color text-white rounded-lg ${selectedPlan.entry ? 'pb-x' : 'pb-2'} opacity-${plansOpacity[0]}
                                    transition-all duration-500 ${ plansOpacity[0] ? selectedPlan.entry ? 'shadow-2xl-colored-plan' : "shadow-2xl-colored-plan-fade opacity-60" : ''}`} 
                            onClick = {() => {plan_functions.select_plan(setSelectedPlan,'entry')}}
                            style = {{ borderRadius: 20}}>
                        <div className='title_plan text-start mb-s bg-gradient-to-b from-from_title_plan_color to-to_title_plan_color p-8' style = {{borderBottomRightRadius: 100, borderTopLeftRadius:20, borderTopRightRadius: 20}}> Standard Plan</div>
                        <div className={`transition-all duration-900 ease-in-out ${selectedPlan.entry ? 'px-x' : ''}`}>
                            <div className={`configuration space-y-6 px-6 rounded-md border-y border-white_transparent pb-8 pt-s mx-x transition-all transition-500 ${selectedPlan.entry ? 'my-x' : ''}`}>
                                <div className='cpu'>vCPU: x2</div>
                                <div className='memory'>Memory: 2 GB</div>
                                <div className='storage'>Storage: NVMe - SSD 50 GB</div>
                                <div className='network'>Bandwidth: 1 TB</div>
                                <div className='os'>OS: Ubuntu (last version)</div>
                            </div>
                        </div>
                        <div className='pl-l pt-6 text-center mt-6 grid place-items-center'>
                            <p>Price: <b className='font-bold text-base'>5.49$ / month</b></p>
                            <div className='group ml-m mt-8'>
                                <button className={`px-8 mr-6 rounded rounded-lg text-sm text-center bg-background_button_color
                                    group-hover:bg-gradient-to-l group-hover:from-to_title_plan_color group-hover:to-from_title_plan_color
                                    transition-all duration-500 ease-in-out ${selectedPlan.entry ? 'h-auto opacity-100' : 'h-0 opacity-0'}`}>continue</button>
                            </div>    
                        </div>
                    </div>
                    <div className='line_separator'></div>
                    <div 
                        id = "standard_plan"
                        className={`cursor-pointer text-base bg-gradient-to-b to-to_plan_color from-from_plan_color text-white rounded-lg ${selectedPlan.standard ? 'pb-x' : 'pb-2'} opacity-${plansOpacity[1]}
                                    transition-all duration-500 ${ plansOpacity[1] ? selectedPlan.standard ? 'shadow-2xl-colored-plan' : "shadow-2xl-colored-plan-fade opacity-60" : ''}`} 
                            onClick = {() => {plan_functions.select_plan(setSelectedPlan,'standard')}}
                            style = {{ borderRadius: 20}}>
                        <div className='title_plan text-start mb-s bg-gradient-to-b from-from_title_plan_color to-to_title_plan_color p-8' style = {{borderBottomRightRadius: 100, borderTopLeftRadius:20, borderTopRightRadius: 20}}> Standard Plan</div>
                        <div className={`transition-all duration-900 ease-in-out ${selectedPlan.standard ? 'px-x' : ''}`}>
                            <div className={`configuration space-y-6 px-6 rounded-md border-y border-white_transparent pb-8 pt-s mx-x transition-all transition-500 ${selectedPlan.standard ? 'my-x' : ''}`}>
                                <div className='cpu'>vCPU: x4</div>
                                <div className='memory'>Memory: 8 GB</div>
                                <div className='storage'>Storage: NVMe - SSD 100 GB</div>
                                <div className='network'>Bandwidth: 3 TB</div>
                                <div className='os'>OS: Ubuntu (last version)</div>
                            </div>
                        </div>
                        <div className='pl-l pt-6 text-center mt-6 grid place-items-center'>
                            <p>Price: <b className='font-bold text-base'>12.99$ / month</b></p>
                            <div className='group ml-m mt-8'>
                                <button className={`px-8 mr-6 rounded rounded-lg text-sm text-center bg-background_button_color
                                    group-hover:bg-gradient-to-l group-hover:from-to_title_plan_color group-hover:to-from_title_plan_color
                                    transition-all duration-500 ease-in-out ${selectedPlan.standard ? 'h-auto opacity-100' : 'h-0 opacity-0'}`}>continue</button>
                            </div>    
                        </div>
                    </div>
                    <div className='line_separator'></div>
                    <div 
                        id = "premium_plan"
                        className={`cursor-pointer text-base bg-gradient-to-b to-to_plan_color from-from_plan_color text-white rounded-lg ${selectedPlan.premium ? 'pb-x' : 'pb-2'} opacity-${plansOpacity[2]}
                        transition-all duration-500 ${ plansOpacity[2] ? selectedPlan.premium ? 'shadow-2xl-colored-plan' : "shadow-2xl-colored-plan-fade opacity-60" : ''}`} 
                            onClick = {() => {plan_functions.select_plan(setSelectedPlan,'premium')}}
                            style = {{ borderRadius: 20}}>
                        <div className='title_plan text-start mb-s bg-gradient-to-b from-from_title_plan_color to-to_title_plan_color p-8' style = {{borderBottomRightRadius: 100, borderTopLeftRadius:20, borderTopRightRadius: 20}}> Premium Plan</div>
                        <div className={`transition-all duration-900 ease-in-out ${selectedPlan.premium ? 'px-x' : ''}`}>
                            <div className={`configuration space-y-6 px-6 rounded-md border-y border-white_transparent pb-8 pt-s mx-x transition-all transition-500 ${selectedPlan.premium ? 'my-x' : ''}`}>
                                <div className='cpu'>vCPU: x8</div>
                                <div className='memory'>Memory: 16 GB</div>
                                <div className='storage'>Storage: NVMe - SSD 250 GB</div>
                                <div className='network'> Bandwidth: 5 TB</div>
                                <div className='os'>OS: Ubuntu (last version)</div>
                            </div>
                        </div>
                        <div className='pl-l pt-6 text-center mt-6 grid place-items-center'>
                            <p>Price: <b className='font-bold text-base'>21.99$ / month</b></p>
                            <div className='group ml-m mt-8'>
                                <button className={`px-8 mr-6 rounded rounded-lg text-sm text-center bg-background_button_color
                                    group-hover:bg-gradient-to-l group-hover:from-to_title_plan_color group-hover:to-from_title_plan_color
                                    transition-all duration-500 ease-in-out ${selectedPlan.premium ? 'h-auto opacity-100' : 'h-0 opacity-0'}`}>continue</button>
                            </div>    
                        </div>
                    </div>
                    <div className='line_separator'></div>
                    <div 
                        id = "platinum_plan"
                        className={`cursor-pointer text-base bg-gradient-to-b to-to_plan_color from-from_plan_color text-white rounded-lg ${selectedPlan.platinum ? 'pb-x' : 'pb-2'} opacity-${plansOpacity[3]}
                        transition-all duration-500 ${ plansOpacity[3] ? selectedPlan.platinum ? 'shadow-2xl-colored-plan' : "shadow-2xl-colored-plan-fade opacity-60" : ''}`} 
                            onClick = {() => {plan_functions.select_plan(setSelectedPlan,'platinum')}}
                            style = {{ borderRadius: 20}}>
                        <div className='title_plan text-start mb-s bg-gradient-to-b from-from_title_plan_color to-to_title_plan_color p-8' style = {{borderBottomRightRadius: 100, borderTopLeftRadius:20, borderTopRightRadius: 20}}> Platinum Plan</div>
                        <div className={`transition-all duration-900 ease-in-out ${selectedPlan.platinum ? 'px-x' : ''}`}>
                            <div className={`configuration space-y-6 px-6 rounded-md border-y border-white_transparent pb-8 pt-s mx-x transition-all transition-500 ${selectedPlan.platinum ? 'my-x' : ''}`}>
                                <div className='cpu'>vCPU: x16</div>
                                <div className='memory'>Memory: 32 GB</div>
                                <div className='storage'>Storage: NVMe - SSD 500 GB</div>
                                <div className='network'>Bandwidth: 10 TB</div>
                                <div className='os'>OS: Ubuntu (last version)</div>
                            </div>
                        </div>
                        <div className='pl-l pt-6 text-center mt-6 grid place-items-center'>
                            <p>Price: <b className='font-bold text-base'>48.99$ / month</b></p>
                            <div className='group ml-m mt-8'>
                                <button className={`px-8 mr-6 rounded rounded-lg text-sm text-center bg-background_button_color
                                    group-hover:bg-gradient-to-l group-hover:from-to_title_plan_color group-hover:to-from_title_plan_color
                                    transition-all duration-500 ease-in-out ${selectedPlan.platinum ? 'h-auto opacity-100' : 'h-0 opacity-0'}`}>continue</button>
                            </div>    
                        </div>
                    </div>
                    <div className='line_separator'></div>
                    <div 
                        id = "diamond_plan"
                        className={`cursor-pointer text-base bg-gradient-to-b to-to_plan_color from-from_plan_color text-white rounded-lg ${selectedPlan.diamond ? 'pb-x' : 'pb-2'} opacity-${plansOpacity[4]}
                        transition-all duration-500 ${ plansOpacity[4] ? selectedPlan.diamond ? 'shadow-2xl-colored-plan' : "shadow-2xl-colored-plan-fade opacity-60" : ''}`} 
                            onClick = {() => {plan_functions.select_plan(setSelectedPlan,'diamond')}}
                            style = {{ borderRadius: 20}}>
                        <div className='title_plan text-start mb-s bg-gradient-to-b from-from_title_plan_color to-to_title_plan_color p-8' style = {{borderBottomRightRadius: 100, borderTopLeftRadius:20, borderTopRightRadius: 20}}> Diamond Plan</div>
                        <div className={`transition-all duration-900 ease-in-out ${selectedPlan.diamond ? 'px-x' : ''}`}>
                            <div className={`configuration space-y-6 px-6 rounded-md border-y border-white_transparent pb-8 pt-s mx-x transition-all transition-500 ${selectedPlan.diamond ? 'my-x' : ''}`}>
                                <div className='cpu'>vCPU: x24</div>
                                <div className='memory'>Memory: 32 GB</div>
                                <div className='storage'>Storage: NVMe - SSD 500 GB</div>
                                <div className='network'>Bandwidth: Unlimited</div>
                                <div className='os'>OS: Ubuntu (last version)</div>
                            </div>
                        </div>
                        <div className='pl-l pt-6 text-center mt-6 grid place-items-center'>
                            <p>Price: <b className='font-bold text-base'>69.99$ / month</b></p>
                            <div className='group ml-m mt-8'>
                                <button className={`px-8 mr-6 rounded rounded-lg text-sm text-center bg-background_button_color
                                    group-hover:bg-gradient-to-l group-hover:from-to_title_plan_color group-hover:to-from_title_plan_color
                                    transition-all duration-500 ease-in-out ${selectedPlan.diamond ? 'h-auto opacity-100' : 'h-0 opacity-0'}`}>continue</button>
                            </div>    
                        </div>
                    </div>
                </div>
                <Dropdown/> 
            </div>        
        </>
    )
}

export default ServerPlan;