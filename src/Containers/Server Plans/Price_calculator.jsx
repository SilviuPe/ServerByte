import React, { useState, forwardRef, useImperativeHandle, useEffect } from 'react'

import IpIMG from '../../Assets/IP.png'
import NetworkIMG from '../../Assets/Network.png'
import StorageIMG from '../../Assets/Storage.png'
import RamIMG from '../../Assets/RAM.png'
import WindowsIMG from '../../Assets/Windows.png'
import CpuIMG from '../../Assets/CPU.png'
import CentosIMG from '../../Assets/Centos.png'
import UbuntuIMG from '../../Assets/Ubuntu.png'
import CustomOsIMG from '../../Assets/CustomOS.png'

import {Price_functions} from './ServerPlanFunctions.js';

import prices from './prices.json';

const Price_calculator = forwardRef((props, ref) => {
    const [price,setPrice] = useState(5);
    const price_functions = Price_functions();
    // initial configuration 
    const [configuration,setConfiguration] = useState({
        cpu: 1,
        ram: 1,
        storage: {
            type: 'HDD',
            memory: 128,
            units: "MB"
        },
        network: {
            memory: 100,
            units: "Mbps"
        },
        ip: 4,
        os: 'Windows 10',
        OSimage: WindowsIMG
    })

    useEffect(() => {
        setPrice(price_functions.update_price(prices, configuration));
    }, [configuration])

    // callback
    useImperativeHandle(ref, () => ({
        updateConfiguration(type,det) {
            setConfiguration((prevConfig) => ({
                ...prevConfig,
                [type]: det
            }))
        }
    })) 


    //change OS image when os option is changed
    useEffect(() => {
        getIMG();
    },[configuration.os])

    const getIMG = () => {
        if (configuration.os === "Windows 10") 
            setConfiguration((prevConfig) => ({
                ...prevConfig,
                OSimage: WindowsIMG
        }))

        else if (configuration.os === "Ubuntu 22.04") 
            setConfiguration((prevConfig) => ({
                ...prevConfig,
                OSimage: UbuntuIMG
        }))

        else if (configuration.os === "CentOS") setConfiguration((prevConfig) => ({
            ...prevConfig,
            OSimage: CentosIMG
        }))

        else setConfiguration((prevConfig) => ({
            ...prevConfig,
            OSimage: CustomOsIMG
        }))
    }


    return (
    <div className='Price_calculator items-center'>
        <div className='title'><h2 className='text-center font-medium mb-x'>Final Server Configuration</h2></div>
        <div className='final_configuration pl-pc3'>
            <div className='CPU flex mb-8'>
                <img src = {CpuIMG} />
                <p className='ml-x' style = {{fontSize: '14px'}}> {configuration.cpu} x vCPU (2x{configuration.cpu} threads)</p>
            </div>
            <div className='RAM flex mb-8'>
                <img src = { RamIMG }/>
                <p className='ml-x' style = {{fontSize: '14px'}}>{configuration.ram} GB RAM Memory</p>
            </div>
            <div className='Storage flex mb-8'>
                <img src = { StorageIMG }/>
                <p className='ml-x' style = {{fontSize: '14px'}}> {configuration.storage.type} {configuration.storage.memory} {configuration.storage.units} Storage</p>
            </div>
            <div className='Network flex mb-8'>
                <img src = { NetworkIMG }/>
                <p className='ml-x' style = {{fontSize: '14px'}}> {configuration.network.units === "Gbps" ? <b style = {{fontWeight: 700}}>{configuration.network.memory} {configuration.network.units}</b> : configuration.network.memory + ' ' +configuration.network.units} Network Bandwidth</p>
            </div>
            <div className='IP flex mb-8'>
                <img src = { IpIMG }/>
                <p className='ml-x' style = {{fontSize: '14px'}}> Address Type: IPv{configuration.ip}</p>
            </div>
            <div className='OS flex mb-8'>
                <img src = { configuration.OSimage }/>
                <p className='ml-x' style = {{fontSize: '14px'}}> {configuration.os}</p>
            </div>
        </div>
        <div className='final_price flex justify-end pr-m'>
            <div>
                <p className='text-center'>Final price: <b>{price}$</b></p>
                <button className='payment_button bg-background_button_color px-6 rounded-xl text-sm'>continue with payment</button>
            </div>
        </div>
    </div>
    )
})

export default Price_calculator;