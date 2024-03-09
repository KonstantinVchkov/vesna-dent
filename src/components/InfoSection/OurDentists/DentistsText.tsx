import React from "react";
import styles from "./styles.module.scss"
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
      </div>
    </div>
  );
};

export default DentistsText;
