import React from "react";
import styles from "./styles.module.scss";
type TBanner = {
  title: string;
  secondTitle: string;
};
const BannerSection = ({ title, secondTitle }: TBanner) => {
  return (
    <div className={styles.Banner}>
      <h1 className={styles.title}>{title}</h1>
      <h2 className={styles.title}>{secondTitle}</h2>
    </div>
  );
};

export default BannerSection;
