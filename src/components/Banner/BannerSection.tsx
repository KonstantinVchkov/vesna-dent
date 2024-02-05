import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS

export type TBanner = {
  titles: string[];
  images: string[];
};

const BannerSection = ({ titles, images }: TBanner) => {
  return (
    <Carousel fade>
      {images.map((image, index) => (
        <Carousel.Item key={index} style={{ backgroundColor: "rgb(26 19 19)" }}>
          <img
            className="d-block w-100"
            src={image}
            alt={`Slide ${index}`}
            style={{ opacity: 0.6 }} 
          />
          <Carousel.Caption>
            <h1>{titles[index]}</h1>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default BannerSection;
