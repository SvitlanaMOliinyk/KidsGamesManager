import { NavLink } from "react-router-dom";
import {
  faCopyright,
  faEnvelope,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = () => {
  return (
    <footer className="container-footer">
      <div className="app-name">
        <h3>KIDS' GAMES MANAGER</h3>
        <div className="copyright-section">
          <p>
            <FontAwesomeIcon icon={faCopyright} /> 2023 Kids' Games Manager
          </p>
        </div>
      </div>

      <div className="info-section">
        <ul className="useful-links">
          <span style={{ fontWeight: "bold", fontSize: "larger" }}>
            <li>
              <NavLink to="about">About</NavLink>
            </li>
            <li>
              <NavLink to="help">Help</NavLink>
            </li>
          </span>
        </ul>
      </div>

      <div className="follow">
        <h4>Contact us</h4>
        <ul className="social-media-links">
          <li>
            <FontAwesomeIcon icon={faEnvelope} /> kidgamemanager@info.com
          </li>
          <li>
            <FontAwesomeIcon icon={faPhone} /> +31 555 00 555 0
          </li>
        </ul>
      </div>
    </footer>
  );
};
export default Footer;
