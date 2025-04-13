import React from 'react'
import { logoIconsList } from '../Constants'
import { div } from 'three/tsl'

const LogoSection = () => {
   
    const LogoIcon = ({icon})=>{
  return(
    <div className='flex-none flex-center marquee-item'>
     <img  src={icon.imgPath} alt={icon.name}/>
    </div>
  )
    }


  return (
    <div className='md:my-20 my-10 relative'>
        <div className='gradient-edge'/>
        <div className='gradient-edge'/>
        <div className='marque h-52'>
            <div className='marquee-box md:gap-12 gap-5'>
                {logoIconsList.map((icons)=>(
                <LogoIcon key={icons.name} icon={icons} />
                ))}
                {logoIconsList.map((icons)=>(
                <LogoIcon key={icons.name} icon={icons} />
                ))}

            </div>
        </div>

    </div>
  )
}

export default LogoSection