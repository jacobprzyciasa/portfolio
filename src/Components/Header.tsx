'use client'
import React, { useState, useEffect } from "react";

function Header({isScrolled} : {isScrolled: boolean}) {
  return (
    <header className={`flex justify-center items-center w-screen fixed top-0 left-0 z-30 transition-all duration-300 h-14 ${
        isScrolled 
          ? 'bg-[#FFFFFF] ' 
          : 'bg-transparent'
      }`}>
        <a href="/" className={`absolute left-20 top-0 bottom-0 my-auto h-fit cursor-pointer uppercase font-volkhov text-xs ${isScrolled ? 'text-black hover:text-[#00000050]' : 'text-white hover:text-[#FFFFFF50]'} transition-all`}>home</a>
      <h1 className={`${isScrolled ? 'text-black' : 'text-white'} font-bold text-xl font-volkhov italic mt-1`}>
        Jakub Przyciasa
      </h1>
      <ul className={`${isScrolled ? 'text-black' : 'text-white'} absolute right-20 top-0 bottom-0 my-auto flex flex-row items-center gap-6 uppercase font-volkhov text-xs`}>
        <li className={`cursor-pointer ${isScrolled ? 'hover:text-[#00000050]' : 'hover:text-[#FFFFFF50]'} transition-all`}>people</li>
        <li className={`cursor-pointer ${isScrolled ? 'hover:text-[#00000050]' : 'hover:text-[#FFFFFF50]'} transition-all`}>concerts</li>
        <li className={`cursor-pointer ${isScrolled ? 'hover:text-[#00000050]' : 'hover:text-[#FFFFFF50]'} transition-all`}>cars</li>
        <li className={`cursor-pointer ${isScrolled ? 'hover:text-[#00000050]' : 'hover:text-[#FFFFFF50]'} transition-all`}>places</li>
        <li className={`cursor-pointer ${isScrolled ? 'hover:text-[#00000050]' : 'hover:text-[#FFFFFF50]'} transition-all`}>clients</li>
        <li className={`cursor-pointer ${isScrolled ? 'hover:text-[#00000050]' : 'hover:text-[#FFFFFF50]'} transition-all`}>about</li>
        <li className={`cursor-pointer ${isScrolled ? 'hover:text-[#00000050]' : 'hover:text-[#FFFFFF50]'} transition-all`}>connect</li>
      </ul>
    </header>
  );
}

export default Header;
