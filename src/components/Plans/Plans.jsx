import React from 'react'
import './plans.css'
import { plans } from '../../Data/plans.js'
import tick from '../../assets/whiteTick.png'

const Plans = () => {
  return (
    <div className="plans-container" id='plans'>
        <div className='blur blur-p-1'></div>
        <div className='blur blur-p-2'></div>
        <div className="program-text" style={{fontSize:'54px'}}>
            <span className='stroke-text'>ready to start</span>
            <span>your journey</span>
            <span className='stroke-text'>now withus</span>
        </div>
        <div className='plans'>
            {plans.map((plans) =>(
                <div className="plan">
                    {plans.icon}
                    <span>{plans.title}</span>
                    <span> ₹ {plans.price}</span>
                    <div className="features">
                        {plans.features.map((feature)=>(
                            <div className="feature">
                                <img src={tick} />
                                <span>{feature}</span>
                            </div>
                        ))}
                    </div>
                    <div><span>See more benefits -></span> </div>
                    <button className='btn'>join now</button>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Plans