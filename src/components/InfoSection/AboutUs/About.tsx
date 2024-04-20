import React from "react";
import styles from "./styles.module.scss";
import Accordion from "react-bootstrap/Accordion";
import "bootstrap/dist/css/bootstrap.min.css";
import Image from "next/image";

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
  return (
    <>
      <div className={styles.AboutComp}>
        <div className={styles.FirstSection}></div>
        <div className={styles.SecondSection}>
          <h1>Кои сме ние</h1>
          <div className={styles.AboutUsText}>
            <div className={styles.AboutText}>
              <Image
                src={"/assets/images/some-dental-logo.png"}
                width={150}
                height={150}
                className={styles.LogoText}
                alt={"logo-vesna-dent"}
              />
              <div className={styles.RightSec}>
                <h2>Весна Дент</h2>
                <p>
                  {paragraph}
                </p>
              </div>
            </div>
            <div className={styles.LeftSquare}></div>
            <div className={styles.RightSquare}></div>
          </div>
        </div>
        <div className={styles.ThirdSection}>
          <h2>Нашиот Тим</h2>

        </div>
      </div>
    </>
  );
};

export default About;
