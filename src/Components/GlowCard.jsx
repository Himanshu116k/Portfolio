import React, { useRef } from 'react'

const GlowCard = ({card,children}) => {
    const cardRef = useRef()
  return (
    <div className='card card-border timeline-card rounded-xl p-10'>
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