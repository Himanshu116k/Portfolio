import React from 'react'
import Hero from './Sections/Hero'
import ShowcaseSection from './Sections/ShowcaseSection'
import Navbar from './Components/Navbar'
import LogoSection from './Sections/LogoSection'
import FeatureCards from './Sections/FeatureCards'
import ExperienceSection from './Sections/ExperienceSection'
import Techstack from './Sections/Techstack'
import Testimonial from './Sections/Testimonial'
import Contact from './Sections/Contact'

const App = () => {
  return (
   <>
   <Navbar/>
   <Hero/>
   <ShowcaseSection/>
   <LogoSection/>
   <FeatureCards/>
   <ExperienceSection/>
   <Techstack/>
   <Testimonial/>
   <Contact/>
   </>
  )
}

export default App