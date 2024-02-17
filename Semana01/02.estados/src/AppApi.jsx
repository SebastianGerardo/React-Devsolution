import { useState, useEffect } from 'react'
import Card from './components/Card'
import './App.css'

function AppApi() {
  const [data, setData] = useState([])

  useEffect(() => {
    const getData = async () => {
      const fetchData = await fetch("https://fakestoreapi.com/products");
      const response = await fetchData.json()
      
      setData(response)
    }

    getData()
  }, [])

  return (
    <>
      <div className="card">
        <h1>Productos</h1>
        {data && data.length > 0 && data.map((product, index) => (
          <Card
            key={index}
            titulo={product.title} 
            categoria={product.category} 
            precio={product.price} 
            image={product.image} 
          />
        ))}
      </div>
    </>
  )
}

export default AppApi
