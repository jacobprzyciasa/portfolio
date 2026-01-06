import Footer from '@/Components/Footer'
import Header from '@/Components/Header'
import PhotoGallery from '@/Components/PhotoGallery'
import PhotoOverview from '@/Components/PhotoOverview'
import { travelPhotos } from '@/utils/places'
import React from 'react'

function page() {
  return (
    <div className='pt-40'>
      <Header isScrolled={true} />
      <h2 className='font-volkhov py-5 text-2xl md:pl-40 pl-5'>Places</h2>
      <PhotoOverview photosArray={travelPhotos} />
      <Footer />
    </div>
  )
}

export default page