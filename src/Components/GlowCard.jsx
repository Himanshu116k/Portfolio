import React, { useRef } from 'react'

const GlowCard = ({card,children,index}) => {
    const cardRefs = useRef([]);

    const handleMouseEnter = (index) =>(e)=> {
        const card = cardRefs.current[index];
        if(!card) return;
        //Get the  mouse positon relative to card
        const rect = card.getBoundingClientRect();
        const mouseX = e.clientX - rect.left - rect.width /2;
        const mouseY = e.clientY - rect.top - rect.height /2;

        //Calculte the angel from of the card
       let angel = Math.atan2(mouseY,mouseX) * (180 / Math.PI);
       angel = (angel + 360) % 360; // Normalize to 0-360 range
       
       card.style.setProperty('--start',angel+60)
    
    
    }
  return (
    <div ref={(el)=>cardRefs.current[index]=el} onMouseMove={handleMouseEnter(index)} className='card card-border timeline-card rounded-xl p-10'>
        <div className='glow'/>
<div className='flex items-center gap-1 mb-5 '>
    {Array.from({length:5},(_,i)=>(
        <img src='/images/star.png' key={i} alt='star' className='size-5'/>
    ))}
</div>
<div className='mb-5 '>
    <p className='text-white-50 text-lg'>{card.review}</p>

</div>
{children}
    </div>
  )
}

export default GlowCard