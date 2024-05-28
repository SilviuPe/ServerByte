import React from 'react'

import IpIMG from '../../Assets/IP.png'
import NetworkIMG from '../../Assets/Network.png'
import StorageIMG from '../../Assets/Storage.png'
import RamIMG from '../../Assets/RAM.png'
import WindowsIMG from '../../Assets/Windows.png'
import CpuIMG from '../../Assets/CPU.png'
const Price_calculator = () => {
  return (
    <div className='Price_calculator items-center'>
        <div className='title'><h2 className='text-center font-medium mb-x'>Final Server Configuration</h2></div>
        <div className='final_configuration pl-pc3'>
            <div className='CPU flex mb-8'>
                <img src = {CpuIMG} />
                <p className='ml-x'> 3 x vCPU (2x3 threads)</p>
            </div>
            <div className='RAM flex mb-8'>
                <img src = { RamIMG }/>
                <p className='ml-x'> 4 GB RAM Memory</p>
            </div>
            <div className='Storage flex mb-8'>
                <img src = { StorageIMG }/>
                <p className='ml-x'> NVMe - SSD 1TB Storage</p>
            </div>
            <div className='Network flex mb-8'>
                <img src = { NetworkIMG }/>
                <p className='ml-x'> 1 Gbps Network speed</p>
            </div>
            <div className='IP flex mb-8'>
                <img src = { IpIMG }/>
                <p className='ml-x'> IPv4: 122.56.34.22</p>
            </div>
            <div className='OS flex mb-8'>
                <img src = { WindowsIMG }/>
                <p className='ml-x'> OS: Windows v8.1</p>
            </div>
        </div>
        <div className='final_price'>

        </div>
    </div>
  )
}

export default Price_calculator;