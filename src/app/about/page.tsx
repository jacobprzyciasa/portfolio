"use client";
import Footer from "@/Components/Footer";
import Header from "@/Components/Header";
import React from "react";
import Image from "next/image";
import { useState } from "react";
import baner_me from "../../../public/baner_me.jpg";

function page() {
  const [loadedBaner, setLoadedBaner] = useState(false);
  return (
    <div className="pt-40">
      <Header isScrolled={true} />
      <h2 className="font-volkhov py-5 text-2xl md:pl-40 pl-5">About</h2>
      <p className="font-volkhov py-5 text-sm md:px-40 px-5 2xl:w-1/2 xl:w-3/5 md:w-4/5 w-full">
        Hi, I'm Jacob and I am photographer from Poland. Since the age of 15, I have been creating photos that reflect my style and help others in their various projects. I have completed a professional portrait photography course and have been awarded in local and international photography competitions. In my photography journey I had a pleasure to work with firms like Autodrom Sosnowiec, Wynajmij Studio and FD Studio. If you need the highest quality photos for an event, project or just for fun, feel free to contact me. Together, we will create amazing things!
      </p>
      <div className="relative w-full h-120 flex justify-center items-center mt-20">
        <Image
          src={baner_me}
          alt="Me"
          className="relative w-full h-full object-[center_20%] object-cover"
          onLoadingComplete={() => setLoadedBaner(true)}
        />
      </div>
      <Footer />
    </div>
  );
}

export default page;
