import React from "react";
import styles from "../../BookApointment/styles.module.scss";
import { TbookApointment } from "@/components/BookApointment/Apointment";
const LocationMap = ({ handleModal }: TbookApointment) => {
  return (
    <div className={styles.MainSection}>
      <div className={styles.Modal}>
        
        <button onClick={handleModal}>Затвори</button>
      </div>
    </div>
  );
};

export default LocationMap;
