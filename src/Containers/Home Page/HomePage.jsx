import React from 'react'
import './HomePage.css';


import { useEffect, useState } from 'react';

import { Header } from '../../Components';
import { ServerPlan } from '../../Components';
import { Offer } from '../../Components';
import { Footer } from '../../Components';
import { OurMission } from '../../Components';
const HomePage = () => {


  return (
    <div className="Homepage_main_body">
        <Header/>
        <OurMission/>
        <Offer/>
        <ServerPlan/>
        <Footer></Footer>
    </div>
  )
}

export default HomePage;