import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./styles.module.scss";

export type Slide = {
  title: string;
  image: string;
  description?: string;
  technics?: string[];
};

export type TBanner = {
  titles?: string[];
  images?: string[];
  descriptions?: string[];
  Slide?: Slide[];
  workTechnic?: string;
  workDescription?: string;
  technics?: string[];
};

const CarouselSection = ({
  titles,
  images,
  workDescription,
  descriptions,
  technics,
  workTechnic,
  Slide,
}: TBanner) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const handleSelect = (selectedIndex: number) => {
    setActiveIndex(selectedIndex);
  };

  return (
    <div className={styles.mainContainer}>
      <Carousel fade onSelect={handleSelect}>
        {Slide
          ? Slide.map((slide, index) => (
              <Carousel.Item
                key={index}
                style={{ backgroundColor: "rgb(26 19 19)" }}
              >
                <img
                  className={styles.carouselImg}
                  src={slide.image}
                  alt={`Slide ${index}`}
                />
                <Carousel.Caption>
                  <h3>{slide.title}</h3>
                </Carousel.Caption>
              </Carousel.Item>
            ))
          : images?.map((image, index) => (
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
                  <h3>{titles?.[index]}</h3>
                </Carousel.Caption>
              </Carousel.Item>
            ))}
      </Carousel>
    </div>
  );
};

export default CarouselSection;
{
  /* <div className={styles.DescriptionField}>
        {Slide ? (
          <>
            <h2>{Slide[activeIndex].title}</h2>
            <p>{Slide[activeIndex].description}</p>
            {Slide[activeIndex].technics?.map((technic, idx) => (
              <span key={idx} className={styles.Technic}>
                {technic}
              </span>
            ))}
          </>
        ) : (
          <>
            <h2>{workTechnic}</h2>
            {technics?.[activeIndex] && (
              <span className={styles.Technic}>{technics[activeIndex]}</span>
            )}
            <h2>{workDescription}</h2>
            {descriptions?.[activeIndex] && (
              <p className={styles.descParagraph}>
                {descriptions[activeIndex]}
              </p>
            )}
          </>
        )}
      </div> */
}
