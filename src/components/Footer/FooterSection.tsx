import React from "react";
import styles from "./styles.module.scss";
import LocationMap from "../InfoSection/Location/LocationMap";
import Link from "next/link";
import Facebook from "../Svg-Icons/Facebook";
import Instagram from "../Svg-Icons/Instagram";
import Linkedin from "../Svg-Icons/Linkedin";
import Image from "next/image";
import { info } from "../../Data/ProjectData";
interface InfoItem {
  id: number;
  title: string;
  location: string;
  phone: string;
  workHours: string;
  email: string;
}
const FooterSection: React.FC = () => {
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
            {info.map((item: InfoItem) => (
              <ul key={item.id}>
                <li>
                  {" "}
                  <Image
                    width={40}
                    height={40}
                    src={"/assets/SocialIcons/location.png"}
                    alt={"location-img"}
                  />
                  <span>{item.location}</span>
                </li>
                <li>
                  {" "}
                  <Image
                    width={40}
                    height={40}
                    src={"/assets/SocialIcons/phone.png"}
                    alt={"phone-img"}
                  />
                  <span>{item.phone}</span>
                </li>
                <li>
                  {" "}
                  <Image
                    width={40}
                    height={40}
                    src={"/assets/SocialIcons/clock.png"}
                    alt={"clock-img"}
                  />
                  <span>{item.workHours}</span>
                </li>
                <li>
                  {" "}
                  <Image
                    width={40}
                    height={40}
                    src={"/assets/SocialIcons/mail.png"}
                    alt={"mail-img"}
                  />
                  <span>{item.email}</span>
                </li>
              </ul>
            ))}
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
                <a href="">
                  <Image
                    width={50}
                    height={50}
                    src={"/assets/SocialIcons/logos_facebook.png"}
                    alt={"location-img"}
                  />{" "}
                </a>
              </li>
              <li>
                <a href="">
                  <Image
                    width={50}
                    height={50}
                    src={"/assets/SocialIcons/teenyicons_instagram-solid.png"}
                    alt={"location-img"}
                  />{" "}
                </a>
              </li>
              <li>
                <a href="">
                  {" "}
                  <Image
                    width={50}
                    height={50}
                    src={"/assets/SocialIcons/skill-icons_linkedin.png"}
                    alt={"location-img"}
                  />{" "}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterSection;
