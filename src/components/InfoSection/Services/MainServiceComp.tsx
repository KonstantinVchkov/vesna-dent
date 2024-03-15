import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import styles from "./styles.module.scss";

import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Mousewheel,
} from "swiper/modules";
import { handleRoute } from "@/utils/routing";

type TMainService = {
  title: string[];
  id: number;
  images?: string[];
};

const MainServiceComp = ({ title, id }: TMainService) => {
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
      >
        {title.map((service, index, id) => (
          <SwiperSlide key={index}>
            <h2>{service}</h2>
            <span
              className={styles.BtnService}
              onClick={() => handleRoute(`/services/${id}`)}
            ></span>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default MainServiceComp;
