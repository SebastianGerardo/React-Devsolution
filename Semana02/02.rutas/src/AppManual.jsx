import { useState } from 'react'
import Home from './components/Home'
import Contact from './components/Contact'
import About from './components/About'
import './App.css'

function App() {
  const [page, setPage] = useState(() => {
    const { pathname } = window.location
    
    return pathname.slice(1);
  })

  const changePage = (page) => {
    window.history.pushState(null, '', `/${page}`)
    setPage(page)
  }

  const renderPage = () => {
    if (page === "home") {
      return <Home />
    } else if (page === "contact") {
      return <Contact />
    } else if (page === "about") {
      return <About />
    }
  }

  return (
    <>
      <header>
        <ul>
          <li onClick={() => changePage("home")}>Inicio</li>
          <li onClick={() => changePage("contact")}>Contacto</li>
          <li onClick={() => changePage("about")}>Nosotros</li>
        </ul>
      </header>
      {renderPage()}
    </>
  )
}

export default App
