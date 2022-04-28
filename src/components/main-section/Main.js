import React from "react";

import StandOut from "./transform-brand/StandOut";
import Transform from "./transform-brand/Transform";
import Row from "../UIElements/row/Row";
import GraphicDesign from "./graphic-design/GraphicDesign";
import Photography from "./graphic-design/Photography";

import "./Main.css";

const Main = () => {
  return (
    <main className="main">
      <Transform />
      <StandOut />

      <Row>
        <GraphicDesign />
        <Photography />
      </Row>
    </main>
  );
};

export default Main;
