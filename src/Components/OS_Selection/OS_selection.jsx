import React, { useState, useEffect } from 'react';
import os_functions  from './OS_selection_functions';


const OS_Selection = ({callback}) => {
    const [selectedItem, setSelectedItem] = useState({
        windows: 100,
        ubuntu: 50,
        centos: 50,
        custom: 50
    });

    const [currentOS, setCurrentOS] = useState('Windows 10');

    const operating_system_functions = os_functions();

    const enable_os = (os) => {
        operating_system_functions.enable_specific_os(setCurrentOS,setSelectedItem,os)
    }



    useEffect(() => {
        callback('os', currentOS);
    },[currentOS])

    return (
        <div className="OS_label flex w-full mt-8">
            <div className="Title w-pc2 flex-2 whitespace-nowrap"><h2 style = {{fontSize: '15px'}}>Operating System:</h2></div>
            <div className="OpeatingSystem_options  flex flex-1 justify-start items-center">
                <div onClick = {() => {  enable_os('windows')}  } className = "windows-option cursor-pointer flex bg-white px-8 py-0 rounded-lg items-center justify-center" style = {{opacity: `${selectedItem.windows}%`}}><p className="text-black py-0" style = {{fontSize: '10px', fontWeight: 500, borderRadius: '15px'}} >Windows</p></div>
                <div onClick = {() => {  enable_os('ubuntu')}  } className = "ubuntu-option cursor-pointer flex bg-white px-8 py-0 ml-s rounded-lg items-center justify-center" style = {{opacity: `${selectedItem.ubuntu}%`}} ><p className="text-black py-0" style = {{fontSize: '10px', fontWeight: 500, borderRadius: '15px'}} >Ubuntu</p></div>
                <div onClick = {() => {  enable_os('centos')}  } className = "centos-option cursor-pointer flex bg-white px-8 py-0 ml-s rounded-lg items-center justify-center" style = {{opacity: `${selectedItem.centos}%`}} ><p className="text-black py-0" style = {{fontSize: '10px', fontWeight: 500, borderRadius: '15px'}} >CentOS</p></div>
                <div onClick = {() => {  enable_os('custom')}  } className = "centos-option cursor-pointer flex bg-white px-8 py-0 ml-s rounded-lg items-center justify-center" style = {{opacity: `${selectedItem.custom}%`}} ><p className="text-black py-0" style = {{fontSize: '10px', fontWeight: 500, borderRadius: '15px'}} >Custom OS</p></div>
            </div>
        </div>
    )
}

export default OS_Selection;