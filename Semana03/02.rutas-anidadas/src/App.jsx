import { Route, Routes } from 'react-router-dom'
import './App.css'
import { Home } from './pages/Home'
import Contact from './pages/Contact'
import About from './pages/About'
import { MainLayout } from './layouts/MainLayout'

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path='about' element={<About />} />
          <Route path='contact' element={<Contact />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
