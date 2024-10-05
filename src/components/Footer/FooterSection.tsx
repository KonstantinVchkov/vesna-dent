import React from "react";
import styles from "./styles.module.scss";
import LocationMap from "../InfoSection/Location/LocationMap";
import Link from "next/link";
import Facebook from "../Svg-Icons/Facebook";
import Instagram from "../Svg-Icons/Instagram";
import Linkedin from "../Svg-Icons/Linkedin";
import Image from "next/image";

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
          <div className={`${styles.Address} ${styles.CenterVertical}`}>
            <h2>Инфо</h2>
            <hr className={`${styles.Underline} `} />

            <ul>
              <li>
                {" "}
                <Image
                  width={50}
                  height={50}
                  src={"/assets/SocialIcons/location.png"}
                  alt={"location-img"}
                />
                <span>lorem ipsum</span>
              </li>
              <li>
                {" "}
                <Image
                  width={50}
                  height={50}
                  src={"/assets/SocialIcons/phone.png"}
                  alt={"phone-img"}
                />
                <span>000/000/000</span>
              </li>
              <li>
                {" "}
                <Image
                  width={50}
                  height={50}
                  src={"/assets/SocialIcons/clock.png"}
                  alt={"clock-img"}
                />
                <span>
                  Mon - Thur - 8 AM to 4 PMFriday: 8am - 2pm (by appointment
                  only)Saturday & Sundays: Closed
                </span>
              </li>
              <li>
                {" "}
                <Image
                  width={50}
                  height={50}
                  src={"/assets/SocialIcons/mail.png"}
                  alt={"mail-img"}
                />
                <span>loremipsum@dolor.sit</span>
              </li>
            </ul>
          </div>

          <div className={`${styles.Navigation} ${styles.CenterVertical}`}>
            <h2>Навигација</h2>
            <hr className={`${styles.Underline} `} />

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
            <h2>Социјални медиуми</h2>
            <hr className={`${styles.Underline} `} />
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
