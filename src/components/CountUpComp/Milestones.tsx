import React, { useState } from "react";
import styles from "./styles.module.scss";
import CountUp from "react-countup";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition, faUsers } from "@fortawesome/free-solid-svg-icons";

export type TMilestones = {
  id: number;
  title: string;
  stones: number;
  icon: IconDefinition;
};
const Milestones = ({ id, title, stones, icon }: TMilestones) => {
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
          <>
            <div className={styles.icons}>
              {/* <FontAwesomeIcon icon={icon} style={{color: "#f2f2f2",}} /> */}
              {/* <img src={icon} alt="" /> */}
              <FontAwesomeIcon icon={icon} />
            </div>
            <div>
              <span ref={countUpRef} />
              {""} +<div>{title}</div>
            </div>
          </>
        )}
      </CountUp>
    </div>
  );
};

export default Milestones;
