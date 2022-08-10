import React from 'react'
import { AppRoutes } from '../../routes/AppRoutes'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
          <Link className="nav-link" to={AppRoutes.REGISTRATIONFORM}>LOGO</Link>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav">
              <Link className="nav-link" to={AppRoutes.REGISTRATIONFORM}>Home</Link>
              <Link className="nav-link" to={AppRoutes.THANKYOU}>Thank you</Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Header
