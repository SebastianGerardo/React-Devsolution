import { useState, useEffect } from 'react'
import Card from './components/Card'
import './App.css'

function App() {
  const [data, setData] = useState([])

  useEffect(() => {
    const getData = async () => {
      const fetchData = await fetch("https://restcountries.com/v3.1/all")
      const response = await fetchData.json()

      setData(response)
    }

    getData()
  }, [])

  console.log(data[0])

  return (
    <div className='countries'>
      {data && data.length > 0 && data.map((country, index) => (
        <Card key={index} data={country} />
      ))}
    </div>
  )
}

export default App
