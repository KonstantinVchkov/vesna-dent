import { ServicesOffer, Offers, AboutUs, OurWork } from "@/Data/ProjectData";
import ServiceOfferCard from "@/components/InfoSection/Services/ServiceOffer";
import React from "react";
import styles from "../../components/InfoSection/Services/styles.module.scss";
import Link from "next/link";
import CarouselSection from "@/components/Banner/Carousel";
import Image from "next/image";

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
    return Math.floor(Math.random() * (170 - 100 + 1) + 100);
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
            <Link href={`/services/${offer.id}`} passHref>
              <div className={styles.color}>
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
                <h2>{offer.title}</h2>
                <p>{offer.paragraph}</p>
              </div>
            </Link>
          </div>
        ))}
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
