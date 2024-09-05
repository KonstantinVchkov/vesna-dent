import { OurWork, Work } from "@/Data/ProjectData";
import CarouselSection from "@/components/Banner/Carousel";
import React from "react";

export type WorkItem = {
  id: number;
  title: string;
  paragraph: string;
};
export type TworkPage = {
  workData: typeof OurWork;
  Work: WorkItem[];
};
const OurWorkPage = ({ workData, Work }: TworkPage) => {
  console.log(workData, Work);
  return (
    <div>
      {" "}
      <CarouselSection Slide={workData.slides} />{" "}
      <div>
        {Work.map((workItem) => (
          <div key={workItem.id}>
            {" "}
            <h1>{workItem.title}</h1>
            <p>{workItem.paragraph}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurWorkPage;

export async function getStaticProps() {
  return {
    props: {
      workData: OurWork,
      Work: Work,
    },
  };
}
