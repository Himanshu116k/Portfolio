import React from 'react'
import Hero from './Sections/Hero'
import ShowcaseSection from './Sections/ShowcaseSection'
import Navbar from './Components/Navbar'
import LogoSection from './Sections/LogoSection'
import FeatureCards from './Sections/FeatureCards'
import ExperienceSection from './Sections/ExperienceSection'

const App = () => {
  return (
   <>
   <Navbar/>
   <Hero/>
   <ShowcaseSection/>
   <LogoSection/>
   <FeatureCards/>
   <ExperienceSection/>
   </>
  )
}

export default App