import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/lucky-fitness.png";
const Header = () => {
  return (
    <div className="navbar">
      <img src={logo} alt="luckyfitness" className="logo" />

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
    </div>
  );
};

export default Header;
