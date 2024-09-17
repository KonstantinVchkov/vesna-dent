import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import styles from "./styles.module.scss";
import { Offers } from "@/Data/ProjectData";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Mousewheel,
} from "swiper/modules";
import { handleRoute } from "@/utils/routing";
import Link from "next/link";
interface Offer {
  id: number;
  title: string;
}

export type TMainService = {
  Offers: Offer[];
};
console.log(Offers);

const MainServiceComp = ({ id, title }: Offer) => {
  console.log(Offers);

  return (
    <>
      <h1 className={styles.MainText}>Дознајте повеќе за нашите услуги</h1>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y, Mousewheel]}
        spaceBetween={50}
        slidesPerView={3}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        mousewheel={true}
        className={styles.OfferService}
        breakpoints={{
          425: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }}
      >
        {Offers.map((offer) => {
          return (
            <SwiperSlide key={offer.id}>
              <h2>{offer.title}</h2>
              <span
                className={styles.BtnService}
                onClick={() => handleRoute(`/services/${id}`)}
              ></span>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
};

export default MainServiceComp;

export async function getStaticProps() {
  return {
    props: {
      Offers: Offers,
    },
  };
}
