import { Link } from "react-router-dom"

const CardProduct = ({ data }) => {
  return (
    <Link className="shadow-lg rounded-md" to={`/product/${data.id}`}>
      <h1>{data.title}</h1>
      <div className="w-full h-96">
        <img src={data.image} alt="" className="w-full h-full object-contain" />
      </div>
    </Link>
  )
}

export default CardProduct
