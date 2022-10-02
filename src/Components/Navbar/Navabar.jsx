import "./Navbar.css";
import { FaBars, FaTimes } from "react-icons/fa";
import { useRef } from "react";
import { NavLink } from "react-router-dom";
import logo from "../../Assets/logo.png";

import React from "react";

const Navbar = () => {
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  return (
    <header className="header-nav">
      <div className="flex-smal">
        <img src={logo} alt="" />
        <nav className="nav1" ref={navRef}>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/instalaciones">Instalaciones</NavLink>
          <NavLink to="/sobre-nosotros">Sobre Nosotros</NavLink>
          <NavLink to="/contacto">Contacto</NavLink>
          <button className="nav-btn nav-close-btn" onClick={showNavbar}>
            <FaTimes />
          </button>
        </nav>
        <button className="nav-btn" onClick={showNavbar}>
          <FaBars />
        </button>
      </div>
    </header>
  );
};

export default Navbar;
