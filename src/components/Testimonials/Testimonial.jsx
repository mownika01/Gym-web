import React, { useState } from 'react'
import './testimonial.css'
import { testimonialData } from '../../Data/testimonialData'
import img1 from '../../assets/leftArrow.png'
import img2 from '../../assets/rightArrow.png'
import { motion } from 'framer-motion';

const Testimonial = () => {
  const transition = {type:'spring', duration:3}
const [selected,Setselected] = useState(0);
const tlength = testimonialData.length;

  return (
    <div className="t-container" id='testimonials'>
        <div className="t-left">
            <span>Testimonials</span>
            <span className='stroke-text'>What they</span>
            <span>say about us</span>
            <motion.span
             key={selected}
             initial = {{opacity: 0,x:-100}}
             animate= {{opacity: 1,x:0}}
             exit={{opacity: 0,x:100}}
             transition={transition}>
              {testimonialData[selected].review} 
            </motion.span>
              <span>
                <span style={{color:'orange'}}>{testimonialData[selected].name}</span>{" "}
                - {testimonialData[selected].status}
              </span>
        </div>
        <div className="t-right">
            <div></div>
            <div></div>
            <motion.img 
            key={selected}
            initial = {{opacity: 0,x:100}}
            animate= {{opacity: 1,x:0}}
            exit={{opacity: 0,x:-100}}
            transition={transition}
            src={testimonialData[selected].img} />
            <div className='arrows'>
                <img onClick={()=>(
                    selected === 0 ? Setselected(tlength-1) : Setselected((prev)=>prev -1)
                )} src={img1} />
                <img onClick={()=>(
                    selected === tlength-1 ? Setselected(0) : Setselected((prev)=>prev + 1)
                )} src={img2} />

            </div>
        </div>
    </div>
  )
}

export default Testimonial;