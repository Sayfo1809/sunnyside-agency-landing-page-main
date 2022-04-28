import React from "react";

import Column from "../../UIElements/columns/Column";

import "./GraphicDesign.css";

const GraphicDesign = () => {
  return (
    <Column colums="col-1-of-2">
      <div class="graphic-design">
        <h3 class="heading-tertiary">Graphic design</h3>
        <p class="main__text">
          Great design makes you memorable. We deliver artwork that underscores
          your brand message and captures potential clients’ attention.
        </p>
      </div>
    </Column>
  );
};

export default GraphicDesign;
