import { useEffect, useState } from "react"
import Card from "../components/Card"
import BannerRickAndMorty from "../assets/BannerRickAndMorty"

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

  console.log(data)

  return (
    <section>
      <article className="text-gray-500 relative">
        <h1 className="absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 text-[#202329] text-[121px] font-black w-max">The Rick and Morty</h1>
        <BannerRickAndMorty />
      </article>
      <article className="bg-[#272b33] py-32">
        <div className="max-w-[80%] mx-auto grid grid-cols-3 gap-8 place-items-center">
          {data.results && data.results.length > 0 && data.results.map((obj) => (
            <Card key={obj.id} data={obj} />
          ))}
        </div>
      </article>
    </section>
  )
}

export default Home
