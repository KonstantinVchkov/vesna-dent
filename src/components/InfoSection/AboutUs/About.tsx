import React from "react";
import styles from "./styles.module.scss";
import Accordion from "react-bootstrap/Accordion";
import "bootstrap/dist/css/bootstrap.min.css"; // Ensure Bootstrap CSS is imported

type TQuestionAndAnswer = {
  question: string;
  answer: string;
  id: number; // Ensure each QA pair has a unique ID
};

export type TAbout = {
  title: string;
  secondTitle: string;
  paragraph: string;
  images: string[]; // Changed to support an array of images
  faqTitle: string;
  QuestionsAndAnswers: TQuestionAndAnswer[];
};

const About = ({
  title,
  secondTitle,
  paragraph,
  faqTitle,
  images, // Now an array
  QuestionsAndAnswers,
}: TAbout) => {
  const animationDuration = 5;
  return (
    <>
      <div className={styles.AboutComp}>
        <div className={styles.FirstSection}>
          <h1>{title}</h1>
        </div>
        <div className={styles.SecondSection}>
          <div className={styles.RightText}>
            <h2>{secondTitle}</h2>
            <p>{paragraph}</p>
          </div>
          <div className={styles.LeftImg}>
            {images.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`office-${index}`}
                style={{
                  animationDuration: `${animationDuration * images.length}s`, // Full cycle duration
                  animationDelay: `-${animationDuration * index}s`, // Start time for each image
                }}
              />
            ))}
          </div>
        </div>
      </div>
      <div className={styles.FAQBody}>
        <h2>{faqTitle}</h2>
        {QuestionsAndAnswers.map((qa) => (
          <Accordion defaultActiveKey="0">
            <Accordion.Item key={qa.id} eventKey={qa.id.toString()}>
              <Accordion.Header>{qa.question}</Accordion.Header>
              <Accordion.Body>{qa.answer}</Accordion.Body>
            </Accordion.Item>
          </Accordion>
        ))}
      </div>
    </>
  );
};

export default About;
