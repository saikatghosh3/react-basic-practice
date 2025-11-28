import React from "react";
import "../css/Navbar.css";

const Navbar = () => {
  return (
    <>
    <div className="navbar">
      <div className="logo">MyLogo</div>

      <ul className="nav-menu">
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Services</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
    </div>
    
    </>
  );
};

export default Navbar;
