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
  console.log("this is the popUp:", popUp);
  const handleClick = (value: string) => {
    console.log("button clicked");
    if (value === "book") {
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
      <div className={styles.buttons}>
        <button
          onClick={() => {
            handleClick("book");
          }}
        >
          Закажи Термин
        </button>
        <button
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
    </div>
  );
};

export default NavBar;
