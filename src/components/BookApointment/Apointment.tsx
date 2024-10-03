import React from "react";
import styles from "./styles.module.scss";
import Image from "next/image";

export type TbookApointment = {
  handleModal: () => void;
};
const BookApointment = ({ handleModal }: TbookApointment) => {
  return (
    <div className={styles.MainSection}>
      <div className={styles.Modal}>
        {" "}
        <div className={styles.right}>
          <button onClick={handleModal}>X</button>
        </div>
        <div className={styles.center}>
          <h1>Контакт информации</h1>
          <div className={styles.contain}>
            <div className={styles.center}>
              <h3>Закажете го Вашиот термин</h3>{" "}
              <div>
                {" "}
                <Image
                  width={25}
                  height={25}
                  src={"/assets/images/Phone.png"}
                  alt={"phone-img"}
                />
                <span>+389-78688551</span>
              </div>
            </div>
            <div className={styles.center}>
              <h3>Посететене во нашата ординација</h3>
              <div>
                {" "}
                <Image
                  width={25}
                  height={25}
                  src={"/assets/images/Phone.png"}
                  alt={"phone-img"}
                />
                <span>Lorem ipsum dolor</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookApointment;
