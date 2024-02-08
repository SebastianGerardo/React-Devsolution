import { useState } from 'react'
import './App.css'

function AppApi() {
  const [contador, setContador] = useState(0)

  const restar = () => {
    setContador(prev => prev - 1)
  }

  return (
    <>
      <h1>Vite + React</h1>
      <div className="card">
        <div>
          <button onClick={restar}>
            Restar
          </button>
          <h1>{contador}</h1>
          <button onClick={() => setContador(prev => prev + 1)}>
            Sumar
          </button>
        </div>
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

export default AppApi
