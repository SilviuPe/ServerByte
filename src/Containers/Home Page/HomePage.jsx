import React from 'react'
import './HomePage.css';


import { useEffect, useState } from 'react';

import { Header } from '../../Components';
import { ServerPlan } from '../../Components';
import { Mission } from '../../Components';
import { Footer } from '../../Components';

const HomePage = () => {


  return (
    <div className="Homepage_main_body">
        <Header/>
        <Mission/>
        <ServerPlan/>
        <Footer></Footer>
    </div>
  )
}

export default HomePage;