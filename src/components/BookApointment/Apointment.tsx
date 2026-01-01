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
                  src={"/assets/SocialIcons/phone.png"}
                  alt={"phone-img"}
                />
                <span>+389-78688551</span>
              </div>
            </div>
            <div className={styles.center}>
              <h3>Повелете во нашата ординација</h3>
              <div>
                {" "}
                <Image
                  width={25}
                  height={25}
                  src={"/assets/SocialIcons/location.png"}
                  alt={"location-img"}
                />
                <span>Тодор Паница 12/2, Скопје 1000</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookApointment;
