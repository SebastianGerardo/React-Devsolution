import { useNavigate } from "react-router-dom"

const Flags = () => {
  const navigate = useNavigate()

  return (
    <div>
      Aquí estarían todos los países
      <button onClick={() => navigate("/flag/2")}>
        Ir a un país
      </button>
    </div>
  )
}

export default Flags
