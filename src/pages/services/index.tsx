import { ServicesOffer, Offers, AboutUs } from "@/Data/ProjectData";
import ServiceOfferCard from "@/components/InfoSection/Services/ServiceOffer";
import React from "react";
import styles from "../../components/InfoSection/Services/styles.module.scss";
import Link from "next/link";

interface Offer {
  id: number;
  icon: string;
  title: string;
  paragraph: string;
}
export type TServicesPage = {
  services: typeof ServicesOffer;
  offers: Offer[];
  about: typeof AboutUs;
};

const ServicesPage = ({ services, offers, about }: TServicesPage) => {
  return (
    <div>
      <div className={styles.OfferService}>
        {services.map((service) => (
          <ServiceOfferCard key={service.id} {...service} />
        ))}
      </div>
      <div className={styles.FirstPart}>
        <h1>{about.secondTitle}</h1>
        <p>Vesna Dent</p>
        <p>{about.smallParagraph}</p>
      </div>
      <div className={styles.center}>
        {offers.map((offer) => (
          <div key={offer.id} className={styles.offers}>
            <Link href={`/services/${offer.id}`}>
              <div className={styles.color}>
                <p>{offer.icon}</p>
                <h2>{offer.title}</h2>
                <p>{offer.paragraph}</p>
              </div>
            </Link>
          </div>
        ))}
      </div>
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
