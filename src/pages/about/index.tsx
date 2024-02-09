import { AboutUs } from "@/Data/ProjectData";
import About from "@/components/InfoSection/AboutUs/About";
import React from "react";
export type TAboutPage = {
  AboutUs: typeof AboutUs;
};
const AboutUsPage = ({ AboutUs }: TAboutPage) => {
  return (
    <div>
      {" "}
      <About {...AboutUs} />
    </div>
  );
};

export default AboutUsPage;

export async function getStaticProps() {
  return {
    props: {
      AboutUs,
    },
  };
}
