import React, { useState, useEffect } from 'react';

import IP_functions from './IP_address_functions';

const IP_addresses = ({callback}) => {

    const [selectedItem, setSelectedItem] = useState({ 
        ipv4: 100,
        ipv6: 50,
    });

    const ip_functions = IP_functions();

    const enable_specific_ip_type = (type) => {
        ip_functions.enable_ip(type,setSelectedItem);
    }

    useEffect(() => {
        let IpType = 6;
        if (selectedItem.ipv4 > selectedItem.ipv6) IpType = 4;
        callback('ip', IpType);
    },[selectedItem])

    return (
        <div className="IP_label flex w-full mt-8">
            <div className="Title w-pc2 flex-2"><h2>IP Address Type:</h2></div>
            <div className="IP_type_options  flex flex-1 justify-start items-center">
                <div onClick = {() => {enable_specific_ip_type('v4')}} className = "ipv4-option cursor-pointer flex bg-white px-s py-0 rounded-lg items-center justify-center" style = {{opacity: `${selectedItem.ipv4}%`}} ><p className="text-black py-0" style = {{fontSize: '10px', fontWeight: 500, borderRadius: '15px'}} >IPv4</p></div>
                <div onClick = {() => {enable_specific_ip_type('v6')}} className = "ipv6-option cursor-pointer flex bg-white px-s py-0 ml-s rounded-lg items-center justify-center" style = {{opacity: `${selectedItem.ipv6}%`}} ><p className="text-black py-0" style = {{fontSize: '10px', fontWeight: 500, borderRadius: '15px'}} >IPv6</p></div>
            </div>
        </div>
    )

}

export default IP_addresses;