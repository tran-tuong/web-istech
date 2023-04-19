import React, { useRef } from "react";
import { NavLink } from "react-router-dom";
import "./header.scss"
import images from "../../../assets/images"
import Button from "../../Button";

export default function Header() {
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  }

  return (
    <header className="header">
      <nav className="navbar navbar-expand-lg">
        <div className="container d-flex justify-content-between position-relative">
          <a className="navbar-brand position-relative" href="/">
            <img src={images.logo} alt="Logo" className="navbar-logo" />
          </a>
          <div className="collapse navbar-collapse d-flex justify-content-center" id="navbarNavDropdown">
            <input type="checkbox" className="toggle-menu" onClick={showNavbar}/>

            <ul className="navbar-nav menu" ref={navRef}>
              <li className="nav-item dropdown">
                <div
                  className="nav-link dropdown-toggle"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  About
                </div>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <NavLink className="dropdown-item pt-3 pb-3" to='/about'>
                      About Us
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className="dropdown-item pt-3 pb-3" to='/board-of-director'>
                      Board of Directors
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className="dropdown-item pt-3 pb-3" to='/departments'>
                      Departments
                    </NavLink>
                  </li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <div
                  className="nav-link dropdown-toggle"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Activities
                </div>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <NavLink className="dropdown-item pt-3 pb-3" to="/events">
                      Events
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className="dropdown-item pt-3 pb-3" to="/internal-activites">
                      Internal Activities
                    </NavLink>
                  </li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <div
                  className="nav-link dropdown-toggle"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Resources
                </div>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <NavLink className="dropdown-item pt-3 pb-3" to="/blog">
                      Blog
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className="dropdown-item pt-3 pb-3" to="/resource-hub">
                      Resource Hub
                    </NavLink>
                  </li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <div
                  className="nav-link dropdown-toggle"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Partners & Contacts
                </div>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <NavLink className="dropdown-item pt-3 pb-3" to="/partners">
                      Partners
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className="dropdown-item pt-3 pb-3" to="/contact">
                      Contact Us
                    </NavLink>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <Button className="btn-sign-in-responsive" to="/login" target='_blank'>Sign In</Button>
              </li>
            </ul>
          </div>
          <Button className="btn-sign-in" to="/login" target='_blank'>Sign In</Button>
        </div>
      </nav>
    </header>
  );
}

window.addEventListener('scroll', function () {
  let header = this.document.querySelector('header');
  header.classList.toggle('sticky', this.window.scrollY > 0);
})
