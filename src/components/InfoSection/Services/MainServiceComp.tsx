import { ServicesOffer } from "@/Data/ProjectData";
import React from "react";
import ServiceOfferCard from "./ServiceOffer";
import styles from './styles.module.scss'
const MainServiceComp = () => {
  return (
    <div className={styles.OfferService}>
      {ServicesOffer.map((card) => (
        <ServiceOfferCard key={card.id} {...card} />
      ))}
    </div>
  );
};

export default MainServiceComp;
