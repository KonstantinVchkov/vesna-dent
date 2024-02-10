"use-client"
import { ServicesOffer } from "@/Data/ProjectData";
import React from "react";
import ServiceOfferCard, { framerMotionsInView } from "./ServiceOffer";
import styles from "./styles.module.scss";
import { motion } from "framer-motion";
const MainServiceComp = () => {
  const slicedCards = ServicesOffer.slice(0,3)
  return (
    <>
      <motion.h1
        variants={framerMotionsInView}
        whileInView="animate"
        custom={1}
        initial="initial"
        style={{ textAlign: "center" }}
      >
        Наши Услуги
      </motion.h1>
      <div className={styles.OfferService}>
        {slicedCards.map((card) => (
          <ServiceOfferCard key={card.id} {...card} />
        ))}
      </div>
    </>
  );
};

export default MainServiceComp;
