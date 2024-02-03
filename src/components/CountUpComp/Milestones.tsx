import React from "react";
import styles from "./styles.module.scss";
import CountUp from "react-countup";
export type TMilestones = {
  id: number;
  title: string;
  stones: number;
};
const Milestones = ({ id, title, stones }: TMilestones) => {
  return (
    <div id={`${id}`} className={styles.MilestoneItem}>
      <CountUp
        enableScrollSpy={true}
        start={0}
        end={stones}
        delay={0}
        duration={2.75}
      >
        {({ countUpRef }) => (
          <div>
            <span ref={countUpRef} />+<div>{title}</div>
          </div>
        )}
      </CountUp>
    </div>
  );
};

export default Milestones;
