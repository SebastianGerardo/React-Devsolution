import { useState } from "react"

export const Home = () => {
  const [data, setData] = useState({
    name: "Sebastian",
    lastname: "",
    age: ""
  })
  
  const handleChange = (event) =>{
    setData(prev => ({ 
      ...prev, 
      [event.target.name]: event.target.value 
    }))
  }
  
  return (
    <section className="home">
      soy el home
      <form>
        <input value={data.name} name="name" placeholder="Nombre" type="text" onChange={handleChange} />
        <input value={data.lastname} name="lastname" onChange={handleChange} type="text" />
        <input value={data.age} name="age" onChange={handleChange} type="text" />
        <button>
          Enviar
        </button>
      </form>
    </section>
  )
}
