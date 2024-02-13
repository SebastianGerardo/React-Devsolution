import { useState } from "react"

const dataPagina1 = {
  nombres: "Sebastian",
  apellidos: "Sanchez"
}

export default function Pagina1 () {
  const [dataForm, setDataForm] = useState({})

  const handleChange = (event) => {
    setDataForm(prevData => ({ 
      ...prevData,
      [event.target.name]: event.target.value
    }))
  }

  return (
    <div>
      <form action="">
        <input type="text" name="nombre" value={dataForm.nombre} onChange={handleChange} />
        <input type="text" name="apellido" value={dataForm.apellido} onChange={handleChange} />
      </form>
      <pre>
        {JSON.stringify(dataForm, null, 2)}
      </pre>
    </div>
  )
}
