import FooterSection from "@/components/Footer/FooterSection";
import NavBar from "@/components/Header/NavBar";
import "@/styles/globals.scss";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <NavBar />
      <Component {...pageProps} />;
      <FooterSection />
    </>
  );
}
