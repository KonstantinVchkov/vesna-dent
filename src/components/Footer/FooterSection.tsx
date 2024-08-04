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
      <LocationMap />
      <div className={styles.imgParagraph}>
        <img src="/assets/images/some-dental-logo.png" alt="logo-img" />
      </div>
      <div className={` ${styles.Center} ${styles.YetAnotherClass}`}>
        {" "}
        <div className={`${styles.InfoSection} ${styles.Center} `}>
          <div className={`${styles.Address}${styles.CenterVertical}`}>
            <h2>Инфо</h2>
            <ul>
              <li>lorem ipsum</li>
              <li>000/000/000</li>
              <li>
                Mon - Thur - 8 AM to 4 PMFriday: 8am - 2pm (by appointment
                only)Saturday & Sundays: Closed
              </li>
              <li>loremipsum@dolor.sit</li>
            </ul>
          </div>

          <div className={`${styles.Navigation} ${styles.CenterVertical}`}>
            <h2 className={`${styles.Underline}`}>Навигација</h2>
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
          <div className={`${styles.SocialMedia} ${styles.CenterVertical}`}>
            <h2 className={styles.Underline}>Социјални медиуми</h2>
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
    </div>
  );
};

export default FooterSection;
