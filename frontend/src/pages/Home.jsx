import React from 'react'
import HeroSection from '../components/HomeComponents/HomeHero'
import AboutUsHome from '../components/HomeComponents/AboutUsHome'
import AboutimgHome from '../components/HomeComponents/AboutimgHome'
import ConstructionSection from '../components/HomeComponents/ConstructionHome'
import HomeservicesSection from '../components/HomeComponents/Homeservices'
import GetStartedSteps from '../components/HomeComponents/StepSectionHome'
import HomeTestimonialsection from  '../components/HomeComponents/HomeTestimonial'
import FaqSection from '../components/HomeComponents/FaqHomesection'
import ContactHomeSection from '../components/HomeComponents/HomeContact'

function Home() {
  return (
    <div>
     <HeroSection/>
     <AboutUsHome/>
     <AboutimgHome/>
     <ConstructionSection/>
     <HomeservicesSection/>
     <GetStartedSteps/>
     <HomeTestimonialsection/>
     <FaqSection/>
     <ContactHomeSection/>
     
    </div>
  )
}

export default Home