import React, { useState } from 'react';
import logo from "../../assets/images/logo3.svg";
import { Link, useLocation } from 'react-router-dom';
import * as GiIcons from "react-icons/gi";
import * as AiIcons from 'react-icons/ai';

const Navbar = () => {
  const [opennav, setopennav] = useState(false);
  const handleNavToggle = (e) => {
    e.preventDefault();
    setopennav(!opennav);
  }

  //Assigning location to a variable
  const location = useLocation();

  //Destrucuring pathname from location
  const { pathname } = location;

  const splitLocation = pathname.split("/")

  //Javascript split method to get the name of the path in array
  return (
    <header className="navbar">
      <img src={logo} alt="Logo" className="logo" />
      <button className="nav-toggle" onClick={(e) => handleNavToggle(e)}>{opennav ? <AiIcons.AiOutlineClose /> : <GiIcons.GiHamburgerMenu />}</button>
      <nav>
        <ul className={opennav ? "navlinks sr-only" : "navlinks"} >
          <li className={splitLocation[1] === "" ? "active" : ""}><Link to="/">Home</Link></li>
          <li><Link to="/">About</Link></li>
          <li><Link to="/">Work</Link></li>
          <li><Link to="/">Resume</Link></li>
        </ul>
      </nav>
    </header>
  )
}

export default Navbar;
