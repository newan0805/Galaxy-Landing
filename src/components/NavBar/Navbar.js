import React, { useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
  const [click, setClick] = useState(false);

  const handleClick = () => {
    setClick(!click);
  };

  return (
    <div className="header">
      <Link to="/">
        <h1>Project-X</h1>
      </Link>
      <ul className={click ? "nav-menu active" : "nav-menu"}>
        <Link to="#">
          <li>Home</li>
        </Link>
        <Link to="/#">
          <li>Projects</li>
        </Link>
        <Link to="/#">
          <li>Launches</li>
        </Link>
        <Link to="/#">
          <li>Contact</li>
        </Link>
      </ul>
      <div className="hamburger" onClick={handleClick}>
        {click ? (
          <FaTimes size={20} style={{ color: "#fff" }} />
        ) : (
          <FaBars size={20} style={{ color: "#fff" }} />
        )}
      </div>
    </div>
  );
}

export default Navbar;
