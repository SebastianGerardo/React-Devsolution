import { useContext } from "react"
import { UserContext } from "../context/UserContext"

export default function Button () {
  const { setData, dataApp } = useContext(UserContext)
  return (
    <button onClick={() => setData(prevData => prevData === null ? dataApp : null)}>
      Cambiar data
    </button>
  )
}