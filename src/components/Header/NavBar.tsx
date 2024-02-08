import React, { useState } from "react";
import styles from "./styles.module.scss";
import { NavList } from "@/Data/ProjectData";
import { handleRoute } from "@/utils/routing";
import BookApointment from "../BookApointment/Apointment";
import Image from "next/image";
import Navitems from "./Navlist";
import ButtonComp from "../Button/ButtonComp";

const NavBar = () => {
  const [popUp, setPopUp] = useState<boolean>(false);
  const [showMenu, setShowMenu] = useState<boolean>(false);

  const openMenu = () => setShowMenu(!showMenu);
  const togglePopUp = () => setPopUp(!popUp);

  return (
    <div className={styles.Navbar}>
      <div className={styles.logo}>
        <Image
          width={50}
          height={50}
          src={"/assets/images/some-dental-logo.png"}
          alt={"dental-logo-img"}
        />
      </div>
      <div className={styles.listMenu}>
        <Navitems list={NavList} routes={handleRoute} />
      </div>

      <div className={styles.buttons}>
      <ButtonComp name={"Закажи термин"} handleClick={togglePopUp} />


      </div>
      {popUp && <BookApointment handleModal={togglePopUp} />}

      <div className={styles.hambMenu}>
        <input
          onClick={openMenu}
          type="checkbox"
          role="button"
          aria-label="Display the menu"
          className={styles.menu}
        />
      </div>
      {showMenu && (
        <div className={styles.hambList}>
          <Navitems list={NavList} routes={handleRoute} />
          <ButtonComp name={"Закажи термин"} handleClick={togglePopUp} />
        </div>
      )}
    </div>
  );
};

export default NavBar;
