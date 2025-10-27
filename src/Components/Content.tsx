import React from 'react'
import PhotoGallery from './PhotoGallery'
import { mainPagePhotos } from '@/utils/photos'

function Content() {
  return (
    <div className='w-full'>
        <PhotoGallery photoSet={mainPagePhotos} />
    </div>
  )
}

export default Content