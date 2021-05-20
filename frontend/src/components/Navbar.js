import React from 'react'

const Navbar = () => {
    return (
      
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <a className="mx-3 navbar-brand" href="/"><h3>StudEval</h3></a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavDropdown"
        aria-controls="navbarNavDropdown"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavDropdown">
        <ul className="navbar-nav ms-auto">
          <li className="nav-item active">
            <a className="nav-link" href="/"
              >Home </a>
          </li>
          <li className="nav-item" id="tej">
            <a className="nav-link" href="/">About</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/">Contact Us</a>
          </li>
          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle"
              href="/"
              id="navbarDropdownMenuLink"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >

              More
            </a>
            <div
              className="dropdown-menu bg-dark text-primary"
              aria-labelledby="navbarDropdownMenuLink"
            >
              <a className="dropdown-item text-light" href="/">Social</a>
              <a className="dropdown-item text-light" href="/">Co-labs</a>
              <a className="dropdown-item text-light" href="/">Help</a>
            </div>
          </li>
        </ul>
      </div>
    </nav>

    )
}

export default Navbar
