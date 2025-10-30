"use client";
import ContactForm from "@/Components/ContactForm";
import Header from "@/Components/Header";
import React from "react";
import { useState } from "react";
import { FaInstagram } from "react-icons/fa";

function page() {
  const [loadedBaner, setLoadedBaner] = useState(false);
  return (
    <div className="pt-40">
      <Header isScrolled={true} />
      <h2 className="font-volkhov py-5 text-2xl md:pl-40 pl-5">Connect</h2>
      <div className="flex xl:flex-row flex-col md:px-40 px-5 gap-20">
        <div className="font-volkhov py-5 text-sm w-full">If you want me to help you with your project, or you just want a photoshoot for yourself, feel free to hit me up and let's talk about your idea together. I'll be glad to help you!<br /><br />You can use form on this site or write on my email. You can also contact me via instagram.<br /><br />Email:<br />jakubprzyciasa@gmail.com<br /><br />Instagram:<br /><a href="https://www.instagram.com/jacobprzyciasa" target="_blank">@jacobprzyciasa</a></div>
        <div className="w-full">
          <ContactForm />
        </div>
      </div>
      <a
        href="https://www.instagram.com/jacobprzyciasa"
        target="_blank"
        className="flex flex-row justify-center items-center my-10 gap-2 transition-all text-black hover:text-[#00000050]"
      >
        <p className="font-volkhov text-xs">Follow me:</p>
        <FaInstagram />
      </a>
    </div>
  );
}

export default page;
