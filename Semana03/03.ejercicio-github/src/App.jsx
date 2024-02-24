
import { Route, Routes } from 'react-router-dom'
import './App.css'
import GithubSearch from './pages/GithubSearch'

function App() {
  return (
    <Routes>
      <Route path='/' element={<GithubSearch />} />
    </Routes>
  )
}

export default App
