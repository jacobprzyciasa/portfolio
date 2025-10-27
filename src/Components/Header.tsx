'use client'
import React, { useState, useEffect } from "react";
import HamburgerMenu from "./Hamburger";

function Header({isScrolled} : {isScrolled: boolean}) {
  return (
    <header className={`flex justify-center items-center w-screen fixed top-0 left-0 z-30 transition-all duration-300 h-14 ${
        isScrolled 
          ? 'bg-[#FFFFFF] ' 
          : 'bg-transparent'
      }`}>
        <a href="/" className={`absolute 2xl:left-20 left-5 top-0 bottom-0 my-auto h-fit cursor-pointer uppercase font-volkhov text-xs ${isScrolled ? 'text-black hover:text-[#00000050]' : 'text-white hover:text-[#FFFFFF50]'} transition-all`}>home</a>
      <h1 className={`${isScrolled ? 'text-black' : 'text-white'} font-bold text-xl font-volkhov italic`}>
        Jakub Przyciasa
      </h1>
      <ul className={`${isScrolled ? 'text-black' : 'text-white'} absolute 2xl:right-20 right-5 top-0 bottom-0 my-auto xl:flex hidden flex-row items-center gap-6 uppercase font-volkhov text-xs`}>
        <li className={`cursor-pointer ${isScrolled ? 'hover:text-[#00000050]' : 'hover:text-[#FFFFFF50]'} transition-all`}><a href="/people">people</a></li>
        <li className={`cursor-pointer ${isScrolled ? 'hover:text-[#00000050]' : 'hover:text-[#FFFFFF50]'} transition-all`}><a href="/concerts">concerts</a></li>
        <li className={`cursor-pointer ${isScrolled ? 'hover:text-[#00000050]' : 'hover:text-[#FFFFFF50]'} transition-all`}><a href="/cars">cars</a></li>
        <li className={`cursor-pointer ${isScrolled ? 'hover:text-[#00000050]' : 'hover:text-[#FFFFFF50]'} transition-all`}><a href="/places">places</a></li>
        <li className={`cursor-pointer ${isScrolled ? 'hover:text-[#00000050]' : 'hover:text-[#FFFFFF50]'} transition-all`}><a href="/clients">clients</a></li>
        <li className={`cursor-pointer ${isScrolled ? 'hover:text-[#00000050]' : 'hover:text-[#FFFFFF50]'} transition-all`}><a href="/about">about</a></li>
        <li className={`cursor-pointer ${isScrolled ? 'hover:text-[#00000050]' : 'hover:text-[#FFFFFF50]'} transition-all`}><a href="/connect">connect</a></li>
      </ul>
      <div className="xl:hidden absolut flex top-0 bottom-0 my-auto">
        <HamburgerMenu isScrolled={isScrolled} />
      </div>
    </header>
  );
}

export default Header;
