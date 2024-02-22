import { Route, Routes } from 'react-router-dom'
import './App.css'
import { Home } from './pages/Home'
import Contact from './pages/Contact'
import About from './pages/About'

function App() {
  
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />}>
          <Route index element={<section className='home'>Esto es el home</section>} />
          <Route path='about' element={<About />} />
          <Route path='contact' element={<Contact />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
