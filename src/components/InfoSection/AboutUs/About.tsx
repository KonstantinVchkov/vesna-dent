import React from "react";
import styles from "./styles.module.scss";
import Accordion from "react-bootstrap/Accordion";
import 'bootstrap/dist/css/bootstrap.min.css'; // Ensure Bootstrap CSS is imported

type TQuestionAndAnswer = {
  question: string;
  answer: string;
  id: number; // Ensure each QA pair has a unique ID
};

export type TAbout = {
  title: string;
  secondTitle: string;
  paragraph: string;
  image: string;
  faqTitle: string;
  QuestionsAndAnswers: TQuestionAndAnswer[];
};

const About = ({
  title,
  secondTitle,
  paragraph,
  faqTitle,
  image,
  QuestionsAndAnswers,
}: TAbout) => {
  return (
    <div className={styles.AboutComp}>
      <div className={styles.FirstSection}>
        <h1>{title}</h1>
      </div>
      <div className={styles.SecondSection}>
        <div className={styles.LeftImg}>
          <img src={image} alt="office" />
        </div>
        <div className={styles.RightText}>
          <h2>{secondTitle}</h2>
          <p>{paragraph}</p>
        </div>
      </div>
      <div className={styles.FAQBody}> 
        <h2>{faqTitle}</h2>
        <Accordion defaultActiveKey="0">
          {QuestionsAndAnswers.map((qa) => (
            <Accordion.Item key={qa.id} eventKey={qa.id.toString()}>
              <Accordion.Header>{qa.question}</Accordion.Header>
              <Accordion.Body>{qa.answer}</Accordion.Body>
            </Accordion.Item>
          ))}
        </Accordion>
      </div>
    </div>
  );
};

export default About;
