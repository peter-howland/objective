import React, { UseState } from 'react'
import { Link } from 'react-router-dom'

function NavBar() {
  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo">
            Objective <i className="fa-brackets-curly" />
          </Link>
        </div>
      </nav>
    </>
  )
}

export default NavBar
