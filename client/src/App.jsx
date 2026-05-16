import React from 'react'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'

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
import Capabilities_download from './pages/Capabilities_download'
import HardwareWorkstationsLaptops from './pages/HardwareWorkstationsLaptops'
import HardwareLaptopShop from './pages/HardwareLaptopShop'
import GetFreeQuote from './pages/GetFreeQuote'

const AppContent = () => {
  const location = useLocation()

  const hideLayout =
    location.pathname === '/capabilities/download'

  return (
    <>
      {!hideLayout && <Navbar />}

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/solutions' element={<Solutions />} />
        <Route
          path='/solutions/enterprise'
          element={<Solution_enterprise />}
        />

        <Route path='/hardware' element={<Hardware />} />
        <Route path='/hardware/WorkstationsLaptops' element={<HardwareWorkstationsLaptops/>} />
        <Route path='/hardware/product' element={<HardwareLaptopShop/>} />
        
        <Route path='/procurement' element={<Procurement />} />

        <Route path='/capabilities' element={<Capabilities />} />
        <Route
          path='/capabilities/download'
          element={<Capabilities_download />}
        />

        <Route path='/contact' element={<Contact />} />
        <Route path="/get-free-quote" element={<GetFreeQuote/>} />
      </Routes>

       <Footer />
    </>
  )
}

const App = () => {
  return (
    
      <AppContent />
    
  )
}

export default App