import ButtonComp from "@/components/Button/ButtonComp";
import React, { useState } from "react";
import styles from "./styles.module.scss";
import BookApointment from "@/components/BookApointment/Apointment";

const ContactUs = () => {
  const [popUp, setPopUp] = useState<boolean>(false);
  const togglePopUp = () => setPopUp(!popUp);

  return (
    <>
      <div className={styles.center}>
        <div className={styles.leftDiv}>
          <h2>Vesna Dent</h2>
          <p>Lorem ipsum dolor sit amet consectetur. </p>
          <p>000/000-000</p>
          <p>
            Mon - Thur - 8 AM to 4 PM Friday: 8am - 2pm by appointment only
            Saturday & Sundays: Closed
          </p>
        </div>
        <div className={styles.rightDiv}>
          <h2>Zakazi Termin</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex
            nesciunt, itaque ipsam in ratione necessitatibus? Quas sapiente
            delectus modi error.
          </p>{" "}
          <ButtonComp name={"Закажи термин"} handleClick={togglePopUp} />
        </div>{" "}
      </div>{" "}
      {popUp && <BookApointment handleModal={togglePopUp} />}
    </>
  );
};

export default ContactUs;
