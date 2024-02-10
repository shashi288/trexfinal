import React, { useState } from "react";
import windowImage from "../../assets/window1.png";
import iconhome from "../../assets/iconhome1.png"
import icontrex from "../../assets/icontrex1.png"
import iconinscription from "../../assets/iconinscription3.png"
import iconlotto from "../../assets/iconlotto.png"
import iconroadmap from "../../assets/iconroadmap.png"

const Navbar = () => {
  const [dropdownVisible, setDropdownVisible] = useState(false);

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };
  const [activeItem, setActiveItem] = useState("home");

  const handleItemClick = (itemName) => {
    setActiveItem(itemName);
  };
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (<>
    <div className='navbar'>
      <div className="logo-container">
        <img alt="logo" className="logo" src={windowImage} />
      </div>
     
      <div className="nav-items">
      <ul>
        <li  className={`nav-link ${activeItem === 'home' ? 'active' : ''}`} onClick={() => handleItemClick('home')}>
          <a href="#landing">Home</a>
        </li>
        <li className={`nav-link ${activeItem === 'trex' ? 'active' : ''}`} onClick={() => handleItemClick('trex')}>
          <a href="#trex">Trex Game</a>
        </li>
        <li className={`nav-link ${activeItem === 'inscription' ? 'active' : ''}`} onClick={() => handleItemClick('inscription')}>
          <a href="#inscription">Inscription</a>
        </li>
        <li  className={`nav-link ${activeItem === 'lotto' ? 'active' : ''}`} onClick={() => handleItemClick('lotto')}>
          <a href="#lotto">Lotto</a>
        </li>
        <li  className={`nav-link ${activeItem === 'roadmap' ? 'active' : ''}`} onClick={() => handleItemClick('roadmap')}>
          <a href="#roadmap">Roadmap</a>
        </li>
        <li  className={`nav-link ${activeItem === 'contact' ? 'active' : ''}`} onClick={() => handleItemClick('contact')}>
          <a href="#contact">Contact</a>
        </li>
        <li
            className="nav-link"
          >
            <a  onClick={toggleDropdown} href="#launch" >Launch App {dropdownVisible && (
              <ul className="dropdown">
                <li>
                  <a className="drop" >Coming Soon</a>
                </li>
                
              </ul>
            )}</a>
          </li>
      </ul>
    </div>
      <div className="nav-end">
        <ul>
          <li nav-end-item>?</li>
          <li nav-end-item>X</li>
        </ul>
      </div>
      </div>
      <>
      {isOpen && <div className="backdrop" onClick={closeMenu}></div>}
      <nav className={`navbar-mob ${isOpen ? 'open' : ''}`}>
      <div className="logo-container">
        <img alt="logo" className="logo" src={windowImage} />
      </div>
      <div className="hamburger-container">
      <div className="hamburger" onClick={toggleMenu}>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>
      </div>
      <ul className="nav-item-mob">
        <li style={{fontFamily:"Pixelify Sans"}}>  <a href="#landing" style={{display:"flex" , justifyContent:"start"}} > &nbsp;<img src={iconhome} />&nbsp;&nbsp;Home</a></li>
        <li style={{fontFamily:"Pixelify Sans"}}><a href="#trex" style={{display:"flex" , justifyContent:"start"}}>&nbsp;<img src={icontrex} />&nbsp;Trex Game</a></li>
        <li style={{fontFamily:"Pixelify Sans"}}><a href="#inscription" style={{display:"flex" , justifyContent:"start"}}>&nbsp;&nbsp;<img src={iconinscription} />&nbsp;&nbsp;Inscription</a></li>
        <li style={{fontFamily:"Pixelify Sans"}}><a href="#lotto" style={{display:"flex" , justifyContent:"start"}}>&nbsp;&nbsp;<img src={iconlotto} />&nbsp;&nbsp;&nbsp;Lotto</a></li>
        <li style={{fontFamily:"Pixelify Sans"}}><a href="#roadmap" style={{display:"flex" , justifyContent:"start"}}>&nbsp;&nbsp;<img src={iconroadmap} />&nbsp;&nbsp;Roadmap</a></li>
        <li style={{fontFamily:"Pixelify Sans"}}><a href="#contact">&emsp;&ensp;Contact</a></li>
        <li style={{fontFamily:"Pixelify Sans"}}><a href="#l"  onClick={toggleDropdown}>&emsp;&ensp;Launch App{dropdownVisible && (
              <ul className="dropdown">
                <li>
                  <a className="drop" >Coming Soon</a>
                </li>
                
              </ul>
            )}</a></li>
      </ul>
    </nav>
    </>
      </>
  );
};

export default Navbar;
