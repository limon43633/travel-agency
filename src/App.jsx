import React from 'react'
import Navbar from './components/Navbar'
import {Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import AboutUs from './pages/AboutUs'
import Services from './pages/Services'
import Packages from './pages/Packages'
import ContactUs from './pages/ContactUs'

const App = () => {
  return (
    <div>

       <Navbar />

       <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about-us' element={<AboutUs />} />
        <Route path='/services' element={<Services />} />
        <Route path='/packages' element={<Packages />} />
        <Route path='/contact-us' element={<ContactUs />} />
       </Routes>
    </div>
  )
}

export default App
