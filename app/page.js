import Ads from "@/components/home/Ads";
import Banner from "@/components/home/Banner";
import Features from "@/components/home/Features";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Banner />
      <div className="container py-16">
        <Features />
        <Ads />
      </div>
    </>
  );
}
