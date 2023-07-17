import React from 'react'
import './reasons.css';
import img1 from '../../assets/image1.png'
import img2 from '../../assets/image2.png'
import img3 from '../../assets/image3.png'
import img4 from '../../assets/image4.png'
import tick from '../../assets/tick.png'
import nb from '../../assets/nb.png'
import nike from '../../assets/nike.png'
import adidas from '../../assets/adidas.png'


const Reasons = () => {
  return (
    <div className='reasons' id='reasons'>
        <div className='left-side'>
            <img src={img1} />
            <img src={img2} />
            <img src={img3} />
            <img src={img4} />
        </div>
        <div className='right-side'>
            <span>SOME REASONS</span>
            <div>
                <span className='stroke-text'>Why</span><span> Choose us ?</span>
            </div>

            <div className="details">
                <div>
                  <img src={tick}  />
                  <span>over 100+ expert coaches</span>
                </div>
                <div>
                  <img src={tick}  />
                  <span>train smarters and faster then before</span>
                </div>
                <div>
                  <img src={tick}  />
                  <span>1 free program for new member</span>
                </div>
                <div>
                  <img src={tick} />
                  <span>reliable partners</span>
                </div>
            </div>
                <span style={{color:'gray'}}>OUR PARTNERS</span>
                <div className='partners-r'>
                <img src={nb} />
                <img src={nike} />
                <img src={adidas} />
            </div>
        </div>
    </div>
  )
}

export default Reasons