const dataPagina1 = {
  nombres: "Sebastian",
  apellidos: "Sanchez"
}

export default function Pagina1 ({ data }) {
  return (
    <div>
      <pre>
        {JSON.stringify(data || dataPagina1, null, 2)}
      </pre>
    </div>
  )
}
