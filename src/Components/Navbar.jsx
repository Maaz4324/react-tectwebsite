import React from "react";
import "../style/Navbar.css";

function Navbar() {
  return (
    <div className="nav-container">
      <div className="col-10 mx-auto">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid fluid1">
            <a className="navbar-brand" href="/">
              TekWorld
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a
                    activeClassName="menu_active"
                    className="nav-a"
                    aria-current="page"
                    href="#home"
                  >
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    activeClassName="menu_active"
                    className="nav-a"
                    href="#service"
                  >
                    Service
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    activeClassName="menu_active"
                    className="nav-a"
                    href="#gallery"
                  >
                    Gallery
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    activeClassName="menu_active"
                    className="nav-a"
                    href="#contact"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default Navbar;
