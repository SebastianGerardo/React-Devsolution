
const dataPagina2 = {
  nombres: "Gerardo",
  apellidos: "Abarca",
}

export default function Pagina2 ({ data }) {
  return (
    <div>
    <pre>
      {JSON.stringify(data || dataPagina2, null, 2)}
    </pre>
  </div>
  )
}
