import React, { useState, useEffect } from "react";
import windowImage from "../../assets/window.png";

const Navb = () => {
  const [activeSection, setActiveSection] = useState("landing");

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section");
      let currentSection = "";

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;

        if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
          currentSection = section.id;
        }
      });

      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []); // Run the effect only once on component mount
  const [dropdownVisible, setDropdownVisible] = useState(false);

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };
  return (
    <div className="navbar">
      <div className="logo-container">
        <img alt="logo" className="logo" src={windowImage} />
      </div>
      <div className="nav-items">
        <ul>
          <li
            style={{
              width: 100,
              display: "flex",
              backgroundColor: activeSection === "landing" ? "#AFAFAD" : "",
              boxShadow: activeSection === "landing" ? "0px 4px 4px 0px rgba(255, 255, 255, 0.62) inset" : "",
            }}
            className="nav-link"
          >
            <a href="#landing">Home</a>
          </li>
          <li
            style={{
              backgroundColor: activeSection === "trex" ? "#AFAFAD" : "",
              boxShadow: activeSection === "trex" ? "0px 4px 4px 0px rgba(255, 255, 255, 0.62) inset" : "",
            }}
            className="nav-link"
          >
            <a href="#trex">Trex Game</a>
          </li>
          <li
            style={{
              backgroundColor: activeSection === "inscription" ? "#AFAFAD" : "",
              boxShadow: activeSection === "inscription" ? "0px 4px 4px 0px rgba(255, 255, 255, 0.62) inset" : "",
            }}
            className="nav-link"
          >
            <a href="#inscription">Inscription</a>
          </li>
          <li
            style={{
              backgroundColor: activeSection === "lotto" ? "#AFAFAD" : "",
              boxShadow: activeSection === "lotto" ? "0px 4px 4px 0px rgba(255, 255, 255, 0.62) inset" : "",
            }}
            className="nav-link"
          >
            <a href="#lotto">Lotto</a>
          </li>
          <li
            style={{
              backgroundColor: activeSection === "roadmap" ? "#AFAFAD" : "",
              boxShadow: activeSection === "roadmap" ? "0px 4px 4px 0px rgba(255, 255, 255, 0.62) inset" : "",
            }}
            className="nav-link"
          >
            <a href="#roadmap">Roadmap</a>
          </li>
          <li
            style={{
              backgroundColor: activeSection === "contact" ? "#AFAFAD" : "",
              boxShadow: activeSection === "contact" ? "0px 4px 4px 0px rgba(255, 255, 255, 0.62) inset" : "",
            }}
            className="nav-link"
          >
            <a href="#contact">Contact</a>
          </li>
          <li
            style={{
              backgroundColor: activeSection === "launch" ? "#AFAFAD" : "",
              boxShadow: activeSection === "launch" ? "0px 4px 4px 0px rgba(255, 255, 255, 0.62) inset" : "",
            }}
            className="nav-link"
          >
            <a  onClick={toggleDropdown} href="#l">Launch App {dropdownVisible && (
              <ul className="dropdown">
                <li>
                  <a className="drop" href="#launch">Coming Soon</a>
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
  );
};

export default Navb;
