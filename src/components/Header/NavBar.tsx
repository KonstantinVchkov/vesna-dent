import React, { useEffect, useState } from "react";
import styles from "./styles.module.scss";
import { NavList } from "@/Data/ProjectData";
import { handleRoute } from "@/utils/routing";
import BookApointment from "../BookApointment/Apointment";
import LocationMap from "../InfoSection/Location/LocationMap";
import dynamic from "next/dynamic";
import Image from "next/image";
const LottieAnimation = dynamic(() => import("../LottieAnimation/Animation"), {
  ssr: false,
});
const NavBar = () => {
  const [popUp, setPopUp] = useState(false);
  const [locationPopUp, setLocationPopUp] = useState(false);
  const [toothSpinner, setSpinnerTooth] = useState(true);
  const [showMenu, setShowMenu] = useState(false);
  console.log("this is the popUp:", popUp);
  const openMenu = () => {
    console.log("this is from the open menu");
    setShowMenu(!showMenu);
  };
  const handleClick = (value: string) => {
    console.log("button clicked");
    if (value === "book") {
      console.log("this is from value book: ");
      setPopUp(!popUp);
    } else if (value === "location") {
      setLocationPopUp(!locationPopUp);
    }
  };
  useEffect(() => {
    setTimeout(() => {
      setSpinnerTooth(false);
    }, 3000);
  }, []);
  return (
    <div className={styles.Navbar}>
      <div className={styles.logo}>
        <img
          src={"/assets/images/some-dental-logo.png"}
          alt={"dental-logo-img"}
        />
      </div>
      <div className={styles.listMenu}>
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

      <div className={styles.buttons}>
        <button
          className={styles.button}
          onClick={() => {
            handleClick("book");
          }}
        >
          Закажи Термин
        </button>
        <button
          className={styles.button}
          onClick={() => {
            handleClick("location");
          }}
        >
          Локација
        </button>
      </div>
      {popUp && (
        <BookApointment
          handleModal={() => {
            handleClick("book");
          }}
        />
      )}
      {locationPopUp && (
        <LocationMap
          handleModal={() => {
            handleClick("location");
          }}
        />
      )}
      <div className={styles.hambMenu}>
        <input
          onClick={openMenu}
          type="checkbox"
          role="button"
          aria-label="Display the menu"
          className={styles.menu}
        />
        {showMenu && (
          <div className={styles.hambList}>
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
        )}
      </div>
    </div>
  );
};

export default NavBar;
