import React from 'react'
import './HomePage.css';


import { useEffect, useState } from 'react';

import { Header } from '../../Components';
import { ServerPlan } from '../../Components';
import { Mission } from '../../Components'

const HomePage = () => {


  return (
    <div className="Homepage_main_body">
        <Header/>
        <ServerPlan/>
        <Mission/>
    </div>
  )
}

export default HomePage;