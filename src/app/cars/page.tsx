import Footer from '@/Components/Footer'
import Header from '@/Components/Header'
import PhotoGallery from '@/Components/PhotoGallery'
import { peoplePhotos } from '@/utils/photos'
import React from 'react'

function page() {
  return (
    <div className='pt-40'>
      <Header isScrolled={true} />
      <h2 className='font-volkhov py-5 text-2xl md:pl-40 pl-5'>Cars</h2>
      <div className='w-full'>
        <PhotoGallery photoSet={peoplePhotos} />
      </div>
      <Footer />
    </div>
  )
}

export default page