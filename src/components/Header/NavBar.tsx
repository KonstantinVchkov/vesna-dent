import React from "react";
import styles from "./styles.module.scss";
import { NavList } from "@/Data/ProjectData";
import { handleRoute } from "@/utils/routing";
const NavBar = () => {
  return (
    <div className={styles.Navbar}>
      <ul>
        {NavList.map((list, idx) => (
          <li
            onClick={() => {
              handleRoute(list.path);
            }}
            key={idx}
          >
            {list.title}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NavBar;
