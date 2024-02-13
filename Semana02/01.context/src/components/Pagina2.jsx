import { useContext } from "react"
import { UserContext } from "../context/UserContext"
import Button from "./Button"

const dataPagina2 = {
  nombres: "Gerardo",
  apellidos: "Abarca",
}

export default function Pagina2 () {
  const { data } = useContext(UserContext)
  return (
    <div>
    <pre>
      {JSON.stringify(data || dataPagina2, null, 2)}
    </pre>
    <Button />
  </div>
  )
}
