import React from "react";
import styles from "./styles.module.scss";
import LocationMap from "../InfoSection/Location/LocationMap";
const FooterSection = () => {
  return (
    <div className={styles.FooterMain}>
      {/* <h3></h3> */}
      <div className={styles.imgParagraph}>
        <img src="/assets/images/some-dental-logo.png" alt="logo-img" />
      </div>
      <LocationMap />
      <div className={styles.InfoSection}>
        <div className={styles.Adress}>
          <ul>
            <li>lorem ipsum</li>
            <li>lorem ipsum</li>
            <li>lorem ipsum</li>
            <li>lorem ipsum</li>
          </ul>
        </div>

        <div className={styles.SocialMedia}>
          <ul>
            <li>Facebook</li>
            <li>Instagram</li>
            <li>Contact us</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default FooterSection;
