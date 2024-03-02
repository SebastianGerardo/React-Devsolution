import { Route, Routes } from 'react-router-dom'
import './App.css'
import Countries from './pages/Countries'
import CountryDetail from './pages/CountryDetail'

function App() {
  return (
    <Routes>
      <Route path='/' element={<Countries />} />
      <Route path='/country/:nameCountry' element={<CountryDetail />} />
    </Routes>
  )
}

export default App
