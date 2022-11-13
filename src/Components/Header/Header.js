import React from 'react'
import "./Header.css"
import logo from "../../Assets/images/logo2.png"

const Header = () => {
  return (
    <>
      <header className="header">
        <nav className="nav container">
            <a href="index.html" className="nav__logo">
                <img src={logo} alt="Logo" />
            </a>
            <div className="nav__menu">
                <ul className="nav__list">
                  <li className="nav__item">
                    <a href="/" class='nav__link nav__icon_size'>
                      <i class='bx bx-cart'></i>
                    </a>
                  </li>
                  <li className="nav__item">
                  <a href="/" className="nav__btn nav__link">
                      Login
                    </a>
                  </li>
                  <li className="nav__item ">
                  <a href="/" className="nav__btn nav__link">
                      Sign Up
                    </a>
                  </li>
                </ul>
            </div>
        </nav>
      </header>
    </>
  )
}

export default Header