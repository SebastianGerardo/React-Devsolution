import Button from "../components/Button"
import Input from "../components/Input"
import githubImg from "../assets/github.png"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

const GithubSearch = () => {
  const [search, setSearch] = useState("")
  const navigate = useNavigate()

  return (
    <div className="h-screen flex flex-col justify-center items-center gap-4">
      <article className="flex flex-col justify-center items-center">
        <picture className="block w-32 h-32">
          <img src={githubImg} alt="github" className="w-full h-full object-contain" />
        </picture>
        <h1 className="text-2xl font-bold">Github search</h1>
      </article>
      <article className="flex flex-col gap-2 w-3/4 md:w-96">
        <Input value={search} onChange={(event) => setSearch(event.target.value)} />
        <Button onClick={() => navigate(`/users/${search}`)}>
          Buscar
        </Button>
      </article>
    </div>
  )
}

export default GithubSearch
