import React from 'react';
import logo from "../../assets/images/logo3.svg";
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <header className="navbar">
      <img src={logo} alt="Logo" className="logo" />

      <nav>
        <ul className="navlinks">
          <li><Link>Home</Link></li>
          <li><Link>About</Link></li>
          <li><Link>Work</Link></li>
          <li><Link>Resume</Link></li>
        </ul>
      </nav>
    </header>
  )
}

export default Navbar;
