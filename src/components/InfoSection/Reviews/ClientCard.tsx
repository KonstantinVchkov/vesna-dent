import React from "react";
import styles from "./styles.module.scss";
import Image from "next/image";
export interface IClientCard {
  img: string;
  name: string;
  text: string;
}
const ClientCard = ({ img, name, text }: IClientCard) => {
  return (
    <div className={styles.ClientCardContainer}>
      <div className={styles.ClientImg}>
        <Image src={img} alt="client-img" width={100} height={100} />
      </div>
      <div className={styles.line}></div>
      <div className={styles.ClientReview}>
        <h3>{name}</h3>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default ClientCard;
