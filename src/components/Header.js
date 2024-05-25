import React from "react";
import logo from '../assets/lucky-fitness.png'
const Header = () => {
  return (
    <div className="navbar">

      <img src={logo} alt="luckyfitness" className="logo" />
    
     <ul>
      <li className="title">LUCKY FITNESS</li>
      <li>About</li>
      <li>Contact Us</li>
     </ul>

     <div className="search-box">
      <input type="text" placeholder="Search"/>
      
     </div>

    </div>
  );
};

export default Header;

 {/* <h1 className="title">Lucky Fitness</h1> */}
      {/* <div>
        <span className="spans">About</span>
        <span className="spans">Contact Us</span>
  </div> */}

