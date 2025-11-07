"use client";
import Footer from "@/Components/Footer";
import Header from "@/Components/Header";
import PhotosCategories from "@/Components/PhotosCategories";
import React, { useState } from "react";
import Image from "next/image";
import baner_password from "../../../public/baner_password.jpg";
import { FaArrowLeft } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa6";
import { clients } from "@/utils/categories";
import { toast } from "sonner";
import { login } from "./actions";
import InfiniteCarousel from "@/Components/Carousel";

export interface passwordScreenInterface {
  state: boolean,
  route: string
}

function page() {
  const [passwordScreen, setPasswordScreen] = useState<passwordScreenInterface>({state: false, route: "" });
  const [loadedBaner, setLoadedBaner] = useState(false);

  return (
    <div className="pt-40">
      <Header isScrolled={true} />
      <h2 className="font-volkhov py-5 text-2xl md:pl-40 pl-5">Clients</h2>
      <InfiniteCarousel />
      <PhotosCategories content={clients} type="clients" setPasswordScreen={setPasswordScreen} />
      <Footer />
      <div
        className={`top-0 left-0 w-full h-full bg-white z-99 ease-in transition-opacity ${
          passwordScreen.state ? " fixed " : " hidden "
        }`}
      >
        <Image
          src={baner_password}
          alt="banner"
          className={`relative w-full h-full object-cover -z-10 transition-opacity duration-300 ease-in ${
            loadedBaner ? "opacity-100" : "opacity-0"
          }`}
          onLoadingComplete={() => setLoadedBaner(true)}
        />
        <div className="absolute w-full h-full top-0 left-0 bg-[#00000050] flex justify-center items-center">
          <button
            className="text-xs text-white hover:text-[#FFFFFF50] font-volkhov uppercase cursor-pointer transition-all absolute top-10 left-10"
            onClick={() => setPasswordScreen({state: false, route: ""})}
          >
            back
          </button>
          <form className="relative flex justify-center items-center">
            <input type="text" name="path" value={passwordScreen.route} className="hidden" readOnly />
            <input
              type="password"
              name="password"
              placeholder="Password"
              required
              className="border border-black bg-[#FFFFFF50] backdrop-blur-lg rounded-xs h-14 sm:w-96 w-72 font-volkhov text-black placeholder:text-[#252525] px-5"
            />
            <button
              formAction={login}
              className="bg-black hover:bg-[#00000090] flex justify-center items-center transition-all rounded-xs h-14 w-14 font-volkhov text-white uppercase cursor-pointer"
            >
              <FaArrowRight className="text-2xl" />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default page;
