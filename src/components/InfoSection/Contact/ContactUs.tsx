import ButtonComp from "@/components/Button/ButtonComp";
import React, { useState } from "react";
import styles from "./styles.module.scss";
import Image from "next/image";

import BookApointment from "@/components/BookApointment/Apointment";
import { info } from "./../../../Data/ProjectData";
interface InfoItem {
  id: number;
  title: string;
  location: string;
  phone: string;
  workHours: string;
  email: string;
  terminTitle: string;
  termin: string;
}

const ContactUs: React.FC = () => {
  const [popUp, setPopUp] = useState<boolean>(false);
  const togglePopUp = () => setPopUp(!popUp);
  return (
    <>
      <div className={styles.center}>
        {info.map((item: InfoItem) => (
          <>
            <div key={item.id} className={styles.leftDiv}>
              <div className={styles.flex}>
                <h2>{item.title}</h2>{" "}
                <span className={styles.hidden}>
                  <ButtonComp
                    name={"Закажи термин"}
                    handleClick={togglePopUp}
                  />
                </span>
              </div>
              <p>
                {" "}
                <Image
                  width={30}
                  height={30}
                  src={"/assets/SocialIcons/location.png"}
                  alt={"location-img"}
                />{" "}
                <span>{item.location}</span>
              </p>
              <p>
                {" "}
                <Image
                  width={30}
                  height={30}
                  src={"/assets/SocialIcons/phone.png"}
                  alt={"phone-img"}
                />{" "}
                <span>{item.phone}</span>
              </p>
              <p>
                {" "}
                <Image
                  width={30}
                  height={30}
                  src={"/assets/SocialIcons/clock.png"}
                  alt={"clock-img"}
                />{" "}
                <span>{item.workHours}</span>{" "}
              </p>
            </div>
            <div className={styles.rightDiv}>
              <h2>{item.terminTitle}</h2>
              <p>{item.termin}</p>{" "}
              <ButtonComp name={"Закажи термин"} handleClick={togglePopUp} />
            </div>{" "}
          </>
        ))}
      </div>{" "}
      {popUp && <BookApointment handleModal={togglePopUp} />}
    </>
  );
};

export default ContactUs;
