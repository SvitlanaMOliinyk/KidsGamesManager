import { useState } from "react";
import { useNavigate, NavLink } from "react-router-dom";
import { baseUrl } from "../constants";
import Help from "./Help";

const Footer = () => {
  return (
    <footer className="container-footer">
      <div className="app-name">
        <h3>KIDS' GAMES MANAGER</h3>
      </div>

      <div className="info-section">
      <NavLink to="help">Help</NavLink>

        <div className="follow">
          <h4>Follow Us</h4>
          <ul className="social-media-links">
            <li></li>
          </ul>
        </div>
        <div className="copyright-section">
          Copyright 2023 - All rights reserved.
        </div>
      </div>
    </footer>
  );
};
export default Footer;
