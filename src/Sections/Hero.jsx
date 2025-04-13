import React from 'react'
import { word } from '../Constants'
import Button from '../Components/Button'
import HeroExp from '../Components/HeroModel/HeroExp'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import AnimatedCounter from '../AnimatedCounter'




const Hero = () => {

    useGSAP(() => {
        gsap.fromTo(
          ".hero-text h1",
          { y: 50, opacity: 0 },
          { y: 0, opacity: 1, stagger: 0.2, duration: 1, ease: "power2.inOut" }
        );
      });


    return (
        <section id='hero' className='relative overflow-hidden'>

            <div className='absolute top-0 left-0  z-10'>

                <img src='\images\bg.png' alt='background' />
            </div>
            <div className='hero-layout'>
                {/* {left side Hero content } */}
                <header className='flex flex-col  justify-center md:w-full w-screen md:px-20 px-5'>
                    <div className='flex flex-col gap-7'>
                        <div className='hero-text'>
                            <h1>Shaping

                                <span className='slide'>
                                    <span className='wrapper'>
                                        {word.map((word) => (
                                            <span key={word.text} className='flex items-center md:gap-3 gap-1 pb-2'>
                                                <img src={word.imgPath} alt={word.text}
                                                    className='xl:size-12 md:10 size-7 md:p-2 p-1 rounded-full bg-white-50' />
                                                <span>{word.text} </span>
                                            </span>
                                        ))}
                                    </span>
                                </span>

                            </h1>

                            <h1>into Real Projects</h1>
                            <h1>That deliver Project </h1>

                        </div>
                        <p className='text-white-50 md:text-xl relative z-10 pointer-events-none'>
                            Hi I'm <strong> Himanshu kumar</strong> , a developer based with a passion
                            for code.
                        </p>
                        <Button
                            className="md:w-80 md:h-16 w-60 h-12"
                            id='button'
                            text='see My work'
                        />
                    </div>


                </header>
                {/* {Righe side hero content } */}
                <figure>
                    <div className='hero-3d-layout'>
                        <HeroExp />
                    </div>
                </figure>

            </div>

                <AnimatedCounter/>





        </section>
    )
}

export default Hero