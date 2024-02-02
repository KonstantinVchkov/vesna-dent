import { ServicesOffer } from "@/Data/ProjectData";
import React from "react";
import ServiceOfferCard, { framerMotionsInView } from "./ServiceOffer";
import styles from "./styles.module.scss";
import { motion } from "framer-motion";
const MainServiceComp = () => {
  return (
    <>
      <motion.h1
        variants={framerMotionsInView}
        whileInView="animate"
        custom={1}
        initial="initial"
        style={{ textAlign: "center" }}
      >
        Our Services
      </motion.h1>
      <div className={styles.OfferService}>
        {ServicesOffer.map((card) => (
          <ServiceOfferCard key={card.id} {...card} />
        ))}
      </div>
    </>
  );
};

export default MainServiceComp;
