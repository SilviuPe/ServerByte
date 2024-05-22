import React from 'react'
import './HomePage.css';

import { Header } from '../../Components';
import { ServerPlan } from '../../Components';


const HomePage = () => {
  return (
    <div className='Homepage_main_body'>
        <Header/>
        <ServerPlan/>
    </div>
  )
}

export default HomePage;