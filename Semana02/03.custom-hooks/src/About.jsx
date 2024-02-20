import { useCount } from "./hooks/useCount"
import { useCountObject } from "./hooks/useCountObject"

const About = () => {
  const { count, addCount } = useCountObject()

  return (
    <div>
      Contador {count}
      <button onClick={addCount}>
        Cambiar
      </button>
    </div>
  )
}

export default About
