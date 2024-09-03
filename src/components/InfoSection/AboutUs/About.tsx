import React from "react";
import styles from "./styles.module.scss";
import Accordion from "react-bootstrap/Accordion";
import "bootstrap/dist/css/bootstrap.min.css";
import { ourDentists } from "../../../Data/ProjectData";
import Facebook from "../../Svg-Icons/Facebook";
import Instagram from "../../Svg-Icons/Instagram";
import Linkedin from "../../Svg-Icons/Linkedin";
type TQuestionAndAnswer = {
  question: string;
  answer: string;
  id: number;
};
export type TDentists = {
  id: number;
  images: string[];
  name: string;
  surname: string;
  facebook: string;
  instagram?: string;
  linkedin?: string;
  bio: string;
};
export type TAbout = {
  title: string;
  secondTitle: string;
  paragraph: string;
  images: string[];
  faqTitle: string;
  QuestionsAndAnswers: TQuestionAndAnswer[];
  smallParagraph: string;
  dentists: TDentists[];
};

const About = ({ smallParagraph, secondTitle }: TAbout) => {
  const animationDuration = 5;
  return (
    <>
      <div className={styles.AboutComp}>
        <div className={styles.FirstSection}></div>
        <div className={styles.FirstPart}>
          {" "}
          <h1>{secondTitle}</h1>
          <h3>Vesna Dent</h3>
          <p>{smallParagraph}</p>
        </div>
        <div>
          <h1>Nasiot tim</h1>{" "}
          {ourDentists.map((dentist) => (
            <div key={dentist.id} className={styles.dentists}>
              <div className={styles.background}>
                <img
                  src={dentist.images[0]}
                  alt={`${dentist.name} ${dentist.surname}`}
                />{" "}
              </div>
              <div className={styles.dent}>
                {" "}
                <h2>
                  {dentist.name} {dentist.surname}
                </h2>
                <div>
                  <p>{dentist.bio}</p>
                  <a
                    href={dentist.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Facebook />
                  </a>
                  {dentist.instagram && (
                    <a
                      href={dentist.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Instagram />
                    </a>
                  )}
                  {dentist.linkedin && (
                    <a
                      href={dentist.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Linkedin />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default About;
