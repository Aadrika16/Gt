
import { Link } from 'react-router-dom'
import {
  FaHome,
  FaServicestack,
  FaInfoCircle
} from 'react-icons/fa'

import './index.css'

const Header = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        GT<span>APEX </span>MARKETING
      </div>

      <ul className="nav-links">
        <li>
          <Link to="/">
            <FaHome className="nav-icon" />
            <span className="nav-text">Home</span>
          </Link>
        </li>

        <li>
          <Link to="/services">
            <FaServicestack className="nav-icon" />
            <span className="nav-text">Services</span>
          </Link>
        </li>

        <li>
          <Link to="/about">
            <FaInfoCircle className="nav-icon" />
            <span className="nav-text">About</span>
          </Link>
        </li>
        
        <li>
          <Link to="/clients">
            <FaInfoCircle className="nav-icon" />
            <span className="nav-text">Clients</span>
          </Link>
        </li>
      </ul>

      <Link to="/contact" className="nav-btn">
        <span className="nav-text contact-text">BOOK NOW</span>
      </Link>
    </nav>
  )
}

export default Header