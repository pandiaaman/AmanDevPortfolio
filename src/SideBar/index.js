import React from "react";
import "./SideBarStyle.css";
import "./SideBarJs.js";
const SideBar = () => {
  return (
    <div id="root">
      <div className="theme-picker">
        <span className="theme dark select"></span>
        <span className="theme light"></span>
        <span className="theme purple"></span>
      </div>

      <div className="navigation">
        <ul>
          <li>
            <a href="#">
              <span className="icon">
                <i className="fab fa-apple"></i>
              </span>
              <span className="title">Brand Name</span>
            </a>
          </li>
          <li>
            <a href="#">
              <span className="icon">
                <i className="fa fa-house-user"></i>
              </span>
              <span className="title">Dashboard</span>
            </a>
          </li>
          <li>
            <a href="#">
              <span className="icon">
                <i className="fa fa-user"></i>
              </span>
              <span className="title">Customers</span>
            </a>
          </li>
          <li>
            <a href="#">
              <span className="icon">
                <i className="fa fa-message"></i>
              </span>
              <span className="title">Messages</span>
            </a>
          </li>
          <li>
            <a href="#">
              <span className="icon">
                <i className="fa fa-circle-info"></i>
              </span>
              <span className="title">help</span>
            </a>
          </li>
          <li>
            <a href="#">
              <span className="icon">
                <i className="fa fa-hammer"></i>
              </span>
              <span className="title">Setting</span>
            </a>
          </li>
          <li>
            <a href="#">
              <span className="icon">
                <i className="fa fa-lock"></i>
              </span>
              <span className="title">Password</span>
            </a>
          </li>
          <li>
            <a href="#" targer="_blank">
              <span className="icon">
                <i className="fa fa-arrow-right-from-bracket"></i>
              </span>
              <span className="title">sign out</span>
            </a>
          </li>
        </ul>
        <div className="toggle"></div>
      </div>
    </div>
  );
};

export default SideBar;
