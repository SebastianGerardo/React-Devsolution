import { useEffect, useState } from "react"
import Card from "../components/Card"

const Countries = () => {
  const [data, setData] = useState([])

  useEffect(() => {
    const getData = async () => {
      const fetchData = await fetch("https://restcountries.com/v3.1/all")
      const response = await fetchData.json()

      setData(response)
    }

    getData()
  }, [])

  return (
    <div>
      {data && data.length > 0 && data.map((obj) => (
        <Card key={obj.name.common} data={obj} />
      ))}
    </div>
  )
}

export default Countries
