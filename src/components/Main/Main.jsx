import React from 'react'
import './main.css'
import Header from '../Header/Header'
import img1 from '../../assets/heart.png';
import img2 from '../../assets/hero_image.png';
import img3 from '../../assets/hero_image_back.png';
import img4 from '../../assets/calories.png';
import NumberCounter from 'number-counter'

const Main = () => {
  return (
    <div className='main' id='main'>
        <div className='blur main-blur'></div>
        <div className="left">
            <Header />

          {/* same section ad-sec*/ }
            <div className="ad">
                <div></div>
                <span>THE BEST FITNESS CLUB IN THE TOWN</span>
            </div>

            {/* same section text-sec*/ }

            <div className="text">
                <div>
                    <span className='stroke-text'>SHAPE </span>
                    <span>YOUR</span>
                </div>
                <div>
                    <span>IDEAL BODY</span>
                </div>
                <div>
                    <span>In here we will help you to shape and build your ideal body and live up your life to fullest</span>
                </div>
            </div>

            {/* same section numberof peoples*/ }

            <div className='numbers'>
                <div>
                    <span>
                        <NumberCounter end={140} start={100} delay='4' preFix ='+'/>
                    </span>
                    <span>EXPERT COACHES</span>
                </div>
                <div>
                    <span>
                         <NumberCounter end={950} start={900} delay='4' preFix ='+'/></span>
                    <span>MEMBERS JOINED</span>
                </div>
                <div>
                    <span>
                    <NumberCounter end={50} start={0} preFix ='+'/>
                    </span>
                    <span>FITNESS PROGRAMS</span>
                </div>  
            </div>
 
            {/* same section buttons*/ }

            <div className='buttons'>
                <button className='btn'>Get Started</button>
                <button className='btn'>Learn More</button>
            </div>

        </div>

        {/*right side */}

        <div className="right">
            <button className='btn'>Join Now</button>

            <div className='heart-rate'>
                <img src={img1} />
                    <span>Heart Rate</span>
                    <span>116 bpm</span>
            </div>

            {/*backside image */}

                <img src={img2} className='main-img'/>
                <img src={img3} className='main-img_back'/>

                {/*calories */}

                <div className='calories'>
                    <img src={img4} />
                    <div>
                        <span>Calories Burned</span>
                        <span>220 kcal</span>
                    </div>
                </div>

        </div>
    </div>
  )
}

export default Main;