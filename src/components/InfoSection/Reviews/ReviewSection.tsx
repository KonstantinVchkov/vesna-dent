import React from "react";
import styles from "./styles.module.scss";
import ClientCard, { IClientCard } from "./ClientCard";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

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
      <div>
        <Swiper
          className={styles.ReviewCardsPhone}
          slidesPerView={1}
          spaceBetween={10}
          pagination={{ clickable: true }}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 40,
            },
          }}
        >
          {reviewcards.map((card, idx) => (
            <SwiperSlide key={idx}>
              {" "}
              <ClientCard {...card} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default ReviewSection;
