import React, { useEffect, useState, useRef } from 'react';
import Network_Functions from './Network_functions';


const Network_selection_bar = ({callback}) => {
    
    const [pointPosition, setPointPosition] = useState(0); // This is the point position ( in the code this is the distance between start point of the bar and point)
    const [mouseDown, setMouseDown] = useState(false); // mouse button down monitorize 
    const [componentCount, setComponentCount] = useState(100); // component count monitoreize 
    const [sufixUnits, setSufixUnits] = useState('Mbps'); // The units which will mearuse the network speed.
    const barRefference = useRef(null); // Bar refference

    // [HANDLE TYPE FUNCTION] when the mouse is down this function is called
    const handleMouseDown = () => {
        setMouseDown(true);
    }


    useEffect(() => {
        const details = {
            memory: componentCount,
            units: sufixUnits
        }
        callback('network', details);
    },[sufixUnits,componentCount])


    const network_functions = Network_Functions(barRefference);


     // [HANDLE TYPE FUNCTION] when the mouse is up this function is called
     // first checks if mouse is down to avoid any issues 
     // then call the function from [SelectionBar_functions.js]
    const handleMouseUp = (event) => {
        if (mouseDown) {
            network_functions.HandleMouseButtonUp(setMouseDown,setSufixUnits,setComponentCount,setPointPosition,event);
        }
    }





    // [HANDLE TYPE FUNCTION] when the mouse is moving this function is called
    // first checks if mouse is down to avoid any issues 
    // Allow the user to set the position of the mouse
    const handleMouseMovement = (event) => {
        if (mouseDown === true) network_functions.HandleMouseButtonMovement(setPointPosition,event);
    }


    


    return (
        <div className='my-4 flex items-center justify-center'>
            <p className='flex-2 w-pc2 pt-8'>Network Bandwidth:</p>
            <div className='flex-1'>
                <div> 
                    <p className = "mb-4" style = {{ fontSize : '12px', fontWeight: '500', marginLeft: `${pointPosition - 1}%`}}>{componentCount} {sufixUnits}</p>
                </div>
                <div 
                    ref={barRefference}
                    onMouseDown = { handleMouseDown }
                    onMouseUp = { handleMouseUp }
                    onMouseMove = { handleMouseMovement }
                    onMouseLeave = { handleMouseUp }
                    className='SelectionBar bg-white_transparent flex w-full h-7 rounded-full shadow-md cursor-pointer  items-center pl-2'>
                    <div 
                        className = "bg-cyan-500 text-white rounded-full h-full"
                        style={{ borderRadius: '50%', width: '10px', height: '10px', marginLeft: `${pointPosition}%`}}> </div>
                </div>
            </div>
        </div>
    )
}


export default Network_selection_bar;