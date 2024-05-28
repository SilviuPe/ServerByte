import { calculate_horizontal_position, enable_HDD, enable_SATA, enable_SSD } from "./SelectionBar_functions.js";

import React, { useState, useRef } from 'react';





export const IP_addresses = () => {

    const [selectedItem, setSelectedItem] = useState({
        ipv4: 100,
        ipv6: 50,
    });

    const enable_v4 = () => {
        setSelectedItem({
            ipv4: 100,
            ipv6: 50,
        })
    }

    const enable_v6 = () => {
        setSelectedItem({
            ipv4: 50,
            ipv6: 100,
        })
    }


    return (
        <div className="IP_label flex w-full mt-6">
            <div className="Title w-pc2 flex-2"><h2>IP Address Type:</h2></div>
            <div className="IP_type_options  flex flex-1 justify-start items-center">
                <div onClick = {enable_v4} className = "ipv4-option cursor-pointer flex bg-white px-s py-0 rounded-lg items-center justify-center" style = {{opacity: `${selectedItem.ipv4}%`}} ><p className="text-black py-0" style = {{fontSize: '10px', fontWeight: 500, borderRadius: '15px'}} >IPv4</p></div>
                <div onClick = {enable_v6} className = "ipv6-option cursor-pointer flex bg-white px-s py-0 ml-s rounded-lg items-center justify-center" style = {{opacity: `${selectedItem.ipv6}%`}} ><p className="text-black py-0" style = {{fontSize: '10px', fontWeight: 500, borderRadius: '15px'}} >IPv6</p></div>
            </div>
        </div>
    )

}



export const OS_Selection = () => {
    const [selectedItem, setSelectedItem] = useState({
        windwos: 100,
        ubuntu: 50,
        centos: 50,
        custom: 50
    });

    const enable_windows = () => {
        setSelectedItem({
            windwos: 100,
            ubuntu: 50,
            centos: 50,
            custom: 50
        })
    }

    const enable_ubuntu = () => {
        setSelectedItem({
            windwos: 50,
            ubuntu: 100,
            centos: 50,
            custom: 50
        })
    }

    const enable_centos = () => {
        setSelectedItem({
            windwos: 50,
            ubuntu: 50,
            centos: 100,
            custom: 50
        })
    }

    const enable_custom = () => {
        setSelectedItem({
            windwos: 50,
            ubuntu: 50,
            centos: 50,
            custom: 100
        })
    }

    return (
        <div className="OS_label flex w-full mt-6">
            <div className="Title w-pc2 flex-2 whitespace-nowrap"><h2 style = {{fontSize: '15px'}}>Operating System:</h2></div>
            <div className="OpeatingSystem_options  flex flex-1 justify-start items-center">
                <div onClick = {enable_windows} className = "windows-option cursor-pointer flex bg-white px-8 py-0 rounded-lg items-center justify-center" style = {{opacity: `${selectedItem.windwos}%`}}><p className="text-black py-0" style = {{fontSize: '10px', fontWeight: 500, borderRadius: '15px'}} >Windows</p></div>
                <div onClick = {enable_ubuntu} className = "ubuntu-option cursor-pointer flex bg-white px-8 py-0 ml-s rounded-lg items-center justify-center" style = {{opacity: `${selectedItem.ubuntu}%`}} ><p className="text-black py-0" style = {{fontSize: '10px', fontWeight: 500, borderRadius: '15px'}} >Ubuntu</p></div>
                <div onClick = {enable_centos} className = "centos-option cursor-pointer flex bg-white px-8 py-0 ml-s rounded-lg items-center justify-center" style = {{opacity: `${selectedItem.centos}%`}} ><p className="text-black py-0" style = {{fontSize: '10px', fontWeight: 500, borderRadius: '15px'}} >CentOS</p></div>
                <div onClick = {enable_custom} className = "centos-option cursor-pointer flex bg-white px-8 py-0 ml-s rounded-lg items-center justify-center" style = {{opacity: `${selectedItem.custom}%`}} ><p className="text-black py-0" style = {{fontSize: '10px', fontWeight: 500, borderRadius: '15px'}} >Custom OS</p></div>
            </div>
        </div>
    )
}

