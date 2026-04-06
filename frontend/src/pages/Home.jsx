import React from 'react'
import HeroSection from '../components/HomeComponents/HomeHero'
import AboutUsHome from '../components/HomeComponents/AboutUsHome'
import AboutimgHome from '../components/HomeComponents/AboutimgHome'
import ConstructionSection from '../components/HomeComponents/ConstructionHome'

function Home() {
  return (
    <div>
     <HeroSection/>
     <AboutUsHome/>
     <AboutimgHome/>
     <ConstructionSection/>
    </div>
  )
}

export default Home