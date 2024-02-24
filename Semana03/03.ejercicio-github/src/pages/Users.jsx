import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

const Users = () => {
  const params = useParams()
  const [users, setUsers] = useState([]) 

  useEffect(() => {
    const getData = async () => {
      const fetchData = await fetch(`https://api.github.com/users?q=${params.userName}`)
      const response = await fetchData.json()
  
      setUsers(response)
    }

    getData()
  }, [])

  return (
    <div>
      {users && users.length > 0 && users.map(obj => (
        <h1 key={obj.id}>
          {obj.login}
        </h1>
      ))}
    </div>
  )
}

export default Users
