import { useState } from 'react'
import Home from './components/Home'
import Contact from './components/Contact'
import About from './components/About'
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom'
import './App.css'

function App() {
  return (
    <>
        <header>
          <Link to="/home">
            Home
          </Link>
          <Link to="/contact">
            Contact
          </Link>
          <Link to="/about">
            About
          </Link>
        </header>
        <Routes>
          <Route path='/home' element={<Home />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/about' Component={About} />
        </Routes>
    </>
  )
}

export default App
