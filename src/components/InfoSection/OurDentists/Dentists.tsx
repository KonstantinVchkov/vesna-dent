import React from "react";
import styles from "./styles.module.scss";
import {} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import {
  faFacebookF,
  faInstagram,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";
import { handleRoute } from "@/utils/routing";

export type TDentists = {
  id: number;
  images: string[];
  name?: string;
  surname?: string;
  facebook?: string;
  instagram?: string;
  linkedin?: string;
};
const Dentists = ({
  id,
  images,
  name,
  surname,
  facebook,
  instagram,
  linkedin,
}: TDentists) => {
  return (
    <div
      onClick={() => {
        handleRoute(`about`);
      }}
      className={`${styles.card} ${styles[`card${id}`]}`}
    >
      <div className={styles.border}>
        {images.length > 0 && <img src={images[0]} alt="dentist-img" />}
        {/* <h2 className={styles.name}>
          Д-р {name} {surname}
        </h2> */}
        {/* <div className={styles.icons}>
          {facebook && (
            <Link target="_blank" href={facebook}>
              <FontAwesomeIcon className={styles.icon} icon={faFacebookF} />{" "}
            </Link>
          )}
          {instagram && (
            <Link target="_blank" href={instagram}>
              <FontAwesomeIcon className={styles.icon} icon={faInstagram} />
            </Link>
          )}
          {linkedin && (
            <Link target="_blank" href={linkedin}>
              <FontAwesomeIcon className={styles.icon} icon={faLinkedinIn} />
            </Link>
          )}
        </div> */}
      </div>
    </div>
  );
};

export default Dentists;
