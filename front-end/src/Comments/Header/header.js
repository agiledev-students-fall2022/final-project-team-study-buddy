import React from "react";
import "./Header.css";
import studyLogo from "../../images/studyLogo.png";
import logo from "../../images/logo.png";
import printerLogo from "../../images/printerLogo.png";
import wifiLogo from "../../images/wifiLogo.png";

function Header() {
  return (
    <div>
      <div className="header_wrapper">
        <img src={logo} id="header-logo"></img>

        {/* test next to map */}
        <h1> Study Buddy </h1>
        <div id="header-logos">
          <img src={printerLogo} id="filter-logo"></img>
          <img src={wifiLogo} id="filter-logo"></img>
          <img src={studyLogo} id="filter-logo"></img>
        </div>
      </div>
    </div>
  );
}

export default Header;
