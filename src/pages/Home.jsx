import React from 'react'
import TopBanner from '../components/TopBanner'
import PopularDestinations from '../components/Populardestinations'
import AboutTripNest from '../components/AboutTripNest'
import WhyChooseUs from '../components/WhyChooseUs'
import HowItWorks from '../components/HowItWorks'
import FAQ from '../components/FAQ'

const Home = () => {
  return (
    <div>
      <TopBanner />
      <PopularDestinations />
      <AboutTripNest />
      <WhyChooseUs />
      <HowItWorks />
      <FAQ />
    </div>
  )
}

export default Home
