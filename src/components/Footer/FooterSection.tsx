import React from "react";
import styles from "./styles.module.scss";
const FooterSection = () => {
  return (
    <div className={styles.FooterMain}>
      <div className={styles.Adress}>
        <ul>
          <li>lorem ipsum</li>
          <li>lorem ipsum</li>
          <li>lorem ipsum</li>
          <li>lorem ipsum</li>
        </ul>
      </div>
      <div className={styles.Links}>
        <ul>
          <li>lorem ipsum</li>
          <li>lorem ipsum</li>
          <li>lorem ipsum</li>
          <li>lorem ipsum</li>
        </ul>
      </div>
      <div className={styles.SocialMedia}>
        <ul>
          {/* here we have to put icons */}
          <li>Facebook</li>
          <li>Instagram</li>
          <li>Contact us</li>
        </ul>
      </div>
    </div>
  );
};

export default FooterSection;
