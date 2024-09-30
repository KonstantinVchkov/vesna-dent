import React, { useState, useEffect } from "react";
import styles from "./styles.module.scss";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
interface ScrollTopButtonProps {
  handleScroll: () => void;
}
const ScrollTopButton: React.FC<ScrollTopButtonProps> = ({ handleScroll }) => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 100) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    <>
      {isVisible && (
        <button className={styles.scrollbtn} onClick={handleScroll}>
          <FontAwesomeIcon icon={faChevronUp} />
        </button>
      )}
    </>
  );
};

export default ScrollTopButton;
