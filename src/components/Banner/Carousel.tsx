import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS
import styles from "./styles.module.scss";
export type TBanner = {
  titles: string[];
  images: string[];
  descriptions?: string[];
  workTechnic?: string;
  workDescription?: string;
  id: number;
  technics?: string[];
};

const CarouselSection = ({
  titles,
  images,
  workDescription,
  descriptions,
  technics,
  workTechnic,
  id,
}: TBanner) => {
  return (
    <div className={styles.mainContainer}>
      <Carousel fade>
        {images?.map((image, index) => (
          <Carousel.Item
            key={index}
            style={{ backgroundColor: "rgb(26 19 19)" }}
          >
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
        <div className={styles.DescriptionField}>
          <h2>{workTechnic}</h2>
          {technics?.map((technic, idx) => (
            <span key={idx} className={styles.Technic}>
              {technic}
            </span>
          ))}
          <h2>{workDescription}</h2>
          {descriptions?.map((description, idx) => (
            <p key={idx} className={styles.descParagraph}>
              {description}
            </p>
          ))}
        </div>
    </div>
  );
};

export default CarouselSection;