export const SelecionBar_Storage = () => {

    const [selectedItem, setSelectedItem] = useState({
        hdd: 100,
        sata: 50,
        ssd: 50,
    });
    const barRef = useRef(null);
    const [mouseDown,setMouseDown] = useState(false);
    const [pointPosition, setPointPosition] = useState(0);
    const [componentCount, setComponentCount] = useState(0);
    const [standardStorageUnits, setStandardStorageUnits] = useState({
        1 : 128, 
        2 : 256, 
        3 : 512,
        4 : 1024,
        5 : 1536,
        6 : 2048
    })


    const handle_mouse_down = () => {
        setMouseDown(true);
    }

    const handle_mouse_up = () => {
        let bar = barRef.current;
            
        let barRect = bar.getBoundingClientRect();
        const difference_between_CPU = barRect.width / 6;
        let pos = calculate_horizontal_position(difference_between_CPU, pointPosition,5)
        setComponentCount(pos.count)
        setPointPosition(pos.coords)
        setMouseDown(false);
    }

    const handle_mouse_movement = (event) => {
        if (mouseDown) {
            let bar = barRef.current;
            
            let barRect = bar.getBoundingClientRect();
            const mouse_pos = event.clientX - barRect.left;
            setPointPosition(mouse_pos);
        }

    }

    const handle_option = (option) => {
        if (option == 'hdd') {
            setSelectedItem(enable_HDD);
        }
        if (option == 'sata') {
            setSelectedItem(enable_SATA);
        }
        if (option == 'ssd') {
            setSelectedItem(enable_SSD);
        }
    }

    return (
        <>
            <div className="flex w-full mt-5">
                <div className="title w-pc2 flex-2 mt-7">Storage: </div>
                <div className="StorageContent flex flex-1">
                    <div className="StorageOptions flex-1 justify-center items-end mt-8">
                        <div className="flex items-center" >
                            <div onClick = {() => {handle_option('hdd')}} className="HDD-Option cursor-pointer bg-white px-6 py-0 mr-5 py-0 w-20 rounded-lg items-center justify-center" style = {{opacity: `${selectedItem.hdd}%`}} ><p className="text-black" style = {{fontSize: '10px', fontWeight: 500, borderRadius: '15px'}}>HDD</p></div>
                            <div onClick = {() => {handle_option('sata')}} className= "SATASSD-Option cursor-pointer bg-white px-6 py-0 mr-5 w-20 rounded-lg items-center justify-center" style = {{opacity: `${selectedItem.sata}%`}} ><p className="text-black w-full whitespace-nowrap" style = {{fontSize: '10px', fontWeight: 500, borderRadius: '15px'}}>SATA-SSD</p></div>
                            <div onClick = {() => {handle_option('ssd')}} className= "HDD-Option cursor-pointer bg-white px-6 py-0 mr-5 rounded-lg w-20 items-center justify-center" style = {{opacity: `${selectedItem.ssd}%`}} ><p className="text-black text-xs whitespace-nowrap" style = {{fontSize: '10px', fontWeight: 500, borderRadius: '15px'}}>NVMe-SSD</p></div>
                        </div>
                    </div>
                    

                    
                    
                    <div className="StorageMemory w-full">
                        <div><p 
                            className="text-2"
                            style = {{fontSize : '12px', fontWeight: '500', marginLeft: `${pointPosition-20}px`}}>
                                {standardStorageUnits[componentCount]} MB
                            </p></div>
                        <div
                            ref={barRef}
                            onMouseDown = { handle_mouse_down }
                            onMouseMove = { handle_mouse_movement }
                            onMouseLeave = { handle_mouse_up }
                            onMouseUp = { handle_mouse_up } 
                            className = "StorageMemory bg-white_transparent flex w-full h-7  rounded-full shadow-md cursor-pointer  items-center pl-2"
                            style = {{paddingLeft: `${pointPosition}px`}}>
                            <div 
                                className = "bg-cyan-500 text-white rounded-full h-full"
                                style={{ borderRadius: '50%', width: '10px', height: '10px'}}> 
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}







export const SelectionBar = ({title, type}) => {
    const types = {
        cpu : ' x CPUs',
        ram : ' GB',
    }
    const [mouseDown, SetMouseDown] = useState(false);
    const [isDragging, SetIsDragging] = useState(false);
    const barReference = useRef(null);
    const [pointPosition, setPointPosition] = useState(0); 
    const [componentCount, setComponentCount] = useState(0);

    const handleMouseDown = () => {
        SetMouseDown(true);
    }


    const handleMouseUp = () => {
        let bar = barReference.current;
            
        let barRect = bar.getBoundingClientRect();
        console.log(barRect)
        const difference_between_CPU = barRect.width / 8;
        let pos = calculate_horizontal_position(difference_between_CPU, pointPosition,7)
        setComponentCount(pos.count)
        setPointPosition(pos.coords)
        SetMouseDown(false);
    }


    const HandleMouseMovement = (event) => {
        if ( mouseDown ) {
            let bar = barReference.current;
            
            let barRect = bar.getBoundingClientRect();
            const mouse_pos = event.clientX - barRect.left;
            setPointPosition(mouse_pos);
        }
    }



    return (
        <div className='my-4 flex items-center justify-center'>
            <p className='flex-2 w-pc2 pt-6'>{title}</p>
            <div className='flex-1'>
                <div> 
                    <p style = {{ fontSize : '12px', fontWeight: '500', marginLeft: `${pointPosition - 20}px`}}>{`${componentCount} ${types[type]}`}</p>
                </div>
                <div 
                    ref={barReference}
                    onMouseDown = { handleMouseDown }
                    onMouseUp = { handleMouseUp }
                    onMouseMove = { HandleMouseMovement }
                    onMouseLeave= { handleMouseUp }
                    className='SelectionBar bg-white_transparent flex w-full h-7 rounded-full shadow-md cursor-pointer  items-center pl-2'>
                    <div 
                        className = "bg-cyan-500 text-white rounded-full h-full"
                        style={{ borderRadius: '50%', width: '10px', height: '10px', marginLeft: `${pointPosition}px`}}> </div>
                </div>
            </div>
        </div>
    )
}