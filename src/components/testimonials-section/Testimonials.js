import React from "react";

import "./Testimonials.css";

import Emily from "../../images/image-emily.jpg";
import Thomas from "../../images/image-thomas.jpg";
import Jennie from "../../images/image-jennie.jpg";
import Row from "../UIElements/row/Row";
import Testimonial from "./Testimonial";

const TESTIMONIALS_DATA = [
  {
    clientName: "Emily R.",
    clientPosition: "Marketing Director",
    clientTestimony:
      "We put our trust in Sunnyside and they delivered, making sure our needs were met and deadlines were always hit.",
    clientImage: Emily,
  },
  {
    clientName: "Thomas S.",
    clientPosition: "Chief Operating Officer",
    clientTestimony:
      "Sunnyside’s enthusiasm coupled with their keen interest in our brand’s success made it a satisfying and enjoyable experience.",
    clientImage: Thomas,
  },
  {
    clientName: "Jennie R.",
    clientPosition: "Business Owner",
    clientTestimony:
      "Incredible end result! Our sales increased over 400% when we worked with Sunnyside. Highly recommended!",
    clientImage: Jennie,
  },
];

const Testimonials = () => {
  return (
    <section className="testimonials">
      <h2 className="heading-tertiary">Client testimonials</h2>

      <Row>
        {TESTIMONIALS_DATA.map((testimony, index) => (
          <Testimonial
            key={index}
            clientImage={testimony.clientImage}
            clientName={testimony.clientName}
            clientPosition={testimony.clientPosition}
            clientTestimony={testimony.clientTestimony}
          />
        ))}
      </Row>
    </section>
  );
};

export default Testimonials;
