import { Navigate, useLocation } from "react-router-dom"

const PrivateRouter = ({ children }) => {
  const locations = useLocation()

  return locations.state?.isLogged === true ? children : <Navigate to="/home" />
}

export default PrivateRouter
