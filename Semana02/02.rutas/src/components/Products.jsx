import { useEffect, useState } from "react"
import CardProduct from "./CardProduct"

const Products = () => {
  const [data, setData] = useState([])

  useEffect(() => {
    const getAllProducts = async () => {
      const fetchResponse = await fetch("https://fakestoreapi.com/products?limit=5")
      const response = await fetchResponse.json()

      setData(response)
    }

    getAllProducts()
  }, [])

  return (
    <div className="max-w-[1200px] mx-auto">
      <section className="flex flex-wrap gap-4 justify-around">
        {data && data.length > 0 && data.map((product) => ( 
          <CardProduct key={product.id} data={product} />
        ))}
      </section>
    </div>
  )
}

export default Products
