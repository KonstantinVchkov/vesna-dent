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
import Link from "next/link";

interface Offer {
  id: number;
  title: string[];
}

export type TMainService = {
  Offers: Offer[];
};

const MainServiceComp = ({ id, title }: Offer) => {
  return (
    <>
      <h1 className={styles.MainText}>Дознајте повеќе за нашите услуги</h1>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y, Mousewheel]}
        spaceBetween={50}
        slidesPerView={1}
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
              <h2>{offer.title}</h2>{" "}
              <Link
                href={`/services/${offer.id}`}
                className={styles.BtnService}
              ></Link>
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
