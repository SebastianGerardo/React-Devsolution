
import { Route, Routes } from 'react-router-dom'
import './App.css'
import GithubSearch from './pages/GithubSearch'
import Users from './pages/Users'

function App() {
  return (
    <Routes>
      <Route path='/' element={<GithubSearch />} />
      <Route path='/users/:userName' element={<Users />} />
    </Routes>
  )
}

export default App
