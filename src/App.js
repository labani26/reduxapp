import './App.css';
import React from 'react'
import Navbar from './Components/Navbar';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './Components/Home';
import About from './Components/About';


const App = () => {
  return (
    <>
      <Router>
        <Navbar />
        <div className='container'>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/About" element={<About />} />
          </Routes>
        </div>
      </Router>
    </>
  )
}

export default App



