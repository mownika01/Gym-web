import React from 'react'
import './email.css'

const Email = () => {
  return (
    <div className="join-email" id='email'>
        <div className="left-e">
            <hr />
            <div>
              <span className='stroke-text'>ready to</span>
              <span> level up</span>
            </div>
            <div>
              <span> your body</span>
              <span className='stroke-text'> with us?</span>
            </div>
        </div>
        <div className="right-e">
            <form action="" className="email">
                <input type="email" name='user_email' placeholder='Enter your email'/>
                <button className='btn btn-j'>Join now</button>
            </form>
        </div>
    </div>
  )
}

export default Email