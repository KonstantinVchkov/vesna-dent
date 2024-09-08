import React from "react";
import { GetStaticPaths, GetStaticProps } from "next";
import { useRouter } from "next/router";
import { Offers } from "@/Data/ProjectData";

interface Offer {
  id: number;
  icon: string;
  title: string;
  paragraph: string;
  paragraphs: { id: number; title: string; text: string }[];
}

interface Props {
  offer: Offer;
}

const DetailPage = ({ offer }: Props) => {
  return (
    <div>
      <h1>Details for Offer ID: {offer.id}</h1>
      <h2>{offer.title}</h2>
      <p>{offer.paragraph}</p>
      {offer.paragraphs &&
        offer.paragraphs.map((p) => (
          <div key={p.id}>
            <h3>{p.title}</h3>
            <p>{p.text}</p>
          </div>
        ))}{" "}
    </div>
  );
};
export const getStaticPaths: GetStaticPaths = async () => {
  const paths = Offers.map((offer) => ({
    params: { id: offer.id.toString() },
  }));

  return { paths, fallback: false }; // can also be 'blocking' if you want SSR for new paths
};
export const getStaticProps: GetStaticProps<Props, { id: string }> = async (
  context
) => {
  const id = context.params?.id;
  const offer = Offers.find((offer) => offer.id.toString() === id);

  if (!offer) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      offer,
    },
  };
};

export default DetailPage;
