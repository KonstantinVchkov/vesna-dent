import React from "react";
import styles from "./styles.module.scss";
import LocationMap from "../InfoSection/Location/LocationMap";
import Link from "next/link";
const FooterSection = () => {
  return (
    <div className={styles.FooterMain}>
      <div className={styles.imgParagraph}>
        <img src="/assets/images/some-dental-logo.png" alt="logo-img" />
      </div>
      <LocationMap />
      <div className={styles.InfoSection}>
        <div className={styles.Adress}>
          <span>Инфо</span>
          <ul>
            <li>lorem ipsum</li>
            <li>lorem ipsum</li>
            <li>lorem ipsum</li>
            <li>lorem ipsum</li>
          </ul>
        </div>

        <div className={styles.Navigation}>
          <span>Навигација</span>
          <ul>
            <Link href={"/about"}>
              <li>За Нас</li>
            </Link>
            <Link href={"/ourwork"}>
              <li>Нашата Работа</li>
            </Link>
            <Link href={"/services"}>
              <li>Нашите Услуги</li>
            </Link>
          </ul>
        </div>
        <div className={styles.SocialMedia}>
          <span>Социјални медиуми</span>
    
        </div>
      </div>
    </div>
  );
};

export default FooterSection;
