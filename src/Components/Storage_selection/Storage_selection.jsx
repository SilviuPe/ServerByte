import React, { useState, useEffect, useRef } from 'react';
import Storage_functions from './Storage_selection.js';



const SelecionBar_Storage = ({callback}) => {

    const [selectedItem, setSelectedItem] = useState({
        hdd: 100,
        sata: 50,
        ssd: 50,
    });


    const barRef = useRef(null);
    const [mouseDown,setMouseDown] = useState(false);
    const [pointPosition, setPointPosition] = useState(0);
    const [componentCount, setComponentCount] = useState(1);
    const [currentStorageHardware, setCurrentStorageHardware] = useState(null);
    const standardStorageUnits = {
        1 : 50, 
        2 : 100, 
        3 : 250,
        4 : 500
    }

    const storage_functions = Storage_functions(barRef);

    const handle_mouse_down = (event) => {
        storage_functions.handle_mouse_down(setMouseDown,setPointPosition,event);
    }

    const handle_mouse_up = (event) => {
        if (mouseDown) storage_functions.handle_mouse_up(setComponentCount,setPointPosition,setMouseDown,event);
    }

    const handle_mouse_movement = (event) => {
        if (mouseDown) storage_functions.handle_mouse_movement(setPointPosition, event);
    }

    const handle_option = (option) => {
        storage_functions.enable_storage_hardware(setSelectedItem, setCurrentStorageHardware,option);
    }


    useEffect(() => {
        const details = {
            type: currentStorageHardware,
            memory: standardStorageUnits[componentCount],
            units: "GB"
        }
        callback('storage', details);
    },[currentStorageHardware, standardStorageUnits])


    return (
        <>
            <div className="flex w-full mt-5">
                <div className="title w-pc2 flex-2 mt-8">Storage: </div>
                <div className="StorageContent flex flex-1">
                    <div className="StorageOptions flex-1 justify-center items-end mt-8">
                        <div className="flex items-center" >
                            <div onClick = {() => {handle_option('hdd')}} className="HDD-Option cursor-pointer bg-white px-6 py-0 mr-5 py-0 w-20 rounded-lg items-center justify-center" style = {{opacity: `${selectedItem.hdd}%`}} ><p className="text-black" style = {{fontSize: '10px', fontWeight: 500, borderRadius: '15px'}}>HDD</p></div>
                            <div onClick = {() => {handle_option('sata')}} className= "SATASSD-Option cursor-pointer bg-white px-6 py-0 mr-5 w-20 rounded-lg items-center justify-center" style = {{opacity: `${selectedItem.sata}%`}} ><p className="text-black w-full whitespace-nowrap" style = {{fontSize: '10px', fontWeight: 500, borderRadius: '15px'}}>SATA-SSD</p></div>
                            <div onClick = {() => {handle_option('ssd')}} className= "HDD-Option cursor-pointer bg-white px-6 py-0 mr-5 rounded-lg w-20 items-center justify-center" style = {{opacity: `${selectedItem.ssd}%`}} ><p className="text-black text-xs whitespace-nowrap" style = {{fontSize: '10px', fontWeight: 500, borderRadius: '15px'}}>NVMe-SSD</p></div>
                        </div>
                    </div>
                    

                    
                    
                    <div className="StorageMemory w-full">
                        <div className='mr-s'>
                            <p className="relative text-2 transition-all duration-50 ease-in-out"style = {{fontSize : '12px', fontWeight: '500', marginLeft: `${componentCount === 4 ? pointPosition-8 : pointPosition-2}%`}}> {standardStorageUnits[componentCount]} GB </p>
                        </div>
                        <div
                            ref={barRef}
                            onMouseDown = { handle_mouse_down }
                            onMouseMove = { handle_mouse_movement }
                            onMouseLeave = { handle_mouse_up }
                            onMouseUp = { handle_mouse_up } 
                            className = "StorageMemory bg-white_transparent flex w-auto h-7  rounded-full shadow-md cursor-pointer  items-center pl-2 mr-s">
                            <div 
                                className = "transition-all duration-50 ease-in-out bg-cyan-500 text-white rounded-full h-full"
                                style={{ borderRadius: '50%', width: '10px', height: '10px', marginLeft: `${pointPosition}%`}}> 
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SelecionBar_Storage;