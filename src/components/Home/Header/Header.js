import React, { useState } from "react";
import './Header.scss';
import { NavLink } from "react-router-dom";
import images from "../../../assets/images";
import Button from "../../Button";

export default function Header() {
  const [check, setCheck] = useState(false);

  const getClass = (event) => {
    if (event.currentTarget.className) {
      setCheck(false);
      document.body.classList.remove("no-scroll");
    }
  };

  const handleChecked = () => {
    setCheck(!check);
    if (!check) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }
  };

  return (
    <>
      <header className="header">
        <nav className="navbar navbar-expand-lg">
          <div className="container d-flex justify-content-between position-relative">
            <input
              type="checkbox"
              onChange={handleChecked}
              checked={check}
              className="toggle-menu"
            />
            <a className="navbar-brand position-relative" href="/">
              <img src={images.logo} alt="Logo" className="navbar-logo" />
            </a>
            <div className="collapse navbar-collapse" id="navbarNavDropdown">
              <div className="background-blur" onClick={handleChecked}></div>
              <ul className="navbar-nav menu">
                <li className="nav-item dropdown">
                  <div
                    className="nav-link dropdown-toggle"
                    id="navbarDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Về ISTECH
                  </div>
                  
                  <ul
                    className="dropdown-menu"
                    onClick={getClass}
                    aria-labelledby="navbarDropdown"
                  >
                    <li>
                      <NavLink className="dropdown-item pt-3 pb-3" to="/about">
                        Về chúng tớ
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        className="dropdown-item pt-3 pb-3"
                        to="/board-of-director"
                      >
                        Ban chủ nhiệm
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        className="dropdown-item pt-3 pb-3"
                        to="/departments"
                      >
                        Các ban mảng
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
                    Hoạt động
                  </div>
                  <ul
                    className="dropdown-menu"
                    onClick={getClass}
                    aria-labelledby="navbarDropdown"
                  >
                    <li>
                      <NavLink className="dropdown-item pt-3 pb-3" to="/events">
                        Sự kiện
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        className="dropdown-item pt-3 pb-3"
                        to="/internal-activities"
                      >
                        Hoạt động nội bộ
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
                    Tài nguyên
                  </div>
                  <ul
                    className="dropdown-menu"
                    onClick={getClass}
                    aria-labelledby="navbarDropdown"
                  >
                    <li>
                      <NavLink className="dropdown-item pt-3 pb-3" to="/blog">
                        Blog
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        className="dropdown-item pt-3 pb-3"
                        to="/resource-hub"
                      >
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
                    Đối tác & Liên hệ
                  </div>
                  <ul
                    className="dropdown-menu"
                    onClick={getClass}
                    aria-labelledby="navbarDropdown"
                  >
                    <li>
                      <NavLink
                        className="dropdown-item pt-3 pb-3"
                        to="/partners"
                      >
                        Đối tác
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        className="dropdown-item pt-3 pb-3"
                        to="/contact"
                      >
                        Liên hệ
                      </NavLink>
                    </li>
                  </ul>
                </li>
                <li className="nav-item">
                  <Button className="btn-signin-mobile" to="/login">
                    Đăng nhập
                  </Button>
                </li>
              </ul>
            </div>
            <Button className="btn-sign-in" to="/login">
              Đăng nhập
            </Button>
          </div>
        </nav>
      </header>
    </>
  );
}

window.addEventListener("scroll", function () {
  let header = this.document.querySelector("header");
  if (header) header.classList.toggle("sticky", this.window.scrollY > 0);
});
