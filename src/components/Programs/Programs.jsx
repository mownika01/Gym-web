import React from 'react'
import './programs.css'
import { programData } from '../../Data/programData.js'
import img1 from '../../assets/rightArrow.png'

const Programs = () => {
  return (
    <div className='programs' id='programs'>
        <div className="program-text">
            <span className='stroke-text'>Explore our</span>
            <span>Programs</span>
            <span className='stroke-text'>to shape you</span>
        </div>
        <div className='p-category'>
            {programData.map(items=>(
                <div className="category">
                    <span>{items.icon}</span>
                    <span>{items.heading}</span>
                    <span>{items.details}</span>
                    <div className='join-now'>
                      <span>Join now</span>
                      <img src={img1}  width='20px'/>
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Programs;