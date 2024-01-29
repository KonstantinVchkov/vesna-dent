import Image from "next/image";
import { Inter } from "next/font/google";
import BannerSection from "@/components/Banner/BannerSection";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return <>
  <BannerSection />
  </>;
}
