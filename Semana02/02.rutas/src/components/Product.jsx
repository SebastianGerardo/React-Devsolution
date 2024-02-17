import { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'

const Product = () => {
  const [data, setData] = useState({})
  const params = useParams()
  const navigate = useNavigate()

  useEffect(() => {
    const getProduct = async () => {
      const fetchResponse = await fetch(`https://fakestoreapi.com/products/${params.idProduct}`)
      const response = await fetchResponse.json()

      setData(response)
    }

    getProduct()
  }, [])

  return (
    <div className='max-w-[1200px] mx-auto'>
      <button onClick={() => navigate(-1)}>
        Volver
      </button>
      <h1>Mi producto se llama <strong>{data?.title}</strong></h1>
      <div className='w-full h-96'>
        <img src={data.image} alt="" className='w-full h-full object-contain' />
      </div>
      <p>
        {data.description}
      </p>
    </div>
  )
}

export default Product
