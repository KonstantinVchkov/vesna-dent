import Head from "next/head";

import BannerSection from "@/components/Banner/BannerSection";
import { MainText } from "@/Data/ProjectData";
// import { getStaticPaths } from "next/dist/build/templates/pages";

export type THome = {
  textScroll: typeof MainText;
};
export default function Home({ textScroll }: THome) {
  console.log("this is text-scroll", textScroll);
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* <BookApointment /> */}
      <BannerSection {...textScroll} />
    </>
  );
}

export async function getStaticProps() {
  return {
    props: {
      textScroll: MainText,
    },
  };
}
