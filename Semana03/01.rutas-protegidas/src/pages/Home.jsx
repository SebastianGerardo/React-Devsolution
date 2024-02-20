import { useNavigate, useLocation } from "react-router-dom"

const Home = () => {
  const navigate = useNavigate()
  const locations = useLocation()
  console.log(locations)

  return (
    <div>
      <h1>Esto es el home</h1>
      <button onClick={() => navigate("/protegido", { state: { isLogged: true }})}>
        Ir al inicio
      </button>
    </div>
  )
}

export default Home