import ButtonComp from "@/components/Button/ButtonComp";
import React, { useState } from "react";
import styles from "./styles.module.scss";
import BookApointment from "@/components/BookApointment/Apointment";
import { info } from "./../../../Data/ProjectData";
interface InfoItem {
  id: number;
  title: string;
  description: string;
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
              <h2>{item.title}</h2>
              <p>{item.description}</p>
              <p>{item.phone}</p>
              <p>{item.workHours}</p>
              <p>{item.email}</p>
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
