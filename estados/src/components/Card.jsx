function Card ({ titulo, categoria, precio, image }) {
  return (
    <div>
      <img src={image} alt="" />
      <h1>{titulo}</h1>
      <p>{categoria}</p>
      <p>{precio}</p>
    </div>
  )
}

export default Card