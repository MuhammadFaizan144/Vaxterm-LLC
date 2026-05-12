import React from 'react'
import { BrowserRouter, Routes ,Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Solutions from './pages/Solutions'
import Hardware from './pages/Hardware'
import Procurement from './pages/Procurement'
import Capabilities from './pages/Capabilities'
import Contact from './pages/Contact'
import Solution_enterprise from './pages/Solution_enterprise'
const App = () => {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/solutions' element={<Solutions/>}/>
        <Route path='/solutions/enterprise' element={<Solution_enterprise/>}/>
        
        <Route path='/hardware' element={<Hardware/>}/>
        <Route path='/procurement' element={<Procurement/>}/>
        <Route path='/capabilities' element={<Capabilities/>}/>
        <Route path='/contact' element={<Contact/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
  )
}

export default App
