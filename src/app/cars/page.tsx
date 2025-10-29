import Footer from '@/Components/Footer'
import Header from '@/Components/Header'
import PhotoOverview from '@/Components/PhotoOverview'
import { peoplePhotos } from '@/utils/photos'
import React from 'react'

function page() {
  return (
    <div className="pt-40">
      <Header isScrolled={true} />
      <h2 className="font-volkhov py-5 text-2xl md:pl-40 pl-5">Cars</h2>
      <PhotoOverview photosArray={peoplePhotos} />
      <Footer />
    </div>
  )
}

export default page