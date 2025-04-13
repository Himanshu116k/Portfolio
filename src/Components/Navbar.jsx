import React, { useState,useEffect } from 'react'
import { navLinks } from '../Constants/index.js'

const Navbar = () => {
    const [scrolled,setscrolled] = useState(false);
    useEffect(()=>{
        const handelScroll =()=>{
            const isScrolled = window.scroll>10
            setscrolled(true);

        }
        window.addEventListener("scroll",handelScroll)
        return ()=>window.removeEventListener("scroll",handelScroll)
    },[])
  return (
  <header className={`navbar ${scrolled?"scrolled":"not-scrolled"}`}>
    <div className='inner'>
       <a href="#hero" className='logo' >
        Himanshu /\ kumar
       </a>
       <nav className='desktop'>
         <ul>
      {navLinks.map(({link,name})=>(
        <li key={name} className='group'>
            <a href={link}>
                <span >{name}</span>
                <span className='underline'/>
            </a>
        </li>
      ))}
         </ul>

       </nav>
       <a href="#contact" className='contact-btn group'>
       <div className='inner'>
        <span>Contact me</span>
       </div>
       </a>
    </div>
     
  </header>
  )
}

export default Navbar