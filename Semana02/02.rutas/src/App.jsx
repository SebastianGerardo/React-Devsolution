import Home from './components/Home'
import Contact from './components/Contact'
import About from './components/About'
import { Route, Routes, Link } from 'react-router-dom'
import Product from './components/Product'
import './App.css'
import Products from './components/Products'

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
          <Route path='/' element={<Products />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/product/:idProduct' element={<Product />} />
          <Route path='/about' Component={About} />
        </Routes>
    </>
  )
}

export default App
