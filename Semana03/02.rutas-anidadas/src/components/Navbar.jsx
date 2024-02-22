import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <div className="navbar">
      <span>
        Logo
      </span>
      <ul className="navbar_list">
        <li>
          <Link to="/">
            Home
          </Link>
        </li>
        <li>
          <Link to="/about">
            About
          </Link>
        </li>
        <li>
          <Link to="/contact">
            Contact
          </Link>
        </li>
      </ul>
    </div>
  )
}

export default Navbar
