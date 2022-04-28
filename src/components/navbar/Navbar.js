import React from "react";
import Container from "../UIElements/container/Container";
import Images from "../UIElements/svgs/Images";

import "./Navbar.css";
import NavLinks from "./NavLinks";

const Navbar = () => {
  return (
    <nav className="nav">
      <Container>
        <div className="nav__brand">
          <Images image="logo" styling="nav__logo" />
        </div>

        <NavLinks />
      </Container>
    </nav>
  );
};

export default Navbar;
