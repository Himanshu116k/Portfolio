import React from 'react'
import TitleHeader from '../Components/TitleHeader'
import { testimonials } from '../Constants'
import GlowCard from '../Components/GlowCard'

const Testimonial = () => {
  return (
   <section id='testimonials' className='flex-center section-padding '>
    <div className='w-full h-full md:px-10 px-5'>
        <TitleHeader title={"What people say about me"} sub={"Client Feedback"}/>
        
        <div className='lg:columns-3 md:columns-2 columns-1 mt-16 '>
            {testimonials.map((testimonials)=>(
             <GlowCard card={testimonials}>
                <div className='flex items-center gap-3.5'>
                    <div>
                        <img src={testimonials.imgPath} alt={testimonials.name}/>
                    </div>
                    <div>
                        <p className='font-bold'>{testimonials.name}</p>
                        <p className='text-white-50'>{testimonials.mentions}</p>
                    </div>
                </div>
             </GlowCard>
            ))}
        </div>

    </div>

   </section>
  )
}

export default Testimonial