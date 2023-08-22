import React, { useState } from 'react'
import logo from '../../assets/logo.png'
import './header.css'
import img1 from '../../assets/bars.png'
import {Link} from 'react-scroll'

const Header = () => {

  const mobile = window.innerWidth<=768 ? true : false
  const [menu,setMenu] = useState(false)
  return (
    <>
    <div className="header">
      <img src={logo} className="logo"/>
      {(menu===false && mobile===true) ? (
        <div className='img'
          onClick={()=>setMenu(true)}
        ><img src={img1} style={{width:'20px', padding:'8px',cursor:'pointer'}}/></div>
      ):<ul className='menulists'>
            <li>
              <Link
              onClick={()=>setMenu(false)}
              to='main'
              smooth={true}>
              Home</Link></li>
            <li> <Link
              onClick={()=>setMenu(false)}
              to='programs'
              smooth={true}>
              Programs</Link></li>
            <li> <Link
              onClick={()=>setMenu(false)}
              to='reasons'
              smooth={true}>
              Why us</Link></li>
            <li> <Link
              onClick={()=>setMenu(false)}
              to='plans'
              smooth={true}>
              Plans</Link></li>
            <li><Link
            onClick={()=>setMenu(false)}
            to='testimonials'
            smooth={true}
            >Testimonials</Link></li>
        </ul>
       }
        
    </div>
   
    </>
  )
}

export default Header;