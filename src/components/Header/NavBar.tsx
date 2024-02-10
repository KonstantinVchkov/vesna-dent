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
  const [spinner, setToothSpinner] = useState<boolean>(false);
  const router = useRouter();

  const openMenu = () => setShowMenu(!showMenu);
  const togglePopUp = () => setPopUp(!popUp);

  useEffect(() => {
    let timeoutId: ReturnType<typeof setTimeout>;

    const handleRouteChangeStart = () => {
      setToothSpinner(true);
      setShowMenu(false);
    };

    const handleRouteChangeComplete = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        setToothSpinner(false);
      }, 1500);
    };

    // Listen to route changes
    router.events.on("routeChangeStart", handleRouteChangeStart);
    router.events.on("routeChangeComplete", handleRouteChangeComplete);
    router.events.on("routeChangeError", handleRouteChangeComplete);

    return () => {
      // Clean up listeners and timeout
      clearTimeout(timeoutId);
      router.events.off("routeChangeStart", handleRouteChangeStart);
      router.events.off("routeChangeComplete", handleRouteChangeComplete);
      router.events.off("routeChangeError", handleRouteChangeComplete);
    };
  }, [router.events]);

  return (
    <>
      {spinner && <LottieAnimation animationData={ToothAnimation} />}
      <div className={styles.Navbar}>
        <div className={styles.logo}>
          <Image
            width={50}
            height={50}
            src={"/assets/images/some-dental-logo.png"}
            alt={"dental-logo-img"}
            onClick={() => {
              handleRoute("");
            }}
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
