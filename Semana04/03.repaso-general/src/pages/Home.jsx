import { useEffect, useState } from "react"
import Card from "../components/Card"
import BannerRickAndMorty from "../assets/BannerRickAndMorty"

const Home = () => {
  const [data, setData] = useState([])
  const [page, setPage] = useState(1)
  const [search, setSearch] = useState("")
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(true)

    const getData = async () => {
      const fetchData = await fetch(`https://rickandmortyapi.com/api/character?page=${page}`);
      const response = await fetchData.json()

      setData(prev => prev.concat(response.results))
      setLoading(false)
    }

    getData()
  }, [page])

  return (
    <section>
      <article className="text-gray-500 relative bg-white pt-12">
        <h1 className="absolute text-center -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 text-[#202329] text-[56px] leading-[3.5rem] md:text-[67px] text-wrap xl:text-[121px] font-black xl:w-max">The Rick and Morty</h1>
        <BannerRickAndMorty />
      </article>
      <article className="bg-[#272b33] py-32">
        <span className="flex flex-col gap-3 max-w-[80%] mx-auto">
          {data.length > 0 && (
            <input className="p-3 rounded-lg max-w-[30%]" placeholder="Buscar..." value={search} onChange={(event) => setSearch(event.target.value)} type="text" />
          )}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 place-items-center">
            {data && 
            data.length > 0 && 
            data
            .filter(obj => obj.name.toUpperCase().includes(search.toUpperCase()))
            .map((obj) => (
              <Card key={obj.id} data={obj} />
            ))
            }
          </div>
          {loading === true ? <p className="text-center text-3xl text-white font-semibold">Cargando...</p> : (
            <div className="w-full flex justify-center">
              <button onClick={() => setPage(prev => prev + 1)} className="w-max hover:bg-[#FF9800] border border-[#FF9800] rounded-lg py-[9px] px-[18px] uppercase font-bold text-white transition-all duration-75">
                Cargar más resultados
              </button>
            </div>
          )}
        </span>
      </article>
    </section>
  )
}

export default Home
