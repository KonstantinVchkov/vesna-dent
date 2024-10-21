import { ServicesOffer, Offers, AboutUs, OurWork } from "@/Data/ProjectData";
import ServiceOfferCard from "@/components/InfoSection/Services/ServiceOffer";
import React from "react";
import styles from "../../components/InfoSection/Services/styles.module.scss";
import Link from "next/link";
import CarouselSection from "@/components/Banner/Carousel";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

interface Offer {
  id: number;
  icon?: any;
  title: string;
  paragraph: string;
}
export type TServicesPage = {
  services: typeof ServicesOffer;
  offers: Offer[];
  about: typeof AboutUs;
  workData: typeof OurWork;
};

const ServicesPage = ({ services, offers, about, workData }: TServicesPage) => {
  const generateRandomWidth = () => {
    return Math.floor(Math.random() * (100 - 100 + 1) + 50);
  };

  const leftRectangles = Array.from({ length: 2 }, (_, i) => (
    <div
      key={i}
      className={styles.rectangles}
      style={{ width: `${generateRandomWidth()}px` }}
    ></div>
  ));
  const rightRectangles = Array.from({ length: 2 }, (_, i) => (
    <div
      key={i}
      className={styles.rectangles}
      style={{ width: `${generateRandomWidth()}px` }}
    ></div>
  ));
  return (
    <div>
      <div className={styles.side + " " + styles.left}>{leftRectangles}</div>
      <div className={styles.OfferService}>
        {services.map((service) => (
          <ServiceOfferCard key={service.id} {...service} />
        ))}
      </div>{" "}
      <div className={styles.FirstPart}>
        <h1>{about.secondTitle}</h1>
        <h2>Весна Дент</h2>
        <p>{about.smallParagraph}</p>
      </div>
      <div className={styles.center}>
        {offers.map((offer) => (
          <div key={offer.id} className={styles.offers}>
            <Link href={`/services/${offer.id}`}>
              <div className={styles.content}>
                {offer.icon.includes(".png") ? (
                  <div>
                    <Image
                      src={offer.icon}
                      alt={offer.title}
                      width={50}
                      height={50}
                    />
                  </div>
                ) : (
                  <p>{offer.icon}</p>
                )}
                <h3>{offer.title}</h3>
                <p>{offer.paragraph}</p>
                <button className={styles.button}>Види Повеќе</button>
              </div>
            </Link>
          </div>
        ))}
      </div>
      <div className={styles.carousel}>
        <Swiper
          slidesPerView={1}
          spaceBetween={10}
          pagination={{ clickable: true }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log("slide change")}
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            768: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
          }}
        >
          {offers.map((offer) => (
            <SwiperSlide key={offer.id} className={styles.offers}>
              <Link href={`/services/${offer.id}`} passHref>
                <div className={styles.content}>
                  {offer.icon.includes(".png") ? (
                    <Image
                      src={offer.icon}
                      alt={offer.title}
                      width={50}
                      height={50}
                    />
                  ) : (
                    <p>{offer.icon}</p>
                  )}
                  <h2>{offer.title}</h2>
                  <p>{offer.paragraph}</p>{" "}
                  <button className={styles.button}>Види Повеќе</button>
                </div>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className={styles.side + " " + styles.right}>{rightRectangles}</div>
    </div>
  );
};

export default ServicesPage;

export async function getStaticProps() {
  return {
    props: {
      services: ServicesOffer,
      offers: Offers,
      about: AboutUs,
    },
  };
}
