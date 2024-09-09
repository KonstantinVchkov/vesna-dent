import { OurWork, Work } from "@/Data/ProjectData";
import CarouselSection from "@/components/Banner/Carousel";
import React from "react";
import styles from "../../components/InfoSection/OurWork/style.module.scss";
export type WorkItem = {
  id: number;
  title: string;
  paragraph: string;
};
export type TworkPage = {
  workData: typeof OurWork;
  Work: WorkItem[];
};
const OurWorkPage = ({ workData, Work }: TworkPage) => {
  const generateRandomWidth = () => {
    return Math.floor(Math.random() * (170 - 100 + 1) + 100);
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
  return (
    <div>
      <div className={styles.side + " " + styles.left}>{leftRectangles}</div>
      <CarouselSection Slide={workData.slides} />
      <div className={styles.FirstPart}>
        {Work.map((workItem) => (
          <div key={workItem.id} className={styles.section}>
            <h1>{workItem.title}</h1>
            <p>{workItem.paragraph}</p>
          </div>
        ))}
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
