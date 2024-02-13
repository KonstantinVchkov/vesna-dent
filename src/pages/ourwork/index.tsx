import { OurWork } from "@/Data/ProjectData";
import CarouselSection from "@/components/Banner/Carousel";
import React from "react";
export type TworkPage = {
  workData: typeof OurWork;
};
const OurWorkPage = ({ workData }: TworkPage) => {


  return (
    <div>
      {" "}
      <CarouselSection Slide={workData.slides} />{" "}
    </div>
  );
};

export default OurWorkPage;

export async function getStaticProps() {
  return {
    props: {
      workData: OurWork,
    },
  };
}
