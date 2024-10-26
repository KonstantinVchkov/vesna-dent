import React, { useState } from "react";
import styles from "./styles.module.scss";
import { AboutUs } from "../../../Data/ProjectData";

export type AboutUsType = {
  question: string;
  answer: string;
  id: number;
  faqTitle: string;
};

export type TAbout = {
  QuestionsAndAnswers: AboutUsType[];
};

const FAQComponent = () => {
  const [openId, setOpenId] = useState<number | null>(null);

  const toggleOpen = (id: number) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <div className={styles.faqcontainer}>
      <h2 className={styles.faqtitle}>
        {AboutUs.faqTitle || "ЧЕСТО ПОСТАВУВАНИ ПРАШАЊА"}
      </h2>
      {AboutUs.QuestionsAndAnswers.map((item) => (
        <div
          key={item.id}
          className={styles.faqitem}
          onClick={() => toggleOpen(item.id)}
        >
          <div className={styles.faqquestion}>
            <p>{item.question}</p>
            <span className={`arrow ${openId === item.id ? "open" : ""}`}>
              ▲
            </span>
          </div>
          {openId === item.id && (
            <div className={styles.faqanswer}>
              <p>{item.answer}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default FAQComponent;
