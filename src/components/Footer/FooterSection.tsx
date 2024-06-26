import React from "react";
import styles from "./styles.module.scss";
import LocationMap from "../InfoSection/Location/LocationMap";
import Link from "next/link";
import Facebook from "../Svg-Icons/Facebook";
import Instagram from "../Svg-Icons/Instagram";
import Linkedin from "../Svg-Icons/Linkedin";
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
          <ul>
            <li>
              {" "}
              <Facebook />
            </li>
            <li>
              <Instagram />
            </li>
            <li>
              <Linkedin />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default FooterSection;
