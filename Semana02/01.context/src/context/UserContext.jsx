import { createContext, useState } from "react";

export const UserContext = createContext()

export default function SomeContext ({ children }) {
  const dataApp = {
    nombres: "Pedro",
    apellidos: "Infante"
  }
  const [data, setData] = useState(null)

  return (
    <UserContext.Provider value={{ data, setData, dataApp }}>
      {children}
    </UserContext.Provider>
  )
}