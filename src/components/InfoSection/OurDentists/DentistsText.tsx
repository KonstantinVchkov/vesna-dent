import React from "react";
import styles from "./styles.module.scss"
import { handleRoute } from "@/utils/routing";
type Tdentists = {
  title: string;
  paragraph: string;
};
const DentistsText = ({ title, paragraph }: Tdentists) => {
  return (
    <div>
      <div className={styles.MainText}>
        <h1>{title}</h1>
        <p>{paragraph}</p>
        <span className={styles.btn} onClick={() => handleRoute("/about")}>Види Повеќе</span>
      </div>
    </div>
  );
};

export default DentistsText;
