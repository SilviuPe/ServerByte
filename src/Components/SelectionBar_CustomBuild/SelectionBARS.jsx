import { Network_Functions, calculate_horizontal_position, 
         enable_HDD, enable_SATA, enable_SSD } from "./SelectionBar_functions.js";

import React, { useState, useRef, useEffect } from 'react';


export const SelectionBar = ({title, type, callback}) => {

    const types = {
        cpu : ' x CPUs',
        ram : ' GB',
    }


    const [mouseDown, SetMouseDown] = useState(false);
    const barReference = useRef(null);
    const [pointPosition, setPointPosition] = useState(0); 
    const [componentCount, setComponentCount] = useState(1);

    const handleMouseDown = (event) => {
        SetMouseDown(true);
        let bar = barReference.current;
            
        let barRect = bar.getBoundingClientRect();
        const mouse_pos = (event.clientX - barRect.left) * 100 / barRect.width;
        setPointPosition(mouse_pos);
    }

    useEffect(() => {
        callback(type,componentCount);
        console.log(type,componentCount);
    },[componentCount])

    const handleMouseUp = (event) => {

        if(mouseDown) {

            SetMouseDown(false);
            let bar = barReference.current;
            
            let barRect = bar.getBoundingClientRect();

            // for the CPU only multiple of 2 is available ( eg. 2 vCPU , 4 vCPU, 8 vCPU)
            if (type === "cpu") {
                const difference_between_CPU = barRect.width / 3;
                const actual_position = event.clientX - barRect.left;
                var pos = calculate_horizontal_position(difference_between_CPU, actual_position,3, 'cpu');
            }
            else {
                const difference_between_CPU = barRect.width / 9;
                const actual_position = event.clientX - barRect.left;
                var pos = calculate_horizontal_position(difference_between_CPU, actual_position,9);
            }
            setComponentCount(pos.count);
            setPointPosition(pos.coords);
        }
    }



    const HandleMouseMovement = (event) => {
        if ( mouseDown ) {
            let bar = barReference.current;
            
            let barRect = bar.getBoundingClientRect();
            const mouse_pos = event.clientX - barRect.left;
            const mouse_pos_percent = (mouse_pos*100)/barRect.width;
            setPointPosition(mouse_pos_percent);
        }
    }



    return (
        <div className='my-4 flex items-center justify-center'>
            <p className='flex-2 w-pc2 pt-6'>{title}</p>
            <div className='flex-1'>
                <div > 
                    <p style = {{ fontSize : '12px', fontWeight: '500', marginLeft: `${pointPosition - 1}%`}}>{`${componentCount} ${types[type]}`}</p>
                </div>
                <div 
                    ref={barReference}
                    onMouseDown = { handleMouseDown }
                    onMouseUp = { handleMouseUp }
                    onMouseMove = { HandleMouseMovement }
                    onMouseLeave= { handleMouseUp }
                    className='SelectionBar bg-white_transparent flex w-full h-7 rounded-full shadow-md cursor-pointer  items-center pl-2 mr-x'>
                    <div 
                        className = "bg-cyan-500 text-white rounded-full h-full inline whitespace-nowrap"
                        style={{ borderRadius: '50%', width: '10px', height: '10px', marginLeft: `${pointPosition}%`}}> </div>
                </div>
            </div>
        </div>
    )
}