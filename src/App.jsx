import React from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import WhyEdu from './components/WhyEdu'
import FCourses from './components/FCourses'
import CadetAdmission from './components/CadetAdmission'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import Cyber from './components/Cyber'
import WhatWillGet from './components/WhatWillGet'
import Curriculum from './components/Curriculum'


const App = () => {
  return (
    <>
    <Navbar/>
    <div>
      <Router>
      <WhyEdu/>
      <FCourses/>
      <Routes>
      <Route path="/cadet-admission" element={<CadetAdmission />} />
      <Route path="/cyber-security" element={<Cyber />} />
      </Routes>
      </Router>
      <WhatWillGet/>
      <Curriculum/>
    

    </div>
    <Footer/>
    </>
  )
}

export default App