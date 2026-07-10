"use client";
import Header from "@/Components/Header";
import Image from "next/image";
import banner from "../../public/baner.jpg";
import baner_mobile from "../../public/baner_mobile.jpg";
import { useEffect, useState } from "react";
import Content from "@/Components/Content";
import Footer from "@/Components/Footer";

export default function Home() {
  const [scrollY, setScrollY] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(false); 
  const [loadedBaner, setLoadedBaner] = useState(false);

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

  useEffect(() => {
    const detectMobile = () => {
      // Common breakpoint for mobile devices
      const isSmallScreen = window.innerWidth < 768; 
      setIsMobile(isSmallScreen);
    };

    detectMobile(); // Run once on mount

    // Add event listener for resize to re-detect if screen size changes
    window.addEventListener('resize', detectMobile);

    return () => window.removeEventListener('resize', detectMobile);
  }, []);

  return (
    <div className="relative">
      <Header isScrolled={isScrolled} />
      <div className="w-full h-auto relative">
        <div className="relative top-0 left-0 w-full h-screen -z-10 overflow-hidden">
          {/* <div className="absolute bg-gradient-to-b from-[#FFFFFF30] to-transparent w-full h-full"></div> */}
          <Image
            src={isMobile ? baner_mobile : banner}
            alt="banner"
            className={`relative w-full h-full object-cover -z-10 transition-opacity duration-300 ease-in ${
                    loadedBaner ? 'opacity-100' : 'opacity-0'
                  }`}
            style={{ transform: `translateY(${scrollY * 0.5}px)` }}
            onLoadingComplete={() => setLoadedBaner(true)}
          />
        </div>
        <div className={`absolute top-0 left-0 w-full flex justify-center items-center pt-12 transition-opacity duration-300 ease-in ${
                    loadedBaner ? 'opacity-100' : 'opacity-0'
                  }`}>
          <h2
            className={`text-[#898989] text-xs font-volkhov ${
              isScrolled ? "opacity-0" : "opacity-100"
            }`}
          >
            Photographer & film
          </h2>
        </div>
        <Content />
        <Footer />
      </div>
    </div>
  );
}
