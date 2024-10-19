import React, { useState } from "react";
import styles from "./styles.module.scss";
const Facebook = () => {
  const [hover, setHover] = useState(false);
  const baseStyle = {
    fill: hover ? "#002629" : "#F0F0F0",
  };
  return (
    <svg
      className={styles.svgStyles}
      width="53"
      height="53"
      viewBox="0 0 53 53"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_1_1046)">
        <path
          d="M52.05 26.025C52.05 11.6519 40.3981 0 26.025 0C11.6519 0 0 11.6519 0 26.025C0 39.0147 9.51702 49.7816 21.9586 51.7338V33.5479H15.3507V26.025H21.9586V20.2914C21.9586 13.7689 25.844 10.166 31.7887 10.166C34.636 10.166 37.6143 10.6743 37.6143 10.6743V17.0789H34.3327C31.0997 17.0789 30.0914 19.0851 30.0914 21.1433V26.025H37.3093L36.1554 33.5479H30.0914V51.7338C42.533 49.7816 52.05 39.0149 52.05 26.025Z"
          fill={"#00807A"}
        />
        <path
          d="M36.1555 33.5479L37.3093 26.025H30.0914V21.1433C30.0914 19.0849 31.0997 17.0789 34.3327 17.0789H37.6143V10.6743C37.6143 10.6743 34.636 10.166 31.7885 10.166C25.8441 10.166 21.9586 13.7689 21.9586 20.2914V26.025H15.3507V33.5479H21.9586V51.7338C23.3038 51.9447 24.6634 52.0504 26.025 52.05C27.3866 52.0504 28.7462 51.9447 30.0914 51.7338V33.5479H36.1555Z"
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
          style={baseStyle}
        />
      </g>
      <defs>
        <clipPath id="clip0_1_1046">
          <rect width="52.05" height="52.05" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default Facebook;
