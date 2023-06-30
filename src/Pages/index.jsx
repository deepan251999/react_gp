import React from 'react'
import Header from "../components/HEADER/Header"
import About from '../components/ABOUT/About';
import Service from '../components/SERVICE/Service';
import Portfolio from '../components/PORTFOLIO/Portfolio';
import Navbar from '../components/NAVBAR/Navbar';
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';
// import Toggle from '../components/TOGGLE/Toggle';
function Index() {
  return (
    <div>
      <Router>
         <Navbar/>

         <Routes>
            <Route path='/' element={<Header/>}/>
         </Routes>
         <Routes>
            <Route path='about' element={<About/>}/>
         </Routes>
         <Routes>
            <Route path='service' element={<Service/>}/>
         </Routes>
         <Routes>
            <Route path='portfolio' element={<Portfolio/>}/>
         </Routes>
      </Router>
        {/* <Header/>
        <About />
        <Service />
        <Portfolio /> */}
        {/* <Toggle /> */}
    </div>
  )
}

export default Index;