import { OurWork } from "@/Data/ProjectData";
import CarouselSection from "@/components/Banner/Carousel";
import React from "react";
export type TworkPage = {
  workData: typeof OurWork;
};
const OurWorkPage = ({ workData }: TworkPage) => {
  // Work data now is an array of objects...Either we change the data either we change the logic...
  console.log("this is from work data: ", workData.slides);

  return (
    <div>
      {" "}
      <CarouselSection {...workData} />{" "}
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
