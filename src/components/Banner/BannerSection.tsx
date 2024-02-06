import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS
import styles from "./styles.module.scss";
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
            className={styles.carouselImg}
            src={image}
            alt={`Slide ${index}`}
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
