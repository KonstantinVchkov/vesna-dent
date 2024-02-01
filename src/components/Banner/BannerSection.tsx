"use-client";
import React from "react";
import styles from "./styles.module.scss";
export type TBanner = {
  title: string;
  secondTitle: string;
};
const BannerSection = ({ title, secondTitle }: TBanner) => {
  return (
    <div className={styles.Banner}>
      <div className={styles.text}>
        <h1 className={styles.title}>{title}</h1>
        <h2 className={styles.secondTitle}>{secondTitle}</h2>
        <div>
          <button className={styles.reserve}>Сакате Поубава Насмевка?</button>
        </div>
      </div>
    </div>
  );
};

export default BannerSection;
