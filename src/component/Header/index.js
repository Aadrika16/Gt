import { useState } from "react"
import { Link, useLocation } from "react-router-dom"
import {
  FaHome,
  FaServicestack,
  FaInfoCircle,
  FaUsers,
  FaBars,
  FaTimes
} from "react-icons/fa"

import "./index.css"
import { useHistory } from "react-router-dom/cjs/react-router-dom.min"

const Header = () => {
  const location = useLocation()
  const history = useHistory()
  const [open, setOpen] = useState(false)

  const onClickToContact = () =>{
     history.push('/contact')
    setOpen(false)

  }

  return (
    <header className="header">
      {/* Logo */}
      <div className="logo">
        <img
          src="https://res.cloudinary.com/doyaebals/image/upload/v1777117610/82023ee6966f15c767c25263f523a655a0945cfe_bxiaan.png"
          alt="logo"
        />
      </div>

      {/* Hamburger */}
      <div className="hamburger" onClick={() => setOpen(!open)}>
        {open ? <FaTimes /> : <FaBars />}
      </div>

      {/* Nav */}
      <ul className={`nav-menu ${open ? "active" : ""}`}>
        <li>
          <Link to="/" className={location.pathname === "/" ? "active" : ""}>
            <FaHome /> Home
          </Link>
        </li>

        <li>
          <Link to="/services" className={location.pathname === "/services" ? "active" : ""}>
            <FaServicestack /> Services
          </Link>
        </li>

        <li>
          <Link to="/about" className={location.pathname === "/about" ? "active" : ""}>
            <FaInfoCircle /> About
          </Link>
        </li>

        <li>
          <Link to="/clients" className={location.pathname === "/clients" ? "active" : ""}>
            <FaUsers /> Clients
          </Link>
        </li>

        <li>
          <button className="btn" onClick={onClickToContact}>BOOK NOW</button>
        </li>
      </ul>
    </header>
  )
}

export default Header