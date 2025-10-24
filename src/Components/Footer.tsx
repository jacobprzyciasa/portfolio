import React from 'react'
import ContactForm from './ContactForm'
import { FaInstagram } from "react-icons/fa";

function Footer() {
  return (
    <div className='w-full bg-white flex flex-col justify-center items-center mt-40 mb-10'>
        <p className='font-volkhov text-black text-lg mb-10'>If you want to collaborate, feel free to hit me up!</p>
        <ContactForm />
        <a href='https://www.instagram.com/jacobprzyciasa' target='_blank' className='flex flex-row justify-center items-center mt-10 gap-2 transition-all text-black hover:text-[#00000050]'>
          <p className='font-volkhov text-xs'>Follow me:</p>
          <FaInstagram />
        </a>
    </div>
  )
}

export default Footer