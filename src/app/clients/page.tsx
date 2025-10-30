'use client'
import Footer from '@/Components/Footer'
import Header from '@/Components/Header'
import PhotosCategories from '@/Components/PhotosCategories'
import React, { useState } from 'react'
import Image from 'next/image'
import baner_password from '../../../public/baner_password.jpg'
import { FaArrowLeft } from "react-icons/fa6";

function page() {
  const [passwordScreen, setPasswordScreen] = useState<boolean>(false)
  const [loadedBaner, setLoadedBaner] = useState(false);
  return (
    <div className='pt-40'>
      <Header isScrolled={true} />
      <h2 className='font-volkhov py-5 text-2xl md:pl-40 pl-5'>Clients</h2>
      <PhotosCategories type='clients' setPasswordScreen={setPasswordScreen} />
      <Footer />
      <div className={`top-0 left-0 w-full h-full bg-white z-99 ease-in transition-opacity ${passwordScreen ? " fixed " : " hidden "}`}>
        <Image
            src={baner_password}
            alt="banner"
            className={`relative w-full h-full object-cover -z-10 transition-opacity duration-300 ease-in ${
                    loadedBaner ? 'opacity-100' : 'opacity-0'
                  }`}
            onLoadingComplete={() => setLoadedBaner(true)}
          />
          <div className='absolute w-full h-full top-0 left-0 bg-[#00000050] flex justify-center items-center'>
            <FaArrowLeft className='text-white text-2xl cursor-pointer' />

          </div>
      </div>
    </div>
  )
}

export default page