import React from "react";

import Column from "../../UIElements/columns/Column";

import "./GraphicDesign.css";

const Photography = () => {
  return (
    <Column columns="col-1-of-2">
      <div className="photography">
        <h3 class="heading-tertiary">Photography</h3>
        <p class="main__text main__text--photography">
          Increase your credibility by getting the most stunning, high-quality
          photos that improve your business image.
        </p>
      </div>
    </Column>
  );
};

export default Photography;
