import React from "react";
import logo from "../images/logo.svg";
import arrowdown from "../images/icon-arrow-light.svg";

function UpperPlace() {
  return (
    <div className="Navbar-background">
      <div className="logo">
        <img src={logo} alt=""></img>
        <ul>
          <li>
            <a href="/#">
              Product <img src={arrowdown} alt=""></img>
            </a>
          </li>
          <li>
            <a href="/#">
              Company <img src={arrowdown} alt=""></img>
            </a>
          </li>
          <li>
            <a href="/#">
              Connect <img src={arrowdown} alt=""></img>
            </a>
          </li>
        </ul>
        <div className="menuright">
          <ul>
            <li>
              <a href="/#" className="login">
                Login
              </a>
            </li>
            <li>
              <a href="/#" className="signup">
                Sign Up
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="textsection">
        <h1>A modern publishing platform</h1>
        <p>Grow your audience and build your online brand</p>
        <div className="buttonsection">
          <ul>
            <li>
              <a href="/#" className="startforfree">
                Start for Free
              </a>
            </li>
            <li>
              <a href="/#" className="learnmore">
                Learn More
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default UpperPlace;
