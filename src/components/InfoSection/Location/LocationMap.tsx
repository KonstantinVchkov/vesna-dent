"use-client";
import React from "react";
import styles from "../../BookApointment/styles.module.scss";
import { TbookApointment } from "@/components/BookApointment/Apointment";
const LocationMap = ({ handleModal }: TbookApointment) => {
  return (
    <div className={styles.MainSection}>
      <div className={styles.Modal}>
        <div className="Map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11863.846086012709!2d21.44484244794029!3d41.97963590674651!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x135415194fb2830f%3A0x52698836645e83ff!2sPZU%20Vesna%20Dent!5e0!3m2!1smk!2smk!4v1706777030780!5m2!1smk!2smk"
            width="500"
            height="200"
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <button onClick={handleModal}>Затвори</button>
      </div>
    </div>
  );
};

export default LocationMap;
