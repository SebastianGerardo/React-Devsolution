import { Outlet } from "react-router-dom"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"

export const Home = () => {
  return (
    <div className="main">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  )
}
