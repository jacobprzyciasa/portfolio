'use client'
import React from 'react'
import Image from 'next/image'
import { useState, Dispatch, SetStateAction } from 'react';
import { Categories } from '@/utils/categories'
import { passwordScreenInterface } from '@/app/clients/page';

function CategoryTile({category, type, setPasswordScreen}: {category: Categories, type: "events" | "clients", setPasswordScreen?: Dispatch<SetStateAction<passwordScreenInterface>>}) {
    const [loadedBaner, setLoadedBaner] = useState(false);
  return (
     <div className={`relative w-full h-120 overflow-hidden transition-opacity duration-300 ease-in ${
                    loadedBaner ? 'opacity-100' : 'opacity-0'
                  }`}>

        <div className='relative w-full h-full flex justify-center items-center'>
            <Image
              src={category.coverPhoto}
              alt={category.title}
              className="relative w-full h-full object-cover"
              onLoadingComplete={() => setLoadedBaner(true)}
            />
            <div className='bg-linear-to-t sm:from-[#00000080] from-[#000000ce] to-transparent absolute top-0 left-0 w-full h-full'></div>
        </div>

      <div className='absolute right-0 bottom-0 w-full sm:p-10 p-5'>
          <h2 className="sm:text-3xl text-xl font-bold font-volkhov mb-10 w-full text-left text-white">{category.title}</h2>
          <div className='w-full flex justify-end'>
            {type === "events" ? <a href={category.url} className='bg-white hover:bg-[#FFFFFF90] flex justify-center items-center transition-all rounded-xs h-14 w-40 font-volkhov text-black uppercase cursor-pointer'>
              See The Show
            </a> : <button onClick={setPasswordScreen ? () => setPasswordScreen({state: true, route: category.url}) : undefined} className='bg-white hover:bg-[#FFFFFF90] flex justify-center items-center transition-all rounded-xs h-14 w-40 font-volkhov text-black uppercase cursor-pointer'>
              See Case Study
            </button>}
          </div>
      </div>
    </div>
  )
}

export default CategoryTile