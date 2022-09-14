import React, {Component } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import logoImage from "./Images/dog.jpg";
import githubLogo from "./Images/github.png";
import facebookLogo from "./Images/facebook.jpg";
import linkedLogo from "./Images/linked.png";

class Navbar extends Component {
  state = {};
  render() {
    return (
      <div className="navbar">
        <div className="logo">
        
          <p className="title">Samuel Maltais</p>
          <img
            className="logo-image"
            src={logoImage}
            height={50}
            width={50}
          ></img>
          <a href="https://github.com/SamuelMaltais/" target="_blank">
            <img
              src={githubLogo}
              height={35}
              width={35}
              className="contactlinks"
            ></img>
          </a>
          <a href="https://www.facebook.com/samuel.maltais.90" target="_blank">
            <img
              src={facebookLogo}
              height={35}
              width={35}
              className="contactlinks"
            ></img>
          </a>
          <a
            href="https://www.linkedin.com/in/samuel-maltais-a144ab1b1"
            target="_blank"
          >
            <img
              src={linkedLogo}
              height={35}
              width={35}
              className="contactlinks"
            ></img>
          </a>
        </div>
        <input type="checkbox" class="menu-trigger" id="menu-trigger1"/>
        <label for="menu-trigger1" class="hamburger-menu menuBtn1" role="button"></label>
        <ul className="links">
          <Link className="link" to="/">
            Home
          </Link>
          <Link className="link" to="/projectsAndInterships">
            Projects and interships
          </Link>
          <Link className="link" to="/aboutMe">
            About-me
          </Link>
          <Link className="link" to="/contact">
            Contact
          </Link>
        </ul>
      </div>
    );
  }
}
export default Navbar;
