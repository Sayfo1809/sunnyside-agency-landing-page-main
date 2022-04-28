import React from "react";
import Images from "../UIElements/svgs/Images";

import "./Hero.css";

const Hero = () => {
  return (
    <section className="hero">
      <h1 className="heading-primary">We are creatives</h1>
      <Images image="arrow-down" styling="hero__arrow" />
    </section>
  );
};

export default Hero;
