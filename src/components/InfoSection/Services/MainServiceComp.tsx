"use-client";
import { ServicesOffer } from "@/Data/ProjectData";
import React from "react";
import ServiceOfferCard from "./ServiceOffer";
import styles from "./styles.module.scss";
type TMainService = {
  title: string[];
  id: number;
};
const MainServiceComp = ({ title, id }: TMainService) => {
  return (
    <>
      <h1 style={{ textAlign: "center" }}>Дознајте повеќе за нашите услуги</h1>
      <div className={styles.OfferService}>
        {title.map((service) => (
          <h2 key={service}>{service}</h2>
        ))}
      </div>
    </>
  );
};

export default MainServiceComp;
