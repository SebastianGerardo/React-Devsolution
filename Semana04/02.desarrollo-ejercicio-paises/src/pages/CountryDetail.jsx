import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

const CountryDetail = () => {
  const [data, setData] = useState({})
  const params = useParams()

  useEffect(() => {
    const getData = async () => {
      const fetchData = await fetch(`https://restcountries.com/v3.1/name/${params.nameCountry}`)
      const response = await fetchData.json()

      setData(response[0])
    }

    getData()
  }, [])

  return (
    <div>
      <div>
        <img src={data?.flags?.svg} alt={data?.flags?.alt} />
      </div>
      <div>
        <h1>{data?.name?.common}</h1>
        <div>
          <ul>
            <li>
              {data?.name?.official}
            </li>
            <li>
              {data?.population}
            </li>
            <li>
              {data?.region}
            </li>
            <li>{data?.subregion}</li>
            <li className='flex gap-1'>
              <strong>Capital:</strong> {data?.capital?.map(capital => (
                <p key={capital}>{capital}</p>
              ))}
            </li>
            <li className="flex gap-1">
              <strong>
                Languages:
              </strong>
              {data?.languages && Object?.values(data?.languages)?.map(lgj => (
                <p key={lgj}>{lgj},</p>
              ))}
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default CountryDetail
