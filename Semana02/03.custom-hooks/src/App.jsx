import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useCount } from './hooks/useCount'
import { useCountObject } from './hooks/useCountObject'
import About from './About'

const data = {
  firstName: "Sebastian",
  lastName: "Sanchez"
}

function App() {
  // const { count, addCount } = useCount(5)
  const { count, addCount } = useCountObject({
    initial: 5,
    numbers: [1, 2, 3, 4, 5, 6],
    name: "Hola"
  })

  return (
    <>
      <div>
        <About />
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={addCount}>
          count is {count}
        </button>
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

export default App
