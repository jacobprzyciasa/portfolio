import Footer from '@/Components/Footer'
import Header from '@/Components/Header'
import PhotosCategories from '@/Components/PhotosCategories'
import { events } from "@/utils/categories";
import React from 'react'

function page() {
  return (
    <div className='pt-40'>
      <Header isScrolled={true} />
      <h2 className='font-volkhov py-5 text-2xl md:pl-40 pl-5'>Events</h2>
      <PhotosCategories content={events} type='events' />
      <Footer />
    </div>
  )
}

export default page