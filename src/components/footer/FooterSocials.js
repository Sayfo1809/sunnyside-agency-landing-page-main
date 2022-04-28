import React from "react";
import Images from "../UIElements/svgs/Images";

import "./FooterSocials.css";

const ICONS = [
  {
    name: "icon-facebook",
  },
  {
    name: "icon-instagram",
  },
  {
    name: "icon-twitter",
  },
  {
    name: "icon-pinterest",
  },
];

const FooterSocials = () => {
  return (
    <div className="footer__socials">
      {ICONS.map((icon, index) => (
        <Images image={icon.name} styling="footer__icon" key={index} />
      ))}
    </div>
  );
};

export default FooterSocials;
