import FooterSection from "@/components/Footer/FooterSection";
import NavBar from "@/components/Header/NavBar";
// import LottieAnimation from "@/components/LottieAnimation/Animation";
import "@/styles/globals.scss";
import type { AppProps } from "next/app";
import { useEffect, useState } from "react";
import ToothAnimation from "../../public/assets/animation/Tooth-Animation.json";
import dynamic from "next/dynamic";
import ContactUs from "../components/InfoSection/Contact/ContactUs";
import ScrollButton from "../components/ScrollBtn/ScrollToTop";
const LottieAnimation = dynamic(
  () => import("../components/LottieAnimation/Animation"),
  {
    ssr: false,
  }
);
export type TScrollBtn = {
  handleScroll: () => void;
};
export default function App({ Component, pageProps }: AppProps) {
  const [spinner, setSpinner] = useState(true);
  const handleScroll = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  useEffect(() => {
    setTimeout(() => {
      setSpinner(false);
    }, 3000);
  }, []);
  return (
    <>
      {spinner ? (
        <LottieAnimation animationData={ToothAnimation} />
      ) : (
        <>
          <NavBar />
          <Component {...pageProps} />
          <ContactUs />
          <FooterSection />
          <ScrollButton handleScroll={handleScroll} />
        </>
      )}
    </>
  );
}
