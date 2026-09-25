import All_Furniture from "@/components/home/all-furniture";
import Footer from "@/components/home/Footer";
import Hero from "@/components/home/hero";
import Navbar from "@/components/home/navbar";
import Service from "@/components/home/service";
import VideoWork from "@/components/home/videoW";
import Image from "next/image";

export default function Home() {
  return (
    <div className="">
      <Navbar />
      <Hero/>
      <All_Furniture />
      <Service/>
      <VideoWork />
      <Footer/>
    </div>
  );
}
