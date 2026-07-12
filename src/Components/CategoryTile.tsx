'use client'
import React from 'react'
import Image from 'next/image'
import { useState } from 'react';
import type { Category } from '@/utils/gallery'

function CategoryTile({category, type}: {category: Category, type: "events" | "projects"}) {
    const [loadedBaner, setLoadedBaner] = useState(false);
    const buttonLabel = type === "events" ? "See The Show" : "See Case Study";

  return (
     <div className={`portfolio-reveal relative h-[70svh] min-h-[420px] w-full overflow-hidden transition-opacity duration-500 ease-in ${
                    loadedBaner ? 'opacity-100' : 'opacity-0'
                  }`}>

        <div className='relative w-full h-full flex justify-center items-center'>
            <Image
              src={category.coverPhoto}
              alt={category.title}
              fill
              unoptimized
              sizes="100vw"
              className="object-cover"
              onLoadingComplete={() => setLoadedBaner(true)}
            />
            <div className='absolute left-0 top-0 h-full w-full bg-gradient-to-t from-obsidian via-obsidian/25 to-transparent'></div>
        </div>

      <div className='absolute bottom-0 right-0 w-full p-5 sm:p-10'>
          <p className="mb-3 font-body text-[10px] uppercase tracking-mega text-flare">
            {type === "events" ? "/ Event" : "/ Project"}
          </p>
          <h2 className="mb-10 w-full text-left font-heading text-5xl uppercase leading-none text-linen sm:text-7xl">{category.title}</h2>
          <div className='w-full flex justify-end'>
            <a href={category.url} data-cursor="viewfinder" data-cursor-label="OPEN" className='flex h-14 w-44 cursor-pointer items-center justify-center bg-flare text-center font-heading text-base uppercase tracking-wide text-obsidian transition-all hover:bg-linen'>
              {buttonLabel}
            </a>
          </div>
      </div>
    </div>
  )
}

export default CategoryTile
