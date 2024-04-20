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
        <div className={styles.FirstSection}></div>
        
      </div>
    </>
  );
};

export default About;
