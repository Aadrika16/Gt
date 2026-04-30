import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import {
  FaHome,
  FaServicestack,
  FaInfoCircle,
  FaUsers,
  FaBars,
  FaTimes
} from 'react-icons/fa'

import RegisterForm from '../RegisterForm'
import './index.css'

const Header = () => {
  const location = useLocation()

  const [open, setOpen] = useState(false)
  const [showRegister, setShowRegister] = useState(false)

  const toggleRegister = () => {
    setShowRegister(!showRegister)
    setOpen(false)
  }

  return (
    <>
      <header className="header">
        <div className="logo">
          <img
            src="https://res.cloudinary.com/doyaebals/image/upload/v1777117610/82023ee6966f15c767c25263f523a655a0945cfe_bxiaan.png"
            alt="logo"
          />
        </div>

        <div className="hamburger" onClick={() => setOpen(!open)}>
          {open ? <FaTimes /> : <FaBars />}
        </div>

        <ul className={`nav-menu ${open ? 'active' : ''}`}>
          <li>
            <Link to="/" className={location.pathname === '/' ? 'active' : ''}>
              <FaHome /> Home
            </Link>
          </li>

          <li>
            <Link
              to="/services"
              className={location.pathname === '/services' ? 'active' : ''}
            >
              <FaServicestack /> Services
            </Link>
          </li>

          <li>
            <Link
              to="/about"
              className={location.pathname === '/about' ? 'active' : ''}
            >
              <FaInfoCircle /> About
            </Link>
          </li>

          <li>
            <Link
              to="/clients"
              className={location.pathname === '/clients' ? 'active' : ''}
            >
              <FaUsers /> Clients
            </Link>
          </li>

          <li>
            <button className="btn" onClick={toggleRegister}>
              REGISTER NOW
            </button>
          </li>
        </ul>
      </header>

      {/* Fullscreen Register Modal */}
      <div className={`register-modal ${showRegister ? 'show' : ''}`}>
        <div className="register-overlay" onClick={toggleRegister}></div>

        <div className="register-panel">
          <div className="register-top">
            <h2>Register Now</h2>
            <button className="close-btn" onClick={toggleRegister}>
              ✕
            </button>
          </div>

          <RegisterForm />
        </div>
      </div>
    </>
  )
}

export default Header