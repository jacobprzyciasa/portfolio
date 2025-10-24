"use client";
import Header from "@/Components/Header";
import Image from "next/image";
import banner from "../../public/33.jpg";
import { useEffect, useState } from "react";
import Content from "@/Components/Content";
import Footer from "@/Components/Footer";

export default function Home() {
  const [scrollY, setScrollY] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative">
      <Header isScrolled={isScrolled} />
      <div className="w-full h-auto relative">
        <div className="relative top-0 left-0 w-full h-screen -z-10 overflow-hidden">
          {/* <div className="absolute bg-gradient-to-b from-[#FFFFFF30] to-transparent w-full h-full"></div> */}
          <Image
            src={banner}
            alt="banner"
            className="relative w-full h-full object-cover -z-10"
            style={{ transform: `translateY(${scrollY * 0.5}px)` }}
          />
        </div>
        <div className="absolute top-0 left-0 w-full flex justify-center items-center pt-12">
          <h2
            className={`text-[#898989] text-xs font-volkhov ${
              isScrolled ? "opacity-0" : "opacity-100"
            }`}
          >
            Photographer
          </h2>
        </div>
        <Content />
        <Footer />
      </div>
    </div>
  );
}
