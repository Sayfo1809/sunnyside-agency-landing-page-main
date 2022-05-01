import React from "react";

import Images from "../UIElements/svgs/Images";
import FooterNav from "./FooterNav";
import FooterSocials from "./FooterSocials";

import FooterLogo from "../../images/logo.svg";

import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <Images image="logo" styling="footer__logo" />

      <FooterNav />
      <FooterSocials />

      <svg>
        <use href={FooterLogo} />
      </svg>
    </footer>
  );
};

export default Footer;
