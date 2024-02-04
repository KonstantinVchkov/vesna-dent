import React from "react";
import styles from "./styles.module.scss";
import { motion } from "framer-motion";
import { handleRoute } from "@/utils/routing";

export type TBanner = {
  title: string;
  secondTitle?: string; // Uncomment this if you want to use secondTitle
};

const BannerSection = ({ title, secondTitle }: TBanner) => {


  return (
    <div className={styles.Banner}>
      {/* HERE WE WILL HAVE A REACT AWESOME SLIDER! */}
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
        <button onClick={() => {
          handleRoute("/ourwork")
        }} className={styles.reserve}>
          Сакате Поубава Насмевка?
        </button>
      </div>
    </div>
  );
};

export default BannerSection;
