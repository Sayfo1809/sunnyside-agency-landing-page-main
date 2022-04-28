import React from "react";
import Column from "../UIElements/columns/Column";

const Testimonial = ({
  clientImage,
  clientName,
  clientPosition,
  clientTestimony,
}) => {
  return (
    <Column columns="col-1-of-3">
      <img src={clientImage} alt={clientName} className="testimonial__image" />
      <p className="testimonial__testimony">{clientTestimony}</p>
      <h4 className="testimonial__user-name">{clientName}</h4>
      <p className="testimonial__user-position">{clientPosition}</p>
    </Column>
  );
};

export default Testimonial;
