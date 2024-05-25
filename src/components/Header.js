import React from "react";

const Header = () => {
  return (
    <div className="headerbackground">
      <img className="logo" src="https://cdn.discordapp.com/attachments/1232074071941054564/1243697332009304105/Lucky_Fitness_Logo.png?ex=66526ae6&is=66511966&hm=4045fbd3c0306ae8ab39573212e0eddfad9fab4e74f65eb3f271a9f51713dc38&" alt="luckyfitness" />
     
     <ul>
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

