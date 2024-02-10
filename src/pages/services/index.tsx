import { ServicesOffer } from "@/Data/ProjectData";
import ServiceOfferCard from "@/components/InfoSection/Services/ServiceOffer";
import React from "react";
import styles from "../../components/InfoSection/Services/styles.module.scss";
export type TServicesPage = {
  services: typeof ServicesOffer;
};
const ServicesPage = ({ services }: TServicesPage) => {
  return (
    <div className={styles.OfferService}>
      {services.map((service) => (
        <ServiceOfferCard key={service.id} {...service} />
      ))}
    </div>
  );
};

export default ServicesPage;

export async function getStaticProps() {
  return {
    props: {
      services: ServicesOffer,
    },
  };
}
