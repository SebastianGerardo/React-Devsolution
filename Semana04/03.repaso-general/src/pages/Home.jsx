import { useEffect, useState } from "react"

const Home = () => {
  const [data, setData] = useState({})

  useEffect(() => {
    const getData = async () => {
      const fetchData = await fetch("https://rickandmortyapi.com/api/character?page=1");
      const response = await fetchData.json()

      setData(response)
    }

    getData()
  }, [])

  return (
    <section>
      <article>

      </article>
      <article>

      </article>
    </section>
  )
}

export default Home
