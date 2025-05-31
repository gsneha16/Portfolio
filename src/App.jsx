import { useState } from 'react'
import Navbar from './components/navbar'
import Home from './components/home'
import Skills from './components/skills'
import Projects from './components/projects'
import Contact from './components/contact'
import { Routes,Route } from 'react-router-dom'
import Services from './components/services'

function App() {

  return (
   <>
   <Navbar/>
   <Home/>
   <Services/>
   <Skills/>
   <Projects/>
   <Contact/>
   {/* <Routes>
      <Route path="/" element= {<Home/>}/>
      <Route path="/services" element= {<Services/>}/>
   </Routes> */}
   </>
  )
}

export default App
