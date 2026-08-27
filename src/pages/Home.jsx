import React from 'react'
import TopBanner from '../components/TopBanner'
import PopularDestinations from '../components/Populardestinations'
import AboutTripNest from '../components/AboutTripNest'
import WhyChooseUs from '../components/WhyChooseUs'

const Home = () => {
  return (
    <div>
      <TopBanner />
      <PopularDestinations />
      <AboutTripNest />
      <WhyChooseUs />
    </div>
  )
}

export default Home
