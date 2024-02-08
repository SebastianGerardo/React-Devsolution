import { useState } from 'react'
import './App.css'

function AppBool() {
  const [valid, setValid] = useState(true)
  
  const cambiarValid = () => {
    if (valid === true) {
      setValid(false)
    } else {
      setValid(true)
    }
  }

  return (
    <>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setValid(!valid)}>
          Cambiar
        </button>
        {valid === true ? <h1>Hola</h1> : <h1>Chau</h1>}
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default AppBool
