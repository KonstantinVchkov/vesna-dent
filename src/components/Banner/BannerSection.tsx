import React from "react";
import styles from "./styles.module.scss";
import { motion } from "framer-motion";

export type TBanner = {
  title: string;
  secondTitle?: string; // Uncomment this if you want to use secondTitle
};

const BannerSection = ({ title, secondTitle }: TBanner) => {
  const handleClick = () => {
    console.log("Ova ke vidime kade ke odi");
  };

  return (
    <div className={styles.Banner}>
      <div className={styles.text}>
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          style={{display:"flex"}}
          className={styles.MotionElements}
        >
          <motion.h1 className={styles.title}>{title}</motion.h1>
          {/* {secondTitle && <motion.h2 className={styles.secondTitle}>{secondTitle}</motion.h2>} */}
          <motion.img src={"/assets/images/dental-img.png"} alt="Dental Care" />
        </motion.div>
        <button onClick={handleClick} className={styles.reserve}>
          Сакате Поубава Насмевка?
        </button>
      </div>
    </div>
  );
};

export default BannerSection;
