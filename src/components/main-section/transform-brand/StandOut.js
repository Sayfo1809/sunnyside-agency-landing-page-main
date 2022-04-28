import React from "react";
import { Link } from "react-router-dom";

import Row from "../../UIElements/row/Row";
import Column from "../../UIElements/columns/Column";

import "./TransformStandOut.css";

const StandOut = () => {
  return (
    <Row>
      <Column columns="col-1-of-2">
        <div className="stand-out__image"></div>
      </Column>
      <Column columns="col-1-of-2">
        <div className="stand-out__type">
          <h2 className="heading-secondary">Stand out to the right audience</h2>
          <p className="main__text">
            Using a collaborative formula of designers, researchers,
            photographers, videographers, and copywriters, we’ll build and
            extend your brand in digital places.
          </p>
          <Link to="/" className="link link--cta link--red">
            Learn more
          </Link>
        </div>
      </Column>
    </Row>
  );
};

export default StandOut;
