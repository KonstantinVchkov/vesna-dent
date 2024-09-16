/*import React from "react";
import style from "./style.module.scss";
import { WorkItems } from "@/Data/ProjectData";
import styles from "../OurWork/style.module.scss";

export type WorkItem = {
  id: number;
  title: string;
  paragraph: string;
};

export type TworkPage = {
  WorkItems: WorkItem[];
};

const OurWork = ({ WorkItems }: TworkPage) => {
  return (
    <div className={style.OurWork}>
      <div className={styles.FirstPart}>
        {WorkItems.map((workItem) => (
          <div key={workItem.id} className={styles.section}>
            <h1>{workItem.title}</h1>
            <p>{workItem.paragraph}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurWork;
*/
