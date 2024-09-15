import React, { useEffect, useState } from "react";
import styles from "./styles.module.scss";
import { NavList } from "@/Data/ProjectData";
import { handleRoute } from "@/utils/routing";
import BookApointment from "../BookApointment/Apointment";
import Image from "next/image";
import Navitems from "./Navlist";
import ButtonComp from "../Button/ButtonComp";
import { useRouter } from "next/router";
import dynamic from "next/dynamic";
import ToothAnimation from "../../../public/assets/animation/Tooth-Animation.json";
const LottieAnimation = dynamic(() => import("../LottieAnimation/Animation"), {
  ssr: false,
});
const NavBar = () => {
  const [popUp, setPopUp] = useState<boolean>(false);
  const [showMenu, setShowMenu] = useState<boolean>(false);

  const openMenu = () => setShowMenu(!showMenu);
  const togglePopUp = () => setPopUp(!popUp);

  return (
    <>
      <div className={styles.Navbar}>
        <div className={styles.listMenu}>
          <Navitems list={NavList} routes={handleRoute} />
        </div>
        <div className={styles.logo}>
          <Image
            width={100}
            height={100}
            src={"/assets/images/some-dental-logo.png"}
            alt={"dental-logo-img"}
            onClick={() => {
              handleRoute("/");
            }}
          />
        </div>
        <div className={styles.buttons}>
          <Image
            width={50}
            height={50}
            src={"/assets/images/Phone.png"}
            alt={"phone-img"}
          />
          <span>+389-78688551</span>
          <ButtonComp name={"Закажи термин"} handleClick={togglePopUp} />
        </div>
        {popUp && <BookApointment handleModal={togglePopUp} />}

        <div className={styles.hambMenu}>
          <input
            onClick={openMenu}
            checked={showMenu}
            onChange={() => {}}
            type="checkbox"
            role="button"
            aria-label="Display the menu"
            className={styles.menu}
          />
        </div>
        {showMenu && (
          <div className={styles.hambList}>
            <ul>
              <Navitems list={NavList} routes={handleRoute} />
              <ButtonComp name={"Закажи термин"} handleClick={togglePopUp} />
            </ul>
          </div>
        )}
      </div>
    </>
  );
};

export default NavBar;
