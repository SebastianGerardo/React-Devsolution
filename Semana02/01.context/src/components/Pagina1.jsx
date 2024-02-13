import { useContext } from "react"
import { UserContext } from "../context/UserContext"

const dataPagina1 = {
  nombres: "Sebastian",
  apellidos: "Sanchez"
}

export default function Pagina1 () {
  const { data } = useContext(UserContext)
  return (
    <div>
      <pre>
        {JSON.stringify(data || dataPagina1, null, 2)}
      </pre>
    </div>
  )
}
