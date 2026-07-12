import React, { useState, useEffect } from "react";

interface HamburgerMenuProps {
  isScrolled?: boolean;
}

function HamburgerMenu({ isScrolled }: HamburgerMenuProps) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative">
      {/* Hamburger Button */}
      <button
        onClick={toggleMenu}
        className={`fixed top-3 right-5 z-50 flex flex-col justify-center items-center w-8 h-8 focus:outline-none`}
        aria-label="Toggle menu"
      >
        <span
          className={`block w-6 h-0.5 ${
            isScrolled ? "bg-black" : "bg-white"
          } transition-all duration-200 ${
            isOpen ? "rotate-45 translate-y-0.5" : "mb-1"
          }`}
        />
        <span
          className={`block w-6 h-0.5 ${
            isScrolled ? "bg-black" : "bg-white"
          } transition-all duration-200 ${isOpen ? "opacity-0" : "mb-1"}`}
        />
        <span
          className={`block w-6 h-0.5 ${
            isScrolled ? "bg-black" : "bg-white"
          } transition-all duration-200 ${
            isOpen ? "-rotate-45 -translate-y-0.5" : ""
          }`}
        />
      </button>

      {/* Dropdown Menu */}
      <div
        className={`fixed top-12 right-6 w-fit bg-white rounded-[2px] px-7 py-3 shadow-lg z-40 overflow-hidden transition-all duration-200 ease-out ${
          isOpen
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-2 pointer-events-none"
        }`}
      >
        <ul className="flex flex-col py-2 font-volkhov text-xs gap-3 font-light uppercase">
          <li
            className={`cursor-pointer ${
              isScrolled ? "hover:text-[#00000050]" : "hover:text-[#FFFFFF50]"
            } transition-all`}
          >
            <a href="/people">people</a>
          </li>
          <li
            className={`cursor-pointer ${
              isScrolled ? "hover:text-[#00000050]" : "hover:text-[#FFFFFF50]"
            } transition-all`}
          >
            <a href="/events">events</a>
          </li>
          <li
            className={`cursor-pointer ${
              isScrolled ? "hover:text-[#00000050]" : "hover:text-[#FFFFFF50]"
            } transition-all`}
          >
            <a href="/cars">cars</a>
          </li>
          <li
            className={`cursor-pointer ${
              isScrolled ? "hover:text-[#00000050]" : "hover:text-[#FFFFFF50]"
            } transition-all`}
          >
            <a href="/places">places</a>
          </li>
          <li
            className={`cursor-pointer ${
              isScrolled ? "hover:text-[#00000050]" : "hover:text-[#FFFFFF50]"
            } transition-all`}
          >
            <a href="/projects">projects</a>
          </li>
          <li
            className={`cursor-pointer ${
              isScrolled ? "hover:text-[#00000050]" : "hover:text-[#FFFFFF50]"
            } transition-all`}
          >
            <a href="/about">about</a>
          </li>
          <li
            className={`cursor-pointer ${
              isScrolled ? "hover:text-[#00000050]" : "hover:text-[#FFFFFF50]"
            } transition-all`}
          >
            <a href="/connect">connect</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default HamburgerMenu;
