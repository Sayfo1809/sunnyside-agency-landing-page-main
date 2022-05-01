import React from "react";
import { Link } from "react-router-dom";

import Row from "../../UIElements/row/Row";
import Column from "../../UIElements/columns/Column";

import "./TransformStandOut.css";

const Transform = () => {
  return (
    <section className="transform">
      <Row>
        <Column columns="col-1-of-2">
          <div className="transform__type">
            <h2 className="heading-secondary">Transform your brand</h2>
            <p className="main__text">
              We are a full-service creative agency specializing in helping
              brands grow fast. Engage your clients through compelling visuals
              that do most of the marketing for you.
            </p>
            <Link to="/" className="link link--cta">
              Learn more
            </Link>
          </div>
        </Column>
        <Column columns="col-1-of-2">
          <div className="transform__image"></div>
        </Column>
      </Row>
    </section>
  );
};

export default Transform;
