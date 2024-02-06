import Head from "next/head";

import BannerSection from "@/components/Banner/BannerSection";
import { MainText, ourDentists, ourMilestones } from "@/Data/ProjectData";
import MainServiceComp from "@/components/InfoSection/Services/MainServiceComp";
import Milestones from "@/components/CountUpComp/Milestones";
import styles from "../styles/styles.module.scss";
import Dentists from "@/components/InfoSection/OurDentists/Dentists";
// import Home from '../styles/Home.module.scss'
export type THome = {
  textScroll: typeof MainText;
  miles: typeof ourMilestones;
  dataDentists: typeof ourDentists;
};
export default function Home({ textScroll, miles, dataDentists }: THome) {
  console.log('this is from main text:' , textScroll)
  return (
    <>
      <Head>
        <title>Vesna-Dent</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/assets/images/some-dental-logo.png" />
      </Head>
      <BannerSection {...textScroll} />
      <MainServiceComp />
      <div className={styles.Milestones}>
        {miles.map((mileItem) => (
          <Milestones key={mileItem.id} {...mileItem} />
        ))}
      </div>
      <div className={styles.container}>
        {dataDentists.map((dentistData) => (
          <Dentists key={dentistData.id} {...dentistData} />
        ))}
      </div>
    </>
  );
}

export async function getStaticProps() {
  return {
    props: {
      textScroll: MainText,
      miles: ourMilestones,
      dataDentists: ourDentists,
    },
  };
}
