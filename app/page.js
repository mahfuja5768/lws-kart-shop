import Ads from "@/components/home/Ads";
import Banner from "@/components/home/Banner";
import Categories from "@/components/home/Categories";
import Features from "@/components/home/Features";
import TopArrival from "@/components/home/TopArrival";
import TrendingProducts from "@/components/home/TrendingProducts";

export default function Home() {
  return (
    <>
      <Banner />
      <Features />
      <Categories />
      <TopArrival />
      <Ads />
      <TrendingProducts />
    </>
  );
}
