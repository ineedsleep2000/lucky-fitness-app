import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/lucky-fitness.png";
const Header = () => {
  return (
    <header>
      <h1 className="navbar">
        <img src={logo} alt="luckyfitness" className="logo" />
        <h1 className="title">LUCKY FITNESS</h1>
      </h1>
      <nav>
        <ul className="navigation">
          <li>
            <Link className="button" to="/workoutpage">
              Home
            </Link>
          </li>
          <li>
            <Link className="button" to="/contact">
              Contact Us
            </Link>
          </li>
          <li>
            <Link className="button" to="/about">
              About
            </Link>
          </li>
        </ul>
      </nav>
      <nav className="nav-under-header"></nav>
    </header>
  );
};

export default Header;
