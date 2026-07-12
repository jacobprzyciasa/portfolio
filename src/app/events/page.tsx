import Footer from '@/Components/Footer'
import Header from '@/Components/Header'
import PhotosCategories from '@/Components/PhotosCategories'
import { getGalleryCategories } from "@/utils/gallery";
import React from 'react'

export const dynamic = "force-dynamic";

function page() {
  return (
    <div className='min-h-screen bg-obsidian pt-32 text-linen md:pt-40'>
      <Header isScrolled={true} />
      <div className="px-5 pb-8 md:px-10">
        <p className="font-body text-[10px] uppercase tracking-mega text-flare">/ Index</p>
        <h2 className="font-heading py-3 text-5xl uppercase leading-none md:text-7xl">Events</h2>
      </div>
      <PhotosCategories content={getGalleryCategories("events")} type='events' />
      <Footer />
    </div>
  )
}

export default page
