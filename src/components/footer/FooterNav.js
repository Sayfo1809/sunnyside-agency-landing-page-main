import React from "react";
import { NavLink } from "react-router-dom";

import "./FooterNav.css";

const FooterNav = () => {
  return (
    <nav className="footer-nav">
      <ul className="footer-nav__items">
        <li className="footer-nav__item">
          <NavLink to="/" className="footer-nav__link">
            {" "}
            About{" "}
          </NavLink>
        </li>
        <li className="footer-nav__item">
          <NavLink to="/" className="footer-nav__link">
            {" "}
            Services{" "}
          </NavLink>
        </li>
        <li className="footer-nav__item">
          <NavLink to="/" className="footer-nav__link">
            {" "}
            Projects{" "}
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default FooterNav;
