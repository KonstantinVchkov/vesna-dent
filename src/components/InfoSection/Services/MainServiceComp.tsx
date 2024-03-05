"use-client";
import { ServicesOffer } from "@/Data/ProjectData";
import React from "react";
import ServiceOfferCard from "./ServiceOffer";
import styles from "./styles.module.scss";
import { motion } from "framer-motion";
const MainServiceComp = () => {
  const slicedCards = ServicesOffer.slice(0, 3);
  return (
    <>
      <h1 style={{ textAlign: "center" }}>Наши Услуги</h1>
      <div className={styles.OfferService}>
        {slicedCards.map((card) => (
          <ServiceOfferCard key={card.id} {...card} />
        ))}
      </div>
    </>
  );
};

export default MainServiceComp;
