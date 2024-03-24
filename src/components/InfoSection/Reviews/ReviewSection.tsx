import React from "react";
import styles from "./styles.module.scss";
import ClientCard, { IClientCard } from "./ClientCard";

interface IReviewSection {
  reviewcards: IClientCard[];
}
const ReviewSection = ({ reviewcards }: IReviewSection) => {
  return (
    <div className={styles.ReviewContainer}>
      <h1>Искуства кои сакаме да ги споделиме со вас</h1>
      <div className={styles.ReviewCards}>
        {reviewcards &&
          reviewcards.map((card, idx) => <ClientCard key={idx} {...card} />)}
      </div>
    </div>
  );
};

export default ReviewSection;
