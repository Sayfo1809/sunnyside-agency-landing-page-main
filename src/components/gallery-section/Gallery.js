import React from "react";

import "./Gallery.css";

import milk from "../../images/desktop/image-gallery-milkbottles.jpg";
import orange from "../../images/desktop/image-gallery-orange.jpg";
import cone from "../../images/desktop/image-gallery-cone.jpg";
import sugar from "../../images/desktop/image-gallery-sugarcubes.jpg";

const GALLERY = [
  {
    imgUrl: milk,
  },
  {
    imgUrl: orange,
  },
  {
    imgUrl: cone,
  },
  {
    imgUrl: sugar,
  },
];

const Gallery = () => {
  return (
    <section className="gallery">
      {GALLERY.map((image, index) => (
        <img src={image.imgUrl} className="gallery__image" key={index} />
      ))}
    </section>
  );
};

export default Gallery;
