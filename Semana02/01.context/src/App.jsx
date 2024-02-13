import Pagina1 from './components/Pagina1'
import Pagina2 from './components/Pagina2'
import './App.css'
import { useState } from 'react'

const dataApp = {
  nombres: "Pedro",
  apellidos: "Infante"
}

function App() {
  const [data, setData] = useState(null)

  return (
    <>
     <Pagina1 data={data} />
     <Pagina2 data={data} />
     <button onClick={() => setData(prevData => prevData === null ? dataApp : null)}>
        Cambiar data
     </button>
    </>
  )
}

export default App
