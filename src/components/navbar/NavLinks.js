import React from "react";
import { NavLink } from "react-router-dom";

const LINKS_DATA = [
  {
    linkText: "About",
  },
  {
    linkText: "Services",
  },
  {
    linkText: "Projects",
  },
];

const NavLinks = () => {
  return (
    <ul className="nav__items">
      {LINKS_DATA.map((link, index) => (
        <li className="nav__item" key={index}>
          <NavLink to="/" className="nav__link">
            {link.linkText}
          </NavLink>
        </li>
      ))}
      <li className="nav__link nav__link--btn">Contact</li>
    </ul>
  );
};

export default NavLinks;
