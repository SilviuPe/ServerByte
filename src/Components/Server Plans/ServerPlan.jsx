import React from 'react'
import './ServerPlan.css';
const ServerPlan = () => {
  return (
    <div className='ServerPlan_main_container'>
        <div className='ServerPlan_title_container'>
            <h2>Server Plans</h2>
        </div>
        <div className='ServerPlans'>
            <div className='bronze_plan'>
                <div className='title_plan'> Bronze Plan</div>
                <div className='configuration'>
                    <div className='cpu'>vCPU: x1</div>
                    <div className='memory'>Memory: 1GB</div>
                    <div className='storage'>Storage: SSD M2 256 GB</div>
                    <div className='network'>Network Speed: 100 Mbps</div>
                    <div className='os'>OS: Ubuntu (last version)</div>
                </div>
            </div>
            <div className='line_separator'></div>
            <div className='silver_plan'>
                <div className='title_plan'> Silver Plan</div>
                <div className='configuration'>
                    <div className='cpu'>vCPU: x1</div>
                    <div className='memory'>Memory: 1GB</div>
                    <div className='storage'>Storage: SSD M2 256 GB</div>
                    <div className='network'>Network Speed: 100 Mbps</div>
                    <div className='os'>OS: Ubuntu (last version)</div>
                </div>
            </div>
            <div className='line_separator'></div>
            <div className='gold_plan'>
                <div className='title_plan'> Gold Plan</div>
                <div className='configuration'>
                    <div className='cpu'>vCPU: x1</div>
                    <div className='memory'>Memory: 1GB</div>
                    <div className='storage'>Storage: SSD M2 256 GB</div>
                    <div className='network'>Network Speed: 100 Mbps</div>
                    <div className='os'>OS: Ubuntu (last version)</div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ServerPlan;