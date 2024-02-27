import './App.css'
import { Route, Routes } from 'react-router-dom'
import Flags from './pages/Flags'
import AboutFlag from './pages/AboutFlag'

function App() {

  return (
    <Routes>
      <Route path='/' element={<Flags />} />
      <Route path='/flag/:idFlag' element={<AboutFlag />} />
    </Routes>
  )
}

export default App
