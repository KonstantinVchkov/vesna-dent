import React from "react";
import styles from "../Header/styles.module.scss";
export type TButton = {
  name: string;
  handleClick: () => void;
};
const ButtonComp = ({ name, handleClick }: TButton) => {
  return (
    <button className={styles.button} onClick={handleClick}>
      {name}
    </button>
  );
};

export default ButtonComp;
