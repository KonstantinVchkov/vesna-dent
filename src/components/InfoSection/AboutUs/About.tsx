import React from "react";
import styles from "./styles.module.scss";
import Accordion from "react-bootstrap/Accordion";
import "bootstrap/dist/css/bootstrap.min.css"; 

type TQuestionAndAnswer = {
  question: string;
  answer: string;
  id: number; 
};

export type TAbout = {
  title: string;
  secondTitle: string;
  paragraph: string;
  images: string[];
  faqTitle: string;
  QuestionsAndAnswers: TQuestionAndAnswer[];
};

const About = ({
  title,
  secondTitle,
  paragraph,
  faqTitle,
  images,
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
                  animationDuration: `${animationDuration * images.length}s`,
                  animationDelay: `-${animationDuration * index}s`,
                }}
              />
            ))}
          </div>
        </div>
      </div>
      <div className={styles.FAQBody}>
        <h2>{faqTitle}</h2>
        {QuestionsAndAnswers.map((qa) => (
          <Accordion key={qa.id} defaultActiveKey="0">
            <Accordion.Item eventKey={qa.id.toString()}>
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
