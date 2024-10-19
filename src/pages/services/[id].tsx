import React, { useState } from "react";
import { GetStaticPaths, GetStaticProps } from "next";
import { useRouter } from "next/router";
import { Offers, OurWork } from "@/Data/ProjectData";
import styles from "../../components/InfoSection/OurWork/style.module.scss";
import CarouselSection from "@/components/Banner/Carousel";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";

interface Offer {
  id: number;
  icon: string;
  title: string;
  images?: string[];
  paragraph: string;
  paragraphs: { id: number; title: string; text: string }[];
}

interface Props {
  offer: Offer;
  workData: typeof OurWork;
}
interface ExpandedState {
  [key: number]: boolean;
}
const DetailPage = ({ offer, workData }: Props) => {
  const [expanded, setExpanded] = useState<ExpandedState>({});
  const toggleExpand = (id: number) => {
    setExpanded((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };
  const generateRandomWidth = () => {
    return Math.floor(Math.random() * (100 - 100 + 1) + 50);
  };

  const leftRectangles = Array.from({ length: 4 }, (_, i) => (
    <div
      key={i}
      className={styles.rectangles}
      style={{ width: `${generateRandomWidth()}px` }}
    ></div>
  ));
  const rightRectangles = Array.from({ length: 4 }, (_, i) => (
    <div
      key={i}
      className={styles.rectangles}
      style={{ width: `${generateRandomWidth()}px` }}
    ></div>
  ));

  return (
    <div>
      <div className={styles.side + " " + styles.left}>{leftRectangles} </div>
      <CarouselSection Slide={workData.slides} />{" "}
      <div className={styles.icon}>
        {offer.icon.includes(".png") ? (
          <Image
            src={offer.icon}
            alt={offer.title}
            width={100}
            height={100}
            className={styles.icon}
          />
        ) : (
          <p>{offer.icon}</p>
        )}{" "}
      </div>
      <div className={styles.FirstPart}>
        {" "}
        {offer.paragraphs &&
          offer.paragraphs.map((p) => {
            const paragraphClass = expanded[p.id]
              ? styles.expanded
              : styles.collapsed;
            return (
              <div key={p.id} className={styles.section}>
                <h1>{p.title}</h1>
                <p className={paragraphClass}>{p.text}</p>
                <button
                  className={`${styles.button} ${styles.hidden}`}
                  onClick={() => toggleExpand(p.id)}
                >
                  <span>
                    {expanded[p.id] ? "Прочитај помалку " : "Прочитај повеќе "}
                  </span>
                  <FontAwesomeIcon
                    icon={expanded[p.id] ? faChevronUp : faChevronDown}
                  />
                </button>
              </div>
            );
          })}{" "}
      </div>
      <div className={styles.side + " " + styles.right}>{rightRectangles}</div>
    </div>
  );
};
export const getStaticPaths: GetStaticPaths = async () => {
  const paths = Offers.map((offer) => ({
    params: { id: offer.id.toString() },
  }));

  return { paths, fallback: false };
};
export const getStaticProps: GetStaticProps<Props, { id: string }> = async (
  context
) => {
  const id = context.params?.id;
  const offer = Offers.find((offer) => offer.id.toString() === id);

  if (!offer) {
    return {
      notFound: true,
      props: {
        offer: null,
        workData: OurWork,
      },
    };
  }

  return {
    props: {
      offer,
      workData: OurWork,
    },
  };
};

export default DetailPage;
