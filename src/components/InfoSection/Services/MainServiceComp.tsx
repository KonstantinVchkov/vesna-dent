import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import styles from "./styles.module.scss";

// Import Swiper styles
import "swiper/css";

// Import required modules
import { Navigation, Pagination, Scrollbar, A11y, Mousewheel } from "swiper/modules";

type TMainService = {
  title: string[];
  id: number;
  images?:string[];
};

const MainServiceComp = ({ title, id }: TMainService) => {
  return (
    <>
      <h1 style={{ textAlign: "center" }}>Дознајте повеќе за нашите услуги</h1>
      <Swiper
        // install Swiper modules
        modules={[Navigation, Pagination, Scrollbar, A11y, Mousewheel]}
        spaceBetween={50}
        slidesPerView={3}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        mousewheel={true}
        // onSwiper={(swiper) => console.log(swiper)}
        // onSlideChange={() => console.log("slide change")}
        className={styles.OfferService}
      >
        {title.map((service, index) => (
          <SwiperSlide key={index}>
            <h2>{service}</h2>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default MainServiceComp;
