import { useState, useEffect } from 'react'
import Card from './components/Card'
import './App.css'

function App() {
  const [data, setData] = useState([])
  const [filter, setFilter] = useState("")
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    const getData = async () => {
      const fetchData = await fetch("https://restcountries.com/v3.1/all")
      const response = await fetchData.json()

      setData(response)
      setLoading(false)
    }

    getData()
  }, [])

  if (loading === true) {
    return (
      <div className='countries'>
        <h1>Cargando...</h1>
      </div>
    )
  }

  const handleChange = (event) => {
    setFilter(event.target.value)
  }

  return (
    <section>
      <div className='searching'>
        <input type="text" placeholder='Buscar...' /> 
        <select value={filter} onChange={handleChange}>
          <option value=""></option>
          <option value="Africa">Africa</option>
          <option value="Europe">Europa</option>
          <option value="Antarctic">Antártida</option>
          <option value="Americas">America</option>
          <option value="Asia">Asia</option>
        </select>
      </div>
      <div className='countries'>
        {data && 
         data.length > 0 && 
         data
         .filter(country => filter == "" || country.region === filter)
         .map((country, index) => (
            <Card key={index} data={country} />
          )
        )}
      </div>
    </section>
  )
}

export default App
