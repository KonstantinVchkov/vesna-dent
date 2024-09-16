import { OurWork, Work } from "@/Data/ProjectData";
import CarouselSection from "@/components/Banner/Carousel";
import React, { useState } from "react";
import styles from "../../components/InfoSection/OurWork/style.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";

export type WorkItem = {
  id: number;
  title: string;
  paragraph: string;
};
export type TworkPage = {
  workData: typeof OurWork;
  Work: WorkItem[];
};
interface ExpandedState {
  [key: number]: boolean;
}
const OurWorkPage = ({ workData, Work }: TworkPage) => {
  const [expanded, setExpanded] = useState<ExpandedState>({});

  const generateRandomWidth = () => {
    return Math.floor(Math.random() * (100 - 100 + 1) + 50);
  };

  const leftRectangles = Array.from({ length: 4 }, (_, i) => (
    <div
      key={i}
      className={styles.rectangles}
      style={{ width: `${generateRandomWidth()}px` }}
    ></div>
  ));
  const rightRectangles = Array.from({ length: 4 }, (_, i) => (
    <div
      key={i}
      className={styles.rectangles}
      style={{ width: `${generateRandomWidth()}px` }}
    ></div>
  ));
  const toggleExpand = (id: number) => {
    setExpanded((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <div>
      <div className={styles.side + " " + styles.left}>{leftRectangles}</div>
      <CarouselSection Slide={workData.slides} />
      <div className={styles.FirstPart}>
        {Work.map((workItem) => {
          const paragraphClass = expanded[workItem.id]
            ? styles.expanded
            : styles.collapsed;

          return (
            <div key={workItem.id} className={styles.section}>
              <h1>{workItem.title}</h1>
              <p className={paragraphClass}>{workItem.paragraph}</p>
              <button
                className={`${styles.button} ${styles.hidden}`}
                onClick={() => toggleExpand(workItem.id)}
              >
                {expanded[workItem.id]
                  ? "Прочитај помалку "
                  : "Прочитај повеќе "}
                <FontAwesomeIcon
                  icon={expanded[workItem.id] ? faChevronUp : faChevronDown}
                />
              </button>
            </div>
          );
        })}
      </div>
      <div className={styles.side + " " + styles.right}>{rightRectangles}</div>
    </div>
  );
};

export default OurWorkPage;

export async function getStaticProps() {
  return {
    props: {
      workData: OurWork,
      Work: Work,
    },
  };
}
