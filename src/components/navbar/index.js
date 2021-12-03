import React, { useState } from 'react';
import logo from "../../assets/images/logo3.svg";
import { Link } from 'react-router-dom';
import * as GiIcons from "react-icons/gi";

const Navbar = () => {
  const [opennav, setopennav] = useState(false);
  const handleNavToggle = (e) => {
    e.preventDefault();
    setopennav(!opennav);
  }
  return (
    <header className="navbar">
      <img src={logo} alt="Logo" className="logo" />
      <button className="nav-toggle" onClick={(e) => handleNavToggle(e)}><GiIcons.GiHamburgerMenu /></button>
      <nav>
        <ul className={opennav ? "navlinks sr-only" : "navlinks"} >
          <li><Link to="/">Home</Link></li>
          <li><Link to="/">About</Link></li>
          <li><Link to="/">Work</Link></li>
          <li><Link to="/">Resume</Link></li>
        </ul>
      </nav>
    </header>
  )
}

export default Navbar;
