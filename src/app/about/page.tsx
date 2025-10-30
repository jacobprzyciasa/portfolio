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
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reprehenderit
        nesciunt inventore possimus eius nobis odio voluptas ea maxime adipisci
        quo sed id iste perferendis non, beatae iusto hic sint amet? Lorem ipsum
        dolor sit amet consectetur adipisicing elit. Tempora, reprehenderit
        perferendis. Quisquam, repellendus a. Quia vel, labore, ducimus
        perferendis ratione placeat quod possimus consequuntur rerum tempore,
        natus illum delectus accusamus. Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Assumenda neque molestias placeat ipsum temporibus
        tempore commodi. Porro, aliquid beatae. Ut ad numquam voluptas culpa
        doloribus, corporis consequatur eius deleniti et.
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
