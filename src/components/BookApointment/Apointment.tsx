import React from "react";
import styles from "./styles.module.scss";
export type TbookApointment = {
  handleModal: () => void;
};
const BookApointment = ({ handleModal }: TbookApointment) => {
  return (
    <div className={styles.MainSection}>
      <div className={styles.Modal}>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod ratione
          cumque similique id natus velit, accusamus temporibus, labore maxime
        </p>

        <button onClick={handleModal}>Затвори</button>
      </div>
    </div>
  );
};

export default BookApointment;
