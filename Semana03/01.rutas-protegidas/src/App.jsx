import { Route, Routes, Navigate } from 'react-router-dom'
import Home from './pages/Home'
import './App.css'
import RutaProtegida from './pages/RutaProtegida'
import PrivateRouter from './wrappers/PrivateRouter'

function App() {
  return (
    <Routes>
      <Route path='/' element={<h1>Inicio</h1>} />
      <Route path='/error' element={<Navigate to="/" />} />
      <Route path='/home' Component={Home} />
      <Route path='/protegido' element={<PrivateRouter><RutaProtegida /></PrivateRouter>} />
    </Routes>
  )
}

export default App
