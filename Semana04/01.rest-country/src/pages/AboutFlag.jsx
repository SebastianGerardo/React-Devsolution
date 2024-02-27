import { useParams } from "react-router-dom"

const AboutFlag = () => {
  const { idFlag } = useParams()

  console.log(idFlag)

  return (
    <div>
      Aquí estarían la información del país
    </div>
  )
}

export default AboutFlag
