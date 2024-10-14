import React, { useState } from "react";
import styles from "./styles.module.scss";
import Accordion from "react-bootstrap/Accordion";
import "bootstrap/dist/css/bootstrap.min.css";
import { ourDentists } from "../../../Data/ProjectData";
import Facebook from "../../Svg-Icons/Facebook";
import Instagram from "../../Svg-Icons/Instagram";
import Linkedin from "../../Svg-Icons/Linkedin";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";

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
interface ExpandedState {
  [key: number]: boolean;
}
const About = ({ smallParagraph, secondTitle }: TAbout) => {
  const [expanded, setExpanded] = useState<ExpandedState>({});
  const toggleExpand = (id: number) => {
    setExpanded((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };
  const animationDuration = 5;
  return (
    <>
      <div className={styles.AboutComp}>
        <div className={styles.FirstSection}></div>
        <div className={styles.FirstPart}>
          {" "}
          <h1>{secondTitle}</h1>
          <h3>Весна Дент</h3>
          <p>{smallParagraph}</p>
        </div>
        <div className={styles.container}>
          <h1>Нашиот тим</h1>{" "}
          {ourDentists.map((dentist) => {
            const paragraphClass = expanded[dentist.id]
              ? styles.expanded
              : styles.collapsed;

            return (
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
                  <div className={styles.bio}>
                    <p className={paragraphClass}>{dentist.bio}</p>
                    <div className={styles.row}>
                      {" "}
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
                      )}{" "}
                    </div>

                    <button
                      className={`${styles.button} ${styles.hidden}`}
                      onClick={() => toggleExpand(dentist.id)}
                    >
                      <span>
                        {expanded[dentist.id]
                          ? "Прочитај помалку"
                          : "Прочитај повеќе"}
                      </span>
                      <FontAwesomeIcon
                        icon={
                          expanded[dentist.id] ? faChevronUp : faChevronDown
                        }
                      />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default About;
