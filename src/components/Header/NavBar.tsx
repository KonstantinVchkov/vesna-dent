import React from "react";
import styles from "./styles.module.scss";
import { NavList } from "@/Data/ProjectData";
const NavBar = () => {
  return (
    <div className={styles.Navbar}>
      <ul>
        {NavList.map((list, idx) => (
          <li key={idx}>{list}</li>
        ))}
      </ul>
    </div>
  );
};

export default NavBar;
